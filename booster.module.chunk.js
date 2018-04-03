webpackJsonp(["booster.module"],{

/***/ "./src/app/booster/booster-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoosterRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booster_component__ = __webpack_require__("./src/app/booster/booster.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__booster_component__["a" /* BoosterComponent */], pathMatch: 'full' }
];
var BoosterRoutingModule = (function () {
    function BoosterRoutingModule() {
    }
    BoosterRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], BoosterRoutingModule);
    return BoosterRoutingModule;
}());



/***/ }),

/***/ "./src/app/booster/booster.component.scss":
/***/ (function(module, exports) {

module.exports = ".booster-page {\n  background-color: rgba(0, 0, 0, 0.5);\n  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.1)), to(rgba(53, 53, 53, 0.6)));\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, rgba(53, 53, 53, 0.6) 100%); }\n  .booster-page .game-area .counter-area {\n    background-color: rgba(53, 53, 53, 0.4);\n    border-bottom: 1px solid #919191;\n    height: 110px; }\n  .booster-page .game-area .counter-area:before {\n      background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, rgba(255, 255, 255, 0.5)), to(transparent));\n      background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%);\n      content: '';\n      display: block;\n      height: 1px;\n      width: 100%; }\n  .booster-page .game-area--menu {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .booster-page .game-area--menu .menu-controls {\n      margin: 0;\n      padding: 80px 0 0;\n      font-size: 20px; }\n  .booster-page .game-area--menu .menu-controls li {\n        cursor: pointer; }\n  .booster-page .game-area--menu .menu-controls li::before {\n          background-color: #fff;\n          background-image: -webkit-gradient(linear, left bottom, left top, from(#9a4004), to(#f5ea6e));\n          background-image: linear-gradient(to top, #9a4004 0%, #f5ea6e 100%);\n          border-radius: 50%;\n          content: '';\n          display: inline-block;\n          height: 14px;\n          margin-right: 20px;\n          width: 14px; }\n  .booster-page .game-area--menu .menu-controls li:hover {\n          color: rgba(255, 223, 10, 0.8); }\n  .booster-page .game-area--menu .menu-controls li + li {\n        margin-top: 48px; }\n  .booster-page .game-area .game-logo {\n    background-image: url('Rocky_Logo.56eacec5d783ed0a6739.png');\n    background-repeat: no-repeat;\n    background-size: contain;\n    height: 265px;\n    margin: 40px 100px 38px;\n    width: 170px; }\n  .booster-page .bet-area {\n    background-color: rgba(0, 0, 0, 0.4);\n    height: 146px; }\n  .booster-page .bet-area--wrapper {\n      margin: 0 auto;\n      height: 100%;\n      width: 600px; }\n  .booster-page .bet-area--btns {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      width: 520px;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      margin: 0 auto;\n      height: 50%; }\n  .booster-page .bet-area--btns button {\n        height: 32px;\n        padding: 0 30px;\n        border-radius: 4px;\n        background-color: #fff;\n        background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.1)), to(transparent));\n        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, transparent 100%);\n        -webkit-box-shadow: inset 0 2px 7px rgba(0, 0, 0, 0.6);\n                box-shadow: inset 0 2px 7px rgba(0, 0, 0, 0.6);\n        color: #353535;\n        font: 18px \"RoadRadio-Regular\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif; }\n  .booster-page .bet-area--btns button:hover:not(.disabled) {\n          opacity: .8; }\n  .booster-page .bet-area--btns button.disabled {\n          color: #545454; }\n  .booster-page .bet-area--btns button.small {\n          margin-right: 10px; }\n  .booster-page .bet-area--btns button.bet {\n          background-image: -webkit-gradient(linear, left bottom, left top, from(#c1a714), to(#ffd800));\n          background-image: linear-gradient(to top, #c1a714 0%, #ffd800 100%); }\n  .booster-page .bet-area--btns button.big {\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1;\n          margin-left: 18px; }\n  .booster-page .bet-area--btns button.big:first-child {\n            margin: 0 28px 0 0; }\n  .booster-page .bet-area--info {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      font: 18px \"Roboto-Light\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      height: 50%;\n      letter-spacing: -0.18px; }\n  .booster-page .bet-area--info .player-info {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n  .booster-page .bet-area--info .player-info .icon {\n          background-color: white;\n          width: 25px;\n          height: 25px;\n          background-size: 75% 80%;\n          background-repeat: no-repeat;\n          background-position: center;\n          margin-right: 8px; }\n  .booster-page .bet-area--info .player-bet {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n  .booster-page .bet-area--info .player-bet .icon {\n          margin-left: 8px; }\n"

/***/ }),

/***/ "./src/app/booster/booster.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoosterComponent; });
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

var BoosterComponent = (function () {
    function BoosterComponent() {
        this.title = 'Booster';
    }
    BoosterComponent.prototype.ngOnInit = function () {
    };
    BoosterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'booster-page',
            template: __webpack_require__("./src/app/booster/booster.template.html"),
            styles: [__webpack_require__("./src/app/booster/booster.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BoosterComponent);
    return BoosterComponent;
}());



/***/ }),

/***/ "./src/app/booster/booster.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoosterModule", function() { return BoosterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booster_component__ = __webpack_require__("./src/app/booster/booster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__booster_routing_module__ = __webpack_require__("./src/app/booster/booster-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BoosterModule = (function () {
    function BoosterModule() {
    }
    BoosterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__booster_component__["a" /* BoosterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__booster_routing_module__["a" /* BoosterRoutingModule */]
            ],
            providers: [],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__booster_component__["a" /* BoosterComponent */]]
        })
    ], BoosterModule);
    return BoosterModule;
}());



/***/ }),

/***/ "./src/app/booster/booster.template.html":
/***/ (function(module, exports) {

module.exports = "<page-header [title]=\"title\"></page-header>\n<div class=\"booster-page\">\n    <div class=\"game-area\">\n        <div class=\"game-area--menu\">\n            <ul class=\"menu-controls\">\n                <li role=\"button\">Text</li>\n                <li role=\"button\">Text</li>\n                <li role=\"button\">Text</li>\n            </ul>\n            <div class=\"game-logo\"></div>\n            <ul class=\"menu-controls\">\n                <li role=\"button\">Text</li>\n                <li role=\"button\">Text</li>\n                <li role=\"button\">Text</li>\n            </ul>\n        </div>\n        <div class=\"counter-area\">\n            <counter [highlight]=\"true\"></counter>\n        </div>\n    </div>\n    <div class=\"bet-area\">\n        <div class=\"bet-area--wrapper\">\n            <div class=\"bet-area--btns\">\n                <button class=\"disabled big\">amount</button>\n                <button class=\"small\">min</button>\n                <button class=\"small\">max</button>\n                <button class=\"bet big\">bet</button>\n            </div>\n            <div class=\"bet-area--info\">\n                <span class=\"player-info\">\n                    <span class=\"icon icon--avatar\"></span>\n                    <span>Player</span>\n                </span>\n                <span class=\"player-state\">Placed</span>\n                <span class=\"player-bet\">\n                     <span>$100</span>\n                     <span class=\"icon icon--coins\"></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ })

});
//# sourceMappingURL=booster.module.chunk.js.map