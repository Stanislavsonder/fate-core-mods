//#region node_modules/.pnpm/@fate-app+mod-types@2.1.0_vue@3.5.40/node_modules/@fate-app/mod-types/dist/bundle.js
function e(e) {
	return e;
}
function t(e, t) {
	return e[t];
}
function n(e, t, n) {
	e[t] = n;
}
//#endregion
//#region node_modules/.pnpm/@fate-app+mod-types@2.1.0_vue@3.5.40/node_modules/@fate-app/mod-types/dist/components.js
function r(e) {
	let t = globalThis.FateSDK?.components?.[e];
	if (!t) throw Error(`@fate-app/mod-types: FateSDK.components.${e} is unavailable - this mod needs host SDK ^2.1.0 or newer, and "sheetComponents" in its own manifest.json "capabilities" (that's what triggers the host to load it).`);
	return t;
}
function i(e) {
	return new Proxy({}, { get(t, n, i) {
		return Reflect.get(r(e), n, i);
	} });
}
var a = /* @__PURE__ */ i("SheetSection"), o = globalThis.FateSDK.vue;
o.BaseTransition, o.BaseTransitionPropsValidators, o.Comment, o.DeprecationTypes, o.EffectScope, o.ErrorCodes, o.ErrorTypeStrings, o.Fragment, o.KeepAlive, o.ReactiveEffect, o.Static, o.Suspense, o.Teleport, o.Text, o.TrackOpTypes, o.Transition, o.TransitionGroup, o.TriggerOpTypes, o.VueElement, o.assertNumber, o.callWithAsyncErrorHandling, o.callWithErrorHandling, o.camelize, o.capitalize, o.cloneVNode, o.compatUtils, o.compile, o.computed, o.createApp;
var s = o.createBlock;
o.createCommentVNode, o.createElementBlock, o.createElementVNode, o.createHydrationRenderer, o.createPropsRestProxy, o.createRenderer, o.createSSRApp, o.createSlots, o.createStaticVNode;
var c = o.createTextVNode, l = o.createVNode;
o.customRef, o.defineAsyncComponent;
var u = o.defineComponent;
o.defineCustomElement, o.defineEmits, o.defineExpose, o.defineModel, o.defineOptions, o.defineProps, o.defineSSRCustomElement, o.defineSlots, o.devtools, o.effect, o.effectScope, o.getCurrentInstance, o.getCurrentScope, o.getCurrentWatcher, o.getTransitionRawChildren, o.guardReactiveProps, o.h, o.handleError, o.hasInjectionContext, o.hydrate, o.hydrateOnIdle, o.hydrateOnInteraction, o.hydrateOnMediaQuery, o.hydrateOnVisible, o.initCustomFormatter, o.initDirectivesForSSR;
var d = o.inject;
o.isMemoSame, o.isProxy, o.isReactive, o.isReadonly, o.isRef, o.isRuntimeOnly, o.isShallow, o.isVNode, o.markRaw, o.mergeDefaults, o.mergeModels, o.mergeProps, o.nextTick, o.nodeOps, o.normalizeClass, o.normalizeProps, o.normalizeStyle, o.onActivated, o.onBeforeMount, o.onBeforeUnmount, o.onBeforeUpdate, o.onDeactivated, o.onErrorCaptured, o.onMounted, o.onRenderTracked, o.onRenderTriggered, o.onScopeDispose, o.onServerPrefetch, o.onUnmounted, o.onUpdated, o.onWatcherCleanup;
var f = o.openBlock;
o.patchProp, o.popScopeId, o.provide, o.proxyRefs, o.pushScopeId, o.queuePostFlushCb, o.reactive, o.readonly, o.ref, o.registerRuntimeCompiler, o.render, o.renderList, o.renderSlot, o.resolveComponent, o.resolveDirective, o.resolveDynamicComponent, o.resolveFilter, o.resolveTransitionHooks, o.setBlockTracking, o.setDevtoolsHook, o.setTransitionHooks, o.shallowReactive, o.shallowReadonly, o.shallowRef, o.ssrContextKey, o.ssrUtils, o.stop;
var p = o.toDisplayString;
o.toHandlerKey, o.toHandlers, o.toRaw, o.toRef, o.toRefs, o.toValue, o.transformVNodeArgs, o.triggerRef;
var m = o.unref;
o.useAttrs, o.useCssModule, o.useCssVars, o.useHost, o.useId;
var h = o.useModel;
o.useSSRContext, o.useShadowRoot, o.useSlots, o.useTemplateRef, o.useTransitionState, o.vModelCheckbox, o.vModelDynamic, o.vModelRadio, o.vModelSelect, o.vModelText, o.vShow, o.version, o.warn, o.watch, o.watchEffect, o.watchPostEffect, o.watchSyncEffect, o.withAsyncContext;
var g = o.withCtx;
o.withDefaults, o.withDirectives, o.withKeys, o.withMemo, o.withModifiers, o.withScopeId;
//#endregion
//#region \0fate-sdk-shim:@ionic/vue
var _ = globalThis.FateSDK.ionicVue;
_.IonAccordion, _.IonAccordionGroup, _.IonActionSheet, _.IonAlert, _.IonApp, _.IonAvatar, _.IonBackButton, _.IonBackdrop, _.IonBadge, _.IonBreadcrumb, _.IonBreadcrumbs, _.IonButton, _.IonButtons, _.IonCard, _.IonCardContent, _.IonCardHeader, _.IonCardSubtitle, _.IonCardTitle, _.IonCheckbox, _.IonChip, _.IonCol, _.IonContent, _.IonDatetime, _.IonDatetimeButton, _.IonFab, _.IonFabButton, _.IonFabList, _.IonFooter, _.IonGrid, _.IonHeader, _.IonIcon, _.IonImg, _.IonInfiniteScroll, _.IonInfiniteScrollContent;
var v = _.IonInput;
_.IonInputOtp, _.IonInputPasswordToggle;
var y = _.IonItem;
_.IonItemDivider, _.IonItemGroup, _.IonItemOption, _.IonItemOptions, _.IonItemSliding, _.IonLabel, _.IonList, _.IonListHeader, _.IonLoading, _.IonMenu, _.IonMenuButton, _.IonMenuToggle, _.IonModal, _.IonNav, _.IonNavLink;
var b = _.IonNote;
_.IonPage, _.IonPicker, _.IonPickerColumn, _.IonPickerColumnOption, _.IonPickerLegacy, _.IonPopover, _.IonProgressBar, _.IonRadio, _.IonRadioGroup, _.IonRange, _.IonRefresher, _.IonRefresherContent, _.IonReorder, _.IonReorderGroup, _.IonRippleEffect, _.IonRouterOutlet, _.IonRow, _.IonSearchbar, _.IonSegment, _.IonSegmentButton, _.IonSegmentContent, _.IonSegmentView, _.IonSelect, _.IonSelectModal, _.IonSelectOption, _.IonSkeletonText, _.IonSpinner, _.IonSplitPane, _.IonTab, _.IonTabBar, _.IonTabButton, _.IonTabs, _.IonText, _.IonTextarea, _.IonThumbnail, _.IonTitle, _.IonToast, _.IonToggle, _.IonToolbar, _.IonicSafeString, _.IonicSlides, _.IonicVue, _.actionSheetController, _.alertController, _.createAnimation, _.createGesture, _.getIonPageElement, _.getPlatforms, _.getTimeGivenProgression, _.iosTransitionAnimation, _.isPlatform, _.loadingController, _.mdTransitionAnimation, _.menuController, _.modalController, _.onIonViewDidEnter, _.onIonViewDidLeave, _.onIonViewWillEnter, _.onIonViewWillLeave, _.openURL, _.pickerController, _.popoverController, _.toastController, _.useBackButton, _.useIonRouter, _.useKeyboard;
//#endregion
//#region src/components/ExampleSection.vue?vue&type=script&setup=true&lang.ts
var x = "sonder@example.note", S = "sonder@example.maxNoteLength", C = [{
	id: "sonder@example-section",
	component: /* @__PURE__ */ u({
		__name: "ExampleSection",
		props: {
			modelValue: { required: !0 },
			modelModifiers: {}
		},
		emits: ["update:modelValue"],
		setup(e) {
			let r = h(e, "modelValue"), i = d("context");
			function o(e) {
				let t = String(e.target.value ?? ""), a = Number(i.value.constants[S] ?? 200);
				n(r.value, x, t.slice(0, a));
			}
			return (e, n) => (f(), s(m(a), { title: e.$t("sonder@example.title") }, {
				default: g(() => [l(m(y), null, {
					default: g(() => [l(m(v), {
						label: e.$t("sonder@example.noteLabel"),
						"label-placement": "stacked",
						"model-value": m(t)(r.value, x) ?? "",
						onIonInput: o
					}, null, 8, ["label", "model-value"])]),
					_: 1
				}), l(m(b), null, {
					default: g(() => [c(p(e.$t("sonder@example.maxLengthNote", { value: m(i).constants[S] ?? 200 })), 1)]),
					_: 1
				})]),
				_: 1
			}, 8, ["title"]));
		}
	}),
	order: 900
}], w = {
	appVersion: ">=2.0.0",
	author: {
		email: "stanislavsonder@gmail.com",
		github: "Stanislavsonder",
		name: "Stanislav Sonder"
	},
	capabilities: ["sheetComponents"],
	config: {
		groups: [],
		options: [{
			default: 200,
			id: "max-note-length",
			limits: {
				max: 1e3,
				min: 10,
				step: 10
			},
			name: "t.config.maxNoteLength.name",
			tooltip: "t.config.maxNoteLength.tooltip",
			type: "number"
		}]
	},
	description: {
		full: "t.description.full",
		short: "t.description.short"
	},
	image: "cover.png",
	entry: "bundle.mjs",
	id: "sonder@example",
	languages: /* @__PURE__ */ "en.fr.es.pt.it.de.nl.sv.no.da.fi.ru.be.uk.pl.cs.ro.el.tr.he.ar.fa.sw.zh.hi.bn.ja.ko.id.th".split("."),
	loadPriority: 100,
	name: "t.name",
	published: !1,
	sdk: "^2.1.0",
	tags: ["example"],
	version: "1.2.1"
}, T = "sonder@example.note", E = "max-note-length", D = "sonder@example.maxNoteLength", O = 200;
function k(e, t) {
	let n = t._modules[w.id]?.config, r = n && Object.hasOwn(n, E) ? Number(n[E]) : NaN;
	e.constants[D] = Number.isFinite(r) ? r : O;
}
function A(e, r) {
	k(e, r), n(r, T, t(r, T) ?? "");
}
function j(e, t) {
	delete t[T];
}
function M(e, t) {
	k(e, t);
}
//#endregion
//#region bundle.ts
var N = e({
	components: C,
	onInstall: A,
	onUninstall: j,
	onReconfigure: M
});
//#endregion
export { N as default };
