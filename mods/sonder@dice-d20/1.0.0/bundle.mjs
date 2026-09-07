//#region node_modules/.pnpm/@fate-app+mod-types@2.0.0_cannon-es@0.20.0_three@0.185.1_vue@3.5.40/node_modules/@fate-app/mod-types/dist/bundle.js
function e(e) {
	return e;
}
//#endregion
//#region node_modules/.pnpm/@fate-app+mod-types@2.0.0_cannon-es@0.20.0_three@0.185.1_vue@3.5.40/node_modules/@fate-app/mod-types/dist/dice.js
var t = class {
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
}, n = globalThis.FateSDK.dice.cannonEs;
n.AABB, n.ArrayCollisionMatrix, n.BODY_SLEEP_STATES, n.BODY_TYPES;
var r = n.Body;
n.Box, n.Broadphase, n.COLLISION_TYPES, n.ConeTwistConstraint, n.Constraint, n.ContactEquation, n.ContactMaterial;
var i = n.ConvexPolyhedron;
n.Cylinder, n.DistanceConstraint, n.Equation, n.EventTarget, n.FrictionEquation, n.GSSolver, n.GridBroadphase, n.Heightfield, n.HingeConstraint, n.JacobianElement, n.LockConstraint, n.Mat3, n.Material, n.NaiveBroadphase, n.Narrowphase, n.ObjectCollisionMatrix, n.Particle, n.Plane, n.PointToPointConstraint, n.Pool, n.Quaternion, n.RAY_MODES, n.Ray, n.RaycastResult, n.RaycastVehicle, n.RigidVehicle, n.RotationalEquation, n.RotationalMotorEquation, n.SAPBroadphase, n.SHAPE_TYPES, n.SPHSystem, n.Shape, n.Solver, n.Sphere, n.SplitSolver, n.Spring, n.Transform, n.Trimesh;
var a = n.Vec3;
n.Vec3Pool, n.WheelInfo, n.World;
//#endregion
//#region \0fate-sdk-shim:three
var o = globalThis.FateSDK.dice.three;
o.ACESFilmicToneMapping, o.AddEquation, o.AddOperation, o.AdditiveAnimationBlendMode, o.AdditiveBlending, o.AgXToneMapping, o.AlphaFormat, o.AlwaysCompare, o.AlwaysDepth, o.AlwaysStencilFunc, o.AmbientLight, o.AnimationAction, o.AnimationClip, o.AnimationLoader, o.AnimationMixer, o.AnimationObjectGroup, o.AnimationUtils, o.ArcCurve, o.ArrayCamera, o.ArrowHelper, o.AttachedBindMode, o.Audio, o.AudioAnalyser, o.AudioContext, o.AudioListener, o.AudioLoader, o.AxesHelper, o.BackSide, o.BasicDepthPacking, o.BasicShadowMap, o.BatchedMesh, o.BezierInterpolant, o.Bone, o.BooleanKeyframeTrack, o.Box2, o.Box3, o.Box3Helper, o.BoxGeometry, o.BoxHelper, o.BufferAttribute;
var s = o.BufferGeometry;
o.BufferGeometryLoader, o.ByteType, o.Cache, o.Camera, o.CameraHelper;
var c = o.CanvasTexture;
o.CapsuleGeometry, o.CatmullRomCurve3, o.CineonToneMapping, o.CircleGeometry, o.ClampToEdgeWrapping, o.Clock, o.Color, o.ColorKeyframeTrack, o.ColorManagement, o.Compatibility, o.CompressedArrayTexture, o.CompressedCubeTexture, o.CompressedTexture, o.CompressedTextureLoader, o.ConeGeometry, o.ConstantAlphaFactor, o.ConstantColorFactor, o.Controls, o.CubeCamera, o.CubeDepthTexture, o.CubeReflectionMapping, o.CubeRefractionMapping, o.CubeTexture, o.CubeTextureLoader, o.CubeUVReflectionMapping, o.CubicBezierCurve, o.CubicBezierCurve3, o.CubicInterpolant, o.CullFaceBack, o.CullFaceFront, o.CullFaceFrontBack, o.CullFaceNone, o.Curve, o.CurvePath, o.CustomBlending, o.CustomToneMapping, o.CylinderGeometry, o.Cylindrical, o.Data3DTexture, o.DataArrayTexture, o.DataTexture, o.DataTextureLoader, o.DataUtils, o.DecrementStencilOp, o.DecrementWrapStencilOp, o.DefaultLoadingManager, o.DepthFormat, o.DepthStencilFormat, o.DepthTexture, o.DetachedBindMode, o.DirectionalLight, o.DirectionalLightHelper, o.DiscreteInterpolant, o.DodecahedronGeometry, o.DoubleSide, o.DstAlphaFactor, o.DstColorFactor, o.DynamicCopyUsage, o.DynamicDrawUsage, o.DynamicReadUsage, o.EdgesGeometry, o.EllipseCurve, o.EqualCompare, o.EqualDepth, o.EqualStencilFunc, o.EquirectangularReflectionMapping, o.EquirectangularRefractionMapping, o.Euler, o.EventDispatcher, o.ExternalTexture, o.ExtrudeGeometry, o.FileLoader, o.Float16BufferAttribute, o.Float32BufferAttribute, o.FloatType, o.Fog, o.FogExp2, o.FramebufferTexture, o.FrontSide, o.Frustum, o.FrustumArray, o.GLBufferAttribute, o.GLSL1, o.GLSL3, o.GreaterCompare, o.GreaterDepth, o.GreaterEqualCompare, o.GreaterEqualDepth, o.GreaterEqualStencilFunc, o.GreaterStencilFunc, o.GridHelper;
var l = o.Group;
o.HTMLTexture, o.HalfFloatType, o.HemisphereLight, o.HemisphereLightHelper;
var u = o.IcosahedronGeometry;
o.ImageBitmapLoader, o.ImageLoader, o.ImageUtils, o.IncrementStencilOp, o.IncrementWrapStencilOp, o.InstancedBufferAttribute, o.InstancedBufferGeometry, o.InstancedInterleavedBuffer, o.InstancedMesh, o.Int16BufferAttribute, o.Int32BufferAttribute, o.Int8BufferAttribute, o.IntType, o.InterleavedBuffer, o.InterleavedBufferAttribute, o.Interpolant, o.InterpolateBezier, o.InterpolateDiscrete, o.InterpolateLinear, o.InterpolateSmooth, o.InterpolationSamplingMode, o.InterpolationSamplingType, o.InvertStencilOp, o.KeepStencilOp, o.KeyframeTrack, o.LOD, o.LatheGeometry, o.Layers, o.LessCompare, o.LessDepth, o.LessEqualCompare, o.LessEqualDepth, o.LessEqualStencilFunc, o.LessStencilFunc, o.Light, o.LightProbe, o.Line, o.Line3, o.LineBasicMaterial, o.LineCurve, o.LineCurve3, o.LineDashedMaterial, o.LineLoop, o.LineSegments, o.LinearFilter, o.LinearInterpolant, o.LinearMipMapLinearFilter, o.LinearMipMapNearestFilter, o.LinearMipmapLinearFilter, o.LinearMipmapNearestFilter, o.LinearSRGBColorSpace, o.LinearToneMapping, o.LinearTransfer, o.Loader, o.LoaderUtils, o.LoadingManager, o.LoopOnce, o.LoopPingPong, o.LoopRepeat, o.MOUSE, o.Material, o.MaterialBlending, o.MaterialLoader, o.MathUtils, o.Matrix2, o.Matrix3;
var d = o.Matrix4;
o.MaxEquation;
var f = o.Mesh;
o.MeshBasicMaterial, o.MeshDepthMaterial, o.MeshDistanceMaterial, o.MeshLambertMaterial, o.MeshMatcapMaterial, o.MeshNormalMaterial, o.MeshPhongMaterial, o.MeshPhysicalMaterial, o.MeshStandardMaterial, o.MeshToonMaterial, o.MinEquation, o.MirroredRepeatWrapping, o.MixOperation, o.MultiplyBlending, o.MultiplyOperation, o.NearestFilter, o.NearestMipMapLinearFilter, o.NearestMipMapNearestFilter, o.NearestMipmapLinearFilter, o.NearestMipmapNearestFilter, o.NeutralToneMapping, o.NeverCompare, o.NeverDepth, o.NeverStencilFunc, o.NoBlending, o.NoColorSpace, o.NoNormalPacking, o.NoToneMapping, o.NormalAnimationBlendMode, o.NormalBlending, o.NormalGAPacking, o.NormalRGPacking, o.NotEqualCompare, o.NotEqualDepth, o.NotEqualStencilFunc, o.NumberKeyframeTrack, o.Object3D, o.ObjectLoader, o.ObjectSpaceNormalMap, o.OctahedronGeometry, o.OneFactor, o.OneMinusConstantAlphaFactor, o.OneMinusConstantColorFactor, o.OneMinusDstAlphaFactor, o.OneMinusDstColorFactor, o.OneMinusSrcAlphaFactor, o.OneMinusSrcColorFactor, o.OrthographicCamera, o.PCFShadowMap, o.PCFSoftShadowMap, o.PMREMGenerator, o.Path, o.PerspectiveCamera, o.Plane;
var p = o.PlaneGeometry;
o.PlaneHelper, o.PointLight, o.PointLightHelper, o.Points, o.PointsMaterial, o.PolarGridHelper, o.PolyhedronGeometry, o.PositionalAudio, o.PropertyBinding, o.PropertyMixer, o.QuadraticBezierCurve, o.QuadraticBezierCurve3, o.Quaternion, o.QuaternionKeyframeTrack, o.QuaternionLinearInterpolant, o.R11_EAC_Format, o.RED_GREEN_RGTC2_Format, o.RED_RGTC1_Format, o.REVISION, o.RG11_EAC_Format, o.RGBADepthPacking, o.RGBAFormat, o.RGBAIntegerFormat, o.RGBA_ASTC_10x10_Format, o.RGBA_ASTC_10x5_Format, o.RGBA_ASTC_10x6_Format, o.RGBA_ASTC_10x8_Format, o.RGBA_ASTC_12x10_Format, o.RGBA_ASTC_12x12_Format, o.RGBA_ASTC_4x4_Format, o.RGBA_ASTC_5x4_Format, o.RGBA_ASTC_5x5_Format, o.RGBA_ASTC_6x5_Format, o.RGBA_ASTC_6x6_Format, o.RGBA_ASTC_8x5_Format, o.RGBA_ASTC_8x6_Format, o.RGBA_ASTC_8x8_Format, o.RGBA_BPTC_Format, o.RGBA_ETC2_EAC_Format, o.RGBA_PVRTC_2BPPV1_Format, o.RGBA_PVRTC_4BPPV1_Format, o.RGBA_S3TC_DXT1_Format, o.RGBA_S3TC_DXT3_Format, o.RGBA_S3TC_DXT5_Format, o.RGBDepthPacking, o.RGBFormat, o.RGBIntegerFormat, o.RGB_BPTC_SIGNED_Format, o.RGB_BPTC_UNSIGNED_Format, o.RGB_ETC1_Format, o.RGB_ETC2_Format, o.RGB_PVRTC_2BPPV1_Format, o.RGB_PVRTC_4BPPV1_Format, o.RGB_S3TC_DXT1_Format, o.RGDepthPacking, o.RGFormat, o.RGIntegerFormat, o.RawShaderMaterial, o.Ray, o.Raycaster, o.RectAreaLight, o.RedFormat, o.RedIntegerFormat, o.ReinhardToneMapping, o.RenderTarget, o.RenderTarget3D, o.RepeatWrapping, o.ReplaceStencilOp, o.ReverseSubtractEquation, o.RingGeometry, o.SIGNED_R11_EAC_Format, o.SIGNED_RED_GREEN_RGTC2_Format, o.SIGNED_RED_RGTC1_Format, o.SIGNED_RG11_EAC_Format, o.SRGBColorSpace, o.SRGBTransfer, o.Scene, o.ShaderChunk, o.ShaderLib, o.ShaderMaterial, o.ShadowMaterial, o.Shape, o.ShapeGeometry, o.ShapePath, o.ShapeUtils, o.ShortType, o.Skeleton, o.SkeletonHelper, o.SkinnedMesh, o.Source, o.Sphere, o.SphereGeometry, o.Spherical, o.SphericalHarmonics3, o.SplineCurve, o.SpotLight, o.SpotLightHelper, o.Sprite, o.SpriteMaterial, o.SrcAlphaFactor, o.SrcAlphaSaturateFactor, o.SrcColorFactor, o.StaticCopyUsage, o.StaticDrawUsage, o.StaticReadUsage, o.StereoCamera, o.StreamCopyUsage, o.StreamDrawUsage, o.StreamReadUsage, o.StringKeyframeTrack, o.SubtractEquation, o.SubtractiveBlending, o.TOUCH, o.TangentSpaceNormalMap, o.TetrahedronGeometry, o.Texture, o.TextureLoader, o.TextureUtils, o.Timer, o.TimestampQuery, o.TorusGeometry, o.TorusKnotGeometry, o.Triangle, o.TriangleFanDrawMode, o.TriangleStripDrawMode, o.TrianglesDrawMode, o.TubeGeometry, o.UVMapping, o.Uint16BufferAttribute, o.Uint32BufferAttribute, o.Uint8BufferAttribute, o.Uint8ClampedBufferAttribute, o.Uniform, o.UniformsGroup, o.UniformsLib, o.UniformsUtils, o.UnsignedByteType, o.UnsignedInt101111Type, o.UnsignedInt248Type, o.UnsignedInt5999Type, o.UnsignedIntType, o.UnsignedShort4444Type, o.UnsignedShort5551Type, o.UnsignedShortType, o.VSMShadowMap, o.Vector2;
var m = o.Vector3;
o.Vector4, o.VectorKeyframeTrack, o.VideoFrameTexture, o.VideoTexture, o.WebGL3DRenderTarget, o.WebGLArrayRenderTarget, o.WebGLCoordinateSystem, o.WebGLCubeRenderTarget, o.WebGLRenderTarget, o.WebGLRenderer, o.WebGLUtils, o.WebGPUCoordinateSystem, o.WebXRController, o.WireframeGeometry, o.WrapAroundEnding, o.ZeroCurvatureEnding, o.ZeroFactor, o.ZeroSlopeEnding, o.ZeroStencilOp, o.createCanvasElement, o.error, o.getConsoleFunction, o.log, o.setConsoleFunction, o.warn, o.warnOnce;
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
//#region src/d20.svg
var g = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.44785%2010.2407L2.05%2016.9391C1.92167%2017.1539%202.05417%2017.4332%202.29708%2017.4607L10.9745%2018.409L6.44785%2010.2407ZM2.30875%2014.5535L5.44578%209.2963L2.2525%207.32062C2.14125%207.25187%202%207.33437%202%207.468V14.4637C2%2014.6368%202.22041%2014.7013%202.30875%2014.5535ZM2.76041%2019.2013L10.8603%2022.9679C11.0811%2023.0732%2011.3332%2022.9065%2011.3332%2022.656V19.8342L2.85207%2018.8761C2.66666%2018.8546%202.59249%2019.1162%202.76041%2019.2013ZM6.14452%208.12499L9.47489%201.98311C9.65572%201.67976%209.32531%201.32785%209.02573%201.50445L2.74207%205.74154C2.63916%205.81115%202.64249%205.96755%202.74749%206.03286L6.14452%208.12499ZM11.9999%208.5624H16.5502L12.5678%201.32742C12.4373%201.10914%2012.2186%201%2011.9999%201C11.7811%201%2011.5624%201.10914%2011.4319%201.32742L7.4495%208.5624H11.9999ZM21.7472%207.32062L18.5539%209.29673L21.691%2014.5539C21.7789%2014.7017%2021.9997%2014.6372%2021.9997%2014.4637V7.468C21.9997%207.33437%2021.8585%207.25187%2021.7472%207.32062ZM17.8552%208.12499L21.2522%206.03243C21.3576%205.96712%2021.3606%205.81072%2021.2576%205.74111L14.974%201.50445C14.6744%201.32785%2014.344%201.67976%2014.5248%201.98311L17.8552%208.12499ZM21.1476%2018.8761L12.6665%2019.8338V22.6555C12.6665%2022.9065%2012.9186%2023.0728%2013.1394%2022.9675L21.2393%2019.2009C21.4072%2019.1162%2021.3331%2018.8546%2021.1476%2018.8761ZM17.5519%2010.2407L13.0257%2018.409L21.703%2017.4607C21.946%2017.4328%2022.0785%2017.1539%2021.9501%2016.9391L17.5519%2010.2407ZM11.9999%209.93738H7.81533L11.9999%2017.489L16.1844%209.93738H11.9999Z'%20fill='currentColor'/%3e%3c/svg%3e", _ = [
	20,
	8,
	14,
	2,
	11,
	17,
	5,
	3,
	16,
	10,
	19,
	7,
	13,
	1,
	12,
	18,
	6,
	4,
	15,
	9
];
function v(e, t) {
	let n = document.createElement("canvas"), r = n.getContext("2d");
	if (!r) return null;
	n.width = 128, n.height = 128, r.font = "bold 80px Arial", r.fillStyle = "white", r.textAlign = "center", r.textBaseline = "middle", r.fillText(e.toString(), 64, 64);
	let i = t.symbolMaterial.clone();
	return i.map = new c(n), i.transparent = !0, new f(new p(.5, .5), i);
}
function y(e) {
	return h(new u(e, 0));
}
function b(e) {
	let t = e.getAttribute("normal"), n = e.getAttribute("position"), r = [];
	for (let e = 0; e < t.count; e += 3) {
		let i = new m().fromBufferAttribute(t, e);
		if (r.some((e) => e.normal.equals(i))) continue;
		let a = new m().fromBufferAttribute(n, e);
		a.add(new m().fromBufferAttribute(n, e + 1)), a.add(new m().fromBufferAttribute(n, e + 2)), a.divideScalar(3), r.push({
			normal: i,
			center: a
		});
	}
	return r;
}
function x(e, t) {
	let n = new l(), r = y(t), i = new f(r, e.faceMaterial);
	return i.castShadow = !0, i.receiveShadow = !0, n.add(i), b(r).forEach((t, r) => {
		let i = _[r];
		if (i === void 0) return;
		let a = v(i, e);
		a && (a.position.copy(t.center).addScaledVector(t.normal, .01), a.lookAt(t.center.clone().add(t.normal)), n.add(a));
	}), n;
}
function S(e, t, n, o) {
	let s = new r({
		mass: n,
		sleepTimeLimit: .3
	}), c = t * .55, l = (1 + Math.sqrt(5)) / 2, u = [
		[
			-1,
			l,
			0
		],
		[
			1,
			l,
			0
		],
		[
			-1,
			-l,
			0
		],
		[
			1,
			-l,
			0
		],
		[
			0,
			-1,
			l
		],
		[
			0,
			1,
			l
		],
		[
			0,
			-1,
			-l
		],
		[
			0,
			1,
			-l
		],
		[
			l,
			0,
			-1
		],
		[
			l,
			0,
			1
		],
		[
			-l,
			0,
			-1
		],
		[
			-l,
			0,
			1
		]
	].map((e) => new a(e[0] * c, e[1] * c, e[2] * c));
	return s.addShape(new i({
		vertices: u,
		faces: [
			[
				0,
				11,
				5
			],
			[
				0,
				5,
				1
			],
			[
				0,
				1,
				7
			],
			[
				0,
				7,
				10
			],
			[
				0,
				10,
				11
			],
			[
				1,
				5,
				9
			],
			[
				5,
				11,
				4
			],
			[
				11,
				10,
				2
			],
			[
				10,
				7,
				6
			],
			[
				7,
				1,
				8
			],
			[
				3,
				9,
				4
			],
			[
				3,
				4,
				2
			],
			[
				3,
				2,
				6
			],
			[
				3,
				6,
				8
			],
			[
				3,
				8,
				9
			],
			[
				4,
				9,
				5
			],
			[
				2,
				4,
				11
			],
			[
				6,
				2,
				10
			],
			[
				8,
				6,
				7
			],
			[
				9,
				8,
				1
			]
		]
	})), s.collisionResponse = !0, s.collisionFilterGroup = 1, s.collisionFilterMask = 1, s.angularDamping = .3, s.linearDamping = .3, s.sleepSpeedLimit = .4, s.sleepTimeLimit = .5, s.allowSleep = !0, s.addEventListener("collide", o), e.addBody(s), s;
}
function C(e) {
	let t = e.mesh.children.find((e) => e instanceof f && e.geometry instanceof s);
	if (!t) return 1;
	let n = new d().extractRotation(t.matrixWorld);
	return b(t.geometry).map((e, t) => ({
		value: _[t] ?? 1,
		amount: e.normal.clone().applyMatrix4(n).normalize().dot(new m(0, 1, 0))
	})).sort((e, t) => t.amount - e.amount)[0]?.value ?? 1;
}
//#endregion
//#region bundle.ts
var w = e({ dice: { shapes: [class e extends t {
	static name = "D20";
	static icon = g;
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, a);
	}
	getResult() {
		return C(this);
	}
	formatResult(e) {
		let t = Array.isArray(e) ? e : [e];
		return {
			value: t.reduce((e, t) => e + t, 0),
			values: t,
			text: t.join(", "),
			color: t.every((e) => e === 20) ? "success" : t.every((e) => e === 1) ? "danger" : "medium"
		};
	}
	changeMaterial(e) {
		this.material = e, this.mesh = this.createMesh();
	}
	createMesh() {
		return x(this.material, this.size);
	}
	createBody(e, t) {
		return S(e, this.size, this.mass, t);
	}
	clone() {
		let t = new e(this.material, this.size, this.quality, this.mass, this.world, this.onCollide);
		return t.body.position.copy(this.body.position), t.body.quaternion.copy(this.body.quaternion), t.mesh.position.copy(this.mesh.position), t.mesh.quaternion.copy(this.mesh.quaternion), t;
	}
}] } });
//#endregion
export { w as default };
