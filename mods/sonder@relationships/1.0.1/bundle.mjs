(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`.sheet-body[data-v-039f4d1e]{padding-bottom:var(--ion-safe-area-bottom,0px)}.content[data-v-039f4d1e]{--padding-bottom:var(--ion-safe-area-bottom,0px)}.form[data-v-374c89c7]{flex-direction:column;justify-content:space-between;height:100%;display:flex}.error[data-v-374c89c7]{text-align:center;min-height:1.25rem;padding:0 1rem;display:block}.actions[data-v-374c89c7]{width:100%;padding:1rem}.row[data-v-4cbbb6fa]{--background:var(--color-background-2,var(--ion-background-color))}.columns[data-v-4cbbb6fa]{grid-template-columns:1fr 1fr;align-items:center;gap:.75rem;width:100%;padding:.25rem 0;display:grid}.name[data-v-4cbbb6fa]{text-overflow:ellipsis;white-space:nowrap;min-width:0;font-weight:600;overflow:hidden}.what[data-v-4cbbb6fa]{opacity:.7;text-align:start;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical;min-width:0;display:-webkit-box;overflow:hidden}.add-button[data-v-5d79571f]{color:inherit;cursor:pointer;background:0 0;border:none;align-items:center;padding:0;display:flex}.add-button ion-icon[data-v-5d79571f]{font-size:1.5rem}.list[data-v-5d79571f]{border-radius:8px;overflow:hidden}.empty[data-v-5d79571f]{opacity:.7;justify-content:center;align-items:center;min-height:3rem;margin:0;font-size:1.25rem;display:flex}
/*$vite$:1*/`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();//#region node_modules/.pnpm/@fate-app+mod-types@2.1.0_vue@3.5.40/node_modules/@fate-app/mod-types/dist/bundle.js
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
o.BaseTransition, o.BaseTransitionPropsValidators, o.Comment, o.DeprecationTypes, o.EffectScope, o.ErrorCodes, o.ErrorTypeStrings;
var s = o.Fragment;
o.KeepAlive, o.ReactiveEffect, o.Static, o.Suspense, o.Teleport, o.Text, o.TrackOpTypes, o.Transition, o.TransitionGroup, o.TriggerOpTypes, o.VueElement, o.assertNumber, o.callWithAsyncErrorHandling, o.callWithErrorHandling, o.camelize, o.capitalize, o.cloneVNode, o.compatUtils, o.compile;
var c = o.computed;
o.createApp;
var l = o.createBlock, u = o.createCommentVNode, d = o.createElementBlock, f = o.createElementVNode;
o.createHydrationRenderer, o.createPropsRestProxy, o.createRenderer, o.createSSRApp, o.createSlots, o.createStaticVNode;
var p = o.createTextVNode, m = o.createVNode;
o.customRef, o.defineAsyncComponent;
var h = o.defineComponent;
o.defineCustomElement, o.defineEmits, o.defineExpose, o.defineModel, o.defineOptions, o.defineProps, o.defineSSRCustomElement, o.defineSlots, o.devtools, o.effect, o.effectScope, o.getCurrentInstance, o.getCurrentScope, o.getCurrentWatcher, o.getTransitionRawChildren, o.guardReactiveProps, o.h, o.handleError, o.hasInjectionContext, o.hydrate, o.hydrateOnIdle, o.hydrateOnInteraction, o.hydrateOnMediaQuery, o.hydrateOnVisible, o.initCustomFormatter, o.initDirectivesForSSR, o.inject, o.isMemoSame, o.isProxy, o.isReactive, o.isReadonly, o.isRef, o.isRuntimeOnly, o.isShallow, o.isVNode, o.markRaw, o.mergeDefaults;
var ee = o.mergeModels;
o.mergeProps;
var g = o.nextTick;
o.nodeOps, o.normalizeClass, o.normalizeProps;
var _ = o.normalizeStyle;
o.onActivated, o.onBeforeMount, o.onBeforeUnmount, o.onBeforeUpdate, o.onDeactivated, o.onErrorCaptured, o.onMounted, o.onRenderTracked, o.onRenderTriggered, o.onScopeDispose, o.onServerPrefetch, o.onUnmounted, o.onUpdated, o.onWatcherCleanup;
var v = o.openBlock;
o.patchProp, o.popScopeId, o.provide, o.proxyRefs, o.pushScopeId, o.queuePostFlushCb, o.reactive, o.readonly;
var y = o.ref;
o.registerRuntimeCompiler, o.render;
var te = o.renderList, b = o.renderSlot;
o.resolveComponent, o.resolveDirective, o.resolveDynamicComponent, o.resolveFilter, o.resolveTransitionHooks, o.setBlockTracking, o.setDevtoolsHook, o.setTransitionHooks, o.shallowReactive, o.shallowReadonly, o.shallowRef, o.ssrContextKey, o.ssrUtils, o.stop;
var x = o.toDisplayString;
o.toHandlerKey, o.toHandlers, o.toRaw, o.toRef, o.toRefs, o.toValue, o.transformVNodeArgs, o.triggerRef;
var S = o.unref;
o.useAttrs, o.useCssModule, o.useCssVars, o.useHost, o.useId;
var C = o.useModel;
o.useSSRContext, o.useShadowRoot, o.useSlots, o.useTemplateRef, o.useTransitionState, o.vModelCheckbox, o.vModelDynamic, o.vModelRadio, o.vModelSelect, o.vModelText, o.vShow, o.version, o.warn, o.watch, o.watchEffect, o.watchPostEffect, o.watchSyncEffect, o.withAsyncContext;
var w = o.withCtx;
o.withDefaults, o.withDirectives, o.withKeys, o.withMemo, o.withModifiers, o.withScopeId;
//#endregion
//#region \0fate-sdk-shim:@ionic/vue
var T = globalThis.FateSDK.ionicVue;
T.IonAccordion, T.IonAccordionGroup, T.IonActionSheet, T.IonAlert, T.IonApp, T.IonAvatar, T.IonBackButton, T.IonBackdrop, T.IonBadge, T.IonBreadcrumb, T.IonBreadcrumbs;
var E = T.IonButton, D = T.IonButtons;
T.IonCard, T.IonCardContent, T.IonCardHeader, T.IonCardSubtitle, T.IonCardTitle, T.IonCheckbox, T.IonChip, T.IonCol;
var O = T.IonContent;
T.IonDatetime, T.IonDatetimeButton, T.IonFab, T.IonFabButton, T.IonFabList, T.IonFooter, T.IonGrid;
var k = T.IonHeader, A = T.IonIcon;
T.IonImg, T.IonInfiniteScroll, T.IonInfiniteScrollContent;
var j = T.IonInput;
T.IonInputOtp, T.IonInputPasswordToggle;
var M = T.IonItem;
T.IonItemDivider, T.IonItemGroup, T.IonItemOption, T.IonItemOptions, T.IonItemSliding, T.IonLabel;
var N = T.IonList;
T.IonListHeader, T.IonLoading, T.IonMenu, T.IonMenuButton, T.IonMenuToggle;
var P = T.IonModal;
T.IonNav, T.IonNavLink;
var F = T.IonNote;
T.IonPage, T.IonPicker, T.IonPickerColumn, T.IonPickerColumnOption, T.IonPickerLegacy, T.IonPopover, T.IonProgressBar, T.IonRadio, T.IonRadioGroup, T.IonRange, T.IonRefresher, T.IonRefresherContent, T.IonReorder, T.IonReorderGroup, T.IonRippleEffect, T.IonRouterOutlet, T.IonRow, T.IonSearchbar, T.IonSegment, T.IonSegmentButton, T.IonSegmentContent, T.IonSegmentView, T.IonSelect, T.IonSelectModal, T.IonSelectOption, T.IonSkeletonText, T.IonSpinner, T.IonSplitPane, T.IonTab, T.IonTabBar, T.IonTabButton, T.IonTabs, T.IonText;
var I = T.IonTextarea;
T.IonThumbnail;
var L = T.IonTitle;
T.IonToast, T.IonToggle;
var R = T.IonToolbar;
T.IonicSafeString, T.IonicSlides, T.IonicVue, T.actionSheetController, T.alertController, T.createAnimation, T.createGesture, T.getIonPageElement, T.getPlatforms, T.getTimeGivenProgression, T.iosTransitionAnimation, T.isPlatform, T.loadingController, T.mdTransitionAnimation, T.menuController, T.modalController, T.onIonViewDidEnter, T.onIonViewDidLeave, T.onIonViewWillEnter, T.onIonViewWillLeave, T.openURL, T.pickerController, T.popoverController, T.toastController, T.useBackButton, T.useIonRouter, T.useKeyboard;
//#endregion
//#region \0fate-sdk-shim:ionicons/icons
var z = globalThis.FateSDK.ionicons;
z.accessibility, z.accessibilityOutline, z.accessibilitySharp;
var B = z.add;
z.addCircle, z.addCircleOutline, z.addCircleSharp, z.addOutline, z.addSharp, z.airplane, z.airplaneOutline, z.airplaneSharp, z.alarm, z.alarmOutline, z.alarmSharp, z.albums, z.albumsOutline, z.albumsSharp, z.alert, z.alertCircle, z.alertCircleOutline, z.alertCircleSharp, z.alertOutline, z.alertSharp, z.americanFootball, z.americanFootballOutline, z.americanFootballSharp, z.analytics, z.analyticsOutline, z.analyticsSharp, z.aperture, z.apertureOutline, z.apertureSharp, z.apps, z.appsOutline, z.appsSharp, z.archive, z.archiveOutline, z.archiveSharp, z.arrowBack, z.arrowBackCircle, z.arrowBackCircleOutline, z.arrowBackCircleSharp, z.arrowBackOutline, z.arrowBackSharp, z.arrowDown, z.arrowDownCircle, z.arrowDownCircleOutline, z.arrowDownCircleSharp, z.arrowDownLeftBox, z.arrowDownLeftBoxOutline, z.arrowDownLeftBoxSharp, z.arrowDownOutline, z.arrowDownRightBox, z.arrowDownRightBoxOutline, z.arrowDownRightBoxSharp, z.arrowDownSharp, z.arrowForward, z.arrowForwardCircle, z.arrowForwardCircleOutline, z.arrowForwardCircleSharp, z.arrowForwardOutline, z.arrowForwardSharp, z.arrowRedo, z.arrowRedoCircle, z.arrowRedoCircleOutline, z.arrowRedoCircleSharp, z.arrowRedoOutline, z.arrowRedoSharp, z.arrowUndo, z.arrowUndoCircle, z.arrowUndoCircleOutline, z.arrowUndoCircleSharp, z.arrowUndoOutline, z.arrowUndoSharp, z.arrowUp, z.arrowUpCircle, z.arrowUpCircleOutline, z.arrowUpCircleSharp, z.arrowUpLeftBox, z.arrowUpLeftBoxOutline, z.arrowUpLeftBoxSharp, z.arrowUpOutline, z.arrowUpRightBox, z.arrowUpRightBoxOutline, z.arrowUpRightBoxSharp, z.arrowUpSharp, z.at, z.atCircle, z.atCircleOutline, z.atCircleSharp, z.atOutline, z.atSharp, z.attach, z.attachOutline, z.attachSharp, z.backspace, z.backspaceOutline, z.backspaceSharp, z.bag, z.bagAdd, z.bagAddOutline, z.bagAddSharp, z.bagCheck, z.bagCheckOutline, z.bagCheckSharp, z.bagHandle, z.bagHandleOutline, z.bagHandleSharp, z.bagOutline, z.bagRemove, z.bagRemoveOutline, z.bagRemoveSharp, z.bagSharp, z.balloon, z.balloonOutline, z.balloonSharp, z.ban, z.banOutline, z.banSharp, z.bandage, z.bandageOutline, z.bandageSharp, z.barChart, z.barChartOutline, z.barChartSharp, z.barbell, z.barbellOutline, z.barbellSharp, z.barcode, z.barcodeOutline, z.barcodeSharp, z.baseball, z.baseballOutline, z.baseballSharp, z.basket, z.basketOutline, z.basketSharp, z.basketball, z.basketballOutline, z.basketballSharp, z.batteryCharging, z.batteryChargingOutline, z.batteryChargingSharp, z.batteryDead, z.batteryDeadOutline, z.batteryDeadSharp, z.batteryFull, z.batteryFullOutline, z.batteryFullSharp, z.batteryHalf, z.batteryHalfOutline, z.batteryHalfSharp, z.beaker, z.beakerOutline, z.beakerSharp, z.bed, z.bedOutline, z.bedSharp, z.beer, z.beerOutline, z.beerSharp, z.bicycle, z.bicycleOutline, z.bicycleSharp, z.binoculars, z.binocularsOutline, z.binocularsSharp, z.bluetooth, z.bluetoothOutline, z.bluetoothSharp, z.boat, z.boatOutline, z.boatSharp, z.body, z.bodyOutline, z.bodySharp, z.bonfire, z.bonfireOutline, z.bonfireSharp, z.book, z.bookOutline, z.bookSharp, z.bookmark, z.bookmarkOutline, z.bookmarkSharp, z.bookmarks, z.bookmarksOutline, z.bookmarksSharp, z.bowlingBall, z.bowlingBallOutline, z.bowlingBallSharp, z.briefcase, z.briefcaseOutline, z.briefcaseSharp, z.browsers, z.browsersOutline, z.browsersSharp, z.brush, z.brushOutline, z.brushSharp, z.bug, z.bugOutline, z.bugSharp, z.build, z.buildOutline, z.buildSharp, z.bulb, z.bulbOutline, z.bulbSharp, z.bus, z.busOutline, z.busSharp, z.business, z.businessOutline, z.businessSharp, z.cafe, z.cafeOutline, z.cafeSharp, z.calculator, z.calculatorOutline, z.calculatorSharp, z.calendar, z.calendarClear, z.calendarClearOutline, z.calendarClearSharp, z.calendarNumber, z.calendarNumberOutline, z.calendarNumberSharp, z.calendarOutline, z.calendarSharp, z.call, z.callOutline, z.callSharp, z.camera, z.cameraOutline, z.cameraReverse, z.cameraReverseOutline, z.cameraReverseSharp, z.cameraSharp, z.car, z.carOutline, z.carSharp, z.carSport, z.carSportOutline, z.carSportSharp, z.card, z.cardOutline, z.cardSharp, z.caretBack, z.caretBackCircle, z.caretBackCircleOutline, z.caretBackCircleSharp, z.caretBackOutline, z.caretBackSharp, z.caretDown, z.caretDownCircle, z.caretDownCircleOutline, z.caretDownCircleSharp, z.caretDownOutline, z.caretDownSharp, z.caretForward, z.caretForwardCircle, z.caretForwardCircleOutline, z.caretForwardCircleSharp, z.caretForwardOutline, z.caretForwardSharp, z.caretUp, z.caretUpCircle, z.caretUpCircleOutline, z.caretUpCircleSharp, z.caretUpOutline, z.caretUpSharp, z.cart, z.cartOutline, z.cartSharp, z.cash, z.cashOutline, z.cashSharp, z.cellular, z.cellularOutline, z.cellularSharp, z.chatbox, z.chatboxEllipses, z.chatboxEllipsesOutline, z.chatboxEllipsesSharp, z.chatboxOutline, z.chatboxSharp, z.chatbubble, z.chatbubbleEllipses, z.chatbubbleEllipsesOutline, z.chatbubbleEllipsesSharp, z.chatbubbleOutline, z.chatbubbleSharp, z.chatbubbles, z.chatbubblesOutline, z.chatbubblesSharp, z.checkbox, z.checkboxOutline, z.checkboxSharp, z.checkmark, z.checkmarkCircle, z.checkmarkCircleOutline, z.checkmarkCircleSharp, z.checkmarkDone, z.checkmarkDoneCircle, z.checkmarkDoneCircleOutline, z.checkmarkDoneCircleSharp, z.checkmarkDoneOutline, z.checkmarkDoneSharp, z.checkmarkOutline, z.checkmarkSharp, z.chevronBack, z.chevronBackCircle, z.chevronBackCircleOutline, z.chevronBackCircleSharp, z.chevronBackOutline, z.chevronBackSharp, z.chevronCollapse, z.chevronCollapseOutline, z.chevronCollapseSharp, z.chevronDown, z.chevronDownCircle, z.chevronDownCircleOutline, z.chevronDownCircleSharp, z.chevronDownOutline, z.chevronDownSharp, z.chevronExpand, z.chevronExpandOutline, z.chevronExpandSharp, z.chevronForward, z.chevronForwardCircle, z.chevronForwardCircleOutline, z.chevronForwardCircleSharp, z.chevronForwardOutline, z.chevronForwardSharp, z.chevronUp, z.chevronUpCircle, z.chevronUpCircleOutline, z.chevronUpCircleSharp, z.chevronUpOutline, z.chevronUpSharp, z.clipboard, z.clipboardOutline, z.clipboardSharp;
var V = z.close;
z.closeCircle, z.closeCircleOutline, z.closeCircleSharp, z.closeOutline, z.closeSharp, z.cloud, z.cloudCircle, z.cloudCircleOutline, z.cloudCircleSharp, z.cloudDone, z.cloudDoneOutline, z.cloudDoneSharp, z.cloudDownload, z.cloudDownloadOutline, z.cloudDownloadSharp, z.cloudOffline, z.cloudOfflineOutline, z.cloudOfflineSharp, z.cloudOutline, z.cloudSharp, z.cloudUpload, z.cloudUploadOutline, z.cloudUploadSharp, z.cloudy, z.cloudyNight, z.cloudyNightOutline, z.cloudyNightSharp, z.cloudyOutline, z.cloudySharp, z.code, z.codeDownload, z.codeDownloadOutline, z.codeDownloadSharp, z.codeOutline, z.codeSharp, z.codeSlash, z.codeSlashOutline, z.codeSlashSharp, z.codeWorking, z.codeWorkingOutline, z.codeWorkingSharp, z.cog, z.cogOutline, z.cogSharp, z.colorFill, z.colorFillOutline, z.colorFillSharp, z.colorFilter, z.colorFilterOutline, z.colorFilterSharp, z.colorPalette, z.colorPaletteOutline, z.colorPaletteSharp, z.colorWand, z.colorWandOutline, z.colorWandSharp, z.compass, z.compassOutline, z.compassSharp, z.construct, z.constructOutline, z.constructSharp, z.contract, z.contractOutline, z.contractSharp, z.contrast, z.contrastOutline, z.contrastSharp, z.copy, z.copyOutline, z.copySharp, z.create, z.createOutline, z.createSharp, z.crop, z.cropOutline, z.cropSharp, z.cube, z.cubeOutline, z.cubeSharp, z.cut, z.cutOutline, z.cutSharp, z.desktop, z.desktopOutline, z.desktopSharp, z.diamond, z.diamondOutline, z.diamondSharp, z.dice, z.diceOutline, z.diceSharp, z.disc, z.discOutline, z.discSharp, z.document, z.documentAttach, z.documentAttachOutline, z.documentAttachSharp, z.documentLock, z.documentLockOutline, z.documentLockSharp, z.documentOutline, z.documentSharp, z.documentText, z.documentTextOutline, z.documentTextSharp, z.documents, z.documentsOutline, z.documentsSharp, z.download, z.downloadOutline, z.downloadSharp, z.duplicate, z.duplicateOutline, z.duplicateSharp, z.ear, z.earOutline, z.earSharp, z.earth, z.earthOutline, z.earthSharp, z.easel, z.easelOutline, z.easelSharp, z.egg, z.eggOutline, z.eggSharp, z.ellipse, z.ellipseOutline, z.ellipseSharp, z.ellipsisHorizontal, z.ellipsisHorizontalCircle, z.ellipsisHorizontalCircleOutline, z.ellipsisHorizontalCircleSharp, z.ellipsisHorizontalOutline, z.ellipsisHorizontalSharp, z.ellipsisVertical, z.ellipsisVerticalCircle, z.ellipsisVerticalCircleOutline, z.ellipsisVerticalCircleSharp, z.ellipsisVerticalOutline, z.ellipsisVerticalSharp, z.enter, z.enterOutline, z.enterSharp, z.exit, z.exitOutline, z.exitSharp, z.expand, z.expandOutline, z.expandSharp, z.extensionPuzzle, z.extensionPuzzleOutline, z.extensionPuzzleSharp, z.eye, z.eyeOff, z.eyeOffOutline, z.eyeOffSharp, z.eyeOutline, z.eyeSharp, z.eyedrop, z.eyedropOutline, z.eyedropSharp, z.fastFood, z.fastFoodOutline, z.fastFoodSharp, z.female, z.femaleOutline, z.femaleSharp, z.fileTray, z.fileTrayFull, z.fileTrayFullOutline, z.fileTrayFullSharp, z.fileTrayOutline, z.fileTraySharp, z.fileTrayStacked, z.fileTrayStackedOutline, z.fileTrayStackedSharp, z.film, z.filmOutline, z.filmSharp, z.filter, z.filterCircle, z.filterCircleOutline, z.filterCircleSharp, z.filterOutline, z.filterSharp, z.fingerPrint, z.fingerPrintOutline, z.fingerPrintSharp, z.fish, z.fishOutline, z.fishSharp, z.fitness, z.fitnessOutline, z.fitnessSharp, z.flag, z.flagOutline, z.flagSharp, z.flame, z.flameOutline, z.flameSharp, z.flash, z.flashOff, z.flashOffOutline, z.flashOffSharp, z.flashOutline, z.flashSharp, z.flashlight, z.flashlightOutline, z.flashlightSharp, z.flask, z.flaskOutline, z.flaskSharp, z.flower, z.flowerOutline, z.flowerSharp, z.folder, z.folderOpen, z.folderOpenOutline, z.folderOpenSharp, z.folderOutline, z.folderSharp, z.football, z.footballOutline, z.footballSharp, z.footsteps, z.footstepsOutline, z.footstepsSharp, z.funnel, z.funnelOutline, z.funnelSharp, z.gameController, z.gameControllerOutline, z.gameControllerSharp, z.gift, z.giftOutline, z.giftSharp, z.gitBranch, z.gitBranchOutline, z.gitBranchSharp, z.gitCommit, z.gitCommitOutline, z.gitCommitSharp, z.gitCompare, z.gitCompareOutline, z.gitCompareSharp, z.gitMerge, z.gitMergeOutline, z.gitMergeSharp, z.gitNetwork, z.gitNetworkOutline, z.gitNetworkSharp, z.gitPullRequest, z.gitPullRequestOutline, z.gitPullRequestSharp, z.glasses, z.glassesOutline, z.glassesSharp, z.globe, z.globeOutline, z.globeSharp, z.golf, z.golfOutline, z.golfSharp, z.grid, z.gridOutline, z.gridSharp, z.hammer, z.hammerOutline, z.hammerSharp, z.handLeft, z.handLeftOutline, z.handLeftSharp, z.handRight, z.handRightOutline, z.handRightSharp, z.happy, z.happyOutline, z.happySharp, z.hardwareChip, z.hardwareChipOutline, z.hardwareChipSharp, z.headset, z.headsetOutline, z.headsetSharp, z.heart, z.heartCircle, z.heartCircleOutline, z.heartCircleSharp, z.heartDislike, z.heartDislikeCircle, z.heartDislikeCircleOutline, z.heartDislikeCircleSharp, z.heartDislikeOutline, z.heartDislikeSharp, z.heartHalf, z.heartHalfOutline, z.heartHalfSharp, z.heartOutline, z.heartSharp, z.help, z.helpBuoy, z.helpBuoyOutline, z.helpBuoySharp, z.helpCircle, z.helpCircleOutline, z.helpCircleSharp, z.helpOutline, z.helpSharp, z.home, z.homeOutline, z.homeSharp, z.hourglass, z.hourglassOutline, z.hourglassSharp, z.iceCream, z.iceCreamOutline, z.iceCreamSharp, z.idCard, z.idCardOutline, z.idCardSharp, z.image, z.imageOutline, z.imageSharp, z.images, z.imagesOutline, z.imagesSharp, z.infinite, z.infiniteOutline, z.infiniteSharp, z.information, z.informationCircle, z.informationCircleOutline, z.informationCircleSharp, z.informationOutline, z.informationSharp, z.invertMode, z.invertModeOutline, z.invertModeSharp, z.journal, z.journalOutline, z.journalSharp, z.key, z.keyOutline, z.keySharp, z.keypad, z.keypadOutline, z.keypadSharp, z.language, z.languageOutline, z.languageSharp, z.laptop, z.laptopOutline, z.laptopSharp, z.layers, z.layersOutline, z.layersSharp, z.leaf, z.leafOutline, z.leafSharp, z.library, z.libraryOutline, z.librarySharp, z.link, z.linkOutline, z.linkSharp, z.list, z.listCircle, z.listCircleOutline, z.listCircleSharp, z.listOutline, z.listSharp, z.locate, z.locateOutline, z.locateSharp, z.location, z.locationOutline, z.locationSharp, z.lockClosed, z.lockClosedOutline, z.lockClosedSharp, z.lockOpen, z.lockOpenOutline, z.lockOpenSharp, z.logIn, z.logInOutline, z.logInSharp, z.logOut, z.logOutOutline, z.logOutSharp, z.logoAlipay, z.logoAmazon, z.logoAmplify, z.logoAndroid, z.logoAngular, z.logoAppflow, z.logoApple, z.logoAppleAppstore, z.logoAppleAr, z.logoBehance, z.logoBitbucket, z.logoBitcoin, z.logoBuffer, z.logoCapacitor, z.logoChrome, z.logoClosedCaptioning, z.logoCodepen, z.logoCss3, z.logoDesignernews, z.logoDeviantart, z.logoDiscord, z.logoDocker, z.logoDribbble, z.logoDropbox, z.logoEdge, z.logoElectron, z.logoEuro, z.logoFacebook, z.logoFigma, z.logoFirebase, z.logoFirefox, z.logoFlickr, z.logoFoursquare, z.logoGithub, z.logoGitlab, z.logoGoogle, z.logoGooglePlaystore, z.logoHackernews, z.logoHtml5, z.logoInstagram, z.logoIonic, z.logoIonitron, z.logoJavascript, z.logoLaravel, z.logoLinkedin, z.logoMarkdown, z.logoMastodon, z.logoMedium, z.logoMicrosoft, z.logoNoSmoking, z.logoNodejs, z.logoNpm, z.logoOctocat, z.logoPaypal, z.logoPinterest, z.logoPlaystation, z.logoPwa, z.logoPython, z.logoReact, z.logoReddit, z.logoRss, z.logoSass, z.logoSkype, z.logoSlack, z.logoSnapchat, z.logoSoundcloud, z.logoStackoverflow, z.logoSteam, z.logoStencil, z.logoTableau, z.logoThreads, z.logoTiktok, z.logoTrapeze, z.logoTumblr, z.logoTux, z.logoTwitch, z.logoTwitter, z.logoUsd, z.logoVenmo, z.logoVercel, z.logoVimeo, z.logoVk, z.logoVue, z.logoWebComponent, z.logoWechat, z.logoWhatsapp, z.logoWindows, z.logoWordpress, z.logoX, z.logoXbox, z.logoXing, z.logoYahoo, z.logoYen, z.logoYoutube, z.magnet, z.magnetOutline, z.magnetSharp, z.mail, z.mailOpen, z.mailOpenOutline, z.mailOpenSharp, z.mailOutline, z.mailSharp, z.mailUnread, z.mailUnreadOutline, z.mailUnreadSharp, z.male, z.maleFemale, z.maleFemaleOutline, z.maleFemaleSharp, z.maleOutline, z.maleSharp, z.man, z.manOutline, z.manSharp, z.map, z.mapOutline, z.mapSharp, z.medal, z.medalOutline, z.medalSharp, z.medical, z.medicalOutline, z.medicalSharp, z.medkit, z.medkitOutline, z.medkitSharp, z.megaphone, z.megaphoneOutline, z.megaphoneSharp, z.menu, z.menuOutline, z.menuSharp, z.mic, z.micCircle, z.micCircleOutline, z.micCircleSharp, z.micOff, z.micOffCircle, z.micOffCircleOutline, z.micOffCircleSharp, z.micOffOutline, z.micOffSharp, z.micOutline, z.micSharp, z.moon, z.moonOutline, z.moonSharp, z.move, z.moveOutline, z.moveSharp, z.musicalNote, z.musicalNoteOutline, z.musicalNoteSharp, z.musicalNotes, z.musicalNotesOutline, z.musicalNotesSharp, z.navigate, z.navigateCircle, z.navigateCircleOutline, z.navigateCircleSharp, z.navigateOutline, z.navigateSharp, z.newspaper, z.newspaperOutline, z.newspaperSharp, z.notifications, z.notificationsCircle, z.notificationsCircleOutline, z.notificationsCircleSharp, z.notificationsOff, z.notificationsOffCircle, z.notificationsOffCircleOutline, z.notificationsOffCircleSharp, z.notificationsOffOutline, z.notificationsOffSharp, z.notificationsOutline, z.notificationsSharp, z.nuclear, z.nuclearOutline, z.nuclearSharp, z.nutrition, z.nutritionOutline, z.nutritionSharp, z.open, z.openOutline, z.openSharp, z.options, z.optionsOutline, z.optionsSharp, z.paperPlane, z.paperPlaneOutline, z.paperPlaneSharp, z.partlySunny, z.partlySunnyOutline, z.partlySunnySharp, z.pause, z.pauseCircle, z.pauseCircleOutline, z.pauseCircleSharp, z.pauseOutline, z.pauseSharp, z.paw, z.pawOutline, z.pawSharp, z.pencil, z.pencilOutline, z.pencilSharp, z.people, z.peopleCircle, z.peopleCircleOutline, z.peopleCircleSharp, z.peopleOutline, z.peopleSharp, z.person, z.personAdd, z.personAddOutline, z.personAddSharp, z.personCircle, z.personCircleOutline, z.personCircleSharp, z.personOutline, z.personRemove, z.personRemoveOutline, z.personRemoveSharp, z.personSharp, z.phoneLandscape, z.phoneLandscapeOutline, z.phoneLandscapeSharp, z.phonePortrait, z.phonePortraitOutline, z.phonePortraitSharp, z.pieChart, z.pieChartOutline, z.pieChartSharp, z.pin, z.pinOutline, z.pinSharp, z.pint, z.pintOutline, z.pintSharp, z.pizza, z.pizzaOutline, z.pizzaSharp, z.planet, z.planetOutline, z.planetSharp, z.play, z.playBack, z.playBackCircle, z.playBackCircleOutline, z.playBackCircleSharp, z.playBackOutline, z.playBackSharp, z.playCircle, z.playCircleOutline, z.playCircleSharp, z.playForward, z.playForwardCircle, z.playForwardCircleOutline, z.playForwardCircleSharp, z.playForwardOutline, z.playForwardSharp, z.playOutline, z.playSharp, z.playSkipBack, z.playSkipBackCircle, z.playSkipBackCircleOutline, z.playSkipBackCircleSharp, z.playSkipBackOutline, z.playSkipBackSharp, z.playSkipForward, z.playSkipForwardCircle, z.playSkipForwardCircleOutline, z.playSkipForwardCircleSharp, z.playSkipForwardOutline, z.playSkipForwardSharp, z.podium, z.podiumOutline, z.podiumSharp, z.power, z.powerOutline, z.powerSharp, z.pricetag, z.pricetagOutline, z.pricetagSharp, z.pricetags, z.pricetagsOutline, z.pricetagsSharp, z.print, z.printOutline, z.printSharp, z.prism, z.prismOutline, z.prismSharp, z.pulse, z.pulseOutline, z.pulseSharp, z.push, z.pushOutline, z.pushSharp, z.qrCode, z.qrCodeOutline, z.qrCodeSharp, z.radio, z.radioButtonOff, z.radioButtonOffOutline, z.radioButtonOffSharp, z.radioButtonOn, z.radioButtonOnOutline, z.radioButtonOnSharp, z.radioOutline, z.radioSharp, z.rainy, z.rainyOutline, z.rainySharp, z.reader, z.readerOutline, z.readerSharp, z.receipt, z.receiptOutline, z.receiptSharp, z.recording, z.recordingOutline, z.recordingSharp, z.refresh, z.refreshCircle, z.refreshCircleOutline, z.refreshCircleSharp, z.refreshOutline, z.refreshSharp, z.reload, z.reloadCircle, z.reloadCircleOutline, z.reloadCircleSharp, z.reloadOutline, z.reloadSharp, z.remove, z.removeCircle, z.removeCircleOutline, z.removeCircleSharp, z.removeOutline, z.removeSharp, z.reorderFour, z.reorderFourOutline, z.reorderFourSharp, z.reorderThree, z.reorderThreeOutline, z.reorderThreeSharp, z.reorderTwo, z.reorderTwoOutline, z.reorderTwoSharp, z.repeat, z.repeatOutline, z.repeatSharp, z.resize, z.resizeOutline, z.resizeSharp, z.restaurant, z.restaurantOutline, z.restaurantSharp, z.returnDownBack, z.returnDownBackOutline, z.returnDownBackSharp, z.returnDownForward, z.returnDownForwardOutline, z.returnDownForwardSharp, z.returnUpBack, z.returnUpBackOutline, z.returnUpBackSharp, z.returnUpForward, z.returnUpForwardOutline, z.returnUpForwardSharp, z.ribbon, z.ribbonOutline, z.ribbonSharp, z.rocket, z.rocketOutline, z.rocketSharp, z.rose, z.roseOutline, z.roseSharp, z.sad, z.sadOutline, z.sadSharp, z.save, z.saveOutline, z.saveSharp, z.scale, z.scaleOutline, z.scaleSharp, z.scan, z.scanCircle, z.scanCircleOutline, z.scanCircleSharp, z.scanOutline, z.scanSharp, z.school, z.schoolOutline, z.schoolSharp, z.search, z.searchCircle, z.searchCircleOutline, z.searchCircleSharp, z.searchOutline, z.searchSharp, z.send, z.sendOutline, z.sendSharp, z.server, z.serverOutline, z.serverSharp, z.settings, z.settingsOutline, z.settingsSharp, z.shapes, z.shapesOutline, z.shapesSharp, z.share, z.shareOutline, z.shareSharp, z.shareSocial, z.shareSocialOutline, z.shareSocialSharp, z.shield, z.shieldCheckmark, z.shieldCheckmarkOutline, z.shieldCheckmarkSharp, z.shieldHalf, z.shieldHalfOutline, z.shieldHalfSharp, z.shieldOutline, z.shieldSharp, z.shirt, z.shirtOutline, z.shirtSharp, z.shuffle, z.shuffleOutline, z.shuffleSharp, z.skull, z.skullOutline, z.skullSharp, z.snow, z.snowOutline, z.snowSharp, z.sparkles, z.sparklesOutline, z.sparklesSharp, z.speedometer, z.speedometerOutline, z.speedometerSharp, z.square, z.squareOutline, z.squareSharp, z.star, z.starHalf, z.starHalfOutline, z.starHalfSharp, z.starOutline, z.starSharp, z.statsChart, z.statsChartOutline, z.statsChartSharp, z.stop, z.stopCircle, z.stopCircleOutline, z.stopCircleSharp, z.stopOutline, z.stopSharp, z.stopwatch, z.stopwatchOutline, z.stopwatchSharp, z.storefront, z.storefrontOutline, z.storefrontSharp, z.subway, z.subwayOutline, z.subwaySharp, z.sunny, z.sunnyOutline, z.sunnySharp, z.swapHorizontal, z.swapHorizontalOutline, z.swapHorizontalSharp, z.swapVertical, z.swapVerticalOutline, z.swapVerticalSharp, z.sync, z.syncCircle, z.syncCircleOutline, z.syncCircleSharp, z.syncOutline, z.syncSharp, z.tabletLandscape, z.tabletLandscapeOutline, z.tabletLandscapeSharp, z.tabletPortrait, z.tabletPortraitOutline, z.tabletPortraitSharp, z.telescope, z.telescopeOutline, z.telescopeSharp, z.tennisball, z.tennisballOutline, z.tennisballSharp, z.terminal, z.terminalOutline, z.terminalSharp, z.text, z.textOutline, z.textSharp, z.thermometer, z.thermometerOutline, z.thermometerSharp, z.thumbsDown, z.thumbsDownOutline, z.thumbsDownSharp, z.thumbsUp, z.thumbsUpOutline, z.thumbsUpSharp, z.thunderstorm, z.thunderstormOutline, z.thunderstormSharp, z.ticket, z.ticketOutline, z.ticketSharp, z.time, z.timeOutline, z.timeSharp, z.timer, z.timerOutline, z.timerSharp, z.today, z.todayOutline, z.todaySharp, z.toggle, z.toggleOutline, z.toggleSharp, z.trailSign, z.trailSignOutline, z.trailSignSharp, z.train, z.trainOutline, z.trainSharp, z.transgender, z.transgenderOutline, z.transgenderSharp, z.trash, z.trashBin, z.trashBinOutline, z.trashBinSharp, z.trashOutline, z.trashSharp, z.trendingDown, z.trendingDownOutline, z.trendingDownSharp, z.trendingUp, z.trendingUpOutline, z.trendingUpSharp, z.triangle, z.triangleOutline, z.triangleSharp, z.trophy, z.trophyOutline, z.trophySharp, z.tv, z.tvOutline, z.tvSharp, z.umbrella, z.umbrellaOutline, z.umbrellaSharp, z.unlink, z.unlinkOutline, z.unlinkSharp, z.videocam, z.videocamOff, z.videocamOffOutline, z.videocamOffSharp, z.videocamOutline, z.videocamSharp, z.volumeHigh, z.volumeHighOutline, z.volumeHighSharp, z.volumeLow, z.volumeLowOutline, z.volumeLowSharp, z.volumeMedium, z.volumeMediumOutline, z.volumeMediumSharp, z.volumeMute, z.volumeMuteOutline, z.volumeMuteSharp, z.volumeOff, z.volumeOffOutline, z.volumeOffSharp, z.walk, z.walkOutline, z.walkSharp, z.wallet, z.walletOutline, z.walletSharp, z.warning, z.warningOutline, z.warningSharp, z.watch, z.watchOutline, z.watchSharp, z.water, z.waterOutline, z.waterSharp, z.wifi, z.wifiOutline, z.wifiSharp, z.wine, z.wineOutline, z.wineSharp, z.woman, z.womanOutline, z.womanSharp;
//#endregion
//#region src/components/parts/Modal.vue?vue&type=script&setup=true&lang.ts
var H = {
	key: 0,
	class: "sheet-body"
}, U = /*@__PURE__*/ h({
	__name: "Modal",
	props: /*@__PURE__*/ ee({
		title: { default: "" },
		sheet: {
			type: Boolean,
			default: !1
		},
		autoHeight: {
			type: Boolean,
			default: !0
		},
		breakpoints: { default: () => [0, 1] },
		initialBreakpoint: { default: 1 }
	}, {
		modelValue: {
			type: Boolean,
			default: !1
		},
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = y(), n = C(e, "modelValue"), r = c(() => e.sheet && e.autoHeight ? { "--height": "auto" } : {});
		return (i, a) => (v(), l(S(P), {
			ref_key: "modal",
			ref: t,
			style: _(r.value),
			"initial-breakpoint": e.sheet ? e.initialBreakpoint : void 0,
			breakpoints: e.sheet ? e.breakpoints : void 0,
			"is-open": n.value,
			onWillDismiss: a[1] ||= (e) => n.value = !1
		}, {
			default: w(() => [e.sheet ? (v(), d("div", H, [b(i.$slots, "default", {}, void 0, !0)])) : (v(), d(s, { key: 1 }, [m(S(k), null, {
				default: w(() => [m(S(R), null, {
					default: w(() => [m(S(D), { slot: "start" }, {
						default: w(() => [m(S(E), { onClick: a[0] ||= (e) => n.value = !1 }, {
							default: w(() => [m(S(A), { icon: S(V) }, null, 8, ["icon"])]),
							_: 1
						})]),
						_: 1
					}), m(S(L), null, {
						default: w(() => [p(x(e.title), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			}), m(S(O), { class: "content" }, {
				default: w(() => [b(i.$slots, "default", {}, void 0, !0)]),
				_: 3
			})], 64))]),
			_: 3
		}, 8, [
			"style",
			"initial-breakpoint",
			"breakpoints",
			"is-open"
		]));
	}
}), W = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, G = /*#__PURE__*/ W(U, [["__scopeId", "data-v-039f4d1e"]]), K = globalThis.FateSDK.vueI18n;
K.DatetimeFormat, K.I18nD, K.I18nInjectionKey, K.I18nN, K.I18nT, K.NumberFormat, K.Translation, K.VERSION, K.createI18n;
var q = K.useI18n;
K.vTDirective;
//#endregion
//#region src/utils/validators.ts
function J(e) {
	if (!e.name) return "sonder@relationships.errors.nameRequired";
	if (!e.what) return "sonder@relationships.errors.whatRequired";
}
//#endregion
//#region src/components/parts/RelationForm.vue?vue&type=script&setup=true&lang.ts
var Y = { class: "form" }, X = { class: "actions" }, Z = /*#__PURE__*/ W(/* @__PURE__ */ h({
	__name: "RelationForm",
	props: {
		relation: {},
		mode: {}
	},
	emits: ["remove", "save"],
	setup(e, { emit: t }) {
		let n = t, { t: r } = q(), i = y(e.relation ? {
			id: e.relation.id,
			name: e.relation.name,
			what: e.relation.what
		} : {
			id: crypto.randomUUID(),
			name: "",
			what: ""
		}), a = c(() => J(i.value));
		function o() {
			n("save", i.value);
		}
		function s() {
			window.confirm(r("sonder@relationships.confirmRemove", { value: e.relation?.name ?? "" })) && n("remove");
		}
		return (t, n) => (v(), d("div", Y, [f("div", null, [m(S(N), { inset: "" }, {
			default: w(() => [m(S(M), null, {
				default: w(() => [m(S(j), {
					modelValue: i.value.name,
					"onUpdate:modelValue": n[0] ||= (e) => i.value.name = e,
					"data-testid": "relation-name-input",
					inputmode: "text",
					placeholder: t.$t("sonder@relationships.form.name.placeholder"),
					"label-placement": "fixed",
					enterkeyhint: "next",
					label: t.$t("sonder@relationships.form.name.label"),
					required: ""
				}, null, 8, [
					"modelValue",
					"placeholder",
					"label"
				])]),
				_: 1
			}), m(S(M), null, {
				default: w(() => [m(S(I), {
					modelValue: i.value.what,
					"onUpdate:modelValue": n[1] ||= (e) => i.value.what = e,
					"data-testid": "relation-what-input",
					placeholder: t.$t("sonder@relationships.form.what.placeholder"),
					inputmode: "text",
					"auto-grow": "",
					"label-placement": "fixed",
					label: t.$t("sonder@relationships.form.what.label"),
					rows: 3
				}, null, 8, [
					"modelValue",
					"placeholder",
					"label"
				])]),
				_: 1
			})]),
			_: 1
		}), a.value ? (v(), l(S(F), {
			key: 0,
			"data-testid": "relation-validation-error",
			class: "error",
			color: "danger"
		}, {
			default: w(() => [p(x(t.$t(a.value)), 1)]),
			_: 1
		})) : u("", !0)]), f("div", X, [e.mode === "edit" ? (v(), l(S(E), {
			key: 0,
			"data-testid": "remove-relation-button",
			color: "danger",
			expand: "full",
			fill: "clear",
			onClick: s
		}, {
			default: w(() => [p(x(t.$t("sonder@relationships.actions.remove")), 1)]),
			_: 1
		})) : u("", !0), m(S(E), {
			"data-testid": "save-relation-button",
			expand: "block",
			disabled: !!a.value,
			onClick: o
		}, {
			default: w(() => [p(x(t.$t(e.mode === "edit" ? "sonder@relationships.actions.save" : "sonder@relationships.actions.add")), 1)]),
			_: 1
		}, 8, ["disabled"])])]));
	}
}), [["__scopeId", "data-v-374c89c7"]]), ne = { class: "columns" }, re = { class: "name" }, ie = { class: "what" }, ae = /*#__PURE__*/ W(/* @__PURE__ */ h({
	__name: "Relation",
	props: {
		relation: {},
		isLast: { type: Boolean }
	},
	emits: ["update", "remove"],
	setup(e, { emit: t }) {
		let n = t, r = y(!1);
		function i(e) {
			r.value = !1, g(() => {
				n("update", e);
			});
		}
		function a() {
			r.value = !1, g(() => {
				n("remove");
			});
		}
		return (t, n) => (v(), d(s, null, [m(S(M), {
			button: "",
			detail: !0,
			lines: e.isLast ? "none" : "full",
			class: "row",
			"data-testid": "edit-relation-button",
			"aria-label": `${e.relation.name} ${t.$t("sonder@relationships.relation")}`,
			onClick: n[0] ||= (e) => r.value = !0
		}, {
			default: w(() => [f("div", ne, [f("span", re, x(e.relation.name), 1), f("span", ie, x(e.relation.what), 1)])]),
			_: 1
		}, 8, ["lines", "aria-label"]), m(G, {
			modelValue: r.value,
			"onUpdate:modelValue": n[1] ||= (e) => r.value = e,
			title: t.$t("sonder@relationships.edit"),
			sheet: ""
		}, {
			default: w(() => [m(Z, {
				relation: e.relation,
				mode: "edit",
				onSave: i,
				onRemove: a
			}, null, 8, ["relation"])]),
			_: 1
		}, 8, ["modelValue", "title"])], 64));
	}
}), [["__scopeId", "data-v-4cbbb6fa"]]), Q = "sonder@relationships.relations";
function oe(e, r) {
	n(r, Q, t(r, "sonder@relationships.relations") ?? []);
}
function $(e, t) {
	delete t[Q];
}
function se(e, t) {}
//#endregion
//#region src/components/Relations.vue?vue&type=script&setup=true&lang.ts
var ce = ["aria-label"], le = {
	key: 1,
	class: "empty"
}, ue = e({
	components: [{
		id: "sonder@relationships-list",
		component: /* @__PURE__ */ W(/* @__PURE__ */ h({
			__name: "Relations",
			props: {
				modelValue: { required: !0 },
				modelModifiers: {}
			},
			emits: ["update:modelValue"],
			setup(e) {
				let r = C(e, "modelValue"), i = c(() => t(r.value, "sonder@relationships.relations") ?? []), o = y(!1);
				function u(e) {
					n(r.value, Q, [...i.value, e]), o.value = !1;
				}
				function p(e, t) {
					let a = [...i.value];
					a.splice(e, 1, t), n(r.value, Q, a);
				}
				function h(e) {
					let t = [...i.value];
					t.splice(e, 1), n(r.value, Q, t);
				}
				return (e, t) => (v(), d(s, null, [m(S(a), { title: e.$t("sonder@relationships.label") }, {
					header: w(() => [f("button", {
						type: "button",
						class: "add-button",
						"data-testid": "add-relation-button",
						"aria-label": e.$t("sonder@relationships.add"),
						onClick: t[0] ||= (e) => o.value = !0
					}, [m(S(A), { icon: S(B) }, null, 8, ["icon"])], 8, ce)]),
					default: w(() => [i.value.length ? (v(), l(S(N), {
						key: 0,
						"data-testid": "relations-list",
						class: "list"
					}, {
						default: w(() => [(v(!0), d(s, null, te(i.value, (e, t) => (v(), l(ae, {
							key: e.id,
							relation: e,
							"is-last": t === i.value.length - 1,
							onUpdate: (e) => p(t, e),
							onRemove: (e) => h(t)
						}, null, 8, [
							"relation",
							"is-last",
							"onUpdate",
							"onRemove"
						]))), 128))]),
						_: 1
					})) : (v(), d("p", le, x(e.$t("sonder@relationships.empty")), 1))]),
					_: 1
				}, 8, ["title"]), m(G, {
					modelValue: o.value,
					"onUpdate:modelValue": t[1] ||= (e) => o.value = e,
					title: e.$t("sonder@relationships.add"),
					sheet: ""
				}, {
					default: w(() => [m(Z, { onSave: u })]),
					_: 1
				}, 8, ["modelValue", "title"])], 64));
			}
		}), [["__scopeId", "data-v-5d79571f"]]),
		order: 1600
	}],
	onInstall: oe,
	onUninstall: $,
	onReconfigure: se
});
//#endregion
export { ue as default };
