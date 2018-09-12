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
/******/ 	return __webpack_require__(__webpack_require__.s = 111);
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

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_checkbox__ = __webpack_require__(112);


/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__src_checkbox__["a" /* default */].install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__src_checkbox__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__src_checkbox__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__src_checkbox__["a" /* default */]);

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_checkbox_vue__ = __webpack_require__(50);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_18777c38_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_checkbox_vue__ = __webpack_require__(115);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_checkbox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_18777c38_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_checkbox_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 113:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA70lEQVQ4T6WTu0oDQRiFz5nsgIqF4BtsIC8iXlpBRIKlzCMkRYqktbG0tE2Rd0hloVjYWrjVvkJYkFn2l0F22ex91+m/78x/I/7x7MxfcijvYAFXgwQp7MJ7C/Jwb0ER7iWogjsL6uBOgia4VdAABxCcgjipnUJDza9esruy6vgJgKkUNCS/aXgXlvGUgmcBVEnwB+Ma4LtLSDeVxIcHObfgXQqXepCtJ7H1DoPLOPIXbl0BfGplz6zo2zy8J6j49lofBfdJ5Bs1+tnY5OCmCGeC2prJF/34/WDnY1MFiyBk25xB+aJw4hpWuNyQCuYXsJRy3sA4d2cAAAAASUVORK5CYII="

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"neo-checkbox",class:[{'is-checked':_vm.isChecked,'is-disabled':_vm.disabled}],on:{"click":function($event){_vm.handleClick(_vm.item.key)},"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},[_c('span',[_vm._v(_vm._s(_vm.item.value))]),_c('img',{directives:[{name:"show",rawName:"v-show",value:(!_vm.disabled),expression:"!disabled"}],staticClass:"neo-checkbox__image",attrs:{"src":[_vm.isChecked?_vm.mark_select:_vm.mark_unselect]}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _broadcast(componentName, eventName, params) {
  this.$children.forEach(function (child) {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    }
  }
});

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_images_checkright_png__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_images_checkright_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_images_checkright_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_images_mark_unselect_png__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_images_mark_unselect_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_images_mark_unselect_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_emitter_js__ = __webpack_require__(35);
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'NeoCheckbox',
  componentName: 'NeoCheckbox',
  mixins: [__WEBPACK_IMPORTED_MODULE_2__utils_emitter_js__["a" /* default */]],
  props: {
    item: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      mark_select: __WEBPACK_IMPORTED_MODULE_0__assets_images_checkright_png___default.a,
      mark_unselect: __WEBPACK_IMPORTED_MODULE_1__assets_images_mark_unselect_png___default.a,
      focus: false
    };
  },

  computed: {
    _checkboxGroup: function _checkboxGroup() {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'NeoCheckboxGroup') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
      return false;
    },

    isChecked: {
      get: function get() {
        return this._checkboxGroup.value.indexOf(this.item.key) > -1;
      },
      set: function set(val) {
        if (val) {
          this._checkboxGroup.value.splice(this._checkboxGroup.value.length, 1, this.item.key);
        } else {
          this._checkboxGroup.value.splice(this._checkboxGroup.value.indexOf(this.item.key), 1);
        }
      }
    }
  },
  methods: {
    handleClick: handleClick
  }
});

function handleClick(key) {
  var _this = this;

  if (this.disabled) {
    return;
  }
  this.isChecked = !this.isChecked;
  this.$nextTick(function () {
    _this.dispatch("NeoCheckboxGroup", "input", [_this._checkboxGroup.value]);
  });
}

/***/ })

/******/ });