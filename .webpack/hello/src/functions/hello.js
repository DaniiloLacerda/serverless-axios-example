(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/functions/hello.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/functions/hello.ts":
/*!********************************!*\
  !*** ./src/functions/hello.ts ***!
  \********************************/
/*! exports provided: get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony import */ var _services_integration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/integration */ \"./src/services/integration.ts\");\n\nasync function get(_event, _context) {\n    const service = new _services_integration__WEBPACK_IMPORTED_MODULE_0__[\"IntegrationService\"]();\n    const authRequest = {\n        appId: \"acc8b796-04a0-4f4f-b6a4-924d1ca4c27b\",\n        appPassword: \"t0tvsFly01S@vd3\",\n        platformUrl: \"44301172335.fly01dev.com.br\",\n        platformUser: \"78312445811@mailinator.com\",\n    };\n    const data = await service.auth(authRequest);\n    return {\n        headers: { \"Content-Type\": \"application/json\" },\n        statusCode: 200,\n        body: JSON.stringify(data, null, 2)\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2hlbGxvLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9oZWxsby50cz9iNGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUV2ZW50LCBDb250ZXh0IH0gZnJvbSBcImF3cy1sYW1iZGFcIjtcbmltcG9ydCB7IEF1dGhSZXF1ZXN0LCBJbnRlZ3JhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaW50ZWdyYXRpb25cIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldChfZXZlbnQ6IEFQSUdhdGV3YXlQcm94eUV2ZW50LCBfY29udGV4dDogQ29udGV4dCkge1xuICBjb25zdCBzZXJ2aWNlID0gbmV3IEludGVncmF0aW9uU2VydmljZSgpO1xuXG4gIGNvbnN0IGF1dGhSZXF1ZXN0OiBBdXRoUmVxdWVzdCA9IHtcblxuICAgIGFwcElkOiBcImFjYzhiNzk2LTA0YTAtNGY0Zi1iNmE0LTkyNGQxY2E0YzI3YlwiLFxuICAgIGFwcFBhc3N3b3JkOiBcInQwdHZzRmx5MDFTQHZkM1wiLFxuICAgIHBsYXRmb3JtVXJsOiBcIjQ0MzAxMTcyMzM1LmZseTAxZGV2LmNvbS5iclwiLFxuICAgIHBsYXRmb3JtVXNlcjogXCI3ODMxMjQ0NTgxMUBtYWlsaW5hdG9yLmNvbVwiLFxuICB9O1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBzZXJ2aWNlLmF1dGgoYXV0aFJlcXVlc3QpO1xuXG4gIHJldHVybiB7XG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKVxuICB9O1xufSJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/hello.ts\n");

/***/ }),

/***/ "./src/services/integration.ts":
/*!*************************************!*\
  !*** ./src/services/integration.ts ***!
  \*************************************/
/*! exports provided: IntegrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IntegrationService\", function() { return IntegrationService; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ \"querystring\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass IntegrationService {\n    constructor() {\n        this.CONTENT_TYPE_JSON = \"application/json\";\n        this.getDefaultHeaders = (token = \"\") => token\n            ? { Authorization: `${token}`, 'Content-Type': this.CONTENT_TYPE_JSON }\n            : { 'Content-Type': this.CONTENT_TYPE_JSON };\n        this.api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n            baseURL: \"http://gateway.fly01dev.com.br\"\n        });\n    }\n    async auth(params) {\n        const resource = \"token\";\n        const { appId, appPassword, platformUrl, platformUser } = params;\n        const credentials = Object(querystring__WEBPACK_IMPORTED_MODULE_1__[\"stringify\"])({ grant_type: \"password\", userName: appId, password: appPassword, platformUrl: platformUrl, platformUser: platformUser });\n        const response = await this.api.post(resource, credentials, { headers: this.getDefaultHeaders() });\n        const { userName, access_token } = response.data;\n        return { accessToken: access_token, userName: userName };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvaW50ZWdyYXRpb24udHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvaW50ZWdyYXRpb24udHM/MWI1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc0luc3RhbmNlIH0gZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tIFwicXVlcnlzdHJpbmdcIjtcbmltcG9ydCB7IEF1dGhSZXF1ZXN0LCBBdXRoUmVzcG9uc2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9yZXF1ZXN0LmludGVyZmFjZVwiO1xuXG5leHBvcnQgY2xhc3MgSW50ZWdyYXRpb25TZXJ2aWNlIHtcbiAgICBwcml2YXRlIGFwaTogQXhpb3NJbnN0YW5jZTtcbiAgICBwcml2YXRlIENPTlRFTlRfVFlQRV9KU09OID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hcGkgPSBBeGlvcy5jcmVhdGUoe1xuICAgICAgICAgICAgYmFzZVVSTDogXCJodHRwOi8vZ2F0ZXdheS5mbHkwMWRldi5jb20uYnJcIlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldERlZmF1bHRIZWFkZXJzID0gKHRva2VuOiBzdHJpbmcgPSBcIlwiKSA9PiB0b2tlblxuICAgICAgICA/IHsgQXV0aG9yaXphdGlvbjogYCR7dG9rZW59YCwgJ0NvbnRlbnQtVHlwZSc6IHRoaXMuQ09OVEVOVF9UWVBFX0pTT04gfVxuICAgICAgICA6IHsgJ0NvbnRlbnQtVHlwZSc6IHRoaXMuQ09OVEVOVF9UWVBFX0pTT04gfTtcblxuICAgIGFzeW5jIGF1dGgocGFyYW1zOiBBdXRoUmVxdWVzdCk6IFByb21pc2U8QXV0aFJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gXCJ0b2tlblwiO1xuICAgICAgICBjb25zdCB7IGFwcElkLCBhcHBQYXNzd29yZCwgcGxhdGZvcm1VcmwsIHBsYXRmb3JtVXNlciB9ID0gcGFyYW1zO1xuICAgICAgICBjb25zdCBjcmVkZW50aWFscyA9IHN0cmluZ2lmeSh7IGdyYW50X3R5cGU6IFwicGFzc3dvcmRcIiwgdXNlck5hbWU6IGFwcElkLCBwYXNzd29yZDogYXBwUGFzc3dvcmQsIHBsYXRmb3JtVXJsOiBwbGF0Zm9ybVVybCwgcGxhdGZvcm1Vc2VyOiBwbGF0Zm9ybVVzZXIgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmFwaS5wb3N0KHJlc291cmNlLCBjcmVkZW50aWFscywgeyBoZWFkZXJzOiB0aGlzLmdldERlZmF1bHRIZWFkZXJzKCkgfSk7XG4gICAgICAgIGNvbnN0IHsgdXNlck5hbWUsIGFjY2Vzc190b2tlbiB9ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICByZXR1cm4geyBhY2Nlc3NUb2tlbjogYWNjZXNzX3Rva2VuLCB1c2VyTmFtZTogdXNlck5hbWUgfTtcbiAgICB9XG59Il0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFJQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/integration.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"querystring\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnlzdHJpbmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeXN0cmluZ1wiPzMwYzYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnlzdHJpbmdcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///querystring\n");

/***/ })

/******/ })));