import { Dice, type DiceCollisionEvent, type DiceMaterial, type DiceResult } from '@fate-app/mod-types'
import * as CANNON from 'cannon-es'
import * as THREE from 'three'
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import d20Icon from './d20.svg'

interface FaceUpAmount {
	value: number
	amount: number
}

const FACE_VALUES = [20, 8, 14, 2, 11, 17, 5, 3, 16, 10, 19, 7, 13, 1, 12, 18, 6, 4, 15, 9]

function createNumberMesh(number: number, material: DiceMaterial): THREE.Mesh | null {
	const canvas = document.createElement('canvas')
	const context = canvas.getContext('2d')

	if (!context) {
		return null
	}

	canvas.width = 128
	canvas.height = 128
	context.font = 'bold 80px Arial'
	context.fillStyle = 'white'
	context.textAlign = 'center'
	context.textBaseline = 'middle'
	context.fillText(number.toString(), 64, 64)

	const numberMaterial = material.symbolMaterial.clone() as THREE.MeshStandardMaterial
	numberMaterial.map = new THREE.CanvasTexture(canvas)
	numberMaterial.transparent = true

	return new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.5), numberMaterial)
}

function createD20Geometry(size: number): THREE.BufferGeometry {
	return mergeVertices(new THREE.IcosahedronGeometry(size, 0))
}

function getFaceData(geometry: THREE.BufferGeometry): Array<{ normal: THREE.Vector3; center: THREE.Vector3 }> {
	const normalAttribute = geometry.getAttribute('normal')
	const positionAttribute = geometry.getAttribute('position')
	const faces: Array<{ normal: THREE.Vector3; center: THREE.Vector3 }> = []

	for (let index = 0; index < normalAttribute.count; index += 3) {
		const normal = new THREE.Vector3().fromBufferAttribute(normalAttribute, index)
		if (faces.some(face => face.normal.equals(normal))) {
			continue
		}

		const center = new THREE.Vector3().fromBufferAttribute(positionAttribute, index)
		center.add(new THREE.Vector3().fromBufferAttribute(positionAttribute, index + 1))
		center.add(new THREE.Vector3().fromBufferAttribute(positionAttribute, index + 2))
		center.divideScalar(3)
		faces.push({ normal, center })
	}

	return faces
}

function createDiceMesh(material: DiceMaterial, size: number): THREE.Group {
	const group = new THREE.Group()
	const geometry = createD20Geometry(size)
	const outerMesh = new THREE.Mesh(geometry, material.faceMaterial)

	outerMesh.castShadow = true
	outerMesh.receiveShadow = true
	group.add(outerMesh)

	getFaceData(geometry).forEach((face, index) => {
		const value = FACE_VALUES[index]
		if (value === undefined) {
			return
		}

		const numberMesh = createNumberMesh(value, material)
		if (!numberMesh) {
			return
		}
		numberMesh.position.copy(face.center).addScaledVector(face.normal, 0.01)
		numberMesh.lookAt(face.center.clone().add(face.normal))
		group.add(numberMesh)
	})

	return group
}

function createDiceBody(world: CANNON.World, size: number, mass: number, onCollide: (event: DiceCollisionEvent) => void): CANNON.Body {
	const body = new CANNON.Body({
		mass,
		sleepTimeLimit: 0.3
	})
	const scale = size * 0.55
	const goldenRatio = (1 + Math.sqrt(5)) / 2
	const vertices = [
		[-1, goldenRatio, 0],
		[1, goldenRatio, 0],
		[-1, -goldenRatio, 0],
		[1, -goldenRatio, 0],
		[0, -1, goldenRatio],
		[0, 1, goldenRatio],
		[0, -1, -goldenRatio],
		[0, 1, -goldenRatio],
		[goldenRatio, 0, -1],
		[goldenRatio, 0, 1],
		[-goldenRatio, 0, -1],
		[-goldenRatio, 0, 1]
	].map(vertex => new CANNON.Vec3(vertex[0] * scale, vertex[1] * scale, vertex[2] * scale))
	const faces = [
		[0, 11, 5],
		[0, 5, 1],
		[0, 1, 7],
		[0, 7, 10],
		[0, 10, 11],
		[1, 5, 9],
		[5, 11, 4],
		[11, 10, 2],
		[10, 7, 6],
		[7, 1, 8],
		[3, 9, 4],
		[3, 4, 2],
		[3, 2, 6],
		[3, 6, 8],
		[3, 8, 9],
		[4, 9, 5],
		[2, 4, 11],
		[6, 2, 10],
		[8, 6, 7],
		[9, 8, 1]
	]

	body.addShape(new CANNON.ConvexPolyhedron({ vertices, faces }))
	body.collisionResponse = true
	body.collisionFilterGroup = 1
	body.collisionFilterMask = 1
	body.angularDamping = 0.3
	body.linearDamping = 0.3
	body.sleepSpeedLimit = 0.4
	body.sleepTimeLimit = 0.5
	body.allowSleep = true
	body.addEventListener('collide', onCollide)
	world.addBody(body)

	return body
}

function getD20Value(dice: Dice): number {
	const group = dice.mesh as THREE.Group
	const diceMesh = group.children.find(child => child instanceof THREE.Mesh && child.geometry instanceof THREE.BufferGeometry) as THREE.Mesh | undefined

	if (!diceMesh) {
		return 1
	}

	const rotation = new THREE.Matrix4().extractRotation(diceMesh.matrixWorld)
	const facesUp: FaceUpAmount[] = getFaceData(diceMesh.geometry)
		.map((face, index) => ({
			value: FACE_VALUES[index] ?? 1,
			amount: face.normal.clone().applyMatrix4(rotation).normalize().dot(new THREE.Vector3(0, 1, 0))
		}))
		.sort((left, right) => right.amount - left.amount)

	return facesUp[0]?.value ?? 1
}

export default class D20Dice extends Dice {
	static name = 'D20'
	static icon = d20Icon

	constructor(material: DiceMaterial, size: number, quality: number, mass: number, world: CANNON.World, onCollide: (event: DiceCollisionEvent) => void) {
		super(material, size, quality, mass, world, onCollide)
	}

	public getResult(): number {
		return getD20Value(this)
	}

	public formatResult(result: number | number[]): DiceResult {
		const values = Array.isArray(result) ? result : [result]
		const value = values.reduce((sum, current) => sum + current, 0)

		return {
			value,
			values,
			text: values.join(', '),
			color: values.every(current => current === 20) ? 'success' : values.every(current => current === 1) ? 'danger' : 'medium'
		}
	}

	public changeMaterial(material: DiceMaterial): void {
		this.material = material
		this.mesh = this.createMesh()
	}

	protected createMesh(): THREE.Group {
		return createDiceMesh(this.material, this.size)
	}

	protected createBody(world: CANNON.World, onCollide: (event: DiceCollisionEvent) => void): CANNON.Body {
		return createDiceBody(world, this.size, this.mass, onCollide)
	}

	public clone(): Dice {
		const clone = new D20Dice(this.material, this.size, this.quality, this.mass, this.world, this.onCollide)
		clone.body.position.copy(this.body.position)
		clone.body.quaternion.copy(this.body.quaternion)
		clone.mesh.position.copy(this.mesh.position as THREE.Vector3)
		clone.mesh.quaternion.copy(this.mesh.quaternion as THREE.Quaternion)
		return clone
	}
}
