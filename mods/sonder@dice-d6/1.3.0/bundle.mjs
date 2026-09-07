//#region node_modules/.pnpm/@fate-app+mod-types@2.0.0_cannon-es@0.20.0_three@0.185.1_vue@3.5.40/node_modules/@fate-app/mod-types/dist/bundle.js
function e(e) {
	return e;
}
//#endregion
//#region node_modules/.pnpm/@fate-app+mod-types@2.0.0_cannon-es@0.20.0_three@0.185.1_vue@3.5.40/node_modules/@fate-app/mod-types/dist/dice.js
var t = class {
	name;
	faceMaterial;
	symbolMaterial;
	previewColor;
	constructor(e, t, n, r) {
		this.name = e, this.faceMaterial = t, this.symbolMaterial = n, this.previewColor = r;
	}
}, n = class {
	material;
	size;
	quality;
	mass;
	world;
	onCollide;
	static name;
	static icon;
	mesh;
	body;
	constructor(e, t, n, r, i, a) {
		this.material = e, this.size = t, this.quality = n, this.mass = r, this.world = i, this.onCollide = a, this.mesh = this.createMesh(), this.body = this.createBody(this.world, this.onCollide);
	}
}, r = globalThis.FateSDK.dice.three;
r.ACESFilmicToneMapping, r.AddEquation, r.AddOperation, r.AdditiveAnimationBlendMode, r.AdditiveBlending, r.AgXToneMapping, r.AlphaFormat, r.AlwaysCompare, r.AlwaysDepth, r.AlwaysStencilFunc, r.AmbientLight, r.AnimationAction, r.AnimationClip, r.AnimationLoader, r.AnimationMixer, r.AnimationObjectGroup, r.AnimationUtils, r.ArcCurve, r.ArrayCamera, r.ArrowHelper, r.AttachedBindMode, r.Audio, r.AudioAnalyser, r.AudioContext, r.AudioListener, r.AudioLoader, r.AxesHelper, r.BackSide, r.BasicDepthPacking, r.BasicShadowMap, r.BatchedMesh, r.BezierInterpolant, r.Bone, r.BooleanKeyframeTrack, r.Box2, r.Box3, r.Box3Helper;
var i = r.BoxGeometry;
r.BoxHelper, r.BufferAttribute, r.BufferGeometry, r.BufferGeometryLoader, r.ByteType, r.Cache, r.Camera, r.CameraHelper, r.CanvasTexture, r.CapsuleGeometry, r.CatmullRomCurve3, r.CineonToneMapping;
var a = r.CircleGeometry;
r.ClampToEdgeWrapping, r.Clock, r.Color, r.ColorKeyframeTrack, r.ColorManagement, r.Compatibility, r.CompressedArrayTexture, r.CompressedCubeTexture, r.CompressedTexture, r.CompressedTextureLoader, r.ConeGeometry, r.ConstantAlphaFactor, r.ConstantColorFactor, r.Controls, r.CubeCamera, r.CubeDepthTexture, r.CubeReflectionMapping, r.CubeRefractionMapping, r.CubeTexture, r.CubeTextureLoader, r.CubeUVReflectionMapping, r.CubicBezierCurve, r.CubicBezierCurve3, r.CubicInterpolant, r.CullFaceBack, r.CullFaceFront, r.CullFaceFrontBack, r.CullFaceNone, r.Curve, r.CurvePath, r.CustomBlending, r.CustomToneMapping, r.CylinderGeometry, r.Cylindrical, r.Data3DTexture, r.DataArrayTexture, r.DataTexture, r.DataTextureLoader, r.DataUtils, r.DecrementStencilOp, r.DecrementWrapStencilOp, r.DefaultLoadingManager, r.DepthFormat, r.DepthStencilFormat, r.DepthTexture, r.DetachedBindMode, r.DirectionalLight, r.DirectionalLightHelper, r.DiscreteInterpolant, r.DodecahedronGeometry, r.DoubleSide, r.DstAlphaFactor, r.DstColorFactor, r.DynamicCopyUsage, r.DynamicDrawUsage, r.DynamicReadUsage, r.EdgesGeometry, r.EllipseCurve, r.EqualCompare, r.EqualDepth, r.EqualStencilFunc, r.EquirectangularReflectionMapping, r.EquirectangularRefractionMapping, r.Euler, r.EventDispatcher, r.ExternalTexture, r.ExtrudeGeometry, r.FileLoader, r.Float16BufferAttribute, r.Float32BufferAttribute, r.FloatType, r.Fog, r.FogExp2, r.FramebufferTexture, r.FrontSide, r.Frustum, r.FrustumArray, r.GLBufferAttribute, r.GLSL1, r.GLSL3, r.GreaterCompare, r.GreaterDepth, r.GreaterEqualCompare, r.GreaterEqualDepth, r.GreaterEqualStencilFunc, r.GreaterStencilFunc, r.GridHelper;
var o = r.Group;
r.HTMLTexture, r.HalfFloatType, r.HemisphereLight, r.HemisphereLightHelper, r.IcosahedronGeometry, r.ImageBitmapLoader, r.ImageLoader, r.ImageUtils, r.IncrementStencilOp, r.IncrementWrapStencilOp, r.InstancedBufferAttribute, r.InstancedBufferGeometry, r.InstancedInterleavedBuffer, r.InstancedMesh, r.Int16BufferAttribute, r.Int32BufferAttribute, r.Int8BufferAttribute, r.IntType, r.InterleavedBuffer, r.InterleavedBufferAttribute, r.Interpolant, r.InterpolateBezier, r.InterpolateDiscrete, r.InterpolateLinear, r.InterpolateSmooth, r.InterpolationSamplingMode, r.InterpolationSamplingType, r.InvertStencilOp, r.KeepStencilOp, r.KeyframeTrack, r.LOD, r.LatheGeometry, r.Layers, r.LessCompare, r.LessDepth, r.LessEqualCompare, r.LessEqualDepth, r.LessEqualStencilFunc, r.LessStencilFunc, r.Light, r.LightProbe, r.Line, r.Line3, r.LineBasicMaterial, r.LineCurve, r.LineCurve3, r.LineDashedMaterial, r.LineLoop, r.LineSegments, r.LinearFilter, r.LinearInterpolant, r.LinearMipMapLinearFilter, r.LinearMipMapNearestFilter, r.LinearMipmapLinearFilter, r.LinearMipmapNearestFilter, r.LinearSRGBColorSpace, r.LinearToneMapping, r.LinearTransfer, r.Loader, r.LoaderUtils, r.LoadingManager, r.LoopOnce, r.LoopPingPong, r.LoopRepeat, r.MOUSE, r.Material, r.MaterialBlending, r.MaterialLoader, r.MathUtils, r.Matrix2, r.Matrix3;
var s = r.Matrix4;
r.MaxEquation;
var c = r.Mesh;
r.MeshBasicMaterial, r.MeshDepthMaterial, r.MeshDistanceMaterial, r.MeshLambertMaterial, r.MeshMatcapMaterial, r.MeshNormalMaterial, r.MeshPhongMaterial, r.MeshPhysicalMaterial;
var l = r.MeshStandardMaterial;
r.MeshToonMaterial, r.MinEquation, r.MirroredRepeatWrapping, r.MixOperation, r.MultiplyBlending, r.MultiplyOperation, r.NearestFilter, r.NearestMipMapLinearFilter, r.NearestMipMapNearestFilter, r.NearestMipmapLinearFilter, r.NearestMipmapNearestFilter, r.NeutralToneMapping, r.NeverCompare, r.NeverDepth, r.NeverStencilFunc, r.NoBlending, r.NoColorSpace, r.NoNormalPacking, r.NoToneMapping, r.NormalAnimationBlendMode, r.NormalBlending, r.NormalGAPacking, r.NormalRGPacking, r.NotEqualCompare, r.NotEqualDepth, r.NotEqualStencilFunc, r.NumberKeyframeTrack, r.Object3D, r.ObjectLoader, r.ObjectSpaceNormalMap, r.OctahedronGeometry, r.OneFactor, r.OneMinusConstantAlphaFactor, r.OneMinusConstantColorFactor, r.OneMinusDstAlphaFactor, r.OneMinusDstColorFactor, r.OneMinusSrcAlphaFactor, r.OneMinusSrcColorFactor, r.OrthographicCamera, r.PCFShadowMap, r.PCFSoftShadowMap, r.PMREMGenerator, r.Path, r.PerspectiveCamera, r.Plane, r.PlaneGeometry, r.PlaneHelper, r.PointLight, r.PointLightHelper, r.Points, r.PointsMaterial, r.PolarGridHelper, r.PolyhedronGeometry, r.PositionalAudio, r.PropertyBinding, r.PropertyMixer, r.QuadraticBezierCurve, r.QuadraticBezierCurve3, r.Quaternion, r.QuaternionKeyframeTrack, r.QuaternionLinearInterpolant, r.R11_EAC_Format, r.RED_GREEN_RGTC2_Format, r.RED_RGTC1_Format, r.REVISION, r.RG11_EAC_Format, r.RGBADepthPacking, r.RGBAFormat, r.RGBAIntegerFormat, r.RGBA_ASTC_10x10_Format, r.RGBA_ASTC_10x5_Format, r.RGBA_ASTC_10x6_Format, r.RGBA_ASTC_10x8_Format, r.RGBA_ASTC_12x10_Format, r.RGBA_ASTC_12x12_Format, r.RGBA_ASTC_4x4_Format, r.RGBA_ASTC_5x4_Format, r.RGBA_ASTC_5x5_Format, r.RGBA_ASTC_6x5_Format, r.RGBA_ASTC_6x6_Format, r.RGBA_ASTC_8x5_Format, r.RGBA_ASTC_8x6_Format, r.RGBA_ASTC_8x8_Format, r.RGBA_BPTC_Format, r.RGBA_ETC2_EAC_Format, r.RGBA_PVRTC_2BPPV1_Format, r.RGBA_PVRTC_4BPPV1_Format, r.RGBA_S3TC_DXT1_Format, r.RGBA_S3TC_DXT3_Format, r.RGBA_S3TC_DXT5_Format, r.RGBDepthPacking, r.RGBFormat, r.RGBIntegerFormat, r.RGB_BPTC_SIGNED_Format, r.RGB_BPTC_UNSIGNED_Format, r.RGB_ETC1_Format, r.RGB_ETC2_Format, r.RGB_PVRTC_2BPPV1_Format, r.RGB_PVRTC_4BPPV1_Format, r.RGB_S3TC_DXT1_Format, r.RGDepthPacking, r.RGFormat, r.RGIntegerFormat, r.RawShaderMaterial, r.Ray, r.Raycaster, r.RectAreaLight, r.RedFormat, r.RedIntegerFormat, r.ReinhardToneMapping, r.RenderTarget, r.RenderTarget3D, r.RepeatWrapping, r.ReplaceStencilOp, r.ReverseSubtractEquation, r.RingGeometry, r.SIGNED_R11_EAC_Format, r.SIGNED_RED_GREEN_RGTC2_Format, r.SIGNED_RED_RGTC1_Format, r.SIGNED_RG11_EAC_Format, r.SRGBColorSpace, r.SRGBTransfer, r.Scene, r.ShaderChunk, r.ShaderLib, r.ShaderMaterial, r.ShadowMaterial, r.Shape, r.ShapeGeometry, r.ShapePath, r.ShapeUtils, r.ShortType, r.Skeleton, r.SkeletonHelper, r.SkinnedMesh, r.Source, r.Sphere, r.SphereGeometry, r.Spherical, r.SphericalHarmonics3, r.SplineCurve, r.SpotLight, r.SpotLightHelper, r.Sprite, r.SpriteMaterial, r.SrcAlphaFactor, r.SrcAlphaSaturateFactor, r.SrcColorFactor, r.StaticCopyUsage, r.StaticDrawUsage, r.StaticReadUsage, r.StereoCamera, r.StreamCopyUsage, r.StreamDrawUsage, r.StreamReadUsage, r.StringKeyframeTrack, r.SubtractEquation, r.SubtractiveBlending, r.TOUCH, r.TangentSpaceNormalMap, r.TetrahedronGeometry, r.Texture, r.TextureLoader, r.TextureUtils, r.Timer, r.TimestampQuery, r.TorusGeometry, r.TorusKnotGeometry, r.Triangle, r.TriangleFanDrawMode, r.TriangleStripDrawMode, r.TrianglesDrawMode, r.TubeGeometry, r.UVMapping, r.Uint16BufferAttribute, r.Uint32BufferAttribute, r.Uint8BufferAttribute, r.Uint8ClampedBufferAttribute, r.Uniform, r.UniformsGroup, r.UniformsLib, r.UniformsUtils, r.UnsignedByteType, r.UnsignedInt101111Type, r.UnsignedInt248Type, r.UnsignedInt5999Type, r.UnsignedIntType, r.UnsignedShort4444Type, r.UnsignedShort5551Type, r.UnsignedShortType, r.VSMShadowMap, r.Vector2;
var u = r.Vector3;
r.Vector4, r.VectorKeyframeTrack, r.VideoFrameTexture, r.VideoTexture, r.WebGL3DRenderTarget, r.WebGLArrayRenderTarget, r.WebGLCoordinateSystem, r.WebGLCubeRenderTarget, r.WebGLRenderTarget, r.WebGLRenderer, r.WebGLUtils, r.WebGPUCoordinateSystem, r.WebXRController, r.WireframeGeometry, r.WrapAroundEnding, r.ZeroCurvatureEnding, r.ZeroFactor, r.ZeroSlopeEnding, r.ZeroStencilOp, r.createCanvasElement, r.error, r.getConsoleFunction, r.log, r.setConsoleFunction, r.warn, r.warnOnce;
//#endregion
//#region \0fate-sdk-shim:cannon-es
var d = globalThis.FateSDK.dice.cannonEs;
d.AABB, d.ArrayCollisionMatrix, d.BODY_SLEEP_STATES, d.BODY_TYPES;
var f = d.Body, p = d.Box;
d.Broadphase, d.COLLISION_TYPES, d.ConeTwistConstraint, d.Constraint, d.ContactEquation, d.ContactMaterial, d.ConvexPolyhedron, d.Cylinder, d.DistanceConstraint, d.Equation, d.EventTarget, d.FrictionEquation, d.GSSolver, d.GridBroadphase, d.Heightfield, d.HingeConstraint, d.JacobianElement, d.LockConstraint, d.Mat3, d.Material, d.NaiveBroadphase, d.Narrowphase, d.ObjectCollisionMatrix, d.Particle, d.Plane, d.PointToPointConstraint, d.Pool, d.Quaternion, d.RAY_MODES, d.Ray, d.RaycastResult, d.RaycastVehicle, d.RigidVehicle, d.RotationalEquation, d.RotationalMotorEquation, d.SAPBroadphase, d.SHAPE_TYPES, d.SPHSystem, d.Shape, d.Solver, d.Sphere, d.SplitSolver, d.Spring, d.Transform, d.Trimesh;
var m = d.Vec3;
d.Vec3Pool, d.WheelInfo, d.World;
//#endregion
//#region node_modules/.pnpm/three@0.185.1/node_modules/three/examples/jsm/utils/BufferGeometryUtils.js
function h(e, t = 1e-4) {
	t = Math.max(t, 2 ** -52);
	let n = {}, r = e.getIndex(), i = e.getAttribute("position"), a = r ? r.count : i.count, o = 0, s = Object.keys(e.attributes), c = {}, l = {}, u = [], d = [
		"getX",
		"getY",
		"getZ",
		"getW"
	], f = [
		"setX",
		"setY",
		"setZ",
		"setW"
	];
	for (let t = 0, n = s.length; t < n; t++) {
		let n = s[t], r = e.attributes[n];
		c[n] = new r.constructor(new r.array.constructor(r.count * r.itemSize), r.itemSize, r.normalized);
		let i = e.morphAttributes[n];
		i && (l[n] || (l[n] = []), i.forEach((e, t) => {
			let r = new e.array.constructor(e.count * e.itemSize);
			l[n][t] = new e.constructor(r, e.itemSize, e.normalized);
		}));
	}
	let p = t * .5, m = 10 ** Math.log10(1 / t), h = p * m;
	for (let t = 0; t < a; t++) {
		let i = r ? r.getX(t) : t, a = "";
		for (let t = 0, n = s.length; t < n; t++) {
			let n = s[t], r = e.getAttribute(n), o = r.itemSize;
			for (let e = 0; e < o; e++) a += `${~~(r[d[e]](i) * m + h)},`;
		}
		if (a in n) u.push(n[a]);
		else {
			for (let t = 0, n = s.length; t < n; t++) {
				let n = s[t], r = e.getAttribute(n), a = e.morphAttributes[n], u = r.itemSize, p = c[n], m = l[n];
				for (let e = 0; e < u; e++) {
					let t = d[e], n = f[e];
					if (p[n](o, r[t](i)), a) for (let e = 0, r = a.length; e < r; e++) m[e][n](o, a[e][t](i));
				}
			}
			n[a] = o, u.push(o), o++;
		}
	}
	let g = e.clone();
	for (let t in e.attributes) {
		let e = c[t];
		if (g.setAttribute(t, new e.constructor(e.array.slice(0, o * e.itemSize), e.itemSize, e.normalized)), t in l) for (let e = 0; e < l[t].length; e++) {
			let n = l[t][e];
			g.morphAttributes[t][e] = new n.constructor(n.array.slice(0, o * n.itemSize), n.itemSize, n.normalized);
		}
	}
	return g.setIndex(u), g;
}
//#endregion
//#region src/d6.ts
var g = [
	{
		value: 1,
		normal: [
			0,
			1,
			0
		]
	},
	{
		value: 6,
		normal: [
			0,
			-1,
			0
		]
	},
	{
		value: 2,
		normal: [
			1,
			0,
			0
		]
	},
	{
		value: 5,
		normal: [
			-1,
			0,
			0
		]
	},
	{
		value: 3,
		normal: [
			0,
			0,
			1
		]
	},
	{
		value: 4,
		normal: [
			0,
			0,
			-1
		]
	}
], _ = {
	1: [[0, 0]],
	2: [[-1, 1], [1, -1]],
	3: [
		[-1, 1],
		[0, 0],
		[1, -1]
	],
	4: [
		[-1, 1],
		[1, 1],
		[-1, -1],
		[1, -1]
	],
	5: [
		[-1, 1],
		[1, 1],
		[0, 0],
		[-1, -1],
		[1, -1]
	],
	6: [
		[-1, 1],
		[1, 1],
		[-1, 0],
		[1, 0],
		[-1, -1],
		[1, -1]
	]
};
function v(e, t, n, r) {
	let i = new o(), a = r * .26;
	for (let [r, o] of _[e] ?? []) {
		let e = new c(t, n.symbolMaterial);
		e.position.set(r * a, o * a, 0), i.add(e);
	}
	return i;
}
function y(e, t, n) {
	let r = new i(e, e, e, t, t, t), a = r.attributes.position, o = e / 2 - n;
	for (let e = 0; e < a.count; e++) {
		let t = new u().fromBufferAttribute(a, e), r = new u(Math.sign(t.x), Math.sign(t.y), Math.sign(t.z)).multiplyScalar(o), i = new u().subVectors(t, r);
		Math.abs(t.x) > o && Math.abs(t.y) > o && Math.abs(t.z) > o ? (i.normalize().multiplyScalar(n), t = r.add(i)) : Math.abs(t.x) > o && Math.abs(t.y) > o ? (i.z = 0, i.normalize().multiplyScalar(n), t.x = r.x + i.x, t.y = r.y + i.y) : Math.abs(t.x) > o && Math.abs(t.z) > o ? (i.y = 0, i.normalize().multiplyScalar(n), t.x = r.x + i.x, t.z = r.z + i.z) : Math.abs(t.y) > o && Math.abs(t.z) > o && (i.x = 0, i.normalize().multiplyScalar(n), t.y = r.y + i.y, t.z = r.z + i.z), a.setXYZ(e, t.x, t.y, t.z);
	}
	return r.deleteAttribute("normal"), r.deleteAttribute("uv"), r = h(r), r.computeVertexNormals(), r;
}
function b(e, t, n) {
	let r = new o(), i = new c(y(t, n, t / 16), e.faceMaterial);
	i.castShadow = !0, i.receiveShadow = !0, r.add(i);
	let s = new a(t * .075, 24);
	for (let n of g) {
		let i = new u(...n.normal), a = v(n.value, s, e, t);
		a.position.copy(i).multiplyScalar(t / 2 + .002), Math.abs(i.y) > .9 && a.up.set(0, 0, i.y > 0 ? -1 : 1), a.lookAt(i.clone().multiplyScalar(t)), r.add(a);
	}
	return r;
}
function x(e, t, n, r) {
	let i = t / 2, a = new f({
		mass: n,
		shape: new p(new m(i, i, i)),
		sleepTimeLimit: .2
	});
	return a.collisionResponse = !0, a.collisionFilterGroup = 1, a.collisionFilterMask = 1, a.angularDamping = .3, a.linearDamping = .3, a.sleepSpeedLimit = .4, a.sleepTimeLimit = .5, a.allowSleep = !0, a.addEventListener("collide", r), e.addBody(a), a;
}
function S(e) {
	let t = new s().extractRotation(e.mesh.matrixWorld), n = new u(0, 1, 0), r = g[0].value, i = -Infinity;
	for (let e of g) {
		let a = new u(...e.normal).applyMatrix4(t).normalize().dot(n);
		a > i && (i = a, r = e.value);
	}
	return r;
}
var C = class e extends n {
	static name = "D6";
	static icon = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Crect%20x%3D%223%22%20y%3D%223%22%20width%3D%2218%22%20height%3D%2218%22%20rx%3D%223%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%221.6%22%20fill%3D%22currentColor%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%221.6%22%20fill%3D%22currentColor%22%2F%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%221.6%22%20fill%3D%22currentColor%22%2F%3E%3C%2Fsvg%3E";
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, a);
	}
	getResult() {
		return S(this);
	}
	formatResult(e) {
		let t = Array.isArray(e) ? e : [e];
		return {
			value: t.reduce((e, t) => e + t, 0),
			values: t,
			text: t.map((e) => e.toString()).join(", "),
			color: t.every((e) => e === 6) ? "success" : t.every((e) => e === 1) ? "danger" : "medium"
		};
	}
	changeMaterial(e) {
		this.material = e, this.mesh = this.createMesh();
	}
	createMesh() {
		return b(this.material, this.size, this.quality);
	}
	createBody(e, t) {
		return x(e, this.size, this.mass, t);
	}
	clone() {
		let t = new e(this.material, this.size, this.quality, this.mass, this.world, this.onCollide);
		return t.body.position.copy(this.body.position), t.body.quaternion.copy(this.body.quaternion), t.mesh.position.copy(this.mesh.position), t.mesh.quaternion.copy(this.mesh.quaternion), t;
	}
}, w = new t("Gold", new l({
	color: 13938487,
	metalness: .6,
	roughness: .35
}), new l({ color: 1710618 }), "#d4af37"), T = e({ dice: {
	shapes: [C],
	materials: [w]
} });
//#endregion
export { T as default };
