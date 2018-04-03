webpackJsonp(["double.module"],{

/***/ "./src/app/double/double-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoubleRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__double_component__ = __webpack_require__("./src/app/double/double.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__double_component__["a" /* DoubleComponent */], pathMatch: 'full' }
];
var DoubleRoutingModule = (function () {
    function DoubleRoutingModule() {
    }
    DoubleRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], DoubleRoutingModule);
    return DoubleRoutingModule;
}());



/***/ }),

/***/ "./src/app/double/double.component.scss":
/***/ (function(module, exports) {

module.exports = ".double-page {\n  background-color: rgba(0, 0, 0, 0.5);\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(15%, rgba(255, 223, 10, 0.2)), color-stop(80%, transparent));\n  background-image: linear-gradient(to bottom, rgba(255, 223, 10, 0.2) 15%, transparent 80%);\n  padding-bottom: 20px; }\n  .double-page .notification {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 16px 0 28px 45px; }\n  .double-page .notification .timer {\n      font-family: \"RoadRadio-Thin\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n      padding: 2px; }\n  .double-page .notification .timer, .double-page .notification .timer--sign {\n        font-size: 15px; }\n  .double-page .notification .timer--message {\n        margin: 0; }\n  .double-page .notification .timer time {\n        display: block;\n        font-size: 25px;\n        text-align: center; }\n  .double-page .notification .volume {\n      -ms-flex-item-align: baseline;\n          align-self: baseline;\n      margin-left: 6px; }\n  .double-page .roulette {\n    background-color: #8e8b74;\n    border: 1px solid #919191;\n    border-radius: 6px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font: 27px \"RoadRadio-Light\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    margin: 0 auto 25px;\n    padding: 1px 0 0;\n    position: relative;\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content; }\n  .double-page .roulette number + number {\n      margin-left: 2px; }\n  .double-page .roulette::after, .double-page .roulette::before {\n      content: '';\n      display: block;\n      left: 50%;\n      position: absolute; }\n  .double-page .roulette::before {\n      background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(60%, rgba(255, 255, 255, 0.7)), to(transparent)) center;\n      background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.7) 60%, transparent 100%) center;\n      content: '';\n      display: block;\n      height: 97%;\n      opacity: .8;\n      position: absolute;\n      top: 2px;\n      -webkit-transform: translate3d(-30%, 0, 0);\n              transform: translate3d(-30%, 0, 0);\n      width: 75px; }\n  .double-page .roulette:after {\n      background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, #ffdf0a), to(transparent));\n      background-image: linear-gradient(to bottom, transparent, #ffdf0a 50%, transparent 100%);\n      height: 100%;\n      top: 0;\n      -webkit-transform: translate3d(16px, 0, 0);\n              transform: translate3d(16px, 0, 0);\n      -webkit-box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);\n              box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);\n      width: 5px; }\n  .double-page .last-numbers h5 {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font: 15px \"RoadRadio-Thin\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin: 0; }\n  .double-page .last-numbers h5 span {\n      position: relative;\n      top: -5px; }\n  .double-page .last-numbers h5::after, .double-page .last-numbers h5::before {\n      -ms-flex-preferred-size: 35%;\n          flex-basis: 35%; }\n  .double-page .last-numbers::after,\n  .double-page .last-numbers h5::after,\n  .double-page .last-numbers h5::before {\n    background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, rgba(255, 255, 255, 0.5)), to(transparent));\n    background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%);\n    content: '';\n    display: block;\n    height: 1px;\n    width: 100%; }\n  .double-page .last-numbers .numbers {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding: 10px 0 22px; }\n  .double-page .last-numbers .numbers number + number {\n      margin-left: 5px; }\n  .double-page .bet-area {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n    padding: 26px; }\n  .double-page .bet-area button,\n    .double-page .bet-area input {\n      font: 18px \"RoadRadio-Bold\"; }\n  .double-page .bet-area button:hover {\n      opacity: .8; }\n  .double-page .bet-area--value button {\n      border-radius: 3px;\n      border: 1px solid #919191;\n      background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 223, 10, 0.5)), to(#f5ea6e));\n      background-image: linear-gradient(to top, rgba(255, 223, 10, 0.5) 0%, #f5ea6e 100%);\n      color: #353535;\n      padding: 6px 0 5px;\n      width: 57px; }\n  .double-page .bet-area--value input {\n      background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.1)), to(rgba(0, 0, 0, 0.5)));\n      background-image: linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%);\n      border: 1px solid #8e8b74;\n      border-radius: 3px;\n      outline: none !important;\n      padding: 6px 0 5px;\n      text-align: center;\n      width: 168px; }\n  .double-page .bet-area--color button {\n      border-radius: 13px;\n      -webkit-box-shadow: 0 0 25px rgba(255, 255, 255, 0.25);\n              box-shadow: 0 0 25px rgba(255, 255, 255, 0.25);\n      color: #fff;\n      padding: 18px 0 17px;\n      width: 116px; }\n  .double-page .bet-area--color button + button {\n      margin-left: 15px; }\n  .double-page .users-list-area {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n  .double-page .users-list-area users-list {\n      -ms-flex-preferred-size: 30%;\n          flex-basis: 30%; }\n"

/***/ }),

/***/ "./src/app/double/double.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoubleComponent; });
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

var DoubleComponent = (function () {
    function DoubleComponent() {
        this.title = 'Double';
        this.numbers = [{
                value: 9,
                color: 'black'
            }, {
                value: 11,
                color: 'red'
            }, {
                value: 1,
                color: 'black'
            }, {
                value: 48,
                color: 'red'
            }, {
                value: 25,
                color: 'black'
            }, {
                value: 13,
                color: 'green'
            }, {
                value: 3,
                color: 'black'
            }, {
                value: 10,
                color: 'red'
            }, {
                value: 12,
                color: 'black'
            }, {
                value: 14,
                color: 'red'
            }, {
                value: 4,
                color: 'black'
            }];
    }
    DoubleComponent.prototype.ngOnInit = function () {
    };
    DoubleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'double-page',
            template: __webpack_require__("./src/app/double/double.template.html"),
            styles: [__webpack_require__("./src/app/double/double.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DoubleComponent);
    return DoubleComponent;
}());



/***/ }),

/***/ "./src/app/double/double.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoubleModule", function() { return DoubleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__double_component__ = __webpack_require__("./src/app/double/double.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__double_routing_module__ = __webpack_require__("./src/app/double/double-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number_number_component__ = __webpack_require__("./src/app/double/number/number.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_list_users_list_component__ = __webpack_require__("./src/app/double/users-list/users-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DoubleModule = (function () {
    function DoubleModule() {
    }
    DoubleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__double_component__["a" /* DoubleComponent */],
                __WEBPACK_IMPORTED_MODULE_4__number_number_component__["a" /* NumberComponent */],
                __WEBPACK_IMPORTED_MODULE_5__users_list_users_list_component__["a" /* UsersListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__double_routing_module__["a" /* DoubleRoutingModule */]
            ],
            providers: [],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__double_component__["a" /* DoubleComponent */]]
        })
    ], DoubleModule);
    return DoubleModule;
}());



/***/ }),

/***/ "./src/app/double/double.template.html":
/***/ (function(module, exports) {

module.exports = "<page-header [title]=\"title\"></page-header>\n<div class=\"double-page\">\n    <div class=\"notification\">\n        <div class=\"timer\">\n            <h6 class=\"timer--message\">ROLLING IN:</h6>\n            <time>\n                <span>14</span>\n                <span class=\"timer--sign\">s</span>\n            </time>\n        </div>\n        <button class=\"volume\">\n            <span class=\"icon icon--volume-white\"></span>\n        </button>\n    </div>\n    <div class=\"roulette\">\n        <number \n            *ngFor=\"let item of numbers\" \n            [value]=\"item.value\" \n            [color]=\"item.color\"\n            [size]=\"'large'\"\n        ></number>\n    </div>\n    <div class=\"last-numbers\">\n        <h5>\n            <span>Last number winnings</span>\n        </h5>\n        <div class=\"numbers\">\n            <number \n                *ngFor=\"let item of numbers\" \n                [value]=\"item.value\" \n                [color]=\"item.color\"\n                [size]=\"'small'\"\n            ></number>\n        </div>\n    </div>\n    <div class=\"bet-area\">\n        <div class=\"bet-area--value\">\n            <button>MIN</button>\n            <button>-</button>\n            <input type=\"number\" id=\"betValue\" value=\"0.01\"/>\n            <button>+</button>\n            <button>MAX</button>\n        </div>\n        <div class=\"bet-area--color\">\n            <button class=\"background-image--red\">BET RED</button>\n            <button class=\"background-image--green\">BET GREEN</button>\n            <button class=\"background-image--black\">BET BLACK</button>\n        </div>\n    </div>\n    <div class=\"users-list-area\">\n        <users-list *ngFor=\"let i of [0, 1, 2]\"></users-list>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/double/number/number.component.scss":
/***/ (function(module, exports) {

module.exports = ".roulette--number {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(60%, transparent), to(rgba(0, 0, 0, 0.8)));\n  background-image: linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.8) 100%);\n  border-radius: 6px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-family: \"RoadRadio-Thin\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .roulette--number.large {\n    font-size: 27px;\n    height: 74px;\n    width: 66px; }\n  .roulette--number.small {\n    background-image: none;\n    -webkit-box-shadow: 0 0 25px rgba(255, 255, 255, 0.25);\n            box-shadow: 0 0 25px rgba(255, 255, 255, 0.25);\n    font-size: 18px;\n    height: 48px;\n    width: 44px; }\n"

/***/ }),

/***/ "./src/app/double/number/number.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberComponent; });
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

var NumberComponent = (function () {
    function NumberComponent() {
        this.color = 'black';
        this.size = 'large';
    }
    NumberComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], NumberComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], NumberComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], NumberComponent.prototype, "size", void 0);
    NumberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'number',
            template: __webpack_require__("./src/app/double/number/number.template.html"),
            styles: [__webpack_require__("./src/app/double/number/number.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NumberComponent);
    return NumberComponent;
}());



/***/ }),

/***/ "./src/app/double/number/number.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"roulette--number background--{{color}} {{size}}\">{{value}}</div>"

/***/ }),

/***/ "./src/app/double/users-list/users-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".users-list {\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  font-family: \"Roboto-Regular\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  height: 308px;\n  max-width: 300px;\n  padding-top: 14px;\n  width: 100%; }\n  .users-list header {\n    padding: 0 14px; }\n  .users-list header h3 {\n      -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);\n              box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);\n      border-bottom: 3px solid #ee2f2f;\n      font-size: 18px;\n      padding-bottom: 6px; }\n  .users-list header h3::before {\n        background-color: #ee2f2f;\n        content: '';\n        display: inline-block;\n        height: 10px;\n        margin: 0 16px;\n        width: 10px; }\n  .users-list header .total {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      font-size: 20px; }\n  .users-list header .total .icon {\n        margin: 0 8px 0 14px; }\n  .users-list .list--wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: 75%;\n    padding-top: 4px; }\n  .users-list .list--wrapper .users-count {\n      margin-left: 26px;\n      font-size: 12px; }\n  .users-list .list--wrapper ul {\n      margin: 0;\n      overflow-y: auto; }\n  .users-list .list--wrapper ul li {\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-size: 12px;\n        padding: 4px 25px; }\n  .users-list .list--wrapper ul li user-image {\n          background-color: #919191;\n          border: 1px solid #fff;\n          height: 24px;\n          margin-right: 5px;\n          width: 24px; }\n"

/***/ }),

/***/ "./src/app/double/users-list/users-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListComponent; });
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

var UsersListComponent = (function () {
    function UsersListComponent() {
    }
    UsersListComponent.prototype.ngOnInit = function () { };
    UsersListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'users-list',
            template: __webpack_require__("./src/app/double/users-list/users-list.template.html"),
            styles: [__webpack_require__("./src/app/double/users-list/users-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/double/users-list/users-list.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"users-list\">\n    <header>\n        <h3>1 To 7, Win 2x</h3>\n        <div class=\"total\">\n            <span class=\"icon icon--coins__red\"></span>\n            <span>0</span>\n        </div>\n    </header>\n    <div class=\"list--wrapper\">\n        <div class=\"users-count\">\n            <span class=\"icon icon--group\"></span>\n            <span>10</span>\n        </div>\n        <ul>\n            <li *ngFor=\"let i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]\">\n                <user-image></user-image>\n                <span>Nikname</span>\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ })

});
//# sourceMappingURL=double.module.chunk.js.map