webpackJsonp(["policy.module"],{

/***/ "./src/app/policy/policy-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__policy_component__ = __webpack_require__("./src/app/policy/policy.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__policy_component__["a" /* PolicyComponent */], pathMatch: 'full' }
];
var PolicyRoutingModule = (function () {
    function PolicyRoutingModule() {
    }
    PolicyRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], PolicyRoutingModule);
    return PolicyRoutingModule;
}());



/***/ }),

/***/ "./src/app/policy/policy.component.scss":
/***/ (function(module, exports) {

module.exports = ".policy-page {\n  -webkit-box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.6);\n          box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.6);\n  background-color: rgba(0, 0, 0, 0.5);\n  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.1)), to(rgba(53, 53, 53, 0.6)));\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, rgba(53, 53, 53, 0.6) 100%); }\n  .policy-page--wrapper {\n    padding-bottom: 1px;\n    width: 100%;\n    padding: 50px 0 125px; }\n  .policy-page--wrapper::after {\n      background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, rgba(255, 255, 255, 0.5)), to(transparent));\n      background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%);\n      content: '';\n      display: block;\n      height: 1px;\n      width: 100%; }\n  .policy-page article {\n    margin-bottom: 60px;\n    padding: 0 70px; }\n  .policy-page article:last-child {\n      margin-bottom: 40px; }\n  .policy-page article h3 {\n      font: 25px \"RoadRadio-Light\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n      margin: 0 0 16px;\n      width: 260px; }\n  .policy-page article h3::after {\n        background: -webkit-gradient(linear, left top, right top, color-stop(40%, rgba(255, 255, 255, 0.8)), to(#000));\n        background: linear-gradient(to right, rgba(255, 255, 255, 0.8) 40%, #000 100%);\n        content: '';\n        display: block;\n        height: 1px;\n        margin-top: 14px;\n        width: 260px; }\n  .policy-page article p {\n      font: 18px \"Roboto-Light\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n      text-align: justify; }\n"

/***/ }),

/***/ "./src/app/policy/policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PolicyComponent = (function () {
    function PolicyComponent() {
        this.title = 'Private Policy';
    }
    PolicyComponent.prototype.ngOnInit = function () {
    };
    PolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'policy-page',
            template: __webpack_require__("./src/app/policy/policy.template.html"),
            styles: [__webpack_require__("./src/app/policy/policy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PolicyComponent);
    return PolicyComponent;
}());



/***/ }),

/***/ "./src/app/policy/policy.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyModule", function() { return PolicyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__policy_component__ = __webpack_require__("./src/app/policy/policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__policy_routing_module__ = __webpack_require__("./src/app/policy/policy-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PolicyModule = (function () {
    function PolicyModule() {
    }
    PolicyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__policy_component__["a" /* PolicyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__policy_routing_module__["a" /* PolicyRoutingModule */]
            ],
            providers: [],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__policy_component__["a" /* PolicyComponent */]]
        })
    ], PolicyModule);
    return PolicyModule;
}());



/***/ }),

/***/ "./src/app/policy/policy.template.html":
/***/ (function(module, exports) {

module.exports = "<page-header [title]=\"title\"></page-header>\n<div class=\"policy-page\">\n    <div class=\"policy-page--wrapper\">\n        <article>\n            <h3>Header 1</h3>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy\n                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n                specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining\n                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem\n                Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions\n                of Lorem Ipsum.\n            </p>\n        </article>\n        <article>\n            <h3>Header 2</h3>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy\n                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n                specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining\n                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem\n                Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions\n                of Lorem Ipsum.\n            </p>\n        </article>\n        <article>\n            <h3>Header 3</h3>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy\n                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n                specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining\n                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem\n                Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions\n                of Lorem Ipsum.\n            </p>\n        </article>\n    </div>\n</div>"

/***/ })

});
//# sourceMappingURL=policy.module.chunk.js.map