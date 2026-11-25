"use strict";
(Array.isArray(self["webpackChunkma_soha"]) ? self["webpackChunkma_soha"] : (self["webpackChunkma_soha"] = [])).push([["income_limit_lookup"],{

/***/ "./app/javascript/packs/income_limit_lookup.js":
/*!*****************************************************!*\
  !*** ./app/javascript/packs/income_limit_lookup.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "../node_modules/react-dom/client.js");
/* harmony import */ var _src_IncomeLimitLookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/IncomeLimitLookup */ "./app/javascript/src/IncomeLimitLookup.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");




var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('income_limit_lookup_root'));
if (root) {
  root.render(/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_src_IncomeLimitLookup__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false));
}

/***/ }),

/***/ "./app/javascript/src/Components/Button.tsx":
/*!**************************************************!*\
  !*** ./app/javascript/src/Components/Button.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.scss */ "./app/javascript/src/Components/Button.scss");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");

var _excluded = ["color", "variant", "size", "loading", "fullWidth", "iconLeft", "iconRight", "children", "className", "disabled"],
  _excluded2 = ["href", "onClick"],
  _excluded3 = ["type", "onClick"];




var Spinner = function Spinner() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("svg", {
    className: "soha-btn__spinner",
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    focusable: "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("circle", {
      className: "soha-btn__spinner-track",
      cx: "8",
      cy: "8",
      r: "6.5",
      fill: "none",
      strokeWidth: "2"
    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("path", {
      className: "soha-btn__spinner-head",
      d: "M8 1.5a6.5 6.5 0 0 1 6.5 6.5",
      fill: "none",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, void 0, false)]
  }, void 0, true);
};
var Button = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (props, ref) {
  var _ref = props,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'primary' : _ref$color,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'fill' : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    iconLeft = _ref.iconLeft,
    iconRight = _ref.iconRight,
    children = _ref.children,
    className = _ref.className,
    disabled = _ref.disabled,
    rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);
  var inactive = Boolean(disabled) || loading;
  var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('soha-btn', "soha-btn--".concat(variant), "soha-btn--".concat(color), "soha-btn--".concat(size), {
    'soha-btn--full': fullWidth,
    'soha-btn--loading': loading
  }, className);
  var content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Spinner, {}, void 0, false), !loading && iconLeft && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
      className: "soha-btn__icon",
      children: iconLeft
    }, void 0, false), children != null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
      className: "soha-btn__label",
      children: children
    }, void 0, false), !loading && iconRight && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
      className: "soha-btn__icon",
      children: iconRight
    }, void 0, false)]
  }, void 0, true);
  if (props.href !== undefined) {
    var _ref2 = rest,
      href = _ref2.href,
      _onClick = _ref2.onClick,
      anchorRest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, _excluded2);
    var _handleClick = function _handleClick(event) {
      if (inactive) {
        event.preventDefault();
        return;
      }
      _onClick === null || _onClick === void 0 || _onClick(event);
    };
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", Object.assign(Object.assign({}, anchorRest), {}, {
      ref: ref,
      className: classes,
      href: inactive ? undefined : href,
      role: "button",
      "aria-disabled": inactive || undefined,
      "aria-busy": loading || undefined,
      tabIndex: inactive ? -1 : anchorRest.tabIndex,
      onClick: _handleClick,
      children: content
    }), void 0, false);
  }
  var _ref3 = rest,
    type = _ref3.type,
    onClick = _ref3.onClick,
    buttonRest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, _excluded3);
  var handleClick = function handleClick(event) {
    if (loading) {
      event.preventDefault();
      return;
    }
    onClick === null || onClick === void 0 || onClick(event);
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", Object.assign(Object.assign({}, buttonRest), {}, {
    ref: ref,
    className: classes,
    type: type !== null && type !== void 0 ? type : 'button',
    disabled: Boolean(disabled),
    "aria-busy": loading || undefined,
    onClick: handleClick,
    children: content
  }), void 0, false);
});
Button.displayName = 'Button';
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./app/javascript/src/Components/Select.tsx":
/*!**************************************************!*\
  !*** ./app/javascript/src/Components/Select.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _Select_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Select.scss */ "./app/javascript/src/Components/Select.scss");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");


var _excluded = ["label", "helpText", "required", "error", "placeholder", "options", "fullWidth", "children", "className", "id", "disabled", "value", "defaultValue", "onChange"];




var ChevronDownIcon = function ChevronDownIcon() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("svg", {
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    focusable: "false",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("path", {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "m4 6 4 4 4-4"
    }, void 0, false)
  }, void 0, false);
};
var ErrorIcon = function ErrorIcon() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("svg", {
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    focusable: "false",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("path", {
      fill: "currentColor",
      d: "M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0 3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4.5m0 7.5a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8"
    }, void 0, false)
  }, void 0, false);
};
var Select = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function (props, ref) {
  var label = props.label,
    helpText = props.helpText,
    _props$required = props.required,
    required = _props$required === void 0 ? false : _props$required,
    error = props.error,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? 'Select an option' : _props$placeholder,
    options = props.options,
    _props$fullWidth = props.fullWidth,
    fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
    children = props.children,
    className = props.className,
    id = props.id,
    disabled = props.disabled,
    value = props.value,
    defaultValue = props.defaultValue,
    onChange = props.onChange,
    rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);
  var reactId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  var fieldId = id !== null && id !== void 0 ? id : "soha-select-".concat(reactId);
  var helpId = helpText ? "".concat(fieldId, "-help") : undefined;
  var hasMessage = Boolean(error) && typeof error !== 'boolean';
  var errorId = hasMessage ? "".concat(fieldId, "-error") : undefined;
  var hasError = Boolean(error);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((defaultValue !== null && defaultValue !== void 0 ? defaultValue : '') === ''),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    uncontrolledEmpty = _useState2[0],
    setUncontrolledEmpty = _useState2[1];
  var isEmpty = value !== undefined ? value === '' : uncontrolledEmpty;
  var handleChange = function handleChange(event) {
    if (value === undefined) {
      setUncontrolledEmpty(event.target.value === '');
    }
    onChange === null || onChange === void 0 || onChange(event);
  };
  var describedBy = [helpId, errorId].filter(Boolean).join(' ') || undefined;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('soha-select', {
      'soha-select--error': hasError,
      'soha-select--disabled': disabled,
      'soha-select--full': fullWidth
    }, className),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
      className: "soha-select__label",
      htmlFor: fieldId,
      children: [label, required && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        className: "soha-select__required",
        "aria-hidden": "true",
        children: [' ', "*"]
      }, void 0, true)]
    }, void 0, true), helpText && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
      className: "soha-select__help",
      id: helpId,
      children: helpText
    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "soha-select__field",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("select", Object.assign(Object.assign({}, rest), {}, {
        ref: ref,
        id: fieldId,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('soha-select__input', {
          'soha-select__input--placeholder': isEmpty
        }),
        disabled: disabled,
        required: required,
        "aria-invalid": hasError || undefined,
        "aria-describedby": describedBy,
        value: value,
        defaultValue: value === undefined ? defaultValue : undefined,
        onChange: handleChange,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
          value: "",
          children: placeholder
        }, void 0, false), options === null || options === void 0 ? void 0 : options.map(function (option) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
            value: option.value,
            disabled: option.disabled,
            children: option.label
          }, option.value, false);
        }), children]
      }), void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        className: "soha-select__chevron",
        "aria-hidden": "true",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ChevronDownIcon, {}, void 0, false)
      }, void 0, false)]
    }, void 0, true), hasMessage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
      className: "soha-select__error",
      id: errorId,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ErrorIcon, {}, void 0, false), error]
    }, void 0, true)]
  }, void 0, true);
});
Select.displayName = 'Select';
/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./app/javascript/src/Components/TextInput.tsx":
/*!*****************************************************!*\
  !*** ./app/javascript/src/Components/TextInput.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _TextInput_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextInput.scss */ "./app/javascript/src/Components/TextInput.scss");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");

var _excluded = ["label", "helpText", "required", "error", "fullWidth", "className", "id", "type", "disabled"];




var ErrorIcon = function ErrorIcon() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("svg", {
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    focusable: "false",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("path", {
      fill: "currentColor",
      d: "M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0 3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4.5m0 7.5a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8"
    }, void 0, false)
  }, void 0, false);
};
var TextInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (props, ref) {
  var label = props.label,
    helpText = props.helpText,
    _props$required = props.required,
    required = _props$required === void 0 ? false : _props$required,
    error = props.error,
    _props$fullWidth = props.fullWidth,
    fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
    className = props.className,
    id = props.id,
    type = props.type,
    disabled = props.disabled,
    rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);
  var reactId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  var fieldId = id !== null && id !== void 0 ? id : "soha-text-input-".concat(reactId);
  var helpId = helpText ? "".concat(fieldId, "-help") : undefined;
  var hasMessage = Boolean(error) && typeof error !== 'boolean';
  var errorId = hasMessage ? "".concat(fieldId, "-error") : undefined;
  var hasError = Boolean(error);
  var describedBy = [helpId, errorId].filter(Boolean).join(' ') || undefined;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('soha-text-input', {
      'soha-text-input--error': hasError,
      'soha-text-input--disabled': disabled,
      'soha-text-input--full': fullWidth
    }, className),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
      className: "soha-text-input__label",
      htmlFor: fieldId,
      children: [label, required && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        className: "soha-text-input__required",
        "aria-hidden": "true",
        children: [' ', "*"]
      }, void 0, true)]
    }, void 0, true), helpText && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
      className: "soha-text-input__help",
      id: helpId,
      children: helpText
    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", Object.assign(Object.assign({}, rest), {}, {
      ref: ref,
      id: fieldId,
      type: type !== null && type !== void 0 ? type : 'text',
      className: "soha-text-input__input",
      disabled: disabled,
      required: required,
      "aria-invalid": hasError || undefined,
      "aria-describedby": describedBy
    }), void 0, false), hasMessage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
      className: "soha-text-input__error",
      id: errorId,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(ErrorIcon, {}, void 0, false), error]
    }, void 0, true)]
  }, void 0, true);
});
TextInput.displayName = 'TextInput';
/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ }),

/***/ "./app/javascript/src/Hooks/IncomeLimitLookup/consts.ts":
/*!**************************************************************!*\
  !*** ./app/javascript/src/Hooks/IncomeLimitLookup/consts.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BAND_LABELS: function() { return /* binding */ BAND_LABELS; },
/* harmony export */   FORM_DEFAULT: function() { return /* binding */ FORM_DEFAULT; },
/* harmony export */   HOUSEHOLD_SIZE_OPTIONS: function() { return /* binding */ HOUSEHOLD_SIZE_OPTIONS; },
/* harmony export */   INCOME_LIMIT_URL: function() { return /* binding */ INCOME_LIMIT_URL; },
/* harmony export */   PROGRAM_OPTIONS: function() { return /* binding */ PROGRAM_OPTIONS; },
/* harmony export */   RESULT: function() { return /* binding */ RESULT; }
/* harmony export */ });
var FORM_DEFAULT = {
  program: '',
  community: '',
  householdSize: ''
};
var RESULT = {
  found: false,
  program: '',
  community: '',
  householdSize: 0,
  areaName: '',
  limits: {
    extremely_low: 0,
    very_low: 0,
    low: 0
  }
};
var PROGRAM_OPTIONS = [{
  value: 'section_8',
  label: 'Section 8'
}, {
  value: 'mrvp',
  label: 'MRVP'
}];
var BAND_LABELS = {
  extremely_low: 'Extremely Low Income (30% AMI)',
  very_low: 'Very Low Income (50% AMI)',
  low: 'Low Income (80% AMI)'
};

// Point this at a controller action that returns the income-limit dataset as
// JSON, then load it with the shared useJsonData hook.
var INCOME_LIMIT_URL = 'income_limit_data.json';
var HOUSEHOLD_SIZE_OPTIONS = Array.from({
  length: 8
}, function (_, i) {
  return {
    value: String(i + 1),
    label: "".concat(i + 1, " ").concat(i === 0 ? 'person' : 'people')
  };
});

/***/ }),

/***/ "./app/javascript/src/Hooks/IncomeLimitLookup/utils.ts":
/*!*************************************************************!*\
  !*** ./app/javascript/src/Hooks/IncomeLimitLookup/utils.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currencyFormat: function() { return /* binding */ currencyFormat; },
/* harmony export */   lookupIncomeLimit: function() { return /* binding */ lookupIncomeLimit; }
/* harmony export */ });
var currencyFormat = function currencyFormat(value) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });
};

// TODO: replace with a real lookup against the income-limit dataset.
var lookupIncomeLimit = function lookupIncomeLimit(data) {
  return {
    found: false,
    program: data.program,
    community: data.community,
    householdSize: Number(data.householdSize) || 0,
    areaName: '',
    limits: {
      extremely_low: 0,
      very_low: 0,
      low: 0
    }
  };
};

/***/ }),

/***/ "./app/javascript/src/IncomeLimitLookup.tsx":
/*!**************************************************!*\
  !*** ./app/javascript/src/IncomeLimitLookup.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "../node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _Components_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/TextInput */ "./app/javascript/src/Components/TextInput.tsx");
/* harmony import */ var _Components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Select */ "./app/javascript/src/Components/Select.tsx");
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Button */ "./app/javascript/src/Components/Button.tsx");
/* harmony import */ var _Hooks_IncomeLimitLookup_consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Hooks/IncomeLimitLookup/consts */ "./app/javascript/src/Hooks/IncomeLimitLookup/consts.ts");
/* harmony import */ var _Hooks_IncomeLimitLookup_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Hooks/IncomeLimitLookup/utils */ "./app/javascript/src/Hooks/IncomeLimitLookup/utils.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");









var IncomeLimitLookupComponent = function IncomeLimitLookupComponent() {
  var _errors$program, _errors$community, _errors$householdSize;
  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
      defaultValues: _Hooks_IncomeLimitLookup_consts__WEBPACK_IMPORTED_MODULE_6__.FORM_DEFAULT
    }),
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit,
    errors = _useForm.formState.errors;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_Hooks_IncomeLimitLookup_consts__WEBPACK_IMPORTED_MODULE_6__.RESULT),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    result = _useState2[0],
    setResult = _useState2[1];
  var onSubmit = function onSubmit(data) {
    setResult((0,_Hooks_IncomeLimitLookup_utils__WEBPACK_IMPORTED_MODULE_7__.lookupIncomeLimit)(data));
  };
  var resultHtml = function resultHtml() {
    if (!result.found) {
      return;
    }
    var bands = Object.keys(_Hooks_IncomeLimitLookup_consts__WEBPACK_IMPORTED_MODULE_6__.BAND_LABELS);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "container g-0 mt-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h2", {
        className: "h5 fw-bold",
        children: ["Income limits for ", result.areaName]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("table", {
        className: "mt-3 w-100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tbody", {
          children: bands.map(function (band) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                children: _Hooks_IncomeLimitLookup_consts__WEBPACK_IMPORTED_MODULE_6__.BAND_LABELS[band]
              }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                className: "w-25 text-end",
                children: (0,_Hooks_IncomeLimitLookup_utils__WEBPACK_IMPORTED_MODULE_7__.currencyFormat)(result.limits[band])
              }, void 0, false)]
            }, band, true);
          })
        }, void 0, false)
      }, void 0, false)]
    }, void 0, true);
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
      "aria-label": "Income Limit Lookup"
    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "container g-0",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("form", {
        onSubmit: handleSubmit(onSubmit),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "col-lg-4 col-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Components_Select__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign(Object.assign({
              label: "Program"
            }, register('program', {
              required: 'Must be provided'
            })), {}, {
              required: true,
              error: (_errors$program = errors.program) === null || _errors$program === void 0 ? void 0 : _errors$program.message,
              options: _Hooks_IncomeLimitLookup_consts__WEBPACK_IMPORTED_MODULE_6__.PROGRAM_OPTIONS
            }), void 0, false)
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "col-lg-4 col-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Components_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign(Object.assign({
              label: "Community/Town"
            }, register('community', {
              required: 'Must be provided'
            })), {}, {
              required: true,
              type: "text",
              error: (_errors$community = errors.community) === null || _errors$community === void 0 ? void 0 : _errors$community.message
            }), void 0, false)
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "col-lg-4 col-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Components_Select__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign(Object.assign({
              label: "Household size"
            }, register('householdSize', {
              required: 'Must be provided'
            })), {}, {
              required: true,
              error: (_errors$householdSize = errors.householdSize) === null || _errors$householdSize === void 0 ? void 0 : _errors$householdSize.message,
              options: _Hooks_IncomeLimitLookup_consts__WEBPACK_IMPORTED_MODULE_6__.HOUSEHOLD_SIZE_OPTIONS
            }), void 0, false)
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "row mt-3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "col-lg-4 col-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
              type: "submit",
              color: "secondary",
              fullWidth: true,
              className: "mb-3",
              children: "Look up"
            }, void 0, false)
          }, void 0, false)
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false), resultHtml()]
  }, void 0, true);
};
/* harmony default export */ __webpack_exports__["default"] = (IncomeLimitLookupComponent);

/***/ }),

/***/ "./app/javascript/src/Components/Button.scss":
/*!***************************************************!*\
  !*** ./app/javascript/src/Components/Button.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./app/javascript/src/Components/Select.scss":
/*!***************************************************!*\
  !*** ./app/javascript/src/Components/Select.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./app/javascript/src/Components/TextInput.scss":
/*!******************************************************!*\
  !*** ./app/javascript/src/Components/TextInput.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-dom_client_js-node_modules_react_jsx-dev-runtime_js-node_modules_b-b3814f"], function() { return __webpack_exec__("./app/javascript/packs/income_limit_lookup.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=income_limit_lookup.js.map