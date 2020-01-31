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
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom-server.browser.development.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.10.2
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var React = __webpack_require__(/*! react */ "react");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be converted to ReactError during
// build, and in production they will be minified.

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be converted to ReactError during
// build, and in production they will be minified.
function ReactError(error) {
  error.name = 'Invariant Violation';
  return error;
}

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.10.2';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }

    if (condition) {
      return;
    }

    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610

      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?


var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;

var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; // Prevent newer renderers from RTE when used with older react package versions.
// Current owner and dispatcher used to share the same ref,
// but PR #14548 split them out to better support the react-debug-tools package.

if (!ReactSharedInternals.hasOwnProperty('ReactCurrentDispatcher')) {
  ReactSharedInternals.ReactCurrentDispatcher = {
    current: null
  };
}

if (!ReactSharedInternals.hasOwnProperty('ReactCurrentBatchConfig')) {
  ReactSharedInternals.ReactCurrentBatchConfig = {
    suspense: null
  };
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }

    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum(); // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(void 0, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}
function initializeLazyComponentType(lazyComponent) {
  if (lazyComponent._status === Uninitialized) {
    lazyComponent._status = Pending;
    var ctor = lazyComponent._ctor;
    var thenable = ctor();
    lazyComponent._result = thenable;
    thenable.then(function (moduleObject) {
      if (lazyComponent._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            warning$1(false, 'lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + "const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
          }
        }

        lazyComponent._status = Resolved;
        lazyComponent._result = defaultExport;
      }
    }, function (error) {
      if (lazyComponent._status === Pending) {
        lazyComponent._status = Rejected;
        lazyComponent._result = error;
      }
    });
  }
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:

 // In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:

 // To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.

 // Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:

var warnAboutDeprecatedLifecycles = true; // Gather advanced timing metrics for Profiler subtrees.

 // Trace which interactions trigger each commit.

 // Only used in www builds.

var enableSuspenseServerRenderer = false; // TODO: true? Here it might just be false.

 // Only used in www builds.

 // Only used in www builds.

 // Disable javascript: URL strings in href for XSS protection.

var disableJavaScriptURLs = false; // React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties

 // These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.


 // See https://github.com/react-native-community/discussions-and-proposals/issues/72 for more information
// This is a flag so we can fix warnings in RN core before turning it on

 // Experimental React Flare event system and event components support.

var enableFlareAPI = false; // Experimental Host Component support.

var enableFundamentalAPI = false; // Experimental Scope support.

var enableScopeAPI = false; // New API for JSX transforms to target - https://github.com/reactjs/rfcs/pull/107

 // We will enforce mocking scheduler with scheduler/unstable_mock at some point. (v17?)
// Till then, we warn about the missing mock, but still fallback to a sync mode compatible version

 // For tests, we flush suspense fallbacks in an act scope;
// *except* in some of our own tests, where we test incremental loading states.

 // Changes priority of some events like mousemove to user-blocking priority,
// but without making them discrete. The flag exists in case it causes
// starvation problems.

 // Add a callback property to suspense to notify which promises are currently
// in the update queue. This allows reporting and tracing of what is causing
// the user to see a loading state.
// Also allows hydration callbacks to fire when a dehydrated boundary gets
// hydrated or deleted.

 // Part of the simplification of React.createElement so we can eventually move
// from React.createElement to React.jsx
// https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md



var disableLegacyContext = false;

var ReactDebugCurrentFrame$1;
var didWarnAboutInvalidateContextType;

{
  ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
  didWarnAboutInvalidateContextType = new Set();
}

var emptyObject = {};

{
  Object.freeze(emptyObject);
}

function maskContext(type, context) {
  var contextTypes = type.contextTypes;

  if (!contextTypes) {
    return emptyObject;
  }

  var maskedContext = {};

  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }

  return maskedContext;
}

function checkContextTypes(typeSpecs, values, location) {
  {
    checkPropTypes(typeSpecs, values, location, 'Component', ReactDebugCurrentFrame$1.getCurrentStack);
  }
}

function validateContextBounds(context, threadID) {
  // If we don't have enough slots in this context to store this threadID,
  // fill it in without leaving any holes to ensure that the VM optimizes
  // this as non-holey index properties.
  // (Note: If `react` package is < 16.6, _threadCount is undefined.)
  for (var i = context._threadCount | 0; i <= threadID; i++) {
    // We assume that this is the same as the defaultValue which might not be
    // true if we're rendering inside a secondary renderer but they are
    // secondary because these use cases are very rare.
    context[i] = context._currentValue2;
    context._threadCount = i + 1;
  }
}
function processContext(type, context, threadID, isClass) {
  if (isClass) {
    var contextType = type.contextType;

    {
      if ('contextType' in type) {
        var isValid = // Allow null for conditional declaration
        contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

        if (!isValid && !didWarnAboutInvalidateContextType.has(type)) {
          didWarnAboutInvalidateContextType.add(type);
          var addendum = '';

          if (contextType === undefined) {
            addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
          } else if (typeof contextType !== 'object') {
            addendum = ' However, it is set to a ' + typeof contextType + '.';
          } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
            addendum = ' Did you accidentally pass the Context.Provider instead?';
          } else if (contextType._context !== undefined) {
            // <Context.Consumer>
            addendum = ' Did you accidentally pass the Context.Consumer instead?';
          } else {
            addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
          }

          warningWithoutStack$1(false, '%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentName(type) || 'Component', addendum);
        }
      }
    }

    if (typeof contextType === 'object' && contextType !== null) {
      validateContextBounds(contextType, threadID);
      return contextType[threadID];
    }

    if (disableLegacyContext) {
      {
        if (type.contextTypes) {
          warningWithoutStack$1(false, '%s uses the legacy contextTypes API which is no longer supported. ' + 'Use React.createContext() with static contextType instead.', getComponentName(type) || 'Unknown');
        }
      }

      return emptyObject;
    } else {
      var maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, maskedContext, 'context');
        }
      }

      return maskedContext;
    }
  } else {
    if (disableLegacyContext) {
      {
        if (type.contextTypes) {
          warningWithoutStack$1(false, '%s uses the legacy contextTypes API which is no longer supported. ' + 'Use React.createContext() with React.useContext() instead.', getComponentName(type) || 'Unknown');
        }
      }

      return undefined;
    } else {
      var _maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, _maskedContext, 'context');
        }
      }

      return _maskedContext;
    }
  }
}

// Allocates a new index for each request. Tries to stay as compact as possible so that these
// indices can be used to reference a tightly packed array. As opposed to being used in a Map.
// The first allocated index is 1.
var nextAvailableThreadIDs = new Uint16Array(16);

for (var i = 0; i < 15; i++) {
  nextAvailableThreadIDs[i] = i + 1;
}

nextAvailableThreadIDs[15] = 0;

function growThreadCountAndReturnNextAvailable() {
  var oldArray = nextAvailableThreadIDs;
  var oldSize = oldArray.length;
  var newSize = oldSize * 2;

  (function () {
    if (!(newSize <= 0x10000)) {
      {
        throw ReactError(Error("Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic."));
      }
    }
  })();

  var newArray = new Uint16Array(newSize);
  newArray.set(oldArray);
  nextAvailableThreadIDs = newArray;
  nextAvailableThreadIDs[0] = oldSize + 1;

  for (var _i = oldSize; _i < newSize - 1; _i++) {
    nextAvailableThreadIDs[_i] = _i + 1;
  }

  nextAvailableThreadIDs[newSize - 1] = 0;
  return oldSize;
}

function allocThreadID() {
  var nextID = nextAvailableThreadIDs[0];

  if (nextID === 0) {
    return growThreadCountAndReturnNextAvailable();
  }

  nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
  return nextID;
}
function freeThreadID(id) {
  nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
  nextAvailableThreadIDs[0] = id;
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the whitelist are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
/* eslint-enable max-len */

var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";

var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty$1.call(validatedAttributeNameCache, attributeName)) {
    return true;
  }

  if (hasOwnProperty$1.call(illegalAttributeNameCache, attributeName)) {
    return false;
  }

  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }

  illegalAttributeNameCache[attributeName] = true;

  {
    warning$1(false, 'Invalid attribute name: `%s`', attributeName);
  }

  return false;
}
function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null) {
    return propertyInfo.type === RESERVED;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return true;
  }

  return false;
}
function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }

  switch (typeof value) {
    case 'function': // $FlowIssue symbol is perfectly valid here

    case 'symbol':
      // eslint-disable-line
      return true;

    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }

        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }

    default:
      return false;
  }
}
function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }

  if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
    return true;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (propertyInfo !== null) {
    switch (propertyInfo.type) {
      case BOOLEAN:
        return !value;

      case OVERLOADED_BOOLEAN:
        return value === false;

      case NUMERIC:
        return isNaN(value);

      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }

  return false;
}
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function (token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML whitelist.
// Some of these attributes can be hard to find. This list was created by
// scrapping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true);
});

var ReactDebugCurrentFrame$2 = null;

{
  ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;
} // A javascript: URL can contain leading C0 control or \u0020 SPACE,
// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space

/* eslint-disable max-len */


var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
var didWarn = false;

function sanitizeURL(url) {
  if (disableJavaScriptURLs) {
    (function () {
      if (!!isJavaScriptProtocol.test(url)) {
        {
          throw ReactError(Error("React has blocked a javascript: URL as a security precaution." + (ReactDebugCurrentFrame$2.getStackAddendum())));
        }
      }
    })();
  } else if ( true && !didWarn && isJavaScriptProtocol.test(url)) {
    didWarn = true;
    warning$1(false, 'A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
  }
}

// code copied and modified from escape-html

/**
 * Module variables.
 * @private
 */
var matchHtmlRegExp = /["'&<>]/;
/**
 * Escapes special characters and HTML entities in a given html string.
 *
 * @param  {string} string HTML string to escape for later insertion
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;

      case 38:
        // &
        escape = '&amp;';
        break;

      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'

        break;

      case 60:
        // <
        escape = '&lt;';
        break;

      case 62:
        // >
        escape = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
} // end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */


function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }

  return escapeHtml(text);
}

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */

function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextForBrowser(value) + '"';
}

/**
 * Operations for dealing with DOM properties.
 */

/**
 * Creates markup for the ID property.
 *
 * @param {string} id Unescaped ID.
 * @return {string} Markup string.
 */


function createMarkupForRoot() {
  return ROOT_ATTRIBUTE_NAME + '=""';
}
/**
 * Creates markup for a property.
 *
 * @param {string} name
 * @param {*} value
 * @return {?string} Markup string, or null if the property was invalid.
 */

function createMarkupForProperty(name, value) {
  var propertyInfo = getPropertyInfo(name);

  if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
    return '';
  }

  if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
    return '';
  }

  if (propertyInfo !== null) {
    var attributeName = propertyInfo.attributeName;
    var type = propertyInfo.type;

    if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
      return attributeName + '=""';
    } else {
      if (propertyInfo.sanitizeURL) {
        value = '' + value;
        sanitizeURL(value);
      }

      return attributeName + '=' + quoteAttributeValueForBrowser(value);
    }
  } else if (isAttributeNameSafe(name)) {
    return name + '=' + quoteAttributeValueForBrowser(value);
  }

  return '';
}
/**
 * Creates markup for a custom property.
 *
 * @param {string} name
 * @param {*} value
 * @return {string} Markup string, or empty string if the property was invalid.
 */

function createMarkupForCustomAttribute(name, value) {
  if (!isAttributeNameSafe(name) || value == null) {
    return '';
  }

  return name + '=' + quoteAttributeValueForBrowser(value);
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var is$1 = typeof Object.is === 'function' ? Object.is : is;

var currentlyRenderingComponent = null;
var firstWorkInProgressHook = null;
var workInProgressHook = null; // Whether the work-in-progress hook is a re-rendered hook

var isReRender = false; // Whether an update was scheduled during the currently executing render pass.

var didScheduleRenderPhaseUpdate = false; // Lazily created map of render-phase updates

var renderPhaseUpdates = null; // Counter to prevent infinite loops.

var numberOfReRenders = 0;
var RE_RENDER_LIMIT = 25;
var isInHookUserCodeInDev = false; // In DEV, this is the name of the currently executing primitive hook

var currentHookNameInDev;

function resolveCurrentlyRenderingComponent() {
  (function () {
    if (!(currentlyRenderingComponent !== null)) {
      {
        throw ReactError(Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem."));
      }
    }
  })();

  {
    !!isInHookUserCodeInDev ? warning$1(false, 'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://fb.me/rules-of-hooks') : void 0;
  }

  return currentlyRenderingComponent;
}

function areHookInputsEqual(nextDeps, prevDeps) {
  if (prevDeps === null) {
    {
      warning$1(false, '%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
    }

    return false;
  }

  {
    // Don't bother comparing lengths in prod because these arrays should be
    // passed inline.
    if (nextDeps.length !== prevDeps.length) {
      warning$1(false, 'The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + nextDeps.join(', ') + "]", "[" + prevDeps.join(', ') + "]");
    }
  }

  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (is$1(nextDeps[i], prevDeps[i])) {
      continue;
    }

    return false;
  }

  return true;
}

function createHook() {
  if (numberOfReRenders > 0) {
    (function () {
      {
        {
          throw ReactError(Error("Rendered more hooks than during the previous render"));
        }
      }
    })();
  }

  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}

function createWorkInProgressHook() {
  if (workInProgressHook === null) {
    // This is the first hook in the list
    if (firstWorkInProgressHook === null) {
      isReRender = false;
      firstWorkInProgressHook = workInProgressHook = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = firstWorkInProgressHook;
    }
  } else {
    if (workInProgressHook.next === null) {
      isReRender = false; // Append to the end of the list

      workInProgressHook = workInProgressHook.next = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = workInProgressHook.next;
    }
  }

  return workInProgressHook;
}

function prepareToUseHooks(componentIdentity) {
  currentlyRenderingComponent = componentIdentity;

  {
    isInHookUserCodeInDev = false;
  } // The following should have already been reset
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;

}
function finishHooks(Component, props, children, refOrContext) {
  // This must be called after every function component to prevent hooks from
  // being used in classes.
  while (didScheduleRenderPhaseUpdate) {
    // Updates were scheduled during the render phase. They are stored in
    // the `renderPhaseUpdates` map. Call the component again, reusing the
    // work-in-progress hooks and applying the additional updates on top. Keep
    // restarting until no more updates are scheduled.
    didScheduleRenderPhaseUpdate = false;
    numberOfReRenders += 1; // Start over from the beginning of the list

    workInProgressHook = null;
    children = Component(props, refOrContext);
  }

  currentlyRenderingComponent = null;
  firstWorkInProgressHook = null;
  numberOfReRenders = 0;
  renderPhaseUpdates = null;
  workInProgressHook = null;

  {
    isInHookUserCodeInDev = false;
  } // These were reset above
  // currentlyRenderingComponent = null;
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;


  return children;
}

function readContext(context, observedBits) {
  var threadID = currentThreadID;
  validateContextBounds(context, threadID);

  {
    !!isInHookUserCodeInDev ? warning$1(false, 'Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().') : void 0;
  }

  return context[threadID];
}

function useContext(context, observedBits) {
  {
    currentHookNameInDev = 'useContext';
  }

  resolveCurrentlyRenderingComponent();
  var threadID = currentThreadID;
  validateContextBounds(context, threadID);
  return context[threadID];
}

function basicStateReducer(state, action) {
  return typeof action === 'function' ? action(state) : action;
}

function useState(initialState) {
  {
    currentHookNameInDev = 'useState';
  }

  return useReducer(basicStateReducer, // useReducer has a special case to support lazy useState initializers
  initialState);
}
function useReducer(reducer, initialArg, init) {
  {
    if (reducer !== basicStateReducer) {
      currentHookNameInDev = 'useReducer';
    }
  }

  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();

  if (isReRender) {
    // This is a re-render. Apply the new render phase updates to the previous
    // current hook.
    var queue = workInProgressHook.queue;
    var dispatch = queue.dispatch;

    if (renderPhaseUpdates !== null) {
      // Render phase updates are stored in a map of queue -> linked list
      var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

      if (firstRenderPhaseUpdate !== undefined) {
        renderPhaseUpdates.delete(queue);
        var newState = workInProgressHook.memoizedState;
        var update = firstRenderPhaseUpdate;

        do {
          // Process this render phase update. We don't have to check the
          // priority because it will always be the same as the current
          // render's.
          var action = update.action;

          {
            isInHookUserCodeInDev = true;
          }

          newState = reducer(newState, action);

          {
            isInHookUserCodeInDev = false;
          }

          update = update.next;
        } while (update !== null);

        workInProgressHook.memoizedState = newState;
        return [newState, dispatch];
      }
    }

    return [workInProgressHook.memoizedState, dispatch];
  } else {
    {
      isInHookUserCodeInDev = true;
    }

    var initialState;

    if (reducer === basicStateReducer) {
      // Special case for `useState`.
      initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
    } else {
      initialState = init !== undefined ? init(initialArg) : initialArg;
    }

    {
      isInHookUserCodeInDev = false;
    }

    workInProgressHook.memoizedState = initialState;

    var _queue = workInProgressHook.queue = {
      last: null,
      dispatch: null
    };

    var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);

    return [workInProgressHook.memoizedState, _dispatch];
  }
}

function useMemo(nextCreate, deps) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var nextDeps = deps === undefined ? null : deps;

  if (workInProgressHook !== null) {
    var prevState = workInProgressHook.memoizedState;

    if (prevState !== null) {
      if (nextDeps !== null) {
        var prevDeps = prevState[1];

        if (areHookInputsEqual(nextDeps, prevDeps)) {
          return prevState[0];
        }
      }
    }
  }

  {
    isInHookUserCodeInDev = true;
  }

  var nextValue = nextCreate();

  {
    isInHookUserCodeInDev = false;
  }

  workInProgressHook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

function useRef(initialValue) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var previousRef = workInProgressHook.memoizedState;

  if (previousRef === null) {
    var ref = {
      current: initialValue
    };

    {
      Object.seal(ref);
    }

    workInProgressHook.memoizedState = ref;
    return ref;
  } else {
    return previousRef;
  }
}

function useLayoutEffect(create, inputs) {
  {
    currentHookNameInDev = 'useLayoutEffect';
  }

  warning$1(false, 'useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://fb.me/react-uselayouteffect-ssr for common fixes.');
}

function dispatchAction(componentIdentity, queue, action) {
  (function () {
    if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
      {
        throw ReactError(Error("Too many re-renders. React limits the number of renders to prevent an infinite loop."));
      }
    }
  })();

  if (componentIdentity === currentlyRenderingComponent) {
    // This is a render phase update. Stash it in a lazily-created map of
    // queue -> linked list of updates. After this render pass, we'll restart
    // and apply the stashed updates on top of the work-in-progress hook.
    didScheduleRenderPhaseUpdate = true;
    var update = {
      action: action,
      next: null
    };

    if (renderPhaseUpdates === null) {
      renderPhaseUpdates = new Map();
    }

    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

    if (firstRenderPhaseUpdate === undefined) {
      renderPhaseUpdates.set(queue, update);
    } else {
      // Append the update to the end of the list.
      var lastRenderPhaseUpdate = firstRenderPhaseUpdate;

      while (lastRenderPhaseUpdate.next !== null) {
        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
      }

      lastRenderPhaseUpdate.next = update;
    }
  } else {// This means an update has happened after the function component has
    // returned. On the server this is a no-op. In React Fiber, the update
    // would be scheduled for a future render.
  }
}

function useCallback(callback, deps) {
  // Callbacks are passed as they are in the server environment.
  return callback;
}

function useResponder(responder, props) {
  return {
    props: props,
    responder: responder
  };
}

function noop() {}

var currentThreadID = 0;
function setCurrentThreadID(threadID) {
  currentThreadID = threadID;
}
var Dispatcher = {
  readContext: readContext,
  useContext: useContext,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  useLayoutEffect: useLayoutEffect,
  useCallback: useCallback,
  // useImperativeHandle is not run in the server environment
  useImperativeHandle: noop,
  // Effects are not run in the server environment.
  useEffect: noop,
  // Debugging effect
  useDebugValue: noop,
  useResponder: useResponder
};

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
var Namespaces = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
}; // Assumes there is no parent namespace.

function getIntrinsicNamespace(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;

    case 'math':
      return MATH_NAMESPACE;

    default:
      return HTML_NAMESPACE;
  }
}
function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }

  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  } // By default, pass namespace below.


  return parentNamespace;
}

var ReactDebugCurrentFrame$3 = null;
var ReactControlledValuePropTypes = {
  checkPropTypes: null
};

{
  ReactDebugCurrentFrame$3 = ReactSharedInternals.ReactDebugCurrentFrame;
  var hasReadOnlyValue = {
    button: true,
    checkbox: true,
    image: true,
    hidden: true,
    radio: true,
    reset: true,
    submit: true
  };
  var propTypes = {
    value: function (props, propName, componentName) {
      if (hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled || props[propName] == null || enableFlareAPI && props.listeners) {
        return null;
      }

      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    checked: function (props, propName, componentName) {
      if (props.onChange || props.readOnly || props.disabled || props[propName] == null || enableFlareAPI && props.listeners) {
        return null;
      }

      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  };
  /**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */

  ReactControlledValuePropTypes.checkPropTypes = function (tagName, props) {
    checkPropTypes(propTypes, props, 'prop', tagName, ReactDebugCurrentFrame$3.getStackAddendum);
  };
}

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.
var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true // NOTE: menuitem's close tag should be omitted, but that causes problems.

};

// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);

// or add stack by default to invariants where possible.

var HTML = '__html';
var ReactDebugCurrentFrame$4 = null;

{
  ReactDebugCurrentFrame$4 = ReactSharedInternals.ReactDebugCurrentFrame;
}

function assertValidProps(tag, props) {
  if (!props) {
    return;
  } // Note the use of `==` which checks for null or undefined.


  if (voidElementTags[tag]) {
    (function () {
      if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
        {
          throw ReactError(Error(tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." + (ReactDebugCurrentFrame$4.getStackAddendum())));
        }
      }
    })();
  }

  if (props.dangerouslySetInnerHTML != null) {
    (function () {
      if (!(props.children == null)) {
        {
          throw ReactError(Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`."));
        }
      }
    })();

    (function () {
      if (!(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML)) {
        {
          throw ReactError(Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information."));
        }
      }
    })();
  }

  {
    !(props.suppressContentEditableWarning || !props.contentEditable || props.children == null) ? warning$1(false, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : void 0;
  }

  (function () {
    if (!(props.style == null || typeof props.style === 'object')) {
      {
        throw ReactError(Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." + (ReactDebugCurrentFrame$4.getStackAddendum())));
      }
    }
  })();
}

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */

function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901
  var isEmpty = value == null || typeof value === 'boolean' || value === '';

  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */

function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;

    default:
      return true;
  }
}

var warnValidStyle = function () {};

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  var msPattern$1 = /^-ms-/;
  var hyphenPattern = /-(.)/g; // style values shouldn't contain a semicolon

  var badStyleValueWithSemicolonPattern = /;\s*$/;
  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var camelize = function (string) {
    return string.replace(hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  };

  var warnHyphenatedStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning$1(false, 'Unsupported style property %s. Did you mean %s?', name, // As Andi Smith suggests
    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
    // is converted to lowercase `ms`.
    camelize(name.replace(msPattern$1, 'ms-')));
  };

  var warnBadVendoredStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning$1(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
  };

  var warnStyleValueWithSemicolon = function (name, value) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
    warning$1(false, "Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
    warning$1(false, '`NaN` is an invalid value for the `%s` css style property.', name);
  };

  var warnStyleValueIsInfinity = function (name, value) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;
    warning$1(false, '`Infinity` is an invalid value for the `%s` css style property.', name);
  };

  warnValidStyle = function (name, value) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

var ariaProperties = {
  'aria-current': 0,
  // state
  'aria-details': 0,
  'aria-disabled': 0,
  // state
  'aria-hidden': 0,
  // state
  'aria-invalid': 0,
  // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;

function validateProperty(tagName, name) {
  if (hasOwnProperty$2.call(warnedProperties, name) && warnedProperties[name]) {
    return true;
  }

  if (rARIACamel.test(name)) {
    var ariaName = 'aria-' + name.slice(4).toLowerCase();
    var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null; // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.

    if (correctName == null) {
      warning$1(false, 'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);
      warnedProperties[name] = true;
      return true;
    } // aria-* attributes should be lowercase; suggest the lowercase version.


    if (name !== correctName) {
      warning$1(false, 'Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);
      warnedProperties[name] = true;
      return true;
    }
  }

  if (rARIA.test(name)) {
    var lowerCasedName = name.toLowerCase();
    var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null; // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.

    if (standardName == null) {
      warnedProperties[name] = true;
      return false;
    } // aria-* attributes should be lowercase; suggest the lowercase version.


    if (name !== standardName) {
      warning$1(false, 'Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);
      warnedProperties[name] = true;
      return true;
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  var invalidProps = [];

  for (var key in props) {
    var isValid = validateProperty(type, key);

    if (!isValid) {
      invalidProps.push(key);
    }
  }

  var unknownPropString = invalidProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');

  if (invalidProps.length === 1) {
    warning$1(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
  } else if (invalidProps.length > 1) {
    warning$1(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;
function validateProperties$1(type, props) {
  if (type !== 'input' && type !== 'textarea' && type !== 'select') {
    return;
  }

  if (props != null && props.value === null && !didWarnValueNull) {
    didWarnValueNull = true;

    if (type === 'select' && props.multiple) {
      warning$1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
    } else {
      warning$1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
    }
  }
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */

/**
 * Ordered list of injected plugins.
 */



/**
 * Mapping from event name to dispatch config
 */


/**
 * Mapping from registration name to plugin module
 */

var registrationNameModules = {};
/**
 * Mapping from registration name to event name
 */


/**
 * Mapping from lowercase registration names to the properly cased version,
 * used to warn in the case of missing event handlers. Available
 * only in true.
 * @type {Object}
 */

var possibleRegistrationNames = {}; // Trust the developer to only use possibleRegistrationNames in true

/**
 * Injects an ordering of plugins (by plugin name). This allows the ordering
 * to be decoupled from injection of the actual plugins so that ordering is
 * always deterministic regardless of packaging, on-the-fly injection, etc.
 *
 * @param {array} InjectedEventPluginOrder
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginOrder}
 */


/**
 * Injects plugins to be used by `EventPluginHub`. The plugin names must be
 * in the ordering injected by `injectEventPluginOrder`.
 *
 * Plugins can be injected as part of page initialization or on-the-fly.
 *
 * @param {object} injectedNamesToPlugins Map from names to plugin modules.
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginsByName}
 */

// When adding attributes to the HTML or SVG whitelist, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  disablepictureinpicture: 'disablePictureInPicture',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',
  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, canUseEventSystem) {
    if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();

    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      warning$1(false, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
      warnedProperties$1[name] = true;
      return true;
    } // We can't rely on the event system being injected on the server.


    if (canUseEventSystem) {
      if (registrationNameModules.hasOwnProperty(name)) {
        return true;
      }

      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

      if (registrationName != null) {
        warning$1(false, 'Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);
        warnedProperties$1[name] = true;
        return true;
      }

      if (EVENT_NAME_REGEX.test(name)) {
        warning$1(false, 'Unknown event handler property `%s`. It will be ignored.', name);
        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        warning$1(false, 'Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Let the ARIA attribute hook validate ARIA attributes


    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      warning$1(false, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      warning$1(false, 'The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      warning$1(false, 'Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      warning$1(false, 'Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);
      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED; // Known attributes should match the casing specified in the property config.

    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];

      if (standardName !== name) {
        warning$1(false, 'Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);
        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      warning$1(false, 'React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
      } else {
        warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Now that we've validated casing, do not validate
    // data types for reserved props


    if (isReserved) {
      return true;
    } // Warn when a known attribute is a bad type


    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    } // Warn when passing the strings 'false' or 'true' into a boolean prop


    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
      warning$1(false, 'Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
      warnedProperties$1[name] = true;
      return true;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, canUseEventSystem) {
  var unknownProps = [];

  for (var key in props) {
    var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);

    if (!isValid) {
      unknownProps.push(key);
    }
  }

  var unknownPropString = unknownProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');

  if (unknownProps.length === 1) {
    warning$1(false, 'Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
  } else if (unknownProps.length > 1) {
    warning$1(false, 'Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
  }
};

function validateProperties$2(type, props, canUseEventSystem) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnUnknownProperties(type, props, canUseEventSystem);
}

var toArray = React.Children.toArray; // This is only used in DEV.
// Each entry is `this.stack` from a currently executing renderer instance.
// (There may be more than one because ReactDOMServer is reentrant).
// Each stack is an array of frames which may contain nested stacks of elements.

var currentDebugStacks = [];
var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var ReactDebugCurrentFrame;
var prevGetCurrentStackImpl = null;

var getCurrentServerStackImpl = function () {
  return '';
};

var describeStackFrame = function (element) {
  return '';
};

var validatePropertiesInDevelopment = function (type, props) {};

var pushCurrentDebugStack = function (stack) {};

var pushElementToDebugStack = function (element) {};

var popCurrentDebugStack = function () {};

var hasWarnedAboutUsingContextAsConsumer = false;

{
  ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

  validatePropertiesInDevelopment = function (type, props) {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props,
    /* canUseEventSystem */
    false);
  };

  describeStackFrame = function (element) {
    var source = element._source;
    var type = element.type;
    var name = getComponentName(type);
    var ownerName = null;
    return describeComponentFrame(name, source, ownerName);
  };

  pushCurrentDebugStack = function (stack) {
    currentDebugStacks.push(stack);

    if (currentDebugStacks.length === 1) {
      // We are entering a server renderer.
      // Remember the previous (e.g. client) global stack implementation.
      prevGetCurrentStackImpl = ReactDebugCurrentFrame.getCurrentStack;
      ReactDebugCurrentFrame.getCurrentStack = getCurrentServerStackImpl;
    }
  };

  pushElementToDebugStack = function (element) {
    // For the innermost executing ReactDOMServer call,
    var stack = currentDebugStacks[currentDebugStacks.length - 1]; // Take the innermost executing frame (e.g. <Foo>),

    var frame = stack[stack.length - 1]; // and record that it has one more element associated with it.

    frame.debugElementStack.push(element); // We only need this because we tail-optimize single-element
    // children and directly handle them in an inner loop instead of
    // creating separate frames for them.
  };

  popCurrentDebugStack = function () {
    currentDebugStacks.pop();

    if (currentDebugStacks.length === 0) {
      // We are exiting the server renderer.
      // Restore the previous (e.g. client) global stack implementation.
      ReactDebugCurrentFrame.getCurrentStack = prevGetCurrentStackImpl;
      prevGetCurrentStackImpl = null;
    }
  };

  getCurrentServerStackImpl = function () {
    if (currentDebugStacks.length === 0) {
      // Nothing is currently rendering.
      return '';
    } // ReactDOMServer is reentrant so there may be multiple calls at the same time.
    // Take the frames from the innermost call which is the last in the array.


    var frames = currentDebugStacks[currentDebugStacks.length - 1];
    var stack = ''; // Go through every frame in the stack from the innermost one.

    for (var i = frames.length - 1; i >= 0; i--) {
      var frame = frames[i]; // Every frame might have more than one debug element stack entry associated with it.
      // This is because single-child nesting doesn't create materialized frames.
      // Instead it would push them through `pushElementToDebugStack()`.

      var debugElementStack = frame.debugElementStack;

      for (var ii = debugElementStack.length - 1; ii >= 0; ii--) {
        stack += describeStackFrame(debugElementStack[ii]);
      }
    }

    return stack;
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var didWarnAboutNoopUpdateForComponent = {};
var didWarnAboutBadClass = {};
var didWarnAboutModulePatternComponent = {};
var didWarnAboutDeprecatedWillMount = {};
var didWarnAboutUndefinedDerivedState = {};
var didWarnAboutUninitializedState = {};
var valuePropNames = ['value', 'defaultValue'];
var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
}; // We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name

var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset

var validatedTagCache = {};

function validateDangerousTag(tag) {
  if (!validatedTagCache.hasOwnProperty(tag)) {
    (function () {
      if (!VALID_TAG_REGEX.test(tag)) {
        {
          throw ReactError(Error("Invalid tag: " + tag));
        }
      }
    })();

    validatedTagCache[tag] = true;
  }
}

var styleNameCache = {};

var processStyleName = function (styleName) {
  if (styleNameCache.hasOwnProperty(styleName)) {
    return styleNameCache[styleName];
  }

  var result = hyphenateStyleName(styleName);
  styleNameCache[styleName] = result;
  return result;
};

function createMarkupForStyles(styles) {
  var serialized = '';
  var delimiter = '';

  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }

    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = styles[styleName];

    {
      if (!isCustomProperty) {
        warnValidStyle$1(styleName, styleValue);
      }
    }

    if (styleValue != null) {
      serialized += delimiter + (isCustomProperty ? styleName : processStyleName(styleName)) + ':';
      serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
      delimiter = ';';
    }
  }

  return serialized || null;
}

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;

    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
      return;
    }

    warningWithoutStack$1(false, '%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
    didWarnAboutNoopUpdateForComponent[warningKey] = true;
  }
}

function shouldConstruct(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;

  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;

    if (typeof content === 'string' || typeof content === 'number') {
      return escapeTextForBrowser(content);
    }
  }

  return null;
}

function flattenTopLevelChildren(children) {
  if (!React.isValidElement(children)) {
    return toArray(children);
  }

  var element = children;

  if (element.type !== REACT_FRAGMENT_TYPE) {
    return [element];
  }

  var fragmentChildren = element.props.children;

  if (!React.isValidElement(fragmentChildren)) {
    return toArray(fragmentChildren);
  }

  var fragmentChildElement = fragmentChildren;
  return [fragmentChildElement];
}

function flattenOptionChildren(children) {
  if (children === undefined || children === null) {
    return children;
  }

  var content = ''; // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.

  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }

    content += child;

    {
      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
        didWarnInvalidOptionChildren = true;
        warning$1(false, 'Only strings and numbers are supported as <option> children.');
      }
    }
  });
  return content;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var STYLE = 'style';
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
  var ret = '<' + tagVerbatim;

  for (var propKey in props) {
    if (!hasOwnProperty.call(props, propKey)) {
      continue;
    }

    if (enableFlareAPI && propKey === 'listeners') {
      continue;
    }

    var propValue = props[propKey];

    if (propValue == null) {
      continue;
    }

    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue);
    }

    var markup = null;

    if (isCustomComponent(tagLowercase, props)) {
      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
        markup = createMarkupForCustomAttribute(propKey, propValue);
      }
    } else {
      markup = createMarkupForProperty(propKey, propValue);
    }

    if (markup) {
      ret += ' ' + markup;
    }
  } // For static pages, no need to put React ID and checksum. Saves lots of
  // bytes.


  if (makeStaticMarkup) {
    return ret;
  }

  if (isRootElement) {
    ret += ' ' + createMarkupForRoot();
  }

  return ret;
}

function validateRenderResult(child, type) {
  if (child === undefined) {
    (function () {
      {
        {
          throw ReactError(Error((getComponentName(type) || 'Component') + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null."));
        }
      }
    })();
  }
}

function resolve(child, context, threadID) {
  while (React.isValidElement(child)) {
    // Safe because we just checked it's an element.
    var element = child;
    var Component = element.type;

    {
      pushElementToDebugStack(element);
    }

    if (typeof Component !== 'function') {
      break;
    }

    processChild(element, Component);
  } // Extra closure so queue and replace can be captured properly


  function processChild(element, Component) {
    var isClass = shouldConstruct(Component);
    var publicContext = processContext(Component, context, threadID, isClass);
    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueForceUpdate: function (publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function (publicInstance, currentPartialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }

        queue.push(currentPartialState);
      }
    };
    var inst;

    if (isClass) {
      inst = new Component(element.props, publicContext, updater);

      if (typeof Component.getDerivedStateFromProps === 'function') {
        {
          if (inst.state === null || inst.state === undefined) {
            var componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUninitializedState[componentName]) {
              warningWithoutStack$1(false, '`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, inst.state === null ? 'null' : 'undefined', componentName);
              didWarnAboutUninitializedState[componentName] = true;
            }
          }
        }

        var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);

        {
          if (partialState === undefined) {
            var _componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUndefinedDerivedState[_componentName]) {
              warningWithoutStack$1(false, '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);
              didWarnAboutUndefinedDerivedState[_componentName] = true;
            }
          }
        }

        if (partialState != null) {
          inst.state = _assign({}, inst.state, partialState);
        }
      }
    } else {
      {
        if (Component.prototype && typeof Component.prototype.render === 'function') {
          var _componentName2 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutBadClass[_componentName2]) {
            warningWithoutStack$1(false, "The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);
            didWarnAboutBadClass[_componentName2] = true;
          }
        }
      }

      var componentIdentity = {};
      prepareToUseHooks(componentIdentity);
      inst = Component(element.props, publicContext, updater);
      inst = finishHooks(Component, element.props, inst, publicContext);

      if (inst == null || inst.render == null) {
        child = inst;
        validateRenderResult(child, Component);
        return;
      }

      {
        var _componentName3 = getComponentName(Component) || 'Unknown';

        if (!didWarnAboutModulePatternComponent[_componentName3]) {
          warningWithoutStack$1(false, 'The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName3, _componentName3, _componentName3);
          didWarnAboutModulePatternComponent[_componentName3] = true;
        }
      }
    }

    inst.props = element.props;
    inst.context = publicContext;
    inst.updater = updater;
    var initialState = inst.state;

    if (initialState === undefined) {
      inst.state = initialState = null;
    }

    if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
      if (typeof inst.componentWillMount === 'function') {
        {
          if (warnAboutDeprecatedLifecycles && inst.componentWillMount.__suppressDeprecationWarning !== true) {
            var _componentName4 = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutDeprecatedWillMount[_componentName4]) {
              lowPriorityWarningWithoutStack$1(false, // keep this warning in sync with ReactStrictModeWarning.js
              'componentWillMount has been renamed, and is not recommended for use. ' + 'See https://fb.me/react-unsafe-component-lifecycles for details.\n\n' + '* Move code from componentWillMount to componentDidMount (preferred in most cases) ' + 'or the constructor.\n' + '\nPlease update the following components: %s', _componentName4);
              didWarnAboutDeprecatedWillMount[_componentName4] = true;
            }
          }
        } // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.


        if (typeof Component.getDerivedStateFromProps !== 'function') {
          inst.componentWillMount();
        }
      }

      if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        inst.UNSAFE_componentWillMount();
      }

      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;

          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];

            var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;

            if (_partialState != null) {
              if (dontMutate) {
                dontMutate = false;
                nextState = _assign({}, nextState, _partialState);
              } else {
                _assign(nextState, _partialState);
              }
            }
          }

          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }

    child = inst.render();

    {
      if (child === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        child = null;
      }
    }

    validateRenderResult(child, Component);
    var childContext;

    if (disableLegacyContext) {
      {
        var childContextTypes = Component.childContextTypes;

        if (childContextTypes !== undefined) {
          warningWithoutStack$1(false, '%s uses the legacy childContextTypes API which is no longer supported. ' + 'Use React.createContext() instead.', getComponentName(Component) || 'Unknown');
        }
      }
    } else {
      if (typeof inst.getChildContext === 'function') {
        var _childContextTypes = Component.childContextTypes;

        if (typeof _childContextTypes === 'object') {
          childContext = inst.getChildContext();

          for (var contextKey in childContext) {
            (function () {
              if (!(contextKey in _childContextTypes)) {
                {
                  throw ReactError(Error((getComponentName(Component) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes."));
                }
              }
            })();
          }
        } else {
          warningWithoutStack$1(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
        }
      }

      if (childContext) {
        context = _assign({}, context, childContext);
      }
    }
  }

  return {
    child: child,
    context: context
  };
}

var ReactDOMServerRenderer =
/*#__PURE__*/
function () {
  // TODO: type this more strictly:
  // DEV-only
  function ReactDOMServerRenderer(children, makeStaticMarkup) {
    var flatChildren = flattenTopLevelChildren(children);
    var topFrame = {
      type: null,
      // Assume all trees start in the HTML namespace (not totally true, but
      // this is what we did historically)
      domNamespace: Namespaces.html,
      children: flatChildren,
      childIndex: 0,
      context: emptyObject,
      footer: ''
    };

    {
      topFrame.debugElementStack = [];
    }

    this.threadID = allocThreadID();
    this.stack = [topFrame];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = makeStaticMarkup;
    this.suspenseDepth = 0; // Context (new API)

    this.contextIndex = -1;
    this.contextStack = [];
    this.contextValueStack = [];

    {
      this.contextProviderStack = [];
    }
  }

  var _proto = ReactDOMServerRenderer.prototype;

  _proto.destroy = function destroy() {
    if (!this.exhausted) {
      this.exhausted = true;
      this.clearProviders();
      freeThreadID(this.threadID);
    }
  }
  /**
   * Note: We use just two stacks regardless of how many context providers you have.
   * Providers are always popped in the reverse order to how they were pushed
   * so we always know on the way down which provider you'll encounter next on the way up.
   * On the way down, we push the current provider, and its context value *before*
   * we mutated it, onto the stacks. Therefore, on the way up, we always know which
   * provider needs to be "restored" to which value.
   * https://github.com/facebook/react/pull/12985#issuecomment-396301248
   */
  ;

  _proto.pushProvider = function pushProvider(provider) {
    var index = ++this.contextIndex;
    var context = provider.type._context;
    var threadID = this.threadID;
    validateContextBounds(context, threadID);
    var previousValue = context[threadID]; // Remember which value to restore this context to on our way up.

    this.contextStack[index] = context;
    this.contextValueStack[index] = previousValue;

    {
      // Only used for push/pop mismatch warnings.
      this.contextProviderStack[index] = provider;
    } // Mutate the current value.


    context[threadID] = provider.props.value;
  };

  _proto.popProvider = function popProvider(provider) {
    var index = this.contextIndex;

    {
      !(index > -1 && provider === this.contextProviderStack[index]) ? warningWithoutStack$1(false, 'Unexpected pop.') : void 0;
    }

    var context = this.contextStack[index];
    var previousValue = this.contextValueStack[index]; // "Hide" these null assignments from Flow by using `any`
    // because conceptually they are deletions--as long as we
    // promise to never access values beyond `this.contextIndex`.

    this.contextStack[index] = null;
    this.contextValueStack[index] = null;

    {
      this.contextProviderStack[index] = null;
    }

    this.contextIndex--; // Restore to the previous value we stored as we were walking down.
    // We've already verified that this context has been expanded to accommodate
    // this thread id, so we don't need to do it again.

    context[this.threadID] = previousValue;
  };

  _proto.clearProviders = function clearProviders() {
    // Restore any remaining providers on the stack to previous values
    for (var index = this.contextIndex; index >= 0; index--) {
      var context = this.contextStack[index];
      var previousValue = this.contextValueStack[index];
      context[this.threadID] = previousValue;
    }
  };

  _proto.read = function read(bytes) {
    var _this = this;

    if (this.exhausted) {
      return null;
    }

    var prevThreadID = currentThreadID;
    setCurrentThreadID(this.threadID);
    var prevDispatcher = ReactCurrentDispatcher.current;
    ReactCurrentDispatcher.current = Dispatcher;

    try {
      // Markup generated within <Suspense> ends up buffered until we know
      // nothing in that boundary suspended
      var out = [''];
      var suspended = false;

      while (out[0].length < bytes) {
        if (this.stack.length === 0) {
          this.exhausted = true;
          freeThreadID(this.threadID);
          break;
        }

        var frame = this.stack[this.stack.length - 1];

        if (suspended || frame.childIndex >= frame.children.length) {
          var footer = frame.footer;

          if (footer !== '') {
            this.previousWasTextNode = false;
          }

          this.stack.pop();

          if (frame.type === 'select') {
            this.currentSelectValue = null;
          } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
            var provider = frame.type;
            this.popProvider(provider);
          } else if (frame.type === REACT_SUSPENSE_TYPE) {
            this.suspenseDepth--;
            var buffered = out.pop();

            if (suspended) {
              suspended = false; // If rendering was suspended at this boundary, render the fallbackFrame

              var fallbackFrame = frame.fallbackFrame;

              (function () {
                if (!fallbackFrame) {
                  {
                    throw ReactError(Error("ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue."));
                  }
                }
              })();

              this.stack.push(fallbackFrame);
              out[this.suspenseDepth] += '<!--$!-->'; // Skip flushing output since we're switching to the fallback

              continue;
            } else {
              out[this.suspenseDepth] += buffered;
            }
          } // Flush output


          out[this.suspenseDepth] += footer;
          continue;
        }

        var child = frame.children[frame.childIndex++];
        var outBuffer = '';

        {
          pushCurrentDebugStack(this.stack); // We're starting work on this frame, so reset its inner stack.

          frame.debugElementStack.length = 0;
        }

        try {
          outBuffer += this.render(child, frame.context, frame.domNamespace);
        } catch (err) {
          if (err != null && typeof err.then === 'function') {
            if (enableSuspenseServerRenderer) {
              (function () {
                if (!(_this.suspenseDepth > 0)) {
                  {
                    throw ReactError(Error("A React component suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."));
                  }
                }
              })();

              suspended = true;
            } else {
              (function () {
                {
                  {
                    throw ReactError(Error("ReactDOMServer does not yet support Suspense."));
                  }
                }
              })();
            }
          } else {
            throw err;
          }
        } finally {
          {
            popCurrentDebugStack();
          }
        }

        if (out.length <= this.suspenseDepth) {
          out.push('');
        }

        out[this.suspenseDepth] += outBuffer;
      }

      return out[0];
    } finally {
      ReactCurrentDispatcher.current = prevDispatcher;
      setCurrentThreadID(prevThreadID);
    }
  };

  _proto.render = function render(child, context, parentNamespace) {
    if (typeof child === 'string' || typeof child === 'number') {
      var text = '' + child;

      if (text === '') {
        return '';
      }

      if (this.makeStaticMarkup) {
        return escapeTextForBrowser(text);
      }

      if (this.previousWasTextNode) {
        return '<!-- -->' + escapeTextForBrowser(text);
      }

      this.previousWasTextNode = true;
      return escapeTextForBrowser(text);
    } else {
      var nextChild;

      var _resolve = resolve(child, context, this.threadID);

      nextChild = _resolve.child;
      context = _resolve.context;

      if (nextChild === null || nextChild === false) {
        return '';
      } else if (!React.isValidElement(nextChild)) {
        if (nextChild != null && nextChild.$$typeof != null) {
          // Catch unexpected special types early.
          var $$typeof = nextChild.$$typeof;

          (function () {
            if (!($$typeof !== REACT_PORTAL_TYPE)) {
              {
                throw ReactError(Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."));
              }
            }
          })(); // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.


          (function () {
            {
              {
                throw ReactError(Error("Unknown element-like object type: " + $$typeof.toString() + ". This is likely a bug in React. Please file an issue."));
              }
            }
          })();
        }

        var nextChildren = toArray(nextChild);
        var frame = {
          type: null,
          domNamespace: parentNamespace,
          children: nextChildren,
          childIndex: 0,
          context: context,
          footer: ''
        };

        {
          frame.debugElementStack = [];
        }

        this.stack.push(frame);
        return '';
      } // Safe because we just checked it's an element.


      var nextElement = nextChild;
      var elementType = nextElement.type;

      if (typeof elementType === 'string') {
        return this.renderDOM(nextElement, context, parentNamespace);
      }

      switch (elementType) {
        case REACT_STRICT_MODE_TYPE:
        case REACT_CONCURRENT_MODE_TYPE:
        case REACT_PROFILER_TYPE:
        case REACT_SUSPENSE_LIST_TYPE:
        case REACT_FRAGMENT_TYPE:
          {
            var _nextChildren = toArray(nextChild.props.children);

            var _frame = {
              type: null,
              domNamespace: parentNamespace,
              children: _nextChildren,
              childIndex: 0,
              context: context,
              footer: ''
            };

            {
              _frame.debugElementStack = [];
            }

            this.stack.push(_frame);
            return '';
          }

        case REACT_SUSPENSE_TYPE:
          {
            if (enableSuspenseServerRenderer) {
              var fallback = nextChild.props.fallback;

              if (fallback === undefined) {
                // If there is no fallback, then this just behaves as a fragment.
                var _nextChildren3 = toArray(nextChild.props.children);

                var _frame3 = {
                  type: null,
                  domNamespace: parentNamespace,
                  children: _nextChildren3,
                  childIndex: 0,
                  context: context,
                  footer: ''
                };

                {
                  _frame3.debugElementStack = [];
                }

                this.stack.push(_frame3);
                return '';
              }

              var fallbackChildren = toArray(fallback);

              var _nextChildren2 = toArray(nextChild.props.children);

              var fallbackFrame = {
                type: null,
                domNamespace: parentNamespace,
                children: fallbackChildren,
                childIndex: 0,
                context: context,
                footer: '<!--/$-->'
              };
              var _frame2 = {
                fallbackFrame: fallbackFrame,
                type: REACT_SUSPENSE_TYPE,
                domNamespace: parentNamespace,
                children: _nextChildren2,
                childIndex: 0,
                context: context,
                footer: '<!--/$-->'
              };

              {
                _frame2.debugElementStack = [];
                fallbackFrame.debugElementStack = [];
              }

              this.stack.push(_frame2);
              this.suspenseDepth++;
              return '<!--$-->';
            } else {
              (function () {
                {
                  {
                    throw ReactError(Error("ReactDOMServer does not yet support Suspense."));
                  }
                }
              })();
            }
          }
        // eslint-disable-next-line-no-fallthrough

        default:
          break;
      }

      if (typeof elementType === 'object' && elementType !== null) {
        switch (elementType.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            {
              var element = nextChild;

              var _nextChildren4;

              var componentIdentity = {};
              prepareToUseHooks(componentIdentity);
              _nextChildren4 = elementType.render(element.props, element.ref);
              _nextChildren4 = finishHooks(elementType.render, element.props, _nextChildren4, element.ref);
              _nextChildren4 = toArray(_nextChildren4);
              var _frame4 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren4,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame4.debugElementStack = [];
              }

              this.stack.push(_frame4);
              return '';
            }

          case REACT_MEMO_TYPE:
            {
              var _element = nextChild;
              var _nextChildren5 = [React.createElement(elementType.type, _assign({
                ref: _element.ref
              }, _element.props))];
              var _frame5 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren5,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame5.debugElementStack = [];
              }

              this.stack.push(_frame5);
              return '';
            }

          case REACT_PROVIDER_TYPE:
            {
              var provider = nextChild;
              var nextProps = provider.props;

              var _nextChildren6 = toArray(nextProps.children);

              var _frame6 = {
                type: provider,
                domNamespace: parentNamespace,
                children: _nextChildren6,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame6.debugElementStack = [];
              }

              this.pushProvider(provider);
              this.stack.push(_frame6);
              return '';
            }

          case REACT_CONTEXT_TYPE:
            {
              var reactContext = nextChild.type; // The logic below for Context differs depending on PROD or DEV mode. In
              // DEV mode, we create a separate object for Context.Consumer that acts
              // like a proxy to Context. This proxy object adds unnecessary code in PROD
              // so we use the old behaviour (Context.Consumer references Context) to
              // reduce size and overhead. The separate object references context via
              // a property called "_context", which also gives us the ability to check
              // in DEV mode if this property exists or not and warn if it does not.

              {
                if (reactContext._context === undefined) {
                  // This may be because it's a Context (rather than a Consumer).
                  // Or it may be because it's older React where they're the same thing.
                  // We only want to warn if we're sure it's a new React.
                  if (reactContext !== reactContext.Consumer) {
                    if (!hasWarnedAboutUsingContextAsConsumer) {
                      hasWarnedAboutUsingContextAsConsumer = true;
                      warning$1(false, 'Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                    }
                  }
                } else {
                  reactContext = reactContext._context;
                }
              }

              var _nextProps = nextChild.props;
              var threadID = this.threadID;
              validateContextBounds(reactContext, threadID);
              var nextValue = reactContext[threadID];

              var _nextChildren7 = toArray(_nextProps.children(nextValue));

              var _frame7 = {
                type: nextChild,
                domNamespace: parentNamespace,
                children: _nextChildren7,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame7.debugElementStack = [];
              }

              this.stack.push(_frame7);
              return '';
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_FUNDAMENTAL_TYPE:
            {
              if (enableFundamentalAPI) {
                var fundamentalImpl = elementType.impl;
                var open = fundamentalImpl.getServerSideString(null, nextElement.props);
                var getServerSideStringClose = fundamentalImpl.getServerSideStringClose;
                var close = getServerSideStringClose !== undefined ? getServerSideStringClose(null, nextElement.props) : '';

                var _nextChildren8 = fundamentalImpl.reconcileChildren !== false ? toArray(nextChild.props.children) : [];

                var _frame8 = {
                  type: null,
                  domNamespace: parentNamespace,
                  children: _nextChildren8,
                  childIndex: 0,
                  context: context,
                  footer: close
                };

                {
                  _frame8.debugElementStack = [];
                }

                this.stack.push(_frame8);
                return open;
              }

              (function () {
                {
                  {
                    throw ReactError(Error("ReactDOMServer does not yet support the fundamental API."));
                  }
                }
              })();
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_LAZY_TYPE:
            {
              var _element2 = nextChild;
              var lazyComponent = nextChild.type; // Attempt to initialize lazy component regardless of whether the
              // suspense server-side renderer is enabled so synchronously
              // resolved constructors are supported.

              initializeLazyComponentType(lazyComponent);

              switch (lazyComponent._status) {
                case Resolved:
                  {
                    var _nextChildren9 = [React.createElement(lazyComponent._result, _assign({
                      ref: _element2.ref
                    }, _element2.props))];
                    var _frame9 = {
                      type: null,
                      domNamespace: parentNamespace,
                      children: _nextChildren9,
                      childIndex: 0,
                      context: context,
                      footer: ''
                    };

                    {
                      _frame9.debugElementStack = [];
                    }

                    this.stack.push(_frame9);
                    return '';
                  }

                case Rejected:
                  throw lazyComponent._result;

                case Pending:
                default:
                  (function () {
                    {
                      {
                        throw ReactError(Error("ReactDOMServer does not yet support lazy-loaded components."));
                      }
                    }
                  })();

              }
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_SCOPE_TYPE:
            {
              if (enableScopeAPI) {
                var _nextChildren10 = toArray(nextChild.props.children);

                var _frame10 = {
                  type: null,
                  domNamespace: parentNamespace,
                  children: _nextChildren10,
                  childIndex: 0,
                  context: context,
                  footer: ''
                };

                {
                  _frame10.debugElementStack = [];
                }

                this.stack.push(_frame10);
                return '';
              }

              (function () {
                {
                  {
                    throw ReactError(Error("ReactDOMServer does not yet support scope components."));
                  }
                }
              })();
            }
        }
      }

      var info = '';

      {
        var owner = nextElement._owner;

        if (elementType === undefined || typeof elementType === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
        }

        var ownerName = owner ? getComponentName(owner) : null;

        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }
      }

      (function () {
        {
          {
            throw ReactError(Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (elementType == null ? elementType : typeof elementType) + "." + info));
          }
        }
      })();
    }
  };

  _proto.renderDOM = function renderDOM(element, context, parentNamespace) {
    var tag = element.type.toLowerCase();
    var namespace = parentNamespace;

    if (parentNamespace === Namespaces.html) {
      namespace = getIntrinsicNamespace(tag);
    }

    {
      if (namespace === Namespaces.html) {
        // Should this check be gated by parent namespace? Not sure we want to
        // allow <SVG> or <mATH>.
        !(tag === element.type) ? warning$1(false, '<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type) : void 0;
      }
    }

    validateDangerousTag(tag);
    var props = element.props;

    if (tag === 'input') {
      {
        ReactControlledValuePropTypes.checkPropTypes('input', props);

        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
          warning$1(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultChecked = true;
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
          warning$1(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultInputValue = true;
        }
      }

      props = _assign({
        type: undefined
      }, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked
      });
    } else if (tag === 'textarea') {
      {
        ReactControlledValuePropTypes.checkPropTypes('textarea', props);

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
          warning$1(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultTextareaValue = true;
        }
      }

      var initialValue = props.value;

      if (initialValue == null) {
        var defaultValue = props.defaultValue; // TODO (yungsters): Remove support for children content in <textarea>.

        var textareaChildren = props.children;

        if (textareaChildren != null) {
          {
            warning$1(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
          }

          (function () {
            if (!(defaultValue == null)) {
              {
                throw ReactError(Error("If you supply `defaultValue` on a <textarea>, do not pass children."));
              }
            }
          })();

          if (Array.isArray(textareaChildren)) {
            (function () {
              if (!(textareaChildren.length <= 1)) {
                {
                  throw ReactError(Error("<textarea> can only have at most one child."));
                }
              }
            })();

            textareaChildren = textareaChildren[0];
          }

          defaultValue = '' + textareaChildren;
        }

        if (defaultValue == null) {
          defaultValue = '';
        }

        initialValue = defaultValue;
      }

      props = _assign({}, props, {
        value: undefined,
        children: '' + initialValue
      });
    } else if (tag === 'select') {
      {
        ReactControlledValuePropTypes.checkPropTypes('select', props);

        for (var i = 0; i < valuePropNames.length; i++) {
          var propName = valuePropNames[i];

          if (props[propName] == null) {
            continue;
          }

          var isArray = Array.isArray(props[propName]);

          if (props.multiple && !isArray) {
            warning$1(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
          } else if (!props.multiple && isArray) {
            warning$1(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
          }
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
          warning$1(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultSelectValue = true;
        }
      }

      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
      props = _assign({}, props, {
        value: undefined
      });
    } else if (tag === 'option') {
      var selected = null;
      var selectValue = this.currentSelectValue;
      var optionChildren = flattenOptionChildren(props.children);

      if (selectValue != null) {
        var value;

        if (props.value != null) {
          value = props.value + '';
        } else {
          value = optionChildren;
        }

        selected = false;

        if (Array.isArray(selectValue)) {
          // multiple
          for (var j = 0; j < selectValue.length; j++) {
            if ('' + selectValue[j] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }

        props = _assign({
          selected: undefined,
          children: undefined
        }, props, {
          selected: selected,
          children: optionChildren
        });
      }
    }

    {
      validatePropertiesInDevelopment(tag, props);
    }

    assertValidProps(tag, props);
    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
    var footer = '';

    if (omittedCloseTags.hasOwnProperty(tag)) {
      out += '/>';
    } else {
      out += '>';
      footer = '</' + element.type + '>';
    }

    var children;
    var innerMarkup = getNonChildrenInnerMarkup(props);

    if (innerMarkup != null) {
      children = [];

      if (newlineEatingTags[tag] && innerMarkup.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        out += '\n';
      }

      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }

    var frame = {
      domNamespace: getChildNamespace(parentNamespace, element.type),
      type: tag,
      children: children,
      childIndex: 0,
      context: context,
      footer: footer
    };

    {
      frame.debugElementStack = [];
    }

    this.stack.push(frame);
    this.previousWasTextNode = false;
    return out;
  };

  return ReactDOMServerRenderer;
}();

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostring
 */

function renderToString(element) {
  var renderer = new ReactDOMServerRenderer(element, false);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}
/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
 */

function renderToStaticMarkup(element) {
  var renderer = new ReactDOMServerRenderer(element, true);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}

function renderToNodeStream() {
  (function () {
    {
      {
        throw ReactError(Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead."));
      }
    }
  })();
}

function renderToStaticNodeStream() {
  (function () {
    {
      {
        throw ReactError(Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead."));
      }
    }
  })();
} // Note: when changing this, also consider https://github.com/facebook/react/issues/11526


var ReactDOMServerBrowser = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup,
  renderToNodeStream: renderToNodeStream,
  renderToStaticNodeStream: renderToStaticNodeStream,
  version: ReactVersion
};

var ReactDOMServerBrowser$1 = Object.freeze({
	default: ReactDOMServerBrowser
});

var ReactDOMServer = ( ReactDOMServerBrowser$1 && ReactDOMServerBrowser ) || ReactDOMServerBrowser$1;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest


var server_browser = ReactDOMServer.default || ReactDOMServer;

module.exports = server_browser;
  })();
}


/***/ }),

/***/ "./node_modules/react-dom/server.browser.js":
/*!**************************************************!*\
  !*** ./node_modules/react-dom/server.browser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-server.browser.development.js */ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js");
}


/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!************************************!*\
  !*** external {"this":"ReactDOM"} ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=blocks.js.map