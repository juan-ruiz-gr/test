"use strict";
(self["webpackChunkma_soha"] = self["webpackChunkma_soha"] || []).push([["affordability_calculator"],{

/***/ "./app/javascript/packs/affordability_calculator.js":
/*!**********************************************************!*\
  !*** ./app/javascript/packs/affordability_calculator.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "../node_modules/react-dom/client.js");
/* harmony import */ var _src_AffordabilityCalculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/AffordabilityCalculator */ "./app/javascript/src/AffordabilityCalculator.tsx");



var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('affordability_calculator_root'));
if (root) {
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_AffordabilityCalculator__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/***/ }),

/***/ "./app/javascript/src/AffordabilityCalculator.tsx":
/*!********************************************************!*\
  !*** ./app/javascript/src/AffordabilityCalculator.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_TextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/TextInput */ "./app/javascript/src/Components/TextInput.tsx");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ "../node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _Components_SelectInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/SelectInput */ "./app/javascript/src/Components/SelectInput.tsx");
/* harmony import */ var _Components_RadioSelectInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/RadioSelectInput */ "./app/javascript/src/Components/RadioSelectInput.tsx");
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Button */ "./app/javascript/src/Components/Button.tsx");
/* harmony import */ var _Hooks_useJsonData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Hooks/useJsonData */ "./app/javascript/src/Hooks/useJsonData.ts");
/* harmony import */ var _Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Hooks/AffordabilityCalculator/consts */ "./app/javascript/src/Hooks/AffordabilityCalculator/consts.ts");
/* harmony import */ var _Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Hooks/AffordabilityCalculator/utils */ "./app/javascript/src/Hooks/AffordabilityCalculator/utils.ts");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var AffordabilityCalculatorComponent = function AffordabilityCalculatorComponent() {
  var _useJsonData = (0,_Hooks_useJsonData__WEBPACK_IMPORTED_MODULE_5__["default"])(_Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_6__.PAYMENT_STANDARD_URL),
    jsonData = _useJsonData.jsonData,
    loading = _useJsonData.loading,
    error = _useJsonData.error;
  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({
      defaultValues: _Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_6__.FORM_DEFAULT
    }),
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit,
    getValues = _useForm.getValues,
    reset = _useForm.reset,
    watch = _useForm.watch,
    errors = _useForm.formState.errors;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_6__.RESULT),
    _useState2 = _slicedToArray(_useState, 2),
    result = _useState2[0],
    setResult = _useState2[1];
  var validateZipCode = function validateZipCode(value) {
    var activePaymentStandard = (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.getActivePaymentStandard)(jsonData || {});
    return activePaymentStandard != undefined && activePaymentStandard[value] != undefined;
  };
  var onSubmit = function onSubmit(data) {
    var activePaymentStandard = (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.getActivePaymentStandard)(jsonData || {});
    if (activePaymentStandard) {
      setResult((0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.getResultForInput)(data, activePaymentStandard));
    }
  };
  var onReset = function onReset() {
    reset();
    setResult(_Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_6__.RESULT);
  };
  var onBack = function onBack() {
    setResult(_Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_6__.RESULT);
  };
  var headerHtml = function headerHtml() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "container pt-3 pb-1 bg-primary text-white"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      className: "h1 font-weight-bold"
    }, "Affordability Calculator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "If you have received a housing voucher through the state-wide Section 8 program, MRVP, or AHVP, use this tool to check what is rent reasonable based on comparable units in the area."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "If your voucher was issued by a Local Housing Authority, you must contact them directly to determine what is rent-reasonable."));
  };
  var tooltipHtml = function tooltipHtml(percent) {
    var conf = {
      left: {
        left: '-13px',
        className: 'text-left',
        colAWidth: percent,
        colBWidth: 'auto'
      },
      center: {
        left: '-50%',
        className: 'text-center',
        colAWidth: percent,
        colBWidth: 'auto'
      },
      right: {
        left: '0%',
        className: 'text-right',
        colAWidth: 'auto',
        colBWidth: percent
      }
    };
    var confIndex = percent < 20 ? 'left' : percent <= 75 ? 'center' : 'right';
    var color = percent <= 30 ? '#33754B' : percent <= 40 ? '#E28400' : '#CD0D0D';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "row ml-0 mr-0 mt-1 flex-nowrap"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "",
      style: {
        width: "".concat(conf[confIndex]['colAWidth'], "%")
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: "".concat(conf[confIndex]['colBWidth'], "%")
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "",
      style: {
        left: conf[confIndex]['left'],
        position: 'relative',
        color: color,
        lineHeight: '1rem'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: conf[confIndex]['className']
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      id: "output_percent_of_income",
      className: "font-weight-bold text-nowrap ".concat(conf[confIndex]['className'])
    }, "".concat(percent, "%"), " of income")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: conf[confIndex]['className']
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      height: "18",
      width: "18",
      id: "triangle-down",
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      stroke: color,
      fill: color,
      d: "M4 8 H28 L16 26 z"
    }))))));
  };
  var barHtml = function barHtml(percent) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: ""
    }, tooltipHtml(percent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "progress",
      style: {
        height: '25px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "progress-bar",
      style: {
        width: '30%',
        background: '#97C2A9'
      },
      role: "progressbar"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "progress-bar",
      style: {
        width: '10%',
        background: '#FBE28D'
      },
      role: "progressbar"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "progress-bar",
      style: {
        width: '60%',
        background: '#EEACAC'
      },
      role: "progressbar"
    })));
  };
  var formHtml = function formHtml() {
    if (!result.type) {
      var _errors$annualIncome, _errors$voucherType, _errors$voucherSize, _errors$zipCode, _errors$unitSize, _errors$monthlyRent;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, headerHtml(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "container mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        onSubmit: handleSubmit(onSubmit)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
        className: "h5 font-weight-bold"
      }, "Tenant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Details about the recipient and voucher. Contact the Regional Administering Agency (RAA) who issued the voucher for the tenant\u2019s Annual Adjusted Gross Income."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col-lg-4 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_TextInput__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        label: "Annual Adjusted Gross Income"
      }, register("annualIncome", {
        required: 'Must be provided'
      }), {
        required: true,
        type: "number",
        error: (_errors$annualIncome = errors.annualIncome) === null || _errors$annualIncome === void 0 ? void 0 : _errors$annualIncome.message
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col-lg-4 col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_SelectInput__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        label: "Voucher Type"
      }, register("voucherType", {
        required: 'Must be provided'
      }), {
        required: true,
        error: (_errors$voucherType = errors.voucherType) === null || _errors$voucherType === void 0 ? void 0 : _errors$voucherType.message,
        options: (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.voucherTypeOptions)()
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col-lg-4 col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_SelectInput__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        label: "Voucher Size"
      }, register("voucherSize", {
        required: 'Must be provided'
      }), {
        required: true,
        error: (_errors$voucherSize = errors.voucherSize) === null || _errors$voucherSize === void 0 ? void 0 : _errors$voucherSize.message,
        options: (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.bedroomOptions)()
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
        className: "h5 font-weight-bold mt-3"
      }, "Property"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Details about the rental property. If you don't have a specific property, just enter the ZIP code of the area you would like to search."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col-lg-4 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_TextInput__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        label: "ZIP code"
      }, register("zipCode", {
        required: 'Must be provided',
        validate: {
          valid: function valid(v) {
            return validateZipCode(v) || 'ZIP code not found';
          }
        }
      }), {
        required: true,
        type: "number",
        error: (_errors$zipCode = errors.zipCode) === null || _errors$zipCode === void 0 ? void 0 : _errors$zipCode.message
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col-lg-4 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_SelectInput__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        label: "Unit size"
      }, register("unitSize", {
        validate: {
          valid: function valid(v) {
            if (!v && getValues('monthlyRent')) return 'Required when Monthly rent is provided';
            return true;
          }
        }
      }), {
        error: (_errors$unitSize = errors.unitSize) === null || _errors$unitSize === void 0 ? void 0 : _errors$unitSize.message,
        options: (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.bedroomOptions)()
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col-lg-4 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_TextInput__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        label: "Monthly rent"
      }, register("monthlyRent", {
        validate: {
          valid: function valid(v) {
            if (!v && getValues('unitSize')) return 'Required when Unit size is provided';
            return true;
          }
        }
      }), {
        type: "number",
        error: (_errors$monthlyRent = errors.monthlyRent) === null || _errors$monthlyRent === void 0 ? void 0 : _errors$monthlyRent.message
      })))), utilitiesHtml(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "row mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col-lg-4 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: jsonData == undefined ? "button" : "submit",
        color: "success",
        className: "ml-0 mr-0 pl-0 pr-0 mb-3 w-100"
      }, jsonData == undefined ? 'Loading data...' : 'Submit'))))));
    }
  };
  var utilitiesHtml = function utilitiesHtml() {
    var voucherType = watch('voucherType');
    if (!voucherType) {
      return;
    }
    var utilities = _Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_6__.PROGRAMS[voucherType]['utilities'];
    var utilityKeys = Object.keys(utilities);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
      className: "h6 font-weight-bold mt-3 mb-3"
    }, "Who pays for the following Utilities?"), utilityKeys.map(function (name) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col-lg-6 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_RadioSelectInput__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
        id: name
      }, register(name, {
        required: 'Must be provided'
      }), {
        options: [{
          value: 'landlord',
          label: 'Landlord'
        }, {
          value: 'tenant',
          label: 'Tenant'
        }],
        label: utilities[name]['label'],
        value: String(watch(name))
      }))));
    }));
  };
  var resultHtml = function resultHtml() {
    if (result.type === 'full') {
      return fullResultHtml();
    } else if (result.type === 'explore') {
      return exploreResultHtml();
    }
  };
  var resultHeader = function resultHeader(limit, title) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, headerHtml(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "container pt-3 pb-3",
      style: {
        background: limit.color
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "row mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
      className: "h5 font-weight-bold text-dark"
    }, "Result"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "row mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "h4 font-weight-bold text-dark",
      id: "limit_title"
    }, title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "row mt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-dark",
      id: "limit_message"
    }, limit.message)))));
  };
  var buttonsHtml = function buttonsHtml() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col-lg-4 col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "reset",
      color: "primary",
      className: "ml-0 mr-0 pl-0 pr-0 mb-3 w-100",
      onClick: onBack
    }, "Go Back")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col-lg-4 col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "reset",
      color: "primary",
      variant: "outline",
      className: "ml-0 mr-0 pl-0 pr-0 mb-3 w-100",
      onClick: onReset
    }, "Reset")));
  };
  var fullResultHtml = function fullResultHtml() {
    var limit = (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.getLimitFor)(result.percentageOfIncome);
    var title = limit.title.replace('{rent}', (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.currencyFormat)(result.rent)).replace('{zipCode}', String(result.zipCode)).replace('{voucherType}', String((0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.voucherTypeLabel)(result.voucherType)));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, resultHeader(limit, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "h5 font-weight-bold mt-3"
    }, "Calculations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "mt-3 w-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Rent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "output_rent"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.currencyFormat)(result.rent))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      className: "border-bottom border-dark"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Utilities"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "output_utilities"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.currencyFormat)(result.utilities))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Total rent + utilities"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "output_rent_plus_utilities"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.currencyFormat)(result.rentPlusUtilities))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      className: "border-bottom border-dark"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Subsidy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "output_subsidy"
    }, "(", (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.currencyFormat)(result.subsidy), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "Estimated tenant share")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "output_estimated_tenant_share"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.currencyFormat)(result.estTenantShare)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "\xA0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Monthly tenant income"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "output_monthly_tenant_income"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.currencyFormat)(result.monthlyIncome))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "output_annual_income",
      colSpan: 2,
      className: "small"
    }, "Calculated from an annual AGI of ", (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.currencyFormat)(result.annualIncome))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "h6 font-weight-bold mt-3 small"
    }, "Estimated tenant share as % of income"), barHtml(Math.round(100 * result.percentageOfIncome)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "small mt-3"
    }, "Calculations are estimates only and subject to the final approval by housing agency staff"), buttonsHtml()));
  };
  var exploreResultHtml = function exploreResultHtml() {
    var limit = (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.getLimitFor)(undefined);
    var title = limit.title.replace('{rent}', (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.currencyFormat)(result.rentPlusUtilities)).replace('{zipCode}', String(result.zipCode)).replace('{voucherType}', String((0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.voucherTypeLabel)(result.voucherType)));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, resultHeader(limit, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "h5 font-weight-bold mt-3"
    }, "Calculations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "mt-3 w-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Tenant share *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "output_estimated_tenant_share"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.currencyFormat)(result.estTenantShare))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      className: "border-bottom border-dark"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Maximum subsidy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "output_subsidy"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.currencyFormat)(result.subsidy))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "Maximum rent and utilities")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "output_rent_plus_utilities"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.currencyFormat)(result.rentPlusUtilities)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      id: "output_percent_of_income",
      className: "small mt-4"
    }, "* Tenant share is calculated as 30% of the tenant\u2019s monthly AGI of ", (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.currencyFormat)(result.monthlyIncome), ". However, the tenant may opt to pay up to 40% of their monthly income for a maximum rent and utilities of ", (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_7__.currencyFormat)(result.maxRentPlusUtilities)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "small mt-4"
    }, "Calculations are estimates only and subject to the final approval by housing agency staff"), buttonsHtml()));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, formHtml(), resultHtml());
};
/* harmony default export */ __webpack_exports__["default"] = (AffordabilityCalculatorComponent);

/***/ }),

/***/ "./app/javascript/src/Components/Button.tsx":
/*!**************************************************!*\
  !*** ./app/javascript/src/Components/Button.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/compact.js");
var _excluded = ["color", "variant"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'primary' : _ref$color,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    props = _objectWithoutProperties(_ref, _excluded);
  var buttonClass = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(['btn', variant === 'default' ? undefined : variant, color]).join('-');
  }, [variant, color]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({}, props, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("btn", buttonClass, props.className)
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./app/javascript/src/Components/RadioSelectInput.tsx":
/*!************************************************************!*\
  !*** ./app/javascript/src/Components/RadioSelectInput.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var RadioSelectInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (_ref, ref) {
  var error = _ref.error,
    hint = _ref.hint,
    label = _ref.label,
    id = _ref.id,
    options = _ref.options,
    name = _ref.name,
    value = _ref.value,
    onChange = _ref.onChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", {
    className: "form-group mb-0 w-100 d-inline-flex",
    id: id
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-label mr-auto font-weight-normal"
  }, label), options.map(function (opt, i) {
    var optId = [id, String(opt.value)].join('_');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "custom-control custom-radio ml-3",
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      className: "form-check-input custom-control-input",
      type: "radio",
      value: opt.value,
      checked: opt.value === value,
      name: name,
      id: optId,
      onChange: onChange,
      ref: ref
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      htmlFor: optId,
      className: "custom-control-label form-check-label font-weight-normal"
    }, opt.label || String(opt.value)));
  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "invalid-feedback d-block"
  }, "Error"), hint && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
    className: "form-text text-muted"
  }, "Hint"));
});
/* harmony default export */ __webpack_exports__["default"] = (RadioSelectInput);

/***/ }),

/***/ "./app/javascript/src/Components/SelectInput.tsx":
/*!*******************************************************!*\
  !*** ./app/javascript/src/Components/SelectInput.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.mjs");
var _excluded = ["label", "required", "id", "error", "options"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var SelectInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (_ref, ref) {
  var label = _ref.label,
    required = _ref.required,
    id = _ref.id,
    error = _ref.error,
    options = _ref.options,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('form-group', 'string', 'form-group-valid', id, {
      required: required
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('string', 'font-weight-normal', {
      required: required
    }),
    htmlFor: id
  }, label, required && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("abbr", {
    className: "text-danger",
    title: "required"
  }, "*"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", _extends({}, props, {
    id: id,
    required: required,
    "aria-required": props['aria-required'] || (required ? 'true' : undefined),
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('form-control', 'x-is-valid', 'string', {
      required: required
    }, props.className),
    ref: ref
  }), options.map(function (opt, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: i,
      value: opt.value
    }, opt.label || opt.value);
  })), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "invalid-feedback",
    style: {
      display: 'inherit'
    }
  }, error));
});
/* harmony default export */ __webpack_exports__["default"] = (SelectInput);

/***/ }),

/***/ "./app/javascript/src/Components/TextInput.tsx":
/*!*****************************************************!*\
  !*** ./app/javascript/src/Components/TextInput.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.mjs");
var _excluded = ["label", "required", "id", "error"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var TextInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (_ref, ref) {
  var label = _ref.label,
    required = _ref.required,
    id = _ref.id,
    error = _ref.error,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('form-group', 'string', 'form-group-valid', id, {
      required: required
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('string', 'font-weight-normal', {
      required: required
    }),
    htmlFor: id
  }, label, required && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("abbr", {
    className: "text-danger",
    title: "required"
  }, "*"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({}, props, {
    id: id,
    required: required,
    "aria-required": props['aria-required'] || (required ? 'true' : undefined),
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('form-control', 'x-is-valid', 'string', {
      required: required
    }, props.className),
    ref: ref
  })), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "invalid-feedback",
    style: {
      display: 'inherit'
    }
  }, error));
});
/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ }),

/***/ "./app/javascript/src/Hooks/AffordabilityCalculator/consts.ts":
/*!********************************************************************!*\
  !*** ./app/javascript/src/Hooks/AffordabilityCalculator/consts.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FORM_DEFAULT": function() { return /* binding */ FORM_DEFAULT; },
/* harmony export */   "LIMITS": function() { return /* binding */ LIMITS; },
/* harmony export */   "PAYMENT_STANDARD_URL": function() { return /* binding */ PAYMENT_STANDARD_URL; },
/* harmony export */   "PREFILLED": function() { return /* binding */ PREFILLED; },
/* harmony export */   "PREFILLED_FORM_DEFAULT": function() { return /* binding */ PREFILLED_FORM_DEFAULT; },
/* harmony export */   "PROGRAMS": function() { return /* binding */ PROGRAMS; },
/* harmony export */   "RESULT": function() { return /* binding */ RESULT; },
/* harmony export */   "SIZES": function() { return /* binding */ SIZES; }
/* harmony export */ });
// if true, pre-fill form with dummy data for development purposes.
var PREFILLED = false;
var PREFILLED_FORM_DEFAULT = {
  annualIncome: 2400,
  voucherType: 'section_8',
  voucherSize: 'one_bedroom',
  zipCode: '01432',
  unitSize: 'one_bedroom',
  monthlyRent: 2200,
  water: 'landlord',
  heat: 'landlord',
  electric: 'landlord',
  cooking: 'landlord',
  hw: 'landlord',
  electricity: 'landlord',
  all: 'landlord'
};
var FORM_DEFAULT = PREFILLED ? PREFILLED_FORM_DEFAULT : {
  annualIncome: undefined,
  voucherType: undefined,
  voucherSize: undefined,
  zipCode: undefined,
  unitSize: undefined,
  monthlyRent: undefined,
  water: 'landlord',
  heat: 'landlord',
  electric: 'landlord',
  cooking: 'landlord',
  hw: 'landlord',
  electricity: 'landlord',
  all: 'landlord'
};
var PAYMENT_STANDARD_URL = 'payment_standard_data.json';
var PROGRAMS = {
  section_8: {
    label: 'Section 8',
    minimumContribution: 50,
    expectedContributionUtilitiesIncludedInRent: 0.3,
    expectedContributionUtilitiesExcludedFromRent: 0.3,
    utilities: {
      heat: {
        label: 'Heat',
        values: {
          sro: 50,
          efficiency: 50,
          one_bedroom: 82,
          two_bedroom: 113,
          three_bedroom: 141,
          four_bedroom: 168,
          five_bedroom: 213,
          six_bedroom: 258,
          seven_bedroom: 303,
          eight_bedroom: 303
        }
      },
      electric: {
        label: 'Electric',
        values: {
          sro: 30,
          efficiency: 30,
          one_bedroom: 33,
          two_bedroom: 34,
          three_bedroom: 35,
          four_bedroom: 36,
          five_bedroom: 37,
          six_bedroom: 38,
          seven_bedroom: 39,
          eight_bedroom: 39
        }
      },
      cooking: {
        label: 'Cooking',
        values: {
          sro: 11,
          efficiency: 11,
          one_bedroom: 16,
          two_bedroom: 20,
          three_bedroom: 25,
          four_bedroom: 31,
          five_bedroom: 36,
          six_bedroom: 36,
          seven_bedroom: 36,
          eight_bedroom: 36
        }
      },
      hw: {
        label: 'HW',
        values: {
          sro: 35,
          efficiency: 35,
          one_bedroom: 39,
          two_bedroom: 62,
          three_bedroom: 76,
          four_bedroom: 97,
          five_bedroom: 111,
          six_bedroom: 111,
          seven_bedroom: 111,
          eight_bedroom: 111
        }
      }
    }
  },
  mrvp: {
    label: 'MRVP',
    minimumContribution: 0,
    expectedContributionUtilitiesIncludedInRent: 0.3,
    expectedContributionUtilitiesExcludedFromRent: 0.3,
    utilities: {
      heat: {
        label: 'Heat',
        values: {
          sro: 23,
          efficiency: 30,
          one_bedroom: 45,
          two_bedroom: 65,
          three_bedroom: 85,
          four_bedroom: 100,
          five_bedroom: 125,
          six_bedroom: 150,
          seven_bedroom: 175,
          eight_bedroom: 175
        }
      },
      electricity: {
        label: 'Electricity',
        values: {
          sro: 12,
          efficiency: 16,
          one_bedroom: 17,
          two_bedroom: 18,
          three_bedroom: 19,
          four_bedroom: 20,
          five_bedroom: 21,
          six_bedroom: 22,
          seven_bedroom: 23,
          eight_bedroom: 23
        }
      }
    }
  }
};
var SIZES = {
  sro: {
    label: 'Single Room Occupancy',
    weight: 0.25
  },
  efficiency: {
    label: 'Studio',
    weight: 0.5
  },
  one_bedroom: {
    label: '1 Bedroom',
    weight: 1
  },
  two_bedroom: {
    label: '2 Bedroom',
    weight: 2
  },
  three_bedroom: {
    label: '3 Bedroom',
    weight: 3
  },
  four_bedroom: {
    label: '4 Bedroom',
    weight: 4
  },
  five_bedroom: {
    label: '5 Bedroom',
    weight: 5
  },
  six_bedroom: {
    label: '6 Bedroom',
    weight: 6
  },
  seven_bedroom: {
    label: '7 Bedroom',
    weight: 7
  },
  eight_bedroom: {
    label: '8 Bedroom',
    weight: 8
  }
};
var LIMITS = [{
  from: 0,
  to: 0.3,
  color: '#D6E7DD',
  title: 'A rent of {rent} is most likely affordable in {zipCode} with an {voucherType} voucher.',
  message: 'The rent is affordable because the tenant’s calculated share of the rent doesn’t exceed 30% of their income.'
}, {
  from: 0.3,
  to: 0.4,
  color: '#FFE8A3',
  title: 'A rent of {rent} might be affordable in {zipCode} with an {voucherType} voucher.',
  message: 'The rent might be affordable because the tenant’s calculated share of the rent is between 30% and 40% of their income.'
}, {
  from: 0.4,
  to: undefined,
  color: '#EEACAC',
  title: 'A rent of {rent} exceeds the maximum allowable rent in {zipCode} with an {voucherType} voucher.',
  message: 'The rent is not affordable because the tenant’s calculated share of the rent exceeds 40% of their income.'
}, {
  from: 0,
  to: 0.4,
  color: '#E8EEF4',
  title: 'A rent of up to {rent} is likely affordable in {zipCode} with an MRVP voucher.',
  message: 'Rent is considered affordable when the tenant’s calculated share of the rent doesn’t exceed 30% of their income.'
}];
var RESULT = {
  rent: 0,
  type: undefined,
  utilities: 0,
  rentPlusUtilities: 0,
  subsidy: 0,
  estTenantShare: 0,
  maxTenantShare: 0,
  monthlyIncome: 0,
  percentageOfIncome: 0,
  annualIncome: 0,
  maxRentPlusUtilities: 0,
  zipCode: '',
  voucherType: 'section_8'
};

/***/ }),

/***/ "./app/javascript/src/Hooks/AffordabilityCalculator/utils.ts":
/*!*******************************************************************!*\
  !*** ./app/javascript/src/Hooks/AffordabilityCalculator/utils.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bedroomOptions": function() { return /* binding */ bedroomOptions; },
/* harmony export */   "currencyFormat": function() { return /* binding */ currencyFormat; },
/* harmony export */   "getActivePaymentStandard": function() { return /* binding */ getActivePaymentStandard; },
/* harmony export */   "getLimitFor": function() { return /* binding */ getLimitFor; },
/* harmony export */   "getMinUnitSize": function() { return /* binding */ getMinUnitSize; },
/* harmony export */   "getResultForInput": function() { return /* binding */ getResultForInput; },
/* harmony export */   "useExploreLogic": function() { return /* binding */ useExploreLogic; },
/* harmony export */   "useFullLogic": function() { return /* binding */ useFullLogic; },
/* harmony export */   "voucherTypeLabel": function() { return /* binding */ voucherTypeLabel; },
/* harmony export */   "voucherTypeOptions": function() { return /* binding */ voucherTypeOptions; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts */ "./app/javascript/src/Hooks/AffordabilityCalculator/consts.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var voucherTypeLabel = function voucherTypeLabel(name) {
  return _consts__WEBPACK_IMPORTED_MODULE_1__.PROGRAMS[name]['label'];
};
var voucherTypeOptions = function voucherTypeOptions() {
  var options = Object.entries(_consts__WEBPACK_IMPORTED_MODULE_1__.PROGRAMS).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      program = _ref2[1];
    return {
      value: name,
      label: program.label
    };
  });
  return [{
    value: '',
    label: 'Select None'
  }].concat(options);
};
var bedroomOptions = function bedroomOptions() {
  var options = Object.entries(_consts__WEBPACK_IMPORTED_MODULE_1__.SIZES).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      name = _ref4[0],
      size = _ref4[1];
    return {
      value: name,
      label: size.label
    };
  });
  return [{
    value: '',
    label: 'Select None'
  }].concat(options);
};
var getMinUnitSize = function getMinUnitSize(unitSize, voucherSize) {
  if (unitSize && _consts__WEBPACK_IMPORTED_MODULE_1__.SIZES[unitSize]['weight'] < _consts__WEBPACK_IMPORTED_MODULE_1__.SIZES[voucherSize]['weight']) {
    return unitSize;
  } else {
    return voucherSize;
  }
};
var getLimitFor = function getLimitFor(percentage) {
  if (percentage === undefined) {
    return _consts__WEBPACK_IMPORTED_MODULE_1__.LIMITS[_consts__WEBPACK_IMPORTED_MODULE_1__.LIMITS.length - 1];
  }
  return _consts__WEBPACK_IMPORTED_MODULE_1__.LIMITS.filter(function (l) {
    return (!l.from || l.from <= percentage) && (!l.to || percentage <= l.to);
  })[0];
};
var currencyFormat = function currencyFormat(value) {
  return "$".concat(new Intl.NumberFormat('en-US').format(Math.round(value)));
};
var getActivePaymentStandard = function getActivePaymentStandard(jsonData) {
  var today = new Date().toISOString();
  var paymentStandard = jsonData || {};
  for (var _i2 = 0, _Object$keys = Object.keys(paymentStandard); _i2 < _Object$keys.length; _i2++) {
    var dateFrom = _Object$keys[_i2];
    for (var _i3 = 0, _Object$keys2 = Object.keys(paymentStandard[dateFrom]); _i3 < _Object$keys2.length; _i3++) {
      var dateTo = _Object$keys2[_i3];
      if (dateFrom <= today && today <= dateTo) {
        return paymentStandard[dateFrom][dateTo];
      }
    }
  }
};
var getResultForInput = function getResultForInput(data, activePaymentStandard) {
  var unitSize = getMinUnitSize(data.unitSize, data.voucherSize);
  var voucherType = data.voucherType;
  var program = _consts__WEBPACK_IMPORTED_MODULE_1__.PROGRAMS[voucherType];
  var _Object$keys3 = Object.keys(activePaymentStandard[data.zipCode]),
    _Object$keys4 = _slicedToArray(_Object$keys3, 1),
    town = _Object$keys4[0];
  var paymentStandardBySize = activePaymentStandard[data.zipCode][town][data.voucherType];
  var paymentStandard = Number(paymentStandardBySize[unitSize]);
  var monthlyIncome = Math.abs(Number(data.annualIncome) / 12);
  var utilities = program['utilities'];
  var utilityKeys = Object.keys(utilities);
  var allUtilitiesIncludedInRent = utilityKeys.map(function (name) {
    return String(data[name]) == 'landlord';
  }).every(Boolean);
  var expectedContribution = allUtilitiesIncludedInRent ? program.expectedContributionUtilitiesIncludedInRent : program.expectedContributionUtilitiesExcludedFromRent;
  var selectedUtilitiesSum = utilityKeys.map(function (name) {
    if (String(data[name]) == 'tenant') {
      return utilities[name]['values'][unitSize];
    } else {
      return 0;
    }
  }).reduce(function (a, b) {
    return a + b;
  }, 0);
  var commonParams = {
    agi: Number(data.annualIncome) || 1,
    paymentStandard: paymentStandard,
    utilityCost: selectedUtilitiesSum,
    expectedContribution: expectedContribution,
    minimumContribution: program.minimumContribution
  };
  if (data.monthlyRent) {
    var result = useFullLogic(_objectSpread(_objectSpread({}, commonParams), {}, {
      rent: Number(data.monthlyRent)
    }));
    return {
      type: 'full',
      //common
      annualIncome: Math.abs(Number(data.annualIncome)),
      zipCode: data.zipCode,
      voucherType: data.voucherType,
      monthlyIncome: monthlyIncome,
      // specific
      subsidy: result.subsidy,
      estTenantShare: result.tenantShare,
      rentPlusUtilities: result.totalRentalCost,
      rent: result.rent,
      utilities: result.utilityCost,
      percentageOfIncome: result.tenantSharePercent,
      // not used
      maxTenantShare: 0,
      maxRentPlusUtilities: 0
    };
  } else {
    var _result = useExploreLogic(commonParams);
    var resultMax = useExploreLogic(_objectSpread(_objectSpread({}, commonParams), {}, {
      allowedContribution: 0.4
    }));
    return {
      type: 'explore',
      //common
      annualIncome: Math.abs(Number(data.annualIncome)),
      zipCode: data.zipCode,
      voucherType: data.voucherType,
      monthlyIncome: monthlyIncome,
      // specific
      subsidy: _result.subsidy,
      estTenantShare: _result.maxTenantShare,
      rentPlusUtilities: _result.maxRent,
      maxTenantShare: resultMax.maxTenantShare,
      maxRentPlusUtilities: resultMax.maxRent,
      // not used
      rent: 0,
      utilities: 0,
      percentageOfIncome: 0
    };
  }
};
var useFullLogic = function useFullLogic(FullParams) {
  var agi = FullParams.agi,
    rent = FullParams.rent,
    paymentStandard = FullParams.paymentStandard,
    utilityCost = FullParams.utilityCost,
    _FullParams$expectedC = FullParams.expectedContribution,
    expectedContribution = _FullParams$expectedC === void 0 ? 0.3 : _FullParams$expectedC,
    _FullParams$minimumCo = FullParams.minimumContribution,
    minimumContribution = _FullParams$minimumCo === void 0 ? 0 : _FullParams$minimumCo;
  var monthlyIncome = agi / 12;
  var totalRentalCost = rent + utilityCost;
  var householdContribution = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.max)([minimumContribution, monthlyIncome * expectedContribution]);
  var voucherPayment = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.min)([rent, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.min)([paymentStandard, totalRentalCost]) - householdContribution]);
  var utilityReimbursement = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.min)([paymentStandard, totalRentalCost]) - householdContribution - voucherPayment;
  var tenantShare = totalRentalCost - voucherPayment - utilityReimbursement;
  var subsidy = voucherPayment + utilityReimbursement;
  var tenantSharePercent = (totalRentalCost - (voucherPayment + utilityReimbursement)) / monthlyIncome;
  var affordable = "no";
  if (tenantSharePercent <= 0.4) affordable = "maybe";
  if (tenantSharePercent <= 0.3) affordable = "yes";
  return {
    affordable: affordable,
    rent: rent,
    utilityCost: utilityCost,
    totalRentalCost: totalRentalCost,
    paymentStandard: paymentStandard,
    subsidy: subsidy,
    tenantShare: tenantShare,
    monthlyIncome: monthlyIncome,
    tenantSharePercent: tenantSharePercent,
    voucherPayment: voucherPayment,
    householdContribution: householdContribution,
    utilityReimbursement: utilityReimbursement
  };
};
var useExploreLogic = function useExploreLogic(ExploreParams) {
  var agi = ExploreParams.agi,
    paymentStandard = ExploreParams.paymentStandard,
    utilityCost = ExploreParams.utilityCost,
    _ExploreParams$expect = ExploreParams.expectedContribution,
    expectedContribution = _ExploreParams$expect === void 0 ? 0.3 : _ExploreParams$expect,
    _ExploreParams$allowe = ExploreParams.allowedContribution,
    allowedContribution = _ExploreParams$allowe === void 0 ? 0.3 : _ExploreParams$allowe,
    _ExploreParams$minimu = ExploreParams.minimumContribution,
    minimumContribution = _ExploreParams$minimu === void 0 ? 0 : _ExploreParams$minimu;
  var monthlyIncome = agi / 12;
  var householdContribution = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.max)([minimumContribution, monthlyIncome * allowedContribution]);
  var maxVoucherPayment = paymentStandard - (0,lodash__WEBPACK_IMPORTED_MODULE_0__.max)([minimumContribution, monthlyIncome * expectedContribution]);
  var maxRent = householdContribution + maxVoucherPayment - utilityCost;
  var maxTenantShare = maxRent - maxVoucherPayment + utilityCost;
  var subsidy = maxVoucherPayment;
  var tenantSharePercent = (maxRent + utilityCost - maxVoucherPayment) / monthlyIncome;
  return {
    maxVoucherPayment: maxVoucherPayment,
    utilityCost: utilityCost,
    paymentStandard: paymentStandard,
    subsidy: subsidy,
    monthlyIncome: monthlyIncome,
    tenantSharePercent: tenantSharePercent,
    householdContribution: householdContribution,
    maxRent: maxRent,
    maxTenantShare: maxTenantShare
  };
};

/***/ }),

/***/ "./app/javascript/src/Hooks/useJsonData.ts":
/*!*************************************************!*\
  !*** ./app/javascript/src/Hooks/useJsonData.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useJsonData = function useJsonData(jsonFilename) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    jsonData = _useState2[0],
    setJsonData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLoading(true);
    $.getJSON(jsonFilename).done(function (data) {
      setJsonData(data);
      setLoading(false);
    }).fail(function (data) {
      setError(data.responseText);
      setJsonData(undefined);
      setLoading(false);
    });
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      jsonData: jsonData,
      loading: loading,
      error: error
    };
  }, [jsonData, loading, error]);
};
/* harmony default export */ __webpack_exports__["default"] = (useJsonData);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_lodash_lodash_js-node_modules_react-dom_client_js-node_modules_clsx_dist-60208b"], function() { return __webpack_exec__("./app/javascript/packs/affordability_calculator.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=affordability_calculator.js.map