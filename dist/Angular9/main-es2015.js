(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aGuard/pagenumber.guard.ts":
/*!********************************************!*\
  !*** ./src/app/aGuard/pagenumber.guard.ts ***!
  \********************************************/
/*! exports provided: PagenumberGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenumberGuard", function() { return PagenumberGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PagenumberGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        var page = +next.paramMap.get('page');
        if (Number.isInteger(page) && page > 0) {
            return true;
        }
        else {
            this.router.navigateByUrl('/home/userhome/1');
            return false;
        }
    }
}
PagenumberGuard.ɵfac = function PagenumberGuard_Factory(t) { return new (t || PagenumberGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PagenumberGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PagenumberGuard, factory: PagenumberGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagenumberGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _aGuard_pagenumber_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aGuard/pagenumber.guard */ "./src/app/aGuard/pagenumber.guard.ts");
/* harmony import */ var _c_admin_c_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./c-admin/c-admin.component */ "./src/app/c-admin/c-admin.component.ts");
/* harmony import */ var _c_user_c_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./c-user/c-user.component */ "./src/app/c-user/c-user.component.ts");
/* harmony import */ var _c_user_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./c-user/components/home/home.component */ "./src/app/c-user/components/home/home.component.ts");
/* harmony import */ var _c_user_components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./c-user/components/pagenotfound/pagenotfound.component */ "./src/app/c-user/components/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _c_user_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./c-user/components/profile/profile.component */ "./src/app/c-user/components/profile/profile.component.ts");
/* harmony import */ var _c_admin_components_adnhome_adnhome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./c-admin/components/adnhome/adnhome.component */ "./src/app/c-admin/components/adnhome/adnhome.component.ts");
/* harmony import */ var _c_admin_components_users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./c-admin/components/users/users.component */ "./src/app/c-admin/components/users/users.component.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _components_chatapp_chatapp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/chatapp/chatapp.component */ "./src/app/components/chatapp/chatapp.component.ts");
/* harmony import */ var _components_othersprofile_othersprofile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/othersprofile/othersprofile.component */ "./src/app/components/othersprofile/othersprofile.component.ts");
/* harmony import */ var _c_user_components_viewpost_viewpost_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./c-user/components/viewpost/viewpost.component */ "./src/app/c-user/components/viewpost/viewpost.component.ts");


// import { AuthGuard } from './auth/auth.guard';














const routes = [
    {
        path: "admincp", component: _c_admin_c_admin_component__WEBPACK_IMPORTED_MODULE_3__["CAdminComponent"],
        children: [
            { path: "", redirectTo: "adminhome", pathMatch: "full" },
            { path: 'adminhome', component: _c_admin_components_adnhome_adnhome_component__WEBPACK_IMPORTED_MODULE_8__["AdnhomeComponent"] },
            { path: 'userlist', component: _c_admin_components_users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"] },
            { path: '**', component: _c_user_components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__["PagenotfoundComponent"] }
        ]
    },
    {
        path: "", redirectTo: "home", pathMatch: "full"
    },
    {
        path: 'home', component: _c_user_c_user_component__WEBPACK_IMPORTED_MODULE_4__["CUserComponent"],
        children: [
            { path: "", redirectTo: "userhome/1", pathMatch: "full" },
            { path: "userhome", redirectTo: "userhome/1", pathMatch: "full" },
            { path: 'userhome/:page', component: _c_user_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_aGuard_pagenumber_guard__WEBPACK_IMPORTED_MODULE_2__["PagenumberGuard"]] },
            { path: 'post/:id', component: _c_user_components_viewpost_viewpost_component__WEBPACK_IMPORTED_MODULE_13__["ViewpostComponent"] },
            { path: 'addpost', component: _components_post_post_component__WEBPACK_IMPORTED_MODULE_10__["PostComponent"] },
            { path: 'profile', component: _c_user_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] },
            { path: 'chat', component: _components_chatapp_chatapp_component__WEBPACK_IMPORTED_MODULE_11__["ChatappComponent"] },
            { path: 'user/:id', component: _components_othersprofile_othersprofile_component__WEBPACK_IMPORTED_MODULE_12__["OthersprofileComponent"] },
            { path: '**', component: _c_user_components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__["PagenotfoundComponent"] }
        ]
    },
    {
        path: '**', component: _c_user_c_user_component__WEBPACK_IMPORTED_MODULE_4__["CUserComponent"],
        children: [
            { path: '**', component: _c_user_components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__["PagenotfoundComponent"] }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'Angular9';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _c_user_components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./c-user/components/home/home.component */ "./src/app/c-user/components/home/home.component.ts");
/* harmony import */ var _c_user_components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./c-user/components/login/login.component */ "./src/app/c-user/components/login/login.component.ts");
/* harmony import */ var _c_user_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./c-user/components/navbar/navbar.component */ "./src/app/c-user/components/navbar/navbar.component.ts");
/* harmony import */ var _c_user_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./c-user/components/signup/signup.component */ "./src/app/c-user/components/signup/signup.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _c_admin_c_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./c-admin/c-admin.component */ "./src/app/c-admin/c-admin.component.ts");
/* harmony import */ var _c_user_c_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./c-user/c-user.component */ "./src/app/c-user/c-user.component.ts");
/* harmony import */ var _c_user_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./c-user/components/footer/footer.component */ "./src/app/c-user/components/footer/footer.component.ts");
/* harmony import */ var _c_user_components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./c-user/components/pagenotfound/pagenotfound.component */ "./src/app/c-user/components/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _c_admin_components_adnhome_adnhome_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./c-admin/components/adnhome/adnhome.component */ "./src/app/c-admin/components/adnhome/adnhome.component.ts");
/* harmony import */ var _c_admin_components_users_users_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./c-admin/components/users/users.component */ "./src/app/c-admin/components/users/users.component.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _c_user_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./c-user/components/profile/profile.component */ "./src/app/c-user/components/profile/profile.component.ts");
/* harmony import */ var _components_chatapp_chatapp_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/chatapp/chatapp.component */ "./src/app/components/chatapp/chatapp.component.ts");
/* harmony import */ var _components_othersprofile_othersprofile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/othersprofile/othersprofile.component */ "./src/app/components/othersprofile/othersprofile.component.ts");
/* harmony import */ var _c_user_components_viewpost_viewpost_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./c-user/components/viewpost/viewpost.component */ "./src/app/c-user/components/viewpost/viewpost.component.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");





























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["AuthInterceptor"],
            multi: true
        },
        _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"],
        _shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_26__["QuillModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _c_user_components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _c_user_components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _c_user_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
        _c_user_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
        _c_admin_c_admin_component__WEBPACK_IMPORTED_MODULE_15__["CAdminComponent"],
        _c_user_c_user_component__WEBPACK_IMPORTED_MODULE_16__["CUserComponent"],
        _c_user_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
        _c_user_components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_18__["PagenotfoundComponent"],
        _c_admin_components_adnhome_adnhome_component__WEBPACK_IMPORTED_MODULE_19__["AdnhomeComponent"],
        _c_admin_components_users_users_component__WEBPACK_IMPORTED_MODULE_20__["UsersComponent"],
        _components_post_post_component__WEBPACK_IMPORTED_MODULE_21__["PostComponent"],
        _c_user_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"],
        _components_chatapp_chatapp_component__WEBPACK_IMPORTED_MODULE_23__["ChatappComponent"],
        _components_othersprofile_othersprofile_component__WEBPACK_IMPORTED_MODULE_24__["OthersprofileComponent"],
        _c_user_components_viewpost_viewpost_component__WEBPACK_IMPORTED_MODULE_25__["ViewpostComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_26__["QuillModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _c_user_components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _c_user_components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                    _c_user_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                    _c_user_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
                    _c_admin_c_admin_component__WEBPACK_IMPORTED_MODULE_15__["CAdminComponent"],
                    _c_user_c_user_component__WEBPACK_IMPORTED_MODULE_16__["CUserComponent"],
                    _c_user_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                    _c_user_components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_18__["PagenotfoundComponent"],
                    _c_admin_components_adnhome_adnhome_component__WEBPACK_IMPORTED_MODULE_19__["AdnhomeComponent"],
                    _c_admin_components_users_users_component__WEBPACK_IMPORTED_MODULE_20__["UsersComponent"],
                    _components_post_post_component__WEBPACK_IMPORTED_MODULE_21__["PostComponent"],
                    _c_user_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"],
                    _components_chatapp_chatapp_component__WEBPACK_IMPORTED_MODULE_23__["ChatappComponent"],
                    _components_othersprofile_othersprofile_component__WEBPACK_IMPORTED_MODULE_24__["OthersprofileComponent"],
                    _c_user_components_viewpost_viewpost_component__WEBPACK_IMPORTED_MODULE_25__["ViewpostComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_26__["QuillModule"].forRoot()
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["AuthInterceptor"],
                        multi: true
                    },
                    _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"],
                    _shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _c_user_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../c-user/components/login/login.component */ "./src/app/c-user/components/login/login.component.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");






class AuthGuard {
    constructor(userService, router, dialog) {
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
    }
    openDialoglogin() {
        let dialogRef = this.dialog.open(_c_user_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]);
        dialogRef.afterClosed().subscribe(() => {
        });
    }
    canActivate(next, state) {
        if (!this.userService.isLoggedIn()) {
            // this.router.navigateByUrl('/login');
            this.openDialoglogin();
            this.userService.deleteToken();
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _c_user_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../c-user/components/login/login.component */ "./src/app/c-user/components/login/login.component.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");







class AuthInterceptor {
    constructor(userService, router, dialog) {
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
    }
    openDialoglogin() {
        let dialogRef = this.dialog.open(_c_user_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]);
        dialogRef.afterClosed().subscribe(() => {
        });
    }
    intercept(req, next) {
        if (req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(event => { }, err => {
                if (err.error.auth == false) {
                    // this.router.navigateByUrl('/login');
                    this.openDialoglogin();
                }
            }));
        }
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/c-admin/c-admin.component.ts":
/*!**********************************************!*\
  !*** ./src/app/c-admin/c-admin.component.ts ***!
  \**********************************************/
/*! exports provided: CAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAdminComponent", function() { return CAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class CAdminComponent {
    constructor() {
        this.name = "SAMEERA PRABHATH";
        this.bn = "S";
    }
    ngOnInit() {
    }
}
CAdminComponent.ɵfac = function CAdminComponent_Factory(t) { return new (t || CAdminComponent)(); };
CAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CAdminComponent, selectors: [["app-c-admin"]], decls: 28, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/admincp/adminhome", "routerLinkActive", "active1", 1, "nav-link", "x"], ["routerLink", "/admincp/userlist", "routerLinkActive", "active1", 1, "nav-link", "x"], [1, "dropdown", "form-inline", "my-2", "my-lg-0"], [1, "namePara"], ["data-toggle", "dropdown", "id", "dropdownMenuButton", "aria-haspopup", "true", "aria-expanded", "false", "type", "button", 1, "btn", "btn-outline-success", "my-2", "my-sm-0", 2, "border-radius", "50%"], [1, "fas", "fa-user-cog"], ["aria-labelledby", "dropdownMenuButton", 1, "dropD", "dropdown-menu", "dropdown-menu-right"], ["routerLink", "/ProfileComponent", "href", "#", 1, "dropdown-item", "DropdounHover"], ["href", "#", 1, "dropdown-item", "DropdounHover"], [1, "dropdown-divider"], [1, "dropdown-item", "DropdounHover"], [1, "fas", "fa-sign-out-alt"], ["type", "button", "routerLink", "/home", 1, "btn", "btn-success"]], template: function CAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "A D M I N H O M E\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A0LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "user home -->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".x[_ngcontent-%COMP%]:hover{\n    border-radius: 7px;\n   background: rgba(90, 63, 63, 0.062);\n}\n.x[_ngcontent-%COMP%]{\n    margin-right: 2px;\n}\n.active1[_ngcontent-%COMP%]{\n    font-weight: bold;\n    border-radius: 7px;\n    background: rgba(90, 63, 63, 0.055);\n \n}\n.dropD[_ngcontent-%COMP%]{\nmargin-top: 5px;\n    width:190px;\n    background-color: rgb(248, 249,250);\n    border-color: rgb(248, 249,250); \n}\n.namePara[_ngcontent-%COMP%]{\n    letter-spacing: 2px;\n    color: rgb(29, 27, 27);\n    font-size: 12px;\n    margin: auto 2px;\n\n}\n.DropdounHover[_ngcontent-%COMP%]:hover{\n    background-color: #eee\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy1hZG1pbi9jLWFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7R0FDbkIsbUNBQW1DO0FBQ3RDO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUNBQW1DOztBQUV2QztBQUVBO0FBQ0EsZUFBZTtJQUNYLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYy1hZG1pbi9jLWFkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueDpob3ZlcntcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICBiYWNrZ3JvdW5kOiByZ2JhKDkwLCA2MywgNjMsIDAuMDYyKTtcbn1cbi54e1xuICAgIG1hcmdpbi1yaWdodDogMnB4O1xufVxuLmFjdGl2ZTF7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoOTAsIDYzLCA2MywgMC4wNTUpO1xuIFxufVxuXG4uZHJvcER7XG5tYXJnaW4tdG9wOiA1cHg7XG4gICAgd2lkdGg6MTkwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ5LDI1MCk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQ4LCAyNDksMjUwKTsgXG59XG4ubmFtZVBhcmF7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBjb2xvcjogcmdiKDI5LCAyNywgMjcpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW46IGF1dG8gMnB4O1xuXG59XG4uRHJvcGRvdW5Ib3Zlcjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlXG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-c-admin',
                templateUrl: './c-admin.component.html',
                styleUrls: ['./c-admin.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/c-admin/components/adnhome/adnhome.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/c-admin/components/adnhome/adnhome.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdnhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdnhomeComponent", function() { return AdnhomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AdnhomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdnhomeComponent.ɵfac = function AdnhomeComponent_Factory(t) { return new (t || AdnhomeComponent)(); };
AdnhomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdnhomeComponent, selectors: [["app-adnhome"]], decls: 2, vars: 0, template: function AdnhomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "adnhome works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2MtYWRtaW4vY29tcG9uZW50cy9hZG5ob21lL2FkbmhvbWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdnhomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adnhome',
                templateUrl: './adnhome.component.html',
                styleUrls: ['./adnhome.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/c-admin/components/users/users.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/c-admin/components/users/users.component.ts ***!
  \*************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function UsersComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0view");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00A0delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", u_r1.fullName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", u_r1.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", u_r1.googleId, " ");
} }
class UsersComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.fetchUsers();
    }
    fetchUsers() {
        this.userService.getUsers().subscribe((data) => {
            this.user = data;
            console.log('Data requested...');
            console.log(this.user);
        });
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 17, vars: 1, consts: [[1, "mainDiv"], [1, "btn-h1"], [1, "table", "tableWidth", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btnB", "btn", "btn-sm", "btn-outline-dark"], [1, "fas", "fa-pencil-alt"], ["type", "button", 1, "btnB", "del-btn", "btn", "btn-sm", "btn-outline-danger"], [1, "fas", "fa-trash-alt"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Users List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UsersComponent_tr_15_Template, 15, 3, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2MtYWRtaW4vY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.css']
            }]
    }], function () { return [{ type: _shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/c-user/c-user.component.ts":
/*!********************************************!*\
  !*** ./src/app/c-user/c-user.component.ts ***!
  \********************************************/
/*! exports provided: CUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUserComponent", function() { return CUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/c-user/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/c-user/components/footer/footer.component.ts");





class CUserComponent {
    constructor() { }
    ngOnInit() {
    }
}
CUserComponent.ɵfac = function CUserComponent_Factory(t) { return new (t || CUserComponent)(); };
CUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CUserComponent, selectors: [["app-c-user"]], decls: 6, vars: 0, consts: [["routerLink", "/admincp"]], template: function CUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Admin -->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2MtdXNlci9jLXVzZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-c-user',
                templateUrl: './c-user.component.html',
                styleUrls: ['./c-user.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/c-user/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/c-user/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 75, vars: 0, consts: [[1, "page-footer", "font-small", "mdb-color", "lighten-3", "pt-4"], [1, "container", "text-center", "text-md-left"], [1, "row"], [1, "col-md-4", "col-lg-3", "mr-auto", "my-md-4", "my-0", "mt-4", "mb-1"], [1, "font-weight-bold", "text-uppercase", "mb-4"], [1, "clearfix", "w-100", "d-md-none"], [1, "col-md-2", "col-lg-2", "mx-auto", "my-md-4", "my-0", "mt-4", "mb-1"], [1, "list-unstyled"], ["href", "#!"], [1, "col-md-4", "col-lg-3", "mx-auto", "my-md-4", "my-0", "mt-4", "mb-1"], [1, "fas", "fa-home", "mr-3"], [1, "fas", "fa-envelope", "mr-3"], [1, "fas", "fa-phone", "mr-3"], [1, "fas", "fa-print", "mr-3"], [1, "col-md-2", "col-lg-2", "text-center", "mx-auto", "my-4"], ["href", "#"], [1, "fab", "fa-facebook", "fa-2x"], [1, "fab", "fa-twitter", "fa-2x"], [1, "fab", "fa-google-plus", "fa-2x"], [1, "fab", "fa-linkedin", "fa-2x"], [1, "size", "footer-copyright", "text-center", "py-3"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Footer Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Here you can use rows and columns to organize your footer content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ABOUT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "BLOG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "AWARDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Kandy, NY 10012, US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " info@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " + 01 234 567 88");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " + 01 234 567 89");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Follow Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u00A9 2018 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " sameera.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".size[_ngcontent-%COMP%]{\n    \n    margin:-40px 0 0 0;\n    padding: 0;\n    \n    float: bottom;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixVQUFVOztJQUVWLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jLXVzZXIvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l6ZXtcbiAgICBcbiAgICBtYXJnaW46LTQwcHggMCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBcbiAgICBmbG9hdDogYm90dG9tO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/c-user/components/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/c-user/components/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function HomeComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_15_div_1_Template_h5_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const p_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.gotoprofile(p_r4.ownerid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " The scrollTo() method of the window Interface can be used to scroll to a specified location on the page. It accepts 2 parameters the x and y coordinate of the page to scroll to. Passing both the parameters as 0 will scroll the page to the topmost and leftmost point. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Read more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 5k \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "100 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "1.2k ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " 01.30pm \u00A0 20/02/2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r4.topic);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By ", p_r4.ownername, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/home/post/", p_r4._id, "");
} }
function HomeComponent_div_15_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_15_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const p_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.reload(p_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r7, " ");
} }
function HomeComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_15_div_1_Template, 22, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_15_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.reload(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_15_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.reload(ctx_r13.page - 0 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_div_15_div_8_Template, 3, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_15_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.reload(ctx_r14.page - 0 + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_15_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.reload(ctx_r15.lastpage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.posts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.arr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Page ", ctx_r1.page, " of ", ctx_r1.lastpage, "");
} }
const _c0 = function (a0) { return { "show-scroll": a0 }; };
class HomeComponent {
    constructor(postService, router, route) {
        this.postService = postService;
        this.router = router;
        this.route = route;
        this.showScrollHeight = 300;
        this.hideScrollHeight = 10;
        this.loading = true;
        this.page = 1;
        this.lastpage = 9;
        this.arr = Array(10);
    }
    onWindowScroll() {
        if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
            this.showScroll = true;
        }
        else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
            this.showScroll = false;
        }
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.page = params.page;
        });
        this.postService.getPosts(this.page).subscribe((res) => {
            this.posts = res;
            this.loading = false;
        }, err => {
            alert("err" + err);
        });
        this.pagenext();
    }
    scrollToTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 5));
            }
        })();
    }
    gotoprofile(id) {
        this.router.navigate([`/home/user/${id}`]);
    }
    pagenext() {
        if (+this.page < 6) {
            for (var x = 0; x < 10; x++) {
                this.arr[x] = 1 + x;
            }
        }
        else {
            for (var x = 0; x < 10; x++) {
                this.arr[x] = +this.page - 5 + x;
            }
        }
        // if(+this.page===1)
        // for (var x = 0; x <10; x++) {
        //   this.arr[x] = x+1
        // }
        // if(+this.page%9===0){
        //   for (var x = 0; x <10; x++) {
        //     this.arr[x] = +this.page + x
        //   }
        // }
    }
    reload(x) {
        this.loading = true;
        window.scrollTo(0, 340);
        this.router.navigateByUrl('/home/userhome/' + x).then(e => {
            this.ngOnInit();
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 27, vars: 5, consts: [[1, "bg-primary", "py-5", "mb-5", "bk"], [1, "container", "h-100"], [1, "row", "h-100", "align-items-center"], [1, "col-lg-12"], [1, "display-4", "text-white", "mt-5", "mb-2"], [1, "lead", "mb-5", "text-white-50"], [1, "container"], [1, "row"], [1, "col-md-9", "mb-5"], ["style", "margin:150px 0 300px 0; ", "class", "text-center", 4, "ngIf"], [4, "ngIf"], [1, "col-md-3", "mb-5"], [1, "input-group"], ["type", "text", "placeholder", "Search for...", 1, "form-control"], [1, "input-group-btn"], ["type", "button", 1, "btn", "btn-light"], [1, "fas", "fa-search"], [1, "scroll-to-top", 3, "ngClass", "click"], [1, "fas", "fa-arrow-alt-circle-up", "fa-3x"], [1, "text-center", 2, "margin", "150px 0 300px 0"], ["role", "status", 1, "spinner-border", 2, "width", "3rem", "height", "3rem"], [1, "sr-only"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", 2, "display", "inline", "margin", "0px auto"], [1, "pagebtn", 3, "click"], [1, "fas", "fa-fast-backward"], [1, "fas", "fa-arrow-left"], [1, "fas", "fa-arrow-right"], [1, "fas", "fa-fast-forward"], [1, "d-flex", "justify-content-center"], [2, "font-weight", "bold", "border-bottom", "black 1px  solid", "padding", "5px"], [1, "card", 2, "width", "100%"], [1, "card-body", "mycard"], [1, "card-title", 2, "font-weight", "bold"], [1, "card-subtitle", "mb-2", "text-muted", 3, "click"], [1, "card-text"], [1, "card-link", 2, "font-weight", "bold", 3, "routerLink"], [2, "float", "left"], [1, "fas", "fa-heart"], [1, "fas", "fa-heart-broken"], [1, "fas", "fa-comment-dots"], [2, "float", "right"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SAMPLE NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus ab labore provident mollitia. Id assumenda voluptate earum corporis facere quibusdam quisquam iste ipsa cumque unde nisi, totam quas ipsam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 4, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_div_15_Template, 16, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "something");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_25_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.showScroll));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".bk[_ngcontent-%COMP%]{\nbackground-color: #36a4ff;\nbackground-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23ffd92e' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%2336a4ff' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23089ef1' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%230097e3' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%230090d4' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%230088c6' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%230081b7' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%230079a9' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%2300729a' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23006a8c' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%2300627e' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23005a71' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23005264' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23004a57' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%2300424b' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23003b40' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23003336' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23002b2c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23002423' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E\");\nbackground-attachment: fixed;\nbackground-size: cover;\n}\n\n.mycard[_ngcontent-%COMP%]{\n\n  \n  box-shadow: 0 0 5px rgba(196, 199, 195, 0.705);\n\n}\n\n.pagebtn[_ngcontent-%COMP%]{\n  background-color: Transparent;\n  border: none;\n  outline:none;\n  width: 8%;\n  font-weight: bold;\n  \n}\n\n.scroll-to-top[_ngcontent-%COMP%] {\n    background-color: Transparent;\n    border: none;\n    outline:none;\n    color: rgba(19, 158, 14, 0.692);\n    position: fixed;\n    bottom: 15px;\n    right: 15px;\n    display: none;\n    transition: all 1s ease-in-out;\n  }\n\n.show-scroll[_ngcontent-%COMP%] {\n     display:inline;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSx5QkFBeUI7QUFDekIsc3BDQUFzcEM7QUFDdHBDLDRCQUE0QjtBQUM1QixzQkFBc0I7QUFDdEI7O0FBRUE7O0VBRUUsc0NBQXNDO0VBQ3RDLDhDQUE4Qzs7QUFFaEQ7O0FBSUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFlBQVk7RUFDWixTQUFTO0VBQ1QsaUJBQWlCOztBQUVuQjs7QUFHRTtJQUNFLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osWUFBWTtJQUNaLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDOztBQUVBO0tBQ0csY0FBYztFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2MtdXNlci9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJre1xuYmFja2dyb3VuZC1jb2xvcjogIzM2YTRmZjtcbmJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgdmlld0JveD0nMCAwIDE2MDAgODAwJyUzRSUzQ2cgc3Ryb2tlPSclMjNmZmQ5MmUnIHN0cm9rZS13aWR0aD0nNjYuNycgc3Ryb2tlLW9wYWNpdHk9JzAuMDUnICUzRSUzQ2NpcmNsZSBmaWxsPSclMjMzNmE0ZmYnIGN4PScwJyBjeT0nMCcgcj0nMTgwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzA4OWVmMScgY3g9JzAnIGN5PScwJyByPScxNzAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMDA5N2UzJyBjeD0nMCcgY3k9JzAnIHI9JzE2MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMwMDkwZDQnIGN4PScwJyBjeT0nMCcgcj0nMTUwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzAwODhjNicgY3g9JzAnIGN5PScwJyByPScxNDAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMDA4MWI3JyBjeD0nMCcgY3k9JzAnIHI9JzEzMDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMwMDc5YTknIGN4PScwJyBjeT0nMCcgcj0nMTIwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzAwNzI5YScgY3g9JzAnIGN5PScwJyByPScxMTAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMDA2YThjJyBjeD0nMCcgY3k9JzAnIHI9JzEwMDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMwMDYyN2UnIGN4PScwJyBjeT0nMCcgcj0nOTAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMDA1YTcxJyBjeD0nMCcgY3k9JzAnIHI9JzgwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzAwNTI2NCcgY3g9JzAnIGN5PScwJyByPSc3MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMwMDRhNTcnIGN4PScwJyBjeT0nMCcgcj0nNjAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMDA0MjRiJyBjeD0nMCcgY3k9JzAnIHI9JzUwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzAwM2I0MCcgY3g9JzAnIGN5PScwJyByPSc0MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMwMDMzMzYnIGN4PScwJyBjeT0nMCcgcj0nMzAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMDAyYjJjJyBjeD0nMCcgY3k9JzAnIHI9JzIwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzAwMjQyMycgY3g9JzAnIGN5PScwJyByPScxMDAnLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbmJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubXljYXJke1xuXG4gIC8qIGJvcmRlcjogcmdiKDIzLCA5MiwgMikgMXB4IHNvbGlkOyAqL1xuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMTk2LCAxOTksIDE5NSwgMC43MDUpO1xuXG59XG5cblxuXG4ucGFnZWJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTpub25lO1xuICB3aWR0aDogOCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBcbn1cblxuICBcbiAgLnNjcm9sbC10by10b3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6IFRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOm5vbmU7XG4gICAgY29sb3I6IHJnYmEoMTksIDE1OCwgMTQsIDAuNjkyKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICAuc2hvdy1zY3JvbGwge1xuICAgICBkaXNwbGF5OmlubGluZTtcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', []]
        }] }); })();


/***/ }),

/***/ "./src/app/c-user/components/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/c-user/components/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function LoginComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.serverErrorMessages, " ");
} }
function LoginComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minimum 4 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(userService, router, dialogRef) {
        this.userService = userService;
        this.router = router;
        this.dialogRef = dialogRef;
        this.model = {
            email: '',
            password: ''
        };
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    ngOnInit() {
    }
    googlel() {
        var w = (screen.width - 800) / 2;
        var h = (screen.height - 600) / 4;
        var win = window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/googlelll', "mywindow", "location=1, resizable=yes, status=1,scrollbars=1, width=800,height=600  top=" + h + ", left=" + w);
        var timer = setInterval(() => {
            if (win.closed) {
                console.log("closed");
                this.dialogRef.close();
                clearInterval(timer);
            }
        }, 500);
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onSubmit(form) {
        this.userService.login(form.value).subscribe(res => {
            // /*next line is my new line*/ 
            // this.userService.userMode(true);
            this.userService.setToken(res['token']);
            // this.router.navigateByUrl('/home');
            this.userService.islog = true;
            this.dialogRef.close();
        }, err => {
            this.serverErrorMessages = err.error.message;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 12, consts: [[1, "wsize"], ["class", "alert alert-danger", 4, "ngIf"], [3, "ngSubmit"], ["signInForm", "ngForm"], [1, "form-group"], ["for", "formGroupExampleInput"], ["type", "text", "name", "email", "placeholder", "Email", "required", "", 1, "form-control", 3, "ngModel", "pattern", "ngClass", "ngModelChange"], ["email", "ngModel"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "name", "password", "placeholder", "Password", "required", "", "minlength", "4", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["password", "ngModel"], ["type", "submit", "value", "Sign In", 1, "btn", "btn-primary", "mb-2"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "fab", "fa-google"], [1, "alert", "alert-danger"], [1, "invalid-feedback"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_div_6_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r1.valid && ctx.onSubmit(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.model.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) { return ctx.model.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_24_listener() { return ctx.googlel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u00A0 Login With Google ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serverErrorMessages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.email)("pattern", ctx.emailRegex)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, _r1.submitted && !_r2.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.submitted && (_r2.errors == null ? null : _r2.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.password)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, _r1.submitted && !_r4.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.submitted && (_r4.errors == null ? null : _r4.errors.minlength));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"]], styles: ["@media only screen and (min-width: 680px) {\n    .wsize[_ngcontent-%COMP%]{\n        margin: 10px auto;\n        width: 500px;\n        \n        }\n  }\n\n\n\n@media only screen and (max-width: 680px) {\n    .wsize[_ngcontent-%COMP%]{\n        margin: 10px auto;\n \n        \n        }\n  }\n\n\n\nh1[_ngcontent-%COMP%]{\n    text-align: center;\n }\n\n\n\nform[_ngcontent-%COMP%]{\n     text-align: center\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixZQUFZOztRQUVaO0VBQ047Ozs7QUFJRjtJQUNJO1FBQ0ksaUJBQWlCOzs7UUFHakI7RUFDTjs7OztBQU1GO0lBQ0ksa0JBQWtCO0NBQ3JCOzs7O0FBQ0E7S0FDSTtDQUNKIiwiZmlsZSI6InNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2ODBweCkge1xuICAgIC53c2l6ZXtcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgXG4gICAgICAgIH1cbiAgfVxuXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2ODBweCkge1xuICAgIC53c2l6ZXtcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gXG4gICAgICAgIFxuICAgICAgICB9XG4gIH1cblxuXG5cblxuXG5oMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gfVxuIGZvcm17XG4gICAgIHRleHQtYWxpZ246IGNlbnRlclxuIH1cbiAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/c-user/components/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/c-user/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/c-user/components/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/c-user/components/login/login.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function NavbarComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.openDialoglogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.name, "\u00A0");
} }
function NavbarComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.bn);
} }
function NavbarComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_20_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0LogOut");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    // methana public krna eke aulak thiynawda danne naa, wenama service ekak haduwanm hri.. islog wage ewa danna
    constructor(userService, dialog, http) {
        this.userService = userService;
        this.dialog = dialog;
        this.http = http;
        this.name = "";
        this.bn = "";
    }
    ngOnInit() {
        this.userService.islog = this.userService.isLoggedIn();
        this.getuser();
    }
    openDialog() {
        let dialogRef = this.dialog.open(_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__["SignupComponent"]);
        dialogRef.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }
    openDialoglogin() {
        let dialogRef = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]);
        dialogRef.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }
    googlel() {
        var win = window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/googlelll', "mywindow", "location=1,status=1,scrollbars=1, width=800,height=800");
        var timer = setInterval(() => {
            if (win.closed) {
                console.log("closed");
                this.ngOnInit();
                clearInterval(timer);
            }
        }, 500);
    }
    getuser() {
        if (this.userService.isLoggedIn())
            this.userService.getUserProfile().subscribe((res) => {
                this.name = res.user.fullName.toUpperCase();
                this.bn = res.user.fullName.split('')[0].toUpperCase();
            }, err => {
                console.log(err);
            });
    }
    logout() {
        this.userService.deleteToken();
        this.ngOnInit();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 21, vars: 5, consts: [[1, "navbar", "navbar-expand-sm", "navbar-light", "bg-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/home/userhome", "routerLinkActive", "active1", 1, "nav-link", "x"], ["routerLink", "/home/addpost", "routerLinkActive", "active1", 1, "nav-link", "x"], ["routerLink", "/home/chat", "routerLinkActive", "active1", 1, "nav-link", "x"], [1, "dropdown", "form-inline", "my-2", "my-lg-0"], ["type", "button", "class", "btn btn-success  btn-sm ", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success  btn-sm", 3, "click", 4, "ngIf"], ["class", "namePara", 4, "ngIf"], ["style", "border-radius:50%", "class", "btn btn-outline-success my-2 my-sm-0", "data-toggle", "dropdown", "id", "dropdownMenuButton", "aria-haspopup", "true", "aria-expanded", "false", "type", "button", 4, "ngIf"], ["class", "dropD dropdown-menu dropdown-menu-right", "aria-labelledby", "dropdownMenuButton", 4, "ngIf"], ["type", "button", 1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "namePara"], ["data-toggle", "dropdown", "id", "dropdownMenuButton", "aria-haspopup", "true", "aria-expanded", "false", "type", "button", 1, "btn", "btn-outline-success", "my-2", "my-sm-0", 2, "border-radius", "50%"], ["aria-labelledby", "dropdownMenuButton", 1, "dropD", "dropdown-menu", "dropdown-menu-right"], ["routerLink", "/home/profile", "href", "#", 1, "dropdown-item", "DropdounHover"], ["href", "home/Settings", 1, "dropdown-item", "DropdounHover"], [1, "dropdown-divider"], [1, "dropdown-item", "DropdounHover", 3, "click"], [1, "fas", "fa-sign-out-alt"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Create Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_button_15_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavbarComponent_button_17_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NavbarComponent_p_18_Template, 2, 1, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NavbarComponent_button_19_Template, 2, 1, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavbarComponent_div_20_Template, 9, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userService.islog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userService.islog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.islog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.islog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.islog);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: [".x[_ngcontent-%COMP%]:hover{\n    border-radius: 7px;\n   background: rgba(90, 63, 63, 0.062);\n}\n.x[_ngcontent-%COMP%]{\n    margin-right: 2px;\n}\n.active1[_ngcontent-%COMP%]{\n    font-weight: bold;\n    border-radius: 7px;\n    background: rgba(90, 63, 63, 0.055);\n \n}\n.dropD[_ngcontent-%COMP%]{\nmargin-top: 5px;\n    width:190px;\n    background-color: rgb(248, 249,250);\n    border-color: rgb(248, 249,250); \n}\n.namePara[_ngcontent-%COMP%]{\n    letter-spacing: 2px;\n    color: rgb(29, 27, 27);\n    font-size: 12px;\n    margin: auto 2px;\n\n}\n.DropdounHover[_ngcontent-%COMP%]:hover{\n    background-color: #eee\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0dBQ25CLG1DQUFtQztBQUN0QztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1DQUFtQzs7QUFFdkM7QUFFQTtBQUNBLGVBQWU7SUFDWCxXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2MtdXNlci9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi54OmhvdmVye1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgIGJhY2tncm91bmQ6IHJnYmEoOTAsIDYzLCA2MywgMC4wNjIpO1xufVxuLnh7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG4uYWN0aXZlMXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSg5MCwgNjMsIDYzLCAwLjA1NSk7XG4gXG59XG5cbi5kcm9wRHtcbm1hcmdpbi10b3A6IDVweDtcbiAgICB3aWR0aDoxOTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDksMjUwKTtcbiAgICBib3JkZXItY29sb3I6IHJnYigyNDgsIDI0OSwyNTApOyBcbn1cbi5uYW1lUGFyYXtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGNvbG9yOiByZ2IoMjksIDI3LCAyNyk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogYXV0byAycHg7XG5cbn1cbi5Ecm9wZG91bkhvdmVyOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/c-user/components/pagenotfound/pagenotfound.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/c-user/components/pagenotfound/pagenotfound.component.ts ***!
  \**************************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PagenotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagenotfoundComponent.ɵfac = function PagenotfoundComponent_Factory(t) { return new (t || PagenotfoundComponent)(); };
PagenotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagenotfoundComponent, selectors: [["app-pagenotfound"]], decls: 23, vars: 0, consts: [[1, "zoom-area"], [1, "error-container"], [1, "four"], [1, "screen-reader-text"], [1, "zero"], [1, "link-container"], ["type", "button", "routerLink", "/home", 1, "btn", "btn-dark"]], template: function PagenotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This Is Not The Page You Are Lookng For. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Go To Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700');\n@import url('https://fonts.googleapis.com/css?family=Catamaran:400,800');\n.error-container[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 106px;\n  font-family: 'Catamaran', sans-serif;\n  font-weight: 800;\n  margin: 70px 15px;\n}\n.error-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n}\n.error-container[_ngcontent-%COMP%]    > span.four[_ngcontent-%COMP%] {\n  width: 136px;\n  height: 43px;\n  border-radius: 999px;\n  background:\n    linear-gradient(140deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 43%, transparent 44%, transparent 100%),\n    linear-gradient(105deg, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.06) 41%, rgba(0, 0, 0, 0.07) 76%, transparent 77%, transparent 100%),\n    linear-gradient(to right, #066837, #022e0d);\n}\n.error-container[_ngcontent-%COMP%]    > span.four[_ngcontent-%COMP%]:before, .error-container[_ngcontent-%COMP%]    > span.four[_ngcontent-%COMP%]:after {\n  content: '';\n  display: block;\n  position: absolute;\n  border-radius: 999px;\n}\n.error-container[_ngcontent-%COMP%]    > span.four[_ngcontent-%COMP%]:before {\n  width: 43px;\n  height: 156px;\n  left: 60px;\n  bottom: -43px;\n  background:\n    linear-gradient(128deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 40%, transparent 41%, transparent 100%),\n    linear-gradient(116deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 50%, transparent 51%, transparent 100%),\n    linear-gradient(to top, rgb(255, 230, 0), rgb(159, 184, 17), rgb(33, 168, 105), rgb(25, 99, 37), rgb(1, 65, 1));\n}\n.error-container[_ngcontent-%COMP%]    > span.four[_ngcontent-%COMP%]:after {\n  width: 137px;\n  height: 43px;\n  transform: rotate(-49.5deg);\n  left: -18px;\n  bottom: 36px;\n  background: linear-gradient(to right, rgb(93, 126, 3), rgb(81, 168, 9), rgb(22, 105, 6), rgb(9, 104, 56), rgb(3, 36, 1));\n}\n.error-container[_ngcontent-%COMP%]    > span.zero[_ngcontent-%COMP%] {\n  vertical-align: text-top;\n  width: 156px;\n  height: 156px;\n  border-radius: 999px;\n  background: linear-gradient(-45deg, transparent 0%, rgba(0, 0, 0, 0.06) 50%,  transparent 51%, transparent 100%),\n    linear-gradient(to top right, rgb(179, 224, 17), rgb(40, 206, 7), rgb(103, 179, 16), rgb(14, 121, 23), rgb(13, 104, 36), rgb(11, 114, 33), rgb(3, 61, 27));\n  overflow: hidden;\n  -webkit-animation: bgshadow 5s infinite;\n          animation: bgshadow 5s infinite;\n}\n.error-container[_ngcontent-%COMP%]    > span.zero[_ngcontent-%COMP%]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  transform: rotate(45deg);\n  width: 90px;\n  height: 90px;\n  background-color: transparent;\n  left: 0px;\n  bottom: 0px;\n  background:\n    linear-gradient(95deg, transparent 0%, transparent 8%, rgba(0, 0, 0, 0.07) 9%, transparent 50%, transparent 100%),\n    linear-gradient(85deg, transparent 0%, transparent 19%, rgba(0, 0, 0, 0.05) 20%, rgba(0, 0, 0, 0.07) 91%, transparent 92%, transparent 100%);\n}\n.error-container[_ngcontent-%COMP%]    > span.zero[_ngcontent-%COMP%]:after {\n  content: '';\n  display: block;\n  position: absolute;\n  border-radius: 999px;\n  width: 70px;\n  height: 70px;\n  left: 43px;\n  bottom: 43px;\n  background: #FDFAF5;\n  box-shadow: -2px 2px 2px 0px rgba(0, 0, 0, 0.1);\n}\n.screen-reader-text[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999em;\n    left: -9999em;\n}\n@-webkit-keyframes bgshadow {\n  0% {\n    box-shadow: inset -160px 160px 0px 5px rgba(0, 0, 0, 0.4);\n  }\n  45% {\n    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);\n  }\n  55% {\n    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);\n  }\n  100% {\n    box-shadow: inset 160px -160px 0px 5px rgba(0, 0, 0, 0.4);\n  }\n}\n@keyframes bgshadow {\n  0% {\n    box-shadow: inset -160px 160px 0px 5px rgba(0, 0, 0, 0.4);\n  }\n  45% {\n    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);\n  }\n  55% {\n    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);\n  }\n  100% {\n    box-shadow: inset 160px -160px 0px 5px rgba(0, 0, 0, 0.4);\n  }\n}\n\n*[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #FDFAF5;\n  margin-bottom: 50px;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 30px 15px;\n}\n.zoom-area[_ngcontent-%COMP%] { \n  max-width: 490px;\n  margin: 30px auto 30px;\n  font-size: 19px;\n  text-align: center;\n}\n.link-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\na.more-link[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 13px;\n    background-color: #de7e85;\n    padding: 10px 15px;\n    border-radius: 0;\n    color: #fff;\n    display: inline-block;\n    margin-right: 5px;\n    margin-bottom: 5px;\n    line-height: 1.5;\n    text-decoration: none;\n  margin-top: 50px;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUE2RTtBQUM3RSx3RUFBd0U7QUFDeEU7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFvQjtFQUNwQjs7OytDQUc2QztBQUMvQztBQUNBOztFQUVFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixVQUFVO0VBQ1YsYUFBYTtFQUNiOzs7bUhBR2lIO0FBQ25IO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHdIQUF3SDtBQUMxSDtBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCOzhKQUM0SjtFQUM1SixnQkFBZ0I7RUFDaEIsdUNBQStCO1VBQS9CLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCxXQUFXO0VBQ1g7O2dKQUU4STtBQUNoSjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsK0NBQStDO0FBQ2pEO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFFQTtFQUNFO0lBQ0UseURBQXlEO0VBQzNEO0VBQ0E7SUFDRSxvREFBb0Q7RUFDdEQ7RUFDQTtJQUNFLG9EQUFvRDtFQUN0RDtFQUNBO0lBQ0UseURBQXlEO0VBQzNEO0FBQ0Y7QUFiQTtFQUNFO0lBQ0UseURBQXlEO0VBQzNEO0VBQ0E7SUFDRSxvREFBb0Q7RUFDdEQ7RUFDQTtJQUNFLG9EQUFvRDtFQUN0RDtFQUNBO0lBQ0UseURBQXlEO0VBQzNEO0FBQ0Y7QUFFQSxlQUFlO0FBQ2Y7SUFHSSxzQkFBc0I7QUFDMUI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jLXVzZXIvY29tcG9uZW50cy9wYWdlbm90Zm91bmQvcGFnZW5vdGZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDYwMCw3MDAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q2F0YW1hcmFuOjQwMCw4MDAnKTtcbi5lcnJvci1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTA2cHg7XG4gIGZvbnQtZmFtaWx5OiAnQ2F0YW1hcmFuJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbWFyZ2luOiA3MHB4IDE1cHg7XG59XG4uZXJyb3ItY29udGFpbmVyID4gc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmVycm9yLWNvbnRhaW5lciA+IHNwYW4uZm91ciB7XG4gIHdpZHRoOiAxMzZweDtcbiAgaGVpZ2h0OiA0M3B4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDpcbiAgICBsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDAsIDAsIDAsIDAuMSkgMCUsIHJnYmEoMCwgMCwgMCwgMC4wNykgNDMlLCB0cmFuc3BhcmVudCA0NCUsIHRyYW5zcGFyZW50IDEwMCUpLFxuICAgIGxpbmVhci1ncmFkaWVudCgxMDVkZWcsIHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA0MCUsIHJnYmEoMCwgMCwgMCwgMC4wNikgNDElLCByZ2JhKDAsIDAsIDAsIDAuMDcpIDc2JSwgdHJhbnNwYXJlbnQgNzclLCB0cmFuc3BhcmVudCAxMDAlKSxcbiAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwNjY4MzcsICMwMjJlMGQpO1xufVxuLmVycm9yLWNvbnRhaW5lciA+IHNwYW4uZm91cjpiZWZvcmUsXG4uZXJyb3ItY29udGFpbmVyID4gc3Bhbi5mb3VyOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xufVxuLmVycm9yLWNvbnRhaW5lciA+IHNwYW4uZm91cjpiZWZvcmUge1xuICB3aWR0aDogNDNweDtcbiAgaGVpZ2h0OiAxNTZweDtcbiAgbGVmdDogNjBweDtcbiAgYm90dG9tOiAtNDNweDtcbiAgYmFja2dyb3VuZDpcbiAgICBsaW5lYXItZ3JhZGllbnQoMTI4ZGVnLCByZ2JhKDAsIDAsIDAsIDAuMSkgMCUsIHJnYmEoMCwgMCwgMCwgMC4wNykgNDAlLCB0cmFuc3BhcmVudCA0MSUsIHRyYW5zcGFyZW50IDEwMCUpLFxuICAgIGxpbmVhci1ncmFkaWVudCgxMTZkZWcsIHJnYmEoMCwgMCwgMCwgMC4xKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjA3KSA1MCUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgMTAwJSksXG4gICAgbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiKDI1NSwgMjMwLCAwKSwgcmdiKDE1OSwgMTg0LCAxNyksIHJnYigzMywgMTY4LCAxMDUpLCByZ2IoMjUsIDk5LCAzNyksIHJnYigxLCA2NSwgMSkpO1xufVxuLmVycm9yLWNvbnRhaW5lciA+IHNwYW4uZm91cjphZnRlciB7XG4gIHdpZHRoOiAxMzdweDtcbiAgaGVpZ2h0OiA0M3B4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDkuNWRlZyk7XG4gIGxlZnQ6IC0xOHB4O1xuICBib3R0b206IDM2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDkzLCAxMjYsIDMpLCByZ2IoODEsIDE2OCwgOSksIHJnYigyMiwgMTA1LCA2KSwgcmdiKDksIDEwNCwgNTYpLCByZ2IoMywgMzYsIDEpKTtcbn1cblxuLmVycm9yLWNvbnRhaW5lciA+IHNwYW4uemVybyB7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbiAgd2lkdGg6IDE1NnB4O1xuICBoZWlnaHQ6IDE1NnB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgdHJhbnNwYXJlbnQgMCUsIHJnYmEoMCwgMCwgMCwgMC4wNikgNTAlLCAgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCAxMDAlKSxcbiAgICBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCByZ2IoMTc5LCAyMjQsIDE3KSwgcmdiKDQwLCAyMDYsIDcpLCByZ2IoMTAzLCAxNzksIDE2KSwgcmdiKDE0LCAxMjEsIDIzKSwgcmdiKDEzLCAxMDQsIDM2KSwgcmdiKDExLCAxMTQsIDMzKSwgcmdiKDMsIDYxLCAyNykpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbmltYXRpb246IGJnc2hhZG93IDVzIGluZmluaXRlO1xufVxuLmVycm9yLWNvbnRhaW5lciA+IHNwYW4uemVybzpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbGVmdDogMHB4O1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDpcbiAgICBsaW5lYXItZ3JhZGllbnQoOTVkZWcsIHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA4JSwgcmdiYSgwLCAwLCAwLCAwLjA3KSA5JSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCAxMDAlKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoODVkZWcsIHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCAxOSUsIHJnYmEoMCwgMCwgMCwgMC4wNSkgMjAlLCByZ2JhKDAsIDAsIDAsIDAuMDcpIDkxJSwgdHJhbnNwYXJlbnQgOTIlLCB0cmFuc3BhcmVudCAxMDAlKTtcbn1cbi5lcnJvci1jb250YWluZXIgPiBzcGFuLnplcm86YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGxlZnQ6IDQzcHg7XG4gIGJvdHRvbTogNDNweDtcbiAgYmFja2dyb3VuZDogI0ZERkFGNTtcbiAgYm94LXNoYWRvdzogLTJweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5zY3JlZW4tcmVhZGVyLXRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC05OTk5ZW07XG4gICAgbGVmdDogLTk5OTllbTtcbn1cbiAgICBcbkBrZXlmcmFtZXMgYmdzaGFkb3cge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTE2MHB4IDE2MHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB9XG4gIDQ1JSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuICA1NSUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMTYwcHggLTE2MHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB9XG59XG5cbi8qIGRlbW8gc3R1ZmYgKi9cbioge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRGQUY1O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAzMHB4IDE1cHg7XG59XG4uem9vbS1hcmVhIHsgXG4gIG1heC13aWR0aDogNDkwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvIDMwcHg7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxpbmstY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYS5tb3JlLWxpbmsge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlN2U4NTtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagenotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pagenotfound',
                templateUrl: './pagenotfound.component.html',
                styleUrls: ['./pagenotfound.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/c-user/components/profile/profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/c-user/components/profile/profile.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class ProfileComponent {
    constructor(userService) {
        this.userService = userService;
        this.profile = {};
    }
    ngOnInit() {
        this.getprofile();
    }
    getprofile() {
        this.userService.getUserProfile().subscribe((res) => {
            this.profile = res.user;
        }, err => {
            console.log(err);
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 73, vars: 3, consts: [[1, "container"], [1, "row"], [1, "col-md-12", "col-sm-12", "col-xs-12", "image-section"], [1, "row", "user-left-part"], [1, "col-md-3", "col-sm-3", "col-xs-12", "user-profil-part", "pull-left"], [1, "col-md-12", "col-md-12-sm-12", "col-xs-12", "user-image", "text-center"], ["src", "https://cdn2.iconfinder.com/data/icons/user-icon-2-1/100/user_5-15-512.png", 1, "rounded-circle"], [1, "col-md-12", "col-sm-12", "col-xs-12", "user-detail-section1", "text-center"], ["id", "btn-contact", "data-toggle", "modal", "data-target", "#contact", 1, "btn", "btn-success", "btn-block", "follow"], [1, "row", "user-detail-row"], [1, "col-md-12", "col-sm-12", "user-detail-section2", "pull-left"], [1, "col-md-9", "col-sm-9", "col-xs-12", "pull-right", "profile-right-section"], [1, "row", "profile-right-section-row"], [1, "col-md-12", "profile-header"], [1, "col-md-8", "col-sm-6", "col-xs-6", "profile-header-section1", "pull-left"], [1, "col-md-4", "col-sm-6", "col-xs-6", "profile-header-section1", "text-right", "pull-rigth"], [1, "col-md-12"], [1, "col-md-8"], [1, "tab-content"], ["role", "tabpanel", "id", "profile", 1, "tab-pane", "fade", "show", "active"], [1, "col-md-2"], [1, "col-md-6"], [1, "col-md-4", "img-main-rightPart"], [1, "row", "image-right-part"], [1, "col-md-6", "pull-left", "image-right-detail"], ["href", "http://camaradecomerciozn.com/"], [1, "col-md-12", "image-right"], [1, "col-md-12", "image-right-detail-section2"], ["id", "contact", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "contact", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["signUpForm", "ngForm"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-primary"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "User type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "User Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "form", null, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile.email);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".border[_ngcontent-%COMP%]{\n        border-bottom:1px solid #F1F1F1;\n        margin-bottom:10px;\n      }\n      .container[_ngcontent-%COMP%] {\n        max-width: 100%;\n    }\n      .col-md-3[_ngcontent-%COMP%] {\n      flex: 0 0 40%;\n      max-width: 40%;\n  }\n      .col-md-2[_ngcontent-%COMP%] {\n    flex: 0 0 30.666667%;\n    max-width: 30.666667%;\n  }\n      .col-md-9[_ngcontent-%COMP%] {\n    flex: 0 0 60%;\n    max-width: 60%;\n  }\n      .image-section[_ngcontent-%COMP%]{\n        padding: 0px;\n      }\n      .image-section[_ngcontent-%COMP%]{\n        background-color: #fafafa;\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23eef4fa' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23e1effa' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23d4e9fa' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23c7e4fa' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23b9defa' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23c8e3f5' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23d7e9f0' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23e5eeeb' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23f2f4e5' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23fff9e0' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E\");\n        background-attachment: fixed;\n        background-size: cover;\n        width: 100%;\n        height:200px;\n        position: relative;\n      }\n      .user-image[_ngcontent-%COMP%]{\n        position: absolute;\n        margin-top:-50px;\n      }\n      .user-left-part[_ngcontent-%COMP%]{\n        margin: 0px;\n      }\n      .user-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        width:100px;\n        height:100px;\n      }\n      .user-profil-part[_ngcontent-%COMP%]{\n        padding-bottom:30px;\n        background-color:#FAFAFA;\n      }\n      .follow[_ngcontent-%COMP%]{    \n        margin-top:70px;   \n      }\n      .user-detail-row[_ngcontent-%COMP%]{\n        margin:0px; \n      }\n      .user-detail-section2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        font-size:12px;\n        padding: 0px;\n        margin: 0px;\n      }\n      .user-detail-section2[_ngcontent-%COMP%]{\n        margin-top:10px;\n      }\n      .user-detail-section2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n        color:#7CBBC3;\n        font-size: 20px;\n      }\n      .user-detail-section2[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{\n        font-size:12px;\n        color:#D3A86A;\n      }\n      .profile-right-section[_ngcontent-%COMP%]{\n        padding: 20px 0px 10px 15px;\n        background-color: #FFFFFF;  \n      }\n      .profile-right-section-row[_ngcontent-%COMP%]{\n        margin: 0px;\n      }\n      .profile-header-section1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        font-size: 25px;\n        margin: 0px;\n      }\n      .profile-header-section1[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n        color: #0062cc;\n      }\n      .req-btn[_ngcontent-%COMP%]{\n        height:30px;\n        font-size:12px;\n      }\n      .profile-tag[_ngcontent-%COMP%]{\n        padding: 10px;\n        border:1px solid #F6F6F6;\n      }\n      .profile-tag[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        font-size: 12px;\n        color:black;\n      }\n      .profile-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n        color:#ADADAD;\n        font-size: 20px;\n      }\n      .image-right-part[_ngcontent-%COMP%]{\n        background-color: #FCFCFC;\n        margin: 0px;\n        padding: 5px;\n      }\n      .img-main-rightPart[_ngcontent-%COMP%]{\n        background-color: #FCFCFC;\n        margin-top: auto;\n      }\n      .image-right-detail[_ngcontent-%COMP%]{\n        padding: 0px;\n      }\n      .image-right-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        font-size: 12px;\n      }\n      .image-right-detail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n        text-decoration: none;\n      }\n      .image-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        width: 100%;\n      }\n      .image-right-detail-section2[_ngcontent-%COMP%]{\n        margin: 0px;\n      }\n      .image-right-detail-section2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        color:#38ACDF;\n        margin:0px;\n      }\n      .image-right-detail-section2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n        color:#7F7F7F;\n      }\n      .nav-link[_ngcontent-%COMP%]{\n        font-size: 1.2em;    \n      }\n      .xx[_ngcontent-%COMP%]{\n   margin-left: 45px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO1FBQ0ksK0JBQStCO1FBQy9CLGtCQUFrQjtNQUNwQjtNQUNBO1FBQ0UsZUFBZTtJQUNuQjtNQUVBO01BRUUsYUFBYTtNQUNiLGNBQWM7RUFDbEI7TUFDQTtJQUVFLG9CQUFvQjtJQUNwQixxQkFBcUI7RUFDdkI7TUFDQTtJQUVFLGFBQWE7SUFDYixjQUFjO0VBQ2hCO01BQ0k7UUFDRSxZQUFZO01BQ2Q7TUFDQTtRQUNFLHlCQUF5QjtRQUN6Qiw4N0RBQTg3RDtRQUM5N0QsNEJBQTRCO1FBQzVCLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtNQUNwQjtNQUNBO1FBQ0Usa0JBQWtCO1FBQ2xCLGdCQUFnQjtNQUNsQjtNQUNBO1FBQ0UsV0FBVztNQUNiO01BQ0E7UUFDRSxXQUFXO1FBQ1gsWUFBWTtNQUNkO01BQ0E7UUFDRSxtQkFBbUI7UUFDbkIsd0JBQXdCO01BQzFCO01BQ0E7UUFDRSxlQUFlO01BQ2pCO01BQ0E7UUFDRSxVQUFVO01BQ1o7TUFDQTtRQUNFLGNBQWM7UUFDZCxZQUFZO1FBQ1osV0FBVztNQUNiO01BQ0E7UUFDRSxlQUFlO01BQ2pCO01BQ0E7UUFDRSxhQUFhO1FBQ2IsZUFBZTtNQUNqQjtNQUNBO1FBQ0UsY0FBYztRQUNkLGFBQWE7TUFDZjtNQUNBO1FBQ0UsMkJBQTJCO1FBQzNCLHlCQUF5QjtNQUMzQjtNQUNBO1FBQ0UsV0FBVztNQUNiO01BQ0E7UUFDRSxlQUFlO1FBQ2YsV0FBVztNQUNiO01BQ0E7UUFDRSxjQUFjO01BQ2hCO01BQ0E7UUFDRSxXQUFXO1FBQ1gsY0FBYztNQUNoQjtNQUNBO1FBQ0UsYUFBYTtRQUNiLHdCQUF3QjtNQUMxQjtNQUNBO1FBQ0UsZUFBZTtRQUNmLFdBQVc7TUFDYjtNQUNBO1FBQ0UsYUFBYTtRQUNiLGVBQWU7TUFDakI7TUFDQTtRQUNFLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsWUFBWTtNQUNkO01BQ0E7UUFDRSx5QkFBeUI7UUFDekIsZ0JBQWdCO01BQ2xCO01BQ0E7UUFDRSxZQUFZO01BQ2Q7TUFDQTtRQUNFLGVBQWU7TUFDakI7TUFDQTtRQUNFLHFCQUFxQjtNQUN2QjtNQUNBO1FBQ0UsV0FBVztNQUNiO01BQ0E7UUFDRSxXQUFXO01BQ2I7TUFDQTtRQUNFLGFBQWE7UUFDYixVQUFVO01BQ1o7TUFDQTtRQUNFLGFBQWE7TUFDZjtNQUVBO1FBQ0UsZ0JBQWdCO01BQ2xCO01BSUE7R0FDSCxpQkFBaUI7TUFDZCIsImZpbGUiOiJzcmMvYXBwL2MtdXNlci9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmJvcmRlcntcbiAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0YxRjFGMTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICAgICAgfVxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gIFxuICAgIC5jb2wtbWQtMyB7XG4gICAgICAtbXMtZmxleDogMCAwIDQwJTtcbiAgICAgIGZsZXg6IDAgMCA0MCU7XG4gICAgICBtYXgtd2lkdGg6IDQwJTtcbiAgfVxuICAuY29sLW1kLTIge1xuICAgIC1tcy1mbGV4OiAwIDAgMzAuNjY2NjY3JTtcbiAgICBmbGV4OiAwIDAgMzAuNjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDMwLjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC05IHtcbiAgICAtbXMtZmxleDogMCAwIDYwJTtcbiAgICBmbGV4OiAwIDAgNjAlO1xuICAgIG1heC13aWR0aDogNjAlO1xuICB9XG4gICAgICAuaW1hZ2Utc2VjdGlvbntcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgfVxuICAgICAgLmltYWdlLXNlY3Rpb257XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgdmlld0JveD0nMCAwIDE2MDAgODAwJyUzRSUzQ2cgJTNFJTNDcGF0aCBmaWxsPSclMjNlZWY0ZmEnIGQ9J000ODYgNzA1LjhjLTEwOS4zLTIxLjgtMjIzLjQtMzIuMi0zMzUuMy0xOS40Qzk5LjUgNjkyLjEgNDkgNzAzIDAgNzE5LjhWODAwaDg0My44Yy0xMTUuOS0zMy4yLTIzMC44LTY4LjEtMzQ3LjYtOTIuMkM0OTIuOCA3MDcuMSA0ODkuNCA3MDYuNSA0ODYgNzA1Ljh6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyM2UxZWZmYScgZD0nTTE2MDAgMEgwdjcxOS44YzQ5LTE2LjggOTkuNS0yNy44IDE1MC43LTMzLjVjMTExLjktMTIuNyAyMjYtMi40IDMzNS4zIDE5LjRjMy40IDAuNyA2LjggMS40IDEwLjIgMmMxMTYuOCAyNCAyMzEuNyA1OSAzNDcuNiA5Mi4ySDE2MDBWMHonLyUzRSUzQ3BhdGggZmlsbD0nJTIzZDRlOWZhJyBkPSdNNDc4LjQgNTgxYzMuMiAwLjggNi40IDEuNyA5LjUgMi41YzE5Ni4yIDUyLjUgMzg4LjcgMTMzLjUgNTkzLjUgMTc2LjZjMTc0LjIgMzYuNiAzNDkuNSAyOS4yIDUxOC42LTEwLjJWMEgwdjU3NC45YzUyLjMtMTcuNiAxMDYuNS0yNy43IDE2MS4xLTMwLjlDMjY4LjQgNTM3LjQgMzc1LjcgNTU0LjIgNDc4LjQgNTgxeicvJTNFJTNDcGF0aCBmaWxsPSclMjNjN2U0ZmEnIGQ9J00wIDB2NDI5LjRjNTUuNi0xOC40IDExMy41LTI3LjMgMTcxLjQtMjcuN2MxMDIuOC0wLjggMjAzLjIgMjIuNyAyOTkuMyA1NC41YzMgMSA1LjkgMiA4LjkgM2MxODMuNiA2MiAzNjUuNyAxNDYuMSA1NjIuNCAxOTIuMWMxODYuNyA0My43IDM3Ni4zIDM0LjQgNTU3LjktMTIuNlYwSDB6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyM2I5ZGVmYScgZD0nTTE4MS44IDI1OS40Yzk4LjIgNiAxOTEuOSAzNS4yIDI4MS4zIDcyLjFjMi44IDEuMSA1LjUgMi4zIDguMyAzLjRjMTcxIDcxLjYgMzQyLjcgMTU4LjUgNTMxLjMgMjA3LjdjMTk4LjggNTEuOCA0MDMuNCA0MC44IDU5Ny4zLTE0LjhWMEgwdjI4My4yQzU5IDI2My42IDEyMC42IDI1NS43IDE4MS44IDI1OS40eicvJTNFJTNDcGF0aCBmaWxsPSclMjNjOGUzZjUnIGQ9J00xNjAwIDBIMHYxMzYuM2M2Mi4zLTIwLjkgMTI3LjctMjcuNSAxOTIuMi0xOS4yYzkzLjYgMTIuMSAxODAuNSA0Ny43IDI2My4zIDg5LjZjMi42IDEuMyA1LjEgMi42IDcuNyAzLjljMTU4LjQgODEuMSAzMTkuNyAxNzAuOSA1MDAuMyAyMjMuMmMyMTAuNSA2MSA0MzAuOCA0OSA2MzYuNi0xNi42VjB6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyM2Q3ZTlmMCcgZD0nTTQ1NC45IDg2LjNDNjAwLjcgMTc3IDc1MS42IDI2OS4zIDkyNC4xIDMyNWMyMDguNiA2Ny40IDQzMS4zIDYwLjggNjM3LjktNS4zYzEyLjgtNC4xIDI1LjQtOC40IDM4LjEtMTIuOVYwSDI4OC4xYzU2IDIxLjMgMTA4LjcgNTAuNiAxNTkuNyA4MkM0NTAuMiA4My40IDQ1Mi41IDg0LjkgNDU0LjkgODYuM3onLyUzRSUzQ3BhdGggZmlsbD0nJTIzZTVlZWViJyBkPSdNMTYwMCAwSDQ5OGMxMTguMSA4NS44IDI0My41IDE2NC41IDM4Ni44IDIxNi4yYzE5MS44IDY5LjIgNDAwIDc0LjcgNTk1IDIxLjFjNDAuOC0xMS4yIDgxLjEtMjUuMiAxMjAuMy00MS43VjB6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyM2YyZjRlNScgZD0nTTEzOTcuNSAxNTQuOGM0Ny4yLTEwLjYgOTMuNi0yNS4zIDEzOC42LTQzLjhjMjEuNy04LjkgNDMtMTguOCA2My45LTI5LjVWMEg2NDMuNGM2Mi45IDQxLjcgMTI5LjcgNzguMiAyMDIuMSAxMDcuNEMxMDIwLjQgMTc4LjEgMTIxNC4yIDE5Ni4xIDEzOTcuNSAxNTQuOHonLyUzRSUzQ3BhdGggZmlsbD0nJTIzZmZmOWUwJyBkPSdNMTMxNS4zIDcyLjRjNzUuMy0xMi42IDE0OC45LTM3LjEgMjE2LjgtNzIuNGgtNzIzQzk2Ni44IDcxIDExNDQuNyAxMDEgMTMxNS4zIDcyLjR6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6MjAwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC51c2VyLWltYWdle1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbi10b3A6LTUwcHg7XG4gICAgICB9XG4gICAgICAudXNlci1sZWZ0LXBhcnR7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgfVxuICAgICAgLnVzZXItaW1hZ2UgaW1ne1xuICAgICAgICB3aWR0aDoxMDBweDtcbiAgICAgICAgaGVpZ2h0OjEwMHB4O1xuICAgICAgfVxuICAgICAgLnVzZXItcHJvZmlsLXBhcnR7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOjMwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I0ZBRkFGQTtcbiAgICAgIH1cbiAgICAgIC5mb2xsb3d7ICAgIFxuICAgICAgICBtYXJnaW4tdG9wOjcwcHg7ICAgXG4gICAgICB9XG4gICAgICAudXNlci1kZXRhaWwtcm93e1xuICAgICAgICBtYXJnaW46MHB4OyBcbiAgICAgIH1cbiAgICAgIC51c2VyLWRldGFpbC1zZWN0aW9uMiBwe1xuICAgICAgICBmb250LXNpemU6MTJweDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICAgIC51c2VyLWRldGFpbC1zZWN0aW9uMntcbiAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgICAgfVxuICAgICAgLnVzZXItZGV0YWlsLXNlY3Rpb24yIHNwYW57XG4gICAgICAgIGNvbG9yOiM3Q0JCQzM7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICAgIC51c2VyLWRldGFpbC1zZWN0aW9uMiBzbWFsbHtcbiAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgIGNvbG9yOiNEM0E4NkE7XG4gICAgICB9XG4gICAgICAucHJvZmlsZS1yaWdodC1zZWN0aW9ue1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDBweCAxMHB4IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7ICBcbiAgICAgIH1cbiAgICAgIC5wcm9maWxlLXJpZ2h0LXNlY3Rpb24tcm93e1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICAgIC5wcm9maWxlLWhlYWRlci1zZWN0aW9uMSBoMXtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICAgIC5wcm9maWxlLWhlYWRlci1zZWN0aW9uMSBoNXtcbiAgICAgICAgY29sb3I6ICMwMDYyY2M7XG4gICAgICB9XG4gICAgICAucmVxLWJ0bntcbiAgICAgICAgaGVpZ2h0OjMwcHg7XG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgICAgfVxuICAgICAgLnByb2ZpbGUtdGFne1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNGNkY2RjY7XG4gICAgICB9XG4gICAgICAucHJvZmlsZS10YWcgcHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgIH1cbiAgICAgIC5wcm9maWxlLXRhZyBpe1xuICAgICAgICBjb2xvcjojQURBREFEO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgICAuaW1hZ2UtcmlnaHQtcGFydHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRkNGQztcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIH1cbiAgICAgIC5pbWctbWFpbi1yaWdodFBhcnR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0ZDRkM7XG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICB9XG4gICAgICAuaW1hZ2UtcmlnaHQtZGV0YWlse1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICB9XG4gICAgICAuaW1hZ2UtcmlnaHQtZGV0YWlsIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICAgIC5pbWFnZS1yaWdodC1kZXRhaWwgYTpob3ZlcntcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgLmltYWdlLXJpZ2h0IGltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAuaW1hZ2UtcmlnaHQtZGV0YWlsLXNlY3Rpb24ye1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICAgIC5pbWFnZS1yaWdodC1kZXRhaWwtc2VjdGlvbjIgcHtcbiAgICAgICAgY29sb3I6IzM4QUNERjtcbiAgICAgICAgbWFyZ2luOjBweDtcbiAgICAgIH1cbiAgICAgIC5pbWFnZS1yaWdodC1kZXRhaWwtc2VjdGlvbjIgc3BhbntcbiAgICAgICAgY29sb3I6IzdGN0Y3RjtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5uYXYtbGlua3tcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTsgICAgXG4gICAgICB9XG4gICAgICBcbiAgXG4gIFxuICAgICAgLnh4e1xuICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gICAgICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/c-user/components/signup/signup.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/c-user/components/signup/signup.component.ts ***!
  \**************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function SignupComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " successfully ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.serverErrorMessages, " ");
} }
function SignupComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Hi There \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Welcome to the our site");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_form_8_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_form_8_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_form_8_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_form_8_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_8_div_13_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_8_div_13_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.submitted && _r8.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.submitted && _r8.errors.pattern);
} }
function SignupComponent_form_8_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_form_8_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter atleast 4 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_form_8_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_8_div_19_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_8_div_19_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.submitted && _r10.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.submitted && _r10.errors.minlength);
} }
function SignupComponent_form_8_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_form_8_div_25_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " confirm password dose not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_form_8_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_8_div_25_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_8_div_25_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.submitted && _r12.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.submitted && _r12.errors.pattern);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function SignupComponent_form_8_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_form_8_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _r5.valid && ctx_r20.onSubmit(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_8_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.userService.selectedUser.fullName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SignupComponent_form_8_div_7_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_8_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.userService.selectedUser.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignupComponent_form_8_div_13_Template, 3, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_8_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.userService.selectedUser.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignupComponent_form_8_div_19_Template, 3, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Confirm Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_8_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.confirmPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SignupComponent_form_8_div_25_Template, 3, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_form_8_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.googlel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u00A0 Login With Google ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.userService.selectedUser.fullName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, _r5.submitted && !_r6.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.submitted && !_r6.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.userService.selectedUser.email)("pattern", ctx_r4.emailRegex)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, _r5.submitted && !_r8.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.submitted && _r8.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.userService.selectedUser.password)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, _r5.submitted && !_r10.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.submitted && _r10.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", _r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.confirmPassword)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, _r5.submitted && !_r12.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.submitted && _r12.errors);
} }
class SignupComponent {
    constructor(userService, dialogRef) {
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.showSucessMessage = false;
    }
    ngOnInit() {
        this.resetSelectedUser();
    }
    googlel() {
        var w = (screen.width - 800) / 2;
        var h = (screen.height - 600) / 4;
        var win = window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/googlelll', "mywindow", "location=1, resizable=yes, status=1,scrollbars=1, width=800,height=600  top=" + h + ", left=" + w);
        var timer = setInterval(() => {
            if (win.closed) {
                console.log("closed");
                this.dialogRef.close();
                clearInterval(timer);
            }
        }, 500);
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onSubmit(form) {
        this.userService.postUser(form.value).subscribe(res => {
            this.showSucessMessage = true;
            setTimeout(() => this.showSucessMessage = false, 3000);
            this.resetForm(form);
            setTimeout(() => this.dialogRef.close(), 3000);
        }, err => {
            if (err.status === 422) {
                this.serverErrorMessages = err.error.join('<br/>');
            }
            else
                this.serverErrorMessages = 'Something went wrong.';
        });
    }
    resetSelectedUser() {
        this.userService.selectedUser = {
            fullName: '',
            email: '',
            password: ''
        };
    }
    resetForm(form) {
        this.userService.selectedUser = {
            fullName: '',
            email: '',
            password: ''
        };
        form.resetForm();
        this.serverErrorMessages = '';
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 9, vars: 5, consts: [[1, "wsize"], [4, "ngIf"], ["style", "text-align: center;", "class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["style", "text-align: center;", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [1, "alert", "alert-success", 2, "text-align", "center"], [1, "alert", "alert-danger"], [2, "text-align", "center"], [1, "text-secondary"], [1, "far", "fa-grin-beam"], [3, "ngSubmit"], ["signUpForm", "ngForm"], [1, "form-group"], ["for", "formGroupExampleInput"], ["type", "text", "name", "fullName", "placeholder", "Full Name", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["fullName", "ngModel"], ["class", "invalidtext text-danger", 4, "ngIf"], ["type", "text", "name", "email", "placeholder", "Email", "required", "", 1, "form-control", 3, "ngModel", "pattern", "ngClass", "ngModelChange"], ["email", "ngModel"], ["type", "password", "name", "password", "placeholder", "Password", "minlength", "4", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["password", "ngModel"], ["type", "password", "name", "confirmPassword", "placeholder", "Confirm Password", "required", "", 1, "form-control", 3, "pattern", "ngModel", "ngClass", "ngModelChange"], ["cPassword", "ngModel"], ["type", "submit", "value", "Signup", 1, "btn", "btn-primary", "mb-2"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "fab", "fa-google"], [1, "invalidtext", "text-danger"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_h1_2_Template, 2, 0, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SignupComponent_div_5_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SignupComponent_div_6_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SignupComponent_div_7_Template, 12, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignupComponent_form_8_Template, 32, 22, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSucessMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSucessMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serverErrorMessages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSucessMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSucessMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"]], styles: ["@media only screen and (min-width: 680px) {\n    .wsize[_ngcontent-%COMP%]{\n        margin: 10px auto;\n        width: 500px;\n        \n        }\n  }\n\n\n\n@media only screen and (max-width: 680px) {\n    .wsize[_ngcontent-%COMP%]{\n        margin: 10px auto;\n \n        \n        }\n  }\n\n\n\n.invalidtext[_ngcontent-%COMP%]{\n\n    font-size: 12px;\n}\n\n\n\nh1[_ngcontent-%COMP%]{\n   text-align: center;\n}\n\n\n\nform[_ngcontent-%COMP%]{\n    text-align: center\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLFlBQVk7O1FBRVo7RUFDTjs7OztBQUlGO0lBQ0k7UUFDSSxpQkFBaUI7OztRQUdqQjtFQUNOOzs7O0FBR0Y7O0lBRUksZUFBZTtBQUNuQjs7OztBQUlBO0dBQ0csa0JBQWtCO0FBQ3JCOzs7O0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY4MHB4KSB7XG4gICAgLndzaXple1xuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICBcbiAgICAgICAgfVxuICB9XG5cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY4MHB4KSB7XG4gICAgLndzaXple1xuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiBcbiAgICAgICAgXG4gICAgICAgIH1cbiAgfVxuXG4gICAgXG4uaW52YWxpZHRleHR7XG5cbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cblxuXG5oMXtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmZvcm17XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/c-user/components/viewpost/viewpost.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/c-user/components/viewpost/viewpost.component.ts ***!
  \******************************************************************/
/*! exports provided: ViewpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewpostComponent", function() { return ViewpostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");






function ViewpostComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "quill-view-html", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.post.topic);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.post.postbody);
} }
function ViewpostComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ViewpostComponent {
    constructor(postService, route) {
        this.postService = postService;
        this.route = route;
        this.post = {};
        this.loading = true;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.route.params.subscribe(params => {
            this.postService.getAPost(params.id).subscribe(data => {
                this.post = data;
                this.loading = false;
            }, err => {
                console.log(err);
            });
        });
    }
}
ViewpostComponent.ɵfac = function ViewpostComponent_Factory(t) { return new (t || ViewpostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ViewpostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewpostComponent, selectors: [["app-viewpost"]], decls: 2, vars: 2, consts: [["class", "container text-center", 4, "ngIf"], ["class", "loading", 4, "ngIf"], [1, "container", "text-center"], [2, "font-weight", "bold"], ["theme", "snow", 3, "content"], [1, "loading"], [1, "text-center", 2, "margin-top", "300px"], ["role", "status", 1, "spinner-border", 2, "width", "3rem", "height", "3rem"], [1, "sr-only"]], template: function ViewpostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewpostComponent_div_0_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewpostComponent_div_1_Template, 5, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_quill__WEBPACK_IMPORTED_MODULE_4__["QuillViewHTMLComponent"]], styles: [".loading[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 50%;\r\n    text-align:center;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvdmlld3Bvc3Qvdmlld3Bvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2MtdXNlci9jb21wb25lbnRzL3ZpZXdwb3N0L3ZpZXdwb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxvYWRpbmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewpostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-viewpost',
                templateUrl: './viewpost.component.html',
                styleUrls: ['./viewpost.component.css']
            }]
    }], function () { return [{ type: _shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/chatapp/chatapp.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/chatapp/chatapp.component.ts ***!
  \*********************************************************/
/*! exports provided: ChatappComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatappComponent", function() { return ChatappComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/chat.service */ "./src/app/shared/chat.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ChatappComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r1.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", m_r1.message, " ");
} }
class ChatappComponent {
    constructor(chatservice) {
        this.chatservice = chatservice;
        this.messageArray = [];
        this.chatservice.newUserJoined().subscribe((data) => {
            this.messageArray.push(data);
        });
        this.chatservice.newMsgRes().subscribe((data) => {
            this.messageArray.push(data);
        });
        this.chatservice.UserLeft().subscribe((data) => {
            this.messageArray.push(data);
        });
    }
    ngOnInit() {
        var id = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))._id;
        this.chatservice.chatst({ user: id });
    }
    join() {
        this.chatservice.joinRoom({ user: this.user, room: this.room });
    }
    leave() {
        this.chatservice.LeaveRoom({ user: this.user, room: this.room });
    }
    sendMsg() {
        this.chatservice.sendMessage({ user: this.user, room: this.room, message: this.message });
    }
    //neww
    sendpm() {
        this.chatservice.sendpmsg({ user: "5ef75fce151f0216444c970e", message: "hi sam" });
    }
}
ChatappComponent.ɵfac = function ChatappComponent_Factory(t) { return new (t || ChatappComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"])); };
ChatappComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatappComponent, selectors: [["app-chatapp"]], decls: 28, vars: 4, consts: [[2, "width", "60%", "margin", "10px auto"], [1, "input-group", "mb-3", 2, "width", "50%", "float", "left"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group", 2, "width", "50%"], ["id", "inputGroupSelect04", 1, "custom-select", 3, "ngModel", "ngModelChange"], ["value", "1"], ["value", "2"], ["value", "3"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [2, "margin", "0 auto", "width", "100%", "height", "300px", "border", "2px solid #E8C48F", "padding", "20px", "overflow", "auto"], [4, "ngFor", "ngForOf"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Type...", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control", 3, "ngModel", "ngModelChange"]], template: function ChatappComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatappComponent_Template_input_ngModelChange_5_listener($event) { return ctx.user = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatappComponent_Template_select_ngModelChange_7_listener($event) { return ctx.room = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatappComponent_Template_button_click_15_listener() { return ctx.join(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Join");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatappComponent_Template_button_click_17_listener() { return ctx.leave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ChatappComponent_div_21_Template, 5, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatappComponent_Template_input_ngModelChange_24_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatappComponent_Template_button_click_26_listener() { return ctx.sendMsg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Send >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.room);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messageArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdGFwcC9jaGF0YXBwLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatappComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chatapp',
                templateUrl: './chatapp.component.html',
                styleUrls: ['./chatapp.component.css']
            }]
    }], function () { return [{ type: _shared_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/othersprofile/othersprofile.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/othersprofile/othersprofile.component.ts ***!
  \*********************************************************************/
/*! exports provided: OthersprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersprofileComponent", function() { return OthersprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");






function OthersprofileComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "quill-view-html", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Read more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 5k \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "100 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "1.2k ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.topic);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By ", p_r1.ownername, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", p_r1.postbody);
} }
class OthersprofileComponent {
    constructor(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.data = {};
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.route.params.subscribe(params => {
            this.userService.getuserforothers(params.id).subscribe(res => {
                this.data = res;
            });
        });
    }
    sendtext() {
        this.router.navigate([`/home/chat/${this.data._id}`]);
    }
}
OthersprofileComponent.ɵfac = function OthersprofileComponent_Factory(t) { return new (t || OthersprofileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
OthersprofileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OthersprofileComponent, selectors: [["app-othersprofile"]], decls: 56, vars: 4, consts: [[1, "container"], [1, "row"], [1, "col-md-12", "col-sm-12", "col-xs-12", "image-section"], [1, "row", "user-left-part"], [1, "col-md-3", "col-sm-3", "col-xs-12", "user-profil-part", "pull-left"], [1, "col-md-12", "col-md-12-sm-12", "col-xs-12", "user-image", "text-center"], ["src", "https://cdn2.iconfinder.com/data/icons/user-icon-2-1/100/user_5-15-512.png", 1, "rounded-circle"], [1, "col-md-12", "col-sm-12", "col-xs-12", "user-detail-section1", "text-center"], ["id", "btn-contact", 1, "btn", "btn-success", "btn-block", "follow"], [1, "row", "user-detail-row"], [1, "col-md-12", "col-sm-12", "user-detail-section2", "pull-left"], [1, "col-md-9", "col-sm-9", "col-xs-12", "pull-right", "profile-right-section"], [1, "row", "profile-right-section-row"], [1, "col-md-12", "profile-header"], [1, "col-md-8", "col-sm-6", "col-xs-6", "profile-header-section1", "pull-left"], [1, "col-md-4", "col-sm-6", "col-xs-6", "profile-header-section1", "text-right", "pull-rigth"], [1, "col-md-12"], [1, "col-md-8"], [1, "tab-content"], ["role", "tabpanel", "id", "profile", 1, "tab-pane", "fade", "show", "active"], [1, "col-md-2"], [1, "col-md-6"], [1, "col-md-4", "img-main-rightPart"], [1, "row", "image-right-part"], [1, "col-md-6", "pull-left", "image-right-detail"], ["href", "http://camaradecomerciozn.com/"], [1, "col-md-12", "image-right"], [1, "col-md-12", "image-right-detail-section2"], [2, "width", "100%", "margin", "10px auto"], [4, "ngFor", "ngForOf"], [1, "card", 2, "width", "80%"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle", "mb-2", "text-muted"], ["theme", "snow", 3, "content"], ["href", "#", 1, "card-link"], [1, "fas", "fa-heart"], [1, "fas", "fa-heart-broken"], [1, "fas", "fa-comment-dots"]], template: function OthersprofileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Pro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, OthersprofileComponent_div_55_Template, 19, 3, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.user.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.user.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.posts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_quill__WEBPACK_IMPORTED_MODULE_4__["QuillViewHTMLComponent"]], styles: [".border[_ngcontent-%COMP%]{\n        border-bottom:1px solid #F1F1F1;\n        margin-bottom:10px;\n      }\n      .container[_ngcontent-%COMP%] {\n        max-width: 100%;\n    }\n      .col-md-3[_ngcontent-%COMP%] {\n      flex: 0 0 40%;\n      max-width: 40%;\n  }\n      .col-md-2[_ngcontent-%COMP%] {\n    flex: 0 0 30.666667%;\n    max-width: 30.666667%;\n  }\n      .col-md-9[_ngcontent-%COMP%] {\n    flex: 0 0 60%;\n    max-width: 60%;\n  }\n      .image-section[_ngcontent-%COMP%]{\n        padding: 0px;\n      }\n      .image-section[_ngcontent-%COMP%]{\n        background-color: #fafafa;\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23eef4fa' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23e1effa' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23d4e9fa' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23c7e4fa' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23b9defa' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23c8e3f5' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23d7e9f0' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23e5eeeb' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23f2f4e5' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23fff9e0' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E\");\n        background-attachment: fixed;\n        background-size: cover;\n        width: 100%;\n        height:200px;\n        position: relative;\n      }\n      .user-image[_ngcontent-%COMP%]{\n        position: absolute;\n        margin-top:-50px;\n      }\n      .user-left-part[_ngcontent-%COMP%]{\n        margin: 0px;\n      }\n      .user-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        width:100px;\n        height:100px;\n      }\n      .user-profil-part[_ngcontent-%COMP%]{\n        padding-bottom:30px;\n        background-color:#FAFAFA;\n      }\n      .follow[_ngcontent-%COMP%]{    \n        margin-top:70px;   \n      }\n      .user-detail-row[_ngcontent-%COMP%]{\n        margin:0px; \n      }\n      .user-detail-section2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        font-size:12px;\n        padding: 0px;\n        margin: 0px;\n      }\n      .user-detail-section2[_ngcontent-%COMP%]{\n        margin-top:10px;\n      }\n      .user-detail-section2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n        color:#7CBBC3;\n        font-size: 20px;\n      }\n      .user-detail-section2[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{\n        font-size:12px;\n        color:#D3A86A;\n      }\n      .profile-right-section[_ngcontent-%COMP%]{\n        padding: 20px 0px 10px 15px;\n        background-color: #FFFFFF;  \n      }\n      .profile-right-section-row[_ngcontent-%COMP%]{\n        margin: 0px;\n      }\n      .profile-header-section1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        font-size: 25px;\n        margin: 0px;\n      }\n      .profile-header-section1[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n        color: #0062cc;\n      }\n      .req-btn[_ngcontent-%COMP%]{\n        height:30px;\n        font-size:12px;\n      }\n      .profile-tag[_ngcontent-%COMP%]{\n        padding: 10px;\n        border:1px solid #F6F6F6;\n      }\n      .profile-tag[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        font-size: 12px;\n        color:black;\n      }\n      .profile-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n        color:#ADADAD;\n        font-size: 20px;\n      }\n      .image-right-part[_ngcontent-%COMP%]{\n        background-color: #FCFCFC;\n        margin: 0px;\n        padding: 5px;\n      }\n      .img-main-rightPart[_ngcontent-%COMP%]{\n        background-color: #FCFCFC;\n        margin-top: auto;\n      }\n      .image-right-detail[_ngcontent-%COMP%]{\n        padding: 0px;\n      }\n      .image-right-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        font-size: 12px;\n      }\n      .image-right-detail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n        text-decoration: none;\n      }\n      .image-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        width: 100%;\n      }\n      .image-right-detail-section2[_ngcontent-%COMP%]{\n        margin: 0px;\n      }\n      .image-right-detail-section2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        color:#38ACDF;\n        margin:0px;\n      }\n      .image-right-detail-section2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n        color:#7F7F7F;\n      }\n      .nav-link[_ngcontent-%COMP%]{\n        font-size: 1.2em;    \n      }\n      .xx[_ngcontent-%COMP%]{\n   margin-left: 45px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vdGhlcnNwcm9maWxlL290aGVyc3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7UUFDSSwrQkFBK0I7UUFDL0Isa0JBQWtCO01BQ3BCO01BQ0E7UUFDRSxlQUFlO0lBQ25CO01BRUE7TUFFRSxhQUFhO01BQ2IsY0FBYztFQUNsQjtNQUNBO0lBRUUsb0JBQW9CO0lBQ3BCLHFCQUFxQjtFQUN2QjtNQUNBO0lBRUUsYUFBYTtJQUNiLGNBQWM7RUFDaEI7TUFDSTtRQUNFLFlBQVk7TUFDZDtNQUNBO1FBQ0UseUJBQXlCO1FBQ3pCLDg3REFBODdEO1FBQzk3RCw0QkFBNEI7UUFDNUIsc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO01BQ3BCO01BQ0E7UUFDRSxrQkFBa0I7UUFDbEIsZ0JBQWdCO01BQ2xCO01BQ0E7UUFDRSxXQUFXO01BQ2I7TUFDQTtRQUNFLFdBQVc7UUFDWCxZQUFZO01BQ2Q7TUFDQTtRQUNFLG1CQUFtQjtRQUNuQix3QkFBd0I7TUFDMUI7TUFDQTtRQUNFLGVBQWU7TUFDakI7TUFDQTtRQUNFLFVBQVU7TUFDWjtNQUNBO1FBQ0UsY0FBYztRQUNkLFlBQVk7UUFDWixXQUFXO01BQ2I7TUFDQTtRQUNFLGVBQWU7TUFDakI7TUFDQTtRQUNFLGFBQWE7UUFDYixlQUFlO01BQ2pCO01BQ0E7UUFDRSxjQUFjO1FBQ2QsYUFBYTtNQUNmO01BQ0E7UUFDRSwyQkFBMkI7UUFDM0IseUJBQXlCO01BQzNCO01BQ0E7UUFDRSxXQUFXO01BQ2I7TUFDQTtRQUNFLGVBQWU7UUFDZixXQUFXO01BQ2I7TUFDQTtRQUNFLGNBQWM7TUFDaEI7TUFDQTtRQUNFLFdBQVc7UUFDWCxjQUFjO01BQ2hCO01BQ0E7UUFDRSxhQUFhO1FBQ2Isd0JBQXdCO01BQzFCO01BQ0E7UUFDRSxlQUFlO1FBQ2YsV0FBVztNQUNiO01BQ0E7UUFDRSxhQUFhO1FBQ2IsZUFBZTtNQUNqQjtNQUNBO1FBQ0UseUJBQXlCO1FBQ3pCLFdBQVc7UUFDWCxZQUFZO01BQ2Q7TUFDQTtRQUNFLHlCQUF5QjtRQUN6QixnQkFBZ0I7TUFDbEI7TUFDQTtRQUNFLFlBQVk7TUFDZDtNQUNBO1FBQ0UsZUFBZTtNQUNqQjtNQUNBO1FBQ0UscUJBQXFCO01BQ3ZCO01BQ0E7UUFDRSxXQUFXO01BQ2I7TUFDQTtRQUNFLFdBQVc7TUFDYjtNQUNBO1FBQ0UsYUFBYTtRQUNiLFVBQVU7TUFDWjtNQUNBO1FBQ0UsYUFBYTtNQUNmO01BRUE7UUFDRSxnQkFBZ0I7TUFDbEI7TUFJQTtHQUNILGlCQUFpQjtNQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vdGhlcnNwcm9maWxlL290aGVyc3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5ib3JkZXJ7XG4gICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNGMUYxRjE7XG4gICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICBcbiAgICAuY29sLW1kLTMge1xuICAgICAgLW1zLWZsZXg6IDAgMCA0MCU7XG4gICAgICBmbGV4OiAwIDAgNDAlO1xuICAgICAgbWF4LXdpZHRoOiA0MCU7XG4gIH1cbiAgLmNvbC1tZC0yIHtcbiAgICAtbXMtZmxleDogMCAwIDMwLjY2NjY2NyU7XG4gICAgZmxleDogMCAwIDMwLjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiAzMC42NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtOSB7XG4gICAgLW1zLWZsZXg6IDAgMCA2MCU7XG4gICAgZmxleDogMCAwIDYwJTtcbiAgICBtYXgtd2lkdGg6IDYwJTtcbiAgfVxuICAgICAgLmltYWdlLXNlY3Rpb257XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIH1cbiAgICAgIC5pbWFnZS1zZWN0aW9ue1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnIHZpZXdCb3g9JzAgMCAxNjAwIDgwMCclM0UlM0NnICUzRSUzQ3BhdGggZmlsbD0nJTIzZWVmNGZhJyBkPSdNNDg2IDcwNS44Yy0xMDkuMy0yMS44LTIyMy40LTMyLjItMzM1LjMtMTkuNEM5OS41IDY5Mi4xIDQ5IDcwMyAwIDcxOS44VjgwMGg4NDMuOGMtMTE1LjktMzMuMi0yMzAuOC02OC4xLTM0Ny42LTkyLjJDNDkyLjggNzA3LjEgNDg5LjQgNzA2LjUgNDg2IDcwNS44eicvJTNFJTNDcGF0aCBmaWxsPSclMjNlMWVmZmEnIGQ9J00xNjAwIDBIMHY3MTkuOGM0OS0xNi44IDk5LjUtMjcuOCAxNTAuNy0zMy41YzExMS45LTEyLjcgMjI2LTIuNCAzMzUuMyAxOS40YzMuNCAwLjcgNi44IDEuNCAxMC4yIDJjMTE2LjggMjQgMjMxLjcgNTkgMzQ3LjYgOTIuMkgxNjAwVjB6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyM2Q0ZTlmYScgZD0nTTQ3OC40IDU4MWMzLjIgMC44IDYuNCAxLjcgOS41IDIuNWMxOTYuMiA1Mi41IDM4OC43IDEzMy41IDU5My41IDE3Ni42YzE3NC4yIDM2LjYgMzQ5LjUgMjkuMiA1MTguNi0xMC4yVjBIMHY1NzQuOWM1Mi4zLTE3LjYgMTA2LjUtMjcuNyAxNjEuMS0zMC45QzI2OC40IDUzNy40IDM3NS43IDU1NC4yIDQ3OC40IDU4MXonLyUzRSUzQ3BhdGggZmlsbD0nJTIzYzdlNGZhJyBkPSdNMCAwdjQyOS40YzU1LjYtMTguNCAxMTMuNS0yNy4zIDE3MS40LTI3LjdjMTAyLjgtMC44IDIwMy4yIDIyLjcgMjk5LjMgNTQuNWMzIDEgNS45IDIgOC45IDNjMTgzLjYgNjIgMzY1LjcgMTQ2LjEgNTYyLjQgMTkyLjFjMTg2LjcgNDMuNyAzNzYuMyAzNC40IDU1Ny45LTEyLjZWMEgweicvJTNFJTNDcGF0aCBmaWxsPSclMjNiOWRlZmEnIGQ9J00xODEuOCAyNTkuNGM5OC4yIDYgMTkxLjkgMzUuMiAyODEuMyA3Mi4xYzIuOCAxLjEgNS41IDIuMyA4LjMgMy40YzE3MSA3MS42IDM0Mi43IDE1OC41IDUzMS4zIDIwNy43YzE5OC44IDUxLjggNDAzLjQgNDAuOCA1OTcuMy0xNC44VjBIMHYyODMuMkM1OSAyNjMuNiAxMjAuNiAyNTUuNyAxODEuOCAyNTkuNHonLyUzRSUzQ3BhdGggZmlsbD0nJTIzYzhlM2Y1JyBkPSdNMTYwMCAwSDB2MTM2LjNjNjIuMy0yMC45IDEyNy43LTI3LjUgMTkyLjItMTkuMmM5My42IDEyLjEgMTgwLjUgNDcuNyAyNjMuMyA4OS42YzIuNiAxLjMgNS4xIDIuNiA3LjcgMy45YzE1OC40IDgxLjEgMzE5LjcgMTcwLjkgNTAwLjMgMjIzLjJjMjEwLjUgNjEgNDMwLjggNDkgNjM2LjYtMTYuNlYweicvJTNFJTNDcGF0aCBmaWxsPSclMjNkN2U5ZjAnIGQ9J000NTQuOSA4Ni4zQzYwMC43IDE3NyA3NTEuNiAyNjkuMyA5MjQuMSAzMjVjMjA4LjYgNjcuNCA0MzEuMyA2MC44IDYzNy45LTUuM2MxMi44LTQuMSAyNS40LTguNCAzOC4xLTEyLjlWMEgyODguMWM1NiAyMS4zIDEwOC43IDUwLjYgMTU5LjcgODJDNDUwLjIgODMuNCA0NTIuNSA4NC45IDQ1NC45IDg2LjN6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyM2U1ZWVlYicgZD0nTTE2MDAgMEg0OThjMTE4LjEgODUuOCAyNDMuNSAxNjQuNSAzODYuOCAyMTYuMmMxOTEuOCA2OS4yIDQwMCA3NC43IDU5NSAyMS4xYzQwLjgtMTEuMiA4MS4xLTI1LjIgMTIwLjMtNDEuN1YweicvJTNFJTNDcGF0aCBmaWxsPSclMjNmMmY0ZTUnIGQ9J00xMzk3LjUgMTU0LjhjNDcuMi0xMC42IDkzLjYtMjUuMyAxMzguNi00My44YzIxLjctOC45IDQzLTE4LjggNjMuOS0yOS41VjBINjQzLjRjNjIuOSA0MS43IDEyOS43IDc4LjIgMjAyLjEgMTA3LjRDMTAyMC40IDE3OC4xIDEyMTQuMiAxOTYuMSAxMzk3LjUgMTU0Ljh6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyM2ZmZjllMCcgZD0nTTEzMTUuMyA3Mi40Yzc1LjMtMTIuNiAxNDguOS0zNy4xIDIxNi44LTcyLjRoLTcyM0M5NjYuOCA3MSAxMTQ0LjcgMTAxIDEzMTUuMyA3Mi40eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OjIwMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAudXNlci1pbWFnZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW4tdG9wOi01MHB4O1xuICAgICAgfVxuICAgICAgLnVzZXItbGVmdC1wYXJ0e1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICAgIC51c2VyLWltYWdlIGltZ3tcbiAgICAgICAgd2lkdGg6MTAwcHg7XG4gICAgICAgIGhlaWdodDoxMDBweDtcbiAgICAgIH1cbiAgICAgIC51c2VyLXByb2ZpbC1wYXJ0e1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTozMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGQUZBRkE7XG4gICAgICB9XG4gICAgICAuZm9sbG93eyAgICBcbiAgICAgICAgbWFyZ2luLXRvcDo3MHB4OyAgIFxuICAgICAgfVxuICAgICAgLnVzZXItZGV0YWlsLXJvd3tcbiAgICAgICAgbWFyZ2luOjBweDsgXG4gICAgICB9XG4gICAgICAudXNlci1kZXRhaWwtc2VjdGlvbjIgcHtcbiAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB9XG4gICAgICAudXNlci1kZXRhaWwtc2VjdGlvbjJ7XG4gICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgIH1cbiAgICAgIC51c2VyLWRldGFpbC1zZWN0aW9uMiBzcGFue1xuICAgICAgICBjb2xvcjojN0NCQkMzO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgICAudXNlci1kZXRhaWwtc2VjdGlvbjIgc21hbGx7XG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgICAgICBjb2xvcjojRDNBODZBO1xuICAgICAgfVxuICAgICAgLnByb2ZpbGUtcmlnaHQtc2VjdGlvbntcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHggMTBweCAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyAgXG4gICAgICB9XG4gICAgICAucHJvZmlsZS1yaWdodC1zZWN0aW9uLXJvd3tcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB9XG4gICAgICAucHJvZmlsZS1oZWFkZXItc2VjdGlvbjEgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB9XG4gICAgICAucHJvZmlsZS1oZWFkZXItc2VjdGlvbjEgaDV7XG4gICAgICAgIGNvbG9yOiAjMDA2MmNjO1xuICAgICAgfVxuICAgICAgLnJlcS1idG57XG4gICAgICAgIGhlaWdodDozMHB4O1xuICAgICAgICBmb250LXNpemU6MTJweDtcbiAgICAgIH1cbiAgICAgIC5wcm9maWxlLXRhZ3tcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjRjZGNkY2O1xuICAgICAgfVxuICAgICAgLnByb2ZpbGUtdGFnIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICB9XG4gICAgICAucHJvZmlsZS10YWcgaXtcbiAgICAgICAgY29sb3I6I0FEQURBRDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgICAgLmltYWdlLXJpZ2h0LXBhcnR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0ZDRkM7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB9XG4gICAgICAuaW1nLW1haW4tcmlnaHRQYXJ0e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGQ0ZDO1xuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgfVxuICAgICAgLmltYWdlLXJpZ2h0LWRldGFpbHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgfVxuICAgICAgLmltYWdlLXJpZ2h0LWRldGFpbCBwe1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgICAuaW1hZ2UtcmlnaHQtZGV0YWlsIGE6aG92ZXJ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5pbWFnZS1yaWdodCBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLmltYWdlLXJpZ2h0LWRldGFpbC1zZWN0aW9uMntcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB9XG4gICAgICAuaW1hZ2UtcmlnaHQtZGV0YWlsLXNlY3Rpb24yIHB7XG4gICAgICAgIGNvbG9yOiMzOEFDREY7XG4gICAgICAgIG1hcmdpbjowcHg7XG4gICAgICB9XG4gICAgICAuaW1hZ2UtcmlnaHQtZGV0YWlsLXNlY3Rpb24yIHNwYW57XG4gICAgICAgIGNvbG9yOiM3RjdGN0Y7XG4gICAgICB9XG4gICAgXG4gICAgICAubmF2LWxpbmt7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07ICAgIFxuICAgICAgfVxuICAgICAgXG4gIFxuICBcbiAgICAgIC54eHtcbiAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xuICAgICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OthersprofileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-othersprofile',
                templateUrl: './othersprofile.component.html',
                styleUrls: ['./othersprofile.component.css']
            }]
    }], function () { return [{ type: _shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill-image-resize-module */ "./node_modules/quill-image-resize-module/image-resize.min.js");
/* harmony import */ var quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var quill_image_compress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill-image-compress */ "./node_modules/quill-image-compress/dist/quill.imageCompressor.min.js");
/* harmony import */ var quill_image_compress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_image_compress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");









function PostComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cannot Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cannot Empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
quill__WEBPACK_IMPORTED_MODULE_1___default.a.register('modules/imageResize', quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2___default.a);
quill__WEBPACK_IMPORTED_MODULE_1___default.a.register('modules/imageCompress', quill_image_compress__WEBPACK_IMPORTED_MODULE_3___default.a);
class PostComponent {
    constructor(postService) {
        this.postService = postService;
        this.model = {
            topic: '',
            postbody: ''
        };
        this.modules = {};
        this.loading = false;
        this.ok = false;
        this.modules = {
            imageResize: {},
            imageCompress: {
                quality: 0.8,
                maxWidth: 1000,
                maxHeight: 1000,
                imageType: 'image/png',
                debug: true,
            },
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['clean'],
                ['link', 'image', 'video']
            ]
        };
    }
    ngOnInit() {
    }
    createPost() {
        if (confirm("As this site is on development stage you cannot edit your post after you save it , Are you sure?")) {
            this.loading = true;
            this.postService.addPost(this.model).subscribe(res => {
                this.loading = false;
                this.model.postbody = '';
                this.model.topic = '';
                this.ok = true;
                setTimeout(() => this.ok = false, 1500);
            }, err => {
                this.loading = false;
                alert("Somthing went Wrong");
                console.log("err" + JSON.stringify(err));
            });
        }
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], decls: 24, vars: 6, consts: [[2, "width", "60%", "margin", "auto"], [1, "form-group"], ["for", "formGroupExampleInput"], ["type", "text", "name", "Topic", "placeholder", "Topic", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["topic", "ngModel"], ["class", "invalid-feedback", 4, "ngIf"], ["name", "postbody", 3, "modules", "ngModel", "ngModelChange"], ["dsds", ""], ["type", "submit", "value", "Done", 1, "btn", "btn-primary", "mb-2", 3, "disabled", "click"], ["style", "margin: 0 0 5px 0;", "class", "spinner-border spinner-border-sm text-primary", "role", "status", 4, "ngIf"], ["style", "color: green;display: inline;", 4, "ngIf"], [1, "invalid-feedback"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-primary", 2, "margin", "0 0 5px 0"], [1, "sr-only"], [2, "color", "green", "display", "inline"], [1, "far", "fa-lg", "fa-check-circle"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostComponent_Template_input_ngModelChange_11_listener($event) { return ctx.model.topic = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PostComponent_div_13_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "quill-editor", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostComponent_Template_quill_editor_ngModelChange_17_listener($event) { return ctx.model.postbody = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PostComponent_div_19_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_Template_input_click_20_listener() { return ctx.createPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PostComponent_div_22_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PostComponent_div_23_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.topic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modules", ctx.modules)("ngModel", ctx.model.postbody);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading || ctx.model.topic === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ok);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_quill__WEBPACK_IMPORTED_MODULE_7__["QuillEditorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.css']
            }]
    }], function () { return [{ type: _shared_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/chat.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/chat.service.ts ***!
  \****************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




class ChatService {
    constructor() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__('');
    }
    //new
    chatst(data) {
        this.socket.emit('bigin', data);
    }
    //new
    sendpmsg(data) {
        this.socket.emit('sendpmsg', data);
    }
    joinRoom(data) {
        this.socket.emit('join', data);
    }
    newUserJoined() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('new user join', (data) => {
                observer.next(data);
            });
            return () => { this.socket.disconnect(); };
        });
        return observable;
    }
    LeaveRoom(data) {
        this.socket.emit('leave', data);
    }
    UserLeft() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('user left', (data) => {
                observer.next(data);
            });
            return () => { this.socket.disconnect(); };
        });
        return observable;
    }
    sendMessage(data) {
        this.socket.emit('msg', data);
    }
    newMsgRes() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('new msg', (data) => {
                observer.next(data);
            });
            return () => { this.socket.disconnect(); };
        });
        return observable;
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/post.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/post.service.ts ***!
  \****************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PostService {
    constructor(http) {
        this.http = http;
    }
    getPosts(page) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + `/posts/${page}`);
    }
    getAPost(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + `/post/${id}`);
    }
    deletePost(id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + `/post/delete/${id}`);
    }
    addPost(post) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/addpost', post);
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class UserService {
    constructor(http) {
        this.http = http;
        this.selectedUser = {
            fullName: '',
            email: '',
            password: ''
        };
        this.islog = false;
    }
    getUsers() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/userlist');
    }
    getanuser(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + `/user/${id}`);
    }
    deleteuser(id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + `/user/delete/${id}`);
    }
    postUser(user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/register', user);
    }
    login(authCredentials) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/signin', authCredentials);
    }
    getUserProfile() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/userProfile');
    }
    googlelogin() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/googlelll');
    }
    setToken(token) {
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    deleteToken() {
        localStorage.removeItem('token');
    }
    getUserPayload() {
        var token = this.getToken();
        if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        else
            return null;
    }
    isLoggedIn() {
        var userPayload = this.getUserPayload();
        if (userPayload)
            return userPayload.exp > Date.now() / 1000;
        else
            return false;
    }
    getuserforothers(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + `/getuserforothers/${id}`);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBaseUrl: '/api',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\MEAN stack app\homeproject member1\Angular9\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map