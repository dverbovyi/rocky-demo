webpackJsonp(["rocky.module"],{

/***/ "./src/app/rocky/rocky-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RockyRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rocky_component__ = __webpack_require__("./src/app/rocky/rocky.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__rocky_component__["a" /* RockyComponent */], pathMatch: 'full' }
];
var RockyRoutingModule = (function () {
    function RockyRoutingModule() {
    }
    RockyRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], RockyRoutingModule);
    return RockyRoutingModule;
}());



/***/ }),

/***/ "./src/app/rocky/rocky.component.scss":
/***/ (function(module, exports) {

module.exports = ".rocky-page {\n  background-color: rgba(0, 0, 0, 0.5);\n  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.1)), to(rgba(53, 53, 53, 0.6)));\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, rgba(53, 53, 53, 0.6) 100%); }\n  .rocky-page user-image {\n    background-color: #fff;\n    display: block;\n    height: 76px;\n    width: 76px; }\n  .rocky-page .layout > div {\n    width: 100%; }\n  .rocky-page .layout--game {\n    padding-bottom: 60px; }\n  .rocky-page .layout--game .progress--bar {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      font-family: 'RoadRadio-Light';\n      -webkit-box-pack: space-evenly;\n          -ms-flex-pack: space-evenly;\n              justify-content: space-evenly;\n      padding: 22px;\n      position: relative; }\n  .rocky-page .layout--game .progress--bar .bar {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        font-size: 20px;\n        height: 62px;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        position: relative;\n        width: 65%; }\n  .rocky-page .layout--game .progress--bar .bar .loading {\n          background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA3CAMAAABn5dmDAAAAAXNSR0IB2cksfwAAAXFQTFRFAAAAp6AinZMTm5ISnJISpZ4in5gglYsRnpcgnJQfkocRkYcRm5Qfm5MfkIYRmpMfmpIfmpIej4URmZEej4QRmJAejoQRjYMRjIIRl48ejIIQl44ei4EQlo4eioEQioAQlY0diYAQlIwdlYwdiX8QlIsdiH4Qk4sdh34Qh30Qkoodhn0QkokdhXwQkYgckIcchXsQhHsQkIgcj4cchHoQjoYcj4Ycg3oPjoUcgnkPjYQbgXgPjIMbgHcPi4Ibf3YPioEbfnUPfXQPiYAbfHMPiH8ae3IPh34aiH4aenIOh30aenEOeXEOhnwahn0aeXAOhXwaeG8OhHsZd24Od28OhHoZdm4Og3kZdW0OgngZdWwOgXgZgXcZdGwOdGsOgHYYc2sOf3UYf3YYcmoOcmoNcWkNfnQYfXMYcGgNb2gNfHIYb2cNfHEXfHIXbmYNe3EXbWUNe3AXbGUNenAXbGQNem8XbmcNb2YNdm0OdG0Og3cZwYzJTAAAAHt0Uk5TAP//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////FjjX8wAAAfJJREFUeJyN0P9XDFEcxvEHK1alXSv7LRLJlxBWJNnIWiKS1qq0s5baoViLCH+9OzP3cz/94Jx5Xs+558x9n5lfBvv2H0gkEtE5KBJcQ0/PIXVYcA3JZPJIr1tSUA19Rq/qE0xDf+Co6hdEw0Aq2J6aGkixDenIMZVOsw0Z67jKsM18PJgJzwnFNmQHRVaRDblsXmRzblxDrpArFov58BQKuXCFPc3eXcvb94KDIeOkGFJMw6lhs9MivA2zDSOhM2ftRlR8w2jknBhVsQ1j1nkxpuIaLly0uyRciW0Ydy6Lcbbhiroq2IaJa9fdJm7YkQ2l0k1VElzD5K3J28rcolENU8YdNSWYhunAXTUtiIaZ0D01I+IbypFZVS6zDfSb/2m4Lx4otmHuoZhTZEOl8khUFNdQrVYfP7GrKqph3ngq5hXT8GzB7PkLu/C2wDYshl6KRRXfsBR5JZZUbMNyLdprUVuusQ118UbU62zDirMqVtiGNfV21Y5tWG94buuCbGg236mm4Bpa71sfNtzMLRrV0DI2Nt1agmloBzZVWxANbT/YR+W3fbbBj3xSvs82bFnbaott+PzFrqPYhs5XsaeSDd3uN9FVXEP3e/eHMM8yqmHH+Cl2FNOw/Wu3s+v+pXmWEQ2/1xp/PO+vaHieZ098+wfotio0gXI15gAAAABJRU5ErkJggg==\");\n          background-size: contain;\n          border-radius: 30px;\n          height: 100%;\n          position: absolute;\n          width: 80%; }\n  .rocky-page .layout--game .progress--bar .bar--top, .rocky-page .layout--game .progress--bar .bar--bottom {\n          height: 50%;\n          width: 100%;\n          z-index: 1; }\n  .rocky-page .layout--game .progress--bar .bar--top {\n          background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 0.5)));\n          background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%);\n          border-radius: 30px 30px 0 0;\n          -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.49);\n                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.49); }\n  .rocky-page .layout--game .progress--bar .bar--bottom {\n          width: 100%;\n          height: 50%;\n          background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.17)), to(rgba(255, 255, 255, 0.17)));\n          background-image: linear-gradient(to top, rgba(0, 0, 0, 0.17) 0%, rgba(255, 255, 255, 0.17) 100%);\n          border-radius: 0 0 30px 30px; }\n  .rocky-page .layout--game .progress--bar .bar--ratio {\n          left: 50%;\n          position: absolute;\n          -webkit-transform: translate3d(-50%, 0, 0);\n                  transform: translate3d(-50%, 0, 0);\n          z-index: 1; }\n  .rocky-page .layout--game .progress--bar .delimiter {\n        font-size: 22px;\n        color: rgba(255, 255, 255, 0.7); }\n  .rocky-page .layout--game .progress--bar::after {\n        background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, rgba(255, 255, 255, 0.5)), to(transparent));\n        background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%);\n        bottom: 0;\n        content: '';\n        height: 1px;\n        position: absolute;\n        width: 100%; }\n  .rocky-page .layout--game .prize-fund--bar {\n      background: -webkit-gradient(linear, left top, left bottom, color-stop(21%, rgba(255, 223, 10, 0.8)), to(#827407));\n      background: linear-gradient(to bottom, rgba(255, 223, 10, 0.8) 21%, #827407 100%);\n      border: 4px solid #827407;\n      border-bottom-color: #5e5318;\n      border-right: none;\n      border-left: none;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 70px;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin: 20px 0;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3); }\n  .rocky-page .layout--game .prize-fund--bar h3 {\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin: 0;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font: 35px \"RoadRadio-Light\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif; }\n  .rocky-page .layout--game .prize-fund--bar h3 .title {\n          margin-right: 30px; }\n  .rocky-page .layout--game .prize-fund--bar h3 .prize {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          margin-right: 6px; }\n  .rocky-page .layout--game .prize-fund--bar h3 .icon {\n          height: 42px;\n          width: 47px; }\n  .rocky-page .layout--game .info {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      font-family: 'RoadRadio-Regular';\n      -ms-flex-pack: distribute;\n          justify-content: space-around; }\n  .rocky-page .layout--game .info h5 {\n        font-size: 20px;\n        margin: 0; }\n  .rocky-page .layout--game .info button {\n        font-size: 20px;\n        background-color: #fff;\n        background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.1)), to(transparent));\n        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, transparent 100%);\n        color: #353535;\n        padding: 3px 14px 2px;\n        border-radius: 4px; }\n  .rocky-page .player-list {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-bottom: 2px solid;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 132px;\n    position: relative; }\n  .rocky-page .player-list--wrapper {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin: 0 14px;\n      overflow-x: auto;\n      padding: 6px 0; }\n  .rocky-page .player-list--wrapper li + li {\n        margin-left: 5px; }\n  .rocky-page .player-list--close-btn {\n      background: #1f1d1d;\n      bottom: -34px;\n      cursor: pointer;\n      height: 53px;\n      margin-left: 50%;\n      position: absolute;\n      -webkit-transform: translate3d(-50%, 0, 0);\n              transform: translate3d(-50%, 0, 0); }\n  .rocky-page .game-screen--info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 40px 100px 30px 100px; }\n  .rocky-page .game-screen--info .row {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      margin: 0; }\n  .rocky-page .game-screen--info .row.counter {\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end; }\n  .rocky-page .game-screen--info .row.counter h5 {\n          margin: 0 16px 0 0; }\n  .rocky-page .game-screen--info .row h5 {\n        font: 20px \"RoadRadio-Regular\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif; }\n  .rocky-page .game-screen--info .row h5 .title {\n          display: inline-block;\n          width: 85px; }\n  .rocky-page .game-screen .player-list {\n    background-color: rgba(0, 0, 0, 0.8);\n    border: none;\n    height: auto;\n    margin-bottom: 6px; }\n  .rocky-page .game-screen .player-list--wrapper {\n      margin: 0 30px; }\n  .rocky-page .game-screen .player-list button {\n      background: #5e5318;\n      color: #fff;\n      font: 60px \"RoadRadio-Light\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n      height: 75px;\n      padding: 10px 2px;\n      width: 25px; }\n  .rocky-page .game-screen .player-list button.right {\n        border-radius: 0 8px 8px 0; }\n  .rocky-page .game-screen .player-list button.left {\n        border-radius: 8px 0 0 8px; }\n  .rocky-page .game-screen .win-lines {\n    margin: 0; }\n  .rocky-page .game-screen .win-lines li {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 90px;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n  .rocky-page .game-screen .win-lines li h5 {\n        -ms-flex-preferred-size: 60%;\n            flex-basis: 60%;\n        font: 20px \"RoadRadio-Regular\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n        margin: 0;\n        text-align: center; }\n  .rocky-page .game-screen .win-lines li::before, .rocky-page .game-screen .win-lines li::after {\n        content: '';\n        height: 100%;\n        width: 20px; }\n  .rocky-page .game-screen .win-lines li.red {\n        background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.1)), color-stop(50%, rgba(235, 75, 75, 0.8)), to(rgba(0, 0, 0, 0.1)));\n        background: linear-gradient(to right, rgba(0, 0, 0, 0.1) 0%, rgba(235, 75, 75, 0.8) 50%, rgba(0, 0, 0, 0.1) 100%); }\n  .rocky-page .game-screen .win-lines li.red::before, .rocky-page .game-screen .win-lines li.red::after {\n          background-color: #eb4b4b; }\n  .rocky-page .game-screen .win-lines li.blue {\n        background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.1)), color-stop(50%, rgba(17, 85, 221, 0.8)), to(rgba(0, 0, 0, 0.1)));\n        background: linear-gradient(to right, rgba(0, 0, 0, 0.1) 0%, rgba(17, 85, 221, 0.8) 50%, rgba(0, 0, 0, 0.1) 100%); }\n  .rocky-page .game-screen .win-lines li.blue::before, .rocky-page .game-screen .win-lines li.blue::after {\n          background-color: #1155dd; }\n  .rocky-page .game-screen .win-lines li.light-blue {\n        background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.1)), color-stop(50%, rgba(135, 199, 248, 0.8)), to(rgba(0, 0, 0, 0.1)));\n        background: linear-gradient(to right, rgba(0, 0, 0, 0.1) 0%, rgba(135, 199, 248, 0.8) 50%, rgba(0, 0, 0, 0.1) 100%); }\n  .rocky-page .game-screen .win-lines li.light-blue::before, .rocky-page .game-screen .win-lines li.light-blue::after {\n          background-color: #87c7f8; }\n  .rocky-page .game-screen .win-lines li .icon--wrapper {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n  .rocky-page .game-screen .win-lines li .icon--wrapper .icon--bracket.right {\n          -webkit-transform: rotateY(180deg);\n                  transform: rotateY(180deg); }\n  .rocky-page .game-screen .win-lines li .icon--wrapper .line--icon {\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column; }\n  .rocky-page .game-screen .win-lines li .icon--wrapper .line--icon .icon {\n            padding-bottom: 40px; }\n  .rocky-page .game-screen .win-lines li .icon--wrapper .line--icon h5,\n          .rocky-page .game-screen .win-lines li .icon--wrapper .line--icon h6 {\n            font: 15px \"RoadRadio-Regular\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif; }\n  .rocky-page .game-screen .win-lines li .icon--wrapper .line--icon h6 {\n            font-size: 10px;\n            margin-bottom: 4px; }\n"

/***/ }),

/***/ "./src/app/rocky/rocky.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RockyComponent; });
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

var RockyComponent = (function () {
    function RockyComponent() {
        this.title = 'Rocky (mock - click here to toggle layout)';
        this.gameId = '#0000111';
        this.players = new Array(14);
        this.toggleLayout = false;
        this.winners = [{
                title: 'Top Day',
                totalWin: 58482,
                chance: 30.9
            },
            {
                title: 'Top Week',
                totalWin: 58482,
                chance: 30.9
            },
            {
                title: 'Top Month',
                totalWin: 58482,
                chance: 30.9
            }];
    }
    RockyComponent.prototype.ngOnInit = function () {
    };
    RockyComponent.prototype.onTitleClick = function (e) {
        this.toggleLayout = !this.toggleLayout;
    };
    RockyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'rocky-page',
            template: __webpack_require__("./src/app/rocky/rocky.template.html"),
            styles: [__webpack_require__("./src/app/rocky/rocky.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RockyComponent);
    return RockyComponent;
}());



/***/ }),

/***/ "./src/app/rocky/rocky.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RockyModule", function() { return RockyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rocky_component__ = __webpack_require__("./src/app/rocky/rocky.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rocky_routing_module__ = __webpack_require__("./src/app/rocky/rocky-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RockyModule = (function () {
    function RockyModule() {
    }
    RockyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rocky_component__["a" /* RockyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__rocky_routing_module__["a" /* RockyRoutingModule */]
            ],
            providers: [],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__rocky_component__["a" /* RockyComponent */]]
        })
    ], RockyModule);
    return RockyModule;
}());



/***/ }),

/***/ "./src/app/rocky/rocky.template.html":
/***/ (function(module, exports) {

module.exports = "<page-header [title]=\"title\" [id]=\"gameId\" (onTitleClick)=\"onTitleClick($event)\"></page-header>\n<div class=\"rocky-page\">\n    <div class=\"layout\">\n        <div *ngIf=\"!toggleLayout\" class=\"layout--initial\">\n            <div class=\"player-list\">\n                <ul class=\"player-list--wrapper\">\n                    <li *ngFor=\"let player of players\">\n                        <user-image></user-image>\n                    </li>\n                </ul>\n                <div class=\"player-list--close-btn\">\n                    <span class=\"icon icon--arrow-up\"></span>   \n                </div>\n            </div>\n            <div class=\"game-screen--info\">\n                <div class=\"row\">\n                    <h5>\n                        <span class=\"title\">Ticket:</span>\n                        <span class=\"color--yellow\">123765</span>\n                    </h5>\n                    <h5>\n                        <span class=\"title\">Winner:</span>\n                        <span class=\"color--yellow\">Player1</span>\n                    </h5>\n                </div>\n                <div class=\"row counter\">\n                    <h5>\n                        <span>new game through:</span>\n                    </h5>\n                    <counter [hideMinutes]=\"true\"></counter>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"toggleLayout\" class=\"layout--game\">\n            <div class=\"progress--bar\">\n                <div class=\"bar\">\n                    <div class=\"bar--top\"></div>\n                    <div class=\"bar--bottom\"></div>\n                    <span class=\"bar--ratio\">27/50</span>\n                    <div class=\"loading\"></div>\n                </div>\n                <span class=\"delimiter\">or</span>\n                <div class=\"timer\">\n                    <counter></counter>\n                </div>\n            </div>\n            <div class=\"prize-fund--bar\">\n                <h3>\n                    <span class=\"title\">Prize FUND:</span>\n                    <span class=\"prize\">\n                        <span class=\"color--white\">58</span>\n                        <span class=\"color--gray\">438</span>\n                    </span>\n                    <span class=\"icon icon--coins\"></span>\n                </h3>\n            </div>\n            <div class=\"info\">\n                <h5>some info</h5>\n                <button>add items</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"game-screen\">\n        <div class=\"player-list slider\">\n            <button class=\"right\">&lt;</button>\n            <ul class=\"player-list--wrapper\">\n                <li *ngFor=\"let player of players\">\n                    <user-image></user-image>\n                </li>\n            </ul>\n            <button class=\"left\">&gt;</button>\n        </div>\n        <ul class=\"win-lines\">\n            <li class=\"line red\">\n                <user-image></user-image>\n                <h5>ITEM DESCRIPTION</h5>\n                <div class=\"icon--wrapper\">\n                    <span class=\"icon icon--bracket right\"></span>\n                    <div class=\"line--icon\">\n                         <span class=\"icon icon--weapon\"></span>\n                         <h6>weapon</h6>\n                         <h5 class=\"value\">+1485</h5>\n                    </div>\n                    <span class=\"icon icon--bracket\"></span>\n                </div>\n            </li>\n            <li class=\"line blue\">\n                <user-image></user-image>\n                <h5>ITEM DESCRIPTION</h5>\n                <div class=\"icon--wrapper\">\n                    <span class=\"icon icon--bracket right\"></span>\n                    <div class=\"line--icon\">\n                        <span class=\"icon icon--weapon\"></span>\n                        <h6>weapon</h6>\n                        <h5 class=\"value\">+1485</h5>\n                    </div>\n                    <span class=\"icon icon--bracket\"></span>\n                </div>\n            </li>\n            <li class=\"line light-blue\">\n                <user-image></user-image>\n                <h5>ITEM DESCRIPTION</h5>\n                <div class=\"icon--wrapper\">\n                    <span class=\"icon icon--bracket right\"></span>\n                    <div class=\"line--icon\">\n                        <span class=\"icon icon--weapon\"></span>\n                        <h6>weapon</h6>\n                        <h5 class=\"value\">+1485</h5>\n                    </div>\n                    <span class=\"icon icon--bracket left\"></span>\n                </div>\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ })

});
//# sourceMappingURL=rocky.module.chunk.js.map