import fs from 'node:fs'
import path from 'node:path'

export const MOD_IMAGE_MAX_EDGE = 512

type ImageFormat = 'png' | 'jpeg' | 'webp'

function formatFromExtension(fileName: string): ImageFormat | null {
	const ext = path.extname(fileName).toLowerCase()
	if (ext === '.png') return 'png'
	if (ext === '.jpg' || ext === '.jpeg') return 'jpeg'
	if (ext === '.webp') return 'webp'
	return null
}

function pngSize(buf: Buffer): { width: number; height: number } | null {
	if (buf.length < 24) return null
	const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])
	if (!buf.subarray(0, 8).equals(signature)) return null
	if (buf.toString('ascii', 12, 16) !== 'IHDR') return null
	return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) }
}

function jpegSize(buf: Buffer): { width: number; height: number } | null {
	if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null
	let offset = 2
	while (offset + 8 < buf.length) {
		if (buf[offset] !== 0xff) return null
		while (offset < buf.length && buf[offset] === 0xff) offset++
		if (offset >= buf.length) return null
		const marker = buf[offset]
		offset++
		if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd9)) continue
		if (offset + 1 >= buf.length) return null
		const length = buf.readUInt16BE(offset)
		if (length < 2) return null
		const sof = (marker >= 0xc0 && marker <= 0xc3) || (marker >= 0xc5 && marker <= 0xc7) || (marker >= 0xc9 && marker <= 0xcb) || (marker >= 0xcd && marker <= 0xcf)
		if (sof) {
			if (offset + 7 > buf.length) return null
			return { height: buf.readUInt16BE(offset + 3), width: buf.readUInt16BE(offset + 5) }
		}
		offset += length
	}
	return null
}

function webpSize(buf: Buffer): { width: number; height: number } | null {
	if (buf.length < 30) return null
	if (buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') return null
	const type = buf.toString('ascii', 12, 16)
	if (type === 'VP8X') {
		const width = 1 + buf[24] + (buf[25] << 8) + (buf[26] << 16)
		const height = 1 + buf[27] + (buf[28] << 8) + (buf[29] << 16)
		return { width, height }
	}
	if (type === 'VP8L') {
		if (buf[20] !== 0x2f) return null
		const b0 = buf[21]
		const b1 = buf[22]
		const b2 = buf[23]
		const b3 = buf[24]
		const width = 1 + (b0 | ((b1 & 0x3f) << 8))
		const height = 1 + ((b1 >> 6) | (b2 << 2) | ((b3 & 0x0f) << 10))
		return { width, height }
	}
	if (type === 'VP8 ') {
		if (buf[23] !== 0x9d || buf[24] !== 0x01 || buf[25] !== 0x2a) return null
		return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff }
	}
	return null
}

function detectImage(buf: Buffer): { format: ImageFormat; width: number; height: number } | null {
	const png = pngSize(buf)
	if (png) return { format: 'png', ...png }
	const jpeg = jpegSize(buf)
	if (jpeg) return { format: 'jpeg', ...jpeg }
	const webp = webpSize(buf)
	if (webp) return { format: 'webp', ...webp }
	return null
}

/** Returns an error message if the declared artwork is invalid; otherwise `null`. */
export function validateModImage(filePath: string, declaredName: string): string | null {
	const expectedFormat = formatFromExtension(declaredName)
	if (!expectedFormat) {
		return `${declaredName} must be png, jpg/jpeg, or webp.`
	}
	if (!fs.existsSync(filePath)) {
		return `${declaredName} is declared by manifest.image but does not exist.`
	}
	const detected = detectImage(fs.readFileSync(filePath))
	if (!detected) {
		return `${declaredName} is not a valid png, jpg/jpeg, or webp image.`
	}
	if (detected.format !== expectedFormat) {
		return `${declaredName} extension does not match its actual ${detected.format} contents.`
	}
	if (detected.width !== detected.height) {
		return `${declaredName} must be square (got ${detected.width}×${detected.height}).`
	}
	if (detected.width > MOD_IMAGE_MAX_EDGE) {
		return `${declaredName} must be at most ${MOD_IMAGE_MAX_EDGE}×${MOD_IMAGE_MAX_EDGE} (got ${detected.width}×${detected.height}).`
	}
	return null
}
