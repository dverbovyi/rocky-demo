webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./booster/booster.module": [
		"./src/app/booster/booster.module.ts",
		"booster.module"
	],
	"./double/double.module": [
		"./src/app/double/double.module.ts",
		"double.module"
	],
	"./faq/faq.module": [
		"./src/app/faq/faq.module.ts",
		"faq.module"
	],
	"./fast/fast.module": [
		"./src/app/fast/fast.module.ts",
		"fast.module"
	],
	"./policy/policy.module": [
		"./src/app/policy/policy.module.ts",
		"policy.module"
	],
	"./rocky/rocky.module": [
		"./src/app/rocky/rocky.module.ts",
		"rocky.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: '/rocky', pathMatch: 'full' },
    { path: 'rocky', loadChildren: './rocky/rocky.module#RockyModule' },
    { path: 'double', loadChildren: './double/double.module#DoubleModule' },
    { path: 'fast', loadChildren: './fast/fast.module#FastModule' },
    { path: 'booster', loadChildren: './booster/booster.module#BoosterModule' },
    { path: 'policy', loadChildren: './policy/policy.module#PolicyModule' },
    { path: 'faq', loadChildren: './faq/faq.module#FAQModule' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n    <app-header></app-header>\n    <sidebar-menu></sidebar-menu>\n    <section>\n        <div class=\"wrapper\">\n            <div class=\"container\">\n                <div class=\"content\">\n                    <router-outlet></router-outlet>\n                </div>\n                <app-footer></app-footer>\n            </div>\n            <winners-bar></winners-bar>\n        </div>\n    </section>\n</main>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "main section {\n  height: 100%;\n  margin: 80px 0 0 300px;\n  padding-top: 20px;\n  width: 80%;\n  width: calc(100% - 300px); }\n  main section .wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n  main section .wrapper .container {\n      margin: 0;\n      padding: 0;\n      width: 80%; }\n  main section .wrapper .container .content {\n        border: 1px solid #353535; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'app' })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/components/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  z-index: 0; }\n  :host footer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 120px;\n    width: 100%; }\n  :host footer .wrapper {\n      -ms-flex-item-align: center;\n          align-self: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      font-family: \"CopperplateGothic-Light\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n      margin: 0 auto; }\n  :host footer .wrapper h4 {\n        color: #fff;\n        font-size: 12px;\n        text-align: center; }\n  :host footer .wrapper h4 a + a {\n          padding-left: 3px;\n          border-left: 1px solid #fff; }\n"

/***/ }),

/***/ "./src/app/core/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/core/components/footer/footer.template.html"),
            styles: [__webpack_require__("./src/app/core/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/components/footer/footer.template.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"wrapper\">\n        <h4>LOREMSITE.COM lorem ipsum</h4>\n        <h4>\n            <a routerLink=\"/faq\">FAQ</a>\n            <a routerLink=\"/policy\">Privacy Policy</a>\n        </h4>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/core/components/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = "header {\n  background: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.8)), to(rgba(53, 53, 53, 0.8)));\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(53, 53, 53, 0.8) 100%);\n  -webkit-box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.6);\n          box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.6);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 80px;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 10; }\n  header::after {\n    content: '';\n    height: 1px;\n    width: 100%;\n    background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0.5)), color-stop(50%, transparent), to(rgba(255, 255, 255, 0.5)));\n    background: linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, transparent 50%, rgba(255, 255, 255, 0.5) 100%); }\n  header .navbar {\n    height: 100%;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 0 100px; }\n  header .navbar--logo {\n      background: transparent url('Rocky_Logo_Horizontal.de9d23c719bfd10fd843.png') no-repeat;\n      background-size: contain;\n      height: 70px;\n      width: 110px; }\n  header .navbar .wrapper {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n  header .navbar, header .navbar--options {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n  header .navbar--options__item {\n      margin-right: 22px; }\n  header .navbar--options__item .dropdown-toggle::after {\n        border-left: 5px solid transparent;\n        border-right: 5px solid transparent;\n        border-top: 9px solid #fff;\n        height: 0;\n        margin-bottom: 10px;\n        vertical-align: initial;\n        width: 0; }\n  header .navbar--user-profile {\n      border-left: 1px solid #545454; }\n  header .navbar--user-profile__btn {\n        background: #fff;\n        border-radius: 50%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding: 5px 8px; }\n  header .navbar--user-profile .dropdown {\n        margin-left: 22px; }\n  header .navbar--user-profile .dropdown-toggle::after {\n          content: initial; }\n"

/***/ }),

/***/ "./src/app/core/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.language = 'USA';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/core/components/header/header.template.html"),
            styles: [__webpack_require__("./src/app/core/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/components/header/header.template.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"navbar\">\n        <div class=\"navbar--logo\"></div>\n        <div class=\"wrapper\">\n            <div class=\"navbar--options\">\n                <button class=\"navbar--options__item\">\n                    <span class=\"icon icon--notification\"></span>\n                </button>\n                <button class=\"navbar--options__item\">\n                    <span class=\"icon icon--volume\"></span>\n                </button>\n                <div class=\"navbar--options__item\">\n                    <div ngbDropdown class=\"language-dropdown\">\n                        <button class=\"language-dropdown--selection\" id=\"dropdownLanguages\" ngbDropdownToggle>\n                            <span class=\"icon icon--usa\"></span>\n                        </button>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownLanguages\">\n                            <button class=\"dropdown-item\">USA</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"navbar--user-profile\">\n                <div ngbDropdown>\n                    <button ngbDropdownToggle class=\"navbar--user-profile__btn\" id=\"dropdownUserMenuBtn\">\n                        <span class=\"icon icon--avatar\"></span>\n                    </button>\n                    <div ngbDropdownMenu aria-labelledby=\"dropdownUserMenuBtn\">\n                        <button class=\"dropdown-item\">Logout</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/core/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__("./src/app/core/components/header/header.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_menu_sidebar_menu_component__ = __webpack_require__("./src/app/core/components/sidebar-menu/sidebar-menu.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__sidebar_menu_sidebar_menu_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__ = __webpack_require__("./src/app/core/components/footer/footer.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__winners_bar_winners_bar_component__ = __webpack_require__("./src/app/core/components/winners-bar/winners-bar.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__winners_bar_winners_bar_component__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__winners_bar_winners_bar_component__["a"]; });






/***/ }),

/***/ "./src/app/core/components/sidebar-menu/sidebar-menu.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  z-index: 1; }\n\naside {\n  -webkit-box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.6);\n          box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.6);\n  border: 1px solid #353535;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.6)), to(rgba(53, 53, 53, 0.6)));\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(53, 53, 53, 0.6) 100%);\n  height: calc(100% - 97px);\n  max-width: 288px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: fixed;\n  top: 100px; }\n\naside menu .back {\n    background: #919191 -webkit-gradient(linear, right top, left top, from(#5e5318), to(#0d0e13)) no-repeat;\n    background: #919191 linear-gradient(to left, #5e5318 0%, #0d0e13 100%) no-repeat;\n    border: 1px solid #353535;\n    -webkit-box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.6);\n            box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.6);\n    display: block;\n    height: 47px;\n    width: 100%; }\n\naside menu .back:before {\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAgCAMAAAAynjhNAAAAAXNSR0IB2cksfwAAAGxQTFRFAAAAd2YzdmswdmswdmwweW0xeGoyd2swdmovgGordmswdW0zAAAAgGYzdmswdmswdm0udmswdWswVVVVgIArdmsxdGwudmowdWsxZmYzgIBAdmswdmswd2wtd2sweGkydmswdGsudmswdmswRnh+1QAAACR0Uk5TAA/J/9MVJOSXDNkjAQq+3ByepQMGuCHasgUE6est8TPGN/ToIWT0SwAAAKRJREFUeJyV09kOgyAQBdBRxKUVd1u1i13+/x8bAvMwpeGmvJ6EwMy9ROIkqXIn03mhVCm1Yj3oo9VaqGm8tl3XIu2jOoxCp9lrcdLnUBfWXGdIl1XoxnpxOgkdB6/Xmx1MXOeoNkZo3Xu97+YRasn6tIOJa1oJJdaX04T+YnA5eBr6GBoLGipaCdHKC33/WmgYhy3uX2FCUURBRjVAJUIVDAv8AdihEf+pgig6AAAAAElFTkSuQmCC\");\n      content: '';\n      display: block;\n      height: 32px;\n      margin: 0 auto;\n      width: 30px; }\n\naside menu a {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    color: #fff;\n    font: 20px \"CopperplateGothic-Light\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    height: 68px;\n    margin-right: 30px;\n    padding-left: 15px;\n    text-decoration: none; }\n\naside menu a.selected, aside menu a:hover {\n      background-color: rgba(255, 223, 10, 0.5);\n      margin: 0;\n      padding: 0 30px 0 15px; }\n\naside menu a span {\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center; }\n\naside menu a:after {\n      display: block;\n      content: '';\n      height: 1px;\n      width: 100%;\n      background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, rgba(255, 255, 255, 0.5)), to(transparent));\n      background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%); }\n\naside menu a span + span {\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center;\n      margin-left: 15px; }\n"

/***/ }),

/***/ "./src/app/core/components/sidebar-menu/sidebar-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarMenuComponent; });
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

var SidebarMenuComponent = (function () {
    function SidebarMenuComponent() {
    }
    SidebarMenuComponent.prototype.ngOnInit = function () {
    };
    SidebarMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sidebar-menu',
            template: __webpack_require__("./src/app/core/components/sidebar-menu/sidebar-menu.template.html"),
            styles: [__webpack_require__("./src/app/core/components/sidebar-menu/sidebar-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarMenuComponent);
    return SidebarMenuComponent;
}());



/***/ }),

/***/ "./src/app/core/components/sidebar-menu/sidebar-menu.template.html":
/***/ (function(module, exports) {

module.exports = "<aside>\n    <menu>\n        <button class=\"back\"></button>\n        <a routerLink=\"/rocky\" routerLinkActive=\"selected\">\n            <span class=\"icon icon--rocky\"></span>\n            <span>Rocky</span>\n        </a>\n        <a routerLink=\"/fast\" routerLinkActive=\"selected\">\n            <span class=\"icon icon--hexagon\"></span>\n            <span>Fast</span>\n        </a>\n        <a routerLink=\"/booster\" routerLinkActive=\"selected\">\n            <span class=\"icon icon--booster\"></span>\n            <span>Booster</span>\n        </a>\n        <a routerLink=\"/double\" routerLinkActive=\"selected\">\n            <span class=\"icon icon--roulette\"></span>\n            <span>Double</span>\n        </a>\n        <a href=\"javascript:void(0)\">\n            <span class=\"icon icon--crash\"></span>\n            <span>Crash</span>\n        </a>\n        <a href=\"javascript:void(0)\">\n            <span class=\"icon icon--hexagon\"></span>\n            <span>Free coins</span>\n        </a>\n        <a href=\"javascript:void(0)\">\n            <span class=\"icon icon--bonus\"></span>\n            <span>Refer friend</span>\n        </a>\n        <a href=\"javascript:void(0)\">\n            <span class=\"icon icon--market\"></span>\n            <span>Market</span>\n        </a>\n        <a routerLink=\"/faq\" routerLinkActive=\"selected\">\n            <span class=\"icon icon--hexagon\"></span>\n            <span>FAQ</span>\n        </a>\n        <a routerLink=\"/policy\" routerLinkActive=\"selected\">\n            <span class=\"icon icon--hexagon\"></span>\n            <span>Privacy Policy</span>\n        </a>\n    </menu>\n</aside>"

/***/ }),

/***/ "./src/app/core/components/winners-bar/winner/winner.component.scss":
/***/ (function(module, exports) {

module.exports = ".winner {\n  border: 1px solid; }\n  .winner header {\n    padding: 20px 0; }\n  .winner header h3 {\n      font: 20px \"CopperplateGothic-Bold\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n      margin: 0;\n      text-align: center; }\n  .winner section {\n    background-image: radial-gradient(circle at center, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.2) 50%, #000 100%);\n    padding: 12px 0 0; }\n  .winner section figure {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      margin: 0; }\n  .winner section figure user-image {\n        background-color: #fff;\n        height: 76px;\n        width: 76px; }\n  .winner section figure figcaption {\n        font-size: 14px;\n        margin: 12px 0; }\n  .winner footer {\n    padding: 10px 26px;\n    font-size: 12px; }\n  .winner footer .row {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n  .winner footer .row .value-wrap {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n  .winner footer .row h6 {\n        font: 12px \"CopperplateGothic-Light\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n        margin: 0; }\n  .winner footer .row .icon--coins {\n        height: 13px;\n        width: 12px;\n        background-size: contain;\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n        margin-left: 4px; }\n"

/***/ }),

/***/ "./src/app/core/components/winners-bar/winner/winner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WinnerComponent; });
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

var WinnerComponent = (function () {
    function WinnerComponent() {
        this.totalWin = 0;
        this.chance = 0;
    }
    WinnerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], WinnerComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], WinnerComponent.prototype, "totalWin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], WinnerComponent.prototype, "chance", void 0);
    WinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'winner',
            template: __webpack_require__("./src/app/core/components/winners-bar/winner/winner.template.html"),
            styles: [__webpack_require__("./src/app/core/components/winners-bar/winner/winner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WinnerComponent);
    return WinnerComponent;
}());



/***/ }),

/***/ "./src/app/core/components/winners-bar/winner/winner.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"winner\">\n    <header>\n        <h3>{{title}}</h3>\n    </header>\n    <section>\n        <figure>\n            <user-image></user-image>\n            <figcaption>Nickname</figcaption>\n        </figure>\n    </section>\n    <footer>\n        <div class=\"row\">\n            <h6>Total win:</h6>\n            <div class=\"value-wrap\">\n                <span>{{totalWin}}</span>\n                <span class=\"icon icon--coins\"></span>\n            </div>\n        </div>\n        <div class=\"row\">\n            <h6>Chance:</h6>\n            <div class=\"value-wrap\">\n                <span>{{chance}}</span>\n                <span class=\"percentage--sign\">%</span>\n            </div>\n        </div>\n    </footer>\n</div>"

/***/ }),

/***/ "./src/app/core/components/winners-bar/winners-bar.component.scss":
/***/ (function(module, exports) {

module.exports = "aside {\n  width: 198px;\n  height: 100%; }\n  aside li {\n    border: 1px solid #353535;\n    margin-bottom: 20px; }\n"

/***/ }),

/***/ "./src/app/core/components/winners-bar/winners-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WinnersBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__winner_winner_component__ = __webpack_require__("./src/app/core/components/winners-bar/winner/winner.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__winner_winner_component__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WinnersBarComponent = (function () {
    function WinnersBarComponent() {
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
    WinnersBarComponent.prototype.ngOnInit = function () {
    };
    WinnersBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'winners-bar',
            template: __webpack_require__("./src/app/core/components/winners-bar/winners-bar.template.html"),
            styles: [__webpack_require__("./src/app/core/components/winners-bar/winners-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WinnersBarComponent);
    return WinnersBarComponent;
}());



/***/ }),

/***/ "./src/app/core/components/winners-bar/winners-bar.template.html":
/***/ (function(module, exports) {

module.exports = "<aside>\n    <ul>\n        <li *ngFor=\"let winner of winners\">\n            <winner \n                [title]=\"winner.title\"\n                [totalWin]=\"winner.totalWin\"\n                [chance]=\"winner.chance\">\n            </winner>\n        </li>\n    </ul>\n</aside>"

/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_module_import_guard__ = __webpack_require__("./src/app/core/guards/module-import.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components__ = __webpack_require__("./src/app/core/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_data_service__ = __webpack_require__("./src/app/core/services/shared-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CoreModule = (function () {
    function CoreModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_3__guards_module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, this.constructor.name);
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* SharedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__components__["b" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components__["c" /* SidebarMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components__["e" /* WinnersBarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components__["d" /* WinnerComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__components__["b" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components__["c" /* SidebarMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components__["e" /* WinnersBarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components__["d" /* WinnerComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_shared_data_service__["a" /* SharedDataService */]]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/guards/module-import.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/core/services/shared-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedDataService; });
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

// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { Observable } from 'rxjs/Observable';
var SharedDataService = (function () {
    // private _pageMeta: IPageMeta = {name: 'Rocky'};
    // private pageBehavior: BehaviorSubject<IPageMeta> = new BehaviorSubject<IPageMeta>(this._pageMeta);
    function SharedDataService() {
    }
    SharedDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SharedDataService);
    return SharedDataService;
}());



/***/ }),

/***/ "./src/app/shared/components/counter/counter.component.scss":
/***/ (function(module, exports) {

module.exports = ".counter {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font: 40px \"RoadRadio-Bold\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 0 auto;\n  text-shadow: 0 2px 4px rgba(53, 53, 53, 0.26); }\n  .counter.highlight {\n    background: url('shine.63eb962672bac1f48ba0.png') no-repeat center; }\n  .counter--figure {\n    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);\n            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);\n    border-radius: 3px;\n    background-color: #353535;\n    padding: 0 4px; }\n  .counter--figure__gradient {\n      background: -webkit-gradient(linear, left top, left bottom, color-stop(50%, rgba(145, 145, 145, 0.5)), color-stop(50%, #fff));\n      background: linear-gradient(to bottom, rgba(145, 145, 145, 0.5) 50%, #fff 50%);\n      background-color: #353535;\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent; }\n  .counter--separator {\n    color: rgba(255, 255, 255, 0.7);\n    margin: 0 6px; }\n"

/***/ }),

/***/ "./src/app/shared/components/counter/counter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterComponent; });
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

var CounterComponent = (function () {
    function CounterComponent() {
        this.hideMinutes = false;
        this.highlight = false;
    }
    CounterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CounterComponent.prototype, "hideMinutes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CounterComponent.prototype, "highlight", void 0);
    CounterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'counter',
            template: __webpack_require__("./src/app/shared/components/counter/counter.template.html"),
            styles: [__webpack_require__("./src/app/shared/components/counter/counter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/counter/counter.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"counter\" [ngClass]=\"{'highlight': highlight}\">\n    <ng-template [ngIf]=\"!hideMinutes\">\n        <div class=\"counter--figure\">\n            <span class=\"counter--figure__gradient\">00</span>\n        </div>\n        <div class=\"counter--separator\">:</div>\n    </ng-template>\n    <div class=\"counter--figure\">\n        <span class=\"counter--figure__gradient\">42</span>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_header_page_header_component__ = __webpack_require__("./src/app/shared/components/page-header/page-header.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__page_header_page_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__counter_counter_component__ = __webpack_require__("./src/app/shared/components/counter/counter.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__counter_counter_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_image_user_image_component__ = __webpack_require__("./src/app/shared/components/user-image/user-image.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__user_image_user_image_component__["a"]; });





/***/ }),

/***/ "./src/app/shared/components/page-header/page-header.component.scss":
/***/ (function(module, exports) {

module.exports = "header {\n  background-color: rgba(0, 0, 0, 0.4);\n  height: 60px;\n  padding: 18px 46px; }\n  header h1 {\n    cursor: pointer;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font: 25px \"CopperplateGothic-Bold\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n"

/***/ }),

/***/ "./src/app/shared/components/page-header/page-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
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

var PageHeaderComponent = (function () {
    function PageHeaderComponent() {
        this.titleClickEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    PageHeaderComponent.prototype.ngOnInit = function () { };
    PageHeaderComponent.prototype.onTitleClick = function (e) {
        this.titleClickEmitter.emit(e);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PageHeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PageHeaderComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])('onTitleClick'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], PageHeaderComponent.prototype, "titleClickEmitter", void 0);
    PageHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-header',
            template: __webpack_require__("./src/app/shared/components/page-header/page-header.template.html"),
            styles: [__webpack_require__("./src/app/shared/components/page-header/page-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/page-header/page-header.template.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <h1 (click)=\"onTitleClick($event)\">\n        <span>{{title}}</span>\n        <span>{{id}}</span>\n    </h1>\n</header>"

/***/ }),

/***/ "./src/app/shared/components/user-image/user-image.component.scss":
/***/ (function(module, exports) {

module.exports = ".image {\n  background: transparent url(\"data:image/png;base64,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\") no-repeat;\n  background-position: center;\n  background-size: contain;\n  height: 80%;\n  width: 80%; }\n  .image--wrap {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/shared/components/user-image/user-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserImageComponent; });
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

var UserImageComponent = (function () {
    // @Input() private src: String;
    function UserImageComponent() {
    }
    UserImageComponent.prototype.ngOnInit = function () { };
    UserImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-image',
            template: __webpack_require__("./src/app/shared/components/user-image/user-image.template.html"),
            styles: [__webpack_require__("./src/app/shared/components/user-image/user-image.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], UserImageComponent);
    return UserImageComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/user-image/user-image.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"image--wrap\">\n    <div class=\"image\"></div>\n</div>"

/***/ }),

/***/ "./src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__shared_module__["a"]; });



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__("./src/app/shared/components/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
    __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
];
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ];
    };
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__components__["b" /* PageHeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__components__["a" /* CounterComponent */], __WEBPACK_IMPORTED_MODULE_5__components__["c" /* UserImageComponent */]],
            exports: MODULES.concat([
                __WEBPACK_IMPORTED_MODULE_5__components__["b" /* PageHeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__components__["a" /* CounterComponent */], __WEBPACK_IMPORTED_MODULE_5__components__["c" /* UserImageComponent */]
            ]),
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
});


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map