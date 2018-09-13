module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 119);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_gallery__ = __webpack_require__(120);


/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__src_gallery__["a" /* default */].install = function (Vue) {
	Vue.component(__WEBPACK_IMPORTED_MODULE_0__src_gallery__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__src_gallery__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__src_gallery__["a" /* default */]);

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_gallery_vue__ = __webpack_require__(51);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_2be2e44c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_gallery_vue__ = __webpack_require__(121);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_gallery_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_2be2e44c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_gallery_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"neo-gallery"},[_c('div',{staticClass:"neo-gallery__booth",on:{"mousemove":_vm.selectContainerMouseMove,"mouseover":_vm.selectContainerMouseOver,"mouseout":_vm.selectContainerMouseOut}},[_c('img',{staticClass:"select-img",attrs:{"src":_vm.imgSrcUrl,"alt":"","id":"select-img"}}),(_vm.imgSrcUrl)?_c('span',{staticClass:"mask",attrs:{"id":"mask"},on:{"mouseover":_vm.maskMouseOver,"mouseout":_vm.maskMouseOut}}):_vm._e(),_c('div',{staticClass:"big-box",attrs:{"id":"big-box"}},[_c('img',{staticClass:"big-img",attrs:{"src":_vm.imgSrcUrl,"alt":"","id":"big-img"}})])]),_c('div',{staticClass:"neo-gallery__thumb"},[_c('i',{staticClass:"swiper-button-prev neo-icon",attrs:{"slot":"button-prev"},slot:"button-prev"},[_vm._v("")]),_c('swiper',{staticClass:"swiper",attrs:{"options":_vm.swiperOption}},_vm._l((_vm.homeBanner),function(item,index){return _c('swiper-slide',{key:index},[_c('img',{staticClass:"img",attrs:{"src":item,"alt":""},on:{"click":function($event){_vm.imgClick(item)}}})])})),_c('i',{staticClass:"swiper-button-next neo-icon",attrs:{"slot":"button-next"},slot:"button-next"},[_vm._v("")])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'NeoGallery',
    components: {
        // Swiper, 
        // SwiperSlide
    },
    props: {
        homeBanner: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        isShowBigImg: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        homeBanner: function homeBanner(newValue, oldValue) {
            if (newValue && this.homeBanner.length > 0) {
                this.imgSrcUrl = this.homeBanner[0];
            }
        }
    },
    data: function data() {
        return {
            imgSrcUrl: "",
            swiperOption: {
                slidesPerView: 4,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        };
    },

    methods: {
        imgClick: function imgClick(item) {
            this.imgSrcUrl = item;
        },
        selectContainerMouseOver: function selectContainerMouseOver() {
            if (this.isShowBigImg) {
                var mask = document.getElementById("mask");
                if (mask.style) {
                    mask.style.display = "block";
                    mask.style.cursor = "pointer";
                }
            }
        },

        selectContainerMouseOut: function selectContainerMouseOut() {
            var mask = document.getElementById("mask");
            if (mask.style) {
                mask.style.display = "none";
            }
        },
        selectContainerMouseMove: function selectContainerMouseMove(ev) {
            var bigImg = document.getElementById("big-img");
            var mask = document.getElementById("mask");
            var selectImg = document.getElementById("select-img");
            if (!bigImg && !mask && !selectImg) {
                return;
            }
            var clientRect = ev.currentTarget.getBoundingClientRect();
            var evX = (ev.clientX || window || window.event) - clientRect.left;
            var evY = (ev.clientY || window || window.event) - clientRect.top;
            var x = evX - mask.offsetWidth / 2;
            var y = evY - mask.offsetHeight / 2;
            if (evX < mask.offsetWidth / 2) {
                x = 0;
            }
            if (evX > selectImg.offsetWidth - mask.offsetWidth / 2) {
                x = selectImg.offsetWidth - mask.offsetWidth;
            }
            if (evY < mask.offsetHeight / 2) {
                y = 0;
            }
            if (evY > selectImg.offsetHeight - mask.offsetHeight / 2) {
                y = selectImg.offsetHeight - mask.offsetHeight;
            }
            if (evX < 264 && evY < 264) {
                mask.style.left = x + 'px';
                mask.style.top = y + 'px';
                bigImg.style.left = -x * (bigImg.offsetWidth / selectImg.offsetWidth) + 'px';
                bigImg.style.top = -y * (bigImg.offsetHeight / selectImg.offsetHeight) + 'px';
            }
        },
        maskMouseOver: function maskMouseOver() {
            var bigBox = document.getElementById("big-box");
            if (!bigBox) {
                return;
            }
            bigBox.style.display = "block";
        },
        maskMouseOut: function maskMouseOut() {
            var bigBox = document.getElementById("big-box");
            if (!bigBox) {
                return;
            }
            bigBox.style.display = "none";
        }
    }
});

/***/ })

/******/ });