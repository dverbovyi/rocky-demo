webpackJsonp(["fast.module"],{

/***/ "./src/app/fast/fast-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FastRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fast_component__ = __webpack_require__("./src/app/fast/fast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__fast_component__["a" /* FastComponent */], pathMatch: 'full' }
];
var FastRoutingModule = (function () {
    function FastRoutingModule() {
    }
    FastRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], FastRoutingModule);
    return FastRoutingModule;
}());



/***/ }),

/***/ "./src/app/fast/fast.component.scss":
/***/ (function(module, exports) {

module.exports = ".fast-page {\n  background-color: rgba(0, 0, 0, 0.5);\n  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.1)), to(rgba(53, 53, 53, 0.6)));\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, rgba(53, 53, 53, 0.6) 100%);\n  position: relative; }\n  .fast-page::after {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(255, 223, 10, 0.2)));\n    background-image: linear-gradient(to bottom, transparent 0%, rgba(255, 223, 10, 0.2) 100%);\n    bottom: 0;\n    content: '';\n    display: block;\n    height: 92px;\n    position: absolute;\n    width: 100%; }\n  .fast-page .game-info {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #d6d6d6;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    font-family: \"RoadRadio-Thin\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    font-size: 14px;\n    height: 112px;\n    padding: 0 18px; }\n  .fast-page .game-info::after {\n      background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, rgba(255, 255, 255, 0.5)), to(transparent));\n      background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%);\n      content: '';\n      height: 1px;\n      width: 100%; }\n  .fast-page .game-info > div {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      width: 50%; }\n  .fast-page .game-info--desc {\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABVCAMAAACrQeC7AAAAAXNSR0IB2cksfwAAAPBQTFRFAAAA//8A//8A//8A/78A/8wA/9UA/9sA/98A/+MA/+YA/9EA/9UA/9gA/9sA/90A/98A/9IA/9UA/9cA/9kA/9sA/9wA/94A/9UA/9YA/9gA/9kA/9sA/9wA/90A/9YA/9cA/9gA/9oA/9sA/9wA/9YA/9cA/9gA/9kA/9oA/9sA/9sA/9YA/9gA/9kA/9oA/9sA/9sA/9cA/9gA/9kA/9kA/9oA/9sA/9sA/9cA/9gA/9kA/9kA/9oA/9sA/9cA/9gA/9gA/9cA/9kA/9oA/9oA/9sA/9cA/9gA/9kA/9kA/9oA/9oA/9sA/9gA/9gAA1eJKwAAAFB0Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCLUNERUZHSElKS0xNTk8XoUJFAAADBElEQVR4nMXaiVbaQBgF4JAECAkEBKQWRK3FjWI1rUhlRwERsH3/tykeWgiZJRPmBvIC37n/7DNRlMjHpy4+TdP0xReNRmOxWNwwEgnTtJLJlG2nM5mDbDaXzx8WCp+Ojj4XS6Xj8snJ6dnZl/OvlcrF5dX19U31W612e/v97t5xfvx8qD82Gr+emq2SwvgE2YPt2Ia+F7Z9zourLt0Q2Jbhk5bKWrJsp+qTNpwidzp2sCIbIPZ+OzZlp9MybLewl7TdhurDagS77FJyaXsn4mnjQLYd9Wd18ABasP0L/yLrrC6V3Z7tmQHbFtGTe/3Bs2haZNv2By/pLVhbnn2gshFW21qYIr8MiTlDtMgSXWrBNr1zBj1tnEgrxw7LLNY9X1BYuSIPezrJ8ooMYkeV7Yosy46MoGkzgLYdjav0tGqoXWo0frX4RV53KRM2gD5Yh1pkn54sz05sqhs62xQvchLITvKBBhCmJy/YQSRIkWHs27FQkeHsRA3Awtr2bXoZdCnAsLOYYJeykUWezpy9FHk2twIWOYdh2wHTgth5Lth6i2LHkR0vBUv2vbyPLjV/n2v/XHWn7O9qgLSyeykX+8enS5m7ZJdpE8ijV7C0IRW5LbBhDSFtWmyfDGYbIttzfNoUm0VeEHlYh3MYWd/UwIts0Vj0DSvBPrM3jqtxi7j822SnBo9dX+yCi3zD2SZ7igxkX2MkS73qxK5AqzO9X5GhO8ehLsSiN6yn3CMQ8q3AzfbUvbBF/snLM4BQrOtYTd2dh5T2kMK6p+RwenJd4bEbaVO4tOMMl/2f1gQX+U4RYsFtOyJuw4jlNgyWcffnblrYa/WaHcQJllwJVlspGOt5C2Kz0LScW2zirQ3Iet/5dsO2aC8ULNZaTxeSbFFhsFqY7GPEl415z5kANu9VuSwqrUOoHjYaCks+LO4ibY2tEmwCxnYtknWl1TdWAlzaK4ZKXfdgbDvOYInZYvOcKclS/yFisqi0T9Q/pqiT1OZ+VY71vttyxg+QrVP/bAmdpf8M9xfevhJsfV0WAwAAAABJRU5ErkJggg==\");\n      background-repeat: no-repeat;\n      background-position: center right;\n      font-size: 13px;\n      height: 85px;\n      padding-right: 18px;\n      position: relative; }\n  .fast-page .game-info--desc::after {\n        background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAABVCAMAAACLrb9GAAAAAXNSR0IB2cksfwAAATtQTFRFAAAA/+A5/+E5/+E5/984/+A6/+E5/+E5//8A/+A5/+A4/+E6/+E5//9A/+M5/+E5/+A5/+E5/+E6/+M5/+A9/+E5/+A6/+E4/+E5/90z/99A/+E5/+I4/+E5/+E5/943/+E5/+I5/+E5/+E5/+A2/+E5/+E4/+I4/+E5/+M5/+E5/+E5/+I5/+E4/+A5/+E6/987/+E5/+E5/+A5//8A/+E3/+E5/+E6/+E5/+E5/9Ur/908/+E5/+A5/+E5/+pA/+Yz/+E5/+A6/+E4/+Q2/+E6/+I4/+E5/+Q3/+I5/+I5/+E4/947/+E5/+E4/+I6/+I6/+I4/+E5/+M5/+E4/+A5/+E5/+E6/+A5/+E5/+E5/+A4/+A6/+E5/+E5/+A5/+E5/+E5/+A6/+E5/+I5/985/+E3/+E6/+A6MuEAcgAAAGl0Uk5TAMj/u0BCuMoBMVKo1wQk/GOY4gkZ93OI7A8Q8IN49Bfnk2f6IdyjV/4tz7NHO8DDOEyw0QIq/Vyg3QYe+WyPDBTzfH8T64xvHOGcXyfVrE81x7w/RLfLVKbY+2SW4/Z0hu+E6LYoPHdTKTHt/AAAAUJJREFUeJyVllVWA1EQBaGw4G7BPbi7BHd3d9v/CsgCuj6Y3zp1knnTfe/LyiYnK35yIU9QPgWJmBRCkUjFlJTGpKycCpEqqaqOSU0tdSLV09AYk2QTzSK10NoWk+p2OkTqpKs7JqU99IrUR6o/JokBBkUagmFBI4wKGYNxQRNMTsVkeoZZkeaYX4jJ4hLLIq3Qno7J6hrrIm3QtBmT9BbbIu1QuxuThT32RTqg/DAmU0cci3QCp4LOOBdyAZeCrri2hUpxI9Itd7ZQ9zyI9MiTLdQzLyK90pCMSfKNd5Eq+fivo7/j/03fx89Az83P+tO+j39TnQOdHZ+3zIx+hcDnWnfB90d3zvdUd9vzQDPEc0ezyvNNMzGTo98h8OzVvPaM117wLvmx/vHO0p7zbtQ+9Q7W3s50/W+s6P3A7xR6D/kDxm4sGEUxcaUAAAAASUVORK5CYII=\");\n        background-repeat: no-repeat;\n        content: '';\n        height: 100%;\n        position: absolute;\n        right: 0;\n        top: 0;\n        width: 25px; }\n  .fast-page .game-info--bet__info {\n      padding-left: 14px; }\n  .fast-page .game-info--bet__info .icon--coins {\n        margin-left: 4px; }\n  .fast-page .game-info--bet__btns {\n      font-family: \"RoadRadio-Regular\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif; }\n  .fast-page .game-info--bet__btns h6,\n      .fast-page .game-info--bet__btns button {\n        font-size: 18px; }\n  .fast-page .game-info--bet__btns h6 {\n        text-align: center;\n        width: 100%; }\n  .fast-page .game-info--bet__btns button {\n        background-image: -webkit-gradient(linear, left bottom, left top, from(#c1a714), to(#ffd800));\n        background-image: linear-gradient(to top, #c1a714 0%, #ffd800 100%);\n        border-radius: 4px;\n        color: #000;\n        height: 32px;\n        padding: 4px 16px; }\n  .fast-page .game-info--bet__btns button:hover {\n          opacity: .8; }\n  .fast-page .game-info--bet__btns button + button {\n        margin-left: 20px; }\n  .fast-page .game-list {\n    margin: 12px 0 0; }\n  .fast-page .game-list--item {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 6px 0 0px 28px; }\n  .fast-page .game-list--item h2 {\n        font: 16px \"RoadRadio-Regular\";\n        margin-bottom: 28px; }\n  .fast-page .game-list--item__wrap {\n        border-bottom: 1px solid rgba(145, 145, 145, 0.2);\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding-bottom: 6px; }\n  .fast-page .game-list--item__wrap game-player + game-player {\n          border-left: 1px solid rgba(145, 145, 145, 0.2); }\n"

/***/ }),

/***/ "./src/app/fast/fast.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FastComponent; });
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

var FastComponent = (function () {
    function FastComponent() {
        this.title = 'Fast';
    }
    FastComponent.prototype.ngOnInit = function () {
    };
    FastComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fast-page',
            template: __webpack_require__("./src/app/fast/fast.template.html"),
            styles: [__webpack_require__("./src/app/fast/fast.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FastComponent);
    return FastComponent;
}());



/***/ }),

/***/ "./src/app/fast/fast.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FastModule", function() { return FastModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fast_component__ = __webpack_require__("./src/app/fast/fast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fast_routing_module__ = __webpack_require__("./src/app/fast/fast-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_player_game_player_component__ = __webpack_require__("./src/app/fast/game-player/game-player.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FastModule = (function () {
    function FastModule() {
    }
    FastModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fast_component__["a" /* FastComponent */],
                __WEBPACK_IMPORTED_MODULE_4__game_player_game_player_component__["a" /* GamePlayerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__fast_routing_module__["a" /* FastRoutingModule */]
            ],
            providers: [],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__fast_component__["a" /* FastComponent */]]
        })
    ], FastModule);
    return FastModule;
}());



/***/ }),

/***/ "./src/app/fast/fast.template.html":
/***/ (function(module, exports) {

module.exports = "<page-header [title]=\"title\"></page-header>\n<div class=\"fast-page\">\n    <div class=\"game-info\">\n        <div class=\"game-info--desc\">\n            <p>\n                Fast game - fast games for three players.<br>\n                In this game you always have a good chance of winning!\n                Make a bet and take the bet of the other two players!\n            </p>\n\n        </div>\n        <div class=\"game-info--bet\">\n            <div class=\"game-info--bet__info\">\n                <div class=\"row\">\n                    <span>number of players: <span class=\"color--white\">3</span></span>\n                </div>\n                <div class=\"row\">\n                    <span>rate size: <span class=\"color--white\">1</span>00 - <span class=\"color--white\">10</span>00</span>\n                    <span class=\"icon icon--coins\"></span>\n                </div>\n                <div class=\"row\">\n                    <span>items: <span class=\"color--white\">3</span> - <span class=\"color--white\">10</span></span>\n                </div>\n            </div>\n            <div class=\"game-info--bet__btns\">\n                <div class=\"row\">\n                    <h6>place a bet</h6>\n                </div>\n                <div class=\"row\">\n                    <button>skins</button>\n                    <button>coins</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <ul class=\"game-list\">\n        <li class=\"game-list--item row\">\n            <h2>game №382203</h2>\n            <div class=\"game-list--item__wrap\">\n                <game-player></game-player>\n                <game-player></game-player>\n                <game-player></game-player>\n            </div>\n        </li>\n        <li class=\"game-list--item row\">\n            <h2>game №382203</h2>\n            <div class=\"game-list--item__wrap\">\n                <game-player></game-player>\n                <game-player></game-player>\n                <game-player></game-player>\n            </div>\n        </li>\n        <li class=\"game-list--item row\">\n            <h2>game №382203</h2>\n            <div class=\"game-list--item__wrap\">\n                <game-player></game-player>\n                <game-player></game-player>\n                <game-player></game-player>\n            </div>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/fast/game-player/game-player.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n.game-player {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font: 14px \"RoadRadio-Light\"; }\n\n.game-player .avatar {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #fff;\n    border-bottom: 5px solid;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100px;\n    width: 100px; }\n\n.game-player .avatar user-image {\n      background-color: #fff;\n      margin: 0 auto;\n      height: 100%;\n      width: 100%; }\n\n.game-player .balance,\n  .game-player .probability {\n    margin-top: 10px; }\n\n.game-player .balance {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.game-player .balance .icon {\n      background-size: contain;\n      height: 17px;\n      margin-left: 4px;\n      width: 18px; }\n\n.game-player .weapons {\n    background-color: rgba(255, 223, 10, 0.15);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-top: 4px;\n    padding: 6px 4px 12px; }\n\n.game-player .weapons--item {\n      width: 26px;\n      height: 17px;\n      border-bottom: 2px solid; }\n\n.game-player .weapons--item .icon {\n        background-size: contain;\n        height: 100%;\n        width: 100%; }\n\n.game-player .weapons .weapons--item + .weapons--item {\n      margin-left: 2px; }\n"

/***/ }),

/***/ "./src/app/fast/game-player/game-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePlayerComponent; });
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

var GamePlayerComponent = (function () {
    function GamePlayerComponent() {
    }
    GamePlayerComponent.prototype.ngOnInit = function () {
    };
    GamePlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'game-player',
            template: __webpack_require__("./src/app/fast/game-player/game-player.template.html"),
            styles: [__webpack_require__("./src/app/fast/game-player/game-player.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GamePlayerComponent);
    return GamePlayerComponent;
}());



/***/ }),

/***/ "./src/app/fast/game-player/game-player.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"game-player\">\n    <div class=\"avatar border--turquoise\">\n        <user-image></user-image>\n    </div>\n    <div class=\"balance\">\n        <span>430</span>\n        <span class=\"icon icon--coins\"></span>\n    </div>\n    <div class=\"probability\">21.2%</div>\n    <ul class=\"weapons\">\n        <li class=\"weapons--item border--red\">\n            <span class=\"icon icon--weapon\"></span>\n        </li>\n        <li class=\"weapons--item border--yellow\">\n            <span class=\"icon icon--weapon\"></span>\n        </li>\n        <li class=\"weapons--item border--red\">\n            <span class=\"icon icon--weapon\"></span>\n        </li>\n        <li class=\"weapons--item border--turquoise\">\n            <span class=\"icon icon--weapon\"></span>\n        </li>\n        <li class=\"weapons--item border--red\">\n            <span class=\"icon icon--weapon\"></span>\n        </li>\n        <li class=\"weapons--item border--red\">\n            <span class=\"icon icon--weapon\"></span>\n        </li>\n        <li class=\"weapons--item border--red\">\n            <span class=\"icon icon--weapon\"></span>\n        </li>\n        <li class=\"weapons--item border--red\">\n            <span class=\"icon icon--weapon\"></span>\n        </li>\n        <li class=\"weapons--item border--red\">\n            <span class=\"icon icon--weapon\"></span>\n        </li>\n        <li class=\"weapons--item border--red\">\n            <span class=\"icon icon--weapon\"></span>\n        </li>\n    </ul>\n</div>"

/***/ })

});
//# sourceMappingURL=fast.module.chunk.js.map