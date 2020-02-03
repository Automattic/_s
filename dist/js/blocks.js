<<<<<<< HEAD
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/blocks.js":
/*!**************************!*\
  !*** ./blocks/blocks.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formats */ "./blocks/formats/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./blocks/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flickity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flickity */ "./blocks/flickity/index.js");
/* harmony import */ var _common_appearance_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/appearance-controls */ "./blocks/common/appearance-controls.js");
/* harmony import */ var _testimonial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testimonial */ "./blocks/testimonial/index.js");
/* harmony import */ var _testimonial_list_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testimonial/list/index */ "./blocks/testimonial/list/index.js");
/* harmony import */ var _testimonial_embed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonial/embed */ "./blocks/testimonial/embed.js");
/* harmony import */ var _testimonial_author__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./testimonial/author */ "./blocks/testimonial/author.js");
/* harmony import */ var _testimonial_rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./testimonial/rating */ "./blocks/testimonial/rating.js");
/* harmony import */ var _product_price__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/price */ "./blocks/product/price.js");
/* harmony import */ var _product_addtocart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/addtocart */ "./blocks/product/addtocart.js");
/* harmony import */ var _product_stock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/stock */ "./blocks/product/stock.js");
/* harmony import */ var _product_rating__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product/rating */ "./blocks/product/rating.js");
/* harmony import */ var _call_us__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./call-us */ "./blocks/call-us/index.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./card */ "./blocks/card/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icon */ "./blocks/icon/index.js");
/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bullet */ "./blocks/bullet/index.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile */ "./blocks/profile/index.js");
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./stats */ "./blocks/stats/index.js");
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./collapse */ "./blocks/collapse/index.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./map */ "./blocks/map/index.js");
/* harmony import */ var _iter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./iter */ "./blocks/iter/index.js");
/* harmony import */ var _warranty__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./warranty */ "./blocks/warranty/index.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./hero */ "./blocks/hero/index.js");
/* harmony import */ var _publication__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./publication */ "./blocks/publication/index.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./grid */ "./blocks/grid/index.js");
/* harmony import */ var _icon_paragraph__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./icon-paragraph */ "./blocks/icon-paragraph/index.js");
/* harmony import */ var _countdown__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./countdown */ "./blocks/countdown/index.js");
/* harmony import */ var _trust__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./trust */ "./blocks/trust/index.js");
/* global wp */

/* global lodash */

/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */

/**
 * WordPress dependencies
 */
var registerBlockType = wp.blocks.registerBlockType;
/**
 * Internal dependencies
 */






























wp.hooks.addFilter('blocks.registerBlockType', 'svbk/appearance-controls', _common_appearance_controls__WEBPACK_IMPORTED_MODULE_3__["default"], 100);
[// Common blocks are grouped at the top to prioritize their display
// in various contexts — like the inserter and auto-complete components.
_testimonial__WEBPACK_IMPORTED_MODULE_4__, _testimonial_embed__WEBPACK_IMPORTED_MODULE_6__, _testimonial_list_index__WEBPACK_IMPORTED_MODULE_5__, _testimonial_rating__WEBPACK_IMPORTED_MODULE_8__, _testimonial_author__WEBPACK_IMPORTED_MODULE_7__, _product_price__WEBPACK_IMPORTED_MODULE_9__, _product_addtocart__WEBPACK_IMPORTED_MODULE_10__, _product_rating__WEBPACK_IMPORTED_MODULE_12__, _product_stock__WEBPACK_IMPORTED_MODULE_11__, _call_us__WEBPACK_IMPORTED_MODULE_13__, _card__WEBPACK_IMPORTED_MODULE_14__, _icon__WEBPACK_IMPORTED_MODULE_15__, _bullet__WEBPACK_IMPORTED_MODULE_16__, _profile__WEBPACK_IMPORTED_MODULE_17__, _stats__WEBPACK_IMPORTED_MODULE_18__, _collapse__WEBPACK_IMPORTED_MODULE_19__, _map__WEBPACK_IMPORTED_MODULE_20__, _iter__WEBPACK_IMPORTED_MODULE_21__, _warranty__WEBPACK_IMPORTED_MODULE_22__, _hero__WEBPACK_IMPORTED_MODULE_23__, _publication__WEBPACK_IMPORTED_MODULE_24__, _grid__WEBPACK_IMPORTED_MODULE_25__, _icon_paragraph__WEBPACK_IMPORTED_MODULE_26__, _countdown__WEBPACK_IMPORTED_MODULE_27__, _trust__WEBPACK_IMPORTED_MODULE_28__].forEach(function (block) {
  if (!block) {
    return;
  }

  var name = block.name,
      settings = block.settings;
  registerBlockType(name, settings);
});

/***/ }),

/***/ "./blocks/bullet/edit.js":
/*!*******************************!*\
  !*** ./blocks/bullet/edit.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icon_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon/editor */ "./blocks/icon/editor.js");
/* harmony import */ var _common_heading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/heading */ "./blocks/common/heading.js");








/* global wp */

/* global lodash */
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    ContrastChecker = _wp$blockEditor.ContrastChecker,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    withColors = _wp$blockEditor.withColors;
var compose = wp.compose.compose;



var BulletEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BulletEdit, _Component);

  function BulletEdit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BulletEdit);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(BulletEdit).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BulletEdit, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          className = _this$props.className,
          isSelected = _this$props.isSelected,
          backgroundColor = _this$props.backgroundColor,
          textColor = _this$props.textColor,
          setBackgroundColor = _this$props.setBackgroundColor,
          setTextColor = _this$props.setTextColor;
      var align = attributes.align,
          title = attributes.title,
          titleLevel = attributes.titleLevel,
          content = attributes.content;
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, (_classnames = {
        'is-selected': isSelected
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundColor.class, backgroundColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, textColor.class, textColor.class), _classnames));
      var style = {
        backgroundColor: backgroundColor.color,
        color: textColor.color,
        textAlign: align
      };
      var titleTag = titleLevel ? 'h' + titleLevel : 'h2';
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classNames
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_icon_editor__WEBPACK_IMPORTED_MODULE_8__["default"], this.props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        style: style
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        tagName: titleTag,
        value: title,
        onChange: function onChange(value) {
          return setAttributes({
            title: value
          });
        },
        placeholder: __('This is my title..', '_svbk'),
        className: 'wp-block-svbk-bullet__title'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        tagName: 'div',
        value: content,
        onChange: function onChange(value) {
          return setAttributes({
            content: value
          });
        },
        placeholder: __('Content..', '_svbk'),
        className: 'wp-block-svbk-bullet__content'
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_common_heading__WEBPACK_IMPORTED_MODULE_9__["HeadingToolbar"], {
        minLevel: 2,
        maxLevel: 5,
        selectedLevel: titleLevel,
        onChange: function onChange(newLevel) {
          setAttributes({
            titleLevel: newLevel
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(AlignmentToolbar, {
        value: align,
        onChange: function onChange(nextAlign) {
          setAttributes({
            align: nextAlign
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelColorSettings, {
        title: __('Color Settings'),
        initialOpen: false,
        colorSettings: [{
          value: backgroundColor.color,
          onChange: setBackgroundColor,
          label: __('Background Color')
        }, {
          value: textColor.color,
          onChange: setTextColor,
          label: __('Text Color')
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ContrastChecker, {
        textColor: textColor.color,
        backgroundColor: backgroundColor.color
      })));
    }
  }]);

  return BulletEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withColors('backgroundColor', {
  textColor: 'color'
})])(BulletEdit));

/***/ }),

/***/ "./blocks/bullet/index.js":
/*!********************************!*\
  !*** ./blocks/bullet/index.js ***!
  \********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./blocks/bullet/edit.js");



/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    getColorClassName = _wp$blockEditor.getColorClassName;
var RawHTML = wp.element.RawHTML;
/**
 * Internal dependencies
 */


/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

var name = 'svbk/bullet';
var settings = {
  title: __('Bullet', '_svbk'),
  icon: 'pressthis',
  category: 'common',
  keywords: [__('bullet'), __('card')],
  styles: [// Mark style as default.
  {
    name: 'default',
    label: __('Default'),
    isDefault: true
  }, {
    name: 'offset',
    label: __('Offset', '_svbk')
  }],
  attributes: {
    icon: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-bullet__icon'
    },
    title: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-bullet__title'
    },
    titleLevel: {
      type: 'number',
      default: 2
    },
    content: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-bullet__content'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    align: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var icon = attributes.icon,
        title = attributes.title,
        titleLevel = attributes.titleLevel,
        content = attributes.content,
        backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor,
        align = attributes.align;
    var titleTag = titleLevel ? 'h' + titleLevel : 'h2';
    var backgroundClass = getColorClassName('background-color', backgroundColor);
    var textClass = getColorClassName('color', textColor);
    var classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classnames = {
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, textClass, textClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundClass, backgroundClass), _classnames));
    var style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      textAlign: align
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classNames,
      style: style
    }, icon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'wp-block-svbk-bullet__icon'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RawHTML, null, icon)), title && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: titleTag,
      className: 'wp-block-svbk-bullet__title',
      value: title
    }), content && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'p',
      className: 'wp-block-svbk-bullet__content',
      value: content
    }));
  }
};

/***/ }),

/***/ "./blocks/call-us/deprecated.js":
/*!**************************************!*\
  !*** ./blocks/call-us/deprecated.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var RichText = wp.blockEditor.RichText;
var Fragment = wp.element.Fragment;
/**
 * External dependencies
 */


var deprecated = [{
  attributes: {
    callus_title: {
      type: 'string',
      source: 'text',
      selector: '.callus__title',
      default: __('Preferisci parlarne a voce?', '_svbk')
    },
    callus_text: {
      type: 'string',
      source: 'text',
      selector: '.callus__text',
      default: __('Chiamaci al numero', '_svbk')
    },
    callus_number: {
      type: 'string',
      source: 'text',
      selector: '.callus__number',
      default: __('(+39) 000 00000000', '_svbk')
    }
  },
  supports: {
    html: false
  },
  migrate: function migrate(attributes) {
    var callus_title = attributes.callus_title,
        callus_text = attributes.callus_text,
        callus_number = attributes.callus_number;
    var repls = /\(|\)|\+39|\s/gi;
    return {
      title: callus_title,
      text: callus_text,
      number: callus_number.replace(repls, ''),
      action: __('Chiamaci', '_svbk')
    };
  },
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var callus_title = attributes.callus_title,
        callus_text = attributes.callus_text,
        callus_number = attributes.callus_number,
        className = attributes.className;
    var callus_href = callus_number.replace("+", "00").replace(/[\s\(\)]/g, "");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", {
      className: "callus__title"
    }, callus_title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
      className: "callus__text"
    }, callus_text), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: "tel:" + callus_href,
      className: "callus__number"
    }, callus_number));
  }
}, {
  attributes: {
    callus_title: {
      type: 'string',
      source: 'text',
      selector: '.callus__title',
      default: __('Preferisci parlarne a voce?', '_svbk')
    },
    callus_text: {
      type: 'string',
      source: 'text',
      selector: '.callus__text',
      default: __('Chiamaci al numero', '_svbk')
    },
    callus_number: {
      type: 'string',
      source: 'text',
      selector: '.callus__number',
      default: __('(+39) 000 00000000', '_svbk')
    }
  },
  supports: {
    html: false
  },
  migrate: function migrate(attributes) {
    var callus_title = attributes.callus_title,
        callus_text = attributes.callus_text,
        callus_number = attributes.callus_number;
    var repls = /\(|\)|\+39|\s/gi;
    return {
      title: callus_title,
      text: callus_text,
      number: callus_number.replace(repls, ''),
      action: __('Chiamaci', '_svbk')
    };
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var callus_title = attributes.callus_title,
        callus_text = attributes.callus_text,
        callus_number = attributes.callus_number,
        className = attributes.className;
    var callus_href = callus_number.replace("+", "00").replace(/[\s\(\)]/g, "");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", {
      className: "callus__title"
    }, callus_title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
      className: "callus__text"
    }, callus_text), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: "tel:0039" + callus_href,
      className: "callus__number"
    }, callus_number));
  }
}, {
  supports: {
    html: false
  },
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__title'
    },
    text: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__text',
      default: __('Chiamaci al numero', '_svbk')
    },
    number: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__number'
    },
    action: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__action'
    }
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var title = attributes.title,
        text = attributes.text,
        number = attributes.number,
        action = attributes.action,
        className = attributes.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'h3',
      className: 'wp-block-svbk-call-us__title callus__title',
      value: title
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'p',
      className: 'wp-block-svbk-call-us__text callus__text',
      value: text
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: "tel:" + number,
      className: "wp-block-svbk-call-us__button callus__number"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'span',
      className: 'wp-block-svbk-call-us__action wp-block-button__action',
      value: action
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      class: "wp-block-svbk-call-us__number wp-block-button__value"
    }, number)));
  }
}, {
  supports: {
    html: false
  },
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__title'
    },
    text: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__text',
      default: __('Chiamaci al numero', '_svbk')
    },
    number: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__number'
    },
    action: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__action'
    }
  },
  save: function save(_ref4) {
    var attributes = _ref4.attributes;
    var title = attributes.title,
        text = attributes.text,
        number = attributes.number,
        action = attributes.action,
        className = attributes.className;
    var classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "has-action", action));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'h3',
      className: 'wp-block-svbk-call-us__title callus__title',
      value: title
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'p',
      className: 'wp-block-svbk-call-us__text callus__text',
      value: text
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: "tel:" + number,
      className: "wp-block-svbk-call-us__button callus__number"
    }, action && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'span',
      className: 'wp-block-svbk-call-us__action wp-block-button__action',
      value: action
    }), "\xA0"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      class: "wp-block-svbk-call-us__number wp-block-button__value"
    }, number)));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./blocks/call-us/edit.js":
/*!********************************!*\
  !*** ./blocks/call-us/edit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);








/* global wp */

/* global lodash */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$components = wp.components,
    Dashicon = _wp$components.Dashicon,
    IconButton = _wp$components.IconButton;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
/**
 * Internal dependencies
 */

var CallUsEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CallUsEdit, _Component);

  function CallUsEdit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CallUsEdit);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(CallUsEdit).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CallUsEdit, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          className = _this$props.className,
          isSelected = _this$props.isSelected;
      var number = attributes.number,
          action = attributes.action,
          actionWide = attributes.actionWide,
          align = attributes.align;
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, (_classnames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "has-action", action), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "has-action-wide", actionWide), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "has-align-".concat(align), align), _classnames));
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        classNames: classNames
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        placeholder: __('Action text…'),
        value: action,
        onChange: function onChange(value) {
          return setAttributes({
            action: value
          });
        },
        formattingControls: ['bold', 'italic', 'strikethrough'],
        className: 'wp-block-svbk-hero__link block-library-button'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        placeholder: __('Wide button action text…'),
        value: actionWide,
        onChange: function onChange(value) {
          return setAttributes({
            actionWide: value
          });
        },
        formattingControls: ['bold', 'italic', 'strikethrough'],
        className: 'wp-block-svbk-hero__link block-library-button'
      }), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("form", {
        className: "block-library-button__inline-link",
        onSubmit: function onSubmit(event) {
          return event.preventDefault();
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Dashicon, {
        icon: "phone"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: 'block-editor-call-button-input'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("input", {
        type: "text",
        "aria-label": __('Phone Number', '_svbk'),
        required: true,
        value: number,
        onChange: function onChange(event) {
          return setAttributes({
            number: event.target.value
          });
        },
        placeholder: __('01 23456789'),
        role: "combobox"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(IconButton, {
        icon: "editor-break",
        label: __('Apply'),
        type: "submit"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(AlignmentToolbar, {
        value: align,
        onChange: function onChange(nextAlign) {
          setAttributes({
            align: nextAlign
          });
        }
      })));
    }
  }]);

  return CallUsEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (CallUsEdit);

/***/ }),

/***/ "./blocks/call-us/index.js":
/*!*********************************!*\
  !*** ./blocks/call-us/index.js ***!
  \*********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deprecated */ "./blocks/call-us/deprecated.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./blocks/call-us/edit.js");



/**
 * BLOCK: call-us
 *
 * Shows a phone call button with number
 * @author: Costanza Focardi <c.focardi@silverbackstudio.it>
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var RichText = wp.blockEditor.RichText;
var Fragment = wp.element.Fragment;
/**
 * Internal dependencies
 */



var name = 'svbk/call-us';
var settings = {
  title: __('Call Us', '_svbk'),
  description: __('Display fancy phone contact', '_svbk'),
  icon: 'phone',
  category: 'common',
  keywords: [__('phone', '_svbk'), __('contacts', '_svbk')],
  supports: {
    html: false
  },
  multiple: false,
  attributes: {
    action: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__action--default'
    },
    actionWide: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__action--wide',
      default: __('Chiama il', '_svbk')
    },
    number: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__number'
    },
    align: {
      type: 'string'
    }
  },
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var number = attributes.number,
        action = attributes.action,
        actionWide = attributes.actionWide,
        align = attributes.align;
    var classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classnames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "has-action", action), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "has-action-wide", actionWide), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "has-align-".concat(align), align), _classnames));
    var normalizedNumber = number.replace("+", "00").replace(/[\s\(\)]/g, "");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: "tel:" + normalizedNumber,
      className: 'wp-block-svbk-call-us__link'
    }, action && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'span',
      className: 'wp-block-svbk-call-us__action wp-block-svbk-call-us__action--default',
      value: action
    }), actionWide && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'span',
      className: ' wp-block-svbk-call-us__action wp-block-svbk-call-us__action--wide',
      value: actionWide
    }), "\xA0", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      class: "wp-block-svbk-call-us__number"
    }, number))));
  }
};

/***/ }),

/***/ "./blocks/card/edit.js":
/*!*****************************!*\
  !*** ./blocks/card/edit.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/image */ "./blocks/common/image.js");
/* harmony import */ var _icon_edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../icon/edit */ "./blocks/icon/edit.js");
/* harmony import */ var _common_heading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/heading */ "./blocks/common/heading.js");









/* global wp */

/* global lodash */
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
/**
 * External dependencies
 */

var _lodash = lodash,
    pick = _lodash.pick,
    mapKeys = _lodash.mapKeys,
    capitalize = _lodash.capitalize;

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    ContrastChecker = _wp$blockEditor.ContrastChecker,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings,
    FontSizePicker = _wp$blockEditor.FontSizePicker,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    withColors = _wp$blockEditor.withColors,
    withFontSizes = _wp$blockEditor.withFontSizes,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    Dashicon = _wp$components.Dashicon,
    IconButton = _wp$components.IconButton,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    Placeholder = _wp$components.Placeholder,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button;
var compose = wp.compose.compose;
/**
 * Internal dependencies
 */




/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'core/column'.
 *
 * @constant
 * @type {string[]}
*/

var ALLOWED_BLOCKS = ['core/paragraph', 'core/list', 'core/heading', 'core/group'];
/**
 * Default block template
 * 
 * @constant
 * @type {string[]}
*/

var TEMPLATE = [['core/paragraph', {
  content: 'Lorem ipsum sit amet...'
}]];

var CardEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(CardEdit, _Component);

  function CardEdit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, CardEdit);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(CardEdit).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(CardEdit, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          className = _this$props.className,
          isSelected = _this$props.isSelected,
          backgroundColor = _this$props.backgroundColor,
          textColor = _this$props.textColor,
          ribbonColor = _this$props.ribbonColor,
          setBackgroundColor = _this$props.setBackgroundColor,
          setTextColor = _this$props.setTextColor,
          setRibbonColor = _this$props.setRibbonColor,
          fontSize = _this$props.fontSize,
          setFontSize = _this$props.setFontSize;
      var align = attributes.align,
          pictureUrl = attributes.pictureUrl,
          pictureAlt = attributes.pictureAlt,
          pictureId = attributes.pictureId,
          pictureSize = attributes.pictureSize,
          title = attributes.title,
          titleLevel = attributes.titleLevel,
          subtitle = attributes.subtitle,
          buttonUrl = attributes.buttonUrl,
          buttonText = attributes.buttonText,
          imageType = attributes.imageType,
          ribbonText = attributes.ribbonText;
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_8___default()(className, (_classnames = {
        'is-selected': isSelected
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, backgroundColor.class, backgroundColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, textColor.class, textColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, fontSize.class, fontSize.class), _classnames));

      var pictureUpdate = function pictureUpdate(update) {
        var localUpdate = mapKeys(pick(update, ['id', 'url', 'alt', 'size']), function (value, key) {
          // Convert url to pictureUrl, id to pictureId, etc
          return 'picture' + capitalize(key);
        });
        setAttributes(localUpdate);
      };

      var style = {
        backgroundColor: backgroundColor.color,
        color: textColor.color,
        fontSize: fontSize.size ? fontSize.size + 'px' : undefined,
        textAlign: align
      };
      var ribbonStyle = {
        backgroundColor: ribbonColor ? ribbonColor.color : undefined
      };
      var titleTag = titleLevel ? 'h' + titleLevel : 'h3';
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: classNames,
        style: style
      }, ribbonText && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: 'wp-block-svbk-card__ribbon',
        style: ribbonStyle
      }, ribbonText), !imageType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Placeholder, {
        icon: "format-image",
        label: __('Image'),
        instructions: __('Please select if you want to use an image or an icon')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Button, {
        isLarge: true,
        onClick: function onClick() {
          setAttributes({
            imageType: 'picture'
          });
        }
      }, __('Image')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Button, {
        isLarge: true,
        onClick: function onClick() {
          setAttributes({
            imageType: 'icon'
          });
        }
      }, __('Icon'))), imageType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(IconButton, {
        icon: "no",
        label: __('Back to picture type choice'),
        onClick: function onClick() {
          setAttributes({
            imageType: null
          });
        }
      }), 'picture' == imageType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_common_image__WEBPACK_IMPORTED_MODULE_9__["default"], {
        setAttributes: pictureUpdate,
        url: pictureUrl,
        id: pictureId,
        size: pictureSize,
        alt: pictureAlt,
        isMain: true
      }), 'icon' == imageType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_icon_edit__WEBPACK_IMPORTED_MODULE_10__["default"], this.props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RichText, {
        tagName: titleTag,
        value: title,
        onChange: function onChange(value) {
          return setAttributes({
            title: value
          });
        },
        placeholder: __('This is my title..', '_svbk'),
        className: 'wp-block-svbk-card__title'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RichText, {
        tagName: 'div',
        value: subtitle,
        onChange: function onChange(value) {
          return setAttributes({
            subtitle: value
          });
        },
        placeholder: __('Subtitle..', '_svbk'),
        className: 'wp-block-svbk-card__subtitle'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(InnerBlocks, {
        templateLock: false,
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RichText, {
        placeholder: __('Button text…'),
        value: buttonText,
        onChange: function onChange(value) {
          return setAttributes({
            buttonText: value
          });
        },
        formattingControls: ['bold', 'italic', 'strikethrough'],
        className: 'wp-block-svbk-card__link block-library-button'
      }), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("form", {
        className: "block-library-button__inline-link",
        onSubmit: function onSubmit(event) {
          return event.preventDefault();
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Dashicon, {
        icon: "admin-links"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(URLInput, {
        value: buttonUrl,
        onChange: function onChange(value) {
          return setAttributes({
            buttonUrl: value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(IconButton, {
        icon: "editor-break",
        label: __('Apply'),
        type: "submit"
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_common_heading__WEBPACK_IMPORTED_MODULE_11__["HeadingToolbar"], {
        minLevel: 2,
        maxLevel: 5,
        selectedLevel: titleLevel,
        onChange: function onChange(newLevel) {
          setAttributes({
            titleLevel: newLevel
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(AlignmentToolbar, {
        value: align,
        onChange: function onChange(nextAlign) {
          setAttributes({
            align: nextAlign
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelBody, {
        title: __('Text Settings'),
        className: "blocks-font-size"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(FontSizePicker, {
        value: fontSize.size,
        onChange: setFontSize
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelColorSettings, {
        title: __('Color Settings'),
        initialOpen: false,
        colorSettings: [{
          value: backgroundColor.color,
          onChange: setBackgroundColor,
          label: __('Background Color')
        }, {
          value: textColor.color,
          onChange: setTextColor,
          label: __('Text Color')
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ContrastChecker, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        textColor: textColor.color,
        backgroundColor: backgroundColor.color
      }, {
        fontSize: fontSize.size
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelBody, {
        title: __('Ribbon Settings', '_svbk')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(TextControl, {
        label: __('Ribbon Text', '_svbk'),
        value: ribbonText,
        onChange: function onChange(value) {
          return setAttributes({
            ribbonText: value
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelColorSettings, {
        title: __('Ribbon Color Settings', '_svbk'),
        initialOpen: false,
        colorSettings: [{
          value: ribbonColor.color,
          onChange: setRibbonColor,
          label: __('Ribbon Color')
        }]
      })));
    }
  }]);

  return CardEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withColors('backgroundColor', {
  textColor: 'color'
}, 'ribbonColor'), withFontSizes('fontSize')])(CardEdit));

/***/ }),

/***/ "./blocks/card/index.js":
/*!******************************!*\
  !*** ./blocks/card/index.js ***!
  \******************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/card/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);



/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    getColorClassName = _wp$blockEditor.getColorClassName,
    getFontSizeClass = _wp$blockEditor.getFontSizeClass,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var RawHTML = wp.element.RawHTML;
/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

/**
 * Internal dependencies
 */

var name = 'svbk/card';
var settings = {
  title: __('Card', '_svbk'),
  icon: 'id',
  category: 'common',
  keywords: [__('card'), __('block'), __('content')],
  styles: [// Mark style as default.
  {
    name: 'default',
    label: __('Default'),
    isDefault: true
  }, {
    name: 'featured',
    label: __('Featured')
  }],
  attributes: {
    pictureUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: '.wp-block-svbk-card__picture img'
    },
    pictureAlt: {
      type: 'string',
      source: 'attribute',
      attribute: 'alt',
      selector: '.wp-block-svbk-card__picture img'
    },
    pictureId: {
      type: 'number'
    },
    pictureSize: {
      type: 'string'
    },
    imageType: {
      type: 'string'
    },
    icon: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-card__icon'
    },
    title: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-card__title'
    },
    titleLevel: {
      type: 'number',
      default: 3
    },
    subtitle: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-card__subtitle'
    },
    buttonUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'href',
      selector: '.wp-block-svbk-card__link'
    },
    ribbonText: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-card__ribbon'
    },
    ribbonColor: {
      type: 'string'
    },
    customRibbonColor: {
      type: 'string'
    },
    buttonText: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-card__link'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    fontSize: {
      type: 'string'
    },
    customFontSize: {
      type: 'number'
    },
    align: {
      type: 'string'
    },
    contentAlign: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var imageType = attributes.imageType,
        pictureUrl = attributes.pictureUrl,
        pictureAlt = attributes.pictureAlt,
        pictureId = attributes.pictureId,
        icon = attributes.icon,
        title = attributes.title,
        titleLevel = attributes.titleLevel,
        subtitle = attributes.subtitle,
        backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor,
        fontSize = attributes.fontSize,
        customFontSize = attributes.customFontSize,
        align = attributes.align,
        contentAlign = attributes.contentAlign,
        buttonUrl = attributes.buttonUrl,
        buttonText = attributes.buttonText,
        ribbonColor = attributes.ribbonColor,
        customRibbonColor = attributes.customRibbonColor,
        ribbonText = attributes.ribbonText;
    var titleTag = titleLevel ? 'h' + titleLevel : 'h3';
    var backgroundClass = getColorClassName('background-color', backgroundColor);
    var textClass = getColorClassName('color', textColor);
    var ribbonClass = getColorClassName('ribbon', ribbonColor);
    var fontSizeClass = getFontSizeClass(fontSize);
    var classNames = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classnames = {
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor,
      'has-image': imageType === 'image',
      'has-icon': imageType === 'icon'
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, fontSizeClass, fontSizeClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, textClass, textClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundClass, backgroundClass), _classnames));
    var style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      fontSize: fontSizeClass ? undefined : customFontSize,
      textAlign: align
    };
    var ribbonStyle = {
      backgroundColor: ribbonClass ? undefined : customRibbonColor
    };
    var contentStyle = {
      textAlign: contentAlign
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classNames,
      style: style
    }, ribbonText && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('wp-block-svbk-card__ribbon', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, ribbonClass, ribbonClass)),
      style: ribbonStyle
    }, ribbonText), 'picture' == imageType && pictureUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
      className: 'wp-block-svbk-card__picture'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: pictureUrl,
      alt: pictureAlt,
      className: pictureId ? "wp-image-".concat(pictureId) : null
    })), 'icon' == imageType && icon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'wp-block-svbk-card__icon'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RawHTML, null, icon)), title && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: titleTag,
      className: 'wp-block-svbk-card__title',
      value: title
    }), subtitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
      className: 'wp-block-svbk-card__subtitle'
    }, subtitle), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'wp-block-svbk-card__content',
      style: contentStyle
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null)), buttonText && buttonUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'wp-block-button wp-block-svbk-card__button'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      className: 'wp-block-button__link wp-block-svbk-card__link',
      href: buttonUrl
    }, buttonText)));
  }
};

/***/ }),

/***/ "./blocks/collapse/edit.js":
/*!*********************************!*\
  !*** ./blocks/collapse/edit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);







/* global wp */

/* global lodash */
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    PlainText = _wp$blockEditor.PlainText,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody;
/**
 * Default block template
 * 
 * @constant
 * @type {string[]}
*/

var TEMPLATE = [['core/paragraph', {
  content: 'Lorem ipsum sit amet...'
}]];

var CollapseEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CollapseEdit, _Component);

  function CollapseEdit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CollapseEdit);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CollapseEdit).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CollapseEdit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          className = _this$props.className,
          isSelected = _this$props.isSelected;
      var title = attributes.title,
          defaultOpen = attributes.defaultOpen,
          buttonClose = attributes.buttonClose,
          buttonOpen = attributes.buttonOpen;
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, {
        'is-selected': isSelected
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: classNames
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RichText, {
        tagName: 'h3',
        value: title,
        onChange: function onChange(value) {
          return setAttributes({
            title: value
          });
        },
        placeholder: __('Insert title here..', '_svbk'),
        className: 'wp-block-svbk-collapse__title'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(InnerBlocks, {
        templateLock: false,
        template: TEMPLATE
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: 'wp-block-svbk-collapse__button'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PlainText, {
        value: buttonOpen,
        onChange: function onChange(value) {
          return setAttributes({
            buttonOpen: value
          });
        },
        placeholder: __('Open me..', '_svbk'),
        className: 'wp-block-svbk-collapse__label wp-block-svbk-collapse__label--open'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PlainText, {
        value: buttonClose,
        onChange: function onChange(value) {
          return setAttributes({
            buttonClose: value
          });
        },
        placeholder: __('Close me..', '_svbk'),
        className: 'wp-block-svbk-collapse__label wp-block-svbk-collapse__label--close'
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: __('Collapse Settings', '_svbk')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: __('Default Open', '_svbk'),
        help: defaultOpen ? __('Leave the collapse open on page load', '_svbk') : __('Leave the collapse close on page load', '_svbk'),
        checked: defaultOpen,
        onChange: function onChange(checked) {
          return setAttributes({
            defaultOpen: Boolean(checked)
          });
        }
      }))));
    }
  }]);

  return CollapseEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (CollapseEdit);

/***/ }),

/***/ "./blocks/collapse/index.js":
/*!**********************************!*\
  !*** ./blocks/collapse/index.js ***!
  \**********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/collapse/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    RichText = _wp$blockEditor.RichText;
/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

/**
 * Internal dependencies
 */

var name = 'svbk/collapse';
var settings = {
  title: __('Collapse', '_svbk'),
  icon: 'feedback',
  category: 'common',
  keywords: [__('collapse'), __('accordion')],
  styles: [// Mark style as default.
  {
    name: 'default',
    label: __('Default'),
    isDefault: true
  }, {
    name: 'accordion',
    label: __('Accordion', '_svbk')
  }, {
    name: 'faq',
    label: __('FAQ', '_svbk')
  }, {
    name: 'button',
    label: __('Button', '_svbk')
  }],
  attributes: {
    defaultOpen: {
      type: 'boolean',
      default: false
    },
    title: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-collapse__title'
    },
    buttonOpen: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-collapse__label--open'
    },
    buttonClose: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-collapse__label--close'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function save(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className;
    var title = attributes.title,
        defaultOpen = attributes.defaultOpen,
        buttonOpen = attributes.buttonOpen,
        buttonClose = attributes.buttonClose;
    var classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
      'wp-block-svbk-collapse--open': defaultOpen
    });
    var buttonClassNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()(['wp-block-svbk-collapse__button', 'wp-block-svbk-collapse__trigger'], {
      'wp-block-svbk-collapse__button--has-open': buttonOpen,
      'wp-block-svbk-collapse__button--has-close': buttonClose
    });
    var style = {
      display: defaultOpen ? undefined : 'none'
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: classNames
    }, title && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: 'h3',
      value: title,
      className: 'wp-block-svbk-collapse__title wp-block-svbk-collapse__trigger'
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'wp-block-svbk-collapse__content',
      style: style
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null)), (buttonOpen || buttonClose) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      className: buttonClassNames
    }, buttonOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: 'wp-block-svbk-collapse__label wp-block-svbk-collapse__label--open'
    }, buttonOpen), buttonClose && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: 'wp-block-svbk-collapse__label wp-block-svbk-collapse__label--close'
    }, buttonClose)));
  }
};

/***/ }),

/***/ "./blocks/common/Post.js":
/*!*******************************!*\
  !*** ./blocks/common/Post.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);








var Component = wp.element.Component;
/**
 * WordPress dependencies
 */

var RawHTML = wp.element.RawHTML;
var __ = wp.i18n.__;
var Spinner = wp.components.Spinner;
var withSelect = wp.data.withSelect;
var compose = wp.compose.compose;

var Post =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Post, _Component);

  function Post() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Post);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Post).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Post, [{
    key: "getThumbnailImage",
    value: function getThumbnailImage(thumbnailMedia) {
      if (!thumbnailMedia || !thumbnailMedia.description) {
        return false;
      } // Never return a text node of whitespace as the result


      var template = document.createElement('template');
      template.innerHTML = thumbnailMedia.description.rendered.trim();
      return template.content.querySelector('img').outerHTML;
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          postType = _this$props.postType,
          display = _this$props.display,
          excerptLength = _this$props.excerptLength,
          post = _this$props.post,
          thumbnailMedia = _this$props.thumbnailMedia;
      var titleTrimmed = post.title.rendered.trim();
      var excerpt = post.excerpt.rendered;

      if (post.excerpt.raw === '') {
        excerpt = post.content.raw;
      }

      var excerptElement = document.createElement('div');
      excerptElement.innerHTML = excerpt;
      excerpt = excerptElement.textContent || excerptElement.innerText || '';
      var thumbnailImg = this.getThumbnailImage(thumbnailMedia);
      var postContent = post.content.raw ? post.content.raw : post.content.rendered;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()((_classnames = {
          post: true
        }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "post--".concat(post.type), post.type), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "post--format-".concat(post.format), post.format), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-thumbnail', post.featured_media), _classnames))
      }, post.featured_media && !thumbnailMedia && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Spinner, null), thumbnailMedia && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RawHTML, null, thumbnailImg), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("h3", null, titleTrimmed ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RawHTML, null, titleTrimmed) : __('(no title)')), display === 'excerpt' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "wp-block-".concat(postType, "__post-excerpt")
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RawHTML, {
        key: "html"
      }, excerptLength < excerpt.trim().split(' ').length ? excerpt.trim().split(' ', excerptLength).join(' ') + ' ... <a href=' + post.link + 'target="_blank" rel="noopener noreferrer">' + __('Read more') + '</a>' : excerpt.trim().split(' ', excerptLength).join(' '))), display === 'full_post' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "wp-block-".concat(postType, "__full-content")
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RawHTML, {
        key: "html"
      }, postContent.trim())));
    }
  }]);

  return Post;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function (select, props) {
  var _select = select('core'),
      getMedia = _select.getMedia;

  var post = props.post;
  var featured_media = post.featured_media;
  return {
    thumbnailMedia: featured_media ? getMedia(featured_media) : null
  };
})])(Post));

/***/ }),

/***/ "./blocks/common/PostEdit.js":
/*!***********************************!*\
  !*** ./blocks/common/PostEdit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Post */ "./blocks/common/Post.js");








/* global wp */

/* global lodash */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Placeholder = _wp$components.Placeholder,
    RadioControl = _wp$components.RadioControl,
    TextControl = _wp$components.TextControl,
    Spinner = _wp$components.Spinner,
    Popover = _wp$components.Popover;
var apiFetch = wp.apiFetch;
var addQueryArgs = wp.url.addQueryArgs;
var __ = wp.i18n.__;
var InspectorControls = wp.blockEditor.InspectorControls;


var PostList =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(PostList, _Component);

  function PostList() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PostList);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(PostList).apply(this, arguments));
    _this.state = {
      loading: false,
      posts: [],
      postPreview: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(PostList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isStillMounted = true;
      var attributes = this.props.attributes;

      if (attributes && attributes.id) {
        this.selectPost(attributes.id);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isStillMounted = false;
    }
  }, {
    key: "updatePosts",
    value: function updatePosts(search) {
      var _this2 = this;

      this.setState({
        loading: true
      });
      this.fetchRequest = apiFetch({
        path: addQueryArgs('/wp/v2/search', {
          search: search,
          per_page: 20,
          type: 'post',
          subtype: this.props.postType
        })
      }).then(function (posts) {
        if (_this2.isStillMounted) {
          _this2.setState({
            posts: posts,
            loading: false
          });
        }
      }).catch(function () {
        if (_this2.isStillMounted) {
          _this2.setState({
            posts: [],
            loading: false
          });
        }
      });
    }
  }, {
    key: "selectPost",
    value: function selectPost(postId) {
      var _this3 = this;

      var setAttributes = this.props.setAttributes;
      setAttributes({
        id: postId
      });

      if (!this.props.postType) {
        return;
      }

      this.setState({
        postLoading: true
      });
      this.fetchRequest = apiFetch({
        path: addQueryArgs("/wp/v2/".concat(this.props.postType, "/").concat(postId), {
          _locale: 'user'
        })
      }).then(function (postContent) {
        if (_this3.isStillMounted) {
          _this3.setState({
            postContent: postContent,
            postLoading: false
          });
        }
      }).catch(function () {
        if (_this3.isStillMounted) {
          _this3.setState({
            postContent: false,
            postLoading: false
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          className = _this$props.className;
      var _this$state = this.state,
          posts = _this$state.posts,
          loading = _this$state.loading,
          postContent = _this$state.postContent,
          postLoading = _this$state.postLoading;
      var display = attributes.display,
          id = attributes.id;
      var inspectorControls = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelBody, {
        title: __('Post Content Settings')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RadioControl, {
        label: "Show:",
        selected: display,
        options: [{
          label: 'Excerpt',
          value: 'excerpt'
        }, {
          label: 'Full Post',
          value: 'full_post'
        }],
        onChange: function onChange(value) {
          return setAttributes({
            display: value
          });
        }
      })));

      if (!id) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, inspectorControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Placeholder, {
          icon: "admin-post"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(TextControl, {
          label: __("Search", '_svbk'),
          onChange: function onChange(search) {
            return _this4.updatePosts(search);
          }
        }), posts.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Popover, {
          position: "bottom",
          noArrow: true,
          focusOnMount: false
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          className: "".concat(className, "__suggestions"),
          role: "listbox"
        }, posts.map(function (post, index) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("button", {
            key: post.id,
            role: "option",
            tabIndex: "-1",
            id: "post-".concat(index),
            onClick: function onClick() {
              return _this4.selectPost(post.id);
            },
            "aria-selected": post.id === id
          }, post.title);
        }))), loading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Spinner, null)));
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, inspectorControls, postLoading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Spinner, null), postContent && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_Post__WEBPACK_IMPORTED_MODULE_7__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
        post: postContent
      })));
    }
  }]);

  return PostList;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (PostList);

/***/ }),

/***/ "./blocks/common/PostListEdit.js":
/*!***************************************!*\
  !*** ./blocks/common/PostListEdit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Post */ "./blocks/common/Post.js");










/* global wp */

/* global lodash */

/**
 * External dependencies
 */
var _lodash = lodash,
    isUndefined = _lodash.isUndefined,
    pickBy = _lodash.pickBy;

/**
 * WordPress dependencies
 */

var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Placeholder = _wp$components.Placeholder,
    QueryControls = _wp$components.QueryControls,
    RangeControl = _wp$components.RangeControl,
    RadioControl = _wp$components.RadioControl,
    Spinner = _wp$components.Spinner,
    ToggleControl = _wp$components.ToggleControl,
    Toolbar = _wp$components.Toolbar;
var apiFetch = wp.apiFetch;
var addQueryArgs = wp.url.addQueryArgs;
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls;
var withSelect = wp.data.withSelect;

/**
 * Module Constants
 */

var CATEGORIES_LIST_QUERY = {
  per_page: -1
};
var MAX_POSTS_COLUMNS = 6;

var PostListEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(PostListEdit, _Component);

  function PostListEdit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, PostListEdit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(PostListEdit).apply(this, arguments));
    _this.state = {
      categoriesList: []
    };
    _this.toggleDisplayPostDate = _this.toggleDisplayPostDate.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(PostListEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.isStillMounted = true;

      if (this.props.taxonomy) {
        this.fetchRequest = apiFetch({
          path: addQueryArgs("/wp/v2/".concat(this.props.taxonomy), CATEGORIES_LIST_QUERY)
        }).then(function (categoriesList) {
          if (_this2.isStillMounted) {
            _this2.setState({
              categoriesList: categoriesList
            });
          }
        }).catch(function () {
          if (_this2.isStillMounted) {
            _this2.setState({
              categoriesList: []
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isStillMounted = false;
    }
  }, {
    key: "toggleDisplayPostDate",
    value: function toggleDisplayPostDate() {
      var displayPostDate = this.props.attributes.displayPostDate;
      var setAttributes = this.props.setAttributes;
      setAttributes({
        displayPostDate: !displayPostDate
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          posts = _this$props.posts,
          taxonomy = _this$props.taxonomy,
          children = _this$props.children;
      var categoriesList = this.state.categoriesList;
      var display = attributes.display,
          align = attributes.align,
          postLayout = attributes.postLayout,
          columns = attributes.columns,
          order = attributes.order,
          orderBy = attributes.orderBy,
          categories = attributes.categories,
          postsToShow = attributes.postsToShow,
          offset = attributes.offset,
          loadMore = attributes.loadMore;
      var inspectorControls = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(PanelBody, {
        title: __('Post Content Settings')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(RadioControl, {
        label: "Show:",
        selected: display,
        options: [{
          label: 'Excerpt',
          value: 'excerpt'
        }, {
          label: 'Full Post',
          value: 'full_post'
        }],
        onChange: function onChange(value) {
          return setAttributes({
            display: value
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(PanelBody, {
        title: __('Filter & Sorting', '_svbk')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(QueryControls, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
        order: order,
        orderBy: orderBy
      }, {
        numberOfItems: postsToShow,
        categoriesList: categoriesList,
        selectedCategoryId: taxonomy ? categories : undefined,
        onOrderChange: function onOrderChange(value) {
          return setAttributes({
            order: value
          });
        },
        onOrderByChange: function onOrderByChange(value) {
          return setAttributes({
            orderBy: value
          });
        },
        onCategoryChange: function onCategoryChange(value) {
          return setAttributes({
            categories: '' !== value ? value : undefined
          });
        },
        onNumberOfItemsChange: function onNumberOfItemsChange(value) {
          return setAttributes({
            postsToShow: value
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(RangeControl, {
        label: __('Offset', '_svbk'),
        value: offset,
        onChange: function onChange(value) {
          return setAttributes({
            offset: value
          });
        },
        min: 0,
        max: 10
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(ToggleControl, {
        label: __('Show Load More', '_svbk'),
        checked: loadMore,
        onChange: function onChange(value) {
          return setAttributes({
            loadMore: Boolean(value)
          });
        }
      })), postLayout === 'grid' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(PanelBody, {
        title: __('Layout')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(RangeControl, {
        label: __('Columns', '_svbk'),
        value: columns,
        onChange: function onChange(value) {
          return setAttributes({
            columns: value
          });
        },
        min: 2,
        max: !hasPosts ? MAX_POSTS_COLUMNS : Math.min(MAX_POSTS_COLUMNS, posts.length)
      })));
      var hasPosts = Array.isArray(posts) && posts.length;

      if (!hasPosts) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(Fragment, null, inspectorControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(Placeholder, {
          icon: "admin-post"
        }, !Array.isArray(posts) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(Spinner, null) : __('No posts found.')));
      } // Removing posts from display should be instant.


      var displayPosts = posts.length > postsToShow ? posts.slice(0, postsToShow) : posts;
      var layoutControls = [{
        icon: 'list-view',
        title: __('List View'),
        onClick: function onClick() {
          return setAttributes({
            postLayout: 'list'
          });
        },
        isActive: postLayout === 'list'
      }, {
        icon: 'grid-view',
        title: __('Grid View'),
        onClick: function onClick() {
          return setAttributes({
            postLayout: 'grid'
          });
        },
        isActive: postLayout === 'grid'
      }];
      var PostComponent = _Post__WEBPACK_IMPORTED_MODULE_10__["default"];

      if (typeof children !== 'undefined') {
        PostComponent = children;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(Fragment, null, inspectorControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(BlockAlignmentToolbar, {
        value: align,
        onChange: function onChange(nextAlign) {
          setAttributes({
            align: nextAlign
          });
        },
        controls: ['center', 'wide', 'full']
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(Toolbar, {
        controls: layoutControls
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(this.props.className, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
          'is-grid': postLayout === 'grid'
        }, "columns-".concat(columns), postLayout === 'grid'))
      }, displayPosts.map(function (post, i) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(PostComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, attributes, {
          post: post,
          postType: _this3.props.postType,
          key: i
        }));
      }), loadMore && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
        className: "wp-block-".concat(this.props.postType, "s__loadmore")
      }, __('Load more', '_svbk'))));
    }
  }]);

  return PostListEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select, props) {
  var _props$attributes = props.attributes,
      postsToShow = _props$attributes.postsToShow,
      order = _props$attributes.order,
      orderBy = _props$attributes.orderBy,
      categories = _props$attributes.categories;

  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords;

  var postsQuery = pickBy({
    categories: categories,
    order: order,
    orderby: orderBy,
    per_page: postsToShow
  }, function (value) {
    return !isUndefined(value);
  });
  return {
    posts: getEntityRecords('postType', props.postType, postsQuery)
  };
})(PostListEdit));

/***/ }),

/***/ "./blocks/common/appearance-controls.js":
/*!**********************************************!*\
  !*** ./blocks/common/appearance-controls.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var Fragment = wp.element.Fragment;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;
var __ = wp.i18n.__;
var withAppearanceControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var setAttributes = props.setAttributes,
        _props$attributes = props.attributes,
        mobileHidden = _props$attributes.mobileHidden,
        criticalRendering = _props$attributes.criticalRendering,
        enableAnimation = _props$attributes.enableAnimation,
        className = _props$attributes.className;
    props.attributes.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'is-critical-rendering': criticalRendering,
      'is-mobile-hidden': mobileHidden,
      'is-animated': enableAnimation
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Appearance', '_svbk'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Critical Rendering'),
      onChange: function onChange(value) {
        return setAttributes({
          criticalRendering: value
        });
      },
      checked: criticalRendering
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Hide on Mobile'),
      onChange: function onChange(value) {
        return setAttributes({
          mobileHidden: value
        });
      },
      checked: mobileHidden
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Enable Animation'),
      onChange: function onChange(value) {
        return setAttributes({
          enableAnimation: value
        });
      },
      checked: enableAnimation
    }))));
  };
}, "withAppearanceControls");

var withAppearanceSettings = function withAppearanceSettings(settings, name) {
  lodash.assign(settings, {
    edit: withAppearanceControls(settings.edit),
    attributes: lodash.assign({}, settings.attributes, {
      criticalRendering: {
        type: 'boolean',
        default: false
      },
      mobileHidden: {
        type: 'boolean',
        default: false
      },
      enableAnimation: {
        type: 'boolean',
        default: false
      }
    })
  });
  return settings;
};

/* harmony default export */ __webpack_exports__["default"] = (withAppearanceSettings);

/***/ }),

/***/ "./blocks/common/heading.js":
/*!**********************************!*\
  !*** ./blocks/common/heading.js ***!
  \**********************************/
/*! exports provided: HeadingToolbar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingToolbar", function() { return HeadingToolbar; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);









/* global wp */

/* global lodash */

/**
 * External dependencies
 */
var _lodash = lodash,
    range = _lodash.range;
/**
 * WordPress dependencies
 */

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var Toolbar = wp.components.Toolbar;
var RichText = wp.blockEditor.RichText;

var HeadingToolbar =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(HeadingToolbar, _Component);

  function HeadingToolbar() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, HeadingToolbar);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(HeadingToolbar).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(HeadingToolbar, [{
    key: "createLevelControl",
    value: function createLevelControl(targetLevel, selectedLevel, onChange) {
      return {
        icon: 'heading',
        // translators: %s: heading level e.g: "1", "2", "3"
        title: sprintf(__('Heading %d'), targetLevel),
        isActive: targetLevel === selectedLevel,
        onClick: function onClick() {
          return onChange(targetLevel);
        },
        subscript: String(targetLevel)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          minLevel = _this$props.minLevel,
          maxLevel = _this$props.maxLevel,
          selectedLevel = _this$props.selectedLevel,
          onChange = _this$props.onChange;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Toolbar, {
        controls: range(minLevel, maxLevel).map(function (index) {
          return _this.createLevelControl(index, selectedLevel, onChange);
        })
      });
    }
  }]);

  return HeadingToolbar;
}(Component);



var Heading =
/*#__PURE__*/
function (_Component2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Heading, _Component2);

  function Heading() {
    var _this2;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Heading);

    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Heading).apply(this, arguments));
    _this2.onLevelChange = _this2.onLevelChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this2));
    _this2.state = {
      isSelected: false
    };
    return _this2;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Heading, [{
    key: "onLevelChange",
    value: function onLevelChange(newLevel) {
      this.props.onLevelChange(newLevel);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          level = _this$props2.level,
          isSelected = _this$props2.isSelected;
      var titleTag = level ? 'h' + level : 'h2';
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(HeadingToolbar, {
        minLevel: 2,
        maxLevel: 5,
        selectedLevel: level,
        onChange: this.onLevelChange
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RichText, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        tagName: titleTag
      }, this.props)));
    }
  }]);

  return Heading;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "./blocks/common/image.js":
/*!********************************!*\
  !*** ./blocks/common/image.js ***!
  \********************************/
/*! exports provided: pickRelevantMediaFiles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickRelevantMediaFiles", function() { return pickRelevantMediaFiles; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* global wp */

/* global lodash */
var _lodash = lodash,
    get = _lodash.get,
    isEmpty = _lodash.isEmpty,
    pick = _lodash.pick;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    TextareaControl = _wp$components.TextareaControl,
    Toolbar = _wp$components.Toolbar,
    SVG = _wp$components.SVG,
    Rect = _wp$components.Rect,
    Path = _wp$components.Path,
    Spinner = _wp$components.Spinner;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    MediaPlaceholder = _wp$blockEditor.MediaPlaceholder,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
var withSelect = wp.data.withSelect;
var compose = wp.compose.compose;
var LINK_DESTINATION_NONE = 'none';
var LINK_DESTINATION_MEDIA = 'media';
var LINK_DESTINATION_ATTACHMENT = 'attachment';
var ALLOWED_MEDIA_TYPES = ['image'];
var editImageIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(SVG, {
  width: 20,
  height: 20,
  viewBox: "0 0 20 20"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Rect, {
  x: 11,
  y: 3,
  width: 7,
  height: 5,
  rx: 1
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Rect, {
  x: 2,
  y: 12,
  width: 7,
  height: 5,
  rx: 1
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Path, {
  d: "M13,12h1a3,3,0,0,1-3,3v2a5,5,0,0,0,5-5h1L15,9Z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Path, {
  d: "M4,8H3l2,3L7,8H6A3,3,0,0,1,9,5V3A5,5,0,0,0,4,8Z"
}));
var pickRelevantMediaFiles = function pickRelevantMediaFiles(image) {
  var imageProps = pick(image, ['alt', 'id', 'link', 'caption']);
  imageProps.url = get(image, ['sizes', 'medium', 'url']) || get(image, ['media_details', 'sizes', 'medium', 'source_url']) || image.url;
  return imageProps;
};

var ImageEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ImageEdit, _Component);

  function ImageEdit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ImageEdit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ImageEdit).apply(this, arguments));
    _this.updateAlt = _this.updateAlt.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.onSelectImage = _this.onSelectImage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.onSelectURL = _this.onSelectURL.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.updateImageSize = _this.updateImageSize.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.onSetLinkDestination = _this.onSetLinkDestination.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.state = {
      isEditing: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ImageEdit, [{
    key: "updateAlt",
    value: function updateAlt(newAlt) {
      this.props.setAttributes({
        alt: newAlt
      });
    }
  }, {
    key: "onUploadError",
    value: function onUploadError(message) {
      var noticeOperations = this.props.noticeOperations;
      noticeOperations.createErrorNotice(message);
      this.setState({
        isEditing: true
      });
    }
  }, {
    key: "onSelectImage",
    value: function onSelectImage(media) {
      if (!media || !media.id) {
        this.props.setAttributes({
          url: undefined,
          alt: undefined,
          id: undefined,
          caption: undefined
        });
        return;
      }

      this.setState({
        isEditing: false
      });
      this.props.setAttributes(_objectSpread({}, pickRelevantMediaFiles(media), {
        width: undefined,
        height: undefined
      }));
    }
  }, {
    key: "onSetLinkDestination",
    value: function onSetLinkDestination(value) {
      var href;

      if (value === LINK_DESTINATION_NONE) {
        href = undefined;
      } else if (value === LINK_DESTINATION_MEDIA) {
        href = this.props.image && this.props.image.source_url || this.props.url;
      } else if (value === LINK_DESTINATION_ATTACHMENT) {
        href = this.props.image && this.props.image.link;
      } else {
        href = this.props.href;
      }

      this.props.setAttributes({
        linkDestination: value,
        href: href
      });
    }
  }, {
    key: "onSelectURL",
    value: function onSelectURL(newURL) {
      var url = this.props.attributes.url;

      if (newURL !== url) {
        this.props.setAttributes({
          url: newURL,
          id: undefined
        });
      }

      this.setState({
        isEditing: false
      });
    }
  }, {
    key: "updateImageSize",
    value: function updateImageSize(size) {
      var image = this.props.image;
      var sizedImage = get(image, ['media_details', 'sizes', size]);
      this.props.setAttributes({
        url: sizedImage.source_url,
        width: sizedImage.width,
        height: sizedImage.height,
        size: size
      });
    }
  }, {
    key: "getImageSizes",
    value: function getImageSizes() {
      var _this$props = this.props,
          imageSizes = _this$props.imageSizes,
          image = _this$props.image;

      if (!image) {
        return [];
      }

      var currentImageSizes = get(image, ['media_details', 'sizes']);

      if (!currentImageSizes) {
        return [];
      }

      return Object.keys(currentImageSizes).map(function (sizeSlug) {
        var sizeSpec = imageSizes.find(function (size) {
          return size.slug == sizeSlug;
        });
        return {
          value: sizeSlug,
          label: sizeSpec ? sizeSpec.name : sizeSlug
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          url = _this$props2.url,
          alt = _this$props2.alt,
          id = _this$props2.id,
          _this$props2$size = _this$props2.size,
          size = _this$props2$size === void 0 ? 'medium' : _this$props2$size,
          _this$props2$inInspec = _this$props2.inInspector,
          inInspector = _this$props2$inInspec === void 0 ? false : _this$props2$inInspec,
          _this$props2$isMain = _this$props2.isMain,
          isMain = _this$props2$isMain === void 0 ? false : _this$props2$isMain,
          _this$props2$changeSi = _this$props2.changeSize,
          changeSize = _this$props2$changeSi === void 0 ? true : _this$props2$changeSi,
          image = _this$props2.image;
      var imageUrl = url;

      if (!url && image) {
        imageUrl = get(image, ['media_details', 'sizes', size, 'source_url']); // Fallback sizes

        !imageUrl && (imageUrl = get(image, ['media_details', 'sizes', 'thumbnail', 'source_url']));
        !imageUrl && (imageUrl = get(image, ['media_details', 'sizes', 'full', 'source_url']));
        !imageUrl && (imageUrl = get(image, 'source_url'));
      }

      var imageSizeOptions = this.getImageSizes();
      var settings = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, !isEmpty(imageSizeOptions) && changeSize && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(SelectControl, {
        label: __('Image Size'),
        value: size,
        options: imageSizeOptions,
        onChange: this.updateImageSize
      }), typeof alt !== 'undefined' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(TextareaControl, {
        label: __('Alt Text (Alternative Text)'),
        value: alt,
        onChange: this.updateAlt,
        help: __('Alternative text describes your image to people who can’t see it. Add a short description with its key details.')
      }));
      var toolbar = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Toolbar, {
        className: 'block-editor-svbk-picture__controls'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(MediaUpload, {
        onSelect: this.onSelectImage,
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: id,
        render: function render(_ref) {
          var open = _ref.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(IconButton, {
            className: "components-toolbar__control",
            label: __('Edit image'),
            icon: editImageIcon,
            onClick: open
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(IconButton, {
        className: "components-toolbar__control",
        label: __('Remove image'),
        icon: "trash",
        onClick: function onClick() {
          _this2.onSelectImage();
        }
      }));
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, imageUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(MediaUploadCheck, null, isMain ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(BlockControls, null, toolbar) : toolbar), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("figure", {
        className: 'block-editor-svbk-picture'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("img", {
        src: imageUrl,
        alt: alt
      }))), id && !image && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Spinner, null), !imageUrl && !id && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(MediaPlaceholder //className={ className }
      , {
        onSelect: this.onSelectImage,
        onSelectURL: this.onSelectURL,
        accept: "image/*",
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: {
          id: id,
          imageUrl: imageUrl
        },
        labels: this.props.labels
      }), inInspector ? settings : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelBody, {
        title: __('Image Settings')
      }, settings)));
    }
  }]);

  return ImageEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function (select, props) {
  var _select = select('core'),
      getMedia = _select.getMedia;

  var _select2 = select('core/block-editor'),
      getSettings = _select2.getSettings;

  var id = props.id;

  var _getSettings = getSettings(),
      maxWidth = _getSettings.maxWidth,
      isRTL = _getSettings.isRTL,
      imageSizes = _getSettings.imageSizes;

  return {
    image: id ? getMedia(id) : null,
    maxWidth: maxWidth,
    isRTL: isRTL,
    imageSizes: imageSizes
  };
})])(ImageEdit));

/***/ }),

/***/ "./blocks/countdown/formatters.js":
/*!****************************************!*\
  !*** ./blocks/countdown/formatters.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var formatters = [{
  formatter: 'Y',
  className: 'year',
  name: 'Years left'
}, {
  formatter: 'm',
  className: 'month',
  name: 'Months left'
}, {
  formatter: 'n',
  className: 'monthdays',
  name: 'Days left until the next complete month'
}, {
  formatter: 'w',
  className: 'weeks',
  name: 'Weeks left'
}, {
  formatter: 'W',
  className: 'monthweeks',
  name: 'Weeks left until the next complete month'
}, {
  formatter: 'd',
  className: 'days',
  name: 'Days left (taking away weeks)'
}, {
  formatter: 'H',
  className: 'hours',
  name: 'Hours left'
}, {
  formatter: 'M',
  className: 'minutes',
  name: 'Minutes left'
}, {
  formatter: 'S',
  className: 'seconds',
  name: 'Seconds left'
}, {
  formatter: 'D',
  className: 'totdays',
  name: 'Total count of days till the end'
}, {
  formatter: 'I',
  className: 'tothours',
  name: 'Total count of hours thill the end'
}, {
  formatter: 'N',
  className: 'totminutes',
  name: 'Total count of minutes till the end'
}, {
  formatter: 'T',
  className: 'totseconds',
  name: 'Total count of seconds till the end'
}];
var formatters_blank = lodash.cloneDeepWith(formatters, function (value, key, object) {
  if ('formatter' == key) {
    return '-' + value;
  }

  if ('name' == key) {
    return value + ' (blank-padded)';
  }
});
/* harmony default export */ __webpack_exports__["default"] = (lodash.concat(formatters, formatters_blank));

/***/ }),

/***/ "./blocks/countdown/index.js":
/*!***********************************!*\
  !*** ./blocks/countdown/index.js ***!
  \***********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatters */ "./blocks/countdown/formatters.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);



/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    DateTimePicker = _wp$components.DateTimePicker,
    Dashicon = _wp$components.Dashicon;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    RichText = _wp$blockEditor.RichText;
var attributes = {
  expires: {
    type: 'string',
    source: 'attribute',
    selector: 'div.countdown',
    attribute: 'data-expires'
  },
  persists: {
    type: 'string',
    selector: 'div',
    attribute: 'data-persist'
  },
  format: {
    type: 'string',
    source: 'html',
    selector: 'div',
    default: __('%D days %H hours %M min %S sec', '_svbk')
  }
};

var formatterTemplate = function formatterTemplate(option) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: 'countdown__segment countdown__segment--' + option.className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("em", {
    className: 'countdown__digit'
  }, "%", option.formatter));
};

var autocompleters = [{
  name: 'jquery_countdown',
  // The prefix that triggers this completer
  triggerPrefix: '%',
  // The option data
  options: _formatters__WEBPACK_IMPORTED_MODULE_1__["default"],
  // Returns a label for an option like " Orange"
  getOptionLabel: function getOptionLabel(option) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("code", null, "%", option.formatter), " ", option.name);
  },
  // Declares that options should be matched by their name
  getOptionKeywords: function getOptionKeywords(option) {
    return [option.formatter];
  },
  // Declares that the Grapes option is disabled
  isOptionDisabled: function isOptionDisabled(option) {
    return option.name === 'Grapes';
  },
  // Declares completions should be inserted as abbreviations
  getOptionCompletion: formatterTemplate
}];
var formatters_placeholders = lodash.keyBy(_formatters__WEBPACK_IMPORTED_MODULE_1__["default"], 'formatter');
var formatters_placeholder_regex = /%(-?\w+)/gi;

var stringToFormat = function stringToFormat(formatString) {
  return formatString.replace(formatters_placeholder_regex, function (match, placeholder) {
    var formatter = formatters_placeholders[placeholder];

    if (typeof formatter !== 'undefined') {
      try {
        return react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToStaticMarkup(formatterTemplate(formatter));
      } catch (err) {
        console.error(err);
      }
    }

    return match;
  });
};

attributes.format.default = stringToFormat(attributes.format.default);
/**
 * Internal dependencies
 */

var name = 'svbk/countdown';
var settings = {
  title: __('Countdown', '_svbk'),
  description: __('Countdown', '_svbk'),
  icon: 'backup',
  category: 'widgets',
  keywords: [__('countdown', '_svbk'), __('timer', '_svbk')],
  supports: {
    html: true
  },
  attributes: attributes,
  transforms: {
    from: [{
      type: 'shortcode',
      // Shortcode tag can also be an array of shortcode aliases
      tag: 'countdown',
      attributes: {
        // An attribute can be source from the shortcode attributes
        expires: {
          type: 'string',
          shortcode: function shortcode(_ref) {
            var _ref$named$date = _ref.named.date,
                date = _ref$named$date === void 0 ? '' : _ref$named$date;
            return new Date(date).toISOString();
          }
        },
        // An attribute can be source from the shortcode attributes
        format: {
          type: 'string',
          shortcode: function shortcode(_ref2) {
            var _ref2$named$format = _ref2.named.format,
                format = _ref2$named$format === void 0 ? attributes.format.default : _ref2$named$format;

            if (encodeURIComponent(format).includes('<')) {
              return format;
            }

            return stringToFormat(format);
          }
        }
      }
    }]
  },
  edit: function edit(_ref3) {
    var attributes = _ref3.attributes,
        setAttributes = _ref3.setAttributes,
        className = _ref3.className;
    var expires = attributes.expires,
        persists = attributes.persists,
        format = attributes.format;
    var expireDate = new Date(expires);
    return expires ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Settings', '_svbk')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Persist', '_svbk'),
      checked: persists,
      onChange: function onChange(value) {
        setAttributes({
          persists: Boolean(value)
        });
      },
      help: __('Keep the countdown remaining time on page refresh', '_svbk')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DateTimePicker, {
      currentDate: expires,
      onChange: function onChange(value) {
        setAttributes({
          expires: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "backup"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      value: format ? format : attributes.format.default,
      onChange: function onChange(value) {
        setAttributes({
          format: value
        });
      },
      autocompleters: autocompleters
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'countdown__expires'
    }, 'Countdown expires at: ' + expireDate.toLocaleDateString() + ' - ' + expireDate.toLocaleTimeString()))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, __('Please choose an expire date', '_svbk')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DateTimePicker, {
      currentDate: expires,
      onChange: function onChange(value) {
        setAttributes({
          expires: value
        });
      }
    }));
  },
  save: function save(_ref4) {
    var attributes = _ref4.attributes;
    var expires = attributes.expires,
        format = attributes.format,
        persist = attributes.persist;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      className: 'countdown',
      "data-expires": expires,
      "data-persist": persist,
      tagName: 'div',
      value: format
    });
  }
};

/***/ }),

/***/ "./blocks/flickity/flickity-options.js":
/*!*********************************************!*\
  !*** ./blocks/flickity/flickity-options.js ***!
  \*********************************************/
/*! exports provided: isFlickity, getFlickityOptions, withFlickityEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFlickity", function() { return isFlickity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlickityOptions", function() { return getFlickityOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFlickityEditor", function() { return withFlickityEditor; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var Fragment = wp.element.Fragment;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    RadioControl = _wp$components.RadioControl,
    ToggleControl = _wp$components.ToggleControl;
var __ = wp.i18n.__;
var _ = window.lodash; // Check if Flickity is enabled on a particular block, based on attributes and optionally blockType

var isFlickity = function isFlickity(attributes, blockType) {
  if (blockType && blockType.name !== 'core/gallery') {
    return false;
  }

  if (attributes && attributes.className && attributes.className.includes('is-style-flickity')) {
    return true;
  }

  return false;
}; // Extract Flickity options from block attributes

var getFlickityOptions = function getFlickityOptions(attributes) {
  var flickityOptions = {};

  if (attributes.flickity) {
    try {
      flickityOptions = JSON.parse(attributes.flickity);
    } catch (e) {
      console.error('Invalid JSON for Flickity Options');
    }
  }

  return flickityOptions;
};
/**
 * A Higher Order Component to add Flickity editor controls
 * wrapped component.
 *
 * @param {Function} mapContextToProps Function called on every context change,
 *                                     expected to return object of props to
 *                                     merge with the component's own props.
 *
 * @return {Component} Enhanced component with injected context as props.
 */

var withFlickityEditor = createHigherOrderComponent(function (GalleryEdit) {
  return function (props) {
    var setAttributes = props.setAttributes,
        attributes = props.attributes;

    if (!isFlickity(attributes)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(GalleryEdit, props);
    }

    var flickityOptions = getFlickityOptions(attributes);

    var setFlickityOptions = function setFlickityOptions(options) {
      setAttributes({
        flickity: JSON.stringify(_.assign({}, flickityOptions, options))
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(GalleryEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Flickity Options'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Lazy Load'),
      help: __('Loads cell images when a cell is selected.'),
      onChange: function onChange(value) {
        return setFlickityOptions({
          lazyLoad: value ? 1 : 0
        });
      },
      checked: Boolean(flickityOptions.lazyLoad)
    }), flickityOptions.lazyLoad > 0 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('How many images to lazyload in adjacent cells'),
      onChange: function onChange(value) {
        return setFlickityOptions({
          lazyLoad: Number(value)
        });
      },
      value: flickityOptions.lazyLoad,
      min: 1
    }) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Wait for images to load'),
      help: __('Unloaded images have no size, which can throw off cell positions. To fix this, the this option re-positions cells once their images have loaded.'),
      onChange: function onChange(value) {
        return setFlickityOptions({
          imagesLoaded: value
        });
      },
      checked: Boolean(flickityOptions.imagesLoaded)
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Contain'),
      help: __('Contains cells to carousel element to prevent excess scroll at beginning or end. Has no effect if `wrapAround: true`'),
      onChange: function onChange(value) {
        return setFlickityOptions({
          contain: value
        });
      },
      checked: flickityOptions.contain
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RadioControl, {
      label: __('Cell Alignment'),
      help: __('Align cells within the carousel element.'),
      selected: flickityOptions.cellAlign || 'center',
      options: [{
        label: __('Left'),
        value: 'left'
      }, {
        label: __('Center'),
        value: 'center'
      }, {
        label: __('Right'),
        value: 'right'
      }],
      onChange: function onChange(value) {
        return setFlickityOptions({
          cellAlign: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Wrap Around'),
      help: __('At the end of cells, wrap-around to the other end for infinite scrolling.'),
      onChange: function onChange(value) {
        return setFlickityOptions({
          wrapAround: value
        });
      },
      checked: flickityOptions.wrapAround
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Prev Next Buttons'),
      help: __('Creates and enables previous & next buttons. Enabled by default'),
      onChange: function onChange(value) {
        return setFlickityOptions({
          prevNextButtons: value
        });
      },
      checked: flickityOptions.prevNextButtons !== false
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Paging Dots'),
      help: __('Creates and enables page dots.'),
      onChange: function onChange(value) {
        return setFlickityOptions({
          pageDots: value
        });
      },
      checked: flickityOptions.pageDots !== false
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Initial Index'),
      help: __('The initial selected cell.'),
      onChange: function onChange(value) {
        return setAttributes({
          initialIndex: Number(value) - 1
        });
      },
      value: flickityOptions.initialIndex,
      initialPosition: 1,
      min: 1,
      max: attributes.images.length
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Group Cells'),
      help: __('Groups cells together in slides. Flicking, page dots, and previous/next buttons are mapped to group slides, not individual cells'),
      onChange: function onChange(value) {
        return setFlickityOptions({
          groupCells: Number(value ? 2 : 0)
        });
      },
      checked: flickityOptions.groupCells > 0
    }), flickityOptions.groupCells > 0 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Group Cells Number'),
      onChange: function onChange(value) {
        return setFlickityOptions({
          groupCells: Number(value)
        });
      },
      value: flickityOptions.groupCells,
      min: 2
    }) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Autoplay'),
      help: __('Automatically advances to the next cell.'),
      onChange: function onChange(value) {
        return setFlickityOptions({
          autoPlay: Number(value ? 3000 : 0)
        });
      },
      checked: flickityOptions.autoPlay > 0
    }), flickityOptions.autoPlay > 0 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Autoplay Timeout'),
      help: __('Advance cells ever X milliseconds. (ex. 3000 = 3 sec)'),
      onChange: function onChange(value) {
        return setFlickityOptions({
          autoPlay: Number(value)
        });
      },
      value: flickityOptions.autoPlay,
      min: 100,
      max: 99999
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Pause Auto Play on Hover'),
      help: __('Auto play continues when user hovers over carousel'),
      onChange: function onChange(value) {
        return setFlickityOptions({
          pauseAutoPlayOnHover: Boolean(value)
        });
      },
      checked: flickityOptions.pauseAutoPlayOnHover !== false
    })) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Draggable'),
      help: __('Enables dragging and flicking. Enabled by default when carousel has 2 or more slides'),
      onChange: function onChange(value) {
        return setFlickityOptions({
          draggable: Boolean(value)
        });
      },
      checked: flickityOptions.draggable !== false && attributes.images.length > 1
    }), flickityOptions.draggable !== false && attributes.images.length > 1 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Free Scroll'),
      help: __('Enables content to be freely scrolled and flicked without aligning cells to an end position.'),
      onChange: function onChange(value) {
        return setFlickityOptions({
          freeScroll: value
        });
      },
      checked: flickityOptions.freeScroll
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Drag threshold'),
      help: __('The number of pixels a mouse or touch has to move before dragging begins..'),
      onChange: function onChange(value) {
        return setAttributes({
          dragThreshold: Number(value) + 1
        });
      },
      value: flickityOptions.dragThreshold,
      min: 0,
      max: 999
    })) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Adaptive Height'),
      help: __('Changes height of carousel to fit height of selected slide.'),
      onChange: function onChange(value) {
        return setFlickityOptions({
          adaptiveHeight: value
        });
      },
      checked: flickityOptions.adaptiveHeight
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Right to Left'),
      help: __('Enables right-to-left layout..'),
      onChange: function onChange(value) {
        return setFlickityOptions({
          rightToLeft: Boolean(value)
        });
      },
      checked: flickityOptions.rightToLeft
    }))));
  };
}, 'withFlickityEditor');

/***/ }),

/***/ "./blocks/flickity/index.js":
/*!**********************************!*\
  !*** ./blocks/flickity/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _flickity_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flickity-options */ "./blocks/flickity/flickity-options.js");



/* global wp */

/* global lodash */

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _ = window.lodash;
var RichText = wp.blockEditor.RichText;

 // Register the activation block-styles for Flickity

wp.blocks.registerBlockStyle('core/gallery', {
  name: 'flickity',
  label: 'Flickity Carousel'
});
wp.blocks.registerBlockStyle('core/gallery', {
  name: 'flickity-slider',
  label: 'Flickity Slider'
});
/**
 * Inject the flickity attributes in the image attributes,
 * to map something like this:
 * 
 * {
 * 	"attributes": {
 *		flickity: {
 *			type: 'string',
 *			source: 'attribute',
 *			selector: 'ul',
 *			attribute: 'data-flickity',		
 *		},
 * 	  	images: {
 * 			type: "array",
 *			default: [ ],
 *			source": "query",
 *			selector: ".blocks-gallery-item",* 
 * 			query: {
 * 				flickityLazyload: {
 *					source: 'attribute',
 *					selector: 'img',
 *					attribute: 'data-flickity-lazyload',
 *				},	
 * 				url: {
 * 					source: 'attribute',
 * 					selector: 'img',
 * 					attribute: 'src'
 * 				},
 * 				...
 *			}
 * 	 	}
 * 	}
 */
// Register new flickity options for the Gallery Block

var addFlickityToGallery = function addFlickityToGallery(settings, name) {
  // Apply only to gallery block
  if (name !== 'core/gallery') {
    return settings;
  }

  _.assign(settings, {
    edit: Object(_flickity_options__WEBPACK_IMPORTED_MODULE_3__["withFlickityEditor"])(settings.edit),
    keywords: lodash.union(settings.keywords, [__('flickity')]),
    attributes: _.assign({}, settings.attributes, {
      flickity: {
        type: 'string',
        source: 'attribute',
        selector: '.blocks-gallery-grid',
        attribute: 'data-flickity'
      }
    })
  }); // Inject the single image lazyLoad attribute


  settings.attributes.images.query['flickityLazyload'] = {
    source: 'attribute',
    selector: 'img',
    attribute: 'data-flickity-lazyload-src'
  };
  settings.attributes.images.query['flickityLazyloadSrcset'] = {
    source: 'attribute',
    selector: 'img',
    attribute: 'data-flickity-lazyload-srcset'
  };
  return settings;
};

wp.hooks.addFilter('blocks.registerBlockType', 'svbk/flickity/gallery-block', addFlickityToGallery); // Add Flickity options property, add flickity-image class and lazyload attributes to <img>s

var withFlickitySave = function withFlickitySave(mainElement, blockType, attributes) {
  // Check if the gallery has flickity style
  if (!Object(_flickity_options__WEBPACK_IMPORTED_MODULE_3__["isFlickity"])(attributes, blockType)) {
    return mainElement;
  }

  var images = attributes.images,
      caption = attributes.caption,
      linkTo = attributes.linkTo;
  var flickityOptions = Object(_flickity_options__WEBPACK_IMPORTED_MODULE_3__["getFlickityOptions"])(attributes);
  flickityOptions.cellSelector = '.blocks-gallery-item';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
    className: mainElement.props.className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "blocks-gallery-grid",
    "data-flickity": JSON.stringify(flickityOptions)
  }, images.map(function (image) {
    var href;

    switch (linkTo) {
      case 'media':
        href = image.fullUrl || image.url;
        break;

      case 'attachment':
        href = image.link;
        break;
    }

    var imageClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      'flickity-lazyload-image': flickityOptions.lazyLoad
    }, "wp-image-".concat(image.id), image.id));
    var img = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: flickityOptions.lazyLoad ? null : image.url,
      srcSet: flickityOptions.lazyLoad ? null : image.srcset,
      alt: image.alt,
      "data-id": image.id,
      "data-full-url": image.fullUrl,
      "data-link": image.link,
      className: imageClasses,
      "data-flickity-lazyload-src": flickityOptions.lazyLoad ? image.url : null,
      "data-flickity-lazyload-srcset": flickityOptions.lazyLoad ? image.srcset : null
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      key: image.id || image.url,
      className: "blocks-gallery-item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", null, href ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: href
    }, img) : img, !RichText.isEmpty(image.caption) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: "figcaption",
      className: "blocks-gallery-item__caption",
      value: image.caption
    })));
  })), !RichText.isEmpty(caption) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
    tagName: "figcaption",
    className: "blocks-gallery-caption",
    value: caption
  }));
};

wp.hooks.addFilter('blocks.getSaveElement', 'svbk/gallery-flickity-save', withFlickitySave); // Backfill the `url`/`srcset` image attributes from the flickity lazyload params

var backfillFlickityAttributes = function backfillFlickityAttributes(attributes, blockType, element, type) {
  if (!Object(_flickity_options__WEBPACK_IMPORTED_MODULE_3__["isFlickity"])(attributes, blockType)) {
    return attributes;
  }

  attributes.images.forEach(function (image) {
    if (!image.url && image.flickityLazyload) {
      image.url = image.flickityLazyload;
    }

    if (!image.srcset && image.flickityLazyloadSrcset) {
      image.srcSet = image.flickityLazyloadSrcset;
    }
  });
  return attributes;
};

wp.hooks.addFilter('blocks.getBlockAttributes', 'svbk/gallery-flickity-attributes', backfillFlickityAttributes);

/***/ }),

/***/ "./blocks/formats/highlight.js":
/*!*************************************!*\
  !*** ./blocks/formats/highlight.js ***!
  \*************************************/
/*! exports provided: highlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlight", function() { return highlight; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var toggleFormat = wp.richText.toggleFormat;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
var _wp$blockEditor = wp.blockEditor,
    RichTextToolbarButton = _wp$blockEditor.RichTextToolbarButton,
    RichTextShortcut = _wp$blockEditor.RichTextShortcut;
var name = 'svbk/highlight';
var highlight = {
  name: name,
  title: __('Highlight'),
  tagName: 'em',
  className: 'highlight',
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange;

    var onToggle = function onToggle() {
      return onChange(toggleFormat(value, {
        type: name
      }));
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichTextShortcut, {
      type: "primary",
      character: "h",
      onUse: onToggle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichTextToolbarButton, {
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M6,5 L2,9 L3,10 L0,13 L4,13 L5,12 L5,12 L6,13 L10,9 L6,5 L6,5 Z M10.2937851,0.706214905 C10.6838168,0.316183183 11.3138733,0.313873291 11.7059121,0.705912054 L14.2940879,3.29408795 C14.6839524,3.68395241 14.6796852,4.32031476 14.2937851,4.7062149 L11,8 L7,4 L10.2937851,0.706214905 Z"
      })),
      title: __('Highlight'),
      onClick: onToggle,
      isActive: isActive,
      shortcutType: "primary",
      shortcutCharacter: "h",
      className: "toolbar-button-with-text toolbar-button__advanced-mark"
    }));
  }
};

/***/ }),

/***/ "./blocks/formats/index.js":
/*!*********************************!*\
  !*** ./blocks/formats/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlight */ "./blocks/formats/highlight.js");
/* harmony import */ var _standout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./standout */ "./blocks/formats/standout.js");
/* harmony import */ var _underline_stroke__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./underline-stroke */ "./blocks/formats/underline-stroke.js");


/**
 * WordPress dependencies
 */
var registerFormatType = wp.richText.registerFormatType;
/**
 * Internal dependencies
 */




[_highlight__WEBPACK_IMPORTED_MODULE_1__["highlight"], _standout__WEBPACK_IMPORTED_MODULE_2__["standout"], _underline_stroke__WEBPACK_IMPORTED_MODULE_3__["underlineStroke"]].forEach(function (_ref) {
  var name = _ref.name,
      settings = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["name"]);

  return registerFormatType(name, settings);
});

/***/ }),

/***/ "./blocks/formats/standout.js":
/*!************************************!*\
  !*** ./blocks/formats/standout.js ***!
  \************************************/
/*! exports provided: standout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "standout", function() { return standout; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var toggleFormat = wp.richText.toggleFormat;
var Fragment = wp.element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    RichTextToolbarButton = _wp$blockEditor.RichTextToolbarButton,
    RichTextShortcut = _wp$blockEditor.RichTextShortcut;
var name = 'svbk/standout';
var standout = {
  name: name,
  title: __('Standout'),
  tagName: 'em',
  className: 'standout',
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange;

    var onToggle = function onToggle() {
      return onChange(toggleFormat(value, {
        type: name
      }));
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichTextShortcut, {
      type: "primary",
      character: "s",
      onUse: onToggle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichTextToolbarButton, {
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        baseProfile: "tiny",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "none",
        d: "M0 0h24v24H0V0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"
      })),
      title: __('Standout'),
      onClick: onToggle,
      isActive: isActive,
      shortcutType: "primary",
      shortcutCharacter: "s",
      className: "toolbar-button-with-text toolbar-button__advanced-mark"
    }));
  }
};

/***/ }),

/***/ "./blocks/formats/underline-stroke.js":
/*!********************************************!*\
  !*** ./blocks/formats/underline-stroke.js ***!
  \********************************************/
/*! exports provided: underlineStroke */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "underlineStroke", function() { return underlineStroke; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var toggleFormat = wp.richText.toggleFormat;
var Fragment = wp.element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    RichTextToolbarButton = _wp$blockEditor.RichTextToolbarButton,
    RichTextShortcut = _wp$blockEditor.RichTextShortcut;
var name = 'svbk/underline-stroke';
var underlineStroke = {
  name: name,
  title: __('Underline Stroke'),
  tagName: 'em',
  className: 'underline-stroke',
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange;

    var onToggle = function onToggle() {
      return onChange(toggleFormat(value, {
        type: name
      }));
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichTextShortcut, {
      type: "primary",
      character: "h",
      onUse: onToggle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichTextToolbarButton, {
      icon: 'admin-customizer',
      title: __('Underline Stroke'),
      onClick: onToggle,
      isActive: isActive,
      shortcutType: "primary",
      shortcutCharacter: "h",
      className: "toolbar-button-with-text toolbar-button__advanced-mark"
    }));
  }
};

/***/ }),

/***/ "./blocks/grid/deprecated.js":
/*!***********************************!*\
  !*** ./blocks/grid/deprecated.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    getColorClassName = _wp$blockEditor.getColorClassName,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
/**
 * External dependencies
 */


var deprecated = [{
  attributes: {
    columns: {
      type: 'number',
      default: 3
    },
    equalHeight: {
      type: 'boolean',
      default: true
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    align: {
      type: 'string'
    }
  },
  supports: {
    html: false
  },
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var columns = attributes.columns,
        equalHeight = attributes.equalHeight,
        backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        align = attributes.align;
    var backgroundClass = getColorClassName('background-color', backgroundColor);
    var classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()("has-".concat(columns, "-columns"), (_classnames = {
      'has-background': backgroundColor || customBackgroundColor
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundClass, backgroundClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-equal-cell-height', equalHeight), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "has-align-".concat(align), align), _classnames));
    var style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classNames,
      style: style
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./blocks/grid/edit.js":
/*!*****************************!*\
  !*** ./blocks/grid/edit.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);








/* global wp */

/* global lodash */
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings,
    withColors = _wp$blockEditor.withColors,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl;
var compose = wp.compose.compose;
/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'core/column'.
 *
 * @constant
 * @type {string[]}
*/

var ALLOWED_BLOCKS = ['svbk/testimonial', 'svbk/bullet', 'svbk/profile', 'svbk/card', 'svbk/stats', 'core/group', 'core/image'];

var GridEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(GridEdit, _Component);

  function GridEdit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, GridEdit);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(GridEdit).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(GridEdit, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          className = _this$props.className,
          isSelected = _this$props.isSelected,
          backgroundColor = _this$props.backgroundColor,
          setBackgroundColor = _this$props.setBackgroundColor;
      var columns = attributes.columns,
          columnsMobile = attributes.columnsMobile,
          equalHeight = attributes.equalHeight,
          align = attributes.align;
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, "has-".concat(columns, "-columns has-").concat(columnsMobile, "-columns-mobile"), (_classnames = {
        'is-selected': isSelected
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundColor.class, backgroundColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-equal-cell-height', equalHeight), _classnames));
      var style = {
        backgroundColor: backgroundColor.color
      };
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classNames,
        style: style
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InnerBlocks, {
        templateLock: false,
        allowedBlocks: ALLOWED_BLOCKS
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelBody, {
        title: __('Grid Settings', '_svbk')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RangeControl, {
        label: __('Columns', '_svbk'),
        value: columns,
        onChange: function onChange(columns) {
          return setAttributes({
            columns: columns
          });
        },
        min: 2,
        max: 6
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RangeControl, {
        label: __('Mobile Columns', '_svbk'),
        value: columnsMobile,
        onChange: function onChange(columnsMobile) {
          return setAttributes({
            columnsMobile: columnsMobile
          });
        },
        min: 1,
        max: 3
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ToggleControl, {
        label: __('Equal Height', '_svbk'),
        help: equalHeight ? 'All cells have the same height' : 'Cell inherit their height from the content',
        checked: equalHeight,
        onChange: function onChange(value) {
          return setAttributes({
            equalHeight: Boolean(value)
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(SelectControl, {
        label: __('Columns Alignment'),
        value: align,
        options: [{
          label: __('Center'),
          value: 'center'
        }, {
          label: __('Left'),
          value: 'left'
        }, {
          label: __('Right'),
          value: 'right'
        }],
        onChange: function onChange(value) {
          return setAttributes({
            align: value
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelColorSettings, {
        title: __('Color Settings'),
        initialOpen: false,
        colorSettings: [{
          value: backgroundColor.color,
          onChange: setBackgroundColor,
          label: __('Background Color')
        }]
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(AlignmentToolbar, {
        value: align,
        onChange: function onChange(nextAlign) {
          setAttributes({
            align: nextAlign
          });
        }
      })));
    }
  }]);

  return GridEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withColors('backgroundColor')])(GridEdit));

/***/ }),

/***/ "./blocks/grid/index.js":
/*!******************************!*\
  !*** ./blocks/grid/index.js ***!
  \******************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/grid/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deprecated */ "./blocks/grid/deprecated.js");



/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blockEditor = wp.blockEditor,
    getColorClassName = _wp$blockEditor.getColorClassName,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var createBlock = wp.blocks.createBlock;
/**
 * Internal dependencies
 */


/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

var name = 'svbk/grid';
var settings = {
  title: __('Grid Layout', '_svbk'),
  icon: 'grid-view',
  category: 'layout',
  keywords: [__('grid'), __('flex'), __('table')],
  attributes: {
    columns: {
      type: 'number',
      default: 3
    },
    columnsMobile: {
      type: 'number',
      default: 1
    },
    equalHeight: {
      type: 'boolean',
      default: true
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    align: {
      type: 'string'
    }
  },
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  transforms: {
    from: [{
      type: 'block',
      blocks: ['core/group'],
      transform: function transform(attributes, innerBlocks) {
        return createBlock('svbk/grid', attributes, innerBlocks);
      }
    }]
  },
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var columns = attributes.columns,
        columnsMobile = attributes.columnsMobile,
        equalHeight = attributes.equalHeight,
        backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        align = attributes.align;
    var backgroundClass = getColorClassName('background-color', backgroundColor);
    var classNames = classnames__WEBPACK_IMPORTED_MODULE_3___default()("has-".concat(columns, "-columns has-").concat(columnsMobile, "-columns-mobile"), (_classnames = {
      'has-background': backgroundColor || customBackgroundColor
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundClass, backgroundClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-equal-cell-height', equalHeight), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "has-align-".concat(align), align), _classnames));
    var style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classNames,
      style: style
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
  }
};

/***/ }),

/***/ "./blocks/hero/edit.js":
/*!*****************************!*\
  !*** ./blocks/hero/edit.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/image */ "./blocks/common/image.js");
/* harmony import */ var _common_heading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/heading */ "./blocks/common/heading.js");








/* global wp */

/* global lodash */
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
/**
 * External dependencies
 */

var _lodash = lodash,
    pick = _lodash.pick,
    mapKeys = _lodash.mapKeys,
    capitalize = _lodash.capitalize;

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls;
var _wp$components = wp.components,
    Dashicon = _wp$components.Dashicon,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    Toolbar = _wp$components.Toolbar;
/**
 * Internal dependencies
 */




var HeroEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(HeroEdit, _Component);

  function HeroEdit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, HeroEdit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(HeroEdit).apply(this, arguments));
    _this.state = {
      customStackedImage: Boolean(_this.props.attributes.pictureStackedUrl)
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(HeroEdit, [{
    key: "render",
    value: function render() {
      var _classnames,
          _this2 = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          className = _this$props.className,
          isSelected = _this$props.isSelected;
      var pictureUrl = attributes.pictureUrl,
          pictureId = attributes.pictureId,
          pictureSize = attributes.pictureSize,
          pictureStackedUrl = attributes.pictureStackedUrl,
          pictureStackedId = attributes.pictureStackedId,
          pictureStackedSize = attributes.pictureStackedSize,
          pictureAlt = attributes.pictureAlt,
          pretitle = attributes.pretitle,
          title = attributes.title,
          titleLevel = attributes.titleLevel,
          subtitle = attributes.subtitle,
          text = attributes.text,
          footer = attributes.footer,
          align = attributes.align,
          primaryButtonUrl = attributes.primaryButtonUrl,
          primaryButtonText = attributes.primaryButtonText,
          secondaryButtonUrl = attributes.secondaryButtonUrl,
          secondaryButtonText = attributes.secondaryButtonText,
          bottomPadded = attributes.bottomPadded;
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, (_classnames = {
        'is-selected': isSelected
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "has-align-".concat(align), align), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-bottom-padding', bottomPadded), _classnames));

      var pictureUpdate = function pictureUpdate(update) {
        var localUpdate = mapKeys(pick(update, ['id', 'url', 'alt', 'size']), function (value, key) {
          // Convert url to pictureUrl, id to pictureId, etc
          return 'picture' + capitalize(key);
        });
        setAttributes(localUpdate);
      };

      var pictureStackedUpdate = function pictureStackedUpdate(update) {
        var localUpdate = mapKeys(pick(update, ['id', 'url', 'size']), function (value, key) {
          // Convert url to pictureUrl, id to pictureId, etc
          return 'pictureStacked' + capitalize(key);
        });
        setAttributes(localUpdate);
      };

      var style = {};
      var toolbarControls = [{
        icon: 'align-pull-right',
        title: __('Show content on left'),
        isActive: align === 'left',
        onClick: function onClick() {
          return setAttributes({
            align: 'left'
          });
        }
      }, {
        icon: 'align-pull-left',
        title: __('Show content on right'),
        isActive: align === 'right',
        onClick: function onClick() {
          return setAttributes({
            align: 'right'
          });
        }
      }];
      var titleTag = titleLevel ? 'h' + titleLevel : 'h1';
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classNames,
        style: style
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_common_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        setAttributes: pictureUpdate,
        url: pictureUrl,
        id: pictureId,
        alt: pictureAlt,
        size: pictureSize,
        isMain: true
      }), pictureUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: 'wp-block-svbk-hero__content'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        tagName: 'p',
        value: pretitle,
        onChange: function onChange(value) {
          return setAttributes({
            pretitle: value
          });
        },
        placeholder: __('Question: is this a new block?', '_svbk'),
        className: 'wp-block-svbk-hero__subtitle'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        tagName: titleTag,
        value: title,
        onChange: function onChange(value) {
          return setAttributes({
            title: value
          });
        },
        placeholder: __('This is my title..', '_svbk'),
        className: 'wp-block-svbk-hero__title'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        tagName: 'p',
        value: subtitle,
        onChange: function onChange(value) {
          return setAttributes({
            subtitle: value
          });
        },
        placeholder: __('Subtitle..', '_svbk'),
        className: 'wp-block-svbk-hero__subtitle'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        tagName: 'p',
        value: text,
        onChange: function onChange(value) {
          return setAttributes({
            text: value
          });
        },
        placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. De ingenio eius in his disputationibus, non de moribus quaeritur.',
        className: 'wp-block-svbk-hero__text'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        placeholder: __('Primary button text…'),
        value: primaryButtonText,
        onChange: function onChange(value) {
          return setAttributes({
            primaryButtonText: value
          });
        },
        formattingControls: ['bold', 'italic', 'strikethrough'],
        className: 'wp-block-svbk-hero__link block-library-button'
      }), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("form", {
        className: "block-library-button__inline-link",
        onSubmit: function onSubmit(event) {
          return event.preventDefault();
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Dashicon, {
        icon: "admin-links"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(URLInput, {
        value: primaryButtonUrl,
        onChange: function onChange(value) {
          return setAttributes({
            primaryButtonUrl: value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(IconButton, {
        icon: "editor-break",
        label: __('Apply'),
        type: "submit"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        placeholder: __('Secondary button text…'),
        value: secondaryButtonText,
        onChange: function onChange(value) {
          return setAttributes({
            secondaryButtonText: value
          });
        },
        formattingControls: ['bold', 'italic', 'strikethrough'],
        className: 'wp-block-svbk-hero__link block-library-button'
      }), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("form", {
        className: "block-library-button__inline-link",
        onSubmit: function onSubmit(event) {
          return event.preventDefault();
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Dashicon, {
        icon: "admin-links"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(URLInput, {
        value: secondaryButtonUrl,
        onChange: function onChange(value) {
          return setAttributes({
            secondaryButtonUrl: value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(IconButton, {
        icon: "editor-break",
        label: __('Apply'),
        type: "submit"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        tagName: 'div',
        value: footer,
        onChange: function onChange(value) {
          return setAttributes({
            footer: value
          });
        },
        placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. De ingenio eius in his disputationibus, non de moribus quaeritur.',
        className: 'wp-block-svbk-hero__footer'
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_common_heading__WEBPACK_IMPORTED_MODULE_9__["HeadingToolbar"], {
        minLevel: 1,
        maxLevel: 3,
        selectedLevel: titleLevel,
        onChange: function onChange(newLevel) {
          setAttributes({
            titleLevel: newLevel
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Toolbar, {
        controls: toolbarControls
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelBody, {
        title: __('Spacing')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ToggleControl, {
        label: __('Bottom padding', '_svbk'),
        help: bottomPadded ? 'The block has some extra bottom padding (needed by offset bullets)' : 'The block has a standard bottom padding',
        checked: bottomPadded,
        onChange: function onChange(value) {
          return setAttributes({
            bottomPadded: Boolean(value)
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelBody, {
        title: __('Background Settings')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ToggleControl, {
        label: __('Use custom image when stacked', '_svbk'),
        checked: this.state.customStackedImage,
        onChange: function onChange(useCustom) {
          _this2.setState({
            customStackedImage: Boolean(useCustom)
          });
        },
        help: __('Choose another image when the image is above the text', '_svbk')
      }), this.state.customStackedImage && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("label", {
        className: "components-base-control__label"
      }, 'Immagine sopra-sotto'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_common_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        setAttributes: pictureStackedUpdate,
        url: pictureStackedUrl,
        id: pictureStackedId,
        size: pictureStackedSize,
        inInspector: true
      })))));
    }
  }]);

  return HeroEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (HeroEdit);

/***/ }),

/***/ "./blocks/hero/index.js":
/*!******************************!*\
  !*** ./blocks/hero/index.js ***!
  \******************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/hero/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);



/* global wp */

/* global lodash */

/**
 * BLOCK: hero
 *
 * Shows a  hero
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var RichText = wp.blockEditor.RichText;
/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

/**
 * Internal dependencies
 */

var name = 'svbk/hero';
var settings = {
  title: __('Hero', '_svbk'),
  icon: 'welcome-view-site',
  category: 'common',
  keywords: [__('hero'), __('above'), __('intro')],
  styles: [// Mark style as default.
  {
    name: 'default',
    label: __('Default'),
    isDefault: true
  }, {
    name: 'content-background',
    label: __('Content with Background')
  }, {
    name: 'content-card',
    label: __('Content within a Card')
  }],
  attributes: {
    pictureUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: '.wp-block-svbk-hero__picture img'
    },
    pictureId: {
      type: 'number'
    },
    pictureSize: {
      type: 'string'
    },
    pictureStackedUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'srcset',
      selector: '.wp-block-svbk-hero__picture source'
    },
    pictureStackedId: {
      type: 'number'
    },
    pictureStackedSize: {
      type: 'string'
    },
    pictureAlt: {
      type: 'string',
      source: 'attribute',
      attribute: 'alt',
      selector: '.wp-block-svbk-hero__picture img'
    },
    pretitle: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-hero__pretitle'
    },
    title: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-hero__title'
    },
    titleLevel: {
      type: 'number',
      default: 1
    },
    subtitle: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-hero__subtitle'
    },
    text: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-hero__text'
    },
    primaryButtonUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'href',
      selector: '.wp-block-svbk-hero__button--primary a'
    },
    primaryButtonText: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-hero__button--primary a'
    },
    secondaryButtonUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'href',
      selector: '.wp-block-svbk-hero__button--secondary a'
    },
    secondaryButtonText: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-hero__button--secondary a'
    },
    footer: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-hero__footer'
    },
    align: {
      type: 'string'
    },
    bottomPadded: {
      type: 'boolean',
      default: false
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var pictureUrl = attributes.pictureUrl,
        pictureId = attributes.pictureId,
        pictureStackedUrl = attributes.pictureStackedUrl,
        pictureStackedId = attributes.pictureStackedId,
        pictureAlt = attributes.pictureAlt,
        pretitle = attributes.pretitle,
        title = attributes.title,
        titleLevel = attributes.titleLevel,
        subtitle = attributes.subtitle,
        text = attributes.text,
        align = attributes.align,
        primaryButtonUrl = attributes.primaryButtonUrl,
        primaryButtonText = attributes.primaryButtonText,
        secondaryButtonUrl = attributes.secondaryButtonUrl,
        secondaryButtonText = attributes.secondaryButtonText,
        footer = attributes.footer,
        bottomPadded = attributes.bottomPadded;
    var classNames = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classnames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "has-align-".concat(align), align), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-bottom-padding', bottomPadded), _classnames));
    var style = {};
    var titleTag = titleLevel ? 'h' + titleLevel : 'h1';
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classNames,
      style: style
    }, pictureUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("picture", {
      className: 'wp-block-svbk-hero__picture'
    }, pictureStackedUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("source", {
      media: "(max-width: 465px)",
      srcSet: pictureStackedUrl
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: pictureUrl,
      alt: pictureAlt,
      className: pictureId ? "wp-image-".concat(pictureId) : null
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'wp-block-svbk-hero__content'
    }, pretitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'div',
      className: 'wp-block-svbk-hero__pretitle',
      value: pretitle
    }), title && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: titleTag,
      className: 'wp-block-svbk-hero__title',
      value: title
    }), subtitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'div',
      className: 'wp-block-svbk-hero__subtitle',
      value: subtitle
    }), text && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'div',
      className: 'wp-block-svbk-hero__text',
      value: text
    }), primaryButtonText && primaryButtonUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'wp-block-svbk-hero__button wp-block-svbk-hero__button--primary wp-block-button '
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      className: 'wp-block-svbk-hero__link',
      href: primaryButtonUrl
    }, primaryButtonText)), secondaryButtonText && secondaryButtonUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'wp-block-svbk-hero__button wp-block-svbk-hero__button--secondary wp-block-button '
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      className: 'wp-block-svbk-hero__link',
      href: secondaryButtonUrl
    }, secondaryButtonText)), footer && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'div',
      className: 'wp-block-svbk-hero__footer',
      value: footer
    })));
  }
};

/***/ }),

/***/ "./blocks/icon-paragraph/edit.js":
/*!***************************************!*\
  !*** ./blocks/icon-paragraph/edit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icon_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon/editor */ "./blocks/icon/editor.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);









/* global wp */

/* global lodash */

/**
 * WordPress dependencies
 */
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    FontSizePicker = _wp$blockEditor.FontSizePicker,
    withFontSizes = _wp$blockEditor.withFontSizes,
    InspectorControls = _wp$blockEditor.InspectorControls;
var PanelBody = wp.components.PanelBody;
var compose = wp.compose.compose;



var IconParagraphEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(IconParagraphEdit, _Component);

  function IconParagraphEdit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, IconParagraphEdit);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(IconParagraphEdit).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(IconParagraphEdit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          className = _this$props.className,
          fontSize = _this$props.fontSize,
          setFontSize = _this$props.setFontSize;
      var align = attributes.align,
          content = attributes.content;
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_9___default()(className, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, fontSize.class, fontSize.class));
      var style = {
        textAlign: align,
        fontSize: fontSize.size ? fontSize.size + 'px' : undefined
      };
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: 'wp-block-svbk-icon-paragraph'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_icon_editor__WEBPACK_IMPORTED_MODULE_8__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, {
        className: 'wp-block-svbk-icon-paragraph__icon'
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RichText, {
        tagName: 'div',
        value: content,
        style: style,
        onChange: function onChange(value) {
          return setAttributes({
            content: value
          });
        },
        placeholder: __('Content..', '_svbk'),
        className: 'wp-block-svbk-icon-paragraph__content'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(AlignmentToolbar, {
        value: align,
        onChange: function onChange(nextAlign) {
          setAttributes({
            align: nextAlign
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelBody, {
        title: __('Text Settings'),
        className: "blocks-font-size"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(FontSizePicker, {
        value: fontSize.size,
        onChange: setFontSize
      })))));
    }
  }]);

  return IconParagraphEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withFontSizes('fontSize')])(IconParagraphEdit));

/***/ }),

/***/ "./blocks/icon-paragraph/index.js":
/*!****************************************!*\
  !*** ./blocks/icon-paragraph/index.js ***!
  \****************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/icon-paragraph/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);



/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    getFontSizeClass = _wp$blockEditor.getFontSizeClass;
var RawHTML = wp.element.RawHTML;
/**
 * Internal dependencies
 */


/**
 * External dependencies
 */


/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

var name = 'svbk/icon-paragraph';
var settings = {
  title: __('Icon Paragraph', '_svbk'),
  icon: 'analytics',
  category: 'common',
  keywords: [__('contact'), __('paragraph')],
  attributes: {
    icon: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-icon-paragraph__icon'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-icon-paragraph__content'
    },
    align: {
      type: 'string'
    },
    fontSize: {
      type: 'string'
    },
    customFontSize: {
      type: 'number'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var icon = attributes.icon,
        content = attributes.content,
        align = attributes.align,
        fontSize = attributes.fontSize,
        customFontSize = attributes.customFontSize;
    var fontSizeClass = getFontSizeClass(fontSize);
    var style = {
      textAlign: align,
      fontSize: fontSizeClass ? undefined : customFontSize
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('wp-block-svbk-icon-paragraph', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, fontSizeClass, fontSizeClass)),
      style: style
    }, icon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'wp-block-svbk-icon-paragraph__icon'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RawHTML, null, icon)), content && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'p',
      className: 'wp-block-svbk-icon-paragraph__content',
      value: content
    }));
  }
};

/***/ }),

/***/ "./blocks/icon/edit.js":
/*!*****************************!*\
  !*** ./blocks/icon/edit.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor */ "./blocks/icon/editor.js");








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings,
    withColors = _wp$blockEditor.withColors;


var IconEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(IconEdit, _Component);

  function IconEdit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, IconEdit);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(IconEdit).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(IconEdit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          setTextColor = _this$props.setTextColor,
          textColor = _this$props.textColor;
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_7___default()('wp-block-svbk-icon', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, textColor.class, textColor.class));
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classNames
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_editor__WEBPACK_IMPORTED_MODULE_8__["default"], this.props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelColorSettings, {
        title: __('Icon Color Settings'),
        initialOpen: false,
        colorSettings: [{
          value: textColor.color,
          onChange: setTextColor,
          label: __('Text Color')
        }]
      })));
    }
  }]);

  return IconEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withColors('backgroundColor', {
  textColor: 'color'
})(IconEdit));

/***/ }),

/***/ "./blocks/icon/editor.js":
/*!*******************************!*\
  !*** ./blocks/icon/editor.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);








/* global wp */

/* global lodash */
var __ = wp.i18n.__;
var Component = wp.element.Component;
var PlainText = wp.blockEditor.PlainText;
var _wp$components = wp.components,
    Disabled = _wp$components.Disabled,
    SandBox = _wp$components.SandBox;
/**
 * External dependencies
 */



var IconEditor =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(IconEditor, _Component);

  function IconEditor() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, IconEditor);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(IconEditor).apply(this, arguments));
    _this.state = {
      isPreview: true
    };
    _this.switchToPreview = _this.switchToPreview.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.switchToEditor = _this.switchToEditor.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(IconEditor, [{
    key: "switchToPreview",
    value: function switchToPreview() {
      this.setState({
        isPreview: true
      });
    }
  }, {
    key: "switchToEditor",
    value: function switchToEditor() {
      this.setState({
        isPreview: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          isSelected = _this$props.isSelected,
          setAttributes = _this$props.setAttributes,
          className = _this$props.className;
      var icon = attributes.icon;
      var isPreview = this.state.isPreview;
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, 'icon-editor');
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classNames
      }, isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "components-toolbar icon-editor__toolbar"
      }, icon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("button", {
        className: "components-tab-button icon-editor__toolbar-button ".concat(isPreview ? 'is-active' : ''),
        onClick: this.switchToPreview
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", null, __('View'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("button", {
        className: "components-tab-button icon-editor__toolbar-button ".concat(!isPreview ? 'is-active' : ''),
        onClick: this.switchToEditor
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", null, __('Code')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Disabled.Consumer, null, function (isDisabled) {
        return isPreview || isDisabled ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          className: 'icon-editor__icon'
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(SandBox, {
          html: icon
        })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          className: 'icon-editor__editor'
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("h3", null, 'SVG Code'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PlainText, {
          value: icon,
          onChange: function onChange(code) {
            return setAttributes({
              icon: code
            });
          },
          placeholder: __('Paste SVG…'),
          "aria-label": __('SVG')
        }));
      }));
    }
  }]);

  return IconEditor;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (IconEditor);

/***/ }),

/***/ "./blocks/icon/index.js":
/*!******************************!*\
  !*** ./blocks/icon/index.js ***!
  \******************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/icon/edit.js");


/**
 * WordPress dependencies
 */
var RawHTML = wp.element.RawHTML;
var __ = wp.i18n.__;
var getColorClassName = wp.blockEditor.getColorClassName;
/**
 * Internal dependencies
 */


var name = 'svbk/icon';
var settings = {
  title: __('Icon (SVG)'),
  description: __('Insert an SVG Icon'),
  icon: 'star-filled',
  category: 'common',
  keywords: [__('svg'), __('icon')],
  supports: {
    html: false
  },
  attributes: {
    icon: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-icon'
    },
    textColor: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var textColor = attributes.textColor;
    var textClass = getColorClassName('color', textColor);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: textClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RawHTML, null, attributes.icon));
  }
};

/***/ }),

/***/ "./blocks/iter/edit.js":
/*!*****************************!*\
  !*** ./blocks/iter/edit.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _icon_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icon/editor */ "./blocks/icon/editor.js");









/* global wp */

/* global lodash */
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    PlainText = _wp$blockEditor.PlainText;
var _wp$components = wp.components,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button;


var IterEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(IterEdit, _Component);

  function IterEdit(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, IterEdit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(IterEdit).apply(this, arguments));
    _this.updateStep = _this.updateStep.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.addStep = _this.addStep.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.removeStep = _this.removeStep.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.cloneStep = _this.cloneStep.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(IterEdit, [{
    key: "addStep",
    value: function addStep() {
      var _this$props = this.props,
          steps = _this$props.attributes.steps,
          setAttributes = _this$props.setAttributes;
      var updatedSteps = steps.slice(0);
      updatedSteps.push({
        icon: '',
        name: '',
        content: ''
      });
      setAttributes({
        steps: updatedSteps
      });
    }
  }, {
    key: "removeStep",
    value: function removeStep(index) {
      var _this$props2 = this.props,
          steps = _this$props2.attributes.steps,
          setAttributes = _this$props2.setAttributes;
      steps.splice(index, 1);
      setAttributes({
        steps: steps.slice(0)
      });
    }
  }, {
    key: "cloneStep",
    value: function cloneStep(index) {
      var _this$props3 = this.props,
          steps = _this$props3.attributes.steps,
          setAttributes = _this$props3.setAttributes;
      steps.splice(index, 0, steps[index]);
      setAttributes({
        steps: steps.slice(0)
      });
    }
  }, {
    key: "updateStep",
    value: function updateStep(index, update) {
      var _this$props4 = this.props,
          steps = _this$props4.attributes.steps,
          setAttributes = _this$props4.setAttributes;
      var updatedSteps = steps.slice(0);
      var updatedStep = Object.assign({}, steps[index], update);
      updatedSteps[index] = updatedStep;
      setAttributes({
        steps: updatedSteps
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          attributes = _this$props5.attributes,
          className = _this$props5.className,
          isSelected = _this$props5.isSelected;
      var steps = attributes.steps;
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_8___default()(className, {
        'is-selected': isSelected
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: classNames
      }, steps.map(function (step, index) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
          className: 'wp-block-svbk-iter__step',
          key: index
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_icon_editor__WEBPACK_IMPORTED_MODULE_9__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this2.props, {
          attributes: step,
          setAttributes: function setAttributes(update) {
            _this2.updateStep(index, update);
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
          className: 'wp-block-svbk-iter__wrapper'
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PlainText, {
          value: step.name,
          onChange: function onChange(value) {
            return _this2.updateStep(index, {
              name: value
            });
          },
          placeholder: __('Step ' + (index + 1) + '..', '_svbk'),
          className: 'wp-block-svbk-iter__name'
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PlainText, {
          value: step.title,
          onChange: function onChange(value) {
            return _this2.updateStep(index, {
              title: value
            });
          },
          placeholder: __('Title..', '_svbk'),
          className: 'wp-block-svbk-iter__title'
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RichText, {
          tagName: 'div',
          value: step.content,
          onChange: function onChange(value) {
            return _this2.updateStep(index, {
              content: value
            });
          },
          placeholder: __('Content..', '_svbk'),
          className: 'wp-block-svbk-bullet__content'
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ButtonGroup, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Button, {
          isDestructive: true,
          className: 'wp-block-svbk-iter__remove',
          onClick: function onClick() {
            _this2.removeStep(index);
          }
        }, __('Remove Step', '_svbk')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Button, {
          isDefault: true,
          className: 'wp-block-svbk-iter__clone',
          onClick: function onClick() {
            _this2.cloneStep(index);
          }
        }, __('Clone Step', '_svbk'))));
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Button, {
        isPrimary: true,
        className: 'wp-block-svbk-iter__add',
        onClick: this.addStep
      }, __('Add Step', '_svbk')));
    }
  }]);

  return IterEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (IterEdit);

/***/ }),

/***/ "./blocks/iter/index.js":
/*!******************************!*\
  !*** ./blocks/iter/index.js ***!
  \******************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./blocks/iter/edit.js");


var _name, _title;



/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var RichText = wp.blockEditor.RichText;
var RawHTML = wp.element.RawHTML;
/**
 * Internal dependencies
 */


/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

var name = 'svbk/iter';
var settings = {
  title: __('Iter', '_svbk'),
  icon: 'editor-ul',
  category: 'common',
  keywords: [__('iter', '_svbk'), __('steps', '_svbk')],
  attributes: {
    steps: {
      type: "array",
      default: [{
        icon: '',
        name: '',
        title: '',
        content: ''
      }],
      source: "query",
      selector: "div.wp-block-svbk-iter .wp-block-svbk-iter__step",
      query: {
        icon: {
          type: 'string',
          source: 'html',
          selector: '.wp-block-svbk-iter__step-icon'
        },
        name: (_name = {
          source: 'string'
        }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_name, "source", 'text'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_name, "selector", '.wp-block-svbk-iter__step-name'), _name),
        title: (_title = {
          source: 'string'
        }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_title, "source", 'text'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_title, "selector", '.wp-block-svbk-iter__step-title'), _title),
        content: {
          type: 'string',
          source: 'html',
          selector: '.wp-block-svbk-iter__step-content'
        }
      }
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var steps = attributes.steps;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, steps.map(function (step, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: 'wp-block-svbk-iter__step',
        key: index
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: 'wp-block-svbk-iter__step-icon'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RawHTML, null, step.icon)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
        className: 'wp-block-svbk-iter__step-name'
      }, step.name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", {
        className: 'wp-block-svbk-iter__step-title'
      }, step.title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
        tagName: 'span',
        className: 'wp-block-svbk-iter__step-content',
        value: step.content
      }));
    }));
  }
};

/***/ }),

/***/ "./blocks/map/edit.js":
/*!****************************!*\
  !*** ./blocks/map/edit.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-google-maps/api */ "./node_modules/@react-google-maps/api/dist/reactgooglemapsapi.esm.js");
/* harmony import */ var _common_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/image */ "./blocks/common/image.js");








/* global wp */

/* global lodash */
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
/**
 * External dependencies
 */



var _lodash = lodash,
    pick = _lodash.pick,
    mapKeys = _lodash.mapKeys,
    capitalize = _lodash.capitalize;
/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup;
var createRef = wp.element.createRef;


var MapEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(MapEdit, _Component);

  function MapEdit(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MapEdit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(MapEdit).apply(this, arguments));
    _this.state = {
      editingMarker: false
    };
    _this.mapRef = createRef(); // this.autocomplete = null
    // this.onAutocompleteLoad = this.onAutocompleteLoad.bind(this);
    // this.onPlaceChanged = this.onPlaceChanged.bind(this);

    _this.onCenterChange = _this.onCenterChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onZoomChange = _this.onZoomChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onAddMarkerClick = _this.onAddMarkerClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onMapClick = _this.onMapClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  } // onAutocompleteLoad (autocomplete) {
  // 	console.log('autocomplete: ', autocomplete)
  // 	this.autocomplete = autocomplete
  // }
  // onPlaceChanged () {
  // 	if (this.autocomplete !== null) {
  // 	  console.log(this.autocomplete.getPlace())
  // 	} else {
  // 	  console.log('Autocomplete is not loaded yet!')
  // 	}
  // }
  // markerUpdate ( update ) {
  // 	const localUpdate = mapKeys( pick( update, [ 'id', 'url' ] ) , function(value, key) {
  // 		// Convert url to pictureUrl, id to pictureId, etc
  // 		return 'marker' + capitalize(key);
  // 	});
  // 	setAttributes( localUpdate );
  // }


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MapEdit, [{
    key: "onCenterChange",
    value: function onCenterChange() {
      var setAttributes = this.props.setAttributes;
      var center = this.getMapCenter();

      if (center) {
        setAttributes({
          centerLat: center.lat,
          centerLng: center.lng
        });
      }
    }
  }, {
    key: "getMapCenter",
    value: function getMapCenter() {
      var mapRef = this.mapRef.current;
      if (!mapRef) return;
      return {
        lat: mapRef.state.map.center.lat().toFixed(7),
        lng: mapRef.state.map.center.lng().toFixed(7)
      };
    }
  }, {
    key: "onZoomChange",
    value: function onZoomChange() {
      var setAttributes = this.props.setAttributes;
      var mapRef = this.mapRef.current;

      if (mapRef) {
        setAttributes({
          zoom: mapRef.state.map.zoom
        });
      }
    }
  }, {
    key: "onMapClick",
    value: function onMapClick() {
      this.setState({
        editingMarker: false
      });
    }
  }, {
    key: "onAddMarkerClick",
    value: function onAddMarkerClick() {
      var mapCenter = this.getMapCenter();
      this.addMarker(mapCenter);
    }
  }, {
    key: "addMarker",
    value: function addMarker(marker) {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var markers = attributes.markers;

      if (!markers) {
        markers = [];
      }

      markers.push(marker);
      setAttributes({
        markers: markers
      });
      this.forceUpdate();
    }
  }, {
    key: "removeMarker",
    value: function removeMarker(index) {
      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes;
      var markers = attributes.markers;

      if (!markers) {
        return;
      }

      markers.splice(index, 1);
      setAttributes({
        markers: markers.slice(0)
      });
    }
  }, {
    key: "onEditMarker",
    value: function onEditMarker(index) {
      this.setState({
        editingMarker: index
      });
    }
  }, {
    key: "updateMarker",
    value: function updateMarker(index, markerUpdate) {
      var _this$props3 = this.props,
          attributes = _this$props3.attributes,
          setAttributes = _this$props3.setAttributes;
      var markers = attributes.markers;
      Object.assign(markers[index], markerUpdate);
      setAttributes({
        markers: markers
      });
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          attributes = _this$props4.attributes,
          setAttributes = _this$props4.setAttributes,
          className = _this$props4.className,
          isSelected = _this$props4.isSelected;
      var centerLat = attributes.centerLat,
          centerLng = attributes.centerLng,
          markers = attributes.markers,
          zoom = attributes.zoom,
          type = attributes.type;
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, {
        'is-selected': isSelected
      });
      var editableMarker = this.state.editingMarker !== false ? markers[this.state.editingMarker] : false;

      var markerIconUpdate = function markerIconUpdate(index, update) {
        var localUpdate = mapKeys(pick(update, ['id', 'url']), function (value, key) {
          // Convert url to pictureUrl, id to pictureId, etc
          return 'icon' + capitalize(key);
        });

        _this2.updateMarker(index, localUpdate);
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_8__["GoogleMap"], {
        zoom: Number(zoom),
        center: {
          lat: Number(centerLat),
          lng: Number(centerLng)
        },
        onCenterChanged: this.onCenterChange,
        onZoomChanged: this.onZoomChange,
        mapTypeId: type ? type : 'roadmap',
        mapContainerStyle: {
          height: "400px",
          width: "600px"
        },
        options: {
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
          scrollwheel: false
        },
        onClick: this.onMapClick,
        ref: this.mapRef
      }, markers && markers.map(function (marker, index) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_8__["Marker"], {
          key: index,
          position: {
            lat: Number(marker.lat),
            lng: Number(marker.lng)
          },
          onDragEnd: function onDragEnd(event) {
            _this2.updateMarker(index, {
              lat: event.latLng.lat(),
              lng: event.latLng.lng()
            });
          },
          draggable: true,
          icon: marker.iconUrl,
          opacity: !editableMarker || editableMarker == marker ? 1 : 0.5,
          onClick: function onClick() {
            _this2.onEditMarker(index);
          }
        });
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ButtonGroup, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Button, {
        isPrimary: true,
        className: 'wp-block-svbk-map__add-marker',
        onClick: this.onAddMarkerClick
      }, __('Add new Marker', '_svbk'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelBody, {
        title: __('Map Settings', '_svbk')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(TextControl, {
        label: __('Latitude', '_svbk'),
        value: centerLat,
        onChange: function onChange(value) {
          return setAttributes({
            centerLat: value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(TextControl, {
        label: __('Longitude', '_svbk'),
        value: centerLng,
        onChange: function onChange(value) {
          return setAttributes({
            centerLng: value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RangeControl, {
        label: __('Zoom', '_svbk'),
        value: zoom,
        onChange: function onChange(zoom) {
          return setAttributes({
            zoom: Number(zoom)
          });
        },
        min: 1,
        max: 22
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(SelectControl, {
        label: __('Type', '_svbk'),
        value: type,
        selected: type,
        options: [{
          label: __('Roadmap', '_svbk'),
          value: 'roadmap'
        }, {
          label: __('Satellite', '_svbk'),
          value: 'satellite'
        }, {
          label: __('Hybrid', '_svbk'),
          value: 'hybrid'
        }, {
          label: __('Terrain', '_svbk'),
          value: 'terrain'
        }],
        onChange: function onChange(value) {
          return setAttributes({
            type: value
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelBody, {
        title: __('Marker Settings', '_svbk')
      }, editableMarker !== false ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(TextControl, {
        label: __('Latitude', '_svbk'),
        value: editableMarker.lat,
        onChange: function onChange(value) {
          return _this2.updateMarker(_this2.state.editingMarker, {
            lat: value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(TextControl, {
        label: __('Longitude', '_svbk'),
        value: editableMarker.lng,
        onChange: function onChange(value) {
          return _this2.updateMarker(_this2.state.editingMarker, {
            lng: value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_common_image__WEBPACK_IMPORTED_MODULE_9__["default"], {
        setAttributes: function setAttributes(update) {
          markerIconUpdate(_this2.state.editingMarker, update);
        },
        url: editableMarker.iconUrl
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ButtonGroup, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Button, {
        isDefault: true,
        isDestructive: true,
        className: 'wp-block-svbk-map__remove-marker',
        onClick: function onClick() {
          _this2.setState({
            editingMarker: false
          });

          _this2.removeMarker(_this2.state.editingMarker);
        }
      }, __('Remove Marker', '_svbk')))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", null, __('Please click on a marker to edit or', '_svbk')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Button, {
        isPrimary: true,
        className: 'wp-block-svbk-map__add-marker',
        onClick: this.onAddMarkerClick
      }, __('Add new Marker', '_svbk'))))));
    }
  }]);

  return MapEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (MapEdit);

/***/ }),

/***/ "./blocks/map/index.js":
/*!*****************************!*\
  !*** ./blocks/map/index.js ***!
  \*****************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/map/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

/**
 * Internal dependencies
 */

var name = 'svbk/map';
var settings = {
  title: __('Map', '_svbk'),
  icon: 'location-alt',
  category: 'common',
  keywords: [__('map'), __('google map'), __('location')],
  attributes: {
    centerLat: {
      type: 'string',
      source: 'attribute',
      attribute: 'data-center-lat',
      selector: '.wp-block-svbk-map__map',
      default: 38
    },
    centerLng: {
      type: 'string',
      source: 'attribute',
      attribute: 'data-center-lng',
      selector: '.wp-block-svbk-map__map',
      default: -41
    },
    zoom: {
      type: 'string',
      source: 'attribute',
      attribute: 'data-zoom',
      selector: '.wp-block-svbk-map__map',
      default: 10
    },
    type: {
      type: 'string',
      source: 'attribute',
      attribute: 'data-type',
      selector: '.wp-block-svbk-map__map',
      default: 'roadmap'
    },
    markers: {
      type: 'array',
      source: 'query',
      selector: '.wp-block-svbk-map__marker',
      default: [],
      query: {
        lat: {
          type: 'string',
          source: 'attribute',
          attribute: 'data-lat'
        },
        lng: {
          type: 'string',
          source: 'attribute',
          attribute: 'data-lng'
        },
        iconUrl: {
          type: 'string',
          source: 'attribute',
          attribute: 'data-icon-url'
        },
        iconId: {
          type: 'number',
          source: 'attribute',
          attribute: 'data-icon-id'
        }
      }
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function save(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className;
    var centerLat = attributes.centerLat,
        centerLng = attributes.centerLng,
        markers = attributes.markers,
        zoom = attributes.zoom,
        type = attributes.type;
    var classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: classNames
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'wp-block-svbk-map__map',
      "data-center-lat": centerLat,
      "data-center-lng": centerLng,
      "data-zoom": zoom,
      "data-type": type
    }, 'Map loading...'), markers.map(function (marker, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        key: index,
        className: 'wp-block-svbk-map__marker',
        "data-lng": marker.lng,
        "data-lat": marker.lat,
        "data-icon-url": marker.iconUrl,
        "data-icon-id": marker.iconId
      });
    }));
  }
};

/***/ }),

/***/ "./blocks/product/addtocart.js":
/*!*************************************!*\
  !*** ./blocks/product/addtocart.js ***!
  \*************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl;
var InspectorControls = wp.blockEditor.InspectorControls;
/**
 * Internal dependencies
 */

var name = 'svbk/addtocart';
var settings = {
  title: __('Product Add To Cart', '_svbk'),
  description: __('Display the product add to cart button', '_svbk'),
  icon: 'products',
  category: 'widgets',
  keywords: [__('add to cart', '_svbk'), __('cart', '_svbk')],
  supports: {
    html: false
  },
  attributes: {
    product_id: {
      type: 'number'
    },
    quantity: {
      type: 'number',
      default: 1
    },
    sku: {
      type: 'string'
    },
    show_price: {
      type: 'boolean',
      default: false
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        className = _ref.className;
    var product_id = attributes.product_id,
        quantity = attributes.quantity,
        sku = attributes.sku,
        show_price = attributes.show_price;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Rating', '_svbk')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: __('Product ID', '_svbk'),
      value: product_id,
      onChange: function onChange(value) {
        setAttributes({
          product_id: Number(value)
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: __('SKU', '_svbk'),
      value: sku,
      onChange: function onChange(value) {
        setAttributes({
          sku: Number(value)
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Quantity', '_svbk'),
      value: quantity,
      onChange: function onChange(value) {
        setAttributes({
          quantity: Number(value)
        });
      },
      min: 1,
      max: 10
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Show price', '_svbk'),
      checked: show_price,
      onChange: function onChange(value) {
        setAttributes({
          show_price: Boolean(value)
        });
      }
    }))), show_price ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'price'
    }, "9999 \u20AC") : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      className: className
    }, __('Add To Cart', '_svbk') + ' (' + quantity + ' ' + __('Products', '_svbk') + ')'));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    return null;
  }
};

/***/ }),

/***/ "./blocks/product/price.js":
/*!*********************************!*\
  !*** ./blocks/product/price.js ***!
  \*********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
/**
 * Internal dependencies
 */

var name = 'svbk/price';
var settings = {
  title: __('Product Price', '_svbk'),
  description: __('Display the price of a product', '_svbk'),
  icon: 'tag',
  category: 'widgets',
  keywords: [__('price', '_svbk')],
  supports: {
    html: false
  },
  attributes: {
    product_id: {
      type: 'number'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        className = _ref.className;
    var product_id = attributes.product_id;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, '9999 €'));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    return null;
  }
};

/***/ }),

/***/ "./blocks/product/rating.js":
/*!**********************************!*\
  !*** ./blocks/product/rating.js ***!
  \**********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    Dashicon = _wp$components.Dashicon;
var InspectorControls = wp.blockEditor.InspectorControls;
/**
 * Internal dependencies
 */

var name = 'svbk/product-rating';
var settings = {
  title: __('Product Rating', '_svbk'),
  description: __('Display the rating of a product', '_svbk'),
  icon: 'star-half',
  category: 'widgets',
  keywords: [__('rating', '_svbk'), __('product', '_svbk')],
  supports: {
    html: false
  },
  attributes: {
    product_id: {
      type: 'number'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        className = _ref.className;
    var product_id = attributes.product_id;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Settings', '_svbk')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: __('Product ID', '_svbk'),
      value: product_id,
      onChange: function onChange(value) {
        setAttributes({
          product_id: Number(value)
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "star-half"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, 'Product Rating'));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    return null;
  }
};

/***/ }),

/***/ "./blocks/product/stock.js":
/*!*********************************!*\
  !*** ./blocks/product/stock.js ***!
  \*********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl;
var InspectorControls = wp.blockEditor.InspectorControls;
/**
 * Internal dependencies
 */

var name = 'svbk/stock';
var settings = {
  title: __('Product Stock', '_svbk'),
  description: __('Display the remaining stock product', '_svbk'),
  icon: 'sort',
  category: 'widgets',
  keywords: [__('stock', 'product')],
  supports: {
    html: false
  },
  attributes: {
    product_id: {
      type: 'number'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        className = _ref.className;
    var product_id = attributes.product_id;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Product Availability', '_svbk')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: __('Product ID', '_svbk'),
      value: product_id,
      onChange: function onChange(value) {
        setAttributes({
          product_id: Number(value)
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, 'XX stock items'));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    return null;
  }
};

/***/ }),

/***/ "./blocks/profile/edit.js":
/*!********************************!*\
  !*** ./blocks/profile/edit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/image */ "./blocks/common/image.js");








/* global wp */

/* global lodash */
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
/**
 * External dependencies
 */

var _lodash = lodash,
    pick = _lodash.pick,
    mapKeys = _lodash.mapKeys,
    capitalize = _lodash.capitalize;

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    ContrastChecker = _wp$blockEditor.ContrastChecker,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    withColors = _wp$blockEditor.withColors;
var _wp$components = wp.components,
    Dashicon = _wp$components.Dashicon,
    IconButton = _wp$components.IconButton;
var compose = wp.compose.compose;
/**
 * Internal dependencies
 */



var ProfileEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ProfileEdit, _Component);

  function ProfileEdit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ProfileEdit);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ProfileEdit).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ProfileEdit, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          className = _this$props.className,
          isSelected = _this$props.isSelected,
          backgroundColor = _this$props.backgroundColor,
          textColor = _this$props.textColor,
          setBackgroundColor = _this$props.setBackgroundColor,
          setTextColor = _this$props.setTextColor;
      var align = attributes.align,
          pictureUrl = attributes.pictureUrl,
          pictureAlt = attributes.pictureAlt,
          pictureId = attributes.pictureId,
          pictureSize = attributes.pictureSize,
          name = attributes.name,
          role = attributes.role,
          content = attributes.content,
          buttonUrl = attributes.buttonUrl,
          buttonText = attributes.buttonText;
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, (_classnames = {
        'is-selected': isSelected
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundColor.class, backgroundColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, textColor.class, textColor.class), _classnames));
      var style = {
        backgroundColor: backgroundColor.color,
        color: textColor.color,
        textAlign: align
      };
      var titleTag = 'h3';

      var pictureUpdate = function pictureUpdate(update) {
        var localUpdate = mapKeys(pick(update, ['id', 'url', 'alt', 'size']), function (value, key) {
          // Convert url to pictureUrl, id to pictureId, etc
          return 'picture' + capitalize(key);
        });
        setAttributes(localUpdate);
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classNames
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_common_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        setAttributes: pictureUpdate,
        url: pictureUrl,
        id: pictureId,
        alt: pictureAlt,
        size: pictureSize
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        style: style
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        tagName: titleTag,
        value: name,
        onChange: function onChange(value) {
          return setAttributes({
            name: value
          });
        },
        placeholder: __('This is my title..', '_svbk'),
        className: 'wp-block-svbk-profile__name'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        tagName: 'div',
        value: role,
        onChange: function onChange(value) {
          return setAttributes({
            role: value
          });
        },
        placeholder: __('Role..', '_svbk'),
        className: 'wp-block-svbk-profile__role'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        tagName: 'div',
        value: content,
        onChange: function onChange(value) {
          return setAttributes({
            content: value
          });
        },
        placeholder: __('Content..', '_svbk'),
        className: 'wp-block-svbk-profile__content'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        placeholder: __('Button text…'),
        value: buttonText,
        onChange: function onChange(value) {
          return setAttributes({
            buttonText: value
          });
        },
        formattingControls: ['bold', 'italic', 'strikethrough'],
        className: 'wp-block-svbk-profile__button block-library-button'
      }), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("form", {
        className: "block-library-button__inline-link",
        onSubmit: function onSubmit(event) {
          return event.preventDefault();
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Dashicon, {
        icon: "admin-links"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(URLInput, {
        value: buttonUrl,
        onChange: function onChange(value) {
          return setAttributes({
            buttonUrl: value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(IconButton, {
        icon: "editor-break",
        label: __('Apply'),
        type: "submit"
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(AlignmentToolbar, {
        value: align,
        onChange: function onChange(nextAlign) {
          setAttributes({
            align: nextAlign
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelColorSettings, {
        title: __('Color Settings'),
        initialOpen: false,
        colorSettings: [{
          value: backgroundColor.color,
          onChange: setBackgroundColor,
          label: __('Background Color')
        }, {
          value: textColor.color,
          onChange: setTextColor,
          label: __('Text Color')
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ContrastChecker, {
        textColor: textColor.color,
        backgroundColor: backgroundColor.color
      })));
    }
  }]);

  return ProfileEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withColors('backgroundColor', {
  textColor: 'color'
})])(ProfileEdit));

/***/ }),

/***/ "./blocks/profile/index.js":
/*!*********************************!*\
  !*** ./blocks/profile/index.js ***!
  \*********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/profile/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);



/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a card
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    getColorClassName = _wp$blockEditor.getColorClassName;
/**
 * Internal dependencies
 */

/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

var name = 'svbk/profile';
var settings = {
  title: __('Profile', '_svbk'),
  icon: 'id',
  category: 'common',
  keywords: [__('profile'), __('team'), __('member')],
  styles: [// Mark style as default.
  {
    name: 'default',
    label: __('Default'),
    isDefault: true
  }, {
    name: 'featured',
    label: __('Featured')
  }],
  attributes: {
    pictureUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: '.wp-block-svbk-profile__picture img'
    },
    pictureAlt: {
      type: 'string',
      source: 'attribute',
      attribute: 'alt',
      selector: '.wp-block-svbk-profile__picture img'
    },
    pictureId: {
      type: 'number'
    },
    pictureSize: {
      type: 'string'
    },
    name: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-profile__name'
    },
    role: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-profile__role'
    },
    content: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-profile__content'
    },
    buttonUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'href',
      selector: '.wp-block-svbk-profile__link'
    },
    buttonText: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-profile__link'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    align: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var pictureUrl = attributes.pictureUrl,
        pictureAlt = attributes.pictureAlt,
        pictureId = attributes.pictureId,
        name = attributes.name,
        role = attributes.role,
        content = attributes.content,
        buttonUrl = attributes.buttonUrl,
        buttonText = attributes.buttonText,
        backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor,
        align = attributes.align;
    var titleTag = 'h3';
    var backgroundClass = getColorClassName('background-color', backgroundColor);
    var textClass = getColorClassName('color', textColor);
    var classNames = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classnames = {
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, textClass, textClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundClass, backgroundClass), _classnames));
    var style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      textAlign: align
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classNames,
      style: style
    }, pictureUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
      className: 'wp-block-svbk-profile__picture'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: pictureUrl,
      alt: pictureAlt,
      className: pictureId ? "wp-image-".concat(pictureId) : null
    })), name && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: titleTag,
      className: 'wp-block-svbk-profile__name',
      value: name
    }), role && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
      className: 'wp-block-svbk-profile__role'
    }, role), content && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
      className: 'wp-block-svbk-profile__content'
    }, content), buttonText && buttonUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'wp-block-button wp-block-svbk-profile__button'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      className: 'wp-block-button__link wp-block-svbk-profile__link',
      href: buttonUrl
    }, buttonText, " ")));
  }
};

/***/ }),

/***/ "./blocks/publication/edit.js":
/*!************************************!*\
  !*** ./blocks/publication/edit.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/image */ "./blocks/common/image.js");







/* global wp */

/* global lodash */
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
/**
 * External dependencies
 */

var _lodash = lodash,
    pick = _lodash.pick,
    mapKeys = _lodash.mapKeys,
    capitalize = _lodash.capitalize;

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    PlainText = _wp$blockEditor.PlainText,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl;
/**
 * Internal dependencies
 */



var PublicationEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PublicationEdit, _Component);

  function PublicationEdit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PublicationEdit);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PublicationEdit).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PublicationEdit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          className = _this$props.className,
          isSelected = _this$props.isSelected;
      var pictureUrl = attributes.pictureUrl,
          pictureAlt = attributes.pictureAlt,
          pictureId = attributes.pictureId,
          pictureSize = attributes.pictureSize,
          title = attributes.title,
          author = attributes.author,
          meta = attributes.meta,
          url = attributes.url;
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, {
        'is-selected': isSelected
      });

      var pictureUpdate = function pictureUpdate(update) {
        var localUpdate = mapKeys(pick(update, ['id', 'url', 'alt', 'size']), function (value, key) {
          // Convert url to pictureUrl, id to pictureId, etc
          return 'picture' + capitalize(key);
        });
        setAttributes(localUpdate);
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: classNames
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_common_image__WEBPACK_IMPORTED_MODULE_7__["default"], {
        setAttributes: pictureUpdate,
        url: pictureUrl,
        id: pictureId,
        alt: pictureAlt,
        size: pictureSize,
        isMain: true
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: 'wp-block-svbk-publication__content'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PlainText, {
        value: author,
        onChange: function onChange(value) {
          return setAttributes({
            author: value
          });
        },
        placeholder: __('Author Name..', '_svbk'),
        className: 'wp-block-svbk-publication__author'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RichText, {
        tagName: 'div',
        value: title,
        onChange: function onChange(value) {
          return setAttributes({
            title: value
          });
        },
        placeholder: __('This is my title..', '_svbk'),
        className: 'wp-block-svbk-publication__title'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RichText, {
        tagName: 'div',
        value: meta,
        onChange: function onChange(value) {
          return setAttributes({
            meta: value
          });
        },
        placeholder: __('Publisher, Year, ..', '_svbk'),
        className: 'wp-block-svbk-publication__meta'
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: __('Publication Settings', '_svbk')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: 'URL',
        value: url,
        onChange: function onChange(value) {
          return setAttributes({
            url: value
          });
        }
      }))));
    }
  }]);

  return PublicationEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (PublicationEdit);

/***/ }),

/***/ "./blocks/publication/index.js":
/*!*************************************!*\
  !*** ./blocks/publication/index.js ***!
  \*************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/publication/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a card
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var Fragment = wp.element.Fragment;
var __ = wp.i18n.__;
var RichText = wp.blockEditor.RichText;
/**
 * Internal dependencies
 */

/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

var name = 'svbk/publication';
var settings = {
  title: __('Publication', '_svbk'),
  icon: 'book-alt',
  category: 'widgets',
  keywords: [__('book', '_svbk'), __('publication', '_svbk')],
  attributes: {
    pictureUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: '.wp-block-svbk-publication__picture img'
    },
    pictureId: {
      type: 'number'
    },
    pictureAlt: {
      type: 'string',
      source: 'attribute',
      attribute: 'alt',
      selector: '.wp-block-svbk-publication__picture img'
    },
    pictureSize: {
      type: 'string'
    },
    author: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-publication__author'
    },
    title: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-publication__title'
    },
    meta: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-publication__meta'
    },
    url: {
      type: 'string',
      source: 'attribute',
      attribute: 'href',
      selector: '.wp-block-svbk-publication__link'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var pictureUrl = attributes.pictureUrl,
        pictureAlt = attributes.pictureAlt,
        pictureId = attributes.pictureId,
        title = attributes.title,
        author = attributes.author,
        meta = attributes.meta,
        url = attributes.url;
    var blockContent = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, pictureUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: 'wp-block-svbk-publication__picture'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: pictureUrl,
      alt: pictureAlt,
      className: pictureId ? "wp-image-".concat(pictureId) : null
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'wp-block-svbk-publication__content'
    }, author && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: 'wp-block-svbk-publication__author'
    }, author), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: 'div',
      className: 'wp-block-svbk-publication__title',
      value: title
    }), meta && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: 'p',
      className: 'wp-block-svbk-publication__meta',
      value: meta
    })));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("aside", null, url ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: url,
      rel: "external noopener noreferrer",
      target: "_blank",
      className: "wp-block-svbk-publication__link"
    }, blockContent) : blockContent);
  }
};

/***/ }),

/***/ "./blocks/stats/edit.js":
/*!******************************!*\
  !*** ./blocks/stats/edit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icon_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon/editor */ "./blocks/icon/editor.js");








/* global wp */

/* global lodash */
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings,
    withColors = _wp$blockEditor.withColors;
var compose = wp.compose.compose;


var StatsEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(StatsEdit, _Component);

  function StatsEdit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, StatsEdit);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(StatsEdit).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(StatsEdit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          className = _this$props.className,
          isSelected = _this$props.isSelected,
          textColor = _this$props.textColor,
          setTextColor = _this$props.setTextColor;
      var align = attributes.align,
          metric = attributes.metric,
          description = attributes.description;
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
        'is-selected': isSelected
      }, textColor.class, textColor.class));
      var style = {
        color: textColor.color,
        textAlign: align
      };
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classNames
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_icon_editor__WEBPACK_IMPORTED_MODULE_8__["default"], this.props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        style: style
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        tagName: 'div',
        value: metric,
        onChange: function onChange(value) {
          return setAttributes({
            metric: value
          });
        },
        placeholder: __('40M subscribers..', '_svbk'),
        className: 'wp-block-svbk-stats__metric'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        tagName: 'div',
        value: description,
        onChange: function onChange(value) {
          return setAttributes({
            description: value
          });
        },
        placeholder: __('Description..', '_svbk'),
        className: 'wp-block-svbk-stats__description'
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelColorSettings, {
        title: __('Color Settings'),
        initialOpen: false,
        colorSettings: [{
          value: textColor.color,
          onChange: setTextColor,
          label: __('Text Color')
        }]
      })));
    }
  }]);

  return StatsEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withColors('backgroundColor', {
  textColor: 'color'
})])(StatsEdit));

/***/ }),

/***/ "./blocks/stats/index.js":
/*!*******************************!*\
  !*** ./blocks/stats/index.js ***!
  \*******************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/stats/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);



/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var getColorClassName = wp.blockEditor.getColorClassName;
var RawHTML = wp.element.RawHTML;
/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

/**
 * Internal dependencies
 */

var name = 'svbk/stats';
var settings = {
  title: __('Stats', '_svbk'),
  icon: 'chart-pie',
  category: 'common',
  keywords: [__('stats'), __('number'), __('counter')],
  attributes: {
    icon: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-stats__icon'
    },
    metric: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-stats__metric'
    },
    description: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-stats__description'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var icon = attributes.icon,
        metric = attributes.metric,
        description = attributes.description,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor;
    var textClass = getColorClassName('color', textColor);
    var classNames = classnames__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      'has-text-color': textColor || customTextColor
    }, textClass, textClass));
    var style = {
      color: textClass ? undefined : customTextColor
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classNames,
      style: style
    }, icon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'wp-block-svbk-stats__icon'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RawHTML, null, icon)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
      className: 'wp-block-svbk-stats__metric'
    }, metric), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
      className: 'wp-block-svbk-stats__description'
    }, description));
  }
};

/***/ }),

/***/ "./blocks/styles/index.js":
/*!********************************!*\
  !*** ./blocks/styles/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Register Custom Styles
wp.blocks.registerBlockStyle('core/paragraph', {
  name: 'subtitle',
  label: 'Subtitle'
});
wp.blocks.registerBlockStyle('core/paragraph', {
  name: 'standout',
  label: 'Standout'
});
wp.blocks.registerBlockStyle('core/list', {
  name: 'bullets',
  label: 'Bullets'
});
wp.blocks.registerBlockStyle('core/button', {
  name: 'secondary',
  label: 'Secondary'
});
wp.blocks.registerBlockStyle('core/button', {
  name: 'text-button',
  label: 'Text button'
});
wp.blocks.registerBlockStyle('core/button', {
  name: 'phone',
  label: 'Phone'
});
wp.blocks.registerBlockStyle('core/button', {
  name: 'right-arrow',
  label: 'Right Arrow Icon'
});
wp.blocks.registerBlockStyle('core/group', {
  name: 'no-padding',
  label: 'No Padding'
});
wp.blocks.registerBlockStyle('core/group', {
  name: 'raised',
  label: 'Raised'
});
wp.blocks.registerBlockStyle('core/group', {
  name: 'inset',
  label: 'Inset'
});
wp.blocks.registerBlockStyle('core/columns', {
  name: 'split',
  label: 'Split'
});
wp.blocks.registerBlockStyle('core/columns', {
  name: 'split-inverted',
  label: 'Split Inverted'
});
wp.blocks.registerBlockStyle('core/image', {
  name: 'rounded',
  label: 'Rounded'
});
wp.blocks.registerBlockStyle('core/image', {
  name: 'rounded-corners',
  label: 'Rounded Corners'
});
wp.blocks.registerBlockStyle('core/columns', {
  name: 'shrink-first',
  label: 'Shrink First'
});
wp.blocks.registerBlockStyle('core/columns', {
  name: 'shrink-last',
  label: 'Shrink Last'
});

/***/ }),

/***/ "./blocks/testimonial/author.js":
/*!**************************************!*\
  !*** ./blocks/testimonial/author.js ***!
  \**************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;

_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default()(wp.components);

var RichText = wp.blockEditor.RichText;
/**
 * Internal dependencies
 */

var name = 'svbk/author';
var settings = {
  title: __('Author', '_svbk'),
  description: __('Display the author of a post', '_svbk'),
  icon: 'admin-users',
  category: 'widgets',
  keywords: [__('author', '_svbk')],
  supports: {
    html: false
  },
  multiple: false,
  attributes: {
    author_name: {
      type: 'string',
      meta: 'author_name',
      source: 'text',
      selector: '.author__name'
    },
    author_role: {
      type: 'string',
      meta: 'author_role',
      source: 'text',
      selector: '.author__role'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        className = _ref.className;
    var author_name = attributes.author_name,
        author_role = attributes.author_role;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
      identifier: "author-name",
      wrapperClassName: "wp-feedback-author-name",
      tagName: 'div',
      value: author_name,
      onChange: function onChange(value) {
        return setAttributes({
          author_name: value
        });
      },
      className: className,
      placeholder: __('Author Name…', '_svbk')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
      identifier: "author-role",
      wrapperClassName: "wp-feedback-author-role",
      tagName: 'cite',
      value: author_role,
      onChange: function onChange(value) {
        return setAttributes({
          author_role: value
        });
      },
      className: className,
      placeholder: __('Author Role…', '_svbk')
    }));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var author_name = attributes.author_name,
        author_role = attributes.author_role,
        className = attributes.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "author__name"
    }, author_name), author_role ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("cite", {
      className: "author__role"
    }, author_role) : null);
  }
};

/***/ }),

/***/ "./blocks/testimonial/edit.js":
/*!************************************!*\
  !*** ./blocks/testimonial/edit.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/image */ "./blocks/common/image.js");








/* global wp */

/* global lodash */
var Component = wp.element.Component;
/**
 * External dependencies
 */


var _lodash = lodash,
    pick = _lodash.pick,
    mapKeys = _lodash.mapKeys,
    capitalize = _lodash.capitalize;
/**
 * WordPress dependencies
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blockEditor = wp.blockEditor,
    PlainText = _wp$blockEditor.PlainText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    ContrastChecker = _wp$blockEditor.ContrastChecker,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings,
    withColors = _wp$blockEditor.withColors,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var compose = wp.compose.compose;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    ButtonGroup = _wp$components.ButtonGroup,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody;
/**
 * Internal dependencies
 */


/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'core/column'.
 *
 * @constant
 * @type {string[]}
*/

var ALLOWED_BLOCKS = ['core/paragraph', 'core/list', 'core/more', 'core-embed/youtube', 'core/button'];
/**
 * Default block template
 * 
 * @constant
 * @type {string[]}
*/

var TEMPLATE = [['core/paragraph', {
  content: 'This text should be shown in the preview..'
}], ['core/more', {}], ['core/paragraph', {
  content: 'This text should be shown in the single testimonial..'
}]];

var TestimonialEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TestimonialEdit, _Component);

  function TestimonialEdit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TestimonialEdit);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(TestimonialEdit).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TestimonialEdit, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          className = _this$props.className,
          isSelected = _this$props.isSelected,
          backgroundColor = _this$props.backgroundColor,
          textColor = _this$props.textColor,
          setBackgroundColor = _this$props.setBackgroundColor,
          setTextColor = _this$props.setTextColor;
      var avatarUrl = attributes.avatarUrl,
          avatarId = attributes.avatarId,
          authorName = attributes.authorName,
          authorRole = attributes.authorRole,
          rating = attributes.rating,
          companyLogoUrl = attributes.companyLogoUrl,
          companyLogoId = attributes.companyLogoId,
          source = attributes.source,
          date = attributes.date;

      var avatarUpdate = function avatarUpdate(update) {
        var localUpdate = mapKeys(pick(update, ['id', 'url']), function (value, key) {
          return 'avatar' + capitalize(key);
        });
        setAttributes(localUpdate);
      };

      var companyLogoUpdate = function companyLogoUpdate(update) {
        var localUpdate = mapKeys(pick(update, ['id', 'url']), function (value, key) {
          return 'companyLogo' + capitalize(key);
        });
        setAttributes(localUpdate);
      };

      var classNames = classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, (_classnames = {
        'is-selected': isSelected
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundColor.class, backgroundColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, textColor.class, textColor.class), _classnames));
      var style = {
        backgroundColor: backgroundColor.color,
        color: textColor.color
      };
      var isStyle = RegExp(/is-style-/);
      var styleName = isStyle.test(attributes.className) ? attributes.className.replace(isStyle, '') : null;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classNames,
        style: style
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: 'wp-block-svbk-testimonial__header'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_common_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        setAttributes: avatarUpdate,
        url: avatarUrl,
        id: avatarId,
        size: 'medium',
        className: 'wp-block-svbk-testimonial__author',
        labels: {
          title: __('Author Avatar', '_svbk')
        },
        changeSize: false
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PlainText, {
        value: authorName,
        onChange: function onChange(value) {
          return setAttributes({
            authorName: value
          });
        },
        placeholder: __('Name Surname..', '_svbk'),
        className: 'wp-block-svbk-testimonial__author-name'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PlainText, {
        value: authorRole,
        onChange: function onChange(value) {
          return setAttributes({
            authorRole: value
          });
        },
        placeholder: __('Role..', '_svbk'),
        className: 'wp-block-svbk-testimonial__role-name'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('block-editor-rating', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "rating-".concat(rating), rating))
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ButtonGroup, {
        className: 'block-editor-rating__stars'
      }, [1, 2, 3, 4, 5].map(function (rate) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(IconButton, {
          key: rate,
          icon: rating >= rate ? 'star-filled' : 'star-empty',
          onClick: function onClick() {
            setAttributes({
              rating: rate,
              ratingMeta: rate
            });
          },
          label: rate
        });
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: 'wp-block-svbk-testimonial__meta'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PlainText, {
        value: date,
        onChange: function onChange(value) {
          return setAttributes({
            date: value
          });
        },
        placeholder: __('Date..', '_svbk'),
        className: 'wp-block-svbk-testimonial__date'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PlainText, {
        value: source,
        onChange: function onChange(value) {
          return setAttributes({
            source: value
          });
        },
        placeholder: __('Source..', '_svbk'),
        className: 'wp-block-svbk-testimonial__source'
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_common_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        setAttributes: companyLogoUpdate,
        url: companyLogoUrl,
        id: companyLogoId,
        size: 'medium',
        className: 'wp-block-svbk-testimonial__company-logo',
        labels: {
          title: __('Company Logo', '_svbk')
        },
        changeSize: false
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: 'wp-block-svbk-testimonial__content'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InnerBlocks, {
        templateLock: false,
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelBody, {
        title: __('Testimonial Settings', '_svbk')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RangeControl, {
        label: __('Rating', '_svbk'),
        value: rating,
        onChange: function onChange(value) {
          setAttributes({
            rating: Number(value)
          });
        },
        min: 0,
        max: 5
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelColorSettings, {
        title: __('Color Settings'),
        initialOpen: false,
        colorSettings: [{
          value: backgroundColor.color,
          onChange: setBackgroundColor,
          label: __('Background Color')
        }, {
          value: textColor.color,
          onChange: setTextColor,
          label: __('Text Color')
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ContrastChecker, {
        textColor: textColor.color,
        backgroundColor: backgroundColor.color
      })));
    }
  }]);

  return TestimonialEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withColors('backgroundColor', {
  textColor: 'color'
})])(TestimonialEdit));

/***/ }),

/***/ "./blocks/testimonial/embed.js":
/*!*************************************!*\
  !*** ./blocks/testimonial/embed.js ***!
  \*************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_PostEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/PostEdit */ "./blocks/common/PostEdit.js");



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
/**
 * Internal dependencies
 */


var name = 'svbk/testimonial-embed';
var settings = {
  title: __('Testimonial Embed', '_svbk'),
  description: __('Embeds a tesitmonial', '_svbk'),
  icon: 'thumbs-up',
  category: 'widgets',
  keywords: [__('testimonial', '_svbk')],
  supports: {
    html: false
  },
  styles: [// Mark style as default.
  {
    name: 'full',
    label: __('Full', '_svbk'),
    isDefault: true
  }, {
    name: 'inline',
    label: __('Inline', '_svbk')
  }],
  attributes: {
    align: {
      type: "string"
    },
    id: {
      type: "number"
    },
    display: {
      type: "string",
      default: "excerpt"
    }
  },
  edit: function edit(attrs) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_common_PostEdit__WEBPACK_IMPORTED_MODULE_2__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      postType: "testimonial"
    }, attrs));
  },
  save: function save(attributes) {
    var className = attributes.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: className
    });
  }
};

/***/ }),

/***/ "./blocks/testimonial/index.js":
/*!*************************************!*\
  !*** ./blocks/testimonial/index.js ***!
  \*************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./blocks/testimonial/edit.js");



/* global wp */

/* global lodash */

/**
 * BLOCK: testimonial
 *
 * Shows a  testimonial
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blockEditor = wp.blockEditor,
    getColorClassName = _wp$blockEditor.getColorClassName,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
/**
 * Internal dependencies
 */


/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

var name = 'svbk/testimonial';
var settings = {
  title: __('Testimonial', '_svbk'),
  icon: 'thumbs-up',
  category: 'widgets',
  keywords: [__('testimonial'), __('feedback')],
  supports: {
    inserter: false,
    reusable: false,
    multiple: false
  },
  styles: [// Mark style as default.
  {
    name: 'default',
    label: __('Standard'),
    isDefault: true
  }, {
    name: 'vip',
    label: __('VIP', '_svbk')
  }, {
    name: 'press',
    label: __('Press', '_svbk')
  }],
  attributes: {
    avatarUrl: {
      type: 'string',
      source: 'attribute',
      selector: '.wp-block-svbk-testimonial__avatar img',
      attribute: 'src'
    },
    avatarId: {
      type: 'number'
    },
    authorName: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-testimonial__author-name'
    },
    authorRole: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-testimonial__author-role'
    },
    companyLogoUrl: {
      type: 'string',
      source: 'attribute',
      selector: '.wp-block-svbk-testimonial__company-logo img',
      attribute: 'src'
    },
    companyLogoId: {
      type: 'number'
    },
    rating: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-testimonial__rating .rating__value'
    },
    ratingMeta: {
      type: 'number',
      source: 'meta',
      meta: 'rating'
    },
    date: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-testimonial__date'
    },
    source: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-testimonial__source'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var avatarUrl = attributes.avatarUrl,
        avatarId = attributes.avatarId,
        authorName = attributes.authorName,
        authorRole = attributes.authorRole,
        rating = attributes.rating,
        companyLogoUrl = attributes.companyLogoUrl,
        companyLogoId = attributes.companyLogoId,
        source = attributes.source,
        date = attributes.date,
        backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor;
    var backgroundClass = getColorClassName('background-color', backgroundColor);
    var textClass = getColorClassName('color', textColor);
    var classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classnames = {
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, textClass, textClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundClass, backgroundClass), _classnames));
    var style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classNames,
      style: style
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'wp-block-svbk-testimonial__header'
    }, avatarUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
      className: 'wp-block-svbk-testimonial__avatar'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: avatarUrl,
      alt: 'Profile Image',
      className: avatarId ? "wp-image-".concat(avatarId) : null
    })), authorName && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'wp-block-svbk-testimonial__author'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'wp-block-svbk-testimonial__author-name'
    }, authorName), authorRole && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'wp-block-svbk-testimonial__author-role'
    }, authorRole)), rating && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-svbk-testimonial__rating', 'rating', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "rating--".concat(rating), rating))
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: 'rating__label'
    }, "Rating:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: 'rating__value'
    }, rating)), (date || source) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'wp-block-svbk-testimonial__meta'
    }, date && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: 'wp-block-svbk-testimonial__date'
    }, date), source && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: 'wp-block-svbk-testimonial__source'
    }, " ", source)), companyLogoUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
      className: 'wp-block-svbk-testimonial__company-logo'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: companyLogoUrl,
      alt: 'Company Logo',
      className: companyLogoId ? "wp-image-".concat(companyLogoId) : null
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'wp-block-svbk-testimonial__content'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null)));
  }
};

/***/ }),

/***/ "./blocks/testimonial/list/index.js":
/*!******************************************!*\
  !*** ./blocks/testimonial/list/index.js ***!
  \******************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_PostListEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/PostListEdit */ "./blocks/common/PostListEdit.js");



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
/**
 * Internal dependencies
 */


var name = 'svbk/testimonials';
var settings = {
  title: __('Testimonials', '_svbk'),
  description: __('Display a list of testimonials.', '_svbk'),
  icon: 'thumbs-up',
  category: 'widgets',
  keywords: [__('testimonials', '_svbk')],
  supports: {
    html: false
  },
  styles: [// Mark style as default.
  {
    name: 'full',
    label: __('Full', '_svbk'),
    isDefault: true
  }, {
    name: 'small',
    label: __('Small', '_svbk')
  }, {
    name: 'grid',
    label: __('Grid', '_svbk')
  }, {
    name: 'masonry',
    label: __('Masonry', '_svbk')
  }],
  attributes: {
    align: {
      type: "string"
    },
    categories: {
      type: "string"
    },
    className: {
      type: "string"
    },
    columns: {
      type: "number",
      default: 3
    },
    order: {
      type: "string",
      default: "desc"
    },
    orderBy: {
      type: "string",
      default: "date"
    },
    display: {
      type: "string",
      default: "excerpt"
    },
    postLayout: {
      type: "string",
      default: "list"
    },
    postsToShow: {
      type: "number",
      default: 5
    },
    offset: {
      type: "number",
      default: 5
    },
    loadMore: {
      type: "boolean",
      default: false
    }
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var align = attributes.align;

    if (['left', 'center', 'right', 'wide', 'full'].includes(align)) {
      return {
        'data-align': align
      };
    }
  },
  edit: function edit(attrs) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_common_PostListEdit__WEBPACK_IMPORTED_MODULE_2__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      postType: "testimonial",
      taxonomy: "testimonial_category"
    }, attrs));
  },
  save: function save(attributes) {
    var className = attributes.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: className
    });
  }
};

/***/ }),

/***/ "./blocks/testimonial/rating.js":
/*!**************************************!*\
  !*** ./blocks/testimonial/rating.js ***!
  \**************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    ToggleControl = _wp$components.ToggleControl,
    ButtonGroup = _wp$components.ButtonGroup,
    IconButton = _wp$components.IconButton;
var InspectorControls = wp.blockEditor.InspectorControls;
/**
 * Internal dependencies
 */

var name = 'svbk/rating';
var settings = {
  title: __('Rating', '_svbk'),
  description: __('Display a list of stars', '_svbk'),
  icon: 'star-filled',
  category: 'widgets',
  keywords: [__('rating', '_svbk')],
  supports: {
    html: false
  },
  attributes: {
    rating: {
      type: 'string',
      source: 'text',
      selector: '.rating__value',
      default: 5
    },
    ratingMeta: {
      type: 'string',
      meta: 'rating'
    }
  },
  deprecated: [{
    attributes: {
      rating: {
        type: 'string',
        meta: 'rating',
        default: 5
      }
    },
    supports: {
      html: false
    },
    save: function save(_ref) {
      var attributes = _ref.attributes;
      var rating = attributes.rating,
          className = attributes.className;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([className], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "rating-".concat(rating), rating))
      }, "Rating: ", rating);
    }
  }],
  edit: function edit(_ref2) {
    var attributes = _ref2.attributes,
        setAttributes = _ref2.setAttributes,
        className = _ref2.className;
    var rating = attributes.rating;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Rating', '_svbk')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      label: __('Rating', '_svbk'),
      value: rating,
      onChange: function onChange(value) {
        setAttributes({
          rating: Number(value),
          ratingMeta: Number(value)
        });
      },
      min: 0,
      max: 5
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('block-editor-rating', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "rating-".concat(rating), rating))
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ButtonGroup, {
      className: 'block-editor-rating__stars'
    }, [1, 2, 3, 4, 5].map(function (rate) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(IconButton, {
        key: rate,
        icon: rating >= rate ? 'star-filled' : 'star-empty',
        onClick: function onClick() {
          setAttributes({
            rating: rate
          });
        },
        label: rate
      });
    }))));
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var rating = attributes.rating;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "rating-".concat(rating), rating))
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: 'wp-block-svbk-rating__label rating__label'
    }, "Rating:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: 'wp-block-svbk-rating__value rating__value'
    }, rating));
  }
};

/***/ }),

/***/ "./blocks/trust/edit.js":
/*!******************************!*\
  !*** ./blocks/trust/edit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/heading */ "./blocks/common/heading.js");








/* global wp */

/* global lodash */
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    ContrastChecker = _wp$blockEditor.ContrastChecker,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings,
    withColors = _wp$blockEditor.withColors,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var compose = wp.compose.compose;
/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'core/column'.
 *
 * @constant
 * @type {string[]}
*/

var ALLOWED_BLOCKS = ['core/image'];
/**
 * Default block template
 * 
 * @constant
 * @type {string[]}
*/

var TEMPLATE = [['core/image', {}], ['core/image', {}]];


var TrustEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TrustEdit, _Component);

  function TrustEdit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TrustEdit);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(TrustEdit).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TrustEdit, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          className = _this$props.className,
          isSelected = _this$props.isSelected,
          backgroundColor = _this$props.backgroundColor,
          textColor = _this$props.textColor,
          ribbonColor = _this$props.ribbonColor,
          setBackgroundColor = _this$props.setBackgroundColor,
          setTextColor = _this$props.setTextColor,
          setRibbonColor = _this$props.setRibbonColor;
      var title = attributes.title,
          titleLevel = attributes.titleLevel;
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, (_classnames = {
        'is-selected': isSelected
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundColor.class, backgroundColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, textColor.class, textColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, ribbonColor.class, ribbonColor.class), _classnames));
      var titleTag = titleLevel ? 'h' + titleLevel : 'h2';
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classNames
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        tagName: titleTag,
        value: title,
        onChange: function onChange(value) {
          return setAttributes({
            ribbon: value
          });
        },
        placeholder: __('Ribbon content...', '_svbk'),
        className: 'wp-block-svbk-trust__ribbon'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InnerBlocks, {
        templateLock: false,
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_common_heading__WEBPACK_IMPORTED_MODULE_8__["HeadingToolbar"], {
        minLevel: 2,
        maxLevel: 5,
        selectedLevel: titleLevel,
        onChange: function onChange(newLevel) {
          setAttributes({
            titleLevel: newLevel
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelColorSettings, {
        title: __('Color Settings'),
        initialOpen: false,
        disableCustomColors: true,
        colorSettings: [{
          value: backgroundColor.color,
          onChange: setBackgroundColor,
          label: __('Background Color')
        }, {
          value: ribbonColor.color,
          onChange: setRibbonColor,
          label: __('Ribbon Color')
        }, {
          value: textColor.color,
          onChange: setTextColor,
          label: __('Text Color')
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ContrastChecker, {
        ribbonColor: ribbonColor.color,
        backgroundColor: backgroundColor.color
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ContrastChecker, {
        ribbonColor: ribbonColor.color,
        textColor: textColor.color
      })));
    }
  }]);

  return TrustEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withColors('backgroundColor', {
  textColor: 'color'
}, 'ribbonColor')])(TrustEdit));

/***/ }),

/***/ "./blocks/trust/index.js":
/*!*******************************!*\
  !*** ./blocks/trust/index.js ***!
  \*******************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./blocks/trust/edit.js");



/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Block for customers logos 
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    getColorClassName = _wp$blockEditor.getColorClassName,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
/**
 * Internal dependencies
 */


/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

var name = 'svbk/trust';
var settings = {
  title: __('Autorevolezza', '_svbk'),
  icon: 'buddicons-buddypress-logo',
  category: 'common',
  keywords: [__('trust', '_svbk'), __('autorevolezza', '_svbk'), __('logo', '_svbk')],
  styles: [],
  attributes: {
    ribbon: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-trust__ribbon'
    },
    titleLevel: {
      type: 'number',
      default: 2
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    ribbonColor: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: function save(_ref) {
    var _classnames, _classnames2;

    var attributes = _ref.attributes;
    var ribbon = attributes.ribbon,
        titleLevel = attributes.titleLevel,
        backgroundColor = attributes.backgroundColor,
        textColor = attributes.textColor,
        ribbonColor = attributes.ribbonColor;
    var titleTag = titleLevel ? 'h' + titleLevel : 'h2';
    var backgroundClass = getColorClassName('background-color', backgroundColor);
    var textClass = getColorClassName('color', textColor);
    var ribbonClass = getColorClassName('ribbon-color', ribbonColor);
    var classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classnames = {
      'has-background': backgroundColor
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundClass, backgroundClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-ribbon', ribbon), _classnames));
    var ribbonClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classnames2 = {
      'wp-block-svbk-trust__ribbon': true,
      'has-text-color': textColor,
      'has-ribbon-color': textColor
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames2, textClass, textClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames2, ribbonClass, ribbonClass), _classnames2));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classNames
    }, ribbon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: titleTag,
      className: ribbonClasses,
      value: ribbon
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'wp-block-svbk-trust__content'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null)));
  }
};

/***/ }),

/***/ "./blocks/warranty/deprecated.js":
/*!***************************************!*\
  !*** ./blocks/warranty/deprecated.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    getColorClassName = _wp$blockEditor.getColorClassName,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var deprecated = [{
  attributes: {
    sealUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: '.wp-block-svbk-warranty__seal img'
    },
    sealId: {
      type: 'number'
    },
    title: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-warranty__title'
    },
    subtitle: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-warranty__subtitle'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-warranty__content'
    },
    footer: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-warranty__footer'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    backgroundImageUrl: {
      type: 'string'
    },
    backgroundImageId: {
      type: 'number'
    }
  },
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var sealUrl = attributes.sealUrl,
        sealId = attributes.sealId,
        title = attributes.title,
        subtitle = attributes.subtitle,
        content = attributes.content,
        footer = attributes.footer,
        backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor,
        backgroundImageUrl = attributes.backgroundImageUrl,
        backgroundImageId = attributes.backgroundImageId;
    var backgroundClass = getColorClassName('background-color', backgroundColor);
    var textClass = getColorClassName('color', textColor);
    var classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-svbk-warranty__content', (_classnames = {
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, textClass, textClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundClass, backgroundClass), _classnames));
    var style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("aside", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        'has-background-image': backgroundImageUrl
      })
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classNames,
      style: style
    }, sealUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
      className: 'wp-block-svbk-warranty__seal'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: sealUrl,
      alt: "Warranty Seal",
      className: sealId ? "wp-image-".concat(sealId) : null
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("header", {
      className: 'wp-block-svbk-warranty__header'
    }, title && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'h3',
      className: 'wp-block-svbk-warranty__title',
      value: title
    }), subtitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'p',
      className: 'wp-block-svbk-warranty__subtitle',
      value: subtitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'wp-block-svbk-warranty__content'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null)), footer && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'footer',
      className: 'wp-block-svbk-warranty__footer',
      value: footer
    })), backgroundImageUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      className: 'wp-block-svbk-warranty__background' + (backgroundImageId ? "wp-image-".concat(backgroundImageId) : null),
      alt: '',
      "aria-hidden": true,
      src: backgroundImageUrl
    }));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./blocks/warranty/edit.js":
/*!*********************************!*\
  !*** ./blocks/warranty/edit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/image */ "./blocks/common/image.js");








/* global wp */

/* global lodash */
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
/**
 * External dependencies
 */


var _lodash = lodash,
    pick = _lodash.pick,
    mapKeys = _lodash.mapKeys,
    capitalize = _lodash.capitalize;
/**
 * WordPress dependencies
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    ContrastChecker = _wp$blockEditor.ContrastChecker,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings,
    withColors = _wp$blockEditor.withColors,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup;
var compose = wp.compose.compose;

/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'core/column'.
 *
 * @constant
 * @type {string[]}
*/

var ALLOWED_BLOCKS = ['core/paragraph', 'core/list'];
/**
 * Default block template
 * 
 * @constant
 * @type {string[]}
*/

var TEMPLATE = [['core/paragraph', {
  content: 'Lorem ipsum sit amet...'
}]];

var WarrantyEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(WarrantyEdit, _Component);

  function WarrantyEdit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, WarrantyEdit);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(WarrantyEdit).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(WarrantyEdit, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          className = _this$props.className,
          isSelected = _this$props.isSelected,
          backgroundColor = _this$props.backgroundColor,
          textColor = _this$props.textColor,
          setBackgroundColor = _this$props.setBackgroundColor,
          setTextColor = _this$props.setTextColor;
      var sealUrl = attributes.sealUrl,
          sealId = attributes.sealId,
          sealSize = attributes.sealSize,
          title = attributes.title,
          subtitle = attributes.subtitle,
          footer = attributes.footer,
          backgroundImageUrl = attributes.backgroundImageUrl,
          backgroundImageId = attributes.backgroundImageId,
          backgroundImageSize = attributes.backgroundImageSize;
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, (_classnames = {
        'is-selected': isSelected
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundColor.class, backgroundColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, textColor.class, textColor.class), _classnames));
      var containerStyle = backgroundImageUrl ? {
        backgroundImage: "url(".concat(backgroundImageUrl, ")"),
        backgroundSize: 'cover'
      } : {};
      var contentStyle = {
        backgroundColor: backgroundColor.color,
        color: textColor.color
      };

      var sealUpdate = function sealUpdate(update) {
        var localUpdate = mapKeys(pick(update, ['id', 'url', 'size']), function (value, key) {
          // Convert url to pictureUrl, id to pictureId, etc
          return 'seal' + capitalize(key);
        });
        setAttributes(localUpdate);
      };

      var backgroundImageUpdate = function backgroundImageUpdate(update) {
        var localUpdate = mapKeys(pick(update, ['id', 'url', 'size']), function (value, key) {
          // Convert url to pictureUrl, id to pictureId, etc
          return 'backgroundImage' + capitalize(key);
        });
        setAttributes(localUpdate);
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classNames,
        style: containerStyle
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: 'wp-block-svbk-warranty__content',
        style: contentStyle
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_common_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        setAttributes: sealUpdate,
        url: sealUrl,
        id: sealId,
        size: sealSize,
        labels: {
          title: 'Seal'
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("header", {
        className: 'wp-block-svbk-warranty__header'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        tagName: 'h3',
        value: title,
        onChange: function onChange(value) {
          return setAttributes({
            title: value
          });
        },
        placeholder: __('This is my title..', '_svbk'),
        className: 'wp-block-svbk-warranty__title'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        tagName: 'p',
        value: subtitle,
        onChange: function onChange(value) {
          return setAttributes({
            subtitle: value
          });
        },
        placeholder: __('Subtitle..', '_svbk'),
        className: 'wp-block-svbk-warranty__subtitle'
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InnerBlocks, {
        templateLock: false,
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        tagName: 'footer',
        value: footer,
        onChange: function onChange(value) {
          setAttributes({
            footer: value
          });
        },
        placeholder: __('Footer content..', '_svbk'),
        className: 'wp-block-svbk-warranty__footer'
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelBody, {
        title: __('Background Settings', '__svbk')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_common_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        setAttributes: backgroundImageUpdate,
        url: backgroundImageUrl,
        id: backgroundImageId,
        size: backgroundImageSize,
        labels: {
          title: 'Background Image'
        },
        inInspector: true
      }), backgroundImageUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Button, {
        isDestructive: true,
        className: 'wp-block-svbk-warranty__bg-remove',
        onClick: function onClick() {
          setAttributes({
            backgroundImageUrl: '',
            backgroundImageId: null
          });
        }
      }, __('Remove', '_svbk'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelColorSettings, {
        title: __('Color Settings'),
        initialOpen: false,
        colorSettings: [{
          value: backgroundColor.color,
          onChange: setBackgroundColor,
          label: __('Background Color')
        }, {
          value: textColor.color,
          onChange: setTextColor,
          label: __('Text Color')
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ContrastChecker, {
        textColor: textColor.color,
        backgroundColor: backgroundColor.color
      })));
    }
  }]);

  return WarrantyEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withColors('backgroundColor', {
  textColor: 'color'
})])(WarrantyEdit));

/***/ }),

/***/ "./blocks/warranty/index.js":
/*!**********************************!*\
  !*** ./blocks/warranty/index.js ***!
  \**********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./blocks/warranty/edit.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deprecated */ "./blocks/warranty/deprecated.js");



/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Brando Meniconi <b.meniconi@silverbackstudio.it>
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    getColorClassName = _wp$blockEditor.getColorClassName,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
/**
 * Internal dependencies
 */



/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

var name = 'svbk/warranty';
var settings = {
  title: __('Warranty', '_svbk'),
  icon: 'awards',
  category: 'common',
  keywords: [__('warranty', '_svbk'), __('assurance', '_svbk'), __('guarantee', '_svbk')],
  styles: [// Mark style as default.
  {
    name: 'default',
    label: __('Default'),
    isDefault: true
  }, {
    name: 'small',
    label: __('Small', '_svbk')
  }],
  supports: {
    anchor: true
  },
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_4__["default"],
  attributes: {
    sealUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: '.wp-block-svbk-warranty__seal img'
    },
    sealId: {
      type: 'number'
    },
    sealSize: {
      type: 'string'
    },
    title: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-warranty__title'
    },
    subtitle: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-warranty__subtitle'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-warranty__text'
    },
    footer: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-warranty__footer'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    backgroundImageUrl: {
      type: 'string'
    },
    backgroundImageId: {
      type: 'number'
    },
    backgroundImageSise: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var sealUrl = attributes.sealUrl,
        sealId = attributes.sealId,
        title = attributes.title,
        subtitle = attributes.subtitle,
        content = attributes.content,
        footer = attributes.footer,
        backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor,
        backgroundImageUrl = attributes.backgroundImageUrl,
        backgroundImageId = attributes.backgroundImageId;
    var backgroundClass = getColorClassName('background-color', backgroundColor);
    var textClass = getColorClassName('color', textColor);
    var classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-svbk-warranty__content', (_classnames = {
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, textClass, textClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundClass, backgroundClass), _classnames));
    var style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("aside", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        'has-background-image': backgroundImageUrl
      })
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classNames,
      style: style
    }, sealUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
      className: 'wp-block-svbk-warranty__seal'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: sealUrl,
      alt: "Warranty Seal",
      className: sealId ? "wp-image-".concat(sealId) : null
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("header", {
      className: 'wp-block-svbk-warranty__header'
    }, title && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'h3',
      className: 'wp-block-svbk-warranty__title',
      value: title
    }), subtitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'p',
      className: 'wp-block-svbk-warranty__subtitle',
      value: subtitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'wp-block-svbk-warranty__text'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null)), footer && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: 'footer',
      className: 'wp-block-svbk-warranty__footer',
      value: footer
    })), backgroundImageUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      className: 'wp-block-svbk-warranty__background' + (backgroundImageId ? "wp-image-".concat(backgroundImageId) : null),
      alt: '',
      "aria-hidden": true,
      src: backgroundImageUrl
    }));
  }
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

module.exports = _objectDestructuringEmpty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@react-google-maps/api/dist/reactgooglemapsapi.esm.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@react-google-maps/api/dist/reactgooglemapsapi.esm.js ***!
  \****************************************************************************/
/*! exports provided: Autocomplete, BicyclingLayer, Circle, Data, DirectionsRenderer, DirectionsService, DistanceMatrixService, DrawingManager, GoogleMap, GroundOverlay, HeatmapLayer, InfoBox, InfoWindow, KmlLayer, LoadScript, LoadScriptNext, Marker, MarkerClusterer, OverlayView, Polygon, Polyline, Rectangle, StandaloneSearchBox, StreetViewPanorama, StreetViewService, TrafficLayer, TransitLayer, useGoogleMap, useLoadScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return Autocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BicyclingLayer", function() { return BicyclingLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsRenderer", function() { return DirectionsRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsService", function() { return DirectionsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanceMatrixService", function() { return DistanceMatrixService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingManager", function() { return DrawingManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMap", function() { return GoogleMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroundOverlay", function() { return GroundOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatmapLayer", function() { return HeatmapLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBox", function() { return InfoBoxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindow", function() { return InfoWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayer", function() { return KmlLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadScript", function() { return LoadScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadScriptNext", function() { return LoadScriptNext$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerClusterer", function() { return ClustererComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayView", function() { return OverlayView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return Polyline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandaloneSearchBox", function() { return StandaloneSearchBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewPanorama", function() { return StreetViewPanorama; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewService", function() { return StreetViewService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficLayer", function() { return TrafficLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitLayer", function() { return TransitLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGoogleMap", function() { return useGoogleMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoadScript", function() { return useLoadScript; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_marker_clusterer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/marker-clusterer */ "./node_modules/@react-google-maps/marker-clusterer/dist/markerclusterer.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_google_maps_infobox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-google-maps/infobox */ "./node_modules/@react-google-maps/infobox/dist/infobox.esm.js");






function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var MapContext =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
function useGoogleMap() {
  !!!react__WEBPACK_IMPORTED_MODULE_0__["useContext"] ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "useGoogleMap is React hook and requires React version 16.8+") : undefined : void 0;
  var map = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(MapContext);
  !!!map ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "useGoogleMap needs a GoogleMap available up in the tree") : undefined : void 0;
  return map;
}

var reduce = function reduce(obj, fn, acc) {
  return Object.keys(obj).reduce(function reducer(newAcc, key) {
    return fn(newAcc, obj[key], key);
  }, acc);
};

function forEach(obj, fn) {
  Object.keys(obj).forEach(function iterator(key) {
    return fn(obj[key], key);
  });
}

/* eslint-disable filenames/match-regex */
var applyUpdaterToNextProps = function applyUpdaterToNextProps(updaterMap, prevProps, nextProps, instance) {
  var map = {};

  var iter = function iter(fn, key) {
    var nextValue = nextProps[key];

    if (nextValue !== prevProps[key]) {
      map[key] = nextValue;
      fn(instance, nextValue);
    }
  };

  forEach(updaterMap, iter);
  return map;
};
function registerEvents(props, instance, eventMap) {
  var registeredList = reduce(eventMap, function reducer(acc, googleEventName, onEventName) {
    if (typeof props[onEventName] === 'function') {
      acc.push(google.maps.event.addListener(instance, googleEventName, props[onEventName]));
    }

    return acc;
  }, []);
  return registeredList;
}

function unregisterEvent(registered) {
  google.maps.event.removeListener(registered);
}

function unregisterEvents(events) {
  if (events === void 0) {
    events = [];
  }

  events.map(unregisterEvent);
}
function applyUpdatersToPropsAndRegisterEvents(_ref) {
  var updaterMap = _ref.updaterMap,
      eventMap = _ref.eventMap,
      prevProps = _ref.prevProps,
      nextProps = _ref.nextProps,
      instance = _ref.instance;
  var registeredEvents = registerEvents(nextProps, instance, eventMap);
  applyUpdaterToNextProps(updaterMap, prevProps, nextProps, instance);
  return registeredEvents;
}

var eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMapTypeIdChanged: "maptypeid_changed",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseDown: "mousedown",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onTilesLoaded: "tilesloaded",
  onBoundsChanged: "bounds_changed",
  onCenterChanged: "center_changed",
  onClick: "click",
  onDrag: "drag",
  onHeadingChanged: "heading_changed",
  onIdle: "idle",
  onProjectionChanged: "projection_changed",
  onResize: "resize",
  onTiltChanged: "tilt_changed",
  onZoomChanged: "zoom_changed"
};
var updaterMap = {
  extraMapTypes: function extraMapTypes(map, extra) {
    extra.forEach(function forEachExtra(it, i) {
      map.mapTypes.set(String(i), it);
    });
  },
  center: function center(map, _center) {
    map.setCenter(_center);
  },
  clickableIcons: function clickableIcons(map, clickable) {
    map.setClickableIcons(clickable);
  },
  heading: function heading(map, _heading) {
    map.setHeading(_heading);
  },
  mapTypeId: function mapTypeId(map, _mapTypeId) {
    map.setMapTypeId(_mapTypeId);
  },
  options: function options(map, _options) {
    map.setOptions(_options);
  },
  streetView: function streetView(map, _streetView) {
    map.setStreetView(_streetView);
  },
  tilt: function tilt(map, _tilt) {
    map.setTilt(_tilt);
  },
  zoom: function zoom(map, _zoom) {
    map.setZoom(_zoom);
  }
};
var GoogleMap =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(GoogleMap, _React$PureComponent);

  function GoogleMap() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      map: null
    };
    _this.registeredEvents = [];
    _this.mapRef = null; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.getInstance = function () {
      return new google.maps.Map(_this.mapRef, _this.props.options);
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name


    _this.setMapCallback = function () {
      if (_this.state.map !== null) {
        if (_this.props.onLoad) {
          _this.props.onLoad(_this.state.map);
        }
      }
    };
    /* eslint-disable @getify/proper-arrows/name */

    /* eslint-disable @getify/proper-arrows/this */


    _this.getRef = function (ref) {
      _this.mapRef = ref;
    };

    return _this;
  }

  var _proto = GoogleMap.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var map = this.getInstance();
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap,
      eventMap: eventMap,
      prevProps: {},
      nextProps: this.props,
      instance: map
    });

    function setMap() {
      return {
        map: map
      };
    }

    this.setState(setMap, this.setMapCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.map !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap,
        eventMap: eventMap,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.map
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.map !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.map);
      }

      unregisterEvents(this.registeredEvents);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: this.props.id,
      ref: this.getRef,
      style: this.props.mapContainerStyle,
      className: this.props.mapContainerClassName
    }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MapContext.Provider, {
      value: this.state.map
    }, this.state.map !== null ? this.props.children : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null)));
  };

  return GoogleMap;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var isBrowser = typeof document !== 'undefined';

var injectScript = function injectScript(_ref) {
  var url = _ref.url,
      id = _ref.id;

  if (!isBrowser) {
    return Promise.reject(new Error('document is undefined'));
  }

  return new Promise(function injectScriptCallback(resolve, reject) {
    var existingScript = document.getElementById(id);
    var windowWithGoogleMap = window;

    if (existingScript) {
      // Same script id/url: keep same script
      if (existingScript.src === url) {
        if (existingScript.getAttribute('data-state') === 'ready') {
          return resolve(id);
        } else {
          var originalInitMap = windowWithGoogleMap.initMap;

          windowWithGoogleMap.initMap = function initMap() {
            if (originalInitMap) {
              originalInitMap();
            }

            resolve(id);
          };

          return;
        }
      } // Same script id but url changed: recreate the script
      else {
          existingScript.remove();
        }
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.id = id;
    script.async = true;
    script.onerror = reject;

    windowWithGoogleMap.initMap = function onload() {
      script.setAttribute('data-state', 'ready');
      resolve(id);
    };

    document.head.appendChild(script);
  })["catch"](function (err) {
    console.error('injectScript error: ', err);
  });
};

var isRobotoStyle = function isRobotoStyle(element) {
  // roboto font download
  if (element.href && element.href.indexOf('https://fonts.googleapis.com/css?family=Roboto') === 0) {
    return true;
  } // roboto style elements


  if (element.tagName.toLowerCase() === 'style' && // @ts-ignore
  element.styleSheet && // @ts-ignore
  element.styleSheet.cssText && // @ts-ignore
  element.styleSheet.cssText.replace('\r\n', '').indexOf('.gm-style') === 0) {
    // @ts-ignore
    element.styleSheet.cssText = '';
    return true;
  } // roboto style elements for other browsers


  if (element.tagName.toLowerCase() === 'style' && element.innerHTML && element.innerHTML.replace('\r\n', '').indexOf('.gm-style') === 0) {
    element.innerHTML = '';
    return true;
  } // when google tries to add empty style


  if (element.tagName.toLowerCase() === 'style' && // @ts-ignore
  !element.styleSheet && !element.innerHTML) {
    return true;
  }

  return false;
}; // Preventing the Google Maps libary from downloading an extra font


var preventGoogleFonts = function preventGoogleFonts() {
  // we override these methods only for one particular head element
  // default methods for other elements are not affected
  var head = document.getElementsByTagName('head')[0];
  var trueInsertBefore = head.insertBefore.bind(head); // TODO: adding return before reflect solves the TS issue
  //@ts-ignore

  head.insertBefore = function insertBefore(newElement, referenceElement) {
    if (!isRobotoStyle(newElement)) {
      Reflect.apply(trueInsertBefore, head, [newElement, referenceElement]);
    }
  };

  var trueAppend = head.appendChild.bind(head); // TODO: adding return before reflect solves the TS issue
  //@ts-ignore

  head.appendChild = function appendChild(textNode) {
    if (!isRobotoStyle(textNode)) {
      Reflect.apply(trueAppend, head, [textNode]);
    }
  };
};

function makeLoadScriptUrl(_ref) {
  var googleMapsApiKey = _ref.googleMapsApiKey,
      googleMapsClientId = _ref.googleMapsClientId,
      _ref$version = _ref.version,
      version = _ref$version === void 0 ? 'weekly' : _ref$version,
      language = _ref.language,
      region = _ref.region,
      libraries = _ref.libraries,
      channel = _ref.channel;
  var params = [];
  !(googleMapsApiKey && googleMapsClientId || !(googleMapsApiKey && googleMapsClientId)) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time.') : undefined : void 0;

  if (googleMapsApiKey) {
    params.push("key=" + googleMapsApiKey);
  } else if (googleMapsClientId) {
    params.push("client=" + googleMapsClientId);
  }

  if (version) {
    params.push("v=" + version);
  }

  if (language) {
    params.push("language=" + language);
  }

  if (region) {
    params.push("region=" + region);
  }

  if (libraries && libraries.length) {
    params.push("libraries=" + libraries.sort().join(','));
  }

  if (channel) {
    params.push("channel=" + channel);
  }

  params.push('callback=initMap');
  return "https://maps.googleapis.com/maps/api/js?" + params.join('&');
}

var cleaningUp = false;
function DefaultLoadingElement() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "Loading...");
}
var defaultLoadScriptProps = {
  id: 'script-loader',
  version: 'weekly'
};

var LoadScript =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(LoadScript, _React$PureComponent);

  function LoadScript() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.check = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.state = {
      loaded: false
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.cleanupCallback = function () {
      //@ts-ignore
      delete window.google;

      _this.injectScript();
    }; // eslint-disable-next-line @getify/proper-arrows/name


    _this.isCleaningUp = function () {
      try {
        var promiseCallback = function promiseCallback(resolve) {
          if (!cleaningUp) {
            resolve();
          } else {
            if (isBrowser) {
              var timer = window.setInterval(function interval() {
                if (!cleaningUp) {
                  window.clearInterval(timer);
                  resolve();
                }
              }, 1);
            }
          }
        };

        return Promise.resolve(new Promise(promiseCallback));
      } catch (e) {
        return Promise.reject(e);
      }
    };

    _this.cleanup = function () {
      cleaningUp = true;
      var script = document.getElementById(_this.props.id);

      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }

      Array.prototype.slice.call(document.getElementsByTagName("script")).filter(function filter(script) {
        return script.src.includes("maps.googleapis");
      }).forEach(function forEach(script) {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
      Array.prototype.slice.call(document.getElementsByTagName("link")).filter(function filter(link) {
        return link.href === "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans";
      }).forEach(function forEach(link) {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
      Array.prototype.slice.call(document.getElementsByTagName("style")).filter(function filter(style) {
        return style.innerText !== undefined && style.innerText.length > 0 && style.innerText.includes(".gm-");
      }).forEach(function forEach(style) {
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      });
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name


    _this.injectScript = function () {
      if (_this.props.preventGoogleFontsLoading) {
        preventGoogleFonts();
      }

      !!!_this.props.id ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'LoadScript requires "id" prop to be a string: %s', _this.props.id) : undefined : void 0;
      var injectScriptOptions = {
        id: _this.props.id,
        url: makeLoadScriptUrl(_this.props)
      };
      injectScript(injectScriptOptions) // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name
      .then(function () {
        if (_this.props.onLoad) {
          _this.props.onLoad();
        }

        _this.setState(function setLoaded() {
          return {
            loaded: true
          };
        });
      }) // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name
      ["catch"](function (err) {
        if (_this.props.onError) {
          _this.props.onError(err);
        }

        console.error("\n          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (" + (_this.props.googleMapsApiKey || '-') + ") or Client ID (" + (_this.props.googleMapsClientId || '-') + ") to <LoadScript />\n          Otherwise it is a Network issue.\n        ");
      });
    };

    return _this;
  }

  var _proto = LoadScript.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (isBrowser) {
      // @ts-ignore
      if (window.google && !cleaningUp) {
        console.error("google api is already presented");
        return;
      }

      this.isCleaningUp().then(this.injectScript)["catch"](function err(err) {
        console.error("Error at injecting script after cleaning up: ", err);
      });
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.libraries !== prevProps.libraries) {
      console.warn('Performance warning! Loadscript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable ounside of component, or somwhere in config files or ENV variables');
    }

    if (isBrowser && prevProps.language !== this.props.language) {
      this.cleanup(); // TODO: refactor to use gDSFP maybe... wait for hooks refactoring.
      // eslint-disable-next-line react/no-did-update-set-state

      this.setState(function setLoaded() {
        return {
          loaded: false
        };
      }, this.cleanupCallback);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this2 = this;

    if (isBrowser) {
      this.cleanup(); // eslint-disable-next-line @getify/proper-arrows/this

      var timeoutCallback = function timeoutCallback() {
        if (!_this2.check.current) {
          //@ts-ignore
          delete window.google;
          cleaningUp = false;
        }
      };

      window.setTimeout(timeoutCallback, 1);

      if (this.props.onUnmount) {
        this.props.onUnmount();
      }
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      ref: this.check
    }), this.state.loaded ? this.props.children : this.props.loadingElement || Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DefaultLoadingElement, null));
  };

  return LoadScript;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

LoadScript.defaultProps = defaultLoadScriptProps;

/* eslint-disable filenames/match-regex */
var previouslyLoadedUrl;
function useLoadScript(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? defaultLoadScriptProps.id : _ref$id,
      _ref$version = _ref.version,
      version = _ref$version === void 0 ? defaultLoadScriptProps.version : _ref$version,
      googleMapsApiKey = _ref.googleMapsApiKey,
      googleMapsClientId = _ref.googleMapsClientId,
      language = _ref.language,
      region = _ref.region,
      libraries = _ref.libraries,
      preventGoogleFontsLoading = _ref.preventGoogleFontsLoading,
      channel = _ref.channel;
  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);

  var _React$useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLoaded = _React$useState[0],
      setLoaded = _React$useState[1];

  var _React$useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      loadError = _React$useState2[0],
      setLoadError = _React$useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function trackMountedState() {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function applyPreventGoogleFonts() {
    if (isBrowser && preventGoogleFontsLoading) {
      preventGoogleFonts();
    }
  }, [preventGoogleFontsLoading]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function validateLoadedState() {
    if (isLoaded) {
      ! // @ts-ignore
      !!window.google ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "useLoadScript was marked as loaded, but window.google is not present. Something went wrong.") : undefined : void 0;
    }
  }, [isLoaded]);
  var url = makeLoadScriptUrl({
    version: version,
    googleMapsApiKey: googleMapsApiKey,
    googleMapsClientId: googleMapsClientId,
    language: language,
    region: region,
    libraries: libraries,
    channel: channel
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function loadScriptAndModifyLoadedState() {
    if (!isBrowser) {
      return;
    }

    function setLoadedIfMounted() {
      if (isMounted.current) {
        setLoaded(true);
        previouslyLoadedUrl = url;
      }
    }

    if (window.google && previouslyLoadedUrl === url) {
      setLoadedIfMounted();
      return;
    }

    injectScript({
      id: id,
      url: url
    }).then(setLoadedIfMounted)["catch"](function handleInjectError(err) {
      if (isMounted.current) {
        setLoadError(err);
      }

      console.warn("\n        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (" + (googleMapsApiKey || '-') + ") or Client ID (" + (googleMapsClientId || '-') + ")\n        Otherwise it is a Network issue.\n      ");
      console.error(err);
    });
  }, [id, url]);
  var prevLibraries = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function checkPerformance() {
    if (prevLibraries.current && libraries !== prevLibraries.current) {
      console.warn('Performance warning! Loadscript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
    }

    prevLibraries.current = libraries;
  }, [libraries]);
  return {
    isLoaded: isLoaded,
    loadError: loadError,
    url: url
  };
}

var defaultLoadingElement =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DefaultLoadingElement, null);

function LoadScriptNext(_ref) {
  var loadingElement = _ref.loadingElement,
      onLoad = _ref.onLoad,
      onError = _ref.onError,
      onUnmount = _ref.onUnmount,
      children = _ref.children,
      hookOptions = _objectWithoutPropertiesLoose(_ref, ["loadingElement", "onLoad", "onError", "onUnmount", "children"]);

  var _useLoadScript = useLoadScript(hookOptions),
      isLoaded = _useLoadScript.isLoaded,
      loadError = _useLoadScript.loadError;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function handleOnLoad() {
    if (isLoaded && typeof onLoad === "function") {
      onLoad();
    }
  }, [isLoaded, onLoad]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function handleOnError() {
    if (loadError && typeof onError === "function") {
      onError(loadError);
    }
  }, [loadError, onError]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function handleOnUnmount() {
    return function () {
      if (onUnmount) {
        onUnmount();
      }
    };
  }, [onUnmount]);
  return isLoaded ? children : loadingElement || defaultLoadingElement;
}

var LoadScriptNext$1 = /*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(LoadScriptNext);

var eventMap$1 = {};
var updaterMap$1 = {
  options: function options(instance, _options) {
    instance.setOptions(_options);
  }
};
var TrafficLayer =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(TrafficLayer, _PureComponent);

  function TrafficLayer() {
    var _this;

    _this = _PureComponent.apply(this, arguments) || this;
    _this.state = {
      trafficLayer: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setTrafficLayerCallback = function () {
      if (_this.state.trafficLayer !== null) {
        if (_this.props.onLoad) {
          // @ts-ignore
          _this.props.onLoad(_this.state.trafficLayer);
        }
      }
    };

    _this.registeredEvents = [];
    return _this;
  }

  var _proto = TrafficLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var trafficLayer = new google.maps.TrafficLayer(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$1,
      eventMap: eventMap$1,
      prevProps: {},
      nextProps: this.props,
      instance: trafficLayer
    });

    function setTrafficlayer() {
      return {
        trafficLayer: trafficLayer
      };
    }

    this.setState(setTrafficlayer, this.setTrafficLayerCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.trafficLayer !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$1,
        eventMap: eventMap$1,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.trafficLayer
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.trafficLayer !== null) {
      if (this.props.onUnmount) {
        // @ts-ignore
        this.props.onUnmount(this.state.trafficLayer);
      }

      unregisterEvents(this.registeredEvents); // @ts-ignore

      this.state.trafficLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return TrafficLayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
TrafficLayer.contextType = MapContext;

var BicyclingLayer =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(BicyclingLayer, _React$PureComponent);

  function BicyclingLayer() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      bicyclingLayer: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setBicyclingLayerCallback = function () {
      if (_this.state.bicyclingLayer !== null) {
        // TODO: how is this possibly null if we're doing a null check
        // @ts-ignore
        _this.state.bicyclingLayer.setMap(_this.context);

        if (_this.props.onLoad) {
          //@ts-ignore
          _this.props.onLoad(_this.state.bicyclingLayer);
        }
      }
    };

    return _this;
  }

  var _proto = BicyclingLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var bicyclingLayer = new google.maps.BicyclingLayer();

    function setBicyclingLayer() {
      return {
        bicyclingLayer: bicyclingLayer
      };
    }

    this.setState(setBicyclingLayer, this.setBicyclingLayerCallback);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.bicyclingLayer !== null) {
      if (this.props.onUnmount) {
        // @ts-ignore
        this.props.onUnmount(this.state.bicyclingLayer);
      } // @ts-ignore


      this.state.bicyclingLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return BicyclingLayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
BicyclingLayer.contextType = MapContext;

var TransitLayer =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(TransitLayer, _React$PureComponent);

  function TransitLayer() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      transitLayer: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setTransitLayerCallback = function () {
      if (_this.state.transitLayer !== null) {
        // TODO: how is this possibly null if we're doing a null check
        // @ts-ignore
        _this.state.transitLayer.setMap(_this.context);

        if (_this.props.onLoad) {
          //@ts-ignore
          _this.props.onLoad(_this.state.transitLayer);
        }
      }
    };

    return _this;
  }

  var _proto = TransitLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var transitLayer = new google.maps.TransitLayer();

    function setTransitLayer() {
      return {
        transitLayer: transitLayer
      };
    }

    this.setState(setTransitLayer, this.setTransitLayerCallback);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.transitLayer !== null) {
      if (this.props.onUnmount) {
        // @ts-ignore
        this.props.onUnmount(this.state.transitLayer);
      } // @ts-ignore


      this.state.transitLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return TransitLayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
TransitLayer.contextType = MapContext;

var eventMap$2 = {
  onCircleComplete: "circlecomplete",
  onMarkerComplete: "markercomplete",
  onOverlayComplete: "overlaycomplete",
  onPolygonComplete: "polygoncomplete",
  onPolylineComplete: "polylinecomplete",
  onRectangleComplete: "rectanglecomplete"
};
var updaterMap$2 = {
  drawingMode: function drawingMode(instance, _drawingMode) {
    instance.setDrawingMode(_drawingMode);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  }
};
var DrawingManager =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(DrawingManager, _React$PureComponent);

  function DrawingManager(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    _this.registeredEvents = [];
    _this.state = {
      drawingManager: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setDrawingManagerCallback = function () {
      if (_this.state.drawingManager !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.drawingManager);
      }
    };

    !!!google.maps.drawing ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing) : undefined : void 0;
    return _this;
  }

  var _proto = DrawingManager.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var drawingManager = new google.maps.drawing.DrawingManager(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$2,
      eventMap: eventMap$2,
      prevProps: {},
      nextProps: this.props,
      instance: drawingManager
    });

    function setDrawingManager() {
      return {
        drawingManager: drawingManager
      };
    }

    this.setState(setDrawingManager, this.setDrawingManagerCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.drawingManager !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$2,
        eventMap: eventMap$2,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.drawingManager
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.drawingManager !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.drawingManager);
      }

      unregisterEvents(this.registeredEvents);
      this.state.drawingManager.setMap(null);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return DrawingManager;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
DrawingManager.contextType = MapContext;

var eventMap$3 = {
  onAnimationChanged: "animation_changed",
  onClick: "click",
  onClickableChanged: "clickable_changed",
  onCursorChanged: "cursor_changed",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDraggableChanged: "draggable_changed",
  onDragStart: "dragstart",
  onFlatChanged: "flat_changed",
  onIconChanged: "icon_changed",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onPositionChanged: "position_changed",
  onRightClick: "rightclick",
  onShapeChanged: "shape_changed",
  onTitleChanged: "title_changed",
  onVisibleChanged: "visible_changed",
  onZindexChanged: "zindex_changed"
};
var updaterMap$3 = {
  animation: function animation(instance, _animation) {
    instance.setAnimation(_animation);
  },
  clickable: function clickable(instance, _clickable) {
    instance.setClickable(_clickable);
  },
  cursor: function cursor(instance, _cursor) {
    instance.setCursor(_cursor);
  },
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  icon: function icon(instance, _icon) {
    instance.setIcon(_icon);
  },
  label: function label(instance, _label) {
    instance.setLabel(_label);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  opacity: function opacity(instance, _opacity) {
    instance.setOpacity(_opacity);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  position: function position(instance, _position) {
    instance.setPosition(_position);
  },
  shape: function shape(instance, _shape) {
    instance.setShape(_shape);
  },
  title: function title(instance, _title) {
    instance.setTitle(_title);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex);
  }
};
var Marker =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Marker, _React$PureComponent);

  function Marker() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      marker: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setMarkerCallback = function () {
      if (_this.state.marker !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.marker);
      }
    };

    return _this;
  }

  var _proto = Marker.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var markerOptions = _extends({}, this.props.options || {}, {}, this.props.clusterer ? {} : {
      map: this.context
    }, {
      position: this.props.position
    });

    var marker = new google.maps.Marker(markerOptions);

    if (this.props.clusterer) {
      this.props.clusterer.addMarker( // @ts-ignore
      marker, !!this.props.noClustererRedraw);
    } else {
      marker.setMap(this.context);
    }

    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$3,
      eventMap: eventMap$3,
      prevProps: {},
      nextProps: this.props,
      instance: marker
    });

    function setMarker() {
      return {
        marker: marker
      };
    }

    this.setState(setMarker, this.setMarkerCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.marker !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$3,
        eventMap: eventMap$3,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.marker
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.marker !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.marker);
      }

      unregisterEvents(this.registeredEvents);

      if (this.props.clusterer) {
        this.props.clusterer.removeMarker( // @ts-ignore
        this.state.marker, !!this.props.noClustererRedraw);
      } else {
        this.state.marker && this.state.marker.setMap(null);
      }
    }
  };

  _proto.render = function render() {
    return this.props.children || null;
  };

  return Marker;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Marker.contextType = MapContext;

var eventMap$4 = {
  onClick: "click",
  onClusteringBegin: "clusteringbegin",
  onClusteringEnd: "clusteringend",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover"
};
var updaterMap$4 = {
  averageCenter: function averageCenter(instance, _averageCenter) {
    instance.setAverageCenter(_averageCenter);
  },
  batchSizeIE: function batchSizeIE(instance, _batchSizeIE) {
    instance.setBatchSizeIE(_batchSizeIE);
  },
  calculator: function calculator(instance, _calculator) {
    instance.setCalculator(_calculator);
  },
  clusterClass: function clusterClass(instance, _clusterClass) {
    instance.setClusterClass(_clusterClass);
  },
  enableRetinaIcons: function enableRetinaIcons(instance, _enableRetinaIcons) {
    instance.setEnableRetinaIcons(_enableRetinaIcons);
  },
  gridSize: function gridSize(instance, _gridSize) {
    instance.setGridSize(_gridSize);
  },
  ignoreHidden: function ignoreHidden(instance, _ignoreHidden) {
    instance.setIgnoreHidden(_ignoreHidden);
  },
  imageExtension: function imageExtension(instance, _imageExtension) {
    instance.setImageExtension(_imageExtension);
  },
  imagePath: function imagePath(instance, _imagePath) {
    instance.setImagePath(_imagePath);
  },
  imageSizes: function imageSizes(instance, _imageSizes) {
    instance.setImageSizes(_imageSizes);
  },
  maxZoom: function maxZoom(instance, _maxZoom) {
    instance.setMaxZoom(_maxZoom);
  },
  minimumClusterSize: function minimumClusterSize(instance, _minimumClusterSize) {
    instance.setMinimumClusterSize(_minimumClusterSize);
  },
  styles: function styles(instance, _styles) {
    instance.setStyles(_styles);
  },
  title: function title(instance, _title) {
    instance.setTitle(_title);
  },
  zoomOnClick: function zoomOnClick(instance, _zoomOnClick) {
    instance.setZoomOnClick(_zoomOnClick);
  }
};
var ClustererComponent =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ClustererComponent, _React$PureComponent);

  function ClustererComponent() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      markerClusterer: null
    };

    _this.setClustererCallback = function () {
      if (_this.state.markerClusterer !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.markerClusterer);
      }
    };

    return _this;
  }

  var _proto = ClustererComponent.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.context) {
      var markerClusterer = new _react_google_maps_marker_clusterer__WEBPACK_IMPORTED_MODULE_2__["Clusterer"](this.context, [], this.props.options);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$4,
        eventMap: eventMap$4,
        prevProps: {},
        nextProps: this.props,
        instance: markerClusterer
      });
      this.setState(function setClusterer() {
        return {
          markerClusterer: markerClusterer
        };
      }, this.setClustererCallback);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.markerClusterer) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$4,
        eventMap: eventMap$4,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.markerClusterer
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.markerClusterer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.markerClusterer);
      }

      unregisterEvents(this.registeredEvents); //@ts-ignore

      this.state.markerClusterer.setMap(null);
    }
  };

  _proto.render = function render() {
    return this.state.markerClusterer !== null ? this.props.children(this.state.markerClusterer) : null;
  };

  return ClustererComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
ClustererComponent.contextType = MapContext;

var eventMap$5 = {
  onCloseClick: "closeclick",
  onContentChanged: "content_changed",
  onDomReady: "domready",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed"
};
var updaterMap$5 = {
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  position: function position(instance, _position) {
    if (_position instanceof google.maps.LatLng) {
      instance.setPosition(_position);
    } else {
      instance.setPosition(new google.maps.LatLng(_position.lat, _position.lng));
    }
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex);
  }
};
var InfoBoxComponent =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(InfoBoxComponent, _React$PureComponent);

  function InfoBoxComponent() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.containerElement = null;
    _this.state = {
      infoBox: null
    };

    _this.open = function (infoBox, anchor) {
      if (anchor) {
        infoBox.open(_this.context, anchor);
      } else if (infoBox.getPosition()) {
        infoBox.open(_this.context);
      } else {
          true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "You must provide either an anchor or a position prop for <InfoBox>.") : undefined ;
      }
    };

    _this.setInfoBoxCallback = function () {
      var _this$props = _this.props,
          anchor = _this$props.anchor,
          onLoad = _this$props.onLoad;
      var infoBox = _this.state.infoBox;

      if (infoBox !== null && _this.containerElement !== null) {
        infoBox.setContent(_this.containerElement);

        _this.open(infoBox, anchor);

        if (onLoad) {
          onLoad(infoBox);
        }
      }
    };

    return _this;
  }

  var _proto = InfoBoxComponent.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var options = this.props.options;

    var _ref = options || {},
        position = _ref.position,
        infoBoxOptions = _objectWithoutPropertiesLoose(_ref, ["position"]);

    var positionLatLng;

    if (position && !(position instanceof google.maps.LatLng)) {
      positionLatLng = new google.maps.LatLng(position.lat, position.lng);
    }

    var infoBox = new _react_google_maps_infobox__WEBPACK_IMPORTED_MODULE_4__["InfoBox"](_extends({}, infoBoxOptions, {}, positionLatLng ? {
      position: positionLatLng
    } : {}));
    this.containerElement = document.createElement('div');
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$5,
      eventMap: eventMap$5,
      prevProps: {},
      nextProps: this.props,
      instance: infoBox
    });
    this.setState({
      infoBox: infoBox
    }, this.setInfoBoxCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var infoBox = this.state.infoBox;

    if (infoBox !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$5,
        eventMap: eventMap$5,
        prevProps: prevProps,
        nextProps: this.props,
        instance: infoBox
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var onUnmount = this.props.onUnmount;
    var infoBox = this.state.infoBox;

    if (infoBox !== null) {
      if (onUnmount) {
        onUnmount(infoBox);
      }

      unregisterEvents(this.registeredEvents);
      infoBox.close();
    }
  };

  _proto.render = function render() {
    if (!this.containerElement) {
      return null;
    }

    return Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["createPortal"])(react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(this.props.children), this.containerElement);
  };

  return InfoBoxComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
InfoBoxComponent.contextType = MapContext;

var eventMap$6 = {
  onCloseClick: "closeclick",
  onContentChanged: "content_changed",
  onDomReady: "domready",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed"
};
var updaterMap$6 = {
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  position: function position(instance, _position) {
    instance.setPosition(_position);
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex);
  }
};
var InfoWindow =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(InfoWindow, _React$PureComponent);

  function InfoWindow() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.containerElement = null;
    _this.state = {
      infoWindow: null
    };

    _this.open = function (infoWindow, anchor) {
      if (anchor) {
        infoWindow.open(_this.context, anchor);
      } else if (infoWindow.getPosition()) {
        infoWindow.open(_this.context);
      } else {
          true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.") : undefined ;
      }
    };

    _this.setInfowindowCallback = function () {
      if (_this.state.infoWindow !== null && _this.containerElement !== null) {
        _this.state.infoWindow.setContent(_this.containerElement);

        _this.open(_this.state.infoWindow, _this.props.anchor);

        if (_this.props.onLoad) {
          _this.props.onLoad(_this.state.infoWindow);
        }
      }
    };

    return _this;
  }

  var _proto = InfoWindow.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var infoWindow = new google.maps.InfoWindow(_extends({}, this.props.options || {}));
    this.containerElement = document.createElement("div");
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$6,
      eventMap: eventMap$6,
      prevProps: {},
      nextProps: this.props,
      instance: infoWindow
    });

    function setInfoWindow() {
      return {
        infoWindow: infoWindow
      };
    }

    this.setState(setInfoWindow, this.setInfowindowCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.infoWindow !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$6,
        eventMap: eventMap$6,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.infoWindow
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.infoWindow !== null) {
      unregisterEvents(this.registeredEvents);
      this.state.infoWindow.close();
    }
  };

  _proto.render = function render() {
    return this.containerElement ? Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["createPortal"])(react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(this.props.children), this.containerElement) : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return InfoWindow;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
InfoWindow.contextType = MapContext;

var eventMap$7 = {
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
};
var updaterMap$7 = {
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  path: function path(instance, _path) {
    instance.setPath(_path);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  }
};
var Polyline =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Polyline, _React$PureComponent);

  function Polyline() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      polyline: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setPolylineCallback = function () {
      if (_this.state.polyline !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.polyline);
      }
    };

    return _this;
  }

  var _proto = Polyline.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var polyline = new google.maps.Polyline(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$7,
      eventMap: eventMap$7,
      prevProps: {},
      nextProps: this.props,
      instance: polyline
    });

    function setPolyline() {
      return {
        polyline: polyline
      };
    }

    this.setState(setPolyline, this.setPolylineCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.polyline !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$7,
        eventMap: eventMap$7,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.polyline
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.polyline !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.polyline);
      }

      unregisterEvents(this.registeredEvents);
      this.state.polyline.setMap(null);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return Polyline;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Polyline.contextType = MapContext;

var eventMap$8 = {
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
};
var updaterMap$8 = {
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  path: function path(instance, _path) {
    instance.setPath(_path);
  },
  paths: function paths(instance, _paths) {
    instance.setPaths(_paths);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  }
};
var Polygon =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Polygon, _React$PureComponent);

  function Polygon() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      polygon: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setPolygonCallback = function () {
      if (_this.state.polygon !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.polygon);
      }
    };

    _this.render = function () {
      return null;
    };

    return _this;
  }

  var _proto = Polygon.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var polygon = new google.maps.Polygon(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$8,
      eventMap: eventMap$8,
      prevProps: {},
      nextProps: this.props,
      instance: polygon
    });

    function setPolygon() {
      return {
        polygon: polygon
      };
    }

    this.setState(setPolygon, this.setPolygonCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.polygon !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$8,
        eventMap: eventMap$8,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.polygon
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.polygon !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.polygon);
      }

      unregisterEvents(this.registeredEvents);
      this.state.polygon && this.state.polygon.setMap(null);
    }
  };

  return Polygon;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Polygon.contextType = MapContext;

var eventMap$9 = {
  onBoundsChanged: "bounds_changed",
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
};
var updaterMap$9 = {
  bounds: function bounds(instance, _bounds) {
    instance.setBounds(_bounds);
  },
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  }
};
var Rectangle =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Rectangle, _React$PureComponent);

  function Rectangle() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      rectangle: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setRectangleCallback = function () {
      if (_this.state.rectangle !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.rectangle);
      }
    };

    return _this;
  }

  var _proto = Rectangle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var rectangle = new google.maps.Rectangle(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$9,
      eventMap: eventMap$9,
      prevProps: {},
      nextProps: this.props,
      instance: rectangle
    });

    function setRectangle() {
      return {
        rectangle: rectangle
      };
    }

    this.setState(setRectangle, this.setRectangleCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.rectangle !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$9,
        eventMap: eventMap$9,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.rectangle
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.rectangle !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.rectangle);
      }

      unregisterEvents(this.registeredEvents);
      this.state.rectangle.setMap(null);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return Rectangle;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Rectangle.contextType = MapContext;

var eventMap$a = {
  onCenterChanged: "center_changed",
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRadiusChanged: "radius_changed",
  onRightClick: "rightclick"
};
var updaterMap$a = {
  center: function center(instance, _center) {
    instance.setCenter(_center);
  },
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  radius: function radius(instance, _radius) {
    instance.setRadius(_radius);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  }
};
var Circle =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Circle, _React$PureComponent);

  function Circle() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      circle: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setCircleCallback = function () {
      if (_this.state.circle !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.circle);
      }
    };

    return _this;
  }

  var _proto = Circle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var circle = new google.maps.Circle(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$a,
      eventMap: eventMap$a,
      prevProps: {},
      nextProps: this.props,
      instance: circle
    });

    function setCircle() {
      return {
        circle: circle
      };
    }

    this.setState(setCircle, this.setCircleCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.circle !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$a,
        eventMap: eventMap$a,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.circle
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.circle !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.circle);
      }

      unregisterEvents(this.registeredEvents);
      this.state.circle && this.state.circle.setMap(null);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return Circle;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Circle.contextType = MapContext;

var eventMap$b = {
  onAddFeature: "addfeature",
  onClick: "click",
  onDblClick: "dblclick",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRemoveFeature: "removefeature",
  onRemoveProperty: "removeproperty",
  onRightClick: "rightclick",
  onSetGeometry: "setgeometry",
  onSetProperty: "setproperty"
};
var updaterMap$b = {
  add: function add(instance, features) {
    instance.add(features);
  },
  addgeojson: function addgeojson(instance, geojson, options) {
    instance.addGeoJson(geojson, options);
  },
  contains: function contains(instance, feature) {
    instance.contains(feature);
  },
  foreach: function foreach(instance, callback) {
    instance.forEach(callback);
  },
  loadgeojson: function loadgeojson(instance, url, options, callback) {
    instance.loadGeoJson(url, options, callback);
  },
  overridestyle: function overridestyle(instance, feature, style) {
    instance.overrideStyle(feature, style);
  },
  remove: function remove(instance, feature) {
    instance.remove(feature);
  },
  revertstyle: function revertstyle(instance, feature) {
    instance.revertStyle(feature);
  },
  controlposition: function controlposition(instance, controlPosition // TODO: ???
  ) {
    instance.setControlPosition(controlPosition);
  },
  controls: function controls(instance, _controls) {
    instance.setControls(_controls);
  },
  drawingmode: function drawingmode(instance, mode) {
    instance.setDrawingMode(mode);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  style: function style(instance, _style) {
    instance.setStyle(_style);
  },
  togeojson: function togeojson(instance, callback) {
    instance.toGeoJson(callback);
  }
};
var Data =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Data, _React$PureComponent);

  function Data() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      data: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setDataCallback = function () {
      if (_this.state.data !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.data);
      }
    };

    return _this;
  }

  var _proto = Data.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var data = new google.maps.Data(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$b,
      eventMap: eventMap$b,
      prevProps: {},
      nextProps: this.props,
      instance: data
    });

    function setData() {
      return {
        data: data
      };
    }

    this.setState(setData, this.setDataCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.data !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$b,
        eventMap: eventMap$b,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.data
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.data !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.data);
      }

      unregisterEvents(this.registeredEvents);

      if (this.state.data) {
        this.state.data.setMap(null);
      }
    }
  };

  _proto.render = function render() {
    return null;
  };

  return Data;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Data.contextType = MapContext;

var eventMap$c = {
  onClick: "click",
  onDefaultViewportChanged: "defaultviewport_changed",
  onStatusChanged: "status_changed"
};
var updaterMap$c = {
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  url: function url(instance, _url) {
    instance.setUrl(_url);
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex);
  }
};
var KmlLayer =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(KmlLayer, _PureComponent);

  function KmlLayer() {
    var _this;

    _this = _PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      kmlLayer: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setKmlLayerCallback = function () {
      if (_this.state.kmlLayer !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.kmlLayer);
      }
    };

    return _this;
  }

  var _proto = KmlLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var kmlLayer = new google.maps.KmlLayer(_extends({}, this.props.options, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$c,
      eventMap: eventMap$c,
      prevProps: {},
      nextProps: this.props,
      instance: kmlLayer
    });

    function setLmlLayer() {
      return {
        kmlLayer: kmlLayer
      };
    }

    this.setState(setLmlLayer, this.setKmlLayerCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.kmlLayer !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$c,
        eventMap: eventMap$c,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.kmlLayer
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.kmlLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.kmlLayer);
      }

      unregisterEvents(this.registeredEvents);
      this.state.kmlLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return KmlLayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
KmlLayer.contextType = MapContext;

/* eslint-disable filenames/match-regex */
function getOffsetOverride(containerElement, getPixelPositionOffset) {
  return typeof getPixelPositionOffset === "function" ? getPixelPositionOffset(containerElement.offsetWidth, containerElement.offsetHeight) : {};
}

var createLatLng = function createLatLng(inst, Type) {
  return new Type(inst.lat, inst.lng);
};

var createLatLngBounds = function createLatLngBounds(inst, Type) {
  return new Type(new google.maps.LatLng(inst.ne.lat, inst.ne.lng), new google.maps.LatLng(inst.sw.lat, inst.sw.lng));
};

var ensureOfType = function ensureOfType(inst, type, factory) {
  return inst instanceof type ? inst : factory(inst, type);
};

var getLayoutStylesByBounds = function getLayoutStylesByBounds(mapCanvasProjection, offset, bounds) {
  var ne = mapCanvasProjection.fromLatLngToDivPixel(bounds.getNorthEast());
  var sw = mapCanvasProjection.fromLatLngToDivPixel(bounds.getSouthWest());

  if (ne && sw) {
    return {
      left: sw.x + offset.x + "px",
      top: ne.y + offset.y + "px",
      width: ne.x - sw.x - offset.x + "px",
      height: sw.y - ne.y - offset.y + "px"
    };
  }

  return {
    left: "-9999px",
    top: "-9999px"
  };
};

var getLayoutStylesByPosition = function getLayoutStylesByPosition(mapCanvasProjection, offset, position) {
  var point = mapCanvasProjection.fromLatLngToDivPixel(position);

  if (point) {
    var x = point.x,
        y = point.y;
    return {
      left: x + offset.x + "px",
      top: y + offset.y + "px"
    };
  }

  return {
    left: "-9999px",
    top: "-9999px"
  };
};

var getLayoutStyles = function getLayoutStyles(mapCanvasProjection, offset, bounds, // eslint-disable-next-line @getify/proper-arrows/params
position) {
  return bounds !== undefined ? getLayoutStylesByBounds(mapCanvasProjection, offset, ensureOfType(bounds, google.maps.LatLngBounds, createLatLngBounds)) : getLayoutStylesByPosition(mapCanvasProjection, offset, ensureOfType(position, google.maps.LatLng, createLatLng));
};

var ContentMountHandler =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ContentMountHandler, _React$Component);

  function ContentMountHandler() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ContentMountHandler.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onLoad) this.props.onLoad();
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return ContentMountHandler;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var OverlayView =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(OverlayView, _React$PureComponent);

  function OverlayView() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      overlayView: null
    };
    _this.containerElement = null; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setOverlayViewCallback = function () {
      if (_this.state.overlayView !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.overlayView);
      }

      _this.onPositionElement();
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name


    _this.onAdd = function () {
      _this.containerElement = document.createElement("div");
      _this.containerElement.style.position = "absolute";
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name


    _this.onPositionElement = function () {
      if (_this.state.overlayView !== null && _this.containerElement !== null) {
        var mapCanvasProjection = _this.state.overlayView.getProjection();

        var offset = _extends({
          x: 0,
          y: 0
        }, getOffsetOverride(_this.containerElement, _this.props.getPixelPositionOffset));

        var layoutStyles = getLayoutStyles(mapCanvasProjection, offset, _this.props.bounds, _this.props.position);
        Object.assign(_this.containerElement.style, layoutStyles);
      }
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name


    _this.draw = function () {
      !!!_this.props.mapPaneName ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "OverlayView requires props.mapPaneName but got %s", _this.props.mapPaneName) : undefined : void 0;
      var overlayView = _this.state.overlayView;

      if (overlayView === null) {
        return;
      } // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapPanes


      var mapPanes = overlayView.getPanes();

      if (!mapPanes) {
        return;
      }

      if (_this.containerElement) {
        mapPanes[_this.props.mapPaneName].appendChild(_this.containerElement);
      }

      _this.onPositionElement();

      _this.forceUpdate();
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name


    _this.onRemove = function () {
      if (_this.containerElement !== null && _this.containerElement.parentNode) {
        _this.containerElement.parentNode.removeChild(_this.containerElement);

        delete _this.containerElement;
      }
    };

    return _this;
  }

  var _proto2 = OverlayView.prototype;

  _proto2.componentDidMount = function componentDidMount() {
    var overlayView = new google.maps.OverlayView(); // You must implement three methods: onAdd(), draw(), and onRemove().

    overlayView.onAdd = this.onAdd;
    overlayView.draw = this.draw;
    overlayView.onRemove = this.onRemove;
    overlayView.setMap(this.context); // You must call setMap() with a valid Map object to trigger the call to
    // the onAdd() method and setMap(null) in order to trigger the onRemove() method.

    function setOverlayView() {
      return {
        overlayView: overlayView
      };
    }

    this.setState(setOverlayView);
  };

  _proto2.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    if (prevProps.position !== this.props.position || prevProps.bounds !== this.props.bounds) {
      setTimeout(function () {
        _this2.state.overlayView !== null && _this2.state.overlayView.draw();
      }, 0);
    }
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    if (this.state.overlayView !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.overlayView);
      }

      this.state.overlayView.setMap(null);
    }
  };

  _proto2.render = function render() {
    return this.containerElement !== null ? Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["createPortal"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ContentMountHandler, {
      onLoad: this.setOverlayViewCallback
    }, react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(this.props.children)), this.containerElement) : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return OverlayView;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
OverlayView.FLOAT_PANE = "floatPane";
OverlayView.MAP_PANE = "mapPane";
OverlayView.MARKER_LAYER = "markerLayer";
OverlayView.OVERLAY_LAYER = "overlayLayer";
OverlayView.OVERLAY_MOUSE_TARGET = "overlayMouseTarget";
OverlayView.contextType = MapContext;

var eventMap$d = {
  onDblClick: "dblclick",
  onClick: "click"
};
var updaterMap$d = {
  opacity: function opacity(instance, _opacity) {
    instance.setOpacity(_opacity);
  }
};
var GroundOverlay =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(GroundOverlay, _React$PureComponent);

  function GroundOverlay() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      groundOverlay: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setGroundOverlayCallback = function () {
      if (_this.state.groundOverlay !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.groundOverlay);
      }
    };

    return _this;
  }

  var _proto = GroundOverlay.prototype;

  _proto.componentDidMount = function componentDidMount() {
    !(!!this.props.url || !!this.props.bounds) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "For GroundOveray, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by `react-google-maps-api`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just `key={url}` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655") : undefined : void 0;
    var groundOverlay = new google.maps.GroundOverlay(this.props.url, this.props.bounds, _extends({}, this.props.options, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$d,
      eventMap: eventMap$d,
      prevProps: {},
      nextProps: this.props,
      instance: groundOverlay
    });

    function setGroundOverlay() {
      return {
        groundOverlay: groundOverlay
      };
    }

    this.setState(setGroundOverlay, this.setGroundOverlayCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.groundOverlay !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$d,
        eventMap: eventMap$d,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.groundOverlay
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.groundOverlay) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.groundOverlay);
      }

      this.state.groundOverlay.setMap(null);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return GroundOverlay;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
GroundOverlay.defaultProps = {
  onLoad: function onLoad() {}
};
GroundOverlay.contextType = MapContext;

var eventMap$e = {};
var updaterMap$e = {
  data: function data(instance, _data) {
    instance.setData(_data);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  }
};
var HeatmapLayer =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(HeatmapLayer, _React$PureComponent);

  function HeatmapLayer() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      heatmapLayer: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setHeatmapLayerCallback = function () {
      if (_this.state.heatmapLayer !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.heatmapLayer);
      }
    };

    return _this;
  }

  var _proto = HeatmapLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    !!!google.maps.visualization ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'Did you include prop libraries={["visualization"]} to <LoadScript />? %s', google.maps.visualization) : undefined : void 0;
    !!!this.props.data ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "data property is required in HeatmapLayer %s", this.props.data) : undefined : void 0;
    var heatmapLayer = new google.maps.visualization.HeatmapLayer(_extends({
      data: this.props.data
    }, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$e,
      eventMap: eventMap$e,
      prevProps: {},
      nextProps: this.props,
      instance: heatmapLayer
    });

    function setHeatmapLayer() {
      return {
        heatmapLayer: heatmapLayer
      };
    }

    this.setState(setHeatmapLayer, this.setHeatmapLayerCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    unregisterEvents(this.registeredEvents);
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$e,
      eventMap: eventMap$e,
      prevProps: prevProps,
      nextProps: this.props,
      instance: this.state.heatmapLayer
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.heatmapLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.heatmapLayer);
      }

      unregisterEvents(this.registeredEvents);
      this.state.heatmapLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return HeatmapLayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
HeatmapLayer.contextType = MapContext;

var eventMap$f = {
  onCloseClick: "closeclick",
  onPanoChanged: "pano_changed",
  onPositionChanged: "position_changed",
  onPovChanged: "pov_changed",
  onResize: "resize",
  onStatusChanged: "status_changed",
  onVisibleChanged: "visible_changed",
  onZoomChanged: "zoom_changed"
};
var updaterMap$f = {
  register: function register(instance, provider, options) {
    instance.registerPanoProvider(provider, options);
  },
  links: function links(instance, _links) {
    instance.setLinks(_links);
  },
  motionTracking: function motionTracking(instance, _motionTracking) {
    instance.setMotionTracking(_motionTracking);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  pano: function pano(instance, _pano) {
    instance.setPano(_pano);
  },
  position: function position(instance, _position) {
    instance.setPosition(_position);
  },
  pov: function pov(instance, _pov) {
    instance.setPov(_pov);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  },
  zoom: function zoom(instance, _zoom) {
    instance.setZoom(_zoom);
  }
};
var StreetViewPanorama =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(StreetViewPanorama, _React$PureComponent);

  function StreetViewPanorama() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      streetViewPanorama: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setStreetViewPanoramaCallback = function () {
      if (_this.state.streetViewPanorama !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.streetViewPanorama);
      }
    };

    return _this;
  }

  var _proto = StreetViewPanorama.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var streetViewPanorama = this.context.getStreetView();
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$f,
      eventMap: eventMap$f,
      prevProps: {},
      nextProps: this.props,
      instance: streetViewPanorama
    });

    function setStreetViewPanorama() {
      return {
        streetViewPanorama: streetViewPanorama
      };
    }

    this.setState(setStreetViewPanorama, this.setStreetViewPanoramaCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.streetViewPanorama !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$f,
        eventMap: eventMap$f,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.streetViewPanorama
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.streetViewPanorama !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.streetViewPanorama);
      }

      unregisterEvents(this.registeredEvents);
      this.state.streetViewPanorama.setVisible(false);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return StreetViewPanorama;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
StreetViewPanorama.contextType = MapContext;

var StreetViewService =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(StreetViewService, _React$PureComponent);

  function StreetViewService() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      streetViewService: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setStreetViewServiceCallback = function () {
      if (_this.state.streetViewService !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.streetViewService);
      }
    };

    return _this;
  }

  var _proto = StreetViewService.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var streetViewService = new google.maps.StreetViewService();

    function setStreetViewService() {
      return {
        streetViewService: streetViewService
      };
    }

    this.setState(setStreetViewService);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.streetViewService !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.streetViewService);
      }
    }
  };

  _proto.render = function render() {
    return null;
  };

  return StreetViewService;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
StreetViewService.contextType = MapContext;

var DirectionsService =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(DirectionsService, _React$PureComponent);

  function DirectionsService() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      directionsService: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setDirectionsServiceCallback = function () {
      if (_this.state.directionsService !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.directionsService);
      }
    };

    return _this;
  }

  var _proto = DirectionsService.prototype;

  _proto.componentDidMount = function componentDidMount() {
    !!!this.props.options ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "DirectionsService expected options object as parameter, but got %s", this.props.options) : undefined : void 0;
    var directionsService = new google.maps.DirectionsService();

    function setDirectionsService() {
      return {
        directionsService: directionsService
      };
    }

    this.setState(setDirectionsService, this.setDirectionsServiceCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.state.directionsService !== null) {
      this.state.directionsService.route(this.props.options, this.props.callback);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.directionsService !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.directionsService);
      }
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return DirectionsService;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var eventMap$g = {
  onDirectionsChanged: "directions_changed"
};
var updaterMap$g = {
  directions: function directions(instance, _directions) {
    instance.setDirections(_directions);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  panel: function panel(instance, _panel) {
    instance.setPanel(_panel);
  },
  routeIndex: function routeIndex(instance, _routeIndex) {
    instance.setRouteIndex(_routeIndex);
  }
};
var DirectionsRenderer =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(DirectionsRenderer, _React$PureComponent);

  function DirectionsRenderer() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      directionsRenderer: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setDirectionsRendererCallback = function () {
      if (_this.state.directionsRenderer !== null) {
        _this.state.directionsRenderer.setMap(_this.context);

        if (_this.props.onLoad) {
          _this.props.onLoad(_this.state.directionsRenderer);
        }
      }
    };

    return _this;
  }

  var _proto = DirectionsRenderer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var directionsRenderer = new google.maps.DirectionsRenderer(this.props.options);
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$g,
      eventMap: eventMap$g,
      prevProps: {},
      nextProps: this.props,
      instance: directionsRenderer
    });
    this.setState(function setDirectionsRenderer() {
      return {
        directionsRenderer: directionsRenderer
      };
    }, this.setDirectionsRendererCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.directionsRenderer !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$g,
        eventMap: eventMap$g,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.directionsRenderer
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.directionsRenderer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.directionsRenderer);
      }

      unregisterEvents(this.registeredEvents);

      if (this.state.directionsRenderer) {
        this.state.directionsRenderer.setMap(null);
      }
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return DirectionsRenderer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
DirectionsRenderer.contextType = MapContext;

var DistanceMatrixService =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(DistanceMatrixService, _React$PureComponent);

  function DistanceMatrixService() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      distanceMatrixService: null
    };

    _this.setDistanceMatrixServiceCallbak = function () {
      if (_this.state.distanceMatrixService !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.distanceMatrixService);
      }
    };

    return _this;
  }

  var _proto = DistanceMatrixService.prototype;

  _proto.componentDidMount = function componentDidMount() {
    !!!this.props.options ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'DistanceMatrixService expected options object as parameter, but go %s', this.props.options) : undefined : void 0;
    var distanceMatrixService = new google.maps.DistanceMatrixService();

    function setDistanceMatrixService() {
      return {
        distanceMatrixService: distanceMatrixService
      };
    }

    this.setState(setDistanceMatrixService, this.setDistanceMatrixServiceCallbak);
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.state.distanceMatrixService !== null) {
      this.state.distanceMatrixService.getDistanceMatrix(this.props.options, this.props.callback);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.distanceMatrixService !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.distanceMatrixService);
      }
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return DistanceMatrixService;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var eventMap$h = {
  onPlacesChanged: "places_changed"
};
var updaterMap$h = {
  bounds: function bounds(instance, _bounds) {
    instance.setBounds(_bounds);
  }
};

var StandaloneSearchBox =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(StandaloneSearchBox, _React$PureComponent);

  function StandaloneSearchBox() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.containerElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.state = {
      searchBox: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setSearchBoxCallback = function () {
      if (_this.state.searchBox !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.searchBox);
      }
    };

    return _this;
  }

  var _proto = StandaloneSearchBox.prototype;

  _proto.componentDidMount = function componentDidMount() {
    !!!google.maps.places ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places) : undefined : void 0;

    if (this.containerElement !== null && this.containerElement.current !== null) {
      var input = this.containerElement.current.querySelector("input");

      if (input) {
        var searchBox = new google.maps.places.SearchBox( // @ts-ignore
        input, this.props.options);
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
          updaterMap: updaterMap$h,
          eventMap: eventMap$h,
          prevProps: {},
          nextProps: this.props,
          instance: searchBox
        });
        this.setState(function setSearchBox() {
          return {
            searchBox: searchBox
          };
        }, this.setSearchBoxCallback);
      }
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.searchBox !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$h,
        eventMap: eventMap$h,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.searchBox
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.searchBox !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.searchBox);
      }

      unregisterEvents(this.registeredEvents);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      ref: this.containerElement
    }, react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(this.props.children));
  };

  return StandaloneSearchBox;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

StandaloneSearchBox.contextType = MapContext;

var eventMap$i = {
  onPlaceChanged: "place_changed"
};
var updaterMap$i = {
  bounds: function bounds(instance, _bounds) {
    instance.setBounds(_bounds);
  },
  restrictions: function restrictions(instance, _restrictions) {
    instance.setComponentRestrictions(_restrictions);
  },
  fields: function fields(instance, _fields) {
    instance.setFields(_fields);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  types: function types(instance, _types) {
    instance.setTypes(_types);
  }
};
var Autocomplete =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Autocomplete, _React$PureComponent);

  function Autocomplete() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.containerElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.state = {
      autocomplete: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setAutocompleteCallback = function () {
      if (_this.state.autocomplete !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.autocomplete);
      }
    };

    return _this;
  }

  var _proto = Autocomplete.prototype;

  _proto.componentDidMount = function componentDidMount() {
    !!!google.maps.places ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places) : undefined : void 0; // TODO: why is this possibly null
    // @ts-ignore

    var input = this.containerElement.current.querySelector("input");

    if (input) {
      var autocomplete = new google.maps.places.Autocomplete(input, this.props.options);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$i,
        eventMap: eventMap$i,
        prevProps: {},
        nextProps: this.props,
        instance: autocomplete
      });
      this.setState(function setAutocomplete() {
        return {
          autocomplete: autocomplete
        };
      }, this.setAutocompleteCallback);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    unregisterEvents(this.registeredEvents);
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$i,
      eventMap: eventMap$i,
      prevProps: prevProps,
      nextProps: this.props,
      instance: this.state.autocomplete
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.autocomplete !== null) {
      unregisterEvents(this.registeredEvents);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      ref: this.containerElement
    }, react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(this.props.children));
  };

  return Autocomplete;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Autocomplete.contextType = MapContext;




/***/ }),

/***/ "./node_modules/@react-google-maps/infobox/dist/infobox.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@react-google-maps/infobox/dist/infobox.esm.js ***!
  \*********************************************************************/
/*! exports provided: InfoBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBox", function() { return InfoBox; });
var InfoBox =
/*#__PURE__*/
function () {
  function InfoBox(options) {
    if (options === void 0) {
      options = {};
    }

    this.extend(InfoBox, google.maps.OverlayView); // Standard options (in common with google.maps.InfoWindow):

    this.content = options.content || "";
    this.disableAutoPan = options.disableAutoPan || false;
    this.maxWidth = options.maxWidth || 0;
    this.pixelOffset = options.pixelOffset || new google.maps.Size(0, 0);
    this.position = options.position || new google.maps.LatLng(0, 0);
    this.zIndex = options.zIndex || null; // Additional options (unique to InfoBox):

    this.boxClass = options.boxClass || "infoBox";
    this.boxStyle = options.boxStyle || {};
    this.closeBoxMargin = options.closeBoxMargin || "2px";
    this.closeBoxURL = options.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif";

    if (options.closeBoxURL === "") {
      this.closeBoxURL = "";
    }

    this.infoBoxClearance = options.infoBoxClearance || new google.maps.Size(1, 1);

    if (typeof options.visible === "undefined") {
      if (typeof options.isHidden === "undefined") {
        options.visible = true;
      } else {
        options.visible = !options.isHidden;
      }
    }

    this.isHidden = !options.visible;
    this.alignBottom = options.alignBottom || false;
    this.pane = options.pane || "floatPane";
    this.enableEventPropagation = options.enableEventPropagation || false;
    this.div = null;
    this.closeListener = null;
    this.moveListener = null;
    this.mapListener = null;
    this.contextListener = null;
    this.eventListeners = null;
    this.fixedWidthSet = null;
  }

  var _proto = InfoBox.prototype;

  _proto.createInfoBoxDiv = function createInfoBoxDiv() {
    var _this = this;

    // This handler prevents an event in the InfoBox from being passed on to the map.
    function cancelHandler(event) {
      event.cancelBubble = true;

      if (event.stopPropagation) {
        event.stopPropagation();
      }
    } // This handler ignores the current event in the InfoBox and conditionally prevents
    // the event from being passed on to the map. It is used for the contextmenu event.
    // eslint-disable-next-line  @getify/proper-arrows/this


    var ignoreHandler = function ignoreHandler(event) {
      event.returnValue = false;

      if (event.preventDefault) {
        event.preventDefault();
      }

      if (!_this.enableEventPropagation) {
        cancelHandler(event);
      }
    };

    if (!this.div) {
      this.div = document.createElement("div");
      this.setBoxStyle();

      if (typeof this.content === "string") {
        this.div.innerHTML = this.getCloseBoxImg() + this.content;
      } else {
        this.div.innerHTML = this.getCloseBoxImg();
        this.div.appendChild(this.content);
      } // @ts-ignore


      var panes = this.getPanes();
      panes[this.pane].appendChild(this.div); // Add the InfoBox div to the DOM

      this.addClickHandler();

      if (this.div.style.width) {
        this.fixedWidthSet = true;
      } else {
        if (this.maxWidth !== 0 && this.div.offsetWidth > this.maxWidth) {
          this.div.style.width = this.maxWidth + "px";
          this.fixedWidthSet = true;
        } else {
          // The following code is needed to overcome problems with MSIE
          var bw = this.getBoxWidths();
          this.div.style.width = this.div.offsetWidth - bw.left - bw.right + "px";
          this.fixedWidthSet = false;
        }
      }

      this.panBox(this.disableAutoPan);

      if (!this.enableEventPropagation) {
        this.eventListeners = []; // Cancel event propagation.
        // Note: mousemove not included (to resolve Issue 152)

        var events = ["mousedown", "mouseover", "mouseout", "mouseup", "click", "dblclick", "touchstart", "touchend", "touchmove"];

        for (var i = 0; i < events.length; i++) {
          this.eventListeners.push(google.maps.event.addDomListener(this.div, events[i], cancelHandler));
        } // Workaround for Google bug that causes the cursor to change to a pointer
        // when the mouse moves over a marker underneath InfoBox.


        this.eventListeners.push(google.maps.event.addDomListener(this.div, "mouseover", // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
        function () {
          if (_this.div) {
            _this.div.style.cursor = "default";
          }
        }));
      }

      this.contextListener = google.maps.event.addDomListener(this.div, "contextmenu", ignoreHandler);
      /**
       * This event is fired when the DIV containing the InfoBox's content is attached to the DOM.
       * @name InfoBox#domready
       * @event
       */

      google.maps.event.trigger(this, "domready");
    }
  };

  _proto.getCloseBoxImg = function getCloseBoxImg() {
    var img = "";

    if (this.closeBoxURL !== "") {
      img = "<img";
      img += " src='" + this.closeBoxURL + "'";
      img += " align=right"; // Do this because Opera chokes on style='float: right;'

      img += " style='";
      img += " position: relative;"; // Required by MSIE

      img += " cursor: pointer;";
      img += " margin: " + this.closeBoxMargin + ";";
      img += "'>";
    }

    return img;
  };

  _proto.addClickHandler = function addClickHandler() {
    if (this.div && this.div.firstChild && this.closeBoxURL !== "") {
      var closeBox = this.div.firstChild;
      this.closeListener = google.maps.event.addDomListener(closeBox, "click", this.getCloseClickHandler());
    } else {
      this.closeListener = null;
    }
  };

  _proto.getCloseClickHandler = function getCloseClickHandler() {
    var _this2 = this;

    // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
    return function (event) {
      // 1.0.3 fix: Always prevent propagation of a close box click to the map:
      event.cancelBubble = true;

      if (event.stopPropagation) {
        event.stopPropagation();
      }
      /**
       * This event is fired when the InfoBox's close box is clicked.
       * @name InfoBox#closeclick
       * @event
       */


      google.maps.event.trigger(_this2, "closeclick");

      _this2.close();
    };
  };

  _proto.panBox = function panBox(disablePan) {
    if (this.div && !disablePan) {
      // @ts-ignore
      var map = this.getMap(); // Only pan if attached to map, not panorama

      if (map instanceof google.maps.Map) {
        var xOffset = 0;
        var yOffset = 0;
        var bounds = map.getBounds();

        if (bounds && !bounds.contains(this.position)) {
          // Marker not in visible area of map, so set center
          // of map to the marker position first.
          map.setCenter(this.position);
        }

        var mapDiv = map.getDiv(); // @ts-ignore

        var mapWidth = mapDiv.offsetWidth; // @ts-ignore

        var mapHeight = mapDiv.offsetHeight;
        var iwOffsetX = this.pixelOffset.width;
        var iwOffsetY = this.pixelOffset.height;
        var iwWidth = this.div.offsetWidth;
        var iwHeight = this.div.offsetHeight;
        var padX = this.infoBoxClearance.width;
        var padY = this.infoBoxClearance.height; // @ts-ignore

        var projection = this.getProjection();
        var pixPosition = projection.fromLatLngToContainerPixel(this.position);

        if (pixPosition.x < -iwOffsetX + padX) {
          xOffset = pixPosition.x + iwOffsetX - padX;
        } else if (pixPosition.x + iwWidth + iwOffsetX + padX > mapWidth) {
          xOffset = pixPosition.x + iwWidth + iwOffsetX + padX - mapWidth;
        }

        if (this.alignBottom) {
          if (pixPosition.y < -iwOffsetY + padY + iwHeight) {
            yOffset = pixPosition.y + iwOffsetY - padY - iwHeight;
          } else if (pixPosition.y + iwOffsetY + padY > mapHeight) {
            yOffset = pixPosition.y + iwOffsetY + padY - mapHeight;
          }
        } else {
          if (pixPosition.y < -iwOffsetY + padY) {
            yOffset = pixPosition.y + iwOffsetY - padY;
          } else if (pixPosition.y + iwHeight + iwOffsetY + padY > mapHeight) {
            yOffset = pixPosition.y + iwHeight + iwOffsetY + padY - mapHeight;
          }
        }

        if (!(xOffset === 0 && yOffset === 0)) {
          // Move the map to the shifted center.
          map.panBy(xOffset, yOffset);
        }
      }
    }
  };

  _proto.setBoxStyle = function setBoxStyle() {
    if (this.div) {
      // Apply style values from the style sheet defined in the boxClass parameter:
      this.div.className = this.boxClass; // Clear existing inline style values:

      this.div.style.cssText = ""; // Apply style values defined in the boxStyle parameter:

      var boxStyle = this.boxStyle;

      for (var i in boxStyle) {
        if (boxStyle.hasOwnProperty(i)) {
          // @ts-ignore
          this.div.style[i] = boxStyle[i];
        }
      } // Fix for iOS disappearing InfoBox problem
      // See http://stackoverflow.com/questions/9229535/google-maps-markers-disappear-at-certain-zoom-level-only-on-iphone-ipad


      this.div.style.webkitTransform = "translateZ(0)"; // Fix up opacity style for benefit of MSIE

      if (typeof this.div.style.opacity !== "undefined" && this.div.style.opacity !== "") {
        // See http://www.quirksmode.org/css/opacity.html
        var opacity = parseFloat(this.div.style.opacity || ''); // @ts-ignore

        this.div.style.msFilter = "\"progid:DXImageTransform.Microsoft.Alpha(Opacity=" + opacity * 100 + ")\"";
        this.div.style.filter = "alpha(opacity=" + opacity * 100 + ")";
      } // Apply required styles


      this.div.style.position = "absolute";
      this.div.style.visibility = 'hidden';

      if (this.zIndex !== null) {
        this.div.style.zIndex = this.zIndex + "";
      }

      if (!this.div.style.overflow) {
        this.div.style.overflow = "auto";
      }
    }
  };

  _proto.getBoxWidths = function getBoxWidths() {
    var bw = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    };

    if (!this.div) {
      return bw;
    }

    if (document.defaultView && document.defaultView.getComputedStyle) {
      var ownerDocument = this.div.ownerDocument;
      var computedStyle = ownerDocument && ownerDocument.defaultView ? ownerDocument.defaultView.getComputedStyle(this.div, "") : null;

      if (computedStyle) {
        // The computed styles are always in pixel units (good!)
        bw.top = parseInt(computedStyle.borderTopWidth || "", 10) || 0;
        bw.bottom = parseInt(computedStyle.borderBottomWidth || "", 10) || 0;
        bw.left = parseInt(computedStyle.borderLeftWidth || "", 10) || 0;
        bw.right = parseInt(computedStyle.borderRightWidth || "", 10) || 0;
      }
    } else if ( // @ts-ignore
    document.documentElement.currentStyle // MSIE
    ) {
        // @ts-ignore
        var currentStyle = this.div.currentStyle;

        if (currentStyle) {
          // The current styles may not be in pixel units, but assume they are (bad!)
          bw.top = parseInt(currentStyle.borderTopWidth || "", 10) || 0;
          bw.bottom = parseInt(currentStyle.borderBottomWidth || "", 10) || 0;
          bw.left = parseInt(currentStyle.borderLeftWidth || "", 10) || 0;
          bw.right = parseInt(currentStyle.borderRightWidth || "", 10) || 0;
        }
      }

    return bw;
  };

  _proto.onRemove = function onRemove() {
    if (this.div && this.div.parentNode) {
      this.div.parentNode.removeChild(this.div);
      this.div = null;
    }
  };

  _proto.draw = function draw() {
    this.createInfoBoxDiv();

    if (this.div) {
      // @ts-ignore
      var projection = this.getProjection();
      var pixPosition = projection.fromLatLngToDivPixel(this.position);
      this.div.style.left = pixPosition.x + this.pixelOffset.width + "px";

      if (this.alignBottom) {
        this.div.style.bottom = -(pixPosition.y + this.pixelOffset.height) + "px";
      } else {
        this.div.style.top = pixPosition.y + this.pixelOffset.height + "px";
      }

      if (this.isHidden) {
        this.div.style.visibility = "hidden";
      } else {
        this.div.style.visibility = "visible";
      }
    }
  };

  _proto.setOptions = function setOptions(options) {
    if (options === void 0) {
      options = {};
    }

    if (typeof options.boxClass !== "undefined") {
      // Must be first
      this.boxClass = options.boxClass;
      this.setBoxStyle();
    }

    if (typeof options.boxStyle !== "undefined") {
      // Must be second
      this.boxStyle = options.boxStyle;
      this.setBoxStyle();
    }

    if (typeof options.content !== "undefined") {
      this.setContent(options.content);
    }

    if (typeof options.disableAutoPan !== "undefined") {
      this.disableAutoPan = options.disableAutoPan;
    }

    if (typeof options.maxWidth !== "undefined") {
      this.maxWidth = options.maxWidth;
    }

    if (typeof options.pixelOffset !== "undefined") {
      this.pixelOffset = options.pixelOffset;
    }

    if (typeof options.alignBottom !== "undefined") {
      this.alignBottom = options.alignBottom;
    }

    if (typeof options.position !== "undefined") {
      this.setPosition(options.position);
    }

    if (typeof options.zIndex !== "undefined") {
      this.setZIndex(options.zIndex);
    }

    if (typeof options.closeBoxMargin !== "undefined") {
      this.closeBoxMargin = options.closeBoxMargin;
    }

    if (typeof options.closeBoxURL !== "undefined") {
      this.closeBoxURL = options.closeBoxURL;
    }

    if (typeof options.infoBoxClearance !== "undefined") {
      this.infoBoxClearance = options.infoBoxClearance;
    }

    if (typeof options.isHidden !== "undefined") {
      this.isHidden = options.isHidden;
    }

    if (typeof options.visible !== "undefined") {
      this.isHidden = !options.visible;
    }

    if (typeof options.enableEventPropagation !== "undefined") {
      this.enableEventPropagation = options.enableEventPropagation;
    }

    if (this.div) {
      this.draw();
    }
  };

  _proto.setContent = function setContent(content) {
    this.content = content;

    if (this.div) {
      if (this.closeListener) {
        google.maps.event.removeListener(this.closeListener);
        this.closeListener = null;
      } // Odd code required to make things work with MSIE.


      if (!this.fixedWidthSet) {
        this.div.style.width = "";
      }

      if (typeof content === "string") {
        this.div.innerHTML = this.getCloseBoxImg() + content;
      } else {
        this.div.innerHTML = this.getCloseBoxImg();
        this.div.appendChild(content);
      } // Perverse code required to make things work with MSIE.
      // (Ensures the close box does, in fact, float to the right.)


      if (!this.fixedWidthSet) {
        this.div.style.width = this.div.offsetWidth + "px";

        if (typeof content === "string") {
          this.div.innerHTML = this.getCloseBoxImg() + content;
        } else {
          this.div.innerHTML = this.getCloseBoxImg();
          this.div.appendChild(content);
        }
      }

      this.addClickHandler();
    }
    /**
     * This event is fired when the content of the InfoBox changes.
     * @name InfoBox#content_changed
     * @event
     */


    google.maps.event.trigger(this, "content_changed");
  };

  _proto.setPosition = function setPosition(latLng) {
    this.position = latLng;

    if (this.div) {
      this.draw();
    }
    /**
     * This event is fired when the position of the InfoBox changes.
     * @name InfoBox#position_changed
     * @event
     */


    google.maps.event.trigger(this, "position_changed");
  };

  _proto.setVisible = function setVisible(isVisible) {
    this.isHidden = !isVisible;

    if (this.div) {
      this.div.style.visibility = this.isHidden ? "hidden" : "visible";
    }
  };

  _proto.setZIndex = function setZIndex(index) {
    this.zIndex = index;

    if (this.div) {
      this.div.style.zIndex = index + "";
    }
    /**
     * This event is fired when the zIndex of the InfoBox changes.
     * @name InfoBox#zindex_changed
     * @event
     */


    google.maps.event.trigger(this, "zindex_changed");
  };

  _proto.getContent = function getContent() {
    return this.content;
  };

  _proto.getPosition = function getPosition() {
    return this.position;
  };

  _proto.getZIndex = function getZIndex() {
    return this.zIndex;
  };

  _proto.getVisible = function getVisible() {
    // @ts-ignore
    var map = this.getMap();
    var isVisible;

    if (typeof map === "undefined" || map === null) {
      isVisible = false;
    } else {
      isVisible = !this.isHidden;
    }

    return isVisible;
  };

  _proto.show = function show() {
    this.isHidden = false;

    if (this.div) {
      this.div.style.visibility = "visible";
    }
  };

  _proto.hide = function hide() {
    this.isHidden = true;

    if (this.div) {
      this.div.style.visibility = "hidden";
    }
  };

  _proto.open = function open(map, anchor) {
    var _this3 = this;

    if (anchor) {
      // @ts-ignore
      this.position = anchor.getPosition();
      this.moveListener = google.maps.event.addListener(anchor, "position_changed", // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
      function () {
        // @ts-ignore
        var position = anchor.getPosition();

        _this3.setPosition(position);
      });
      this.mapListener = google.maps.event.addListener(anchor, "map_changed", // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
      function () {
        // @ts-ignore
        _this3.setMap(anchor.map);
      });
    } // @ts-ignore


    this.setMap(map);

    if (this.div) {
      this.panBox();
    }
  };

  _proto.close = function close() {
    if (this.closeListener) {
      google.maps.event.removeListener(this.closeListener);
      this.closeListener = null;
    }

    if (this.eventListeners) {
      for (var i = 0; i < this.eventListeners.length; i++) {
        google.maps.event.removeListener(this.eventListeners[i]);
      }

      this.eventListeners = null;
    }

    if (this.moveListener) {
      google.maps.event.removeListener(this.moveListener);
      this.moveListener = null;
    }

    if (this.mapListener) {
      google.maps.event.removeListener(this.mapListener);
      this.mapListener = null;
    }

    if (this.contextListener) {
      google.maps.event.removeListener(this.contextListener);
      this.contextListener = null;
    } // @ts-ignore


    this.setMap(null);
  };

  _proto.extend = function extend(obj1, obj2) {
    return function applyExtend(object) {
      // eslint-disable-next-line guard-for-in
      for (var property in object.prototype) {
        // @ts-ignore
        this.prototype[property] = object.prototype[property];
      } // @ts-ignore


      return this;
    }.apply(obj1, [obj2]);
  };

  return InfoBox;
}();




/***/ }),

/***/ "./node_modules/@react-google-maps/marker-clusterer/dist/markerclusterer.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@react-google-maps/marker-clusterer/dist/markerclusterer.esm.js ***!
  \**************************************************************************************/
/*! exports provided: Cluster, ClusterIcon, Clusterer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cluster", function() { return Cluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterIcon", function() { return ClusterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clusterer", function() { return Clusterer; });
var ClusterIcon =
/*#__PURE__*/
function () {
  function ClusterIcon(cluster, styles) {
    cluster.getClusterer().extend(ClusterIcon, google.maps.OverlayView);
    this.cluster = cluster;
    this.className = this.cluster.getClusterer().getClusterClass();
    this.styles = styles;
    this.center = undefined;
    this.div = null;
    this.sums = null;
    this.visible = false;
    this.boundsChangedListener = null;
    this.url = '';
    this.height = 0;
    this.width = 0;
    this.anchorText = [0, 0];
    this.anchorIcon = [0, 0];
    this.textColor = 'black';
    this.textSize = 11;
    this.textDecoration = 'none';
    this.fontWeight = 'bold';
    this.fontStyle = 'normal';
    this.fontFamily = 'Arial,sans-serif';
    this.backgroundPosition = '0 0'; // @ts-ignore

    this.setMap(cluster.getMap()); // Note: this causes onAdd to be called
  }

  var _proto = ClusterIcon.prototype;

  _proto.onAdd = function onAdd() {
    var _this = this;

    var cMouseDownInCluster;
    var cDraggingMapByCluster;
    this.div = document.createElement("div");
    this.div.className = this.className;

    if (this.visible) {
      this.show();
    } // @ts-ignore


    this.getPanes().overlayMouseTarget.appendChild(this.div); // Fix for Issue 157

    this.boundsChangedListener = google.maps.event.addListener( // @ts-ignore
    this.getMap(), "boundschanged", function boundsChabged() {
      cDraggingMapByCluster = cMouseDownInCluster;
    });
    google.maps.event.addDomListener(this.div, "mousedown", function onMouseDown() {
      cMouseDownInCluster = true;
      cDraggingMapByCluster = false;
    }); // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name

    google.maps.event.addDomListener(this.div, "click", // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
    function (event) {
      cMouseDownInCluster = false;

      if (!cDraggingMapByCluster) {
        var markerClusterer = _this.cluster.getClusterer();
        /**
        * This event is fired when a cluster marker is clicked.
        * @name MarkerClusterer#click
        * @param {Cluster} c The cluster that was clicked.
        * @event
        */


        google.maps.event.trigger(markerClusterer, "click", _this.cluster);
        google.maps.event.trigger(markerClusterer, "clusterclick", _this.cluster); // deprecated name
        // The default click handler follows. Disable it by setting
        // the zoomOnClick property to false.

        if (markerClusterer.getZoomOnClick()) {
          // Zoom into the cluster.
          var maxZoom = markerClusterer.getMaxZoom();

          var bounds = _this.cluster.getBounds(); // @ts-ignore


          markerClusterer.getMap().fitBounds(bounds); // There is a fix for Issue 170 here:

          setTimeout(function timeout() {
            // @ts-ignore
            markerClusterer.getMap().fitBounds(bounds); // Don't zoom beyond the max zoom level
            // @ts-ignore

            if (maxZoom !== null && markerClusterer.getMap().getZoom() > maxZoom) {
              // @ts-ignore
              markerClusterer.getMap().setZoom(maxZoom + 1);
            }
          }, 100);
        } // Prevent event propagation to the map:


        event.cancelBubble = true;

        if (event.stopPropagation) {
          event.stopPropagation();
        }
      }
    });
    google.maps.event.addDomListener(this.div, "mouseover", // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
    function () {
      /**
       * This event is fired when the mouse moves over a cluster marker.
       * @name MarkerClusterer#mouseover
       * @param {Cluster} c The cluster that the mouse moved over.
       * @event
       */
      google.maps.event.trigger(_this.cluster.getClusterer(), "mouseover", _this.cluster);
    }); // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name

    google.maps.event.addDomListener(this.div, "mouseout", // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
    function () {
      /**
       * This event is fired when the mouse moves out of a cluster marker.
       * @name MarkerClusterer#mouseout
       * @param {Cluster} c The cluster that the mouse moved out of.
       * @event
       */
      google.maps.event.trigger(_this.cluster.getClusterer(), "mouseout", _this.cluster);
    });
  };

  _proto.onRemove = function onRemove() {
    if (this.div && this.div.parentNode) {
      this.hide();

      if (this.boundsChangedListener !== null) {
        google.maps.event.removeListener(this.boundsChangedListener);
      }

      google.maps.event.clearInstanceListeners(this.div);
      this.div.parentNode.removeChild(this.div);
      this.div = null;
    }
  };

  _proto.draw = function draw() {
    if (this.visible && this.div !== null && this.center) {
      var _this$getPosFromLatLn = this.getPosFromLatLng(this.center),
          x = _this$getPosFromLatLn.x,
          y = _this$getPosFromLatLn.y;

      this.div.style.top = y + "px";
      this.div.style.left = x + "px";
    }
  };

  _proto.hide = function hide() {
    if (this.div) {
      this.div.style.display = "none";
    }

    this.visible = false;
  };

  _proto.show = function show() {
    if (this.div && this.center) {
      var img = "",
          divTitle = ""; // NOTE: values must be specified in px units

      var bp = this.backgroundPosition.split(" ");
      var spriteH = parseInt(bp[0].replace(/^\s+|\s+$/g, ""), 10);
      var spriteV = parseInt(bp[1].replace(/^\s+|\s+$/g, ""), 10);
      var pos = this.getPosFromLatLng(this.center);

      if (this.sums === null || typeof this.sums.title === "undefined" || this.sums.title === "") {
        divTitle = this.cluster.getClusterer().getTitle();
      } else {
        divTitle = this.sums.title;
      }

      this.div.style.cssText = this.createCss(pos);
      img = "<img alt='" + divTitle + "' src='" + this.url + "' style='position: absolute; top: " + spriteV + "px; left: " + spriteH + "px; "; //@ts-ignore

      if (!this.cluster.getClusterer().enableRetinaIcons) {
        img += "clip: rect(" + -1 * spriteV + "px, " + (-1 * spriteH + this.width) + "px, " + (-1 * spriteV + this.height) + "px, " + -1 * spriteH + "px);";
      }

      img += "'>";
      this.div.innerHTML = img + "<div style='" + "position: absolute;" + "top: " + this.anchorText[0] + "px;" + "left: " + this.anchorText[1] + "px;" + "color: " + this.textColor + ";" + "font-size: " + this.textSize + "px;" + "font-family: " + this.fontFamily + ";" + "font-weight: " + this.fontWeight + ";" + "font-style: " + this.fontStyle + ";" + "text-decoration: " + this.textDecoration + ";" + "text-align: center;" + "width: " + this.width + "px;" + "line-height:" + this.height + "px;" + // @ts-ignore
      "'>" + this.sums.text + "</div>";
      this.div.title = divTitle;
      this.div.style.display = "";
    }

    this.visible = true;
  };

  _proto.useStyle = function useStyle(sums) {
    this.sums = sums;
    var style = this.styles[Math.min(this.styles.length - 1, Math.max(0, sums.index - 1))];
    this.url = style.url;
    this.height = style.height;
    this.width = style.width;
    this.anchorText = style.anchorText || [0, 0];
    this.anchorIcon = style.anchorIcon || [this.height / 2, this.width / 2];
    this.textColor = style.textColor || "black";
    this.textSize = style.textSize || 11;
    this.textDecoration = style.textDecoration || "none";
    this.fontWeight = style.fontWeight || "bold";
    this.fontStyle = style.fontStyle || "normal";
    this.fontFamily = style.fontFamily || "Arial,sans-serif";
    this.backgroundPosition = style.backgroundPosition || "0 0";
  };

  _proto.setCenter = function setCenter(center) {
    this.center = center;
  };

  _proto.createCss = function createCss(pos) {
    var style = [];
    style.push("cursor: pointer;");
    style.push("position: absolute; top: " + pos.y + "px; left: " + pos.x + "px;");
    style.push("width: " + this.width + "px; height: " + this.height + "px;");
    return style.join("");
  };

  _proto.getPosFromLatLng = function getPosFromLatLng(latlng) {
    // @ts-ignore
    var pos = this.getProjection().fromLatLngToDivPixel(latlng);
    pos.x -= this.anchorIcon[1];
    pos.y -= this.anchorIcon[0];
    pos.x = pos.x;
    pos.y = pos.y;
    return pos;
  };

  return ClusterIcon;
}();

var Cluster =
/*#__PURE__*/
function () {
  function Cluster(markerClusterer) {
    this.markerClusterer = markerClusterer; // @ts-ignore

    this.map = this.markerClusterer.getMap();
    this.gridSize = this.markerClusterer.getGridSize();
    this.minClusterSize = this.markerClusterer.getMinimumClusterSize();
    this.averageCenter = this.markerClusterer.getAverageCenter();
    this.markers = [];
    this.center = undefined;
    this.bounds = null;
    this.clusterIcon = new ClusterIcon(this, this.markerClusterer.getStyles());
  }

  var _proto = Cluster.prototype;

  _proto.getSize = function getSize() {
    return this.markers.length;
  };

  _proto.getMarkers = function getMarkers() {
    return this.markers;
  };

  _proto.getCenter = function getCenter() {
    return this.center;
  };

  _proto.getMap = function getMap() {
    return this.map;
  };

  _proto.getClusterer = function getClusterer() {
    return this.markerClusterer;
  };

  _proto.getBounds = function getBounds() {
    var bounds = new google.maps.LatLngBounds(this.center, this.center);
    var markers = this.getMarkers();

    for (var i = 0; i < markers.length; i++) {
      var position = markers[i].getPosition();

      if (position) {
        bounds.extend(position);
      }
    }

    return bounds;
  };

  _proto.remove = function remove() {
    // @ts-ignore
    this.clusterIcon.setMap(null);
    this.markers = [];
    delete this.markers;
  };

  _proto.addMarker = function addMarker(marker) {
    if (this.isMarkerAlreadyAdded(marker)) {
      return false;
    }

    if (!this.center) {
      var position = marker.getPosition();

      if (position) {
        this.center = position;
        this.calculateBounds();
      }
    } else {
      if (this.averageCenter) {
        var _position = marker.getPosition();

        if (_position) {
          var length = this.markers.length + 1;
          this.center = new google.maps.LatLng((this.center.lat() * (length - 1) + _position.lat()) / length, (this.center.lng() * (length - 1) + _position.lng()) / length);
          this.calculateBounds();
        }
      }
    }

    marker.isAdded = true;
    this.markers.push(marker);
    var mCount = this.markers.length;
    var maxZoom = this.markerClusterer.getMaxZoom();

    if (maxZoom !== null && this.map.getZoom() > maxZoom) {
      // Zoomed in past max zoom, so show the marker.
      if (marker.getMap() !== this.map) {
        marker.setMap(this.map);
      }
    } else if (mCount < this.minClusterSize) {
      // Min cluster size not reached so show the marker.
      if (marker.getMap() !== this.map) {
        marker.setMap(this.map);
      }
    } else if (mCount === this.minClusterSize) {
      // Hide the markers that were showing.
      for (var i = 0; i < mCount; i++) {
        this.markers[i].setMap(null);
      }
    } else {
      marker.setMap(null);
    }

    this.updateIcon();
    return true;
  };

  _proto.isMarkerInClusterBounds = function isMarkerInClusterBounds(marker) {
    if (this.bounds !== null) {
      var position = marker.getPosition();

      if (position) {
        return this.bounds.contains(position);
      }
    }

    return false;
  };

  _proto.calculateBounds = function calculateBounds() {
    this.bounds = this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center, this.center));
  };

  _proto.updateIcon = function updateIcon() {
    var mCount = this.markers.length;
    var maxZoom = this.markerClusterer.getMaxZoom();

    if (maxZoom !== null && this.map.getZoom() > maxZoom) {
      this.clusterIcon.hide();
      return;
    }

    if (mCount < this.minClusterSize) {
      // Min cluster size not yet reached.
      this.clusterIcon.hide();
      return;
    }

    if (this.center) {
      this.clusterIcon.setCenter(this.center);
    }

    this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers, this.markerClusterer.getStyles().length));
    this.clusterIcon.show();
  };

  _proto.isMarkerAlreadyAdded = function isMarkerAlreadyAdded(marker) {
    if (this.markers.indexOf) {
      return this.markers.includes(marker);
    } else {
      for (var i = 0; i < this.markers.length; i++) {
        if (marker === this.markers[i]) {
          return true;
        }
      }
    }

    return false;
  };

  return Cluster;
}();

/* eslint-disable filenames/match-regex */

var CALCULATOR = function CALCULATOR(markers, numStyles) {
  var index = 0;
  var title = "";
  var count = markers.length.toString();
  var dv = count;

  while (dv !== 0) {
    // @ts-ignore
    dv = parseInt(dv, 10) / 10;
    index++;
  }

  index = Math.min(index, numStyles);
  return {
    text: count,
    index: index,
    title: title
  };
};

var BATCH_SIZE = 2000;
var BATCH_SIZE_IE = 500;
var IMAGE_PATH = "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m";
var IMAGE_EXTENSION = "png";
var IMAGE_SIZES = [53, 56, 66, 78, 90];
var CLUSTERER_CLASS = "cluster";
var Clusterer =
/*#__PURE__*/
function () {
  function Clusterer(map, optMarkers, optOptions) {
    if (optMarkers === void 0) {
      optMarkers = [];
    }

    if (optOptions === void 0) {
      optOptions = {};
    }

    this.extend(Clusterer, google.maps.OverlayView);
    this.markers = [];
    this.clusters = [];
    this.listeners = [];
    this.activeMap = null;
    this.ready = false;
    this.gridSize = optOptions.gridSize || 60;
    this.minClusterSize = optOptions.minimumClusterSize || 2;
    this.maxZoom = optOptions.maxZoom || null;
    this.styles = optOptions.styles || [];
    this.title = optOptions.title || "";
    this.zoomOnClick = true;

    if (optOptions.zoomOnClick !== undefined) {
      this.zoomOnClick = optOptions.zoomOnClick;
    }

    this.averageCenter = false;

    if (optOptions.averageCenter !== undefined) {
      this.averageCenter = optOptions.averageCenter;
    }

    this.ignoreHidden = false;

    if (optOptions.ignoreHidden !== undefined) {
      this.ignoreHidden = optOptions.ignoreHidden;
    }

    this.enableRetinaIcons = false;

    if (optOptions.enableRetinaIcons !== undefined) {
      this.enableRetinaIcons = optOptions.enableRetinaIcons;
    }

    this.imagePath = optOptions.imagePath || IMAGE_PATH;
    this.imageExtension = optOptions.imageExtension || IMAGE_EXTENSION;
    this.imageSizes = optOptions.imageSizes || IMAGE_SIZES;
    this.calculator = optOptions.calculator || CALCULATOR;
    this.batchSize = optOptions.batchSize || BATCH_SIZE;
    this.batchSizeIE = optOptions.batchSizeIE || BATCH_SIZE_IE;
    this.clusterClass = optOptions.clusterClass || CLUSTERER_CLASS;

    if (navigator.userAgent.toLowerCase().indexOf("msie") !== -1) {
      // Try to avoid IE timeout when processing a huge number of markers:
      this.batchSize = this.batchSizeIE;
    }

    this.timerRefStatic = null;
    this.setupStyles();
    this.addMarkers(optMarkers, true); // @ts-ignore

    this.setMap(map); // Note: this causes onAdd to be called
  }

  var _proto = Clusterer.prototype;

  _proto.onAdd = function onAdd() {
    var _this = this;

    // @ts-ignore
    this.activeMap = this.getMap();
    this.ready = true;
    this.repaint(); // Add the map event listeners

    this.listeners = [google.maps.event.addListener( // @ts-ignore
    this.getMap(), "zoom_changed", // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
    function () {
      _this.resetViewport(false); // Workaround for this Google bug: when map is at level 0 and "-" of
      // zoom slider is clicked, a "zoom_changed" event is fired even though
      // the map doesn't zoom out any further. In this situation, no "idle"
      // event is triggered so the cluster markers that have been removed
      // do not get redrawn. Same goes for a zoom in at maxZoom.


      if ( // @ts-ignore
      _this.getMap().getZoom() === (_this.get("minZoom") || 0) || // @ts-ignore
      _this.getMap().getZoom() === _this.get("maxZoom")) {
        google.maps.event.trigger(_this, "idle");
      }
    }), google.maps.event.addListener( // @ts-ignore
    this.getMap(), "idle", // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
    function () {
      _this.redraw();
    })];
  } // eslint-disable-next-line @getify/proper-arrows/this
  ;

  _proto.onRemove = function onRemove() {
    // Put all the managed markers back on the map:
    for (var i = 0; i < this.markers.length; i++) {
      if (this.markers[i].getMap() !== this.activeMap) {
        this.markers[i].setMap(this.activeMap);
      }
    } // Remove all clusters:


    for (var _i = 0; _i < this.clusters.length; _i++) {
      this.clusters[_i].remove();
    }

    this.clusters = []; // Remove map event listeners:

    for (var _i2 = 0; _i2 < this.listeners.length; _i2++) {
      google.maps.event.removeListener(this.listeners[_i2]);
    }

    this.listeners = [];
    this.activeMap = null;
    this.ready = false;
  };

  _proto.draw = function draw() {};

  _proto.setupStyles = function setupStyles() {
    if (this.styles.length > 0) {
      return;
    }

    for (var i = 0; i < this.imageSizes.length; i++) {
      this.styles.push({
        url: this.imagePath + (i + 1) + "." + this.imageExtension,
        height: this.imageSizes[i],
        width: this.imageSizes[i]
      });
    }
  };

  _proto.fitMapToMarkers = function fitMapToMarkers() {
    var markers = this.getMarkers();
    var bounds = new google.maps.LatLngBounds();

    for (var i = 0; i < markers.length; i++) {
      var position = markers[i].getPosition();

      if (position) {
        bounds.extend(position);
      }
    } // @ts-ignore


    this.getMap().fitBounds(bounds);
  };

  _proto.getGridSize = function getGridSize() {
    return this.gridSize;
  };

  _proto.setGridSize = function setGridSize(gridSize) {
    this.gridSize = gridSize;
  };

  _proto.getMinimumClusterSize = function getMinimumClusterSize() {
    return this.minClusterSize;
  };

  _proto.setMinimumClusterSize = function setMinimumClusterSize(minimumClusterSize) {
    this.minClusterSize = minimumClusterSize;
  };

  _proto.getMaxZoom = function getMaxZoom() {
    return this.maxZoom;
  };

  _proto.setMaxZoom = function setMaxZoom(maxZoom) {
    this.maxZoom = maxZoom;
  };

  _proto.getStyles = function getStyles() {
    return this.styles;
  };

  _proto.setStyles = function setStyles(styles) {
    this.styles = styles;
  };

  _proto.getTitle = function getTitle() {
    return this.title;
  };

  _proto.setTitle = function setTitle(title) {
    this.title = title;
  };

  _proto.getZoomOnClick = function getZoomOnClick() {
    return this.zoomOnClick;
  };

  _proto.setZoomOnClick = function setZoomOnClick(zoomOnClick) {
    this.zoomOnClick = zoomOnClick;
  };

  _proto.getAverageCenter = function getAverageCenter() {
    return this.averageCenter;
  };

  _proto.setAverageCenter = function setAverageCenter(averageCenter) {
    this.averageCenter = averageCenter;
  };

  _proto.getIgnoreHidden = function getIgnoreHidden() {
    return this.ignoreHidden;
  };

  _proto.setIgnoreHidden = function setIgnoreHidden(ignoreHidden) {
    this.ignoreHidden = ignoreHidden;
  };

  _proto.getEnableRetinaIcons = function getEnableRetinaIcons() {
    return this.enableRetinaIcons;
  };

  _proto.setEnableRetinaIcons = function setEnableRetinaIcons(enableRetinaIcons) {
    this.enableRetinaIcons = enableRetinaIcons;
  };

  _proto.getImageExtension = function getImageExtension() {
    return this.imageExtension;
  };

  _proto.setImageExtension = function setImageExtension(imageExtension) {
    this.imageExtension = imageExtension;
  };

  _proto.getImagePath = function getImagePath() {
    return this.imagePath;
  };

  _proto.setImagePath = function setImagePath(imagePath) {
    this.imagePath = imagePath;
  };

  _proto.getImageSizes = function getImageSizes() {
    return this.imageSizes;
  };

  _proto.setImageSizes = function setImageSizes(imageSizes) {
    this.imageSizes = imageSizes;
  };

  _proto.getCalculator = function getCalculator() {
    return this.calculator;
  };

  _proto.setCalculator = function setCalculator(calculator) {
    this.calculator = calculator;
  };

  _proto.getBatchSizeIE = function getBatchSizeIE() {
    return this.batchSizeIE;
  };

  _proto.setBatchSizeIE = function setBatchSizeIE(batchSizeIE) {
    this.batchSizeIE = batchSizeIE;
  };

  _proto.getClusterClass = function getClusterClass() {
    return this.clusterClass;
  };

  _proto.setClusterClass = function setClusterClass(clusterClass) {
    this.clusterClass = clusterClass;
  };

  _proto.getMarkers = function getMarkers() {
    return this.markers;
  };

  _proto.getTotalMarkers = function getTotalMarkers() {
    return this.markers.length;
  };

  _proto.getClusters = function getClusters() {
    return this.clusters;
  };

  _proto.getTotalClusters = function getTotalClusters() {
    return this.clusters.length;
  };

  _proto.addMarker = function addMarker(marker, optNoDraw) {
    this.pushMarkerTo(marker);

    if (!optNoDraw) {
      this.redraw();
    }
  };

  _proto.addMarkers = function addMarkers(markers, optNoDraw) {
    for (var key in markers) {
      if (markers.hasOwnProperty(key)) {
        this.pushMarkerTo(markers[key]);
      }
    }

    if (!optNoDraw) {
      this.redraw();
    }
  };

  _proto.pushMarkerTo = function pushMarkerTo(marker) {
    var _this2 = this;

    // If the marker is draggable add a listener so we can update the clusters on the dragend:
    if (marker.getDraggable()) {
      // eslint-disable-next-line @getify/proper-arrows/name, @getify/proper-arrows/this
      google.maps.event.addListener(marker, "dragend", function () {
        if (_this2.ready) {
          marker.isAdded = false;

          _this2.repaint();
        }
      });
    }

    marker.isAdded = false;
    this.markers.push(marker);
  };

  _proto.removeMarker_ = function removeMarker_(marker) {
    var index = -1;

    if (this.markers.indexOf) {
      index = this.markers.indexOf(marker);
    } else {
      for (var i = 0; i < this.markers.length; i++) {
        if (marker === this.markers[i]) {
          index = i;
          break;
        }
      }
    }

    if (index === -1) {
      // Marker is not in our list of markers, so do nothing:
      return false;
    }

    marker.setMap(null);
    this.markers.splice(index, 1); // Remove the marker from the list of managed markers

    return true;
  };

  _proto.removeMarker = function removeMarker(marker, optNoDraw) {
    var removed = this.removeMarker_(marker);

    if (!optNoDraw && removed) {
      this.repaint();
    }

    return removed;
  };

  _proto.removeMarkers = function removeMarkers(markers, optNoDraw) {
    var removed = false;

    for (var i = 0; i < markers.length; i++) {
      removed = removed || this.removeMarker_(markers[i]);
    }

    if (!optNoDraw && removed) {
      this.repaint();
    }

    return removed;
  };

  _proto.clearMarkers = function clearMarkers() {
    this.resetViewport(true);
    this.markers = [];
  };

  _proto.repaint = function repaint() {
    var oldClusters = this.clusters.slice();
    this.clusters = [];
    this.resetViewport(false);
    this.redraw(); // Remove the old clusters.
    // Do it in a timeout to prevent blinking effect.

    setTimeout(function timeout() {
      for (var i = 0; i < oldClusters.length; i++) {
        oldClusters[i].remove();
      }
    }, 0);
  };

  _proto.getExtendedBounds = function getExtendedBounds(bounds) {
    // @ts-ignore
    var projection = this.getProjection(); // Convert the points to pixels and the extend out by the grid size.

    var trPix = projection.fromLatLngToDivPixel( // Turn the bounds into latlng.
    new google.maps.LatLng(bounds.getNorthEast().lat(), bounds.getNorthEast().lng()));
    trPix.x += this.gridSize;
    trPix.y -= this.gridSize;
    var blPix = projection.fromLatLngToDivPixel( // Turn the bounds into latlng.
    new google.maps.LatLng(bounds.getSouthWest().lat(), bounds.getSouthWest().lng()));
    blPix.x -= this.gridSize;
    blPix.y += this.gridSize; // Extend the bounds to contain the new bounds.

    bounds.extend( // Convert the pixel points back to LatLng nw
    projection.fromDivPixelToLatLng(trPix));
    bounds.extend( // Convert the pixel points back to LatLng sw
    projection.fromDivPixelToLatLng(blPix));
    return bounds;
  };

  _proto.redraw = function redraw() {
    // Redraws all the clusters.
    this.createClusters(0);
  };

  _proto.resetViewport = function resetViewport(optHide) {
    // Remove all the clusters
    for (var i = 0; i < this.clusters.length; i++) {
      this.clusters[i].remove();
    }

    this.clusters = []; // Reset the markers to not be added and to be removed from the map.

    for (var _i3 = 0; _i3 < this.markers.length; _i3++) {
      var marker = this.markers[_i3];
      marker.isAdded = false;

      if (optHide) {
        marker.setMap(null);
      }
    }
  };

  _proto.distanceBetweenPoints = function distanceBetweenPoints(p1, p2) {
    var R = 6371; // Radius of the Earth in km

    var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
    var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  };

  _proto.isMarkerInBounds = function isMarkerInBounds(marker, bounds) {
    var position = marker.getPosition();

    if (position) {
      return bounds.contains(position);
    }

    return false;
  };

  _proto.addToClosestCluster = function addToClosestCluster(marker) {
    var cluster;
    var distance = 40000; // Some large number

    var clusterToAddTo = null;

    for (var i = 0; i < this.clusters.length; i++) {
      cluster = this.clusters[i];
      var center = cluster.getCenter();
      var position = marker.getPosition();

      if (center && position) {
        var d = this.distanceBetweenPoints(center, position);

        if (d < distance) {
          distance = d;
          clusterToAddTo = cluster;
        }
      }
    }

    if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
      clusterToAddTo.addMarker(marker);
    } else {
      cluster = new Cluster(this);
      cluster.addMarker(marker);
      this.clusters.push(cluster);
    }
  };

  _proto.createClusters = function createClusters(iFirst) {
    var _this3 = this;

    if (!this.ready) {
      return;
    } // Cancel previous batch processing if we're working on the first batch:


    if (iFirst === 0) {
      /**
       * This event is fired when the <code>Clusterer</code> begins
       *  clustering markers.
       * @name Clusterer#clusteringbegin
       * @param {Clusterer} mc The Clusterer whose markers are being clustered.
       * @event
       */
      google.maps.event.trigger(this, "clusteringbegin", this);

      if (this.timerRefStatic !== null) {
        window.clearTimeout(this.timerRefStatic);
        delete this.timerRefStatic;
      }
    } // Get our current map view bounds.
    // Create a new bounds object so we don't affect the map.
    //
    // See Comments 9 & 11 on Issue 3651 relating to this workaround for a Google Maps bug:
    // @ts-ignore


    var mapBounds = this.getMap().getZoom() > 3 ? new google.maps.LatLngBounds( // @ts-ignore
    this.getMap().getBounds().getSouthWest(), // @ts-ignore
    this.getMap().getBounds().getNorthEast()) : new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625));
    var bounds = this.getExtendedBounds(mapBounds);
    var iLast = Math.min(iFirst + this.batchSize, this.markers.length);

    for (var i = iFirst; i < iLast; i++) {
      var marker = this.markers[i];

      if (!marker.isAdded && this.isMarkerInBounds(marker, bounds)) {
        if (!this.ignoreHidden || this.ignoreHidden && marker.getVisible()) {
          this.addToClosestCluster(marker);
        }
      }
    }

    if (iLast < this.markers.length) {
      this.timerRefStatic = window.setTimeout( // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name
      function () {
        _this3.createClusters(iLast);
      }, 0);
    } else {
      this.timerRefStatic = null;
      /**
       * This event is fired when the <code>Clusterer</code> stops
       *  clustering markers.
       * @name Clusterer#clusteringend
       * @param {Clusterer} mc The Clusterer whose markers are being clustered.
       * @event
       */

      google.maps.event.trigger(this, "clusteringend", this);
    }
  };

  _proto.extend = function extend(obj1, obj2) {
    return function applyExtend(object) {
      // eslint-disable-next-line guard-for-in
      for (var property in object.prototype) {
        // @ts-ignore
        this.prototype[property] = object.prototype[property];
      } // @ts-ignore


      return this;
    }.apply(obj1, [obj2]);
  };

  return Clusterer;
}();




/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
=======
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=22)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){var o;
/*!
>>>>>>> e0ebf45b587ac289aa3d16bea93c8861fbe66b08
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var i=r.apply(null,o);i&&e.push(i)}else if("object"===a)for(var s in o)n.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},function(e,t){!function(){e.exports=this.React}()},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},function(e,t,n){var o=n(18),r=n(9);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var o=n(19);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n.apply(this,arguments)}e.exports=n},function(e,t,n){"use strict";e.exports=function(e,t,n,o,r,a,i,s){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,r,a,i,s],u=0;(l=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t){!function(){e.exports=this.ReactDOM}()},function(e,t,n){var o=n(16);e.exports=function(e,t){if(null==e)return{};var n,r,a=o(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},function(e,t){e.exports=function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}},function(e,t,n){"use strict";e.exports=n(20)},function(e,t){e.exports=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}},function(e,t){wp.blocks.registerBlockStyle("core/paragraph",{name:"subtitle",label:"Subtitle"}),wp.blocks.registerBlockStyle("core/paragraph",{name:"standout",label:"Standout"}),wp.blocks.registerBlockStyle("core/list",{name:"bullets",label:"Bullets"}),wp.blocks.registerBlockStyle("core/button",{name:"secondary",label:"Secondary"}),wp.blocks.registerBlockStyle("core/button",{name:"text-button",label:"Text button"}),wp.blocks.registerBlockStyle("core/button",{name:"phone",label:"Phone"}),wp.blocks.registerBlockStyle("core/button",{name:"right-arrow",label:"Right Arrow Icon"}),wp.blocks.registerBlockStyle("core/group",{name:"no-padding",label:"No Padding"}),wp.blocks.registerBlockStyle("core/group",{name:"raised",label:"Raised"}),wp.blocks.registerBlockStyle("core/columns",{name:"split",label:"Split"}),wp.blocks.registerBlockStyle("core/columns",{name:"split-inverted",label:"Split Inverted"}),wp.blocks.registerBlockStyle("core/image",{name:"rounded",label:"Rounded"}),wp.blocks.registerBlockStyle("core/image",{name:"rounded-corners",label:"Rounded Corners"}),wp.blocks.registerBlockStyle("core/columns",{name:"shrink-first",label:"Shrink First"}),wp.blocks.registerBlockStyle("core/columns",{name:"shrink-last",label:"Shrink Last"})},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=o=function(e){return n(e)}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},o(t)}e.exports=o},function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},function(e,t,n){"use strict";
/** @license React v16.10.2
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=n(21),r=n(3);function a(e){for(var t=e.message,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return e.message="Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var i="function"==typeof Symbol&&Symbol.for,s=i?Symbol.for("react.portal"):60106,l=i?Symbol.for("react.fragment"):60107,c=i?Symbol.for("react.strict_mode"):60108,u=i?Symbol.for("react.profiler"):60114,p=i?Symbol.for("react.provider"):60109,m=i?Symbol.for("react.context"):60110,d=i?Symbol.for("react.concurrent_mode"):60111,h=i?Symbol.for("react.forward_ref"):60112,b=i?Symbol.for("react.suspense"):60113,g=i?Symbol.for("react.suspense_list"):60120,v=i?Symbol.for("react.memo"):60115,f=i?Symbol.for("react.lazy"):60116,k=i?Symbol.for("react.fundamental"):60117,y=i?Symbol.for("react.scope"):60119,w=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function _(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case l:return"Fragment";case s:return"Portal";case u:return"Profiler";case c:return"StrictMode";case b:return"Suspense";case g:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case m:return"Context.Consumer";case p:return"Context.Provider";case h:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case v:return _(e.type);case f:if(e=1===e._status?e._result:null)return _(e)}return null}w.hasOwnProperty("ReactCurrentDispatcher")||(w.ReactCurrentDispatcher={current:null}),w.hasOwnProperty("ReactCurrentBatchConfig")||(w.ReactCurrentBatchConfig={suspense:null});var C={};function E(e,t){for(var n=0|e._threadCount;n<=t;n++)e[n]=e._currentValue2,e._threadCount=n+1}for(var x=new Uint16Array(16),O=0;15>O;O++)x[O]=O+1;x[15]=0;var j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S=Object.prototype.hasOwnProperty,N={},M={};function L(e){return!!S.call(M,e)||!S.call(N,e)&&(j.test(e)?M[e]=!0:(N[e]=!0,!1))}function P(e,t,n,o,r,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){T[e]=new P(e,0,!1,e,null,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];T[t]=new P(t,1,!1,e[1],null,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){T[e]=new P(e,2,!1,e.toLowerCase(),null,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){T[e]=new P(e,2,!1,e,null,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){T[e]=new P(e,3,!1,e.toLowerCase(),null,!1)})),["checked","multiple","muted","selected"].forEach((function(e){T[e]=new P(e,3,!0,e,null,!1)})),["capture","download"].forEach((function(e){T[e]=new P(e,4,!1,e,null,!1)})),["cols","rows","size","span"].forEach((function(e){T[e]=new P(e,6,!1,e,null,!1)})),["rowSpan","start"].forEach((function(e){T[e]=new P(e,5,!1,e.toLowerCase(),null,!1)}));var I=/[\-:]([a-z])/g;function B(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(I,B);T[t]=new P(t,1,!1,e,null,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(I,B);T[t]=new P(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(I,B);T[t]=new P(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)})),["tabIndex","crossOrigin"].forEach((function(e){T[e]=new P(e,1,!1,e.toLowerCase(),null,!1)})),T.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach((function(e){T[e]=new P(e,1,!1,e.toLowerCase(),null,!0)}));var D=/["'&<>]/;function z(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=D.exec(e);if(t){var n,o="",r=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}r!==n&&(o+=e.substring(r,n)),r=n+1,o+=t}e=r!==n?o+e.substring(r,n):o}return e}function A(e,t){var n,o=T.hasOwnProperty(e)?T[e]:null;return(n="style"!==e)&&(n=null!==o?0===o.type:2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1])),n||function(e,t,n,o){if(null==t||function(e,t,n,o){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!o&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,o))return!0;if(o)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(e,t,o,!1)?"":null!==o?(e=o.attributeName,3===(n=o.type)||4===n&&!0===t?e+'=""':(o.sanitizeURL&&(t=""+t),e+'="'+z(t)+'"')):L(e)?e+'="'+z(t)+'"':""}var R="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},U=null,F=null,W=null,H=!1,V=!1,Z=null,q=0;function G(){if(null===U)throw a(Error(321));return U}function K(){if(0<q)throw a(Error(312));return{memoizedState:null,queue:null,next:null}}function $(){return null===W?null===F?(H=!1,F=W=K()):(H=!0,W=F):null===W.next?(H=!1,W=W.next=K()):(H=!0,W=W.next),W}function Y(e,t,n,o){for(;V;)V=!1,q+=1,W=null,n=e(t,o);return F=U=null,q=0,W=Z=null,n}function J(e,t){return"function"==typeof t?t(e):t}function Q(e,t,n){if(U=G(),W=$(),H){var o=W.queue;if(t=o.dispatch,null!==Z&&void 0!==(n=Z.get(o))){Z.delete(o),o=W.memoizedState;do{o=e(o,n.action),n=n.next}while(null!==n);return W.memoizedState=o,[o,t]}return[W.memoizedState,t]}return e=e===J?"function"==typeof t?t():t:void 0!==n?n(t):t,W.memoizedState=e,e=(e=W.queue={last:null,dispatch:null}).dispatch=X.bind(null,U,e),[W.memoizedState,e]}function X(e,t,n){if(!(25>q))throw a(Error(301));if(e===U)if(V=!0,e={action:n,next:null},null===Z&&(Z=new Map),void 0===(n=Z.get(t)))Z.set(t,e);else{for(t=n;null!==t.next;)t=t.next;t.next=e}}function ee(){}var te=0,ne={readContext:function(e){var t=te;return E(e,t),e[t]},useContext:function(e){G();var t=te;return E(e,t),e[t]},useMemo:function(e,t){if(U=G(),t=void 0===t?null:t,null!==(W=$())){var n=W.memoizedState;if(null!==n&&null!==t){e:{var o=n[1];if(null===o)o=!1;else{for(var r=0;r<o.length&&r<t.length;r++)if(!R(t[r],o[r])){o=!1;break e}o=!0}}if(o)return n[0]}}return e=e(),W.memoizedState=[e,t],e},useReducer:Q,useRef:function(e){U=G();var t=(W=$()).memoizedState;return null===t?(e={current:e},W.memoizedState=e):t},useState:function(e){return Q(J,e)},useLayoutEffect:function(){},useCallback:function(e){return e},useImperativeHandle:ee,useEffect:ee,useDebugValue:ee,useResponder:function(e,t){return{props:t,responder:e}}},oe={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function re(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var ae={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},ie=o({menuitem:!0},ae),se={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},le=["Webkit","ms","Moz","O"];Object.keys(se).forEach((function(e){le.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),se[t]=se[e]}))}));var ce=/([A-Z])/g,ue=/^ms-/,pe=r.Children.toArray,me=w.ReactCurrentDispatcher,de={listing:!0,pre:!0,textarea:!0},he=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,be={},ge={};var ve=Object.prototype.hasOwnProperty,fe={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function ke(e,t){if(void 0===e)throw a(Error(152),_(t)||"Component")}function ye(e,t,n){function i(r,i){var s=i.prototype&&i.prototype.isReactComponent,l=function(e,t,n,o){if(o&&("object"==typeof(o=e.contextType)&&null!==o))return E(o,n),o[n];if(e=e.contextTypes){for(var r in n={},e)n[r]=t[r];t=n}else t=C;return t}(i,t,n,s),c=[],u=!1,p={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===c)return null},enqueueReplaceState:function(e,t){u=!0,c=[t]},enqueueSetState:function(e,t){if(null===c)return null;c.push(t)}};if(s){if(s=new i(r.props,l,p),"function"==typeof i.getDerivedStateFromProps){var m=i.getDerivedStateFromProps.call(null,r.props,s.state);null!=m&&(s.state=o({},s.state,m))}}else if(U={},s=i(r.props,l,p),null==(s=Y(i,r.props,s,l))||null==s.render)return void ke(e=s,i);if(s.props=r.props,s.context=l,s.updater=p,void 0===(p=s.state)&&(s.state=p=null),"function"==typeof s.UNSAFE_componentWillMount||"function"==typeof s.componentWillMount)if("function"==typeof s.componentWillMount&&"function"!=typeof i.getDerivedStateFromProps&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&"function"!=typeof i.getDerivedStateFromProps&&s.UNSAFE_componentWillMount(),c.length){p=c;var d=u;if(c=null,u=!1,d&&1===p.length)s.state=p[0];else{m=d?p[0]:s.state;var h=!0;for(d=d?1:0;d<p.length;d++){var b=p[d];null!=(b="function"==typeof b?b.call(s,m,r.props,l):b)&&(h?(h=!1,m=o({},m,b)):o(m,b))}s.state=m}}else c=null;if(ke(e=s.render(),i),"function"==typeof s.getChildContext&&"object"==typeof(r=i.childContextTypes)){var g=s.getChildContext();for(var v in g)if(!(v in r))throw a(Error(108),_(i)||"Unknown",v)}g&&(t=o({},t,g))}for(;r.isValidElement(e);){var s=e,l=s.type;if("function"!=typeof l)break;i(s,l)}return{child:e,context:t}}var we=function(){function e(e,t){r.isValidElement(e)?e.type!==l?e=[e]:(e=e.props.children,e=r.isValidElement(e)?[e]:pe(e)):e=pe(e),e={type:null,domNamespace:oe.html,children:e,childIndex:0,context:C,footer:""};var n=x[0];if(0===n){var o=x,i=2*(n=o.length);if(!(65536>=i))throw a(Error(304));var s=new Uint16Array(i);for(s.set(o),(x=s)[0]=n+1,o=n;o<i-1;o++)x[o]=o+1;x[i-1]=0}else x[0]=x[n];this.threadID=n,this.stack=[e],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=t,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[]}var t=e.prototype;return t.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;x[e]=x[0],x[0]=e}},t.pushProvider=function(e){var t=++this.contextIndex,n=e.type._context,o=this.threadID;E(n,o);var r=n[o];this.contextStack[t]=n,this.contextValueStack[t]=r,n[o]=e.props.value},t.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],n=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=n},t.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},t.read=function(e){if(this.exhausted)return null;var t=te;te=this.threadID;var n=me.current;me.current=ne;try{for(var o=[""],r=!1;o[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var i=this.threadID;x[i]=x[0],x[0]=i;break}var s=this.stack[this.stack.length-1];if(r||s.childIndex>=s.children.length){var l=s.footer;if(""!==l&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===s.type)this.currentSelectValue=null;else if(null!=s.type&&null!=s.type.type&&s.type.type.$$typeof===p)this.popProvider(s.type);else if(s.type===b){this.suspenseDepth--;var c=o.pop();if(r){r=!1;var u=s.fallbackFrame;if(!u)throw a(Error(303));this.stack.push(u),o[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}o[this.suspenseDepth]+=c}o[this.suspenseDepth]+=l}else{var m=s.children[s.childIndex++],d="";try{d+=this.render(m,s.context,s.domNamespace)}catch(e){if(null!=e&&"function"==typeof e.then)throw a(Error(294));throw e}o.length<=this.suspenseDepth&&o.push(""),o[this.suspenseDepth]+=d}}return o[0]}finally{me.current=n,te=t}},t.render=function(e,t,n){if("string"==typeof e||"number"==typeof e)return""===(n=""+e)?"":this.makeStaticMarkup?z(n):this.previousWasTextNode?"\x3c!-- --\x3e"+z(n):(this.previousWasTextNode=!0,z(n));if(e=(t=ye(e,t,this.threadID)).child,t=t.context,null===e||!1===e)return"";if(!r.isValidElement(e)){if(null!=e&&null!=e.$$typeof){if((n=e.$$typeof)===s)throw a(Error(257));throw a(Error(258),n.toString())}return e=pe(e),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""}var i=e.type;if("string"==typeof i)return this.renderDOM(e,t,n);switch(i){case c:case d:case u:case g:case l:return e=pe(e.props.children),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case b:throw a(Error(294))}if("object"==typeof i&&null!==i)switch(i.$$typeof){case h:U={};var w=i.render(e.props,e.ref);return w=Y(i.render,e.props,w,e.ref),w=pe(w),this.stack.push({type:null,domNamespace:n,children:w,childIndex:0,context:t,footer:""}),"";case v:return e=[r.createElement(i.type,o({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case p:return n={type:e,domNamespace:n,children:i=pe(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(n),"";case m:i=e.type,w=e.props;var _=this.threadID;return E(i,_),i=pe(w.children(i[_])),this.stack.push({type:e,domNamespace:n,children:i,childIndex:0,context:t,footer:""}),"";case k:throw a(Error(338));case f:switch(function(e){if(-1===e._status){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}}(i=e.type),i._status){case 1:return e=[r.createElement(i._result,o({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case 2:throw i._result;default:throw a(Error(295))}case y:throw a(Error(343))}throw a(Error(130),null==i?i:typeof i,"")},t.renderDOM=function(e,t,n){var i=e.type.toLowerCase();if(n===oe.html&&re(i),!be.hasOwnProperty(i)){if(!he.test(i))throw a(Error(65),i);be[i]=!0}var s=e.props;if("input"===i)s=o({type:void 0},s,{defaultChecked:void 0,defaultValue:void 0,value:null!=s.value?s.value:s.defaultValue,checked:null!=s.checked?s.checked:s.defaultChecked});else if("textarea"===i){var l=s.value;if(null==l){l=s.defaultValue;var c=s.children;if(null!=c){if(null!=l)throw a(Error(92));if(Array.isArray(c)){if(!(1>=c.length))throw a(Error(93));c=c[0]}l=""+c}null==l&&(l="")}s=o({},s,{value:void 0,children:""+l})}else if("select"===i)this.currentSelectValue=null!=s.value?s.value:s.defaultValue,s=o({},s,{value:void 0});else if("option"===i){c=this.currentSelectValue;var u=function(e){if(null==e)return e;var t="";return r.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(s.children);if(null!=c){var p=null!=s.value?s.value+"":u;if(l=!1,Array.isArray(c)){for(var m=0;m<c.length;m++)if(""+c[m]===p){l=!0;break}}else l=""+c===p;s=o({selected:void 0,children:void 0},s,{selected:l,children:u})}}if(l=s){if(ie[i]&&(null!=l.children||null!=l.dangerouslySetInnerHTML))throw a(Error(137),i,"");if(null!=l.dangerouslySetInnerHTML){if(null!=l.children)throw a(Error(60));if(!("object"==typeof l.dangerouslySetInnerHTML&&"__html"in l.dangerouslySetInnerHTML))throw a(Error(61))}if(null!=l.style&&"object"!=typeof l.style)throw a(Error(62),"")}for(y in l=s,c=this.makeStaticMarkup,u=1===this.stack.length,p="<"+e.type,l)if(ve.call(l,y)){var d=l[y];if(null!=d){if("style"===y){m=void 0;var h="",b="";for(m in d)if(d.hasOwnProperty(m)){var g=0===m.indexOf("--"),v=d[m];if(null!=v){if(g)var f=m;else if(f=m,ge.hasOwnProperty(f))f=ge[f];else{var k=f.replace(ce,"-$1").toLowerCase().replace(ue,"-ms-");f=ge[f]=k}h+=b+f+":",b=m,h+=g=null==v||"boolean"==typeof v||""===v?"":g||"number"!=typeof v||0===v||se.hasOwnProperty(b)&&se[b]?(""+v).trim():v+"px",b=";"}}d=h||null}m=null;e:if(g=i,v=l,-1===g.indexOf("-"))g="string"==typeof v.is;else switch(g){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":g=!1;break e;default:g=!0}g?fe.hasOwnProperty(y)||(m=L(m=y)&&null!=d?m+'="'+z(d)+'"':""):m=A(y,d),m&&(p+=" "+m)}}c||u&&(p+=' data-reactroot=""');var y=p;l="",ae.hasOwnProperty(i)?y+="/>":(y+=">",l="</"+e.type+">");e:{if(null!=(c=s.dangerouslySetInnerHTML)){if(null!=c.__html){c=c.__html;break e}}else if("string"==typeof(c=s.children)||"number"==typeof c){c=z(c);break e}c=null}return null!=c?(s=[],de[i]&&"\n"===c.charAt(0)&&(y+="\n"),y+=c):s=pe(s.children),e=e.type,n=null==n||"http://www.w3.org/1999/xhtml"===n?re(e):"http://www.w3.org/2000/svg"===n&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":n,this.stack.push({domNamespace:n,type:i,children:s,childIndex:0,context:t,footer:l}),this.previousWasTextNode=!1,y},e}(),_e={renderToString:function(e){e=new we(e,!1);try{return e.read(1/0)}finally{e.destroy()}},renderToStaticMarkup:function(e){e=new we(e,!0);try{return e.read(1/0)}finally{e.destroy()}},renderToNodeStream:function(){throw a(Error(207))},renderToStaticNodeStream:function(){throw a(Error(208))},version:"16.10.2"},Ce={default:_e},Ee=Ce&&_e||Ce;e.exports=Ee.default||Ee},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,s,l=i(e),c=1;c<arguments.length;c++){for(var u in n=Object(arguments[c]))r.call(n,u)&&(l[u]=n[u]);if(o){s=o(n);for(var p=0;p<s.length;p++)a.call(n,s[p])&&(l[s[p]]=n[s[p]])}}return l}},function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"name",(function(){return Gt})),n.d(o,"settings",(function(){return Kt}));var r={};n.r(r),n.d(r,"name",(function(){return Tn})),n.d(r,"settings",(function(){return In}));var a={};n.r(a),n.d(a,"name",(function(){return Jn})),n.d(a,"settings",(function(){return Qn}));var i={};n.r(i),n.d(i,"name",(function(){return ro})),n.d(i,"settings",(function(){return ao}));var s={};n.r(s),n.d(s,"name",(function(){return bo})),n.d(s,"settings",(function(){return go}));var l={};n.r(l),n.d(l,"name",(function(){return ko})),n.d(l,"settings",(function(){return yo}));var c={};n.r(c),n.d(c,"name",(function(){return No})),n.d(c,"settings",(function(){return Mo}));var u={};n.r(u),n.d(u,"name",(function(){return zo})),n.d(u,"settings",(function(){return Ao}));var p={};n.r(p),n.d(p,"name",(function(){return qo})),n.d(p,"settings",(function(){return Go}));var m={};n.r(m),n.d(m,"name",(function(){return pr})),n.d(m,"settings",(function(){return mr}));var d={};n.r(d),n.d(d,"name",(function(){return wa})),n.d(d,"settings",(function(){return _a}));var h={};n.r(h),n.d(h,"name",(function(){return Oa})),n.d(h,"settings",(function(){return ja}));var b={};n.r(b),n.d(b,"name",(function(){return Ka})),n.d(b,"settings",(function(){return $a}));var g={};n.r(g),n.d(g,"name",(function(){return Ci})),n.d(g,"settings",(function(){return Ei}));var v={};n.r(v),n.d(v,"name",(function(){return Ui})),n.d(v,"settings",(function(){return Fi}));var f={};n.r(f),n.d(f,"name",(function(){return is})),n.d(f,"settings",(function(){return ss}));var k={};n.r(k),n.d(k,"name",(function(){return tc})),n.d(k,"settings",(function(){return nc}));var y={};n.r(y),n.d(y,"name",(function(){return vc})),n.d(y,"settings",(function(){return fc}));var w={};n.r(w),n.d(w,"name",(function(){return Qc})),n.d(w,"settings",(function(){return Xc}));var _={};n.r(_),n.d(_,"name",(function(){return _u})),n.d(_,"settings",(function(){return Cu}));var C={};n.r(C),n.d(C,"name",(function(){return Hu})),n.d(C,"settings",(function(){return Vu}));var E={};n.r(E),n.d(E,"name",(function(){return yp})),n.d(E,"settings",(function(){return _p}));var x={};n.r(x),n.d(x,"name",(function(){return Hp})),n.d(x,"settings",(function(){return Vp}));var O={};n.r(O),n.d(O,"name",(function(){return mm})),n.d(O,"settings",(function(){return dm}));var j={};n.r(j),n.d(j,"name",(function(){return Dm})),n.d(j,"settings",(function(){return zm}));var S=n(13),N=n.n(S),M=n(0),L=wp.i18n.__,P=wp.richText.toggleFormat,T=wp.element.Fragment,I=wp.components,B=I.SVG,D=I.Path,z=wp.blockEditor,A=z.RichTextToolbarButton,R=z.RichTextShortcut,U={name:"svbk/highlight",title:L("Highlight"),tagName:"em",className:"highlight",edit:function(e){var t=e.isActive,n=e.value,o=e.onChange,r=function(){return o(P(n,{type:"svbk/highlight"}))};return Object(M.createElement)(T,null,Object(M.createElement)(R,{type:"primary",character:"h",onUse:r}),Object(M.createElement)(A,{icon:Object(M.createElement)(B,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},Object(M.createElement)(D,{d:"M6,5 L2,9 L3,10 L0,13 L4,13 L5,12 L5,12 L6,13 L10,9 L6,5 L6,5 Z M10.2937851,0.706214905 C10.6838168,0.316183183 11.3138733,0.313873291 11.7059121,0.705912054 L14.2940879,3.29408795 C14.6839524,3.68395241 14.6796852,4.32031476 14.2937851,4.7062149 L11,8 L7,4 L10.2937851,0.706214905 Z"})),title:L("Highlight"),onClick:r,isActive:t,shortcutType:"primary",shortcutCharacter:"h",className:"toolbar-button-with-text toolbar-button__advanced-mark"}))}},F=wp.i18n.__,W=wp.richText.toggleFormat,H=wp.element.Fragment,V=wp.blockEditor,Z=V.RichTextToolbarButton,q=V.RichTextShortcut,G={name:"svbk/standout",title:F("Standout"),tagName:"em",className:"standout",edit:function(e){var t=e.isActive,n=e.value,o=e.onChange,r=function(){return o(W(n,{type:"svbk/standout"}))};return Object(M.createElement)(H,null,Object(M.createElement)(q,{type:"primary",character:"s",onUse:r}),Object(M.createElement)(Z,{icon:Object(M.createElement)("svg",{baseProfile:"tiny",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(M.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(M.createElement)("path",{d:"M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"})),title:F("Standout"),onClick:r,isActive:t,shortcutType:"primary",shortcutCharacter:"s",className:"toolbar-button-with-text toolbar-button__advanced-mark"}))}},K=wp.i18n.__,$=wp.richText.toggleFormat,Y=wp.element.Fragment,J=wp.blockEditor,Q=J.RichTextToolbarButton,X=J.RichTextShortcut,ee={name:"svbk/underline-stroke",title:K("Underline Stroke"),tagName:"em",className:"underline-stroke",edit:function(e){var t=e.isActive,n=e.value,o=e.onChange,r=function(){return o($(n,{type:"svbk/underline-stroke"}))};return Object(M.createElement)(Y,null,Object(M.createElement)(X,{type:"primary",character:"h",onUse:r}),Object(M.createElement)(Q,{icon:"admin-customizer",title:K("Underline Stroke"),onClick:r,isActive:t,shortcutType:"primary",shortcutCharacter:"h",className:"toolbar-button-with-text toolbar-button__advanced-mark"}))}},te=wp.richText.registerFormatType;[U,G,ee].forEach((function(e){var t=e.name,n=N()(e,["name"]);return te(t,n)}));n(17);var ne=n(1),oe=n.n(ne),re=n(2),ae=n.n(re),ie=wp.compose.createHigherOrderComponent,se=wp.element.Fragment,le=wp.blockEditor.InspectorControls,ce=wp.components,ue=ce.PanelBody,pe=ce.RangeControl,me=ce.RadioControl,de=ce.ToggleControl,he=wp.i18n.__,be=window.lodash,ge=function(e,t){return(!t||"core/gallery"===t.name)&&!!(e&&e.className&&e.className.includes("is-style-flickity"))},ve=function(e){var t={};if(e.flickity)try{t=JSON.parse(e.flickity)}catch(e){console.error("Invalid JSON for Flickity Options")}return t},fe=ie((function(e){return function(t){var n=t.setAttributes,o=t.attributes;if(!ge(o))return Object(M.createElement)(e,t);var r=ve(o),a=function(e){n({flickity:JSON.stringify(be.assign({},r,e))})};return Object(M.createElement)(se,null,Object(M.createElement)(e,t),Object(M.createElement)(le,null,Object(M.createElement)(ue,{title:he("Flickity Options"),initialOpen:!1},Object(M.createElement)(de,{label:he("Lazy Load"),help:he("Loads cell images when a cell is selected."),onChange:function(e){return a({lazyLoad:e?1:0})},checked:Boolean(r.lazyLoad)}),r.lazyLoad>0?Object(M.createElement)(pe,{label:he("How many images to lazyload in adjacent cells"),onChange:function(e){return a({lazyLoad:Number(e)})},value:r.lazyLoad,min:1}):null,Object(M.createElement)(de,{label:he("Wait for images to load"),help:he("Unloaded images have no size, which can throw off cell positions. To fix this, the this option re-positions cells once their images have loaded."),onChange:function(e){return a({imagesLoaded:e})},checked:Boolean(r.imagesLoaded)}),Object(M.createElement)(de,{label:he("Contain"),help:he("Contains cells to carousel element to prevent excess scroll at beginning or end. Has no effect if `wrapAround: true`"),onChange:function(e){return a({contain:e})},checked:r.contain}),Object(M.createElement)(me,{label:he("Cell Alignment"),help:he("Align cells within the carousel element."),selected:r.cellAlign||"center",options:[{label:he("Left"),value:"left"},{label:he("Center"),value:"center"},{label:he("Right"),value:"right"}],onChange:function(e){return a({cellAlign:e})}}),Object(M.createElement)(de,{label:he("Wrap Around"),help:he("At the end of cells, wrap-around to the other end for infinite scrolling."),onChange:function(e){return a({wrapAround:e})},checked:r.wrapAround}),Object(M.createElement)(de,{label:he("Prev Next Buttons"),help:he("Creates and enables previous & next buttons. Enabled by default"),onChange:function(e){return a({prevNextButtons:e})},checked:!1!==r.prevNextButtons}),Object(M.createElement)(de,{label:he("Paging Dots"),help:he("Creates and enables page dots."),onChange:function(e){return a({pageDots:e})},checked:!1!==r.pageDots}),Object(M.createElement)(pe,{label:he("Initial Index"),help:he("The initial selected cell."),onChange:function(e){return n({initialIndex:Number(e)-1})},value:r.initialIndex,initialPosition:1,min:1,max:o.images.length}),Object(M.createElement)(de,{label:he("Group Cells"),help:he("Groups cells together in slides. Flicking, page dots, and previous/next buttons are mapped to group slides, not individual cells"),onChange:function(e){return a({groupCells:Number(e?2:0)})},checked:r.groupCells>0}),r.groupCells>0?Object(M.createElement)(pe,{label:he("Group Cells Number"),onChange:function(e){return a({groupCells:Number(e)})},value:r.groupCells,min:2}):null,Object(M.createElement)(de,{label:he("Autoplay"),help:he("Automatically advances to the next cell."),onChange:function(e){return a({autoPlay:Number(e?3e3:0)})},checked:r.autoPlay>0}),r.autoPlay>0?Object(M.createElement)(se,null,Object(M.createElement)(pe,{label:he("Autoplay Timeout"),help:he("Advance cells ever X milliseconds. (ex. 3000 = 3 sec)"),onChange:function(e){return a({autoPlay:Number(e)})},value:r.autoPlay,min:100,max:99999}),Object(M.createElement)(de,{label:he("Pause Auto Play on Hover"),help:he("Auto play continues when user hovers over carousel"),onChange:function(e){return a({pauseAutoPlayOnHover:Boolean(e)})},checked:!1!==r.pauseAutoPlayOnHover})):null,Object(M.createElement)(de,{label:he("Draggable"),help:he("Enables dragging and flicking. Enabled by default when carousel has 2 or more slides"),onChange:function(e){return a({draggable:Boolean(e)})},checked:!1!==r.draggable&&o.images.length>1}),!1!==r.draggable&&o.images.length>1?Object(M.createElement)(se,null,Object(M.createElement)(de,{label:he("Free Scroll"),help:he("Enables content to be freely scrolled and flicked without aligning cells to an end position."),onChange:function(e){return a({freeScroll:e})},checked:r.freeScroll}),Object(M.createElement)(pe,{label:he("Drag threshold"),help:he("The number of pixels a mouse or touch has to move before dragging begins.."),onChange:function(e){return n({dragThreshold:Number(e)+1})},value:r.dragThreshold,min:0,max:999})):null,Object(M.createElement)(de,{label:he("Adaptive Height"),help:he("Changes height of carousel to fit height of selected slide."),onChange:function(e){return a({adaptiveHeight:e})},checked:r.adaptiveHeight}),Object(M.createElement)(de,{label:he("Right to Left"),help:he("Enables right-to-left layout.."),onChange:function(e){return a({rightToLeft:Boolean(e)})},checked:r.rightToLeft}))))}}),"withFlickityEditor"),ke=wp.i18n.__,ye=window.lodash,we=wp.blockEditor.RichText;wp.blocks.registerBlockStyle("core/gallery",{name:"flickity",label:"Flickity Carousel"}),wp.blocks.registerBlockStyle("core/gallery",{name:"flickity-slider",label:"Flickity Slider"});wp.hooks.addFilter("blocks.registerBlockType","svbk/flickity/gallery-block",(function(e,t){return"core/gallery"!==t?e:(ye.assign(e,{edit:fe(e.edit),keywords:lodash.union(e.keywords,[ke("flickity")]),attributes:ye.assign({},e.attributes,{flickity:{type:"string",source:"attribute",selector:".blocks-gallery-grid",attribute:"data-flickity"}})}),e.attributes.images.query.flickityLazyload={source:"attribute",selector:"img",attribute:"data-flickity-lazyload-src"},e.attributes.images.query.flickityLazyloadSrcset={source:"attribute",selector:"img",attribute:"data-flickity-lazyload-srcset"},e)}));wp.hooks.addFilter("blocks.getSaveElement","svbk/gallery-flickity-save",(function(e,t,n){if(!ge(n,t))return e;var o=n.images,r=n.caption,a=n.linkTo,i=ve(n);return i.cellSelector=".blocks-gallery-item",Object(M.createElement)("figure",{className:e.props.className},Object(M.createElement)("div",{className:"blocks-gallery-grid","data-flickity":JSON.stringify(i)},o.map((function(e){var t;switch(a){case"media":t=e.fullUrl||e.url;break;case"attachment":t=e.link}var n=ae()(oe()({"flickity-lazyload-image":i.lazyLoad},"wp-image-".concat(e.id),e.id)),o=Object(M.createElement)("img",{src:i.lazyLoad?null:e.url,srcSet:i.lazyLoad?null:e.srcset,alt:e.alt,"data-id":e.id,"data-full-url":e.fullUrl,"data-link":e.link,className:n,"data-flickity-lazyload-src":i.lazyLoad?e.url:null,"data-flickity-lazyload-srcset":i.lazyLoad?e.srcset:null});return Object(M.createElement)("div",{key:e.id||e.url,className:"blocks-gallery-item"},Object(M.createElement)("figure",null,t?Object(M.createElement)("a",{href:t},o):o,!we.isEmpty(e.caption)&&Object(M.createElement)(we.Content,{tagName:"figcaption",className:"blocks-gallery-item__caption",value:e.caption})))}))),!we.isEmpty(r)&&Object(M.createElement)(we.Content,{tagName:"figcaption",className:"blocks-gallery-caption",value:r}))}));wp.hooks.addFilter("blocks.getBlockAttributes","svbk/gallery-flickity-attributes",(function(e,t,n,o){return ge(e,t)?(e.images.forEach((function(e){!e.url&&e.flickityLazyload&&(e.url=e.flickityLazyload),!e.srcset&&e.flickityLazyloadSrcset&&(e.srcSet=e.flickityLazyloadSrcset)})),e):e}));var _e=wp.compose.createHigherOrderComponent,Ce=wp.element.Fragment,Ee=wp.blockEditor.InspectorControls,xe=wp.components,Oe=xe.PanelBody,je=xe.ToggleControl,Se=wp.i18n.__,Ne=_e((function(e){return function(t){var n=t.setAttributes,o=t.attributes,r=o.mobileHidden,a=o.criticalRendering,i=o.enableAnimation,s=o.className;return t.attributes.className=ae()(s,{"is-critical-rendering":a,"is-mobile-hidden":r,"is-animated":i}),Object(M.createElement)(Ce,null,Object(M.createElement)(e,t),Object(M.createElement)(Ee,null,Object(M.createElement)(Oe,{title:Se("Appearance","_svbk"),initialOpen:!1},Object(M.createElement)(je,{label:Se("Critical Rendering"),onChange:function(e){return n({criticalRendering:e})},checked:a}),Object(M.createElement)(je,{label:Se("Hide on Mobile"),onChange:function(e){return n({mobileHidden:e})},checked:r}),Object(M.createElement)(je,{label:Se("Enable Animation"),onChange:function(e){return n({enableAnimation:e})},checked:i}))))}}),"withAppearanceControls"),Me=function(e,t){return lodash.assign(e,{edit:Ne(e.edit),attributes:lodash.assign({},e.attributes,{criticalRendering:{type:"boolean",default:!1},mobileHidden:{type:"boolean",default:!1},enableAnimation:{type:"boolean",default:!1}})}),e},Le=n(4),Pe=n.n(Le),Te=n(5),Ie=n.n(Te),Be=n(6),De=n.n(Be),ze=n(7),Ae=n.n(ze),Re=n(8),Ue=n.n(Re),Fe=n(9),We=n.n(Fe);function He(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var Ve=lodash,Ze=Ve.get,qe=Ve.isEmpty,Ge=Ve.pick,Ke=wp.i18n.__,$e=wp.element,Ye=$e.Fragment,Je=$e.Component,Qe=wp.components,Xe=Qe.IconButton,et=Qe.PanelBody,tt=Qe.SelectControl,nt=Qe.TextareaControl,ot=Qe.Toolbar,rt=Qe.SVG,at=Qe.Rect,it=Qe.Path,st=Qe.Spinner,lt=wp.blockEditor,ct=lt.InspectorControls,ut=lt.BlockControls,pt=lt.MediaPlaceholder,mt=lt.MediaUpload,dt=lt.MediaUploadCheck,ht=wp.data.withSelect,bt=wp.compose.compose,gt=["image"],vt=Object(M.createElement)(rt,{width:20,height:20,viewBox:"0 0 20 20"},Object(M.createElement)(at,{x:11,y:3,width:7,height:5,rx:1}),Object(M.createElement)(at,{x:2,y:12,width:7,height:5,rx:1}),Object(M.createElement)(it,{d:"M13,12h1a3,3,0,0,1-3,3v2a5,5,0,0,0,5-5h1L15,9Z"}),Object(M.createElement)(it,{d:"M4,8H3l2,3L7,8H6A3,3,0,0,1,9,5V3A5,5,0,0,0,4,8Z"})),ft=function(e){function t(){var e;return Pe()(this,t),(e=De()(this,Ae()(t).apply(this,arguments))).updateAlt=e.updateAlt.bind(We()(e)),e.onSelectImage=e.onSelectImage.bind(We()(e)),e.onSelectURL=e.onSelectURL.bind(We()(e)),e.updateImageSize=e.updateImageSize.bind(We()(e)),e.onSetLinkDestination=e.onSetLinkDestination.bind(We()(e)),e.state={isEditing:!1},e}return Ue()(t,e),Ie()(t,[{key:"updateAlt",value:function(e){this.props.setAttributes({alt:e})}},{key:"onUploadError",value:function(e){this.props.noticeOperations.createErrorNotice(e),this.setState({isEditing:!0})}},{key:"onSelectImage",value:function(e){var t,n;e&&e.id?(this.setState({isEditing:!1}),this.props.setAttributes(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?He(n,!0).forEach((function(t){oe()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):He(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},((n=Ge(t=e,["alt","id","link","caption"])).url=Ze(t,["sizes","medium","url"])||Ze(t,["media_details","sizes","medium","source_url"])||t.url,n),{width:void 0,height:void 0}))):this.props.setAttributes({url:void 0,alt:void 0,id:void 0,caption:void 0})}},{key:"onSetLinkDestination",value:function(e){var t;t="none"===e?void 0:"media"===e?this.props.image&&this.props.image.source_url||this.props.url:"attachment"===e?this.props.image&&this.props.image.link:this.props.href,this.props.setAttributes({linkDestination:e,href:t})}},{key:"onSelectURL",value:function(e){e!==this.props.attributes.url&&this.props.setAttributes({url:e,id:void 0}),this.setState({isEditing:!1})}},{key:"updateImageSize",value:function(e){var t=this.props.image,n=Ze(t,["media_details","sizes",e]);this.props.setAttributes({url:n.source_url,width:n.width,height:n.height,size:e})}},{key:"getImageSizes",value:function(){var e=this.props,t=e.imageSizes,n=e.image;if(!n)return[];var o=Ze(n,["media_details","sizes"]);return o?t.reduce((function(e,t){var n=o[t.slug];return n&&e.push({value:t.slug,label:"".concat(t.name," (").concat(n.width," x ").concat(n.height,")")}),e}),[]):[]}},{key:"render",value:function(){var e=this,t=this.props,n=t.url,o=t.alt,r=t.id,a=t.size,i=void 0===a?"medium":a,s=t.inInspector,l=void 0!==s&&s,c=t.isMain,u=void 0!==c&&c,p=t.changeSize,m=void 0===p||p,d=t.image,h=n;!n&&d&&(!(h=Ze(d,["media_details","sizes",i,"source_url"]))&&(h=Ze(d,["media_details","sizes","thumbnail","source_url"])),!h&&(h=Ze(d,["media_details","sizes","full","source_url"])),!h&&(h=Ze(d,"source_url")));var b=this.getImageSizes(),g=Object(M.createElement)(Ye,null,!qe(b)&&m&&Object(M.createElement)(tt,{label:Ke("Image Size"),value:i,options:b,onChange:this.updateImageSize}),void 0!==o&&Object(M.createElement)(nt,{label:Ke("Alt Text (Alternative Text)"),value:o,onChange:this.updateAlt,help:Ke("Alternative text describes your image to people who can’t see it. Add a short description with its key details.")})),v=Object(M.createElement)(ot,{className:"block-editor-svbk-picture__controls"},Object(M.createElement)(mt,{onSelect:this.onSelectImage,allowedTypes:gt,value:r,render:function(e){var t=e.open;return Object(M.createElement)(Xe,{className:"components-toolbar__control",label:Ke("Edit image"),icon:vt,onClick:t})}}),Object(M.createElement)(Xe,{className:"components-toolbar__control",label:Ke("Remove image"),icon:"trash",onClick:function(){e.onSelectImage()}}));return Object(M.createElement)(Ye,null,h&&Object(M.createElement)(Ye,null,Object(M.createElement)(dt,null,u?Object(M.createElement)(ut,null,v):v),Object(M.createElement)("figure",{className:"block-editor-svbk-picture"},Object(M.createElement)("img",{src:h,alt:o}))),r&&!d&&Object(M.createElement)(st,null),!h&&!r&&Object(M.createElement)(pt,{onSelect:this.onSelectImage,onSelectURL:this.onSelectURL,accept:"image/*",allowedTypes:gt,value:{id:r,imageUrl:h},labels:this.props.labels}),l?g:Object(M.createElement)(ct,null,Object(M.createElement)(et,{title:Ke("Image Settings")},g)))}}]),t}(Je),kt=bt([ht((function(e,t){var n=e("core").getMedia,o=e("core/block-editor").getSettings,r=t.id,a=o(),i=a.maxWidth,s=a.isRTL,l=a.imageSizes;return{image:r?n(r):null,maxWidth:i,isRTL:s,imageSizes:l}}))])(ft),yt=wp.element.Component,wt=lodash,_t=wt.pick,Ct=wt.mapKeys,Et=wt.capitalize,xt=wp.i18n.__,Ot=wp.blockEditor,jt=Ot.PlainText,St=Ot.InspectorControls,Nt=Ot.ContrastChecker,Mt=Ot.PanelColorSettings,Lt=Ot.withColors,Pt=Ot.InnerBlocks,Tt=wp.compose.compose,It=wp.components,Bt=It.RangeControl,Dt=It.ButtonGroup,zt=It.IconButton,At=It.PanelBody,Rt=["core/paragraph","core/list","core/more","core-embed/youtube","core/button"],Ut=[["core/paragraph",{content:"This text should be shown in the preview.."}],["core/more",{}],["core/paragraph",{content:"This text should be shown in the single testimonial.."}]],Ft=function(e){function t(){return Pe()(this,t),De()(this,Ae()(t).apply(this,arguments))}return Ue()(t,e),Ie()(t,[{key:"render",value:function(){var e,t=this.props,n=t.attributes,o=t.setAttributes,r=t.className,a=t.isSelected,i=t.backgroundColor,s=t.textColor,l=t.setBackgroundColor,c=t.setTextColor,u=n.avatarUrl,p=n.avatarId,m=n.authorName,d=n.authorRole,h=n.rating,b=n.companyLogoUrl,g=n.companyLogoId,v=n.source,f=n.date,k=ae()(r,(e={"is-selected":a},oe()(e,i.class,i.class),oe()(e,s.class,s.class),e)),y={backgroundColor:i.color,color:s.color},w=RegExp(/is-style-/);w.test(n.className)&&n.className.replace(w,"");return Object(M.createElement)("div",{className:k,style:y},Object(M.createElement)("div",{className:"wp-block-svbk-testimonial__header"},Object(M.createElement)(kt,{setAttributes:function(e){var t=Ct(_t(e,["id","url"]),(function(e,t){return"avatar"+Et(t)}));o(t)},url:u,id:p,size:"medium",className:"wp-block-svbk-testimonial__author",labels:{title:xt("Author Avatar","_svbk")},changeSize:!1}),Object(M.createElement)(jt,{value:m,onChange:function(e){return o({authorName:e})},placeholder:xt("Name Surname..","_svbk"),className:"wp-block-svbk-testimonial__author-name"}),Object(M.createElement)(jt,{value:d,onChange:function(e){return o({authorRole:e})},placeholder:xt("Role..","_svbk"),className:"wp-block-svbk-testimonial__role-name"}),Object(M.createElement)("div",{className:ae()("block-editor-rating",oe()({},"rating-".concat(h),h))},Object(M.createElement)(Dt,{className:"block-editor-rating__stars"},[1,2,3,4,5].map((function(e){return Object(M.createElement)(zt,{key:e,icon:h>=e?"star-filled":"star-empty",onClick:function(){o({rating:e,ratingMeta:e})},label:e})})))),Object(M.createElement)("div",{className:"wp-block-svbk-testimonial__meta"},Object(M.createElement)(jt,{value:f,onChange:function(e){return o({date:e})},placeholder:xt("Date..","_svbk"),className:"wp-block-svbk-testimonial__date"}),Object(M.createElement)(jt,{value:v,onChange:function(e){return o({source:e})},placeholder:xt("Source..","_svbk"),className:"wp-block-svbk-testimonial__source"})),Object(M.createElement)(kt,{setAttributes:function(e){var t=Ct(_t(e,["id","url"]),(function(e,t){return"companyLogo"+Et(t)}));o(t)},url:b,id:g,size:"medium",className:"wp-block-svbk-testimonial__company-logo",labels:{title:xt("Company Logo","_svbk")},changeSize:!1})),Object(M.createElement)("div",{className:"wp-block-svbk-testimonial__content"},Object(M.createElement)(Pt,{templateLock:!1,allowedBlocks:Rt,template:Ut})),Object(M.createElement)(St,null,Object(M.createElement)(At,{title:xt("Testimonial Settings","_svbk")},Object(M.createElement)(Bt,{label:xt("Rating","_svbk"),value:h,onChange:function(e){o({rating:Number(e)})},min:0,max:5})),Object(M.createElement)(Mt,{title:xt("Color Settings"),initialOpen:!1,colorSettings:[{value:i.color,onChange:l,label:xt("Background Color")},{value:s.color,onChange:c,label:xt("Text Color")}]}),Object(M.createElement)(Nt,{textColor:s.color,backgroundColor:i.color})))}}]),t}(yt),Wt=Tt([Lt("backgroundColor",{textColor:"color"})])(Ft),Ht=wp.i18n.__,Vt=wp.blockEditor,Zt=Vt.getColorClassName,qt=Vt.InnerBlocks,Gt="svbk/testimonial",Kt={title:Ht("Testimonial","_svbk"),icon:"thumbs-up",category:"widgets",keywords:[Ht("testimonial"),Ht("feedback")],supports:{inserter:!1,reusable:!1,multiple:!1},styles:[{name:"default",label:Ht("Standard"),isDefault:!0},{name:"vip",label:Ht("VIP","_svbk")},{name:"press",label:Ht("Press","_svbk")}],attributes:{avatarUrl:{type:"string",source:"attribute",selector:".wp-block-svbk-testimonial__avatar img",attribute:"src"},avatarId:{type:"number"},authorName:{type:"string",source:"text",selector:".wp-block-svbk-testimonial__author-name"},authorRole:{type:"string",source:"text",selector:".wp-block-svbk-testimonial__author-role"},companyLogoUrl:{type:"string",source:"attribute",selector:".wp-block-svbk-testimonial__company-logo img",attribute:"src"},companyLogoId:{type:"number"},rating:{type:"string",source:"text",selector:".wp-block-svbk-testimonial__rating .rating__value"},ratingMeta:{type:"number",source:"meta",meta:"rating"},date:{type:"string",source:"text",selector:".wp-block-svbk-testimonial__date"},source:{type:"string",source:"text",selector:".wp-block-svbk-testimonial__source"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"}},edit:Wt,save:function(e){var t,n=e.attributes,o=n.avatarUrl,r=n.avatarId,a=n.authorName,i=n.authorRole,s=n.rating,l=n.companyLogoUrl,c=n.companyLogoId,u=n.source,p=n.date,m=n.backgroundColor,d=n.customBackgroundColor,h=n.textColor,b=n.customTextColor,g=Zt("background-color",m),v=Zt("color",h),f=ae()((t={"has-text-color":h||b,"has-background":m||d},oe()(t,v,v),oe()(t,g,g),t)),k={backgroundColor:g?void 0:d,color:v?void 0:b};return Object(M.createElement)("div",{className:f,style:k},Object(M.createElement)("div",{className:"wp-block-svbk-testimonial__header"},o&&Object(M.createElement)("figure",{className:"wp-block-svbk-testimonial__avatar"},Object(M.createElement)("img",{src:o,alt:"Profile Image",className:r?"wp-image-".concat(r):null})),a&&Object(M.createElement)("div",{className:"wp-block-svbk-testimonial__author"},Object(M.createElement)("div",{className:"wp-block-svbk-testimonial__author-name"},a),i&&Object(M.createElement)("div",{className:"wp-block-svbk-testimonial__author-role"},i)),s&&Object(M.createElement)("div",{className:ae()("wp-block-svbk-testimonial__rating","rating",oe()({},"rating--".concat(s),s))},Object(M.createElement)("span",{className:"rating__label"},"Rating:"),Object(M.createElement)("span",{className:"rating__value"},s)),(p||u)&&Object(M.createElement)("div",{className:"wp-block-svbk-testimonial__meta"},p&&Object(M.createElement)("span",{className:"wp-block-svbk-testimonial__date"},p),u&&Object(M.createElement)("span",{className:"wp-block-svbk-testimonial__source"}," ",u)),l&&Object(M.createElement)("figure",{className:"wp-block-svbk-testimonial__company-logo"},Object(M.createElement)("img",{src:l,alt:"Company Logo",className:c?"wp-image-".concat(c):null}))),Object(M.createElement)("div",{className:"wp-block-svbk-testimonial__content"},Object(M.createElement)(qt.Content,null)))}},$t=n(10),Yt=n.n($t),Jt=wp.element.Component,Qt=wp.element.RawHTML,Xt=wp.i18n.__,en=wp.components.Spinner,tn=wp.data.withSelect,nn=wp.compose.compose,on=function(e){function t(){return Pe()(this,t),De()(this,Ae()(t).apply(this,arguments))}return Ue()(t,e),Ie()(t,[{key:"getThumbnailImage",value:function(e){if(!e||!e.description)return!1;var t=document.createElement("template");return t.innerHTML=e.description.rendered.trim(),t.content.querySelector("img").outerHTML}},{key:"render",value:function(){var e,t=this.props,n=t.postType,o=t.display,r=t.excerptLength,a=t.post,i=t.thumbnailMedia,s=a.title.rendered.trim(),l=a.excerpt?a.excerpt.rendered:"";a.excerpt&&""===a.excerpt.raw&&(l=a.content.raw);var c=document.createElement("div");c.innerHTML=l,l=c.textContent||c.innerText||"";var u=this.getThumbnailImage(i),p=a.content.raw?a.content.raw:a.content.rendered,m=ae()((e={post:!0},oe()(e,"post--".concat(a.type),a.type),oe()(e,"post--format-".concat(a.format),a.format),oe()(e,"has-thumbnail",a.featured_media),e));return Object(M.createElement)("div",{className:m},Boolean(a.featured_media&&!i)&&Object(M.createElement)(en,null),a.featured_media&&!i&&Object(M.createElement)(en,null),i&&Object(M.createElement)(Qt,null,u),Object(M.createElement)("h3",null,s?Object(M.createElement)(Qt,null,s):Xt("(no title)")),"excerpt"===o&&Object(M.createElement)("div",{className:"wp-block-".concat(n,"__post-excerpt")},Object(M.createElement)(Qt,{key:"html"},r<l.trim().split(" ").length?l.trim().split(" ",r).join(" ")+" ... <a href="+a.link+'target="_blank" rel="noopener noreferrer">'+Xt("Read more")+"</a>":l.trim().split(" ",r).join(" "))),"full_post"===o&&Object(M.createElement)("div",{className:"wp-block-".concat(n,"__full-content")},Object(M.createElement)(Qt,{key:"html"},p.trim())))}}]),t}(Jt),rn=nn([tn((function(e,t){var n=e("core").getMedia,o=t.post.featured_media;return{thumbnailMedia:o?n(o):null}}))])(on),an=lodash,sn=an.isUndefined,ln=an.pickBy,cn=wp.element,un=cn.Component,pn=cn.Fragment,mn=wp.components,dn=mn.PanelBody,hn=mn.Placeholder,bn=mn.QueryControls,gn=mn.RangeControl,vn=mn.RadioControl,fn=mn.Spinner,kn=mn.ToggleControl,yn=mn.Toolbar,wn=wp.apiFetch,_n=wp.url.addQueryArgs,Cn=wp.i18n.__,En=wp.blockEditor,xn=En.InspectorControls,On=En.BlockAlignmentToolbar,jn=En.BlockControls,Sn=wp.data.withSelect,Nn={per_page:-1},Mn=function(e){function t(){var e;return Pe()(this,t),(e=De()(this,Ae()(t).apply(this,arguments))).state={categoriesList:[]},e.toggleDisplayPostDate=e.toggleDisplayPostDate.bind(We()(e)),e}return Ue()(t,e),Ie()(t,[{key:"componentDidMount",value:function(){var e=this;this.isStillMounted=!0,this.props.taxonomy&&(this.fetchRequest=wn({path:_n("/wp/v2/".concat(this.props.taxonomy),Nn)}).then((function(t){e.isStillMounted&&e.setState({categoriesList:t})})).catch((function(){e.isStillMounted&&e.setState({categoriesList:[]})})))}},{key:"componentWillUnmount",value:function(){this.isStillMounted=!1}},{key:"toggleDisplayPostDate",value:function(){var e=this.props.attributes.displayPostDate;(0,this.props.setAttributes)({displayPostDate:!e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.attributes,o=t.setAttributes,r=t.posts,a=t.taxonomy,i=t.children,s=this.state.categoriesList,l=n.display,c=n.align,u=n.postLayout,p=n.columns,m=n.order,d=n.orderBy,h=n.categories,b=n.postsToShow,g=n.offset,v=n.loadMore,f=Object(M.createElement)(xn,null,Object(M.createElement)(dn,{title:Cn("Post Content Settings")},Object(M.createElement)(vn,{label:"Show:",selected:l,options:[{label:"Excerpt",value:"excerpt"},{label:"Full Post",value:"full_post"}],onChange:function(e){return o({display:e})}})),Object(M.createElement)(dn,{title:Cn("Filter & Sorting","_svbk")},Object(M.createElement)(bn,Yt()({order:m,orderBy:d},{numberOfItems:b,categoriesList:s,selectedCategoryId:a?h:void 0,onOrderChange:function(e){return o({order:e})},onOrderByChange:function(e){return o({orderBy:e})},onCategoryChange:function(e){return o({categories:""!==e?e:void 0})},onNumberOfItemsChange:function(e){return o({postsToShow:e})}})),Object(M.createElement)(gn,{label:Cn("Offset","_svbk"),value:g,onChange:function(e){return o({offset:e})},min:0,max:10}),Object(M.createElement)(kn,{label:Cn("Show Load More","_svbk"),checked:v,onChange:function(e){return o({loadMore:Boolean(e)})}})),"grid"===u&&Object(M.createElement)(dn,{title:Cn("Layout")},Object(M.createElement)(gn,{label:Cn("Columns","_svbk"),value:p,onChange:function(e){return o({columns:e})},min:2,max:k?Math.min(6,r.length):6}))),k=Array.isArray(r)&&r.length;if(!k)return Object(M.createElement)(pn,null,f,Object(M.createElement)(hn,{icon:"admin-post"},Array.isArray(r)?Cn("No posts found."):Object(M.createElement)(fn,null)));var y=r.length>b?r.slice(0,b):r,w=[{icon:"list-view",title:Cn("List View"),onClick:function(){return o({postLayout:"list"})},isActive:"list"===u},{icon:"grid-view",title:Cn("Grid View"),onClick:function(){return o({postLayout:"grid"})},isActive:"grid"===u}],_=rn;return void 0!==i&&(_=i),Object(M.createElement)(pn,null,f,Object(M.createElement)(jn,null,Object(M.createElement)(On,{value:c,onChange:function(e){o({align:e})},controls:["center","wide","full"]}),Object(M.createElement)(yn,{controls:w})),Object(M.createElement)("div",{className:ae()(this.props.className,oe()({"is-grid":"grid"===u},"columns-".concat(p),"grid"===u))},y.map((function(t,o){return Object(M.createElement)(_,Yt()({},n,{post:t,postType:e.props.postType,key:o}))})),v&&Object(M.createElement)("div",{className:"wp-block-".concat(this.props.postType,"s__loadmore")},Cn("Load more","_svbk"))))}}]),t}(un),Ln=Sn((function(e,t){var n=t.attributes,o=n.postsToShow,r=n.order,a=n.orderBy,i=n.categories,s=e("core").getEntityRecords,l=ln({categories:i,order:r,orderby:a,per_page:o},(function(e){return!sn(e)}));return{posts:s("postType",t.postType,l)}}))(Mn),Pn=wp.i18n.__,Tn="svbk/testimonials",In={title:Pn("Testimonials","_svbk"),description:Pn("Display a list of testimonials.","_svbk"),icon:"thumbs-up",category:"widgets",keywords:[Pn("testimonials","_svbk")],supports:{html:!1},styles:[{name:"full",label:Pn("Full","_svbk"),isDefault:!0},{name:"small",label:Pn("Small","_svbk")},{name:"grid",label:Pn("Grid","_svbk")},{name:"masonry",label:Pn("Masonry","_svbk")}],attributes:{align:{type:"string"},categories:{type:"string"},className:{type:"string"},columns:{type:"number",default:3},order:{type:"string",default:"desc"},orderBy:{type:"string",default:"date"},display:{type:"string",default:"excerpt"},postLayout:{type:"string",default:"list"},postsToShow:{type:"number",default:5},offset:{type:"number",default:5},loadMore:{type:"boolean",default:!1}},getEditWrapperProps:function(e){var t=e.align;if(["left","center","right","wide","full"].includes(t))return{"data-align":t}},edit:function(e){return Object(M.createElement)(Ln,Yt()({postType:"testimonial",taxonomy:"testimonial_category"},e))},save:function(e){var t=e.className;return Object(M.createElement)("div",{className:t})}},Bn=wp.element,Dn=Bn.Component,zn=Bn.Fragment,An=wp.components,Rn=An.PanelBody,Un=An.Placeholder,Fn=An.RadioControl,Wn=An.TextControl,Hn=An.Spinner,Vn=An.Popover,Zn=wp.apiFetch,qn=wp.url.addQueryArgs,Gn=wp.i18n.__,Kn=wp.blockEditor.InspectorControls,$n=function(e){function t(){var e;return Pe()(this,t),(e=De()(this,Ae()(t).apply(this,arguments))).state={loading:!1,posts:[],postPreview:!1},e}return Ue()(t,e),Ie()(t,[{key:"componentDidMount",value:function(){this.isStillMounted=!0;var e=this.props.attributes;e&&e.id&&this.selectPost(e.id)}},{key:"componentWillUnmount",value:function(){this.isStillMounted=!1}},{key:"updatePosts",value:function(e){var t=this;this.setState({loading:!0}),this.fetchRequest=Zn({path:qn("/wp/v2/search",{search:e,per_page:20,type:"post",subtype:this.props.postType})}).then((function(e){t.isStillMounted&&t.setState({posts:e,loading:!1})})).catch((function(){t.isStillMounted&&t.setState({posts:[],loading:!1})}))}},{key:"selectPost",value:function(e){var t=this;(0,this.props.setAttributes)({id:e}),this.props.postType&&(this.setState({postLoading:!0}),this.fetchRequest=Zn({path:qn("/wp/v2/".concat(this.props.postType,"/").concat(e),{_locale:"user"})}).then((function(e){t.isStillMounted&&t.setState({postContent:e,postLoading:!1})})).catch((function(){t.isStillMounted&&t.setState({postContent:!1,postLoading:!1})})))}},{key:"render",value:function(){var e=this,t=this.props,n=t.attributes,o=t.setAttributes,r=t.className,a=this.state,i=a.posts,s=a.loading,l=a.postContent,c=a.postLoading,u=n.display,p=n.id,m=Object(M.createElement)(Kn,null,Object(M.createElement)(Rn,{title:Gn("Post Content Settings")},Object(M.createElement)(Fn,{label:"Show:",selected:u,options:[{label:"Excerpt",value:"excerpt"},{label:"Full Post",value:"full_post"}],onChange:function(e){return o({display:e})}})));return p?Object(M.createElement)(zn,null,m,c&&Object(M.createElement)(Hn,null),l&&Object(M.createElement)(rn,Yt()({},n,{post:l}))):Object(M.createElement)(zn,null,m,Object(M.createElement)(Un,{icon:"admin-post"},Object(M.createElement)(Wn,{label:Gn("Search","_svbk"),onChange:function(t){return e.updatePosts(t)}}),i.length&&Object(M.createElement)(Vn,{position:"bottom",noArrow:!0,focusOnMount:!1},Object(M.createElement)("div",{className:"".concat(r,"__suggestions"),role:"listbox"},i.map((function(t,n){return Object(M.createElement)("button",{key:t.id,role:"option",tabIndex:"-1",id:"post-".concat(n),onClick:function(){return e.selectPost(t.id)},"aria-selected":t.id===p},t.title)})))),s&&Object(M.createElement)(Hn,null)))}}]),t}(Dn),Yn=wp.i18n.__,Jn="svbk/testimonial-embed",Qn={title:Yn("Testimonial Embed","_svbk"),description:Yn("Embeds a tesitmonial","_svbk"),icon:"thumbs-up",category:"widgets",keywords:[Yn("testimonial","_svbk")],supports:{html:!1},styles:[{name:"full",label:Yn("Full","_svbk"),isDefault:!0},{name:"inline",label:Yn("Inline","_svbk")}],attributes:{align:{type:"string"},id:{type:"number"},display:{type:"string",default:"excerpt"}},edit:function(e){return Object(M.createElement)($n,Yt()({postType:"testimonial"},e))},save:function(e){var t=e.className;return Object(M.createElement)("div",{className:t})}},Xn=n(14),eo=n.n(Xn),to=wp.i18n.__,no=wp.element.Fragment;eo()(wp.components);var oo=wp.blockEditor.RichText,ro="svbk/author",ao={title:to("Author","_svbk"),description:to("Display the author of a post","_svbk"),icon:"admin-users",category:"widgets",keywords:[to("author","_svbk")],supports:{html:!1},multiple:!1,attributes:{author_name:{type:"string",meta:"author_name",source:"text",selector:".author__name"},author_role:{type:"string",meta:"author_role",source:"text",selector:".author__role"}},edit:function(e){var t=e.attributes,n=e.setAttributes,o=e.className,r=t.author_name,a=t.author_role;return Object(M.createElement)(no,null,Object(M.createElement)(oo,{identifier:"author-name",wrapperClassName:"wp-feedback-author-name",tagName:"div",value:r,onChange:function(e){return n({author_name:e})},className:o,placeholder:to("Author Name…","_svbk")}),Object(M.createElement)(oo,{identifier:"author-role",wrapperClassName:"wp-feedback-author-role",tagName:"cite",value:a,onChange:function(e){return n({author_role:e})},className:o,placeholder:to("Author Role…","_svbk")}))},save:function(e){var t=e.attributes,n=t.author_name,o=t.author_role,r=t.className;return Object(M.createElement)("div",{className:r},Object(M.createElement)("div",{className:"author__name"},n),o?Object(M.createElement)("cite",{className:"author__role"},o):null)}},io=wp.i18n.__,so=wp.element.Fragment,lo=wp.components,co=lo.PanelBody,uo=lo.RangeControl,po=(lo.ToggleControl,lo.ButtonGroup),mo=lo.IconButton,ho=wp.blockEditor.InspectorControls,bo="svbk/rating",go={title:io("Rating","_svbk"),description:io("Display a list of stars","_svbk"),icon:"star-filled",category:"widgets",keywords:[io("rating","_svbk")],supports:{html:!1},attributes:{rating:{type:"string",source:"text",selector:".rating__value",default:5},ratingMeta:{type:"string",meta:"rating"}},deprecated:[{attributes:{rating:{type:"string",meta:"rating",default:5}},supports:{html:!1},save:function(e){var t=e.attributes,n=t.rating,o=t.className;return Object(M.createElement)("div",{className:ae()([o],oe()({},"rating-".concat(n),n))},"Rating: ",n)}}],edit:function(e){var t=e.attributes,n=e.setAttributes,o=(e.className,t.rating);return Object(M.createElement)(so,null,Object(M.createElement)(ho,null,Object(M.createElement)(co,{title:io("Rating","_svbk")},Object(M.createElement)(uo,{label:io("Rating","_svbk"),value:o,onChange:function(e){n({rating:Number(e),ratingMeta:Number(e)})},min:0,max:5}))),Object(M.createElement)("div",{className:ae()("block-editor-rating",oe()({},"rating-".concat(o),o))},Object(M.createElement)(po,{className:"block-editor-rating__stars"},[1,2,3,4,5].map((function(e){return Object(M.createElement)(mo,{key:e,icon:o>=e?"star-filled":"star-empty",onClick:function(){n({rating:e})},label:e})})))))},save:function(e){var t=e.attributes.rating;return Object(M.createElement)("div",{className:ae()(oe()({},"rating-".concat(t),t))},Object(M.createElement)("span",{className:"wp-block-svbk-rating__label rating__label"},"Rating:"),Object(M.createElement)("span",{className:"wp-block-svbk-rating__value rating__value"},t))}},vo=wp.i18n.__,fo=wp.element.Fragment,ko="svbk/price",yo={title:vo("Product Price","_svbk"),description:vo("Display the price of a product","_svbk"),icon:"tag",category:"widgets",keywords:[vo("price","_svbk")],supports:{html:!1},attributes:{product_id:{type:"number"}},edit:function(e){var t=e.attributes,n=(e.setAttributes,e.className);t.product_id;return Object(M.createElement)(fo,null,Object(M.createElement)("div",{className:n},"9999 €"))},save:function(e){e.attributes;return null}},wo=wp.i18n.__,_o=wp.element.Fragment,Co=wp.components,Eo=Co.PanelBody,xo=Co.RangeControl,Oo=Co.ToggleControl,jo=Co.TextControl,So=wp.blockEditor.InspectorControls,No="svbk/addtocart",Mo={title:wo("Product Add To Cart","_svbk"),description:wo("Display the product add to cart button","_svbk"),icon:"products",category:"widgets",keywords:[wo("add to cart","_svbk"),wo("cart","_svbk")],supports:{html:!1},attributes:{product_id:{type:"number"},quantity:{type:"number",default:1},sku:{type:"string"},show_price:{type:"boolean",default:!1}},edit:function(e){var t=e.attributes,n=e.setAttributes,o=e.className,r=t.product_id,a=t.quantity,i=t.sku,s=t.show_price;return Object(M.createElement)(_o,null,Object(M.createElement)(So,null,Object(M.createElement)(Eo,{title:wo("Rating","_svbk")},Object(M.createElement)(jo,{label:wo("Product ID","_svbk"),value:r,onChange:function(e){n({product_id:Number(e)})}}),Object(M.createElement)(jo,{label:wo("SKU","_svbk"),value:i,onChange:function(e){n({sku:Number(e)})}}),Object(M.createElement)(xo,{label:wo("Quantity","_svbk"),value:a,onChange:function(e){n({quantity:Number(e)})},min:1,max:10}),Object(M.createElement)(Oo,{label:wo("Show price","_svbk"),checked:s,onChange:function(e){n({show_price:Boolean(e)})}}))),s?Object(M.createElement)("div",{className:"price"},"9999 €"):null,Object(M.createElement)("button",{className:o},wo("Add To Cart","_svbk")+" ("+a+" "+wo("Products","_svbk")+")"))},save:function(e){e.attributes;return null}},Lo=wp.i18n.__,Po=wp.element.Fragment,To=wp.components,Io=To.PanelBody,Bo=To.TextControl,Do=wp.blockEditor.InspectorControls,zo="svbk/stock",Ao={title:Lo("Product Stock","_svbk"),description:Lo("Display the remaining stock product","_svbk"),icon:"sort",category:"widgets",keywords:[Lo("stock","product")],supports:{html:!1},attributes:{product_id:{type:"number"}},edit:function(e){var t=e.attributes,n=e.setAttributes,o=e.className,r=t.product_id;return Object(M.createElement)(Po,null,Object(M.createElement)(Do,null,Object(M.createElement)(Io,{title:Lo("Product Availability","_svbk")},Object(M.createElement)(Bo,{label:Lo("Product ID","_svbk"),value:r,onChange:function(e){n({product_id:Number(e)})}}))),Object(M.createElement)("div",{className:o},"XX stock items"))},save:function(e){e.attributes;return null}},Ro=wp.i18n.__,Uo=wp.element.Fragment,Fo=wp.components,Wo=Fo.PanelBody,Ho=Fo.TextControl,Vo=Fo.Dashicon,Zo=wp.blockEditor.InspectorControls,qo="svbk/product-rating",Go={title:Ro("Product Rating","_svbk"),description:Ro("Display the rating of a product","_svbk"),icon:"star-half",category:"widgets",keywords:[Ro("rating","_svbk"),Ro("product","_svbk")],supports:{html:!1},attributes:{product_id:{type:"number"}},edit:function(e){var t=e.attributes,n=e.setAttributes,o=e.className,r=t.product_id;return Object(M.createElement)(Uo,null,Object(M.createElement)(Zo,null,Object(M.createElement)(Wo,{title:Ro("Settings","_svbk")},Object(M.createElement)(Ho,{label:Ro("Product ID","_svbk"),value:r,onChange:function(e){n({product_id:Number(e)})}}))),Object(M.createElement)(Vo,{icon:"star-half"}),Object(M.createElement)("div",{className:o},"Product Rating"))},save:function(e){e.attributes;return null}},Ko=wp.i18n.__,$o=wp.blockEditor.RichText,Yo=wp.element.Fragment,Jo=[{attributes:{callus_title:{type:"string",source:"text",selector:".callus__title",default:Ko("Preferisci parlarne a voce?","_svbk")},callus_text:{type:"string",source:"text",selector:".callus__text",default:Ko("Chiamaci al numero","_svbk")},callus_number:{type:"string",source:"text",selector:".callus__number",default:Ko("(+39) 000 00000000","_svbk")}},supports:{html:!1},migrate:function(e){return{title:e.callus_title,text:e.callus_text,number:e.callus_number.replace(/\(|\)|\+39|\s/gi,""),action:Ko("Chiamaci","_svbk")}},save:function(e){var t=e.attributes,n=t.callus_title,o=t.callus_text,r=t.callus_number,a=t.className,i=r.replace("+","00").replace(/[\s\(\)]/g,"");return Object(M.createElement)("div",{className:a},Object(M.createElement)("h3",{className:"callus__title"},n),Object(M.createElement)("p",{className:"callus__text"},o),Object(M.createElement)("a",{href:"tel:"+i,className:"callus__number"},r))}},{attributes:{callus_title:{type:"string",source:"text",selector:".callus__title",default:Ko("Preferisci parlarne a voce?","_svbk")},callus_text:{type:"string",source:"text",selector:".callus__text",default:Ko("Chiamaci al numero","_svbk")},callus_number:{type:"string",source:"text",selector:".callus__number",default:Ko("(+39) 000 00000000","_svbk")}},supports:{html:!1},migrate:function(e){return{title:e.callus_title,text:e.callus_text,number:e.callus_number.replace(/\(|\)|\+39|\s/gi,""),action:Ko("Chiamaci","_svbk")}},save:function(e){var t=e.attributes,n=t.callus_title,o=t.callus_text,r=t.callus_number,a=t.className,i=r.replace("+","00").replace(/[\s\(\)]/g,"");return Object(M.createElement)("div",{className:a},Object(M.createElement)("h3",{className:"callus__title"},n),Object(M.createElement)("p",{className:"callus__text"},o),Object(M.createElement)("a",{href:"tel:0039"+i,className:"callus__number"},r))}},{supports:{html:!1},attributes:{title:{type:"string",source:"html",selector:".wp-block-svbk-call-us__title"},text:{type:"string",source:"html",selector:".wp-block-svbk-call-us__text",default:Ko("Chiamaci al numero","_svbk")},number:{type:"string",source:"html",selector:".wp-block-svbk-call-us__number"},action:{type:"string",source:"html",selector:".wp-block-svbk-call-us__action"}},save:function(e){var t=e.attributes,n=t.title,o=t.text,r=t.number,a=t.action,i=t.className;return Object(M.createElement)("div",{className:i},Object(M.createElement)($o.Content,{tagName:"h3",className:"wp-block-svbk-call-us__title callus__title",value:n}),Object(M.createElement)($o.Content,{tagName:"p",className:"wp-block-svbk-call-us__text callus__text",value:o}),Object(M.createElement)("a",{href:"tel:"+r,className:"wp-block-svbk-call-us__button callus__number"},Object(M.createElement)($o.Content,{tagName:"span",className:"wp-block-svbk-call-us__action wp-block-button__action",value:a}),Object(M.createElement)("span",{class:"wp-block-svbk-call-us__number wp-block-button__value"},r)))}},{supports:{html:!1},attributes:{title:{type:"string",source:"html",selector:".wp-block-svbk-call-us__title"},text:{type:"string",source:"html",selector:".wp-block-svbk-call-us__text",default:Ko("Chiamaci al numero","_svbk")},number:{type:"string",source:"html",selector:".wp-block-svbk-call-us__number"},action:{type:"string",source:"html",selector:".wp-block-svbk-call-us__action"}},save:function(e){var t=e.attributes,n=t.title,o=t.text,r=t.number,a=t.action,i=t.className,s=ae()(i,oe()({},"has-action",a));return Object(M.createElement)("div",{className:s},Object(M.createElement)($o.Content,{tagName:"h3",className:"wp-block-svbk-call-us__title callus__title",value:n}),Object(M.createElement)($o.Content,{tagName:"p",className:"wp-block-svbk-call-us__text callus__text",value:o}),Object(M.createElement)("a",{href:"tel:"+r,className:"wp-block-svbk-call-us__button callus__number"},a&&Object(M.createElement)(Yo,null,Object(M.createElement)($o.Content,{tagName:"span",className:"wp-block-svbk-call-us__action wp-block-button__action",value:a})," "),Object(M.createElement)("span",{class:"wp-block-svbk-call-us__number wp-block-button__value"},r)))}}],Qo=wp.i18n.__,Xo=wp.element.Component,er=wp.components,tr=er.Dashicon,nr=er.IconButton,or=wp.blockEditor,rr=or.RichText,ar=or.BlockControls,ir=or.AlignmentToolbar,sr=function(e){function t(){return Pe()(this,t),De()(this,Ae()(t).apply(this,arguments))}return Ue()(t,e),Ie()(t,[{key:"render",value:function(){var e,t=this.props,n=t.attributes,o=t.setAttributes,r=t.className,a=t.isSelected,i=n.number,s=n.action,l=n.actionWide,c=n.align,u=ae()(r,(e={},oe()(e,"has-action",s),oe()(e,"has-action-wide",l),oe()(e,"has-align-".concat(c),c),e));return Object(M.createElement)("div",{classNames:u},Object(M.createElement)(rr,{placeholder:Qo("Action text…"),value:s,onChange:function(e){return o({action:e})},formattingControls:["bold","italic","strikethrough"],className:"wp-block-svbk-hero__link block-library-button"}),Object(M.createElement)(rr,{placeholder:Qo("Wide button action text…"),value:l,onChange:function(e){return o({actionWide:e})},formattingControls:["bold","italic","strikethrough"],className:"wp-block-svbk-hero__link block-library-button"}),a&&Object(M.createElement)("form",{className:"block-library-button__inline-link",onSubmit:function(e){return e.preventDefault()}},Object(M.createElement)(tr,{icon:"phone"}),Object(M.createElement)("div",{className:"block-editor-call-button-input"},Object(M.createElement)("input",{type:"text","aria-label":Qo("Phone Number","_svbk"),required:!0,value:i,onChange:function(e){return o({number:e.target.value})},placeholder:Qo("01 23456789"),role:"combobox"})),Object(M.createElement)(nr,{icon:"editor-break",label:Qo("Apply"),type:"submit"})),Object(M.createElement)(ar,null,Object(M.createElement)(ir,{value:c,onChange:function(e){o({align:e})}})))}}]),t}(Xo),lr=wp.i18n.__,cr=wp.blockEditor.RichText,ur=wp.element.Fragment,pr="svbk/call-us",mr={title:lr("Call Us","_svbk"),description:lr("Display fancy phone contact","_svbk"),icon:"phone",category:"common",keywords:[lr("phone","_svbk"),lr("contacts","_svbk")],supports:{html:!1},multiple:!1,attributes:{action:{type:"string",source:"html",selector:".wp-block-svbk-call-us__action--default"},actionWide:{type:"string",source:"html",selector:".wp-block-svbk-call-us__action--wide",default:lr("Chiama il","_svbk")},number:{type:"string",source:"html",selector:".wp-block-svbk-call-us__number"},align:{type:"string"}},deprecated:Jo,edit:sr,save:function(e){var t,n=e.attributes,o=n.number,r=n.action,a=n.actionWide,i=n.align,s=ae()((t={},oe()(t,"has-action",r),oe()(t,"has-action-wide",a),oe()(t,"has-align-".concat(i),i),t)),l=o.replace("+","00").replace(/[\s\(\)]/g,"");return Object(M.createElement)("div",{className:s},Object(M.createElement)("a",{href:"tel:"+l,className:"wp-block-svbk-call-us__link"},r&&Object(M.createElement)(cr.Content,{tagName:"span",className:"wp-block-svbk-call-us__action wp-block-svbk-call-us__action--default",value:r}),a&&Object(M.createElement)(ur,null,Object(M.createElement)(cr.Content,{tagName:"span",className:" wp-block-svbk-call-us__action wp-block-svbk-call-us__action--wide",value:a})," ",Object(M.createElement)("span",{class:"wp-block-svbk-call-us__number"},o))))}},dr=wp.i18n.__,hr=wp.element.Component,br=wp.blockEditor.PlainText,gr=wp.components,vr=gr.Disabled,fr=gr.SandBox,kr=function(e){function t(){var e;return Pe()(this,t),(e=De()(this,Ae()(t).apply(this,arguments))).state={isPreview:!0},e.switchToPreview=e.switchToPreview.bind(We()(e)),e.switchToEditor=e.switchToEditor.bind(We()(e)),e}return Ue()(t,e),Ie()(t,[{key:"switchToPreview",value:function(){this.setState({isPreview:!0})}},{key:"switchToEditor",value:function(){this.setState({isPreview:!1})}},{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.isSelected,o=e.setAttributes,r=e.className,a=t.icon,i=this.state.isPreview,s=ae()(r,"icon-editor");return Object(M.createElement)("div",{className:s},n&&Object(M.createElement)("div",{className:"components-toolbar icon-editor__toolbar"},a&&Object(M.createElement)("button",{className:"components-tab-button icon-editor__toolbar-button ".concat(i?"is-active":""),onClick:this.switchToPreview},Object(M.createElement)("span",null,dr("View"))),Object(M.createElement)("button",{className:"components-tab-button icon-editor__toolbar-button ".concat(i?"":"is-active"),onClick:this.switchToEditor},Object(M.createElement)("span",null,dr("Code")))),Object(M.createElement)(vr.Consumer,null,(function(e){return i||e?Object(M.createElement)("div",{className:"icon-editor__icon"},Object(M.createElement)(fr,{html:a})):Object(M.createElement)("div",{className:"icon-editor__editor"},Object(M.createElement)("h3",null,"SVG Code"),Object(M.createElement)(br,{value:a,onChange:function(e){return o({icon:e})},placeholder:dr("Paste SVG…"),"aria-label":dr("SVG")}))})))}}]),t}(hr),yr=wp.i18n.__,wr=wp.element.Component,_r=wp.blockEditor,Cr=_r.InspectorControls,Er=_r.PanelColorSettings,xr=_r.withColors,Or=function(e){function t(){return Pe()(this,t),De()(this,Ae()(t).apply(this,arguments))}return Ue()(t,e),Ie()(t,[{key:"render",value:function(){var e=this.props,t=e.setTextColor,n=e.textColor,o=ae()("wp-block-svbk-icon",oe()({},n.class,n.class));return Object(M.createElement)("div",{className:o},Object(M.createElement)(kr,this.props),Object(M.createElement)(Cr,null,Object(M.createElement)(Er,{title:yr("Icon Color Settings"),initialOpen:!1,colorSettings:[{value:n.color,onChange:t,label:yr("Text Color")}]})))}}]),t}(wr),jr=xr("backgroundColor",{textColor:"color"})(Or),Sr=lodash.range,Nr=wp.i18n,Mr=Nr.__,Lr=Nr.sprintf,Pr=wp.element,Tr=(Pr.Fragment,Pr.Component),Ir=wp.components.Toolbar,Br=(wp.blockEditor.RichText,function(e){function t(){return Pe()(this,t),De()(this,Ae()(t).apply(this,arguments))}return Ue()(t,e),Ie()(t,[{key:"createLevelControl",value:function(e,t,n){return{icon:"heading",title:Lr(Mr("Heading %d"),e),isActive:e===t,onClick:function(){return n(e)},subscript:String(e)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.minLevel,o=t.maxLevel,r=t.selectedLevel,a=t.onChange;return Object(M.createElement)(Ir,{controls:Sr(n,o).map((function(t){return e.createLevelControl(t,r,a)}))})}}]),t}(Tr)),Dr=wp.element,zr=Dr.Fragment,Ar=Dr.Component,Rr=lodash,Ur=Rr.pick,Fr=Rr.mapKeys,Wr=Rr.capitalize,Hr=wp.i18n.__,Vr=wp.blockEditor,Zr=Vr.RichText,qr=Vr.URLInput,Gr=Vr.InspectorControls,Kr=Vr.BlockControls,$r=Vr.ContrastChecker,Yr=Vr.PanelColorSettings,Jr=Vr.FontSizePicker,Qr=Vr.AlignmentToolbar,Xr=Vr.withColors,ea=Vr.withFontSizes,ta=Vr.InnerBlocks,na=wp.components,oa=na.Dashicon,ra=na.IconButton,aa=(na.Panel,na.PanelBody),ia=na.Placeholder,sa=na.TextControl,la=na.Button,ca=wp.compose.compose,ua=["core/paragraph","core/list","core/heading","core/group"],pa=[["core/paragraph",{content:"Lorem ipsum sit amet..."}]],ma=function(e){function t(){return Pe()(this,t),De()(this,Ae()(t).apply(this,arguments))}return Ue()(t,e),Ie()(t,[{key:"render",value:function(){var e,t=this.props,n=t.attributes,o=t.setAttributes,r=t.className,a=t.isSelected,i=t.backgroundColor,s=t.textColor,l=t.ribbonColor,c=t.setBackgroundColor,u=t.setTextColor,p=t.setRibbonColor,m=t.fontSize,d=t.setFontSize,h=n.align,b=n.pictureUrl,g=n.pictureAlt,v=n.pictureId,f=n.pictureSize,k=n.title,y=n.titleLevel,w=n.subtitle,_=n.buttonUrl,C=n.buttonText,E=n.imageType,x=n.ribbonText,O=ae()(r,(e={"is-selected":a},oe()(e,i.class,i.class),oe()(e,s.class,s.class),oe()(e,m.class,m.class),e)),j={backgroundColor:i.color,color:s.color,fontSize:m.size?m.size+"px":void 0,textAlign:h},S={backgroundColor:l?l.color:void 0},N=y?"h"+y:"h3";return Object(M.createElement)(zr,null,Object(M.createElement)("div",{className:O,style:j},x&&Object(M.createElement)("div",{className:"wp-block-svbk-card__ribbon",style:S},x),!E&&Object(M.createElement)(ia,{icon:"format-image",label:Hr("Image"),instructions:Hr("Please select if you want to use an image or an icon")},Object(M.createElement)(la,{isLarge:!0,onClick:function(){o({imageType:"picture"})}},Hr("Image")),Object(M.createElement)(la,{isLarge:!0,onClick:function(){o({imageType:"icon"})}},Hr("Icon"))),E&&Object(M.createElement)(ra,{icon:"no",label:Hr("Back to picture type choice"),onClick:function(){o({imageType:null})}}),"picture"==E&&Object(M.createElement)(kt,{setAttributes:function(e){var t=Fr(Ur(e,["id","url","alt","size"]),(function(e,t){return"picture"+Wr(t)}));o(t)},url:b,id:v,size:f,alt:g,isMain:!0}),"icon"==E&&Object(M.createElement)(jr,this.props),Object(M.createElement)(Zr,{tagName:N,value:k,onChange:function(e){return o({title:e})},placeholder:Hr("This is my title..","_svbk"),className:"wp-block-svbk-card__title"}),Object(M.createElement)(Zr,{tagName:"div",value:w,onChange:function(e){return o({subtitle:e})},placeholder:Hr("Subtitle..","_svbk"),className:"wp-block-svbk-card__subtitle"}),Object(M.createElement)(ta,{templateLock:!1,allowedBlocks:ua,template:pa}),Object(M.createElement)(Zr,{placeholder:Hr("Button text…"),value:C,onChange:function(e){return o({buttonText:e})},formattingControls:["bold","italic","strikethrough"],className:"wp-block-svbk-card__link block-library-button"}),a&&Object(M.createElement)("form",{className:"block-library-button__inline-link",onSubmit:function(e){return e.preventDefault()}},Object(M.createElement)(oa,{icon:"admin-links"}),Object(M.createElement)(qr,{value:_,onChange:function(e){return o({buttonUrl:e})}}),Object(M.createElement)(ra,{icon:"editor-break",label:Hr("Apply"),type:"submit"}))),Object(M.createElement)(Kr,null,Object(M.createElement)(Br,{minLevel:2,maxLevel:5,selectedLevel:y,onChange:function(e){o({titleLevel:e})}}),Object(M.createElement)(Qr,{value:h,onChange:function(e){o({align:e})}})),Object(M.createElement)(Gr,null,Object(M.createElement)(aa,{title:Hr("Text Settings"),className:"blocks-font-size"},Object(M.createElement)(Jr,{value:m.size,onChange:d})),Object(M.createElement)(Yr,{title:Hr("Color Settings"),initialOpen:!1,colorSettings:[{value:i.color,onChange:c,label:Hr("Background Color")},{value:s.color,onChange:u,label:Hr("Text Color")}]}),Object(M.createElement)($r,Yt()({textColor:s.color,backgroundColor:i.color},{fontSize:m.size})),Object(M.createElement)(aa,{title:Hr("Ribbon Settings","_svbk")},Object(M.createElement)(sa,{label:Hr("Ribbon Text","_svbk"),value:x,onChange:function(e){return o({ribbonText:e})}})),Object(M.createElement)(Yr,{title:Hr("Ribbon Color Settings","_svbk"),initialOpen:!1,colorSettings:[{value:l.color,onChange:p,label:Hr("Ribbon Color")}]})))}}]),t}(Ar),da=ca([Xr("backgroundColor",{textColor:"color"},"ribbonColor"),ea("fontSize")])(ma),ha=wp.i18n.__,ba=wp.blockEditor,ga=ba.RichText,va=ba.getColorClassName,fa=ba.getFontSizeClass,ka=ba.InnerBlocks,ya=wp.element.RawHTML,wa="svbk/card",_a={title:ha("Card","_svbk"),icon:"id",category:"common",keywords:[ha("card"),ha("block"),ha("content")],styles:[{name:"default",label:ha("Default"),isDefault:!0},{name:"featured",label:ha("Featured")}],attributes:{pictureUrl:{type:"string",source:"attribute",attribute:"src",selector:".wp-block-svbk-card__picture img"},pictureAlt:{type:"string",source:"attribute",attribute:"alt",selector:".wp-block-svbk-card__picture img"},pictureId:{type:"number"},pictureSize:{type:"string"},imageType:{type:"string"},icon:{type:"string",source:"html",selector:".wp-block-svbk-card__icon"},title:{type:"string",source:"text",selector:".wp-block-svbk-card__title"},titleLevel:{type:"number",default:3},subtitle:{type:"string",source:"text",selector:".wp-block-svbk-card__subtitle"},buttonUrl:{type:"string",source:"attribute",attribute:"href",selector:".wp-block-svbk-card__link"},ribbonText:{type:"string",source:"text",selector:".wp-block-svbk-card__ribbon"},ribbonColor:{type:"string"},customRibbonColor:{type:"string"},buttonText:{type:"string",source:"text",selector:".wp-block-svbk-card__link"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"},align:{type:"string"},contentAlign:{type:"string"}},edit:da,save:function(e){var t,n=e.attributes,o=n.imageType,r=n.pictureUrl,a=n.pictureAlt,i=n.pictureId,s=n.icon,l=n.title,c=n.titleLevel,u=n.subtitle,p=n.backgroundColor,m=n.customBackgroundColor,d=n.textColor,h=n.customTextColor,b=n.fontSize,g=n.customFontSize,v=n.align,f=n.contentAlign,k=n.buttonUrl,y=n.buttonText,w=n.ribbonColor,_=n.customRibbonColor,C=n.ribbonText,E=c?"h"+c:"h3",x=va("background-color",p),O=va("color",d),j=va("ribbon",w),S=fa(b),N=ae()((t={"has-text-color":d||h,"has-background":p||m,"has-image":"image"===o,"has-icon":"icon"===o},oe()(t,S,S),oe()(t,O,O),oe()(t,x,x),t)),L={backgroundColor:x?void 0:m,color:O?void 0:h,fontSize:S?void 0:g,textAlign:v},P={backgroundColor:j?void 0:_},T={textAlign:f};return Object(M.createElement)("div",{className:N,style:L},C&&Object(M.createElement)("div",{className:ae()("wp-block-svbk-card__ribbon",oe()({},j,j)),style:P},C),"picture"==o&&r&&Object(M.createElement)("figure",{className:"wp-block-svbk-card__picture"},Object(M.createElement)("img",{src:r,alt:a,className:i?"wp-image-".concat(i):null})),"icon"==o&&s&&Object(M.createElement)("div",{className:"wp-block-svbk-card__icon"},Object(M.createElement)(ya,null,s)),l&&Object(M.createElement)(ga.Content,{tagName:E,className:"wp-block-svbk-card__title",value:l}),u&&Object(M.createElement)("p",{className:"wp-block-svbk-card__subtitle"},u),Object(M.createElement)("div",{className:"wp-block-svbk-card__content",style:T},Object(M.createElement)(ka.Content,null)),y&&k&&Object(M.createElement)("div",{className:"wp-block-button wp-block-svbk-card__button"},Object(M.createElement)("a",{className:"wp-block-button__link wp-block-svbk-card__link",href:k},y)))}},Ca=wp.element.RawHTML,Ea=wp.i18n.__,xa=wp.blockEditor.getColorClassName,Oa="svbk/icon",ja={title:Ea("Icon (SVG)"),description:Ea("Insert an SVG Icon"),icon:"star-filled",category:"common",keywords:[Ea("svg"),Ea("icon")],supports:{html:!1},attributes:{icon:{type:"string",source:"html",selector:".wp-block-svbk-icon"},textColor:{type:"string"}},edit:jr,save:function(e){var t=e.attributes,n=t.textColor,o=xa("color",n);return Object(M.createElement)("div",{className:o},Object(M.createElement)(Ca,null,t.icon))}},Sa=wp.element,Na=Sa.Fragment,Ma=Sa.Component,La=wp.i18n.__,Pa=wp.blockEditor,Ta=Pa.RichText,Ia=Pa.InspectorControls,Ba=Pa.BlockControls,Da=Pa.ContrastChecker,za=Pa.PanelColorSettings,Aa=Pa.AlignmentToolbar,Ra=Pa.withColors,Ua=wp.compose.compose,Fa=function(e){function t(){return Pe()(this,t),De()(this,Ae()(t).apply(this,arguments))}return Ue()(t,e),Ie()(t,[{key:"render",value:function(){var e,t=this.props,n=t.attributes,o=t.setAttributes,r=t.className,a=t.isSelected,i=t.backgroundColor,s=t.textColor,l=t.setBackgroundColor,c=t.setTextColor,u=n.align,p=n.title,m=n.titleLevel,d=n.content,h=ae()(r,(e={"is-selected":a},oe()(e,i.class,i.class),oe()(e,s.class,s.class),e)),b={backgroundColor:i.color,color:s.color,textAlign:u},g=m?"h"+m:"h2";return Object(M.createElement)(Na,null,Object(M.createElement)("div",{className:h},Object(M.createElement)(kr,this.props),Object(M.createElement)("div",{style:b},Object(M.createElement)(Ta,{tagName:g,value:p,onChange:function(e){return o({title:e})},placeholder:La("This is my title..","_svbk"),className:"wp-block-svbk-bullet__title"}),Object(M.createElement)(Ta,{tagName:"div",value:d,onChange:function(e){return o({content:e})},placeholder:La("Content..","_svbk"),className:"wp-block-svbk-bullet__content"}))),Object(M.createElement)(Ba,null,Object(M.createElement)(Br,{minLevel:2,maxLevel:5,selectedLevel:m,onChange:function(e){o({titleLevel:e})}}),Object(M.createElement)(Aa,{value:u,onChange:function(e){o({align:e})}})),Object(M.createElement)(Ia,null,Object(M.createElement)(za,{title:La("Color Settings"),initialOpen:!1,colorSettings:[{value:i.color,onChange:l,label:La("Background Color")},{value:s.color,onChange:c,label:La("Text Color")}]}),Object(M.createElement)(Da,{textColor:s.color,backgroundColor:i.color})))}}]),t}(Ma),Wa=Ua([Ra("backgroundColor",{textColor:"color"})])(Fa),Ha=wp.i18n.__,Va=wp.blockEditor,Za=Va.RichText,qa=Va.getColorClassName,Ga=wp.element.RawHTML,Ka="svbk/bullet",$a={title:Ha("Bullet","_svbk"),icon:"pressthis",category:"common",keywords:[Ha("bullet"),Ha("card")],styles:[{name:"default",label:Ha("Default"),isDefault:!0},{name:"offset",label:Ha("Offset","_svbk")}],attributes:{icon:{type:"string",source:"html",selector:".wp-block-svbk-bullet__icon"},title:{type:"string",source:"html",selector:".wp-block-svbk-bullet__title"},titleLevel:{type:"number",default:2},content:{type:"string",source:"html",selector:".wp-block-svbk-bullet__content"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},align:{type:"string"}},edit:Wa,save:function(e){var t,n=e.attributes,o=n.icon,r=n.title,a=n.titleLevel,i=n.content,s=n.backgroundColor,l=n.customBackgroundColor,c=n.textColor,u=n.customTextColor,p=n.align,m=a?"h"+a:"h2",d=qa("background-color",s),h=qa("color",c),b=ae()((t={"has-text-color":c||u,"has-background":s||l},oe()(t,h,h),oe()(t,d,d),t)),g={backgroundColor:d?void 0:l,color:h?void 0:u,textAlign:p};return Object(M.createElement)("div",{className:b,style:g},o&&Object(M.createElement)("div",{className:"wp-block-svbk-bullet__icon"},Object(M.createElement)(Ga,null,o)),r&&Object(M.createElement)(Za.Content,{tagName:m,className:"wp-block-svbk-bullet__title",value:r}),i&&Object(M.createElement)(Za.Content,{tagName:"p",className:"wp-block-svbk-bullet__content",value:i}))}},Ya=wp.element,Ja=Ya.Fragment,Qa=Ya.Component,Xa=lodash,ei=Xa.pick,ti=Xa.mapKeys,ni=Xa.capitalize,oi=wp.i18n.__,ri=wp.blockEditor,ai=ri.RichText,ii=ri.URLInput,si=ri.InspectorControls,li=ri.BlockControls,ci=ri.ContrastChecker,ui=ri.PanelColorSettings,pi=ri.AlignmentToolbar,mi=ri.withColors,di=wp.components,hi=di.Dashicon,bi=di.IconButton,gi=wp.compose.compose,vi=function(e){function t(){return Pe()(this,t),De()(this,Ae()(t).apply(this,arguments))}return Ue()(t,e),Ie()(t,[{key:"render",value:function(){var e,t=this.props,n=t.attributes,o=t.setAttributes,r=t.className,a=t.isSelected,i=t.backgroundColor,s=t.textColor,l=t.setBackgroundColor,c=t.setTextColor,u=n.align,p=n.pictureUrl,m=n.pictureAlt,d=n.pictureId,h=n.pictureSize,b=n.name,g=n.role,v=n.content,f=n.buttonUrl,k=n.buttonText,y=ae()(r,(e={"is-selected":a},oe()(e,i.class,i.class),oe()(e,s.class,s.class),e)),w={backgroundColor:i.color,color:s.color,textAlign:u};return Object(M.createElement)(Ja,null,Object(M.createElement)("div",{className:y},Object(M.createElement)(kt,{setAttributes:function(e){var t=ti(ei(e,["id","url","alt","size"]),(function(e,t){return"picture"+ni(t)}));o(t)},url:p,id:d,alt:m,size:h}),Object(M.createElement)("div",{style:w},Object(M.createElement)(ai,{tagName:"h3",value:b,onChange:function(e){return o({name:e})},placeholder:oi("This is my title..","_svbk"),className:"wp-block-svbk-profile__name"}),Object(M.createElement)(ai,{tagName:"div",value:g,onChange:function(e){return o({role:e})},placeholder:oi("Role..","_svbk"),className:"wp-block-svbk-profile__role"}),Object(M.createElement)(ai,{tagName:"div",value:v,onChange:function(e){return o({content:e})},placeholder:oi("Content..","_svbk"),className:"wp-block-svbk-profile__content"}),Object(M.createElement)(ai,{placeholder:oi("Button text…"),value:k,onChange:function(e){return o({buttonText:e})},formattingControls:["bold","italic","strikethrough"],className:"wp-block-svbk-profile__button block-library-button"}),a&&Object(M.createElement)("form",{className:"block-library-button__inline-link",onSubmit:function(e){return e.preventDefault()}},Object(M.createElement)(hi,{icon:"admin-links"}),Object(M.createElement)(ii,{value:f,onChange:function(e){return o({buttonUrl:e})}}),Object(M.createElement)(bi,{icon:"editor-break",label:oi("Apply"),type:"submit"})))),Object(M.createElement)(li,null,Object(M.createElement)(pi,{value:u,onChange:function(e){o({align:e})}})),Object(M.createElement)(si,null,Object(M.createElement)(ui,{title:oi("Color Settings"),initialOpen:!1,colorSettings:[{value:i.color,onChange:l,label:oi("Background Color")},{value:s.color,onChange:c,label:oi("Text Color")}]}),Object(M.createElement)(ci,{textColor:s.color,backgroundColor:i.color})))}}]),t}(Qa),fi=gi([mi("backgroundColor",{textColor:"color"})])(vi),ki=wp.i18n.__,yi=wp.blockEditor,wi=yi.RichText,_i=yi.getColorClassName,Ci="svbk/profile",Ei={title:ki("Profile","_svbk"),icon:"id",category:"common",keywords:[ki("profile"),ki("team"),ki("member")],styles:[{name:"default",label:ki("Default"),isDefault:!0},{name:"featured",label:ki("Featured")}],attributes:{pictureUrl:{type:"string",source:"attribute",attribute:"src",selector:".wp-block-svbk-profile__picture img"},pictureAlt:{type:"string",source:"attribute",attribute:"alt",selector:".wp-block-svbk-profile__picture img"},pictureId:{type:"number"},pictureSize:{type:"string"},name:{type:"string",source:"text",selector:".wp-block-svbk-profile__name"},role:{type:"string",source:"text",selector:".wp-block-svbk-profile__role"},content:{type:"string",source:"text",selector:".wp-block-svbk-profile__content"},buttonUrl:{type:"string",source:"attribute",attribute:"href",selector:".wp-block-svbk-profile__link"},buttonText:{type:"string",source:"text",selector:".wp-block-svbk-profile__link"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},align:{type:"string"}},edit:fi,save:function(e){var t,n=e.attributes,o=n.pictureUrl,r=n.pictureAlt,a=n.pictureId,i=n.name,s=n.role,l=n.content,c=n.buttonUrl,u=n.buttonText,p=n.backgroundColor,m=n.customBackgroundColor,d=n.textColor,h=n.customTextColor,b=n.align,g=_i("background-color",p),v=_i("color",d),f=ae()((t={"has-text-color":d||h,"has-background":p||m},oe()(t,v,v),oe()(t,g,g),t)),k={backgroundColor:g?void 0:m,color:v?void 0:h,textAlign:b};return Object(M.createElement)("div",{className:f,style:k},o&&Object(M.createElement)("figure",{className:"wp-block-svbk-profile__picture"},Object(M.createElement)("img",{src:o,alt:r,className:a?"wp-image-".concat(a):null})),i&&Object(M.createElement)(wi.Content,{tagName:"h3",className:"wp-block-svbk-profile__name",value:i}),s&&Object(M.createElement)("p",{className:"wp-block-svbk-profile__role"},s),l&&Object(M.createElement)("p",{className:"wp-block-svbk-profile__content"},l),u&&c&&Object(M.createElement)("div",{className:"wp-block-button wp-block-svbk-profile__button"},Object(M.createElement)("a",{className:"wp-block-button__link wp-block-svbk-profile__link",href:c},u," ")))}},xi=wp.element,Oi=xi.Fragment,ji=xi.Component,Si=wp.i18n.__,Ni=wp.blockEditor,Mi=Ni.RichText,Li=Ni.InspectorControls,Pi=Ni.PanelColorSettings,Ti=Ni.withColors,Ii=wp.compose.compose,Bi=function(e){function t(){return Pe()(this,t),De()(this,Ae()(t).apply(this,arguments))}return Ue()(t,e),Ie()(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.setAttributes,o=e.className,r=e.isSelected,a=e.textColor,i=e.setTextColor,s=t.align,l=t.metric,c=t.description,u=ae()(o,oe()({"is-selected":r},a.class,a.class)),p={color:a.color,textAlign:s};return Object(M.createElement)(Oi,null,Object(M.createElement)("div",{className:u},Object(M.createElement)(kr,this.props),Object(M.createElement)("div",{style:p},Object(M.createElement)(Mi,{tagName:"div",value:l,onChange:function(e){return n({metric:e})},placeholder:Si("40M subscribers..","_svbk"),className:"wp-block-svbk-stats__metric"}),Object(M.createElement)(Mi,{tagName:"div",value:c,onChange:function(e){return n({description:e})},placeholder:Si("Description..","_svbk"),className:"wp-block-svbk-stats__description"}))),Object(M.createElement)(Li,null,Object(M.createElement)(Pi,{title:Si("Color Settings"),initialOpen:!1,colorSettings:[{value:a.color,onChange:i,label:Si("Text Color")}]})))}}]),t}(ji),Di=Ii([Ti("backgroundColor",{textColor:"color"})])(Bi),zi=wp.i18n.__,Ai=wp.blockEditor.getColorClassName,Ri=wp.element.RawHTML,Ui="svbk/stats",Fi={title:zi("Stats","_svbk"),icon:"chart-pie",category:"common",keywords:[zi("stats"),zi("number"),zi("counter")],attributes:{icon:{type:"string",source:"html",selector:".wp-block-svbk-stats__icon"},metric:{type:"string",source:"text",selector:".wp-block-svbk-stats__metric"},description:{type:"string",source:"text",selector:".wp-block-svbk-stats__description"},textColor:{type:"string"},customTextColor:{type:"string"}},edit:Di,save:function(e){var t=e.attributes,n=t.icon,o=t.metric,r=t.description,a=t.textColor,i=t.customTextColor,s=Ai("color",a),l=ae()(oe()({"has-text-color":a||i},s,s)),c={color:s?void 0:i};return Object(M.createElement)("div",{className:l,style:c},n&&Object(M.createElement)("div",{className:"wp-block-svbk-stats__icon"},Object(M.createElement)(Ri,null,n)),Object(M.createElement)("p",{className:"wp-block-svbk-stats__metric"},o),Object(M.createElement)("p",{className:"wp-block-svbk-stats__description"},r))}},Wi=wp.element,Hi=Wi.Fragment,Vi=Wi.Component,Zi=wp.i18n.__,qi=wp.blockEditor,Gi=qi.RichText,Ki=qi.PlainText,$i=qi.InnerBlocks,Yi=qi.InspectorControls,Ji=wp.components,Qi=Ji.ToggleControl,Xi=Ji.PanelBody,es=[["core/paragraph",{content:"Lorem ipsum sit amet..."}]],ts=function(e){function t(){return Pe()(this,t),De()(this,Ae()(t).apply(this,arguments))}return Ue()(t,e),Ie()(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.setAttributes,o=e.className,r=e.isSelected,a=t.title,i=t.defaultOpen,s=t.buttonClose,l=t.buttonOpen,c=ae()(o,{"is-selected":r});return Object(M.createElement)(Hi,null,Object(M.createElement)("div",{className:c},Object(M.createElement)(Gi,{tagName:"h3",value:a,onChange:function(e){return n({title:e})},placeholder:Zi("Insert title here..","_svbk"),className:"wp-block-svbk-collapse__title"}),Object(M.createElement)($i,{templateLock:!1,template:es}),Object(M.createElement)("div",{className:"wp-block-svbk-collapse__button"},Object(M.createElement)(Ki,{value:l,onChange:function(e){return n({buttonOpen:e})},placeholder:Zi("Open me..","_svbk"),className:"wp-block-svbk-collapse__label wp-block-svbk-collapse__label--open"}),Object(M.createElement)(Ki,{value:s,onChange:function(e){return n({buttonClose:e})},placeholder:Zi("Close me..","_svbk"),className:"wp-block-svbk-collapse__label wp-block-svbk-collapse__label--close"}))),Object(M.createElement)(Yi,null,Object(M.createElement)(Xi,{title:Zi("Collapse Settings","_svbk")},Object(M.createElement)(Qi,{label:Zi("Default Open","_svbk"),help:Zi(i?"Leave the collapse open on page load":"Leave the collapse close on page load","_svbk"),checked:i,onChange:function(e){return n({defaultOpen:Boolean(e)})}}))))}}]),t}(Vi),ns=wp.i18n.__,os=wp.blockEditor,rs=os.InnerBlocks,as=os.RichText,is="svbk/collapse",ss={title:ns("Collapse","_svbk"),icon:"feedback",category:"common",keywords:[ns("collapse"),ns("accordion")],styles:[{name:"default",label:ns("Default"),isDefault:!0},{name:"accordion",label:ns("Accordion","_svbk")},{name:"faq",label:ns("FAQ","_svbk")},{name:"button",label:ns("Button","_svbk")}],attributes:{defaultOpen:{type:"boolean",default:!1},title:{type:"string",source:"html",selector:".wp-block-svbk-collapse__title"},buttonOpen:{type:"string",source:"text",selector:".wp-block-svbk-collapse__label--open"},buttonClose:{type:"string",source:"text",selector:".wp-block-svbk-collapse__label--close"}},edit:ts,save:function(e){var t=e.attributes,n=e.className,o=t.title,r=t.defaultOpen,a=t.buttonOpen,i=t.buttonClose,s=ae()(n,{"wp-block-svbk-collapse--open":r}),l=ae()(["wp-block-svbk-collapse__button","wp-block-svbk-collapse__trigger"],{"wp-block-svbk-collapse__button--has-open":a,"wp-block-svbk-collapse__button--has-close":i}),c={display:r?void 0:"none"};return Object(M.createElement)("div",{className:s},o&&Object(M.createElement)(as.Content,{tagName:"h3",value:o,className:"wp-block-svbk-collapse__title wp-block-svbk-collapse__trigger"}),Object(M.createElement)("div",{className:"wp-block-svbk-collapse__content",style:c},Object(M.createElement)(rs.Content,null)),(a||i)&&Object(M.createElement)("button",{className:l},a&&Object(M.createElement)("span",{className:"wp-block-svbk-collapse__label wp-block-svbk-collapse__label--open"},a),i&&Object(M.createElement)("span",{className:"wp-block-svbk-collapse__label wp-block-svbk-collapse__label--close"},i)))}},ls=n(3),cs=n(11),us=n.n(cs),ps=function(){function e(t,n){t.getClusterer().extend(e,google.maps.OverlayView),this.cluster=t,this.className=this.cluster.getClusterer().getClusterClass(),this.styles=n,this.center=void 0,this.div=null,this.sums=null,this.visible=!1,this.boundsChangedListener=null,this.url="",this.height=0,this.width=0,this.anchorText=[0,0],this.anchorIcon=[0,0],this.textColor="black",this.textSize=11,this.textDecoration="none",this.fontWeight="bold",this.fontStyle="normal",this.fontFamily="Arial,sans-serif",this.backgroundPosition="0 0",this.setMap(t.getMap())}var t=e.prototype;return t.onAdd=function(){var e,t,n=this;this.div=document.createElement("div"),this.div.className=this.className,this.visible&&this.show(),this.getPanes().overlayMouseTarget.appendChild(this.div),this.boundsChangedListener=google.maps.event.addListener(this.getMap(),"boundschanged",(function(){t=e})),google.maps.event.addDomListener(this.div,"mousedown",(function(){e=!0,t=!1})),google.maps.event.addDomListener(this.div,"click",(function(o){if(e=!1,!t){var r=n.cluster.getClusterer();if(google.maps.event.trigger(r,"click",n.cluster),google.maps.event.trigger(r,"clusterclick",n.cluster),r.getZoomOnClick()){var a=r.getMaxZoom(),i=n.cluster.getBounds();r.getMap().fitBounds(i),setTimeout((function(){r.getMap().fitBounds(i),null!==a&&r.getMap().getZoom()>a&&r.getMap().setZoom(a+1)}),100)}o.cancelBubble=!0,o.stopPropagation&&o.stopPropagation()}})),google.maps.event.addDomListener(this.div,"mouseover",(function(){google.maps.event.trigger(n.cluster.getClusterer(),"mouseover",n.cluster)})),google.maps.event.addDomListener(this.div,"mouseout",(function(){google.maps.event.trigger(n.cluster.getClusterer(),"mouseout",n.cluster)}))},t.onRemove=function(){this.div&&this.div.parentNode&&(this.hide(),null!==this.boundsChangedListener&&google.maps.event.removeListener(this.boundsChangedListener),google.maps.event.clearInstanceListeners(this.div),this.div.parentNode.removeChild(this.div),this.div=null)},t.draw=function(){if(this.visible&&null!==this.div&&this.center){var e=this.getPosFromLatLng(this.center),t=e.x,n=e.y;this.div.style.top=n+"px",this.div.style.left=t+"px"}},t.hide=function(){this.div&&(this.div.style.display="none"),this.visible=!1},t.show=function(){if(this.div&&this.center){var e="",t="",n=this.backgroundPosition.split(" "),o=parseInt(n[0].replace(/^\s+|\s+$/g,""),10),r=parseInt(n[1].replace(/^\s+|\s+$/g,""),10),a=this.getPosFromLatLng(this.center);t=null===this.sums||void 0===this.sums.title||""===this.sums.title?this.cluster.getClusterer().getTitle():this.sums.title,this.div.style.cssText=this.createCss(a),e="<img alt='"+t+"' src='"+this.url+"' style='position: absolute; top: "+r+"px; left: "+o+"px; ",this.cluster.getClusterer().enableRetinaIcons||(e+="clip: rect("+-1*r+"px, "+(-1*o+this.width)+"px, "+(-1*r+this.height)+"px, "+-1*o+"px);"),e+="'>",this.div.innerHTML=e+"<div style='position: absolute;top: "+this.anchorText[0]+"px;left: "+this.anchorText[1]+"px;color: "+this.textColor+";font-size: "+this.textSize+"px;font-family: "+this.fontFamily+";font-weight: "+this.fontWeight+";font-style: "+this.fontStyle+";text-decoration: "+this.textDecoration+";text-align: center;width: "+this.width+"px;line-height:"+this.height+"px;'>"+this.sums.text+"</div>",this.div.title=t,this.div.style.display=""}this.visible=!0},t.useStyle=function(e){this.sums=e;var t=this.styles[Math.min(this.styles.length-1,Math.max(0,e.index-1))];this.url=t.url,this.height=t.height,this.width=t.width,this.anchorText=t.anchorText||[0,0],this.anchorIcon=t.anchorIcon||[this.height/2,this.width/2],this.textColor=t.textColor||"black",this.textSize=t.textSize||11,this.textDecoration=t.textDecoration||"none",this.fontWeight=t.fontWeight||"bold",this.fontStyle=t.fontStyle||"normal",this.fontFamily=t.fontFamily||"Arial,sans-serif",this.backgroundPosition=t.backgroundPosition||"0 0"},t.setCenter=function(e){this.center=e},t.createCss=function(e){var t=[];return t.push("cursor: pointer;"),t.push("position: absolute; top: "+e.y+"px; left: "+e.x+"px;"),t.push("width: "+this.width+"px; height: "+this.height+"px;"),t.join("")},t.getPosFromLatLng=function(e){var t=this.getProjection().fromLatLngToDivPixel(e);return t.x-=this.anchorIcon[1],t.y-=this.anchorIcon[0],t.x=t.x,t.y=t.y,t},e}(),ms=function(){function e(e){this.markerClusterer=e,this.map=this.markerClusterer.getMap(),this.gridSize=this.markerClusterer.getGridSize(),this.minClusterSize=this.markerClusterer.getMinimumClusterSize(),this.averageCenter=this.markerClusterer.getAverageCenter(),this.markers=[],this.center=void 0,this.bounds=null,this.clusterIcon=new ps(this,this.markerClusterer.getStyles())}var t=e.prototype;return t.getSize=function(){return this.markers.length},t.getMarkers=function(){return this.markers},t.getCenter=function(){return this.center},t.getMap=function(){return this.map},t.getClusterer=function(){return this.markerClusterer},t.getBounds=function(){for(var e=new google.maps.LatLngBounds(this.center,this.center),t=this.getMarkers(),n=0;n<t.length;n++){var o=t[n].getPosition();o&&e.extend(o)}return e},t.remove=function(){this.clusterIcon.setMap(null),this.markers=[],delete this.markers},t.addMarker=function(e){if(this.isMarkerAlreadyAdded(e))return!1;if(this.center){if(this.averageCenter){var t=e.getPosition();if(t){var n=this.markers.length+1;this.center=new google.maps.LatLng((this.center.lat()*(n-1)+t.lat())/n,(this.center.lng()*(n-1)+t.lng())/n),this.calculateBounds()}}}else{var o=e.getPosition();o&&(this.center=o,this.calculateBounds())}e.isAdded=!0,this.markers.push(e);var r=this.markers.length,a=this.markerClusterer.getMaxZoom();if(null!==a&&this.map.getZoom()>a)e.getMap()!==this.map&&e.setMap(this.map);else if(r<this.minClusterSize)e.getMap()!==this.map&&e.setMap(this.map);else if(r===this.minClusterSize)for(var i=0;i<r;i++)this.markers[i].setMap(null);else e.setMap(null);return this.updateIcon(),!0},t.isMarkerInClusterBounds=function(e){if(null!==this.bounds){var t=e.getPosition();if(t)return this.bounds.contains(t)}return!1},t.calculateBounds=function(){this.bounds=this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center,this.center))},t.updateIcon=function(){var e=this.markers.length,t=this.markerClusterer.getMaxZoom();null!==t&&this.map.getZoom()>t?this.clusterIcon.hide():e<this.minClusterSize?this.clusterIcon.hide():(this.center&&this.clusterIcon.setCenter(this.center),this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers,this.markerClusterer.getStyles().length)),this.clusterIcon.show())},t.isMarkerAlreadyAdded=function(e){if(this.markers.indexOf)return this.markers.includes(e);for(var t=0;t<this.markers.length;t++)if(e===this.markers[t])return!0;return!1},e}(),ds=function(e,t){for(var n=0,o=e.length.toString(),r=o;0!==r;)r=parseInt(r,10)/10,n++;return{text:o,index:n=Math.min(n,t),title:""}},hs=2e3,bs=500,gs="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",vs="png",fs=[53,56,66,78,90],ks="cluster",ys=function(){function e(t,n,o){void 0===n&&(n=[]),void 0===o&&(o={}),this.extend(e,google.maps.OverlayView),this.markers=[],this.clusters=[],this.listeners=[],this.activeMap=null,this.ready=!1,this.gridSize=o.gridSize||60,this.minClusterSize=o.minimumClusterSize||2,this.maxZoom=o.maxZoom||null,this.styles=o.styles||[],this.title=o.title||"",this.zoomOnClick=!0,void 0!==o.zoomOnClick&&(this.zoomOnClick=o.zoomOnClick),this.averageCenter=!1,void 0!==o.averageCenter&&(this.averageCenter=o.averageCenter),this.ignoreHidden=!1,void 0!==o.ignoreHidden&&(this.ignoreHidden=o.ignoreHidden),this.enableRetinaIcons=!1,void 0!==o.enableRetinaIcons&&(this.enableRetinaIcons=o.enableRetinaIcons),this.imagePath=o.imagePath||gs,this.imageExtension=o.imageExtension||vs,this.imageSizes=o.imageSizes||fs,this.calculator=o.calculator||ds,this.batchSize=o.batchSize||hs,this.batchSizeIE=o.batchSizeIE||bs,this.clusterClass=o.clusterClass||ks,-1!==navigator.userAgent.toLowerCase().indexOf("msie")&&(this.batchSize=this.batchSizeIE),this.timerRefStatic=null,this.setupStyles(),this.addMarkers(n,!0),this.setMap(t)}var t=e.prototype;return t.onAdd=function(){var e=this;this.activeMap=this.getMap(),this.ready=!0,this.repaint(),this.listeners=[google.maps.event.addListener(this.getMap(),"zoom_changed",(function(){e.resetViewport(!1),e.getMap().getZoom()!==(e.get("minZoom")||0)&&e.getMap().getZoom()!==e.get("maxZoom")||google.maps.event.trigger(e,"idle")})),google.maps.event.addListener(this.getMap(),"idle",(function(){e.redraw()}))]},t.onRemove=function(){for(var e=0;e<this.markers.length;e++)this.markers[e].getMap()!==this.activeMap&&this.markers[e].setMap(this.activeMap);for(var t=0;t<this.clusters.length;t++)this.clusters[t].remove();this.clusters=[];for(var n=0;n<this.listeners.length;n++)google.maps.event.removeListener(this.listeners[n]);this.listeners=[],this.activeMap=null,this.ready=!1},t.draw=function(){},t.setupStyles=function(){if(!(this.styles.length>0))for(var e=0;e<this.imageSizes.length;e++)this.styles.push({url:this.imagePath+(e+1)+"."+this.imageExtension,height:this.imageSizes[e],width:this.imageSizes[e]})},t.fitMapToMarkers=function(){for(var e=this.getMarkers(),t=new google.maps.LatLngBounds,n=0;n<e.length;n++){var o=e[n].getPosition();o&&t.extend(o)}this.getMap().fitBounds(t)},t.getGridSize=function(){return this.gridSize},t.setGridSize=function(e){this.gridSize=e},t.getMinimumClusterSize=function(){return this.minClusterSize},t.setMinimumClusterSize=function(e){this.minClusterSize=e},t.getMaxZoom=function(){return this.maxZoom},t.setMaxZoom=function(e){this.maxZoom=e},t.getStyles=function(){return this.styles},t.setStyles=function(e){this.styles=e},t.getTitle=function(){return this.title},t.setTitle=function(e){this.title=e},t.getZoomOnClick=function(){return this.zoomOnClick},t.setZoomOnClick=function(e){this.zoomOnClick=e},t.getAverageCenter=function(){return this.averageCenter},t.setAverageCenter=function(e){this.averageCenter=e},t.getIgnoreHidden=function(){return this.ignoreHidden},t.setIgnoreHidden=function(e){this.ignoreHidden=e},t.getEnableRetinaIcons=function(){return this.enableRetinaIcons},t.setEnableRetinaIcons=function(e){this.enableRetinaIcons=e},t.getImageExtension=function(){return this.imageExtension},t.setImageExtension=function(e){this.imageExtension=e},t.getImagePath=function(){return this.imagePath},t.setImagePath=function(e){this.imagePath=e},t.getImageSizes=function(){return this.imageSizes},t.setImageSizes=function(e){this.imageSizes=e},t.getCalculator=function(){return this.calculator},t.setCalculator=function(e){this.calculator=e},t.getBatchSizeIE=function(){return this.batchSizeIE},t.setBatchSizeIE=function(e){this.batchSizeIE=e},t.getClusterClass=function(){return this.clusterClass},t.setClusterClass=function(e){this.clusterClass=e},t.getMarkers=function(){return this.markers},t.getTotalMarkers=function(){return this.markers.length},t.getClusters=function(){return this.clusters},t.getTotalClusters=function(){return this.clusters.length},t.addMarker=function(e,t){this.pushMarkerTo(e),t||this.redraw()},t.addMarkers=function(e,t){for(var n in e)e.hasOwnProperty(n)&&this.pushMarkerTo(e[n]);t||this.redraw()},t.pushMarkerTo=function(e){var t=this;e.getDraggable()&&google.maps.event.addListener(e,"dragend",(function(){t.ready&&(e.isAdded=!1,t.repaint())})),e.isAdded=!1,this.markers.push(e)},t.removeMarker_=function(e){var t=-1;if(this.markers.indexOf)t=this.markers.indexOf(e);else for(var n=0;n<this.markers.length;n++)if(e===this.markers[n]){t=n;break}return-1!==t&&(e.setMap(null),this.markers.splice(t,1),!0)},t.removeMarker=function(e,t){var n=this.removeMarker_(e);return!t&&n&&this.repaint(),n},t.removeMarkers=function(e,t){for(var n=!1,o=0;o<e.length;o++)n=n||this.removeMarker_(e[o]);return!t&&n&&this.repaint(),n},t.clearMarkers=function(){this.resetViewport(!0),this.markers=[]},t.repaint=function(){var e=this.clusters.slice();this.clusters=[],this.resetViewport(!1),this.redraw(),setTimeout((function(){for(var t=0;t<e.length;t++)e[t].remove()}),0)},t.getExtendedBounds=function(e){var t=this.getProjection(),n=t.fromLatLngToDivPixel(new google.maps.LatLng(e.getNorthEast().lat(),e.getNorthEast().lng()));n.x+=this.gridSize,n.y-=this.gridSize;var o=t.fromLatLngToDivPixel(new google.maps.LatLng(e.getSouthWest().lat(),e.getSouthWest().lng()));return o.x-=this.gridSize,o.y+=this.gridSize,e.extend(t.fromDivPixelToLatLng(n)),e.extend(t.fromDivPixelToLatLng(o)),e},t.redraw=function(){this.createClusters(0)},t.resetViewport=function(e){for(var t=0;t<this.clusters.length;t++)this.clusters[t].remove();this.clusters=[];for(var n=0;n<this.markers.length;n++){var o=this.markers[n];o.isAdded=!1,e&&o.setMap(null)}},t.distanceBetweenPoints=function(e,t){var n=(t.lat()-e.lat())*Math.PI/180,o=(t.lng()-e.lng())*Math.PI/180,r=Math.sin(n/2)*Math.sin(n/2)+Math.cos(e.lat()*Math.PI/180)*Math.cos(t.lat()*Math.PI/180)*Math.sin(o/2)*Math.sin(o/2);return 2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r))*6371},t.isMarkerInBounds=function(e,t){var n=e.getPosition();return!!n&&t.contains(n)},t.addToClosestCluster=function(e){for(var t,n=4e4,o=null,r=0;r<this.clusters.length;r++){var a=(t=this.clusters[r]).getCenter(),i=e.getPosition();if(a&&i){var s=this.distanceBetweenPoints(a,i);s<n&&(n=s,o=t)}}o&&o.isMarkerInClusterBounds(e)?o.addMarker(e):((t=new ms(this)).addMarker(e),this.clusters.push(t))},t.createClusters=function(e){var t=this;if(this.ready){0===e&&(google.maps.event.trigger(this,"clusteringbegin",this),null!==this.timerRefStatic&&(window.clearTimeout(this.timerRefStatic),delete this.timerRefStatic));for(var n=this.getMap().getZoom()>3?new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(),this.getMap().getBounds().getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625)),o=this.getExtendedBounds(n),r=Math.min(e+this.batchSize,this.markers.length),a=e;a<r;a++){var i=this.markers[a];!i.isAdded&&this.isMarkerInBounds(i,o)&&(!this.ignoreHidden||this.ignoreHidden&&i.getVisible())&&this.addToClosestCluster(i)}r<this.markers.length?this.timerRefStatic=window.setTimeout((function(){t.createClusters(r)}),0):(this.timerRefStatic=null,google.maps.event.trigger(this,"clusteringend",this))}},t.extend=function(e,t){return function(e){for(var t in e.prototype)this.prototype[t]=e.prototype[t];return this}.apply(e,[t])},e}(),ws=n(12),_s=function(){function e(t){void 0===t&&(t={}),this.extend(e,google.maps.OverlayView),this.content=t.content||"",this.disableAutoPan=t.disableAutoPan||!1,this.maxWidth=t.maxWidth||0,this.pixelOffset=t.pixelOffset||new google.maps.Size(0,0),this.position=t.position||new google.maps.LatLng(0,0),this.zIndex=t.zIndex||null,this.boxClass=t.boxClass||"infoBox",this.boxStyle=t.boxStyle||{},this.closeBoxMargin=t.closeBoxMargin||"2px",this.closeBoxURL=t.closeBoxURL||"http://www.google.com/intl/en_us/mapfiles/close.gif",""===t.closeBoxURL&&(this.closeBoxURL=""),this.infoBoxClearance=t.infoBoxClearance||new google.maps.Size(1,1),void 0===t.visible&&(void 0===t.isHidden?t.visible=!0:t.visible=!t.isHidden),this.isHidden=!t.visible,this.alignBottom=t.alignBottom||!1,this.pane=t.pane||"floatPane",this.enableEventPropagation=t.enableEventPropagation||!1,this.div=null,this.closeListener=null,this.moveListener=null,this.mapListener=null,this.contextListener=null,this.eventListeners=null,this.fixedWidthSet=null}var t=e.prototype;return t.createInfoBoxDiv=function(){var e=this;function t(e){e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}if(!this.div){if(this.div=document.createElement("div"),this.setBoxStyle(),"string"==typeof this.content?this.div.innerHTML=this.getCloseBoxImg()+this.content:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(this.content)),this.getPanes()[this.pane].appendChild(this.div),this.addClickHandler(),this.div.style.width)this.fixedWidthSet=!0;else if(0!==this.maxWidth&&this.div.offsetWidth>this.maxWidth)this.div.style.width=this.maxWidth+"px",this.fixedWidthSet=!0;else{var n=this.getBoxWidths();this.div.style.width=this.div.offsetWidth-n.left-n.right+"px",this.fixedWidthSet=!1}if(this.panBox(this.disableAutoPan),!this.enableEventPropagation){this.eventListeners=[];for(var o=["mousedown","mouseover","mouseout","mouseup","click","dblclick","touchstart","touchend","touchmove"],r=0;r<o.length;r++)this.eventListeners.push(google.maps.event.addDomListener(this.div,o[r],t));this.eventListeners.push(google.maps.event.addDomListener(this.div,"mouseover",(function(){e.div&&(e.div.style.cursor="default")})))}this.contextListener=google.maps.event.addDomListener(this.div,"contextmenu",(function(n){n.returnValue=!1,n.preventDefault&&n.preventDefault(),e.enableEventPropagation||t(n)})),google.maps.event.trigger(this,"domready")}},t.getCloseBoxImg=function(){var e="";return""!==this.closeBoxURL&&(e="<img",e+=" src='"+this.closeBoxURL+"'",e+=" align=right",e+=" style='",e+=" position: relative;",e+=" cursor: pointer;",e+=" margin: "+this.closeBoxMargin+";",e+="'>"),e},t.addClickHandler=function(){if(this.div&&this.div.firstChild&&""!==this.closeBoxURL){var e=this.div.firstChild;this.closeListener=google.maps.event.addDomListener(e,"click",this.getCloseClickHandler())}else this.closeListener=null},t.getCloseClickHandler=function(){var e=this;return function(t){t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation(),google.maps.event.trigger(e,"closeclick"),e.close()}},t.panBox=function(e){if(this.div&&!e){var t=this.getMap();if(t instanceof google.maps.Map){var n=0,o=0,r=t.getBounds();r&&!r.contains(this.position)&&t.setCenter(this.position);var a=t.getDiv(),i=a.offsetWidth,s=a.offsetHeight,l=this.pixelOffset.width,c=this.pixelOffset.height,u=this.div.offsetWidth,p=this.div.offsetHeight,m=this.infoBoxClearance.width,d=this.infoBoxClearance.height,h=this.getProjection().fromLatLngToContainerPixel(this.position);h.x<-l+m?n=h.x+l-m:h.x+u+l+m>i&&(n=h.x+u+l+m-i),this.alignBottom?h.y<-c+d+p?o=h.y+c-d-p:h.y+c+d>s&&(o=h.y+c+d-s):h.y<-c+d?o=h.y+c-d:h.y+p+c+d>s&&(o=h.y+p+c+d-s),0===n&&0===o||t.panBy(n,o)}}},t.setBoxStyle=function(){if(this.div){this.div.className=this.boxClass,this.div.style.cssText="";var e=this.boxStyle;for(var t in e)e.hasOwnProperty(t)&&(this.div.style[t]=e[t]);if(this.div.style.webkitTransform="translateZ(0)",void 0!==this.div.style.opacity&&""!==this.div.style.opacity){var n=parseFloat(this.div.style.opacity||"");this.div.style.msFilter='"progid:DXImageTransform.Microsoft.Alpha(Opacity='+100*n+')"',this.div.style.filter="alpha(opacity="+100*n+")"}this.div.style.position="absolute",this.div.style.visibility="hidden",null!==this.zIndex&&(this.div.style.zIndex=this.zIndex+""),this.div.style.overflow||(this.div.style.overflow="auto")}},t.getBoxWidths=function(){var e={top:0,bottom:0,left:0,right:0};if(!this.div)return e;if(document.defaultView&&document.defaultView.getComputedStyle){var t=this.div.ownerDocument,n=t&&t.defaultView?t.defaultView.getComputedStyle(this.div,""):null;n&&(e.top=parseInt(n.borderTopWidth||"",10)||0,e.bottom=parseInt(n.borderBottomWidth||"",10)||0,e.left=parseInt(n.borderLeftWidth||"",10)||0,e.right=parseInt(n.borderRightWidth||"",10)||0)}else if(document.documentElement.currentStyle){var o=this.div.currentStyle;o&&(e.top=parseInt(o.borderTopWidth||"",10)||0,e.bottom=parseInt(o.borderBottomWidth||"",10)||0,e.left=parseInt(o.borderLeftWidth||"",10)||0,e.right=parseInt(o.borderRightWidth||"",10)||0)}return e},t.onRemove=function(){this.div&&this.div.parentNode&&(this.div.parentNode.removeChild(this.div),this.div=null)},t.draw=function(){if(this.createInfoBoxDiv(),this.div){var e=this.getProjection().fromLatLngToDivPixel(this.position);this.div.style.left=e.x+this.pixelOffset.width+"px",this.alignBottom?this.div.style.bottom=-(e.y+this.pixelOffset.height)+"px":this.div.style.top=e.y+this.pixelOffset.height+"px",this.isHidden?this.div.style.visibility="hidden":this.div.style.visibility="visible"}},t.setOptions=function(e){void 0===e&&(e={}),void 0!==e.boxClass&&(this.boxClass=e.boxClass,this.setBoxStyle()),void 0!==e.boxStyle&&(this.boxStyle=e.boxStyle,this.setBoxStyle()),void 0!==e.content&&this.setContent(e.content),void 0!==e.disableAutoPan&&(this.disableAutoPan=e.disableAutoPan),void 0!==e.maxWidth&&(this.maxWidth=e.maxWidth),void 0!==e.pixelOffset&&(this.pixelOffset=e.pixelOffset),void 0!==e.alignBottom&&(this.alignBottom=e.alignBottom),void 0!==e.position&&this.setPosition(e.position),void 0!==e.zIndex&&this.setZIndex(e.zIndex),void 0!==e.closeBoxMargin&&(this.closeBoxMargin=e.closeBoxMargin),void 0!==e.closeBoxURL&&(this.closeBoxURL=e.closeBoxURL),void 0!==e.infoBoxClearance&&(this.infoBoxClearance=e.infoBoxClearance),void 0!==e.isHidden&&(this.isHidden=e.isHidden),void 0!==e.visible&&(this.isHidden=!e.visible),void 0!==e.enableEventPropagation&&(this.enableEventPropagation=e.enableEventPropagation),this.div&&this.draw()},t.setContent=function(e){this.content=e,this.div&&(this.closeListener&&(google.maps.event.removeListener(this.closeListener),this.closeListener=null),this.fixedWidthSet||(this.div.style.width=""),"string"==typeof e?this.div.innerHTML=this.getCloseBoxImg()+e:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(e)),this.fixedWidthSet||(this.div.style.width=this.div.offsetWidth+"px","string"==typeof e?this.div.innerHTML=this.getCloseBoxImg()+e:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(e))),this.addClickHandler()),google.maps.event.trigger(this,"content_changed")},t.setPosition=function(e){this.position=e,this.div&&this.draw(),google.maps.event.trigger(this,"position_changed")},t.setVisible=function(e){this.isHidden=!e,this.div&&(this.div.style.visibility=this.isHidden?"hidden":"visible")},t.setZIndex=function(e){this.zIndex=e,this.div&&(this.div.style.zIndex=e+""),google.maps.event.trigger(this,"zindex_changed")},t.getContent=function(){return this.content},t.getPosition=function(){return this.position},t.getZIndex=function(){return this.zIndex},t.getVisible=function(){var e=this.getMap();return null!=e&&!this.isHidden},t.show=function(){this.isHidden=!1,this.div&&(this.div.style.visibility="visible")},t.hide=function(){this.isHidden=!0,this.div&&(this.div.style.visibility="hidden")},t.open=function(e,t){var n=this;t&&(this.position=t.getPosition(),this.moveListener=google.maps.event.addListener(t,"position_changed",(function(){var e=t.getPosition();n.setPosition(e)})),this.mapListener=google.maps.event.addListener(t,"map_changed",(function(){n.setMap(t.map)}))),this.setMap(e),this.div&&this.panBox()},t.close=function(){if(this.closeListener&&(google.maps.event.removeListener(this.closeListener),this.closeListener=null),this.eventListeners){for(var e=0;e<this.eventListeners.length;e++)google.maps.event.removeListener(this.eventListeners[e]);this.eventListeners=null}this.moveListener&&(google.maps.event.removeListener(this.moveListener),this.moveListener=null),this.mapListener&&(google.maps.event.removeListener(this.mapListener),this.mapListener=null),this.contextListener&&(google.maps.event.removeListener(this.contextListener),this.contextListener=null),this.setMap(null)},t.extend=function(e,t){return function(e){for(var t in e.prototype)this.prototype.hasOwnProperty(t)||(this.prototype[t]=e.prototype[t]);return this}.apply(e,[t])},e}();function Cs(){return(Cs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function Es(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function xs(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}var Os=Object(ls.createContext)(null);var js=function(e,t,n){return Object.keys(e).reduce((function(n,o){return t(n,e[o],o)}),n)};var Ss=function(e,t,n,o){var r={};return function(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}(e,(function(e,a){var i=n[a];i!==t[a]&&(r[a]=i,e(o,i))})),r};function Ns(e){google.maps.event.removeListener(e)}function Ms(e){void 0===e&&(e=[]),e.map(Ns)}function Ls(e){var t=e.updaterMap,n=e.eventMap,o=e.prevProps,r=e.nextProps,a=e.instance,i=function(e,t,n){return js(n,(function(n,o,r){return"function"==typeof e[r]&&n.push(google.maps.event.addListener(t,o,e[r])),n}),[])}(r,a,n);return Ss(t,o,r,a),i}var Ps={onDblClick:"dblclick",onDragEnd:"dragend",onDragStart:"dragstart",onMapTypeIdChanged:"maptypeid_changed",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseDown:"mousedown",onMouseUp:"mouseup",onRightClick:"rightclick",onTilesLoaded:"tilesloaded",onBoundsChanged:"bounds_changed",onCenterChanged:"center_changed",onClick:"click",onDrag:"drag",onHeadingChanged:"heading_changed",onIdle:"idle",onProjectionChanged:"projection_changed",onResize:"resize",onTiltChanged:"tilt_changed",onZoomChanged:"zoom_changed"},Ts={extraMapTypes:function(e,t){t.forEach((function(t,n){e.mapTypes.set(String(n),t)}))},center:function(e,t){e.setCenter(t)},clickableIcons:function(e,t){e.setClickableIcons(t)},heading:function(e,t){e.setHeading(t)},mapTypeId:function(e,t){e.setMapTypeId(t)},options:function(e,t){e.setOptions(t)},streetView:function(e,t){e.setStreetView(t)},tilt:function(e,t){e.setTilt(t)},zoom:function(e,t){e.setZoom(t)}},Is=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).state={map:null},t.registeredEvents=[],t.mapRef=null,t.getInstance=function(){return new google.maps.Map(t.mapRef,t.props.options)},t.panTo=function(e){var n=t.getInstance();n&&n.panTo(e)},t.setMapCallback=function(){null!==t.state.map&&t.props.onLoad&&t.props.onLoad(t.state.map)},t.getRef=function(e){t.mapRef=e},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.getInstance();this.registeredEvents=Ls({updaterMap:Ts,eventMap:Ps,prevProps:{},nextProps:this.props,instance:e}),this.setState((function(){return{map:e}}),this.setMapCallback)},n.componentDidUpdate=function(e){null!==this.state.map&&(Ms(this.registeredEvents),this.registeredEvents=Ls({updaterMap:Ts,eventMap:Ps,prevProps:e,nextProps:this.props,instance:this.state.map}))},n.componentWillUnmount=function(){null!==this.state.map&&(this.props.onUnmount&&this.props.onUnmount(this.state.map),Ms(this.registeredEvents))},n.render=function(){return Object(ls.createElement)("div",{id:this.props.id,ref:this.getRef,style:this.props.mapContainerStyle,className:this.props.mapContainerClassName},Object(ls.createElement)(Os.Provider,{value:this.state.map},null!==this.state.map?this.props.children:Object(ls.createElement)(ls.Fragment,null)))},t}(ls.PureComponent),Bs="undefined"!=typeof document,Ds=function(e){var t=e.url,n=e.id;return Bs?new Promise((function(e,o){var r=document.getElementById(n),a=window;if(r){if(r.src===t){if("ready"===r.getAttribute("data-state"))return e(n);var i=a.initMap,s=r.onerror;return a.initMap=function(){i&&i(),e(n)},void(r.onerror=function(e){s&&s(e),o(e)})}r.remove()}var l=document.createElement("script");l.type="text/javascript",l.src=t,l.id=n,l.async=!0,l.onerror=o,a.initMap=function(){l.setAttribute("data-state","ready"),e(n)},document.head.appendChild(l)})).catch((function(e){console.error("injectScript error: ",e)})):Promise.reject(new Error("document is undefined"))},zs=function(e){return!(!e.href||0!==e.href.indexOf("https://fonts.googleapis.com/css?family=Roboto"))||("style"===e.tagName.toLowerCase()&&e.styleSheet&&e.styleSheet.cssText&&0===e.styleSheet.cssText.replace("\r\n","").indexOf(".gm-style")?(e.styleSheet.cssText="",!0):"style"===e.tagName.toLowerCase()&&e.innerHTML&&0===e.innerHTML.replace("\r\n","").indexOf(".gm-style")?(e.innerHTML="",!0):"style"===e.tagName.toLowerCase()&&!e.styleSheet&&!e.innerHTML)},As=function(){var e=document.getElementsByTagName("head")[0],t=e.insertBefore.bind(e);e.insertBefore=function(n,o){zs(n)||Reflect.apply(t,e,[n,o])};var n=e.appendChild.bind(e);e.appendChild=function(t){zs(t)||Reflect.apply(n,e,[t])}};function Rs(e){var t=e.googleMapsApiKey,n=e.googleMapsClientId,o=e.version,r=void 0===o?"weekly":o,a=e.language,i=e.region,s=e.libraries,l=e.channel,c=[];return t&&n||!t||!n||us()(!1),t?c.push("key="+t):n&&c.push("client="+n),r&&c.push("v="+r),a&&c.push("language="+a),i&&c.push("region="+i),s&&s.length&&c.push("libraries="+s.sort().join(",")),l&&c.push("channel="+l),c.push("callback=initMap"),"https://maps.googleapis.com/maps/api/js?"+c.join("&")}var Us=!1;function Fs(){return Object(ls.createElement)("div",null,"Loading...")}var Ws={id:"script-loader",version:"weekly"};(function(e){function t(){var t;return(t=e.apply(this,arguments)||this).check=Object(ls.createRef)(),t.state={loaded:!1},t.cleanupCallback=function(){delete window.google,t.injectScript()},t.isCleaningUp=function(){try{return Promise.resolve(new Promise((function(e){if(Us){if(Bs)var t=window.setInterval((function(){Us||(window.clearInterval(t),e())}),1)}else e()})))}catch(e){return Promise.reject(e)}},t.cleanup=function(){Us=!0;var e=document.getElementById(t.props.id);e&&e.parentNode&&e.parentNode.removeChild(e),Array.prototype.slice.call(document.getElementsByTagName("script")).filter((function(e){return e.src.includes("maps.googleapis")})).forEach((function(e){e.parentNode&&e.parentNode.removeChild(e)})),Array.prototype.slice.call(document.getElementsByTagName("link")).filter((function(e){return"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans"===e.href})).forEach((function(e){e.parentNode&&e.parentNode.removeChild(e)})),Array.prototype.slice.call(document.getElementsByTagName("style")).filter((function(e){return void 0!==e.innerText&&e.innerText.length>0&&e.innerText.includes(".gm-")})).forEach((function(e){e.parentNode&&e.parentNode.removeChild(e)}))},t.injectScript=function(){t.props.preventGoogleFontsLoading&&As(),t.props.id||us()(!1);var e={id:t.props.id,url:Rs(t.props)};Ds(e).then((function(){t.props.onLoad&&t.props.onLoad(),t.setState((function(){return{loaded:!0}}))})).catch((function(e){t.props.onError&&t.props.onError(e),console.error("\n          There has been an Error with loading Google Maps API script, please check that you provided correct google API key ("+(t.props.googleMapsApiKey||"-")+") or Client ID ("+(t.props.googleMapsClientId||"-")+") to <LoadScript />\n          Otherwise it is a Network issue.\n        ")}))},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){if(Bs){if(window.google&&!Us)return void console.error("google api is already presented");this.isCleaningUp().then(this.injectScript).catch((function(e){console.error("Error at injecting script after cleaning up: ",e)}))}},n.componentDidUpdate=function(e){this.props.libraries!==e.libraries&&console.warn("Performance warning! Loadscript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable ounside of component, or somwhere in config files or ENV variables"),Bs&&e.language!==this.props.language&&(this.cleanup(),this.setState((function(){return{loaded:!1}}),this.cleanupCallback))},n.componentWillUnmount=function(){var e=this;if(Bs){this.cleanup();window.setTimeout((function(){e.check.current||(delete window.google,Us=!1)}),1),this.props.onUnmount&&this.props.onUnmount()}},n.render=function(){return Object(ls.createElement)(ls.Fragment,null,Object(ls.createElement)("div",{ref:this.check}),this.state.loaded?this.props.children:this.props.loadingElement||Object(ls.createElement)(Fs,null))},t}(ls.PureComponent)).defaultProps=Ws;var Hs={},Vs={options:function(e,t){e.setOptions(t)}};(function(e){function t(){var t;return(t=e.apply(this,arguments)||this).state={trafficLayer:null},t.setTrafficLayerCallback=function(){null!==t.state.trafficLayer&&t.props.onLoad&&t.props.onLoad(t.state.trafficLayer)},t.registeredEvents=[],t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=new google.maps.TrafficLayer(Cs({},this.props.options||{},{map:this.context}));this.registeredEvents=Ls({updaterMap:Vs,eventMap:Hs,prevProps:{},nextProps:this.props,instance:e}),this.setState((function(){return{trafficLayer:e}}),this.setTrafficLayerCallback)},n.componentDidUpdate=function(e){null!==this.state.trafficLayer&&(Ms(this.registeredEvents),this.registeredEvents=Ls({updaterMap:Vs,eventMap:Hs,prevProps:e,nextProps:this.props,instance:this.state.trafficLayer}))},n.componentWillUnmount=function(){null!==this.state.trafficLayer&&(this.props.onUnmount&&this.props.onUnmount(this.state.trafficLayer),Ms(this.registeredEvents),this.state.trafficLayer.setMap(null))},n.render=function(){return null},t}(ls.PureComponent)).contextType=Os,(function(e){function t(){var t;return(t=e.apply(this,arguments)||this).state={bicyclingLayer:null},t.setBicyclingLayerCallback=function(){null!==t.state.bicyclingLayer&&(t.state.bicyclingLayer.setMap(t.context),t.props.onLoad&&t.props.onLoad(t.state.bicyclingLayer))},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=new google.maps.BicyclingLayer;this.setState((function(){return{bicyclingLayer:e}}),this.setBicyclingLayerCallback)},n.componentWillUnmount=function(){null!==this.state.bicyclingLayer&&(this.props.onUnmount&&this.props.onUnmount(this.state.bicyclingLayer),this.state.bicyclingLayer.setMap(null))},n.render=function(){return null},t}(ls.PureComponent)).contextType=Os,(function(e){function t(){var t;return(t=e.apply(this,arguments)||this).state={transitLayer:null},t.setTransitLayerCallback=function(){null!==t.state.transitLayer&&(t.state.transitLayer.setMap(t.context),t.props.onLoad&&t.props.onLoad(t.state.transitLayer))},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=new google.maps.TransitLayer;this.setState((function(){return{transitLayer:e}}),this.setTransitLayerCallback)},n.componentWillUnmount=function(){null!==this.state.transitLayer&&(this.props.onUnmount&&this.props.onUnmount(this.state.transitLayer),this.state.transitLayer.setMap(null))},n.render=function(){return null},t}(ls.PureComponent)).contextType=Os;var Zs={onCircleComplete:"circlecomplete",onMarkerComplete:"markercomplete",onOverlayComplete:"overlaycomplete",onPolygonComplete:"polygoncomplete",onPolylineComplete:"polylinecomplete",onRectangleComplete:"rectanglecomplete"},qs={drawingMode:function(e,t){e.setDrawingMode(t)},options:function(e,t){e.setOptions(t)}};(function(e){function t(t){var n;return(n=e.call(this,t)||this).registeredEvents=[],n.state={drawingManager:null},n.setDrawingManagerCallback=function(){null!==n.state.drawingManager&&n.props.onLoad&&n.props.onLoad(n.state.drawingManager)},google.maps.drawing||us()(!1),n}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=new google.maps.drawing.DrawingManager(Cs({},this.props.options||{},{map:this.context}));this.registeredEvents=Ls({updaterMap:qs,eventMap:Zs,prevProps:{},nextProps:this.props,instance:e}),this.setState((function(){return{drawingManager:e}}),this.setDrawingManagerCallback)},n.componentDidUpdate=function(e){null!==this.state.drawingManager&&(Ms(this.registeredEvents),this.registeredEvents=Ls({updaterMap:qs,eventMap:Zs,prevProps:e,nextProps:this.props,instance:this.state.drawingManager}))},n.componentWillUnmount=function(){null!==this.state.drawingManager&&(this.props.onUnmount&&this.props.onUnmount(this.state.drawingManager),Ms(this.registeredEvents),this.state.drawingManager.setMap(null))},n.render=function(){return Object(ls.createElement)(ls.Fragment,null)},t}(ls.PureComponent)).contextType=Os;var Gs={onAnimationChanged:"animation_changed",onClick:"click",onClickableChanged:"clickable_changed",onCursorChanged:"cursor_changed",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDraggableChanged:"draggable_changed",onDragStart:"dragstart",onFlatChanged:"flat_changed",onIconChanged:"icon_changed",onMouseDown:"mousedown",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onPositionChanged:"position_changed",onRightClick:"rightclick",onShapeChanged:"shape_changed",onTitleChanged:"title_changed",onVisibleChanged:"visible_changed",onZindexChanged:"zindex_changed"},Ks={animation:function(e,t){e.setAnimation(t)},clickable:function(e,t){e.setClickable(t)},cursor:function(e,t){e.setCursor(t)},draggable:function(e,t){e.setDraggable(t)},icon:function(e,t){e.setIcon(t)},label:function(e,t){e.setLabel(t)},map:function(e,t){e.setMap(t)},opacity:function(e,t){e.setOpacity(t)},options:function(e,t){e.setOptions(t)},position:function(e,t){e.setPosition(t)},shape:function(e,t){e.setShape(t)},title:function(e,t){e.setTitle(t)},visible:function(e,t){e.setVisible(t)},zIndex:function(e,t){e.setZIndex(t)}},$s=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).registeredEvents=[],t.state={marker:null},t.setMarkerCallback=function(){null!==t.state.marker&&t.props.onLoad&&t.props.onLoad(t.state.marker)},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=Cs({},this.props.options||{},{},this.props.clusterer?{}:{map:this.context},{position:this.props.position}),t=new google.maps.Marker(e);this.props.clusterer?this.props.clusterer.addMarker(t,!!this.props.noClustererRedraw):t.setMap(this.context),this.registeredEvents=Ls({updaterMap:Ks,eventMap:Gs,prevProps:{},nextProps:this.props,instance:t}),this.setState((function(){return{marker:t}}),this.setMarkerCallback)},n.componentDidUpdate=function(e){null!==this.state.marker&&(Ms(this.registeredEvents),this.registeredEvents=Ls({updaterMap:Ks,eventMap:Gs,prevProps:e,nextProps:this.props,instance:this.state.marker}))},n.componentWillUnmount=function(){null!==this.state.marker&&(this.props.onUnmount&&this.props.onUnmount(this.state.marker),Ms(this.registeredEvents),this.props.clusterer?this.props.clusterer.removeMarker(this.state.marker,!!this.props.noClustererRedraw):this.state.marker&&this.state.marker.setMap(null))},n.render=function(){return this.props.children||null},t}(ls.PureComponent);$s.contextType=Os;var Ys={onClick:"click",onClusteringBegin:"clusteringbegin",onClusteringEnd:"clusteringend",onMouseOut:"mouseout",onMouseOver:"mouseover"},Js={averageCenter:function(e,t){e.setAverageCenter(t)},batchSizeIE:function(e,t){e.setBatchSizeIE(t)},calculator:function(e,t){e.setCalculator(t)},clusterClass:function(e,t){e.setClusterClass(t)},enableRetinaIcons:function(e,t){e.setEnableRetinaIcons(t)},gridSize:function(e,t){e.setGridSize(t)},ignoreHidden:function(e,t){e.setIgnoreHidden(t)},imageExtension:function(e,t){e.setImageExtension(t)},imagePath:function(e,t){e.setImagePath(t)},imageSizes:function(e,t){e.setImageSizes(t)},maxZoom:function(e,t){e.setMaxZoom(t)},minimumClusterSize:function(e,t){e.setMinimumClusterSize(t)},styles:function(e,t){e.setStyles(t)},title:function(e,t){e.setTitle(t)},zoomOnClick:function(e,t){e.setZoomOnClick(t)}};(function(e){function t(){var t;return(t=e.apply(this,arguments)||this).registeredEvents=[],t.state={markerClusterer:null},t.setClustererCallback=function(){null!==t.state.markerClusterer&&t.props.onLoad&&t.props.onLoad(t.state.markerClusterer)},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.context){var e=new ys(this.context,[],this.props.options);this.registeredEvents=Ls({updaterMap:Js,eventMap:Ys,prevProps:{},nextProps:this.props,instance:e}),this.setState((function(){return{markerClusterer:e}}),this.setClustererCallback)}},n.componentDidUpdate=function(e){this.state.markerClusterer&&(Ms(this.registeredEvents),this.registeredEvents=Ls({updaterMap:Js,eventMap:Ys,prevProps:e,nextProps:this.props,instance:this.state.markerClusterer}))},n.componentWillUnmount=function(){null!==this.state.markerClusterer&&(this.props.onUnmount&&this.props.onUnmount(this.state.markerClusterer),Ms(this.registeredEvents),this.state.markerClusterer.setMap(null))},n.render=function(){return null!==this.state.markerClusterer?this.props.children(this.state.markerClusterer):null},t}(ls.PureComponent)).contextType=Os;var Qs={onCloseClick:"closeclick",onContentChanged:"content_changed",onDomReady:"domready",onPositionChanged:"position_changed",onZindexChanged:"zindex_changed"},Xs={options:function(e,t){e.setOptions(t)},position:function(e,t){t instanceof google.maps.LatLng?e.setPosition(t):e.setPosition(new google.maps.LatLng(t.lat,t.lng))},visible:function(e,t){e.setVisible(t)},zIndex:function(e,t){e.setZIndex(t)}};(function(e){function t(){var t;return(t=e.apply(this,arguments)||this).registeredEvents=[],t.containerElement=null,t.state={infoBox:null},t.open=function(e,n){n?e.open(t.context,n):e.getPosition()?e.open(t.context):us()(!1)},t.setInfoBoxCallback=function(){var e=t.props,n=e.anchor,o=e.onLoad,r=t.state.infoBox;null!==r&&null!==t.containerElement&&(r.setContent(t.containerElement),t.open(r,n),o&&o(r))},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){var e,t=this.props.options||{},n=t.position,o=xs(t,["position"]);!n||n instanceof google.maps.LatLng||(e=new google.maps.LatLng(n.lat,n.lng));var r=new _s(Cs({},o,{},e?{position:e}:{}));this.containerElement=document.createElement("div"),this.registeredEvents=Ls({updaterMap:Xs,eventMap:Qs,prevProps:{},nextProps:this.props,instance:r}),this.setState({infoBox:r},this.setInfoBoxCallback)},n.componentDidUpdate=function(e){var t=this.state.infoBox;null!==t&&(Ms(this.registeredEvents),this.registeredEvents=Ls({updaterMap:Xs,eventMap:Qs,prevProps:e,nextProps:this.props,instance:t}))},n.componentWillUnmount=function(){var e=this.props.onUnmount,t=this.state.infoBox;null!==t&&(e&&e(t),Ms(this.registeredEvents),t.close())},n.render=function(){return this.containerElement?Object(ws.createPortal)(ls.Children.only(this.props.children),this.containerElement):null},t}(ls.PureComponent)).contextType=Os;var el={onCloseClick:"closeclick",onContentChanged:"content_changed",onDomReady:"domready",onPositionChanged:"position_changed",onZindexChanged:"zindex_changed"},tl={options:function(e,t){e.setOptions(t)},position:function(e,t){e.setPosition(t)},zIndex:function(e,t){e.setZIndex(t)}};(function(e){function t(){var t;return(t=e.apply(this,arguments)||this).registeredEvents=[],t.containerElement=null,t.state={infoWindow:null},t.open=function(e,n){n?e.open(t.context,n):e.getPosition()?e.open(t.context):us()(!1)},t.setInfowindowCallback=function(){null!==t.state.infoWindow&&null!==t.containerElement&&(t.state.infoWindow.setContent(t.containerElement),t.open(t.state.infoWindow,t.props.anchor),t.props.onLoad&&t.props.onLoad(t.state.infoWindow))},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=new google.maps.InfoWindow(Cs({},this.props.options||{}));this.containerElement=document.createElement("div"),this.registeredEvents=Ls({updaterMap:tl,eventMap:el,prevProps:{},nextProps:this.props,instance:e}),this.setState((function(){return{infoWindow:e}}),this.setInfowindowCallback)},n.componentDidUpdate=function(e){null!==this.state.infoWindow&&(Ms(this.registeredEvents),this.registeredEvents=Ls({updaterMap:tl,eventMap:el,prevProps:e,nextProps:this.props,instance:this.state.infoWindow}))},n.componentWillUnmount=function(){null!==this.state.infoWindow&&(Ms(this.registeredEvents),this.state.infoWindow.close())},n.render=function(){return this.containerElement?Object(ws.createPortal)(ls.Children.only(this.props.children),this.containerElement):Object(ls.createElement)(ls.Fragment,null)},t}(ls.PureComponent)).contextType=Os;var nl={onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},ol={draggable:function(e,t){e.setDraggable(t)},editable:function(e,t){e.setEditable(t)},map:function(e,t){e.setMap(t)},options:function(e,t){e.setOptions(t)},path:function(e,t){e.setPath(t)},visible:function(e,t){e.setVisible(t)}};(function(e){function t(){var t;return(t=e.apply(this,arguments)||this).registeredEvents=[],t.state={polyline:null},t.setPolylineCallback=function(){null!==t.state.polyline&&t.props.onLoad&&t.props.onLoad(t.state.polyline)},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=new google.maps.Polyline(Cs({},this.props.options||{},{map:this.context}));this.registeredEvents=Ls({updaterMap:ol,eventMap:nl,prevProps:{},nextProps:this.props,instance:e}),this.setState((function(){return{polyline:e}}),this.setPolylineCallback)},n.componentDidUpdate=function(e){null!==this.state.polyline&&(Ms(this.registeredEvents),this.registeredEvents=Ls({updaterMap:ol,eventMap:nl,prevProps:e,nextProps:this.props,instance:this.state.polyline}))},n.componentWillUnmount=function(){null!==this.state.polyline&&(this.props.onUnmount&&this.props.onUnmount(this.state.polyline),Ms(this.registeredEvents),this.state.polyline.setMap(null))},n.render=function(){return Object(ls.createElement)(ls.Fragment,null)},t}(ls.PureComponent)).contextType=Os;var rl={onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},al={draggable:function(e,t){e.setDraggable(t)},editable:function(e,t){e.setEditable(t)},map:function(e,t){e.setMap(t)},options:function(e,t){e.setOptions(t)},path:function(e,t){e.setPath(t)},paths:function(e,t){e.setPaths(t)},visible:function(e,t){e.setVisible(t)}};(function(e){function t(){var t;return(t=e.apply(this,arguments)||this).registeredEvents=[],t.state={polygon:null},t.setPolygonCallback=function(){null!==t.state.polygon&&t.props.onLoad&&t.props.onLoad(t.state.polygon)},t.render=function(){return null},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=new google.maps.Polygon(Cs({},this.props.options||{},{map:this.context}));this.registeredEvents=Ls({updaterMap:al,eventMap:rl,prevProps:{},nextProps:this.props,instance:e}),this.setState((function(){return{polygon:e}}),this.setPolygonCallback)},n.componentDidUpdate=function(e){null!==this.state.polygon&&(Ms(this.registeredEvents),this.registeredEvents=Ls({updaterMap:al,eventMap:rl,prevProps:e,nextProps:this.props,instance:this.state.polygon}))},n.componentWillUnmount=function(){null!==this.state.polygon&&(this.props.onUnmount&&this.props.onUnmount(this.state.polygon),Ms(this.registeredEvents),this.state.polygon&&this.state.polygon.setMap(null))},t}(ls.PureComponent)).contextType=Os;var il={onBoundsChanged:"bounds_changed",onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},sl={bounds:function(e,t){e.setBounds(t)},draggable:function(e,t){e.setDraggable(t)},editable:function(e,t){e.setEditable(t)},map:function(e,t){e.setMap(t)},options:function(e,t){e.setOptions(t)},visible:function(e,t){e.setVisible(t)}};(function(e){function t(){var t;return(t=e.apply(this,arguments)||this).registeredEvents=[],t.state={rectangle:null},t.setRectangleCallback=function(){null!==t.state.rectangle&&t.props.onLoad&&t.props.onLoad(t.state.rectangle)},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=new google.maps.Rectangle(Cs({},this.props.options||{},{map:this.context}));this.registeredEvents=Ls({updaterMap:sl,eventMap:il,prevProps:{},nextProps:this.props,instance:e}),this.setState((function(){return{rectangle:e}}),this.setRectangleCallback)},n.componentDidUpdate=function(e){null!==this.state.rectangle&&(Ms(this.registeredEvents),this.registeredEvents=Ls({updaterMap:sl,eventMap:il,prevProps:e,nextProps:this.props,instance:this.state.rectangle}))},n.componentWillUnmount=function(){null!==this.state.rectangle&&(this.props.onUnmount&&this.props.onUnmount(this.state.rectangle),Ms(this.registeredEvents),this.state.rectangle.setMap(null))},n.render=function(){return Object(ls.createElement)(ls.Fragment,null)},t}(ls.PureComponent)).contextType=Os;var ll={onCenterChanged:"center_changed",onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRadiusChanged:"radius_changed",onRightClick:"rightclick"},cl={center:function(e,t){e.setCenter(t)},draggable:function(e,t){e.setDraggable(t)},editable:function(e,t){e.setEditable(t)},map:function(e,t){e.setMap(t)},options:function(e,t){e.setOptions(t)},radius:function(e,t){e.setRadius(t)},visible:function(e,t){e.setVisible(t)}};(function(e){function t(){var t;return(t=e.apply(this,arguments)||this).registeredEvents=[],t.state={circle:null},t.setCircleCallback=function(){null!==t.state.circle&&t.props.onLoad&&t.props.onLoad(t.state.circle)},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=new google.maps.Circle(Cs({},this.props.options||{},{map:this.context}));this.registeredEvents=Ls({updaterMap:cl,eventMap:ll,prevProps:{},nextProps:this.props,instance:e}),this.setState((function(){return{circle:e}}),this.setCircleCallback)},n.componentDidUpdate=function(e){null!==this.state.circle&&(Ms(this.registeredEvents),this.registeredEvents=Ls({updaterMap:cl,eventMap:ll,prevProps:e,nextProps:this.props,instance:this.state.circle}))},n.componentWillUnmount=function(){null!==this.state.circle&&(this.props.onUnmount&&this.props.onUnmount(this.state.circle),Ms(this.registeredEvents),this.state.circle&&this.state.circle.setMap(null))},n.render=function(){return Object(ls.createElement)(ls.Fragment,null)},t}(ls.PureComponent)).contextType=Os;var ul={onAddFeature:"addfeature",onClick:"click",onDblClick:"dblclick",onMouseDown:"mousedown",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRemoveFeature:"removefeature",onRemoveProperty:"removeproperty",onRightClick:"rightclick",onSetGeometry:"setgeometry",onSetProperty:"setproperty"},pl={add:function(e,t){e.add(t)},addgeojson:function(e,t,n){e.addGeoJson(t,n)},contains:function(e,t){e.contains(t)},foreach:function(e,t){e.forEach(t)},loadgeojson:function(e,t,n,o){e.loadGeoJson(t,n,o)},overridestyle:function(e,t,n){e.overrideStyle(t,n)},remove:function(e,t){e.remove(t)},revertstyle:function(e,t){e.revertStyle(t)},controlposition:function(e,t){e.setControlPosition(t)},controls:function(e,t){e.setControls(t)},drawingmode:function(e,t){e.setDrawingMode(t)},map:function(e,t){e.setMap(t)},style:function(e,t){e.setStyle(t)},togeojson:function(e,t){e.toGeoJson(t)}};(function(e){function t(){var t;return(t=e.apply(this,arguments)||this).registeredEvents=[],t.state={data:null},t.setDataCallback=function(){null!==t.state.data&&t.props.onLoad&&t.props.onLoad(t.state.data)},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=new google.maps.Data(Cs({},this.props.options||{},{map:this.context}));this.registeredEvents=Ls({updaterMap:pl,eventMap:ul,prevProps:{},nextProps:this.props,instance:e}),this.setState((function(){return{data:e}}),this.setDataCallback)},n.componentDidUpdate=function(e){null!==this.state.data&&(Ms(this.registeredEvents),this.registeredEvents=Ls({updaterMap:pl,eventMap:ul,prevProps:e,nextProps:this.props,instance:this.state.data}))},n.componentWillUnmount=function(){null!==this.state.data&&(this.props.onUnmount&&this.props.onUnmount(this.state.data),Ms(this.registeredEvents),this.state.data&&this.state.data.setMap(null))},n.render=function(){return null},t}(ls.PureComponent)).contextType=Os;var ml={onClick:"click",onDefaultViewportChanged:"defaultviewport_changed",onStatusChanged:"status_changed"},dl={options:function(e,t){e.setOptions(t)},url:function(e,t){e.setUrl(t)},zIndex:function(e,t){e.setZIndex(t)}};(function(e){function t(){var t;return(t=e.apply(this,arguments)||this).registeredEvents=[],t.state={kmlLayer:null},t.setKmlLayerCallback=function(){null!==t.state.kmlLayer&&t.props.onLoad&&t.props.onLoad(t.state.kmlLayer)},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=new google.maps.KmlLayer(Cs({},this.props.options,{map:this.context}));this.registeredEvents=Ls({updaterMap:dl,eventMap:ml,prevProps:{},nextProps:this.props,instance:e}),this.setState((function(){return{kmlLayer:e}}),this.setKmlLayerCallback)},n.componentDidUpdate=function(e){null!==this.state.kmlLayer&&(Ms(this.registeredEvents),this.registeredEvents=Ls({updaterMap:dl,eventMap:ml,prevProps:e,nextProps:this.props,instance:this.state.kmlLayer}))},n.componentWillUnmount=function(){null!==this.state.kmlLayer&&(this.props.onUnmount&&this.props.onUnmount(this.state.kmlLayer),Ms(this.registeredEvents),this.state.kmlLayer.setMap(null))},n.render=function(){return null},t}(ls.PureComponent)).contextType=Os;var hl=function(e,t){return new t(e.lat,e.lng)},bl=function(e,t){return new t(new google.maps.LatLng(e.ne.lat,e.ne.lng),new google.maps.LatLng(e.sw.lat,e.sw.lng))},gl=function(e,t,n){return e instanceof t?e:n(e,t)},vl=function(e,t,n,o){return void 0!==n?function(e,t,n){var o=e.fromLatLngToDivPixel(n.getNorthEast()),r=e.fromLatLngToDivPixel(n.getSouthWest());return o&&r?{left:r.x+t.x+"px",top:o.y+t.y+"px",width:o.x-r.x-t.x+"px",height:r.y-o.y-t.y+"px"}:{left:"-9999px",top:"-9999px"}}(e,t,gl(n,google.maps.LatLngBounds,bl)):function(e,t,n){var o=e.fromLatLngToDivPixel(n);if(o){var r=o.x,a=o.y;return{left:r+t.x+"px",top:a+t.y+"px"}}return{left:"-9999px",top:"-9999px"}}(e,t,gl(o,google.maps.LatLng,hl))},fl=function(e){function t(){return e.apply(this,arguments)||this}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.onLoad&&this.props.onLoad()},n.render=function(){return this.props.children},t}(ls.Component),kl=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).state={overlayView:null},t.containerElement=null,t.setOverlayViewCallback=function(){null!==t.state.overlayView&&t.props.onLoad&&t.props.onLoad(t.state.overlayView),t.onPositionElement()},t.onAdd=function(){t.containerElement=document.createElement("div"),t.containerElement.style.position="absolute"},t.onPositionElement=function(){if(null!==t.state.overlayView&&null!==t.containerElement){var e=t.state.overlayView.getProjection(),n=Cs({x:0,y:0},(r=t.containerElement,"function"==typeof(a=t.props.getPixelPositionOffset)?a(r.offsetWidth,r.offsetHeight):{})),o=vl(e,n,t.props.bounds,t.props.position);Object.assign(t.containerElement.style,o)}var r,a},t.draw=function(){t.props.mapPaneName||us()(!1);var e=t.state.overlayView;if(null!==e){var n=e.getPanes();n&&(t.containerElement&&n[t.props.mapPaneName].appendChild(t.containerElement),t.onPositionElement(),t.forceUpdate())}},t.onRemove=function(){null!==t.containerElement&&t.containerElement.parentNode&&(t.containerElement.parentNode.removeChild(t.containerElement),delete t.containerElement)},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=new google.maps.OverlayView;e.onAdd=this.onAdd,e.draw=this.draw,e.onRemove=this.onRemove,e.setMap(this.context),this.setState((function(){return{overlayView:e}}))},n.componentDidUpdate=function(e){var t=this;e.position===this.props.position&&e.bounds===this.props.bounds||setTimeout((function(){null!==t.state.overlayView&&t.state.overlayView.draw()}),0)},n.componentWillUnmount=function(){null!==this.state.overlayView&&(this.props.onUnmount&&this.props.onUnmount(this.state.overlayView),this.state.overlayView.setMap(null))},n.render=function(){return null!==this.containerElement?Object(ws.createPortal)(Object(ls.createElement)(fl,{onLoad:this.setOverlayViewCallback},ls.Children.only(this.props.children)),this.containerElement):Object(ls.createElement)(ls.Fragment,null)},t}(ls.PureComponent);kl.FLOAT_PANE="floatPane",kl.MAP_PANE="mapPane",kl.MARKER_LAYER="markerLayer",kl.OVERLAY_LAYER="overlayLayer",kl.OVERLAY_MOUSE_TARGET="overlayMouseTarget",kl.contextType=Os;var yl={onDblClick:"dblclick",onClick:"click"},wl={opacity:function(e,t){e.setOpacity(t)}},_l=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).registeredEvents=[],t.state={groundOverlay:null},t.setGroundOverlayCallback=function(){null!==t.state.groundOverlay&&t.props.onLoad&&t.props.onLoad(t.state.groundOverlay)},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.url||this.props.bounds||us()(!1);var e=new google.maps.GroundOverlay(this.props.url,this.props.bounds,Cs({},this.props.options,{map:this.context}));this.registeredEvents=Ls({updaterMap:wl,eventMap:yl,prevProps:{},nextProps:this.props,instance:e}),this.setState((function(){return{groundOverlay:e}}),this.setGroundOverlayCallback)},n.componentDidUpdate=function(e){null!==this.state.groundOverlay&&(Ms(this.registeredEvents),this.registeredEvents=Ls({updaterMap:wl,eventMap:yl,prevProps:e,nextProps:this.props,instance:this.state.groundOverlay}))},n.componentWillUnmount=function(){this.state.groundOverlay&&(this.props.onUnmount&&this.props.onUnmount(this.state.groundOverlay),this.state.groundOverlay.setMap(null))},n.render=function(){return null},t}(ls.PureComponent);_l.defaultProps={onLoad:function(){}},_l.contextType=Os;var Cl={},El={data:function(e,t){e.setData(t)},map:function(e,t){e.setMap(t)},options:function(e,t){e.setOptions(t)}};(function(e){function t(){var t;return(t=e.apply(this,arguments)||this).registeredEvents=[],t.state={heatmapLayer:null},t.setHeatmapLayerCallback=function(){null!==t.state.heatmapLayer&&t.props.onLoad&&t.props.onLoad(t.state.heatmapLayer)},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){google.maps.visualization||us()(!1),this.props.data||us()(!1);var e=new google.maps.visualization.HeatmapLayer(Cs({data:this.props.data},this.props.options||{},{map:this.context}));this.registeredEvents=Ls({updaterMap:El,eventMap:Cl,prevProps:{},nextProps:this.props,instance:e}),this.setState((function(){return{heatmapLayer:e}}),this.setHeatmapLayerCallback)},n.componentDidUpdate=function(e){Ms(this.registeredEvents),this.registeredEvents=Ls({updaterMap:El,eventMap:Cl,prevProps:e,nextProps:this.props,instance:this.state.heatmapLayer})},n.componentWillUnmount=function(){null!==this.state.heatmapLayer&&(this.props.onUnmount&&this.props.onUnmount(this.state.heatmapLayer),Ms(this.registeredEvents),this.state.heatmapLayer.setMap(null))},n.render=function(){return null},t}(ls.PureComponent)).contextType=Os;var xl={onCloseClick:"closeclick",onPanoChanged:"pano_changed",onPositionChanged:"position_changed",onPovChanged:"pov_changed",onResize:"resize",onStatusChanged:"status_changed",onVisibleChanged:"visible_changed",onZoomChanged:"zoom_changed"},Ol={register:function(e,t,n){e.registerPanoProvider(t,n)},links:function(e,t){e.setLinks(t)},motionTracking:function(e,t){e.setMotionTracking(t)},options:function(e,t){e.setOptions(t)},pano:function(e,t){e.setPano(t)},position:function(e,t){e.setPosition(t)},pov:function(e,t){e.setPov(t)},visible:function(e,t){e.setVisible(t)},zoom:function(e,t){e.setZoom(t)}};(function(e){function t(){var t;return(t=e.apply(this,arguments)||this).registeredEvents=[],t.state={streetViewPanorama:null},t.setStreetViewPanoramaCallback=function(){null!==t.state.streetViewPanorama&&t.props.onLoad&&t.props.onLoad(t.state.streetViewPanorama)},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.context.getStreetView();this.registeredEvents=Ls({updaterMap:Ol,eventMap:xl,prevProps:{},nextProps:this.props,instance:e}),this.setState((function(){return{streetViewPanorama:e}}),this.setStreetViewPanoramaCallback)},n.componentDidUpdate=function(e){null!==this.state.streetViewPanorama&&(Ms(this.registeredEvents),this.registeredEvents=Ls({updaterMap:Ol,eventMap:xl,prevProps:e,nextProps:this.props,instance:this.state.streetViewPanorama}))},n.componentWillUnmount=function(){null!==this.state.streetViewPanorama&&(this.props.onUnmount&&this.props.onUnmount(this.state.streetViewPanorama),Ms(this.registeredEvents),this.state.streetViewPanorama.setVisible(!1))},n.render=function(){return null},t}(ls.PureComponent)).contextType=Os,(function(e){function t(){var t;return(t=e.apply(this,arguments)||this).state={streetViewService:null},t.setStreetViewServiceCallback=function(){null!==t.state.streetViewService&&t.props.onLoad&&t.props.onLoad(t.state.streetViewService)},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=new google.maps.StreetViewService;this.setState((function(){return{streetViewService:e}}))},n.componentWillUnmount=function(){null!==this.state.streetViewService&&this.props.onUnmount&&this.props.onUnmount(this.state.streetViewService)},n.render=function(){return null},t}(ls.PureComponent)).contextType=Os;ls.PureComponent;var jl={onDirectionsChanged:"directions_changed"},Sl={directions:function(e,t){e.setDirections(t)},map:function(e,t){e.setMap(t)},options:function(e,t){e.setOptions(t)},panel:function(e,t){e.setPanel(t)},routeIndex:function(e,t){e.setRouteIndex(t)}};(function(e){function t(){var t;return(t=e.apply(this,arguments)||this).registeredEvents=[],t.state={directionsRenderer:null},t.setDirectionsRendererCallback=function(){null!==t.state.directionsRenderer&&(t.state.directionsRenderer.setMap(t.context),t.props.onLoad&&t.props.onLoad(t.state.directionsRenderer))},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=new google.maps.DirectionsRenderer(this.props.options);this.registeredEvents=Ls({updaterMap:Sl,eventMap:jl,prevProps:{},nextProps:this.props,instance:e}),this.setState((function(){return{directionsRenderer:e}}),this.setDirectionsRendererCallback)},n.componentDidUpdate=function(e){null!==this.state.directionsRenderer&&(Ms(this.registeredEvents),this.registeredEvents=Ls({updaterMap:Sl,eventMap:jl,prevProps:e,nextProps:this.props,instance:this.state.directionsRenderer}))},n.componentWillUnmount=function(){null!==this.state.directionsRenderer&&(this.props.onUnmount&&this.props.onUnmount(this.state.directionsRenderer),Ms(this.registeredEvents),this.state.directionsRenderer&&this.state.directionsRenderer.setMap(null))},n.render=function(){return Object(ls.createElement)(ls.Fragment,null)},t}(ls.PureComponent)).contextType=Os;ls.PureComponent;var Nl={onPlacesChanged:"places_changed"},Ml={bounds:function(e,t){e.setBounds(t)}};(function(e){function t(){var t;return(t=e.apply(this,arguments)||this).registeredEvents=[],t.containerElement=Object(ls.createRef)(),t.state={searchBox:null},t.setSearchBoxCallback=function(){null!==t.state.searchBox&&t.props.onLoad&&t.props.onLoad(t.state.searchBox)},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){if(google.maps.places||us()(!1),null!==this.containerElement&&null!==this.containerElement.current){var e=this.containerElement.current.querySelector("input");if(e){var t=new google.maps.places.SearchBox(e,this.props.options);this.registeredEvents=Ls({updaterMap:Ml,eventMap:Nl,prevProps:{},nextProps:this.props,instance:t}),this.setState((function(){return{searchBox:t}}),this.setSearchBoxCallback)}}},n.componentDidUpdate=function(e){null!==this.state.searchBox&&(Ms(this.registeredEvents),this.registeredEvents=Ls({updaterMap:Ml,eventMap:Nl,prevProps:e,nextProps:this.props,instance:this.state.searchBox}))},n.componentWillUnmount=function(){null!==this.state.searchBox&&(this.props.onUnmount&&this.props.onUnmount(this.state.searchBox),Ms(this.registeredEvents))},n.render=function(){return Object(ls.createElement)("div",{ref:this.containerElement},ls.Children.only(this.props.children))},t}(ls.PureComponent)).contextType=Os;var Ll={onPlaceChanged:"place_changed"},Pl={bounds:function(e,t){e.setBounds(t)},restrictions:function(e,t){e.setComponentRestrictions(t)},fields:function(e,t){e.setFields(t)},options:function(e,t){e.setOptions(t)},types:function(e,t){e.setTypes(t)}};(function(e){function t(){var t;return(t=e.apply(this,arguments)||this).registeredEvents=[],t.containerElement=Object(ls.createRef)(),t.state={autocomplete:null},t.setAutocompleteCallback=function(){null!==t.state.autocomplete&&t.props.onLoad&&t.props.onLoad(t.state.autocomplete)},t}Es(t,e);var n=t.prototype;return n.componentDidMount=function(){google.maps.places||us()(!1);var e=this.containerElement.current.querySelector("input");if(e){var t=new google.maps.places.Autocomplete(e,this.props.options);this.registeredEvents=Ls({updaterMap:Pl,eventMap:Ll,prevProps:{},nextProps:this.props,instance:t}),this.setState((function(){return{autocomplete:t}}),this.setAutocompleteCallback)}},n.componentDidUpdate=function(e){Ms(this.registeredEvents),this.registeredEvents=Ls({updaterMap:Pl,eventMap:Ll,prevProps:e,nextProps:this.props,instance:this.state.autocomplete})},n.componentWillUnmount=function(){null!==this.state.autocomplete&&Ms(this.registeredEvents)},n.render=function(){return Object(ls.createElement)("div",{ref:this.containerElement},ls.Children.only(this.props.children))},t}(ls.PureComponent)).contextType=Os;var Tl,Il,Bl=wp.element,Dl=Bl.Fragment,zl=Bl.Component,Al=lodash,Rl=Al.pick,Ul=Al.mapKeys,Fl=Al.capitalize,Wl=wp.i18n.__,Hl=wp.blockEditor,Vl=(Hl.RichText,Hl.InspectorControls),Zl=wp.components,ql=Zl.RangeControl,Gl=Zl.TextControl,Kl=Zl.SelectControl,$l=Zl.PanelBody,Yl=Zl.Button,Jl=Zl.ButtonGroup,Ql=wp.element.createRef,Xl=function(e){function t(e){var n;return Pe()(this,t),(n=De()(this,Ae()(t).apply(this,arguments))).state={editingMarker:!1},n.mapRef=Ql(),n.onCenterChange=n.onCenterChange.bind(We()(n)),n.onZoomChange=n.onZoomChange.bind(We()(n)),n.onAddMarkerClick=n.onAddMarkerClick.bind(We()(n)),n.onMapClick=n.onMapClick.bind(We()(n)),n}return Ue()(t,e),Ie()(t,[{key:"onCenterChange",value:function(){var e=this.props.setAttributes,t=this.getMapCenter();t&&e({centerLat:t.lat,centerLng:t.lng})}},{key:"getMapCenter",value:function(){var e=this.mapRef.current;if(e)return{lat:e.state.map.center.lat().toFixed(7),lng:e.state.map.center.lng().toFixed(7)}}},{key:"onZoomChange",value:function(){var e=this.props.setAttributes,t=this.mapRef.current;t&&e({zoom:t.state.map.zoom})}},{key:"onMapClick",value:function(){this.setState({editingMarker:!1})}},{key:"onAddMarkerClick",value:function(){var e=this.getMapCenter();this.addMarker(e)}},{key:"addMarker",value:function(e){var t=this.props,n=t.attributes,o=t.setAttributes,r=n.markers;r||(r=[]),r.push(e),o({markers:r}),this.forceUpdate()}},{key:"removeMarker",value:function(e){var t=this.props,n=t.attributes,o=t.setAttributes,r=n.markers;r&&(r.splice(e,1),o({markers:r.slice(0)}))}},{key:"onEditMarker",value:function(e){this.setState({editingMarker:e})}},{key:"updateMarker",value:function(e,t){var n=this.props,o=n.attributes,r=n.setAttributes,a=o.markers;Object.assign(a[e],t),r({markers:a}),this.forceUpdate()}},{key:"render",value:function(){var e=this,t=this.props,n=t.attributes,o=t.setAttributes,r=t.className,a=t.isSelected,i=n.centerLat,s=n.centerLng,l=n.markers,c=n.zoom,u=n.type,p=(ae()(r,{"is-selected":a}),!1!==this.state.editingMarker&&l[this.state.editingMarker]);return Object(M.createElement)(Dl,null,Object(M.createElement)(Is,{zoom:Number(c),center:{lat:Number(i),lng:Number(s)},onCenterChanged:this.onCenterChange,onZoomChanged:this.onZoomChange,mapTypeId:u||"roadmap",mapContainerStyle:{height:"400px",width:"600px"},options:{mapTypeControl:!1,fullscreenControl:!1,streetViewControl:!1,scrollwheel:!1},onClick:this.onMapClick,ref:this.mapRef},l&&l.map((function(t,n){return Object(M.createElement)($s,{key:n,position:{lat:Number(t.lat),lng:Number(t.lng)},onDragEnd:function(t){e.updateMarker(n,{lat:t.latLng.lat(),lng:t.latLng.lng()})},draggable:!0,icon:t.iconUrl,opacity:p&&p!=t?.5:1,onClick:function(){e.onEditMarker(n)}})}))),Object(M.createElement)(Jl,null,Object(M.createElement)(Yl,{isPrimary:!0,className:"wp-block-svbk-map__add-marker",onClick:this.onAddMarkerClick},Wl("Add new Marker","_svbk"))),Object(M.createElement)(Vl,null,Object(M.createElement)($l,{title:Wl("Map Settings","_svbk")},Object(M.createElement)(Gl,{label:Wl("Latitude","_svbk"),value:i,onChange:function(e){return o({centerLat:e})}}),Object(M.createElement)(Gl,{label:Wl("Longitude","_svbk"),value:s,onChange:function(e){return o({centerLng:e})}}),Object(M.createElement)(ql,{label:Wl("Zoom","_svbk"),value:c,onChange:function(e){return o({zoom:Number(e)})},min:1,max:22}),Object(M.createElement)(Kl,{label:Wl("Type","_svbk"),value:u,selected:u,options:[{label:Wl("Roadmap","_svbk"),value:"roadmap"},{label:Wl("Satellite","_svbk"),value:"satellite"},{label:Wl("Hybrid","_svbk"),value:"hybrid"},{label:Wl("Terrain","_svbk"),value:"terrain"}],onChange:function(e){return o({type:e})}})),Object(M.createElement)($l,{title:Wl("Marker Settings","_svbk")},!1!==p?Object(M.createElement)(Dl,null,Object(M.createElement)(Gl,{label:Wl("Latitude","_svbk"),value:p.lat,onChange:function(t){return e.updateMarker(e.state.editingMarker,{lat:t})}}),Object(M.createElement)(Gl,{label:Wl("Longitude","_svbk"),value:p.lng,onChange:function(t){return e.updateMarker(e.state.editingMarker,{lng:t})}}),Object(M.createElement)(kt,{setAttributes:function(t){!function(t,n){var o=Ul(Rl(n,["id","url"]),(function(e,t){return"icon"+Fl(t)}));e.updateMarker(t,o)}(e.state.editingMarker,t)},url:p.iconUrl}),Object(M.createElement)(Jl,null,Object(M.createElement)(Yl,{isDefault:!0,isDestructive:!0,className:"wp-block-svbk-map__remove-marker",onClick:function(){e.setState({editingMarker:!1}),e.removeMarker(e.state.editingMarker)}},Wl("Remove Marker","_svbk")))):Object(M.createElement)("div",null,Object(M.createElement)("p",null,Wl("Please click on a marker to edit or","_svbk")),Object(M.createElement)(Yl,{isPrimary:!0,className:"wp-block-svbk-map__add-marker",onClick:this.onAddMarkerClick},Wl("Add new Marker","_svbk"))))))}}]),t}(zl),ec=wp.i18n.__,tc="svbk/map",nc={title:ec("Map","_svbk"),icon:"location-alt",category:"common",keywords:[ec("map"),ec("google map"),ec("location")],attributes:{centerLat:{type:"string",source:"attribute",attribute:"data-center-lat",selector:".wp-block-svbk-map__map",default:38},centerLng:{type:"string",source:"attribute",attribute:"data-center-lng",selector:".wp-block-svbk-map__map",default:-41},zoom:{type:"string",source:"attribute",attribute:"data-zoom",selector:".wp-block-svbk-map__map",default:10},type:{type:"string",source:"attribute",attribute:"data-type",selector:".wp-block-svbk-map__map",default:"roadmap"},markers:{type:"array",source:"query",selector:".wp-block-svbk-map__marker",default:[],query:{lat:{type:"string",source:"attribute",attribute:"data-lat"},lng:{type:"string",source:"attribute",attribute:"data-lng"},iconUrl:{type:"string",source:"attribute",attribute:"data-icon-url"},iconId:{type:"number",source:"attribute",attribute:"data-icon-id"}}}},edit:Xl,save:function(e){var t=e.attributes,n=e.className,o=t.centerLat,r=t.centerLng,a=t.markers,i=t.zoom,s=t.type,l=ae()(n);return Object(M.createElement)("div",{className:l},Object(M.createElement)("div",{className:"wp-block-svbk-map__map","data-center-lat":o,"data-center-lng":r,"data-zoom":i,"data-type":s},"Map loading..."),a.map((function(e,t){return Object(M.createElement)("div",{key:t,className:"wp-block-svbk-map__marker","data-lng":e.lng,"data-lat":e.lat,"data-icon-url":e.iconUrl,"data-icon-id":e.iconId})})))}},oc=wp.element,rc=oc.Fragment,ac=oc.Component,ic=wp.i18n.__,sc=wp.blockEditor,lc=sc.RichText,cc=sc.PlainText,uc=wp.components,pc=uc.ButtonGroup,mc=uc.Button,dc=function(e){function t(e){var n;return Pe()(this,t),(n=De()(this,Ae()(t).apply(this,arguments))).updateStep=n.updateStep.bind(We()(n)),n.addStep=n.addStep.bind(We()(n)),n.removeStep=n.removeStep.bind(We()(n)),n.cloneStep=n.cloneStep.bind(We()(n)),n}return Ue()(t,e),Ie()(t,[{key:"addStep",value:function(){var e=this.props,t=e.attributes.steps,n=e.setAttributes,o=t.slice(0);o.push({icon:"",name:"",content:""}),n({steps:o})}},{key:"removeStep",value:function(e){var t=this.props,n=t.attributes.steps,o=t.setAttributes;n.splice(e,1),o({steps:n.slice(0)})}},{key:"cloneStep",value:function(e){var t=this.props,n=t.attributes.steps,o=t.setAttributes;n.splice(e,0,n[e]),o({steps:n.slice(0)})}},{key:"updateStep",value:function(e,t){var n=this.props,o=n.attributes.steps,r=n.setAttributes,a=o.slice(0),i=Object.assign({},o[e],t);a[e]=i,r({steps:a})}},{key:"render",value:function(){var e=this,t=this.props,n=t.attributes,o=t.className,r=t.isSelected,a=n.steps,i=ae()(o,{"is-selected":r});return Object(M.createElement)(rc,null,Object(M.createElement)("div",{className:i},a.map((function(t,n){return Object(M.createElement)("div",{className:"wp-block-svbk-iter__step",key:n},Object(M.createElement)(kr,Yt()({},e.props,{attributes:t,setAttributes:function(t){e.updateStep(n,t)}})),Object(M.createElement)("div",{className:"wp-block-svbk-iter__wrapper"},Object(M.createElement)(cc,{value:t.name,onChange:function(t){return e.updateStep(n,{name:t})},placeholder:ic("Step "+(n+1)+"..","_svbk"),className:"wp-block-svbk-iter__name"}),Object(M.createElement)(cc,{value:t.title,onChange:function(t){return e.updateStep(n,{title:t})},placeholder:ic("Title..","_svbk"),className:"wp-block-svbk-iter__title"}),Object(M.createElement)(lc,{tagName:"div",value:t.content,onChange:function(t){return e.updateStep(n,{content:t})},placeholder:ic("Content..","_svbk"),className:"wp-block-svbk-bullet__content"})),Object(M.createElement)(pc,null,Object(M.createElement)(mc,{isDestructive:!0,className:"wp-block-svbk-iter__remove",onClick:function(){e.removeStep(n)}},ic("Remove Step","_svbk")),Object(M.createElement)(mc,{isDefault:!0,className:"wp-block-svbk-iter__clone",onClick:function(){e.cloneStep(n)}},ic("Clone Step","_svbk"))))}))),Object(M.createElement)(mc,{isPrimary:!0,className:"wp-block-svbk-iter__add",onClick:this.addStep},ic("Add Step","_svbk")))}}]),t}(ac),hc=wp.i18n.__,bc=wp.blockEditor.RichText,gc=wp.element.RawHTML,vc="svbk/iter",fc={title:hc("Iter","_svbk"),icon:"editor-ul",category:"common",keywords:[hc("iter","_svbk"),hc("steps","_svbk")],attributes:{steps:{type:"array",default:[{icon:"",name:"",title:"",content:""}],source:"query",selector:"div.wp-block-svbk-iter .wp-block-svbk-iter__step",query:{icon:{type:"string",source:"html",selector:".wp-block-svbk-iter__step-icon"},name:(Tl={source:"string"},oe()(Tl,"source","text"),oe()(Tl,"selector",".wp-block-svbk-iter__step-name"),Tl),title:(Il={source:"string"},oe()(Il,"source","text"),oe()(Il,"selector",".wp-block-svbk-iter__step-title"),Il),content:{type:"string",source:"html",selector:".wp-block-svbk-iter__step-content"}}}},edit:dc,save:function(e){var t=e.attributes.steps;return Object(M.createElement)("div",null,t.map((function(e,t){return Object(M.createElement)("div",{className:"wp-block-svbk-iter__step",key:t},Object(M.createElement)("div",{className:"wp-block-svbk-iter__step-icon"},Object(M.createElement)(gc,null,e.icon)),Object(M.createElement)("span",{className:"wp-block-svbk-iter__step-name"},e.name),Object(M.createElement)("h3",{className:"wp-block-svbk-iter__step-title"},e.title),Object(M.createElement)(bc.Content,{tagName:"span",className:"wp-block-svbk-iter__step-content",value:e.content}))})))}},kc=wp.element,yc=kc.Fragment,wc=kc.Component,_c=lodash,Cc=_c.pick,Ec=_c.mapKeys,xc=_c.capitalize,Oc=wp.i18n.__,jc=wp.blockEditor,Sc=jc.RichText,Nc=jc.InspectorControls,Mc=(jc.BlockControls,jc.ContrastChecker),Lc=jc.PanelColorSettings,Pc=jc.withColors,Tc=jc.InnerBlocks,Ic=wp.components,Bc=Ic.PanelBody,Dc=Ic.Button,zc=(Ic.ButtonGroup,wp.compose.compose),Ac=["core/paragraph","core/list"],Rc=[["core/paragraph",{content:"Lorem ipsum sit amet..."}]],Uc=function(e){function t(){return Pe()(this,t),De()(this,Ae()(t).apply(this,arguments))}return Ue()(t,e),Ie()(t,[{key:"render",value:function(){var e,t=this.props,n=t.attributes,o=t.setAttributes,r=t.className,a=t.isSelected,i=t.backgroundColor,s=t.textColor,l=t.setBackgroundColor,c=t.setTextColor,u=n.sealUrl,p=n.sealId,m=n.sealSize,d=n.title,h=n.subtitle,b=n.footer,g=n.backgroundImageUrl,v=n.backgroundImageId,f=n.backgroundImageSize,k=ae()(r,(e={"is-selected":a},oe()(e,i.class,i.class),oe()(e,s.class,s.class),e)),y=g?{backgroundImage:"url(".concat(g,")"),backgroundSize:"cover"}:{},w={backgroundColor:i.color,color:s.color};return Object(M.createElement)(yc,null,Object(M.createElement)("div",{className:k,style:y},Object(M.createElement)("div",{className:"wp-block-svbk-warranty__content",style:w},Object(M.createElement)(kt,{setAttributes:function(e){var t=Ec(Cc(e,["id","url","size"]),(function(e,t){return"seal"+xc(t)}));o(t)},url:u,id:p,size:m,labels:{title:"Seal"}}),Object(M.createElement)("header",{className:"wp-block-svbk-warranty__header"},Object(M.createElement)(Sc,{tagName:"h3",value:d,onChange:function(e){return o({title:e})},placeholder:Oc("This is my title..","_svbk"),className:"wp-block-svbk-warranty__title"}),Object(M.createElement)(Sc,{tagName:"p",value:h,onChange:function(e){return o({subtitle:e})},placeholder:Oc("Subtitle..","_svbk"),className:"wp-block-svbk-warranty__subtitle"})),Object(M.createElement)(Tc,{templateLock:!1,allowedBlocks:Ac,template:Rc}),Object(M.createElement)(Sc,{tagName:"footer",value:b,onChange:function(e){o({footer:e})},placeholder:Oc("Footer content..","_svbk"),className:"wp-block-svbk-warranty__footer"}))),Object(M.createElement)(Nc,null,Object(M.createElement)(Bc,{title:Oc("Background Settings","__svbk")},Object(M.createElement)(kt,{setAttributes:function(e){var t=Ec(Cc(e,["id","url","size"]),(function(e,t){return"backgroundImage"+xc(t)}));o(t)},url:g,id:v,size:f,labels:{title:"Background Image"},inInspector:!0}),g&&Object(M.createElement)(Dc,{isDestructive:!0,className:"wp-block-svbk-warranty__bg-remove",onClick:function(){o({backgroundImageUrl:"",backgroundImageId:null})}},Oc("Remove","_svbk"))),Object(M.createElement)(Lc,{title:Oc("Color Settings"),initialOpen:!1,colorSettings:[{value:i.color,onChange:l,label:Oc("Background Color")},{value:s.color,onChange:c,label:Oc("Text Color")}]}),Object(M.createElement)(Mc,{textColor:s.color,backgroundColor:i.color})))}}]),t}(wc),Fc=zc([Pc("backgroundColor",{textColor:"color"})])(Uc),Wc=wp.blockEditor,Hc=Wc.RichText,Vc=Wc.getColorClassName,Zc=Wc.InnerBlocks,qc=[{attributes:{sealUrl:{type:"string",source:"attribute",attribute:"src",selector:".wp-block-svbk-warranty__seal img"},sealId:{type:"number"},title:{type:"string",source:"html",selector:".wp-block-svbk-warranty__title"},subtitle:{type:"string",source:"html",selector:".wp-block-svbk-warranty__subtitle"},content:{type:"string",source:"html",selector:".wp-block-svbk-warranty__content"},footer:{type:"string",source:"html",selector:".wp-block-svbk-warranty__footer"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},backgroundImageUrl:{type:"string"},backgroundImageId:{type:"number"}},save:function(e){var t,n=e.attributes,o=n.sealUrl,r=n.sealId,a=n.title,i=n.subtitle,s=(n.content,n.footer),l=n.backgroundColor,c=n.customBackgroundColor,u=n.textColor,p=n.customTextColor,m=n.backgroundImageUrl,d=n.backgroundImageId,h=Vc("background-color",l),b=Vc("color",u),g=ae()("wp-block-svbk-warranty__content",(t={"has-text-color":u||p,"has-background":l||c},oe()(t,b,b),oe()(t,h,h),t)),v={backgroundColor:h?void 0:c,color:b?void 0:p};return Object(M.createElement)("aside",{className:ae()({"has-background-image":m})},Object(M.createElement)("div",{className:g,style:v},o&&Object(M.createElement)("figure",{className:"wp-block-svbk-warranty__seal"},Object(M.createElement)("img",{src:o,alt:"Warranty Seal",className:r?"wp-image-".concat(r):null})),Object(M.createElement)("header",{className:"wp-block-svbk-warranty__header"},a&&Object(M.createElement)(Hc.Content,{tagName:"h3",className:"wp-block-svbk-warranty__title",value:a}),i&&Object(M.createElement)(Hc.Content,{tagName:"p",className:"wp-block-svbk-warranty__subtitle",value:i})),Object(M.createElement)("div",{className:"wp-block-svbk-warranty__content"},Object(M.createElement)(Zc.Content,null)),s&&Object(M.createElement)(Hc.Content,{tagName:"footer",className:"wp-block-svbk-warranty__footer",value:s})),m&&Object(M.createElement)("img",{className:"wp-block-svbk-warranty__background"+(d?"wp-image-".concat(d):null),alt:"","aria-hidden":!0,src:m}))}}],Gc=wp.i18n.__,Kc=wp.blockEditor,$c=Kc.RichText,Yc=Kc.getColorClassName,Jc=Kc.InnerBlocks,Qc="svbk/warranty",Xc={title:Gc("Warranty","_svbk"),icon:"awards",category:"common",keywords:[Gc("warranty","_svbk"),Gc("assurance","_svbk"),Gc("guarantee","_svbk")],styles:[{name:"default",label:Gc("Default"),isDefault:!0},{name:"small",label:Gc("Small","_svbk")}],supports:{anchor:!0},deprecated:qc,attributes:{sealUrl:{type:"string",source:"attribute",attribute:"src",selector:".wp-block-svbk-warranty__seal img"},sealId:{type:"number"},sealSize:{type:"string"},title:{type:"string",source:"html",selector:".wp-block-svbk-warranty__title"},subtitle:{type:"string",source:"html",selector:".wp-block-svbk-warranty__subtitle"},content:{type:"string",source:"html",selector:".wp-block-svbk-warranty__text"},footer:{type:"string",source:"html",selector:".wp-block-svbk-warranty__footer"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},backgroundImageUrl:{type:"string"},backgroundImageId:{type:"number"},backgroundImageSise:{type:"string"}},edit:Fc,save:function(e){var t,n=e.attributes,o=n.sealUrl,r=n.sealId,a=n.title,i=n.subtitle,s=(n.content,n.footer),l=n.backgroundColor,c=n.customBackgroundColor,u=n.textColor,p=n.customTextColor,m=n.backgroundImageUrl,d=n.backgroundImageId,h=Yc("background-color",l),b=Yc("color",u),g=ae()("wp-block-svbk-warranty__content",(t={"has-text-color":u||p,"has-background":l||c},oe()(t,b,b),oe()(t,h,h),t)),v={backgroundColor:h?void 0:c,color:b?void 0:p};return Object(M.createElement)("aside",{className:ae()({"has-background-image":m})},Object(M.createElement)("div",{className:g,style:v},o&&Object(M.createElement)("figure",{className:"wp-block-svbk-warranty__seal"},Object(M.createElement)("img",{src:o,alt:"Warranty Seal",className:r?"wp-image-".concat(r):null})),Object(M.createElement)("header",{className:"wp-block-svbk-warranty__header"},a&&Object(M.createElement)($c.Content,{tagName:"h3",className:"wp-block-svbk-warranty__title",value:a}),i&&Object(M.createElement)($c.Content,{tagName:"p",className:"wp-block-svbk-warranty__subtitle",value:i})),Object(M.createElement)("div",{className:"wp-block-svbk-warranty__text"},Object(M.createElement)(Jc.Content,null)),s&&Object(M.createElement)($c.Content,{tagName:"footer",className:"wp-block-svbk-warranty__footer",value:s})),m&&Object(M.createElement)("img",{className:"wp-block-svbk-warranty__background"+(d?"wp-image-".concat(d):null),alt:"","aria-hidden":!0,src:m}))}},eu=wp.element,tu=eu.Fragment,nu=eu.Component,ou=lodash,ru=ou.pick,au=ou.mapKeys,iu=ou.capitalize,su=wp.i18n.__,lu=wp.blockEditor,cu=lu.RichText,uu=lu.URLInput,pu=lu.InspectorControls,mu=lu.BlockControls,du=wp.components,hu=du.Dashicon,bu=du.IconButton,gu=du.PanelBody,vu=du.ToggleControl,fu=du.Toolbar,ku=function(e){function t(){var e;return Pe()(this,t),(e=De()(this,Ae()(t).apply(this,arguments))).state={customStackedImage:Boolean(e.props.attributes.pictureStackedUrl)},e}return Ue()(t,e),Ie()(t,[{key:"render",value:function(){var e,t=this,n=this.props,o=n.attributes,r=n.setAttributes,a=n.className,i=n.isSelected,s=o.pictureUrl,l=o.pictureId,c=o.pictureSize,u=o.pictureStackedUrl,p=o.pictureStackedId,m=o.pictureStackedSize,d=o.pictureAlt,h=o.pretitle,b=o.title,g=o.titleLevel,v=o.subtitle,f=o.text,k=o.footer,y=o.align,w=o.primaryButtonUrl,_=o.primaryButtonText,C=o.secondaryButtonUrl,E=o.secondaryButtonText,x=o.bottomPadded,O=ae()(a,(e={"is-selected":i},oe()(e,"has-align-".concat(y),y),oe()(e,"has-bottom-padding",x),e)),j=[{icon:"align-pull-right",title:su("Show content on left"),isActive:"left"===y,onClick:function(){return r({align:"left"})}},{icon:"align-pull-left",title:su("Show content on right"),isActive:"right"===y,onClick:function(){return r({align:"right"})}}],S=g?"h"+g:"h1";return Object(M.createElement)(tu,null,Object(M.createElement)("div",{className:O,style:{}},Object(M.createElement)(kt,{setAttributes:function(e){var t=au(ru(e,["id","url","alt","size"]),(function(e,t){return"picture"+iu(t)}));r(t)},url:s,id:l,alt:d,size:c,isMain:!0}),s&&Object(M.createElement)("div",{className:"wp-block-svbk-hero__content"},Object(M.createElement)(cu,{tagName:"p",value:h,onChange:function(e){return r({pretitle:e})},placeholder:su("Question: is this a new block?","_svbk"),className:"wp-block-svbk-hero__subtitle"}),Object(M.createElement)(cu,{tagName:S,value:b,onChange:function(e){return r({title:e})},placeholder:su("This is my title..","_svbk"),className:"wp-block-svbk-hero__title"}),Object(M.createElement)(cu,{tagName:"p",value:v,onChange:function(e){return r({subtitle:e})},placeholder:su("Subtitle..","_svbk"),className:"wp-block-svbk-hero__subtitle"}),Object(M.createElement)(cu,{tagName:"p",value:f,onChange:function(e){return r({text:e})},placeholder:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. De ingenio eius in his disputationibus, non de moribus quaeritur.",className:"wp-block-svbk-hero__text"}),Object(M.createElement)(cu,{placeholder:su("Primary button text…"),value:_,onChange:function(e){return r({primaryButtonText:e})},formattingControls:["bold","italic","strikethrough"],className:"wp-block-svbk-hero__link block-library-button"}),i&&Object(M.createElement)("form",{className:"block-library-button__inline-link",onSubmit:function(e){return e.preventDefault()}},Object(M.createElement)(hu,{icon:"admin-links"}),Object(M.createElement)(uu,{value:w,onChange:function(e){return r({primaryButtonUrl:e})}}),Object(M.createElement)(bu,{icon:"editor-break",label:su("Apply"),type:"submit"})),Object(M.createElement)(cu,{placeholder:su("Secondary button text…"),value:E,onChange:function(e){return r({secondaryButtonText:e})},formattingControls:["bold","italic","strikethrough"],className:"wp-block-svbk-hero__link block-library-button"}),i&&Object(M.createElement)("form",{className:"block-library-button__inline-link",onSubmit:function(e){return e.preventDefault()}},Object(M.createElement)(hu,{icon:"admin-links"}),Object(M.createElement)(uu,{value:C,onChange:function(e){return r({secondaryButtonUrl:e})}}),Object(M.createElement)(bu,{icon:"editor-break",label:su("Apply"),type:"submit"})),Object(M.createElement)(cu,{tagName:"div",value:k,onChange:function(e){return r({footer:e})},placeholder:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. De ingenio eius in his disputationibus, non de moribus quaeritur.",className:"wp-block-svbk-hero__footer"}))),Object(M.createElement)(mu,null,Object(M.createElement)(Br,{minLevel:1,maxLevel:3,selectedLevel:g,onChange:function(e){r({titleLevel:e})}}),Object(M.createElement)(fu,{controls:j})),Object(M.createElement)(pu,null,Object(M.createElement)(gu,{title:su("Spacing")},Object(M.createElement)(vu,{label:su("Bottom padding","_svbk"),help:x?"The block has some extra bottom padding (needed by offset bullets)":"The block has a standard bottom padding",checked:x,onChange:function(e){return r({bottomPadded:Boolean(e)})}})),Object(M.createElement)(gu,{title:su("Background Settings")},Object(M.createElement)(vu,{label:su("Use custom image when stacked","_svbk"),checked:this.state.customStackedImage,onChange:function(e){t.setState({customStackedImage:Boolean(e)})},help:su("Choose another image when the image is above the text","_svbk")}),this.state.customStackedImage&&Object(M.createElement)(tu,null,Object(M.createElement)("label",{className:"components-base-control__label"},"Immagine sopra-sotto"),Object(M.createElement)(kt,{setAttributes:function(e){var t=au(ru(e,["id","url","size"]),(function(e,t){return"pictureStacked"+iu(t)}));r(t)},url:u,id:p,size:m,inInspector:!0})))))}}]),t}(nu),yu=wp.i18n.__,wu=wp.blockEditor.RichText,_u="svbk/hero",Cu={title:yu("Hero","_svbk"),icon:"welcome-view-site",category:"common",keywords:[yu("hero"),yu("above"),yu("intro")],styles:[{name:"default",label:yu("Default"),isDefault:!0},{name:"content-background",label:yu("Content with Background")},{name:"content-card",label:yu("Content within a Card")}],attributes:{pictureUrl:{type:"string",source:"attribute",attribute:"src",selector:".wp-block-svbk-hero__picture img"},pictureId:{type:"number"},pictureSize:{type:"string"},pictureStackedUrl:{type:"string",source:"attribute",attribute:"srcset",selector:".wp-block-svbk-hero__picture source"},pictureStackedId:{type:"number"},pictureStackedSize:{type:"string"},pictureAlt:{type:"string",source:"attribute",attribute:"alt",selector:".wp-block-svbk-hero__picture img"},pretitle:{type:"string",source:"html",selector:".wp-block-svbk-hero__pretitle"},title:{type:"string",source:"html",selector:".wp-block-svbk-hero__title"},titleLevel:{type:"number",default:1},subtitle:{type:"string",source:"html",selector:".wp-block-svbk-hero__subtitle"},text:{type:"string",source:"html",selector:".wp-block-svbk-hero__text"},primaryButtonUrl:{type:"string",source:"attribute",attribute:"href",selector:".wp-block-svbk-hero__button--primary a"},primaryButtonText:{type:"string",source:"text",selector:".wp-block-svbk-hero__button--primary a"},secondaryButtonUrl:{type:"string",source:"attribute",attribute:"href",selector:".wp-block-svbk-hero__button--secondary a"},secondaryButtonText:{type:"string",source:"text",selector:".wp-block-svbk-hero__button--secondary a"},footer:{type:"string",source:"html",selector:".wp-block-svbk-hero__footer"},align:{type:"string"},bottomPadded:{type:"boolean",default:!1}},edit:ku,save:function(e){var t,n=e.attributes,o=n.pictureUrl,r=n.pictureId,a=n.pictureStackedUrl,i=(n.pictureStackedId,n.pictureAlt),s=n.pretitle,l=n.title,c=n.titleLevel,u=n.subtitle,p=n.text,m=n.align,d=n.primaryButtonUrl,h=n.primaryButtonText,b=n.secondaryButtonUrl,g=n.secondaryButtonText,v=n.footer,f=n.bottomPadded,k=ae()((t={},oe()(t,"has-align-".concat(m),m),oe()(t,"has-bottom-padding",f),t)),y=c?"h"+c:"h1";return Object(M.createElement)("div",{className:k,style:{}},o&&Object(M.createElement)("picture",{className:"wp-block-svbk-hero__picture"},a&&Object(M.createElement)("source",{media:"(max-width: 465px)",srcSet:a}),Object(M.createElement)("img",{src:o,alt:i,className:r?"wp-image-".concat(r):null})),Object(M.createElement)("div",{className:"wp-block-svbk-hero__content"},s&&Object(M.createElement)(wu.Content,{tagName:"div",className:"wp-block-svbk-hero__pretitle",value:s}),l&&Object(M.createElement)(wu.Content,{tagName:y,className:"wp-block-svbk-hero__title",value:l}),u&&Object(M.createElement)(wu.Content,{tagName:"div",className:"wp-block-svbk-hero__subtitle",value:u}),p&&Object(M.createElement)(wu.Content,{tagName:"div",className:"wp-block-svbk-hero__text",value:p}),h&&d&&Object(M.createElement)("div",{className:"wp-block-svbk-hero__button wp-block-svbk-hero__button--primary wp-block-button "},Object(M.createElement)("a",{className:"wp-block-svbk-hero__link",href:d},h)),g&&b&&Object(M.createElement)("div",{className:"wp-block-svbk-hero__button wp-block-svbk-hero__button--secondary wp-block-button "},Object(M.createElement)("a",{className:"wp-block-svbk-hero__link",href:b},g)),v&&Object(M.createElement)(wu.Content,{tagName:"div",className:"wp-block-svbk-hero__footer",value:v})))}},Eu=wp.element,xu=Eu.Fragment,Ou=Eu.Component,ju=lodash,Su=ju.pick,Nu=ju.mapKeys,Mu=ju.capitalize,Lu=wp.i18n.__,Pu=wp.blockEditor,Tu=Pu.RichText,Iu=Pu.PlainText,Bu=Pu.InspectorControls,Du=wp.components,zu=Du.PanelBody,Au=Du.TextControl,Ru=function(e){function t(){return Pe()(this,t),De()(this,Ae()(t).apply(this,arguments))}return Ue()(t,e),Ie()(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.setAttributes,o=e.className,r=e.isSelected,a=t.pictureUrl,i=t.pictureAlt,s=t.pictureId,l=t.pictureSize,c=t.title,u=t.author,p=t.meta,m=t.url,d=ae()(o,{"is-selected":r});return Object(M.createElement)(xu,null,Object(M.createElement)("div",{className:d},Object(M.createElement)(kt,{setAttributes:function(e){var t=Nu(Su(e,["id","url","alt","size"]),(function(e,t){return"picture"+Mu(t)}));n(t)},url:a,id:s,alt:i,size:l,isMain:!0}),Object(M.createElement)("div",{className:"wp-block-svbk-publication__content"},Object(M.createElement)(Iu,{value:u,onChange:function(e){return n({author:e})},placeholder:Lu("Author Name..","_svbk"),className:"wp-block-svbk-publication__author"}),Object(M.createElement)(Tu,{tagName:"div",value:c,onChange:function(e){return n({title:e})},placeholder:Lu("This is my title..","_svbk"),className:"wp-block-svbk-publication__title"}),Object(M.createElement)(Tu,{tagName:"div",value:p,onChange:function(e){return n({meta:e})},placeholder:Lu("Publisher, Year, ..","_svbk"),className:"wp-block-svbk-publication__meta"}))),Object(M.createElement)(Bu,null,Object(M.createElement)(zu,{title:Lu("Publication Settings","_svbk")},Object(M.createElement)(Au,{label:"URL",value:m,onChange:function(e){return n({url:e})}}))))}}]),t}(Ou),Uu=wp.element.Fragment,Fu=wp.i18n.__,Wu=wp.blockEditor.RichText,Hu="svbk/publication",Vu={title:Fu("Publication","_svbk"),icon:"book-alt",category:"widgets",keywords:[Fu("book","_svbk"),Fu("publication","_svbk")],attributes:{pictureUrl:{type:"string",source:"attribute",attribute:"src",selector:".wp-block-svbk-publication__picture img"},pictureId:{type:"number"},pictureAlt:{type:"string",source:"attribute",attribute:"alt",selector:".wp-block-svbk-publication__picture img"},pictureSize:{type:"string"},author:{type:"string",source:"text",selector:".wp-block-svbk-publication__author"},title:{type:"string",source:"html",selector:".wp-block-svbk-publication__title"},meta:{type:"string",source:"html",selector:".wp-block-svbk-publication__meta"},url:{type:"string",source:"attribute",attribute:"href",selector:".wp-block-svbk-publication__link"}},edit:Ru,save:function(e){var t=e.attributes,n=t.pictureUrl,o=t.pictureAlt,r=t.pictureId,a=t.title,i=t.author,s=t.meta,l=t.url,c=Object(M.createElement)(Uu,null,n&&Object(M.createElement)("figure",{className:"wp-block-svbk-publication__picture"},Object(M.createElement)("img",{src:n,alt:o,className:r?"wp-image-".concat(r):null})),Object(M.createElement)("div",{className:"wp-block-svbk-publication__content"},i&&Object(M.createElement)("p",{className:"wp-block-svbk-publication__author"},i),Object(M.createElement)(Wu.Content,{tagName:"div",className:"wp-block-svbk-publication__title",value:a}),s&&Object(M.createElement)(Wu.Content,{tagName:"p",className:"wp-block-svbk-publication__meta",value:s})));return Object(M.createElement)("aside",null,l?Object(M.createElement)("a",{href:l,rel:"external noopener noreferrer",target:"_blank",className:"wp-block-svbk-publication__link"},c):c)}},Zu=wp.element,qu=Zu.Fragment,Gu=Zu.Component,Ku=wp.i18n.__,$u=wp.blockEditor,Yu=$u.InspectorControls,Ju=$u.PanelColorSettings,Qu=$u.withColors,Xu=$u.InnerBlocks,ep=$u.AlignmentToolbar,tp=$u.BlockControls,np=wp.components,op=np.PanelBody,rp=np.ToggleControl,ap=np.RangeControl,ip=np.SelectControl,sp=wp.compose.compose,lp=["svbk/testimonial","svbk/bullet","svbk/profile","svbk/card","svbk/stats","core/group","core/image"],cp=function(e){function t(){return Pe()(this,t),De()(this,Ae()(t).apply(this,arguments))}return Ue()(t,e),Ie()(t,[{key:"render",value:function(){var e,t=this.props,n=t.attributes,o=t.setAttributes,r=t.className,a=t.isSelected,i=t.backgroundColor,s=t.setBackgroundColor,l=n.columns,c=n.columnsMobile,u=n.equalHeight,p=n.align,m=ae()(r,"has-".concat(l,"-columns has-").concat(c,"-columns-mobile"),(e={"is-selected":a},oe()(e,i.class,i.class),oe()(e,"has-equal-cell-height",u),e)),d={backgroundColor:i.color};return Object(M.createElement)(qu,null,Object(M.createElement)("div",{className:m,style:d},Object(M.createElement)(Xu,{templateLock:!1,allowedBlocks:lp})),Object(M.createElement)(Yu,null,Object(M.createElement)(op,{title:Ku("Grid Settings","_svbk")},Object(M.createElement)(ap,{label:Ku("Columns","_svbk"),value:l,onChange:function(e){return o({columns:e})},min:2,max:6}),Object(M.createElement)(ap,{label:Ku("Mobile Columns","_svbk"),value:c,onChange:function(e){return o({columnsMobile:e})},min:1,max:3}),Object(M.createElement)(rp,{label:Ku("Equal Height","_svbk"),help:u?"All cells have the same height":"Cell inherit their height from the content",checked:u,onChange:function(e){return o({equalHeight:Boolean(e)})}}),Object(M.createElement)(ip,{label:Ku("Columns Alignment"),value:p,options:[{label:Ku("Center"),value:"center"},{label:Ku("Left"),value:"left"},{label:Ku("Right"),value:"right"}],onChange:function(e){return o({align:e})}})),Object(M.createElement)(Ju,{title:Ku("Color Settings"),initialOpen:!1,colorSettings:[{value:i.color,onChange:s,label:Ku("Background Color")}]})),Object(M.createElement)(tp,null,Object(M.createElement)(ep,{value:p,onChange:function(e){o({align:e})}})))}}]),t}(Gu),up=sp([Qu("backgroundColor")])(cp),pp=(wp.i18n.__,wp.blockEditor),mp=pp.getColorClassName,dp=pp.InnerBlocks,hp=[{attributes:{columns:{type:"number",default:3},equalHeight:{type:"boolean",default:!0},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},align:{type:"string"}},supports:{html:!1},save:function(e){var t,n=e.attributes,o=n.columns,r=n.equalHeight,a=n.backgroundColor,i=n.customBackgroundColor,s=n.align,l=mp("background-color",a),c=ae()("has-".concat(o,"-columns"),(t={"has-background":a||i},oe()(t,l,l),oe()(t,"has-equal-cell-height",r),oe()(t,"has-align-".concat(s),s),t)),u={backgroundColor:l?void 0:i};return Object(M.createElement)("div",{className:c,style:u},Object(M.createElement)(dp.Content,null))}}],bp=wp.i18n.__,gp=wp.blockEditor,vp=gp.getColorClassName,fp=gp.InnerBlocks,kp=wp.blocks.createBlock,yp="svbk/grid",_p={title:bp("Grid Layout","_svbk"),icon:"grid-view",category:"layout",keywords:[bp("grid"),bp("flex"),bp("table")],attributes:{columns:{type:"number",default:3},columnsMobile:{type:"number",default:1},equalHeight:{type:"boolean",default:!0},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},align:{type:"string"}},deprecated:hp,edit:up,transforms:{from:[{type:"block",blocks:["core/group"],transform:function(e,t){return kp("svbk/grid",e,t)}}]},save:function(e){var t,n=e.attributes,o=n.columns,r=n.columnsMobile,a=n.equalHeight,i=n.backgroundColor,s=n.customBackgroundColor,l=n.align,c=vp("background-color",i),u=ae()("has-".concat(o,"-columns has-").concat(r,"-columns-mobile"),(t={"has-background":i||s},oe()(t,c,c),oe()(t,"has-equal-cell-height",a),oe()(t,"has-align-".concat(l),l),t)),p={backgroundColor:c?void 0:s};return Object(M.createElement)("div",{className:u,style:p},Object(M.createElement)(fp.Content,null))}},Cp=wp.element,Ep=Cp.Fragment,xp=Cp.Component,Op=wp.i18n.__,jp=wp.blockEditor,Sp=jp.RichText,Np=jp.BlockControls,Mp=jp.AlignmentToolbar,Lp=jp.FontSizePicker,Pp=jp.withFontSizes,Tp=jp.InspectorControls,Ip=wp.components.PanelBody,Bp=wp.compose.compose,Dp=function(e){function t(){return Pe()(this,t),De()(this,Ae()(t).apply(this,arguments))}return Ue()(t,e),Ie()(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.setAttributes,o=e.className,r=e.fontSize,a=e.setFontSize,i=t.align,s=t.content,l=(ae()(o,oe()({},r.class,r.class)),{textAlign:i,fontSize:r.size?r.size+"px":void 0});return Object(M.createElement)(Ep,null,Object(M.createElement)("div",{className:"wp-block-svbk-icon-paragraph"},Object(M.createElement)(kr,Yt()({},this.props,{className:"wp-block-svbk-icon-paragraph__icon"})),Object(M.createElement)(Sp,{tagName:"div",value:s,style:l,onChange:function(e){return n({content:e})},placeholder:Op("Content..","_svbk"),className:"wp-block-svbk-icon-paragraph__content"}),Object(M.createElement)(Np,null,Object(M.createElement)(Mp,{value:i,onChange:function(e){n({align:e})}})),Object(M.createElement)(Tp,null,Object(M.createElement)(Ip,{title:Op("Text Settings"),className:"blocks-font-size"},Object(M.createElement)(Lp,{value:r.size,onChange:a})))))}}]),t}(xp),zp=Bp([Pp("fontSize")])(Dp),Ap=wp.i18n.__,Rp=wp.blockEditor,Up=Rp.RichText,Fp=Rp.getFontSizeClass,Wp=wp.element.RawHTML,Hp="svbk/icon-paragraph",Vp={title:Ap("Icon Paragraph","_svbk"),icon:"analytics",category:"common",keywords:[Ap("contact"),Ap("paragraph")],attributes:{icon:{type:"string",source:"html",selector:".wp-block-svbk-icon-paragraph__icon"},content:{type:"string",source:"html",selector:".wp-block-svbk-icon-paragraph__content"},align:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"}},edit:zp,save:function(e){var t=e.attributes,n=t.icon,o=t.content,r=t.align,a=t.fontSize,i=t.customFontSize,s=Fp(a),l={textAlign:r,fontSize:s?void 0:i};return Object(M.createElement)("div",{className:ae()("wp-block-svbk-icon-paragraph",oe()({},s,s)),style:l},n&&Object(M.createElement)("div",{className:"wp-block-svbk-icon-paragraph__icon"},Object(M.createElement)(Wp,null,n)),o&&Object(M.createElement)(Up.Content,{tagName:"p",className:"wp-block-svbk-icon-paragraph__content",value:o}))}},Zp=[{formatter:"Y",className:"year",name:"Years left"},{formatter:"m",className:"month",name:"Months left"},{formatter:"n",className:"monthdays",name:"Days left until the next complete month"},{formatter:"w",className:"weeks",name:"Weeks left"},{formatter:"W",className:"monthweeks",name:"Weeks left until the next complete month"},{formatter:"d",className:"days",name:"Days left (taking away weeks)"},{formatter:"H",className:"hours",name:"Hours left"},{formatter:"M",className:"minutes",name:"Minutes left"},{formatter:"S",className:"seconds",name:"Seconds left"},{formatter:"D",className:"totdays",name:"Total count of days till the end"},{formatter:"I",className:"tothours",name:"Total count of hours thill the end"},{formatter:"N",className:"totminutes",name:"Total count of minutes till the end"},{formatter:"T",className:"totseconds",name:"Total count of seconds till the end"}],qp=lodash.cloneDeepWith(Zp,(function(e,t,n){return"formatter"==t?"-"+e:"name"==t?e+" (blank-padded)":void 0})),Gp=lodash.concat(Zp,qp),Kp=n(15),$p=n.n(Kp),Yp=wp.i18n.__,Jp=wp.element.Fragment,Qp=wp.components,Xp=Qp.PanelBody,em=Qp.ToggleControl,tm=Qp.DateTimePicker,nm=Qp.Dashicon,om=wp.blockEditor,rm=om.InspectorControls,am=om.RichText,im={expires:{type:"string",source:"attribute",selector:"div.countdown",attribute:"data-expires"},persists:{type:"string",selector:"div",attribute:"data-persist"},format:{type:"string",source:"html",selector:"div",default:Yp("%D days %H hours %M min %S sec","_svbk")}},sm=function(e){return Object(M.createElement)("span",{className:"countdown__segment countdown__segment--"+e.className},Object(M.createElement)("em",{className:"countdown__digit"},"%",e.formatter))},lm=[{name:"jquery_countdown",triggerPrefix:"%",options:Gp,getOptionLabel:function(e){return Object(M.createElement)("span",null,Object(M.createElement)("code",null,"%",e.formatter)," ",e.name)},getOptionKeywords:function(e){return[e.formatter]},isOptionDisabled:function(e){return"Grapes"===e.name},getOptionCompletion:sm}],cm=lodash.keyBy(Gp,"formatter"),um=/%(-?\w+)/gi,pm=function(e){return e.replace(um,(function(e,t){var n=cm[t];if(void 0!==n)try{return $p.a.renderToStaticMarkup(sm(n))}catch(e){console.error(e)}return e}))};im.format.default=pm(im.format.default);var mm="svbk/countdown",dm={title:Yp("Countdown","_svbk"),description:Yp("Countdown","_svbk"),icon:"backup",category:"widgets",keywords:[Yp("countdown","_svbk"),Yp("timer","_svbk")],supports:{html:!0},attributes:im,transforms:{from:[{type:"shortcode",tag:"countdown",attributes:{expires:{type:"string",shortcode:function(e){var t=e.named.date;return new Date(void 0===t?"":t).toISOString()}},format:{type:"string",shortcode:function(e){var t=e.named.format,n=void 0===t?im.format.default:t;return encodeURIComponent(n).includes("<")?n:pm(n)}}}}]},edit:function(e){var t=e.attributes,n=e.setAttributes,o=e.className,r=t.expires,a=t.persists,i=t.format,s=new Date(r);return r?Object(M.createElement)(Jp,null,Object(M.createElement)(rm,null,Object(M.createElement)(Xp,{title:Yp("Settings","_svbk")},Object(M.createElement)(em,{label:Yp("Persist","_svbk"),checked:a,onChange:function(e){n({persists:Boolean(e)})},help:Yp("Keep the countdown remaining time on page refresh","_svbk")}),Object(M.createElement)(tm,{currentDate:r,onChange:function(e){n({expires:e})}}))),Object(M.createElement)("div",{className:o},Object(M.createElement)(nm,{icon:"backup"}),Object(M.createElement)(am,{value:i||t.format.default,onChange:function(e){n({format:e})},autocompleters:lm}),Object(M.createElement)("div",{className:"countdown__expires"},"Countdown expires at: "+s.toLocaleDateString()+" - "+s.toLocaleTimeString()))):Object(M.createElement)(Jp,null,Object(M.createElement)("div",null,Yp("Please choose an expire date","_svbk")),Object(M.createElement)(tm,{currentDate:r,onChange:function(e){n({expires:e})}}))},save:function(e){var t=e.attributes,n=t.expires,o=t.format,r=t.persist;return Object(M.createElement)(am.Content,{className:"countdown","data-expires":n,"data-persist":r,tagName:"div",value:o})}},hm=wp.element,bm=hm.Fragment,gm=hm.Component,vm=wp.i18n.__,fm=wp.blockEditor,km=fm.RichText,ym=fm.InspectorControls,wm=fm.BlockControls,_m=fm.ContrastChecker,Cm=fm.PanelColorSettings,Em=fm.withColors,xm=fm.InnerBlocks,Om=wp.compose.compose,jm=["core/image"],Sm=[["core/image",{}],["core/image",{}]],Nm=function(e){function t(){return Pe()(this,t),De()(this,Ae()(t).apply(this,arguments))}return Ue()(t,e),Ie()(t,[{key:"render",value:function(){var e,t=this.props,n=t.attributes,o=t.setAttributes,r=t.className,a=t.isSelected,i=t.backgroundColor,s=t.textColor,l=t.ribbonColor,c=t.setBackgroundColor,u=t.setTextColor,p=t.setRibbonColor,m=n.title,d=n.titleLevel,h=ae()(r,(e={"is-selected":a},oe()(e,i.class,i.class),oe()(e,s.class,s.class),oe()(e,l.class,l.class),e)),b=d?"h"+d:"h2";return Object(M.createElement)(bm,null,Object(M.createElement)("div",{className:h},Object(M.createElement)(km,{tagName:b,value:m,onChange:function(e){return o({ribbon:e})},placeholder:vm("Ribbon content...","_svbk"),className:"wp-block-svbk-trust__ribbon"}),Object(M.createElement)(xm,{templateLock:!1,allowedBlocks:jm,template:Sm})),Object(M.createElement)(wm,null,Object(M.createElement)(Br,{minLevel:2,maxLevel:5,selectedLevel:d,onChange:function(e){o({titleLevel:e})}})),Object(M.createElement)(ym,null,Object(M.createElement)(Cm,{title:vm("Color Settings"),initialOpen:!1,disableCustomColors:!0,colorSettings:[{value:i.color,onChange:c,label:vm("Background Color")},{value:l.color,onChange:p,label:vm("Ribbon Color")},{value:s.color,onChange:u,label:vm("Text Color")}]}),Object(M.createElement)(_m,{ribbonColor:l.color,backgroundColor:i.color}),Object(M.createElement)(_m,{ribbonColor:l.color,textColor:s.color})))}}]),t}(gm),Mm=Om([Em("backgroundColor",{textColor:"color"},"ribbonColor")])(Nm),Lm=wp.i18n.__,Pm=wp.blockEditor,Tm=Pm.RichText,Im=Pm.getColorClassName,Bm=Pm.InnerBlocks,Dm="svbk/trust",zm={title:Lm("Autorevolezza","_svbk"),icon:"buddicons-buddypress-logo",category:"common",keywords:[Lm("trust","_svbk"),Lm("autorevolezza","_svbk"),Lm("logo","_svbk")],styles:[],attributes:{ribbon:{type:"string",source:"html",selector:".wp-block-svbk-trust__ribbon"},titleLevel:{type:"number",default:2},backgroundColor:{type:"string"},textColor:{type:"string"},ribbonColor:{type:"string"}},edit:Mm,save:function(e){var t,n,o=e.attributes,r=o.ribbon,a=o.titleLevel,i=o.backgroundColor,s=o.textColor,l=o.ribbonColor,c=a?"h"+a:"h2",u=Im("background-color",i),p=Im("color",s),m=Im("ribbon-color",l),d=ae()((t={"has-background":i},oe()(t,u,u),oe()(t,"has-ribbon",r),t)),h=ae()((n={"wp-block-svbk-trust__ribbon":!0,"has-text-color":s,"has-ribbon-color":s},oe()(n,p,p),oe()(n,m,m),n));return Object(M.createElement)("div",{className:d},r&&Object(M.createElement)(Tm.Content,{tagName:c,className:h,value:r}),Object(M.createElement)("div",{className:"wp-block-svbk-trust__content"},Object(M.createElement)(Bm.Content,null)))}},Am=wp.blocks.registerBlockType;wp.hooks.addFilter("blocks.registerBlockType","svbk/appearance-controls",Me,100),[o,a,r,s,i,l,c,p,u,m,d,h,b,g,v,f,k,y,w,_,C,E,x,O,j].forEach((function(e){if(e){var t=e.name,n=e.settings;Am(t,n)}}))}]);