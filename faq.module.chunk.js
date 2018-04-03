webpackJsonp(["faq.module"],{

/***/ "./src/app/faq/faq-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAQRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_component__ = __webpack_require__("./src/app/faq/faq.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__faq_component__["a" /* FAQComponent */], pathMatch: 'full' }
];
var FAQRoutingModule = (function () {
    function FAQRoutingModule() {
    }
    FAQRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], FAQRoutingModule);
    return FAQRoutingModule;
}());



/***/ }),

/***/ "./src/app/faq/faq.component.scss":
/***/ (function(module, exports) {

module.exports = ".faq-page {\n  background-color: rgba(0, 0, 0, 0.5);\n  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.1)), to(rgba(53, 53, 53, 0.6)));\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, rgba(53, 53, 53, 0.6) 100%);\n  height: 100%; }\n  .faq-page--wrapper {\n    font-family: \"RoadRadio-Light\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    width: 100%;\n    padding-top: 50px; }\n  .faq-page--wrapper article h2 {\n      font-size: 25px;\n      margin-bottom: 30px;\n      padding: 0 70px; }\n  .faq-page--wrapper article .questions {\n      padding: 0 70px 0 90px;\n      font: 18px \"Roboto-Light\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n      margin: 0; }\n  .faq-page--wrapper article .questions::after {\n        background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, rgba(255, 255, 255, 0.5)), to(transparent));\n        background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%);\n        content: '';\n        display: block;\n        height: 1px;\n        margin-top: 20px;\n        width: 100%; }\n  .faq-page--wrapper article .questions li {\n        list-style: decimal; }\n  .faq-page--wrapper article .questions li a {\n          color: #70b9fe;\n          line-height: 25px;\n          margin-left: 10px; }\n  .faq-page--wrapper article .answers {\n      padding: 30px 70px 0; }\n  .faq-page--wrapper article .answers section {\n        margin-bottom: 40px; }\n  .faq-page--wrapper article .answers section h3 {\n          color: #70b9fe;\n          font-size: 22px; }\n  .faq-page--wrapper article .answers section h3::after {\n            background: -webkit-gradient(linear, left top, right top, color-stop(40%, rgba(255, 255, 255, 0.8)), to(#000));\n            background: linear-gradient(to right, rgba(255, 255, 255, 0.8) 40%, #000 100%);\n            content: '';\n            display: block;\n            height: 1px;\n            margin-top: 14px;\n            width: 260px; }\n  .faq-page--wrapper article .answers section p {\n          font: 16px \"Roboto-Light\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n          margin: 16px 0 0;\n          text-align: justify; }\n"

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAQComponent; });
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

var FAQComponent = (function () {
    function FAQComponent() {
        this.title = 'FAQ';
    }
    FAQComponent.prototype.ngOnInit = function () {
    };
    FAQComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'faq-page',
            template: __webpack_require__("./src/app/faq/faq.template.html"),
            styles: [__webpack_require__("./src/app/faq/faq.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FAQComponent);
    return FAQComponent;
}());



/***/ }),

/***/ "./src/app/faq/faq.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQModule", function() { return FAQModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_component__ = __webpack_require__("./src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__faq_routing_module__ = __webpack_require__("./src/app/faq/faq-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FAQModule = (function () {
    function FAQModule() {
    }
    FAQModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__faq_component__["a" /* FAQComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__faq_routing_module__["a" /* FAQRoutingModule */]
            ],
            providers: [],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__faq_component__["a" /* FAQComponent */]]
        })
    ], FAQModule);
    return FAQModule;
}());



/***/ }),

/***/ "./src/app/faq/faq.template.html":
/***/ (function(module, exports) {

module.exports = "<page-header [title]=\"title\"></page-header>\n<div class=\"faq-page\">\n    <div class=\"faq-page--wrapper\">\n        <article>\n            <h2>Frequently Asked Questions</h2>\n            <ul class=\"questions\">\n                <li>\n                    <a href=\"javascript:void(0)\">\n                        Question 1, Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                    </a>\n                    </li>\n                <li>\n                    <a href=\"javascript:void(0)\">\n                        Question 2, Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                    </a>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\">\n                        Question 3, Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                    </a>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\">\n                        Question 4, Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                    </a>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\">\n                        Question 5, Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                    </a>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\">\n                        Question 6, Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                    </a>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\">\n                        Question 6, Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                    </a>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\">\n                            Question 6, Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                        </a>\n                    </li>\n                <li>\n                    <a href=\"javascript:void(0)\">\n                        Question 6, Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                    </a>\n                </li>\n            </ul>\n            <div class=\"answers\">\n                <section id=\"#qa1\">\n                    <h3>Answer 1:</h3>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>\n                </section>\n                <section id=\"#qa2\">\n                    <h3>Answer 2:</h3>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>\n                </section>\n                <section id=\"#qa3\">\n                    <h3>Answer 3:</h3>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>\n                </section>\n            </div>\n        </article>\n    </div>\n</div>"

/***/ })

});
//# sourceMappingURL=faq.module.chunk.js.map