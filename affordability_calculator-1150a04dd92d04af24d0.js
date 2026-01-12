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
  root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_AffordabilityCalculator__WEBPACK_IMPORTED_MODULE_2__["default"], null));
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
/* harmony import */ var _Components_UpcomingPaymentStandardAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/UpcomingPaymentStandardAlert */ "./app/javascript/src/Components/UpcomingPaymentStandardAlert.tsx");
/* harmony import */ var _Components_CurrencyTextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/CurrencyTextInput */ "./app/javascript/src/Components/CurrencyTextInput.tsx");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "../node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _Components_SelectInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/SelectInput */ "./app/javascript/src/Components/SelectInput.tsx");
/* harmony import */ var _Components_RadioSelectInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/RadioSelectInput */ "./app/javascript/src/Components/RadioSelectInput.tsx");
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Button */ "./app/javascript/src/Components/Button.tsx");
/* harmony import */ var _Components_Switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/Switch */ "./app/javascript/src/Components/Switch.tsx");
/* harmony import */ var _Hooks_useJsonData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Hooks/useJsonData */ "./app/javascript/src/Hooks/useJsonData.ts");
/* harmony import */ var _Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Hooks/AffordabilityCalculator/consts */ "./app/javascript/src/Hooks/AffordabilityCalculator/consts.ts");
/* harmony import */ var _Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Hooks/AffordabilityCalculator/utils */ "./app/javascript/src/Hooks/AffordabilityCalculator/utils.ts");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }












var AffordabilityCalculatorComponent = function AffordabilityCalculatorComponent() {
  var _useJsonData = (0,_Hooks_useJsonData__WEBPACK_IMPORTED_MODULE_9__["default"])(_Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_10__.PAYMENT_STANDARD_URL),
    jsonData = _useJsonData.jsonData,
    loading = _useJsonData.loading,
    error = _useJsonData.error;
  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
      defaultValues: _Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_10__.FORM_DEFAULT
    }),
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit,
    setValue = _useForm.setValue,
    reset = _useForm.reset,
    watch = _useForm.watch,
    errors = _useForm.formState.errors;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_10__.RESULT),
    _useState2 = _slicedToArray(_useState, 2),
    result = _useState2[0],
    setResult = _useState2[1];
  var validateZipCode = function validateZipCode(value) {
    var activePaymentStandard = getActivePaymentStandard();
    return activePaymentStandard != undefined && activePaymentStandard[value] != undefined;
  };
  var onProgramChange = function onProgramChange(event) {
    var program = event.target.value;
    setPaymentStandardData(program);
    setValue('voucherType', program);
  };
  var onSubmit = function onSubmit(data) {
    var activePaymentStandard = getActivePaymentStandard();
    if (activePaymentStandard) {
      setResult((0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.getResultForInput)(data, activePaymentStandard));
    } else {
      sentryError('No payment standard data available on submit', data);
    }
  };
  var useMaxIncomePercentChange = function useMaxIncomePercentChange(event) {
    var _event$target;
    setValue('useMaxIncomePercent', event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.checked);
    handleSubmit(onSubmit)();
  };
  var useUpcomingPaymentStandardChange = function useUpcomingPaymentStandardChange(event) {
    var _event$target2;
    setValue('useUpcomingPaymentStandard', event === null || event === void 0 || (_event$target2 = event.target) === null || _event$target2 === void 0 ? void 0 : _event$target2.checked);
  };
  var getActivePaymentStandard = function getActivePaymentStandard() {
    var _paymentStandardData, _paymentStandardData2, _paymentStandardData3;
    var paymentStandardData = watch('paymentStandardData');
    // If not set, refresh.
    if (((_paymentStandardData = paymentStandardData) === null || _paymentStandardData === void 0 ? void 0 : _paymentStandardData.upcoming) == undefined && ((_paymentStandardData2 = paymentStandardData) === null || _paymentStandardData2 === void 0 ? void 0 : _paymentStandardData2.current) == undefined) {
      paymentStandardData = setPaymentStandardData(watch('voucherType'));
    }
    // return upcoming or current.
    if (watch('useUpcomingPaymentStandard') && ((_paymentStandardData3 = paymentStandardData) === null || _paymentStandardData3 === void 0 ? void 0 : _paymentStandardData3.upcomingStartDate) !== undefined) {
      var _paymentStandardData4;
      return (_paymentStandardData4 = paymentStandardData) === null || _paymentStandardData4 === void 0 ? void 0 : _paymentStandardData4.upcoming;
    } else {
      var _paymentStandardData5;
      return (_paymentStandardData5 = paymentStandardData) === null || _paymentStandardData5 === void 0 ? void 0 : _paymentStandardData5.current;
    }
  };
  var setPaymentStandardData = function setPaymentStandardData(program) {
    var paymentStandardData = (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.getPaymentStandardData)(jsonData || {}, program);
    setValue('paymentStandardData', paymentStandardData);
    return paymentStandardData;
  };
  var setExploreMode = function setExploreMode() {
    setValue('mode', 'explore');
    var utilities = _Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_10__.PROGRAMS[watch('voucherType')]['utilities'];
    var utilityKeys = Object.keys(utilities);
    utilityKeys.forEach(function (name) {
      setValue(name, 'landlord');
    });
    handleSubmit(onSubmit)();
  };
  var toggleExplanation = function toggleExplanation() {
    setValue('showExplanation', !watch('showExplanation'));
  };
  var onReset = function onReset() {
    reset();
    setResult(_Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_10__.RESULT);
  };
  var onBack = function onBack() {
    setValue('useMaxIncomePercent', false);
    setResult(_Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_10__.RESULT);
  };
  var sentryError = function sentryError(message, info) {
    try {
      console.error(message, info);
      // @ts-ignore
      Sentry.captureMessage(message, {
        extra: info,
        level: Sentry.Severity.Error
      });
    } catch (err) {
      console.error(err);
    }
  };
  var barHtml = function barHtml() {
    var total = result.subsidy + result.estTenantShare;
    var voucherPercent = Math.round(100 * result.subsidy / total);
    var sharePercent = 100 - voucherPercent;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "progress",
      style: {
        height: '25px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "progress-bar",
      "aria-label": "Share Percent",
      style: {
        width: "".concat(sharePercent, "%"),
        background: '#333333',
        lineHeight: 'normal',
        color: '#FFFFFF',
        fontSize: 'initial'
      },
      role: "progressbar"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "progress-bar",
      "aria-label": "Voucher Percent",
      style: {
        width: "".concat(voucherPercent, "%"),
        background: '#E8EEF4',
        lineHeight: 'normal',
        color: '#333333',
        fontSize: 'initial'
      },
      role: "progressbar"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "pt-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      viewBox: "0 0 302 8",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M1 0V2C1 3.10457 1.89543 4 3 4H151C208.903 4 241.66 4 298.983 4C300.088 4 301 3.10457 301 2V0",
      stroke: "black",
      vectorEffect: "non-scaling-stroke"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      x1: "151.5",
      y1: "4",
      x2: "151.5",
      y2: "8",
      stroke: "black",
      strokeWidth: "1px",
      vectorEffect: "non-scaling-stroke"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-center mt-2"
    }, "Gross Rent: ", (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.rentPlusUtilities)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "d-flex flex-row mt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: '25px',
        height: '25px',
        background: '#333333'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "ms-2"
    }, "Tenant Share: ", (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.estTenantShare))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "d-flex flex-row mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: '25px',
        height: '25px',
        background: '#E8EEF4'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "ms-2"
    }, "Voucher Payment: ", (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.subsidy)))));
  };
  var submitElementHtml = function submitElementHtml() {
    var _watch;
    if (!watch('mode')) {
      return;
    }
    var upcomingStartDate = (_watch = watch('paymentStandardData')) === null || _watch === void 0 ? void 0 : _watch.upcomingStartDate;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "row mt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col-lg-12 col-12 g-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_UpcomingPaymentStandardAlert__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      show: upcomingStartDate !== undefined,
      upcomingStartDate: upcomingStartDate
    }, register("useUpcomingPaymentStandard"), {
      onChange: useUpcomingPaymentStandardChange,
      checked: watch("useUpcomingPaymentStandard")
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "row mt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col-lg-4 col-12 g-0"
    }, error, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: loading ? "button" : "submit",
      color: "success",
      className: "ms-0 me-0 pl-0 pr-0 mb-3 w-100"
    }, loading ? 'Loading data...' : 'Submit'))));
  };
  var exploreFormElementsHtml = function exploreFormElementsHtml() {
    var _errors$zipCode;
    if (watch('mode') !== 'explore') {
      return;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
      className: "h5 fw-bold mt-3"
    }, "Location Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "mt-3"
    }, "Details about where you\u2019re looking."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
      type: "text",
      error: (_errors$zipCode = errors.zipCode) === null || _errors$zipCode === void 0 ? void 0 : _errors$zipCode.message
    })))));
  };
  var fullFormElementsHtml = function fullFormElementsHtml() {
    var _errors$zipCode2, _errors$unitSize, _errors$monthlyRent;
    if (watch('mode') !== 'full') {
      return;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
      className: "h5 fw-bold mt-3"
    }, "Apartment Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Details about the apartment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
      type: "text",
      error: (_errors$zipCode2 = errors.zipCode) === null || _errors$zipCode2 === void 0 ? void 0 : _errors$zipCode2.message
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col-lg-4 col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_SelectInput__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
      label: "Bedrooms"
    }, register("unitSize", {
      required: 'Must be provided'
    }), {
      required: true,
      error: (_errors$unitSize = errors.unitSize) === null || _errors$unitSize === void 0 ? void 0 : _errors$unitSize.message,
      options: (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.bedroomOptions)()
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col-lg-4 col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_CurrencyTextInput__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
      label: "Monthly rent"
    }, register("monthlyRent", {
      required: 'Must be provided'
    }), {
      required: true,
      min: 0,
      step: 50,
      error: (_errors$monthlyRent = errors.monthlyRent) === null || _errors$monthlyRent === void 0 ? void 0 : _errors$monthlyRent.message,
      value: watch("monthlyRent"),
      setValue: setValue
    })))), utilitiesHtml());
  };
  var formHtml = function formHtml() {
    if (!result.type) {
      var _errors$annualIncome, _errors$voucherType, _errors$voucherSize;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "container g-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        onSubmit: handleSubmit(onSubmit)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
        className: "h5 fw-bold"
      }, "Voucher and Income Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Contact the Housing Agency who issued the voucher for your Annual Adjusted Income."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col-lg-4 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_CurrencyTextInput__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
        label: "Annual Adjusted Income"
      }, register("annualIncome", {
        required: 'Must be provided'
      }), {
        required: true,
        min: 0,
        step: 100,
        error: (_errors$annualIncome = errors.annualIncome) === null || _errors$annualIncome === void 0 ? void 0 : _errors$annualIncome.message,
        value: watch("annualIncome"),
        setValue: setValue
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col-lg-4 col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_SelectInput__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
        label: "Program"
      }, register("voucherType", {
        required: 'Must be provided'
      }), {
        required: true,
        error: (_errors$voucherType = errors.voucherType) === null || _errors$voucherType === void 0 ? void 0 : _errors$voucherType.message,
        onChange: onProgramChange,
        options: (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.voucherTypeOptions)()
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col-lg-4 col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_SelectInput__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
        label: "Voucher Size"
      }, register("voucherSize", {
        required: 'Must be provided'
      }), {
        required: true,
        error: (_errors$voucherSize = errors.voucherSize) === null || _errors$voucherSize === void 0 ? void 0 : _errors$voucherSize.message,
        options: (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.bedroomOptions)()
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "row mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
        className: "h6 fw-bold mt-3"
      }, "Are you looking at a specific apartment or just exploring a general area?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_RadioSelectInput__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
        id: "mode"
      }, register('mode', {
        required: 'Must be provided'
      }), {
        options: [{
          value: 'full',
          label: 'I’m looking at a specific apartment'
        }, {
          value: 'explore',
          label: 'I’m exploring an area'
        }],
        label: "",
        optionClassName: "mt-2",
        value: watch('mode')
      })))), fullFormElementsHtml(), exploreFormElementsHtml(), submitElementHtml())));
    }
  };
  var utilitiesHtml = function utilitiesHtml() {
    var voucherType = watch('voucherType');
    if (!voucherType) {
      return;
    }
    var utilities = _Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_10__.PROGRAMS[voucherType]['utilities'];
    var utilityKeys = Object.keys(utilities);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
      className: "h6 fw-bold mt-3 mb-3"
    }, "Who pays for the following Utilities?"), utilityKeys.map(function (name) {
      if (!utilities[name].visible) {
        return;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col-lg-6 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_RadioSelectInput__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
        className: "d-inline-flex",
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
    var mode = watch('mode');
    if (!result.type || !mode) {
      return;
    } else if (mode == 'full') {
      return fullResultHtml();
    } else if (mode == 'explore') {
      return exploreResultHtml();
    }
  };
  var exploreExplanationHtml = function exploreExplanationHtml() {
    if (!watch('showExplanation')) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "container py-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        className: "text-primary",
        role: "button",
        onClick: toggleExplanation,
        id: "showExplanation"
      }, "Show explanation"));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "container mt-3 mb-3 py-3",
      style: {
        background: '#F6F6F6'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "pb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "text-primary",
      role: "button",
      onClick: toggleExplanation
    }, "Hide explanation")), exploreTenantShareTableHtml(), exploreMaxRentHtml());
  };
  var exploreTenantShareTableHtml = function exploreTenantShareTableHtml() {
    var message = "Your share of housing costs, as the tenant, is 30% of your monthly adjusted gross income.";
    if (result.affordable == 'minimumContributionExpected' && _Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_10__.PROGRAMS[result.voucherType].minimumContribution > 0) {
      message = "Your share of housing costs, as the tenant, the greater of 30% of your monthly adjusted gross income, or ".concat(result.estTenantShare, ", the minimum payment for ").concat((0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.voucherTypeLabel)(result.voucherType), " vouchers.");
    }
    var tenantSharetable = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "mt-3 w-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "fw-bold"
    }, "Tenant Share"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "fw-bold w-25 text-end",
      id: "outputTenantShare"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.estTenantShare))))));
    if (watch('useMaxIncomePercent')) {
      tenantSharetable = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
        className: "mt-3 w-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        className: ""
      }, "Tenant 30% of monthly income"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        className: "w-25 text-end"
      }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(Math.round(0.3 * result.monthlyIncome)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        className: "border-bottom border-dark"
      }, "Additional 10% of monthly income"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        className: "border-bottom border-dark w-25 text-end"
      }, "+", (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(Math.round(0.1 * result.monthlyIncome)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        className: "fw-bold"
      }, "Tenant Share"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        className: "fw-bold w-25 text-end",
        id: "outputTenantShare"
      }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.estTenantShare))))));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "mt-2"
    }, message), tenantSharetable);
  };
  var exploreMaxRentHtml = function exploreMaxRentHtml() {
    var explainer = ["The voucher pays for the difference between", result.affordable == 'minimumContributionExpected' ? "the minimum tenant payment," : "30% of your income,", "and the gross rent up to the payment standard.", "The payment standard is calculated based on the voucher size of ".concat(_Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_10__.SIZES[result.unitSize].weight), "and a zip code of ".concat(result.zipCode, " (").concat((0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.paymentStandard), ").")].join(' ');
    var fortyPercentMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
    if (watch('useMaxIncomePercent')) {
      fortyPercentMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "mt-4"
      }, "You may opt to pay an additional 10% of your income to make up the difference for rents that exceed the payment standard.");
    }
    var exploreVoucherTable = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "mt-3 w-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "fw-bold"
    }, "Maximum rent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "fw-bold w-25 text-end",
      id: "outputMaximumRent"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.landlordPaysUtilitiesMaxRent))))));
    if (watch('useMaxIncomePercent')) {
      exploreVoucherTable = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
        className: "mt-3 w-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        className: ""
      }, "Maximum rent at 30% income"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        className: "w-25 text-end"
      }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.landlordPaysUtilitiesMaxRent - Math.round(0.1 * result.monthlyIncome)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        className: "border-bottom border-dark"
      }, "Additional 10% of monthly income"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        className: "border-bottom border-dark w-25 text-end"
      }, "+", (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(Math.round(0.1 * result.monthlyIncome)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        className: "fw-bold"
      }, "Maximum rent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        className: "fw-bold w-25 text-end",
        id: "outputMaximumRent"
      }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.landlordPaysUtilitiesMaxRent))))));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "mt-4"
    }, explainer), fortyPercentMessage, exploreVoucherTable, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "mt-4"
    }, "If you, the tenant, are responsible for utilities, the estimated cost are subtracted from the maximum rent."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "mt-3 w-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: ""
    }, "Maximum rent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "w-25 text-end"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.landlordPaysUtilitiesMaxRent))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "border-bottom border-dark"
    }, "Maximum estimated utilities"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "border-bottom border-dark w-25 text-end",
      id: "outputUtilities"
    }, "-", (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.estimatedHighestUtilityDeduction))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "fw-bold"
    }, "Maximum rent with tenant paying all utilities"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "fw-bold w-25 text-end",
      id: "outputMaximumRentPayingUtilities"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.tenantPaysUtilitiesMaxRent))))));
  };
  var explanationHtml = function explanationHtml() {
    if (!watch('showExplanation')) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "container py-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        className: "text-primary",
        role: "button",
        onClick: toggleExplanation,
        id: "showExplanation"
      }, "Show explanation"));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "container mt-3 mb-3 py-3",
      style: {
        background: '#F6F6F6'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "pb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "text-primary",
      role: "button",
      onClick: toggleExplanation
    }, "Hide explanation")), grossRentHtml(), voucherPaymentHtml(), tenantShareTableHtml(), tenantShareWithoutVoucherHtml(), barHtml());
  };
  var grossRentHtml = function grossRentHtml() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "mt-2"
    }, "Gross rent represents your estimated total cost of housing paid for this unit."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "mt-3 w-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: ""
    }, "Rent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "w-25 text-end",
      id: "outputRent"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.rent))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "border-bottom border-dark"
    }, "Estimated utilities"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "border-bottom border-dark w-25 text-end",
      id: "outputUtilities"
    }, "+", (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.utilities))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "fw-bold"
    }, "Gross rent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "fw-bold w-25 text-end",
      id: "outputGrossRent"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.rentPlusUtilities))))));
  };
  var voucherPaymentHtml = function voucherPaymentHtml() {
    if (result.affordable == 'affordableWithoutVoucher') {
      return;
    }
    var firstRowLabel = 'Gross Rent';
    var firstRowValue = result.rentPlusUtilities;
    if (result.rentPlusUtilities > result.paymentStandard) {
      firstRowLabel = 'Payment standard';
      firstRowValue = result.paymentStandard;
    }
    var secondRowLabel = "Tenant 30% of monthly income";
    // TODO: calculation should live on the result
    var secondRowValue = Math.max(result.monthlyIncome * 0.3, _Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_10__.PROGRAMS[result.voucherType].minimumContribution);
    if (result.affordable == 'minimumContributionExpected') {
      secondRowLabel = "Minimum tenant payment";
    }
    var explainer = ["The voucher pays for the difference between", result.affordable == 'minimumContributionExpected' ? "the minimum tenant payment," : "30% of your income,", "and the gross rent up to the payment standard.", "The payment standard is calculated based on the voucher size of ".concat(_Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_10__.SIZES[result.unitSize].weight), "and a zip code of ".concat(result.zipCode, " (").concat((0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.paymentStandard), ").")].join(' ');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "mt-4"
    }, explainer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "mt-2 w-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: ""
    }, firstRowLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "w-25 text-end",
      id: "outputFirstRow"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(firstRowValue))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "border-bottom border-dark"
    }, secondRowLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "border-bottom border-dark text-end",
      id: "outputSecondRow"
    }, "-", (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(secondRowValue))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "fw-bold"
    }, "Voucher Payment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "fw-bold text-end",
      id: "outputVoucherPayment"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.subsidy))))));
  };
  var tenantShareWithoutVoucherHtml = function tenantShareWithoutVoucherHtml() {
    if (result.affordable != 'affordableWithoutVoucher') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "mt-4"
    }, "You can afford this unit without a voucher"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "mt-3 w-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "border-bottom border-dark"
    }, "Tenant 30% of monthly income"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "border-bottom border-dark w-25 text-end"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(Math.round(0.3 * result.monthlyIncome)), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "fw-bold"
    }, "Tenant Share"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "fw-bold w-25 text-end",
      id: "outputTenantShare"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.estTenantShare))))));
  };
  var tenantShareTableHtml = function tenantShareTableHtml() {
    if (result.affordable == 'affordableWithoutVoucher') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
    }
    var message = ["Your share of housing costs will be ", result.affordable == 'minimumContributionExpected' ? "".concat((0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.estTenantShare), ", the minimum payment for a ").concat((0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.voucherTypeLabel)(result.voucherType), " voucher") : '30% of your monthly adjusted gross income', result.rentPlusUtilities > result.paymentStandard ? ', plus any housing cost that exceeds the payment standard.' : '.'].join('');
    var fontColorClass = Math.round(100 * result.percentageOfIncome) > 40 ? 'text-danger' : '';
    var percentMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "mt-3 w-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "fw-bold ".concat(fontColorClass)
    }, "Tenant share as % of monthly income"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "fw-bold w-25 ".concat(fontColorClass, " text-end"),
      id: "outputTenantSharePercentage"
    }, Math.round(100 * result.percentageOfIncome), "%"))));
    if (result.affordable == 'minimumContributionExpected') {
      percentMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "mt-4"
    }, message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "mt-3 w-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: ""
    }, "Gross Rent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "w-25 text-end"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.rentPlusUtilities))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "border-bottom border-dark"
    }, "Voucher Payment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "border-bottom border-dark w-25 text-end"
    }, "-", (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.subsidy), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "fw-bold"
    }, "Tenant Share"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "fw-bold w-25 text-end",
      id: "outputTenantShare"
    }, (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.estTenantShare))))), percentMessage);
  };
  var resultHeader = function resultHeader(title) {
    var limit = (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.getLimitFor)(result);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "container pt-3 pb-3",
      style: {
        background: limit.color
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "row mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
      className: "h5 fw-bold text-dark"
    }, "Result"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "row mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "h3 fw-bold text-dark",
      id: "title"
    }, title))), estimatedShareHtml()));
  };
  var estimatedShareHtml = function estimatedShareHtml() {
    var limit = (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.getLimitFor)(result);
    var minimum = _Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_10__.PROGRAMS[result.voucherType].minimumContribution;
    if (limit.estimatedRentMessage && (result.affordable === 'affordableWithoutVoucher' || result.affordable === 'affordableWithVoucher' || result.affordable === 'maybeAffordableWithVoucher' || result.affordable == "minimumContributionExpected")) {
      var message = limit.estimatedRentMessage.replace('{tenantShare}', (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.estTenantShare)).replace('{minRent}', (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(minimum)).replace('{voucherType}', String((0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.voucherTypeLabel)(result.voucherType)));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "row mt-4 mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "h4 fw-bold text-dark",
        id: "estimatedRentMessage"
      }, message)));
    }
  };
  var buttonsHtml = function buttonsHtml() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col-lg-4 col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "reset",
      color: "primary",
      className: "ms-0 me-0 pl-0 pr-0 mb-3 w-100",
      onClick: onBack
    }, "Edit Your Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col-lg-4 col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "reset",
      color: "primary",
      variant: "outline",
      className: "ms-0 me-0 pl-0 pr-0 mb-3 w-100",
      onClick: onReset
    }, "Reset")));
  };
  var fullResultHtml = function fullResultHtml() {
    var limit = (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.getLimitFor)(result);
    var title = limit.title.replace('{rent}', (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.rent)).replace('{zipCode}', String(result.zipCode)).replace('{voucherType}', String((0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.voucherTypeLabel)(result.voucherType))).replace('{bedroomSize}', _Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_10__.SIZES[result.unitSize].label.toLowerCase().replace(' ', '-'));
    var minimum = _Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_10__.PROGRAMS[result.voucherType].minimumContribution;
    var affordableMessage = limit.affordableMessage.replace('{minRent}', (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(minimum)).replace('{voucherType}', String((0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.voucherTypeLabel)(result.voucherType)));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, resultHeader(title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "row mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-dark",
      id: "affordableMessage"
    }, affordableMessage)))), explanationHtml(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "row mb-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-dark"
    }, "Calculations are estimates only and subject to the final approval by housing agency staff. All rents must be found reasonable compared to other market rents in the area."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "pb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "text-primary",
      role: "button",
      onClick: setExploreMode
    }, "Explore: what is the maximum affordable rent covered by this voucher in ", result.zipCode, "?")), buttonsHtml()));
  };
  var willingToPayToggle = function willingToPayToggle() {
    if (result.affordable == 'minimumContributionExpected') {
      return;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Switch__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
      className: "mt-3",
      label: "I\u2019m willing to pay up to 40% of my income in rent."
    }, register("useMaxIncomePercent"), {
      id: "useMaxIncomePercent",
      onChange: useMaxIncomePercentChange
    })));
  };
  var exploreResultHtml = function exploreResultHtml() {
    var limit = (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.getLimitFor)(result);
    var title = limit.title.replace('{maxRentFrom}', (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.tenantPaysUtilitiesMaxRent)).replace('{maxRentTo}', (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.landlordPaysUtilitiesMaxRent)).replace('{rent}', (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(result.tenantPaysUtilitiesMaxRent)).replace('{bedroomSize}', _Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_10__.SIZES[result.unitSize].label.toLowerCase().replace(' ', '-')).replace('{zipCode}', String(result.zipCode)).replace('{voucherType}', String((0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.voucherTypeLabel)(result.voucherType)));
    var minimum = _Hooks_AffordabilityCalculator_consts__WEBPACK_IMPORTED_MODULE_10__.PROGRAMS[result.voucherType].minimumContribution;
    var affordableMessage = limit.affordableMessage.replace('{minRent}', (0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.currencyFormat)(minimum)).replace('{voucherType}', String((0,_Hooks_AffordabilityCalculator_utils__WEBPACK_IMPORTED_MODULE_11__.voucherTypeLabel)(result.voucherType)));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, resultHeader(title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "row mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-dark",
      id: "affordableMessage"
    }, affordableMessage)))), exploreExplanationHtml(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "container"
    }, willingToPayToggle(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "row mb-5 mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-dark"
    }, "Calculations are estimates only and subject to the final approval by housing agency staff. All rents must be found reasonable compared to other market rents in the area."))), buttonsHtml()));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    "aria-label": "Affordability Calculator"
  }), formHtml(), resultHtml());
};
/* harmony default export */ __webpack_exports__["default"] = (AffordabilityCalculatorComponent);

/***/ }),

/***/ "./app/javascript/src/Components/Alert.tsx":
/*!*************************************************!*\
  !*** ./app/javascript/src/Components/Alert.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Alert: function() { return /* binding */ Alert; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["variant", "dismissible", "fade", "show", "onClose", "className", "children", "icon", "showCloseButton", "closeButtonText"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }

/**
 * Bootstrap Alert Component
 *
 * A flexible alert component that supports all Bootstrap alert variants,
 * dismissible functionality, and custom styling.
 *
 * @example
 * ```tsx
 * // Basic alert
 * <Alert variant="success">
 *   This is a success alert!
 * </Alert>
 *
 * // Dismissible alert
 * <Alert variant="warning" dismissible onClose={() => console.log('Alert closed')}>
 *   This alert can be dismissed.
 * </Alert>
 *
 * // Alert with icon
 * <Alert variant="info" icon={<i className="fas fa-info-circle" />}>
 *   This alert has an icon.
 * </Alert>
 * ```
 */
var Alert = function Alert(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
    _ref$dismissible = _ref.dismissible,
    dismissible = _ref$dismissible === void 0 ? false : _ref$dismissible,
    _ref$fade = _ref.fade,
    fade = _ref$fade === void 0 ? true : _ref$fade,
    _ref$show = _ref.show,
    show = _ref$show === void 0 ? true : _ref$show,
    onClose = _ref.onClose,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    children = _ref.children,
    icon = _ref.icon,
    _ref$showCloseButton = _ref.showCloseButton,
    showCloseButton = _ref$showCloseButton === void 0 ? true : _ref$showCloseButton,
    _ref$closeButtonText = _ref.closeButtonText,
    closeButtonText = _ref$closeButtonText === void 0 ? '×' : _ref$closeButtonText,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(show),
    _useState2 = _slicedToArray(_useState, 2),
    isVisible = _useState2[0],
    setIsVisible = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isFading = _useState4[0],
    setIsFading = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsVisible(show);
  }, [show]);
  var handleClose = function handleClose() {
    if (fade) {
      setIsFading(true);
      // Wait for fade animation to complete before hiding
      setTimeout(function () {
        setIsVisible(false);
        setIsFading(false);
        onClose === null || onClose === void 0 || onClose();
      }, 150); // Bootstrap fade duration
    } else {
      setIsVisible(false);
      onClose === null || onClose === void 0 || onClose();
    }
  };
  if (!isVisible) {
    return null;
  }
  var alertClasses = ['alert', "alert-".concat(variant), dismissible ? 'alert-dismissible' : '', fade && isFading ? 'fade' : '', fade && !isFading ? 'show' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    className: alertClasses,
    role: "alert"
  }, props), icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "me-2"
  }, icon), children, dismissible && showCloseButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn-close",
    "aria-label": "Close",
    onClick: handleClose
  }, closeButtonText));
};
/* harmony default export */ __webpack_exports__["default"] = (Alert);

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
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }



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

/***/ "./app/javascript/src/Components/CurrencyTextInput.tsx":
/*!*************************************************************!*\
  !*** ./app/javascript/src/Components/CurrencyTextInput.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react_currency_input_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-currency-input-field */ "../node_modules/react-currency-input-field/dist/index.esm.js");
var _excluded = ["label", "required", "id", "error", "setValue"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }




// Define custom props for your CurrencyInput component

//} & Omit<ReactCurrencyInputProps, 'onChange'>; // Omit 'onChange' as it uses 'onValueChange'

// CurrencyTextInput component using forwardRef
var CurrencyTextInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (_ref, ref) {
  var label = _ref.label,
    required = _ref.required,
    id = _ref.id,
    error = _ref.error,
    setValue = _ref.setValue,
    props = _objectWithoutProperties(_ref, _excluded);
  id = id !== null && id !== void 0 ? id : (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  var handleOnValueChange = function handleOnValueChange(_value, name, values) {
    setValue(name, values === null || values === void 0 ? void 0 : values["float"]);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('form-group', 'string', 'form-group-valid', id, {
      required: required
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('string', 'fw-normal', {
      required: required
    }),
    htmlFor: id
  }, label, required && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("abbr", {
    className: "text-danger",
    title: "required"
  }, "*"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_currency_input_field__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    id: id,
    prefix: "$ ",
    required: required,
    "aria-required": props['aria-required'] || (required ? 'true' : undefined),
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('form-control', 'x-is-valid', 'string', {
      required: required
    }, props.className),
    value: props.value,
    onValueChange: handleOnValueChange,
    ref: ref,
    allowNegativeValue: false,
    intlConfig: {
      locale: 'en-US'
    },
    step: props.step
  })), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "invalid-feedback",
    style: {
      display: 'inherit'
    }
  }, error));
});
/* harmony default export */ __webpack_exports__["default"] = (CurrencyTextInput);

/***/ }),

/***/ "./app/javascript/src/Components/RadioSelectInput.tsx":
/*!************************************************************!*\
  !*** ./app/javascript/src/Components/RadioSelectInput.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.mjs");


var RadioSelectInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (_ref, ref) {
  var error = _ref.error,
    hint = _ref.hint,
    label = _ref.label,
    id = _ref.id,
    options = _ref.options,
    name = _ref.name,
    value = _ref.value,
    className = _ref.className,
    optionClassName = _ref.optionClassName,
    onChange = _ref.onChange;
  id !== null && id !== void 0 ? id : id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('form-group', 'mb-0', 'w-100', className),
    id: id
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-label me-auto fw-normal"
  }, label), options.map(function (opt, i) {
    var optId = [id, String(opt.value)].join('_');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('form-check', 'custom-radio', 'ms-3', optionClassName),
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      className: "form-check-input form-check-input",
      type: "radio",
      value: opt.value,
      checked: opt.value === value,
      name: name,
      id: optId,
      onChange: onChange,
      ref: ref
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      htmlFor: optId,
      className: "form-check-label form-check-label fw-normal"
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
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }


var SelectInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (_ref, ref) {
  var label = _ref.label,
    required = _ref.required,
    id = _ref.id,
    error = _ref.error,
    options = _ref.options,
    props = _objectWithoutProperties(_ref, _excluded);
  id !== null && id !== void 0 ? id : id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('form-group', 'string', 'form-group-valid', id, {
      required: required
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('string', 'fw-normal', {
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
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('form-control', 'form-select', 'x-is-valid', 'string', {
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

/***/ "./app/javascript/src/Components/Switch.tsx":
/*!**************************************************!*\
  !*** ./app/javascript/src/Components/Switch.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.mjs");
var _excluded = ["id", "label"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }


var Switch = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (_ref, ref) {
  var id = _ref.id,
    label = _ref.label,
    props = _objectWithoutProperties(_ref, _excluded);
  id !== null && id !== void 0 ? id : id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("form-check", "form-switch", props.className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({}, props, {
    id: id,
    type: "checkbox",
    role: "switch",
    className: "form-check-input",
    ref: ref
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-check-label fw-normal",
    htmlFor: id
  }, label));
});
/* harmony default export */ __webpack_exports__["default"] = (Switch);

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
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }


var TextInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (_ref, ref) {
  var label = _ref.label,
    required = _ref.required,
    id = _ref.id,
    error = _ref.error,
    props = _objectWithoutProperties(_ref, _excluded);
  id !== null && id !== void 0 ? id : id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('form-group', 'string', 'form-group-valid', id, {
      required: required
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('string', 'fw-normal', {
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

/***/ "./app/javascript/src/Components/UpcomingPaymentStandardAlert.tsx":
/*!************************************************************************!*\
  !*** ./app/javascript/src/Components/UpcomingPaymentStandardAlert.tsx ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpcomingPaymentStandardAlert: function() { return /* binding */ UpcomingPaymentStandardAlert; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert */ "./app/javascript/src/Components/Alert.tsx");
/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Switch */ "./app/javascript/src/Components/Switch.tsx");



/**
 * UpcomingPaymentStandardAlert Component
 *
 * A simple wrapper around the Alert component for displaying
 * upcoming payment standard information.
 *
 * @example
 * ```tsx
 * <UpcomingPaymentStandardAlert
 *   show={true}
 *   upcomingStartDate="Jan 1, 2024"
 *   dismissible
 *   onClose={() => console.log('Alert dismissed')}
 * />
 * ```
 */
var UpcomingPaymentStandardAlert = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (_ref, ref) {
  var _ref$show = _ref.show,
    show = _ref$show === void 0 ? false : _ref$show,
    _ref$checked = _ref.checked,
    checked = _ref$checked === void 0 ? false : _ref$checked,
    upcomingStartDate = _ref.upcomingStartDate,
    _ref$dismissible = _ref.dismissible,
    dismissible = _ref$dismissible === void 0 ? false : _ref$dismissible,
    onClose = _ref.onClose,
    onChange = _ref.onChange,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    children = _ref.children;
  if (!show) {
    return null;
  }
  var defaultContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor",
    className: "bi bi-info-circle",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ms-2"
  }, "Updates to Payment Standards")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-2 mb-0"
  }, "New payment standards come into effect on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    id: "upcoming-ps-alert-date"
  }, upcomingStartDate), ", which may affect what you can afford. Contact the agency that issued your voucher to determine which payment standards should be used to calculate affordability."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "mt-3",
    label: "Use upcoming payment standards",
    id: "useMaxIncomePercent",
    checked: checked,
    onChange: onChange,
    ref: ref
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Alert__WEBPACK_IMPORTED_MODULE_1__.Alert, {
    variant: "info",
    dismissible: dismissible,
    onClose: onClose,
    className: "mt-4 col-md-11 col-sm-12 col-12 px-1 ".concat(className),
    showCloseButton: dismissible
  }, children || defaultContent);
});
UpcomingPaymentStandardAlert.displayName = 'UpcomingPaymentStandardAlert';
/* harmony default export */ __webpack_exports__["default"] = (UpcomingPaymentStandardAlert);

/***/ }),

/***/ "./app/javascript/src/Hooks/AffordabilityCalculator/consts.ts":
/*!********************************************************************!*\
  !*** ./app/javascript/src/Hooks/AffordabilityCalculator/consts.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FORM_DEFAULT: function() { return /* binding */ FORM_DEFAULT; },
/* harmony export */   LIMITS: function() { return /* binding */ LIMITS; },
/* harmony export */   PAYMENT_STANDARD_URL: function() { return /* binding */ PAYMENT_STANDARD_URL; },
/* harmony export */   PREFILLED: function() { return /* binding */ PREFILLED; },
/* harmony export */   PREFILLED_FORM_DEFAULT: function() { return /* binding */ PREFILLED_FORM_DEFAULT; },
/* harmony export */   PROGRAMS: function() { return /* binding */ PROGRAMS; },
/* harmony export */   RESULT: function() { return /* binding */ RESULT; },
/* harmony export */   SIZES: function() { return /* binding */ SIZES; }
/* harmony export */ });
// if true, pre-fill form with dummy data for development purposes.
var PREFILLED = false;
var PREFILLED_FORM_DEFAULT = {
  mode: 'full',
  annualIncome: 17600,
  voucherType: 'section_8',
  voucherSize: 'two_bedroom',
  zipCode: '02125',
  unitSize: 'two_bedroom',
  monthlyRent: 2632,
  water: 'tenant',
  heat: 'tenant',
  electric: 'tenant',
  electricity: 'tenant',
  all: 'tenant',
  useMaxIncomePercent: false,
  showExplanation: true,
  useUpcomingPaymentStandard: false,
  paymentStandardData: {
    current: undefined,
    upcoming: undefined,
    upcomingStartDate: undefined
  }
};
var FORM_DEFAULT = PREFILLED ? PREFILLED_FORM_DEFAULT : {
  annualIncome: undefined,
  voucherType: undefined,
  voucherSize: undefined,
  zipCode: undefined,
  unitSize: undefined,
  monthlyRent: undefined,
  mode: undefined,
  water: 'tenant',
  heat: 'tenant',
  electric: 'tenant',
  electricity: 'tenant',
  all: 'tenant',
  useMaxIncomePercent: false,
  showExplanation: false,
  useUpcomingPaymentStandard: false,
  paymentStandardData: {
    current: undefined,
    upcoming: undefined,
    upcomingStartDate: undefined
  }
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
        visible: true,
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
        visible: true,
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
        visible: true,
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
        visible: true,
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
var LIMITS = {
  full: {
    affordableWithoutVoucher: {
      color: '#D6E7DD',
      title: 'A rent of {rent} is affordable without an {voucherType} voucher.',
      estimatedRentMessage: '',
      affordableMessage: 'The rent is affordable because you can cover the entire rent with 30% of your income or less.',
      fortyPercentMessage: ''
    },
    affordableWithVoucher: {
      color: '#D6E7DD',
      title: 'A rent of {rent} for a {bedroomSize} is most likely affordable in {zipCode} with an {voucherType} voucher.',
      estimatedRentMessage: 'Your estimated share of the rent is {tenantShare}',
      affordableMessage: 'The rent is affordable because your cost of housing doesn’t exceed 30% of your income.',
      // OK
      fortyPercentMessage: 'Lastly, the total cost of housing (tenant share + estimated utilities) cannot exceed 40% of your monthly income.'
    },
    maybeAffordableWithVoucher: {
      color: '#FFE8A3',
      title: 'A rent of {rent} for a {bedroomSize} might be affordable in {zipCode} with an {voucherType} voucher.',
      estimatedRentMessage: 'Your estimated share of the rent is {tenantShare}',
      affordableMessage: 'The rent might be affordable because your cost of housing is between 30% and 40% of your income.',
      tenantShaeMessage: 'Your share of the rent is calculated by taking the greater of 30% of your monthly adjusted gross income,{orMinimumPayment} and adding any difference between the gross rent and the payment standard.',
      //OK
      fortyPercentMessage: 'Lastly, the total cost of housing (tenant share + estimated utilities) cannot exceed 40% of your monthly income.'
    },
    notAffordable: {
      color: '#EEACAC',
      title: 'A rent of {rent} for a {bedroomSize} exceeds the maximum allowable rent in {zipCode} with an {voucherType} voucher.',
      estimatedRentMessage: '',
      affordableMessage: 'The rent is not affordable because your cost of housing exceeds 40% of your income.',
      fortyPercentMessage: 'Lastly, the total cost of housing (total tenant share + estimated utilities) cannot exceed 40% of their monthly income.'
    },
    minimumContributionExpected: {
      color: '#FFE8A3',
      title: 'A rent of {rent} for a {bedroomSize} might be affordable in {zipCode} with an {voucherType} voucher.',
      estimatedRentMessage: '{minRent} a month is the minimum payment for {voucherType} vouchers.',
      affordableMessage: 'The rent might be affordable. {minRent} a month is the minimum payment for {voucherType} vouchers.',
      // OK
      fortyPercentMessage: 'Lastly, the total cost of housing (tenant share + estimated utilities) cannot exceed 40% of your monthly income.'
    }
  },
  explore: {
    affordableWithoutVoucher: {
      color: '#D6E7DD',
      title: 'A rent of {rent} is affordable without an {voucherType} voucher.',
      estimatedRentMessage: '',
      affordableMessage: 'The rent is affordable because you can cover the entire rent with 30% of your income or less.',
      fortyPercentMessage: ''
    },
    affordableWithVoucher: {
      color: '#E8EEF4',
      title: 'A rent of up to {maxRentTo} for a {bedroomSize} is likely affordable in {zipCode} with an {voucherType} voucher.',
      estimatedRentMessage: 'Your estimated share of the rent is {tenantShare}',
      affordableMessage: 'Rent is considered affordable when your cost of housing doesn’t exceed 30% of your income.',
      fortyPercentMessage: ''
    },
    maybeAffordableWithVoucher: {
      color: '',
      title: '',
      estimatedRentMessage: '',
      affordableMessage: '',
      fortyPercentMessage: ''
    },
    notAffordable: {
      color: '',
      title: '',
      estimatedRentMessage: '',
      affordableMessage: '',
      fortyPercentMessage: ''
    },
    minimumContributionExpected: {
      color: '#FFE8A3',
      title: 'A rent of {rent} for a {bedroomSize} might be affordable in {zipCode} with an {voucherType} voucher.',
      estimatedRentMessage: 'Your estimated share of the rent is {tenantShare}',
      affordableMessage: 'The rent is affordable because your cost of housing doesn’t exceed 30% of your income.',
      // OK
      fortyPercentMessage: ''
    }
  }
};
var RESULT = {
  rent: 0,
  affordable: 'affordableWithVoucher',
  type: undefined,
  unitSize: 'sro',
  utilities: 0,
  paymentStandard: 0,
  rentPlusUtilities: 0,
  maxRent: 0,
  subsidy: 0,
  estTenantShare: 0,
  monthlyIncome: 0,
  percentageOfIncome: 0,
  annualIncome: 0,
  zipCode: '',
  voucherType: 'section_8',
  landlordPaysUtilitiesMaxRent: 0,
  estimatedHighestUtilityDeduction: 0,
  tenantPaysUtilitiesMaxRent: 0
};

/***/ }),

/***/ "./app/javascript/src/Hooks/AffordabilityCalculator/utils.ts":
/*!*******************************************************************!*\
  !*** ./app/javascript/src/Hooks/AffordabilityCalculator/utils.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bedroomOptions: function() { return /* binding */ bedroomOptions; },
/* harmony export */   currencyFormat: function() { return /* binding */ currencyFormat; },
/* harmony export */   getLimitFor: function() { return /* binding */ getLimitFor; },
/* harmony export */   getMinUnitSize: function() { return /* binding */ getMinUnitSize; },
/* harmony export */   getPaymentStandardData: function() { return /* binding */ getPaymentStandardData; },
/* harmony export */   getResultForInput: function() { return /* binding */ getResultForInput; },
/* harmony export */   useExploreLogic: function() { return /* binding */ useExploreLogic; },
/* harmony export */   useFullLogic: function() { return /* binding */ useFullLogic; },
/* harmony export */   voucherTypeLabel: function() { return /* binding */ voucherTypeLabel; },
/* harmony export */   voucherTypeOptions: function() { return /* binding */ voucherTypeOptions; }
/* harmony export */ });
/* harmony import */ var lodash_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/min */ "../node_modules/lodash/min.js");
/* harmony import */ var lodash_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_max__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/max */ "../node_modules/lodash/max.js");
/* harmony import */ var lodash_max__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_max__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consts */ "./app/javascript/src/Hooks/AffordabilityCalculator/consts.ts");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var voucherTypeLabel = function voucherTypeLabel(name) {
  return _consts__WEBPACK_IMPORTED_MODULE_2__.PROGRAMS[name]['label'];
};
var voucherTypeOptions = function voucherTypeOptions() {
  var options = Object.entries(_consts__WEBPACK_IMPORTED_MODULE_2__.PROGRAMS).map(function (_ref) {
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
  var options = Object.entries(_consts__WEBPACK_IMPORTED_MODULE_2__.SIZES).map(function (_ref3) {
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
  if (unitSize && _consts__WEBPACK_IMPORTED_MODULE_2__.SIZES[unitSize]['weight'] < _consts__WEBPACK_IMPORTED_MODULE_2__.SIZES[voucherSize]['weight']) {
    return unitSize;
  } else {
    return voucherSize;
  }
};
var getLimitFor = function getLimitFor(result) {
  var limit;
  if (!result.type) {
    limit = _consts__WEBPACK_IMPORTED_MODULE_2__.LIMITS['full']['notAffordable'];
  } else {
    limit = _consts__WEBPACK_IMPORTED_MODULE_2__.LIMITS[result.type][result.affordable];
  }
  return limit;
};
var currencyFormat = function currencyFormat(value) {
  return "$".concat(new Intl.NumberFormat('en-US').format(Math.round(value)));
};
var getPaymentStandardData = function getPaymentStandardData(jsonData, program) {
  var paymentStandardData = {
    current: undefined,
    upcoming: undefined,
    upcomingStartDate: undefined
  };
  var paymentStandard = jsonData || {};
  if (!Object.keys(paymentStandard).includes(program)) {
    return paymentStandardData;
  }
  var ps = paymentStandard[program];
  var psDateRanges = [];
  var currentPsDateIndex = undefined;
  var parsedToday = new Date();

  // Get ps date ranges
  Object.keys(ps).forEach(function (dateFrom) {
    var dateTo = Object.keys(ps[dateFrom])[0];
    psDateRanges.push([dateFrom, dateTo]);
  });

  // Ensure date range order
  psDateRanges.sort(function (a, b) {
    return new Date(a[0]).getTime() - new Date(b[0]).getTime();
  });

  // Get current date range index
  psDateRanges.forEach(function (_ref5, index) {
    var _ref6 = _slicedToArray(_ref5, 2),
      dateFrom = _ref6[0],
      dateTo = _ref6[1];
    if (Date.parse(dateFrom) <= parsedToday.getTime() && parsedToday.getTime() <= Date.parse(dateTo)) {
      currentPsDateIndex = index;
    }
  });
  if (currentPsDateIndex === undefined) {
    return paymentStandardData;
  }

  // Set active payment standard
  var _psDateRanges$current = _slicedToArray(psDateRanges[currentPsDateIndex], 2),
    dateFromKey = _psDateRanges$current[0],
    dateToKey = _psDateRanges$current[1];
  paymentStandardData.current = ps[dateFromKey][dateToKey];

  // Set upcoming payment standard
  var upcomingPsDateIndex = currentPsDateIndex + 1;
  if (upcomingPsDateIndex < psDateRanges.length) {
    var _psDateRanges$upcomin = _slicedToArray(psDateRanges[upcomingPsDateIndex], 2),
      _dateFromKey = _psDateRanges$upcomin[0],
      _dateToKey = _psDateRanges$upcomin[1];
    if (isWithinSixtyDays(_dateFromKey)) {
      paymentStandardData.upcomingStartDate = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC'
      }).format(new Date(_dateFromKey));
      paymentStandardData.upcoming = ps[_dateFromKey][_dateToKey];
    }
  }
  return paymentStandardData;
};
var isWithinSixtyDays = function isWithinSixtyDays(dateStr) {
  var targetDate = new Date(dateStr);
  var parsedToday = new Date();
  var msInDay = 1000 * 60 * 60 * 24;
  var diff = (targetDate.getTime() - parsedToday.getTime()) / msInDay;
  return diff >= 0 && diff <= 60;
};

/*
 * Affordability Calculator main logic
*/
var getResultForInput = function getResultForInput(data, activePaymentStandard) {
  var unitSize = data.mode == 'full' ? getMinUnitSize(data.unitSize, data.voucherSize) : data.voucherSize;
  var voucherType = data.voucherType;
  var utilitiesUnitSize = voucherType === 'mrvp' ? data.unitSize || data.voucherSize : unitSize;
  var program = _consts__WEBPACK_IMPORTED_MODULE_2__.PROGRAMS[voucherType];
  var _Object$keys = Object.keys(activePaymentStandard[data.zipCode]),
    _Object$keys2 = _slicedToArray(_Object$keys, 1),
    town = _Object$keys2[0];
  var paymentStandardBySize = activePaymentStandard[data.zipCode][town];
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
      return utilities[name]['values'][utilitiesUnitSize];
    } else {
      return 0;
    }
  }).reduce(function (a, b) {
    return a + b;
  }, 0);
  var allUtilitiesSum = utilityKeys.map(function (name) {
    return utilities[name]['values'][utilitiesUnitSize];
  }).reduce(function (a, b) {
    return a + b;
  }, 0);
  var commonParams = {
    agi: Number(data.annualIncome) || 1,
    paymentStandard: paymentStandard,
    expectedContribution: expectedContribution,
    minimumContribution: program.minimumContribution
  };
  if (data.mode == 'full') {
    var result = useFullLogic(_objectSpread(_objectSpread({}, commonParams), {}, {
      rent: Number(data.monthlyRent),
      utilityCost: selectedUtilitiesSum
    }));
    var exploreResult = useExploreLogic(_objectSpread(_objectSpread({}, commonParams), {}, {
      utilityCost: selectedUtilitiesSum,
      allowedContribution: 0.4
    }));
    return {
      type: 'full',
      affordable: result.affordable,
      unitSize: unitSize,
      //common
      annualIncome: Math.abs(Number(data.annualIncome)),
      zipCode: data.zipCode,
      voucherType: data.voucherType,
      monthlyIncome: monthlyIncome,
      paymentStandard: paymentStandard,
      subsidy: result.subsidy,
      // specific
      estTenantShare: result.tenantShare,
      rentPlusUtilities: result.totalRentalCost,
      maxRent: exploreResult.maxRent,
      rent: result.rent,
      utilities: result.utilityCost,
      percentageOfIncome: result.tenantSharePercent,
      // not used
      landlordPaysUtilitiesMaxRent: 0,
      estimatedHighestUtilityDeduction: 0,
      tenantPaysUtilitiesMaxRent: 0
    };
  } else {
    var allowedContribution = data.useMaxIncomePercent ? 0.4 : 0.3;
    var landlordPaysUtilitiesResult = useExploreLogic(_objectSpread(_objectSpread({}, commonParams), {}, {
      allowedContribution: allowedContribution,
      utilityCost: 0
    }));
    return {
      type: 'explore',
      affordable: landlordPaysUtilitiesResult.affordable,
      unitSize: unitSize,
      //common
      annualIncome: Math.abs(Number(data.annualIncome)),
      zipCode: data.zipCode,
      voucherType: data.voucherType,
      monthlyIncome: monthlyIncome,
      paymentStandard: paymentStandard,
      // specific
      estTenantShare: landlordPaysUtilitiesResult.maxTenantShare,
      subsidy: landlordPaysUtilitiesResult.subsidy,
      landlordPaysUtilitiesMaxRent: landlordPaysUtilitiesResult.maxRent,
      estimatedHighestUtilityDeduction: allUtilitiesSum,
      tenantPaysUtilitiesMaxRent: landlordPaysUtilitiesResult.maxRent - allUtilitiesSum,
      // not used
      rentPlusUtilities: 0,
      rent: 0,
      utilities: 0,
      percentageOfIncome: 0,
      maxRent: 0
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
  var monthlyIncome = Math.round(agi / 12);
  var totalRentalCost = rent + utilityCost;
  var householdContribution = lodash_min__WEBPACK_IMPORTED_MODULE_0___default()([lodash_max__WEBPACK_IMPORTED_MODULE_1___default()([minimumContribution, Math.round(monthlyIncome * expectedContribution)]), totalRentalCost]);
  var voucherPayment = lodash_max__WEBPACK_IMPORTED_MODULE_1___default()([0, lodash_min__WEBPACK_IMPORTED_MODULE_0___default()([rent, lodash_min__WEBPACK_IMPORTED_MODULE_0___default()([paymentStandard, totalRentalCost]) - householdContribution])]);
  var utilityReimbursement = lodash_max__WEBPACK_IMPORTED_MODULE_1___default()([0, lodash_min__WEBPACK_IMPORTED_MODULE_0___default()([paymentStandard, totalRentalCost]) - householdContribution - voucherPayment]);
  var tenantShare = totalRentalCost - voucherPayment - utilityReimbursement;
  var subsidy = voucherPayment + utilityReimbursement;
  var tenantSharePercent = (totalRentalCost - (voucherPayment + utilityReimbursement)) / monthlyIncome;
  var affordable = "notAffordable";
  var roundedTenantSharePercent = Math.round(100 * tenantSharePercent);
  if (roundedTenantSharePercent <= 40) affordable = "maybeAffordableWithVoucher";
  if (roundedTenantSharePercent == 30) affordable = "affordableWithVoucher";
  if (subsidy == 0) affordable = "affordableWithoutVoucher";
  if (monthlyIncome * 0.4 <= minimumContribution) affordable = 'minimumContributionExpected';
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
  var monthlyIncome = Math.round(agi / 12);
  var householdContribution = lodash_max__WEBPACK_IMPORTED_MODULE_1___default()([minimumContribution, Math.round(monthlyIncome * allowedContribution)]);
  var maxVoucherPayment = lodash_max__WEBPACK_IMPORTED_MODULE_1___default()([0, paymentStandard - lodash_max__WEBPACK_IMPORTED_MODULE_1___default()([minimumContribution, Math.round(monthlyIncome * (expectedContribution - 0.005))])]);
  var maxRent = householdContribution + maxVoucherPayment - utilityCost;
  var maxTenantShare = maxRent - maxVoucherPayment + utilityCost;
  var subsidy = maxVoucherPayment;
  var tenantSharePercent = (maxRent + utilityCost - maxVoucherPayment) / monthlyIncome;
  var affordable = "affordableWithVoucher";
  if (subsidy <= 0) affordable = "affordableWithoutVoucher";
  if (monthlyIncome * 0.4 <= minimumContribution) affordable = 'minimumContributionExpected';
  return {
    maxVoucherPayment: maxVoucherPayment,
    utilityCost: subsidy > 0 ? utilityCost : 0,
    paymentStandard: paymentStandard,
    subsidy: subsidy,
    monthlyIncome: monthlyIncome,
    tenantSharePercent: tenantSharePercent,
    householdContribution: householdContribution,
    maxRent: maxRent,
    maxTenantShare: maxTenantShare,
    affordable: affordable
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
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_lodash_max_js-node_modules_lodash_min_js-node_modules_react-currency-inp-1c9abb"], function() { return __webpack_exec__("./app/javascript/packs/affordability_calculator.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=affordability_calculator-1150a04dd92d04af24d0.js.map