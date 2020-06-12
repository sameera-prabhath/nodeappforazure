function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _c_admin_c_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./c-admin/c-admin.component */
    "./src/app/c-admin/c-admin.component.ts");
    /* harmony import */


    var _c_user_c_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./c-user/c-user.component */
    "./src/app/c-user/c-user.component.ts");
    /* harmony import */


    var _c_user_components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./c-user/components/home/home.component */
    "./src/app/c-user/components/home/home.component.ts");
    /* harmony import */


    var _c_user_components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./c-user/components/pagenotfound/pagenotfound.component */
    "./src/app/c-user/components/pagenotfound/pagenotfound.component.ts");
    /* harmony import */


    var _c_user_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./c-user/components/profile/profile.component */
    "./src/app/c-user/components/profile/profile.component.ts");
    /* harmony import */


    var _c_admin_components_adnhome_adnhome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./c-admin/components/adnhome/adnhome.component */
    "./src/app/c-admin/components/adnhome/adnhome.component.ts");
    /* harmony import */


    var _c_admin_components_users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./c-admin/components/users/users.component */
    "./src/app/c-admin/components/users/users.component.ts");
    /* harmony import */


    var _components_post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/post/post.component */
    "./src/app/components/post/post.component.ts"); // import { AuthGuard } from './auth/auth.guard';


    var routes = [{
      path: "admincp",
      component: _c_admin_c_admin_component__WEBPACK_IMPORTED_MODULE_2__["CAdminComponent"],
      children: [{
        path: "",
        redirectTo: "adminhome",
        pathMatch: "full"
      }, {
        path: 'adminhome',
        component: _c_admin_components_adnhome_adnhome_component__WEBPACK_IMPORTED_MODULE_7__["AdnhomeComponent"]
      }, {
        path: 'userlist',
        component: _c_admin_components_users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"]
      }, {
        path: '**',
        component: _c_user_components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__["PagenotfoundComponent"]
      }]
    }, {
      path: "",
      redirectTo: "home",
      pathMatch: "full"
    }, {
      path: 'home',
      component: _c_user_c_user_component__WEBPACK_IMPORTED_MODULE_3__["CUserComponent"],
      children: [{
        path: "",
        redirectTo: "userhome",
        pathMatch: "full"
      }, {
        path: 'userhome',
        component: _c_user_components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
      }, {
        path: 'addpost',
        component: _components_post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"]
      }, {
        path: 'profile',
        component: _c_user_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]
      }, {
        path: '**',
        component: _c_user_components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__["PagenotfoundComponent"]
      }]
    }, {
      path: '**',
      component: _c_user_c_user_component__WEBPACK_IMPORTED_MODULE_3__["CUserComponent"],
      children: [{
        path: '**',
        component: _c_user_components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__["PagenotfoundComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Angular9';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth/auth.interceptor */
    "./src/app/auth/auth.interceptor.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _c_user_components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./c-user/components/home/home.component */
    "./src/app/c-user/components/home/home.component.ts");
    /* harmony import */


    var _c_user_components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./c-user/components/login/login.component */
    "./src/app/c-user/components/login/login.component.ts");
    /* harmony import */


    var _c_user_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./c-user/components/navbar/navbar.component */
    "./src/app/c-user/components/navbar/navbar.component.ts");
    /* harmony import */


    var _c_user_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./c-user/components/signup/signup.component */
    "./src/app/c-user/components/signup/signup.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _c_admin_c_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./c-admin/c-admin.component */
    "./src/app/c-admin/c-admin.component.ts");
    /* harmony import */


    var _c_user_c_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./c-user/c-user.component */
    "./src/app/c-user/c-user.component.ts");
    /* harmony import */


    var _c_user_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./c-user/components/footer/footer.component */
    "./src/app/c-user/components/footer/footer.component.ts");
    /* harmony import */


    var _c_user_components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./c-user/components/pagenotfound/pagenotfound.component */
    "./src/app/c-user/components/pagenotfound/pagenotfound.component.ts");
    /* harmony import */


    var _c_admin_components_adnhome_adnhome_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./c-admin/components/adnhome/adnhome.component */
    "./src/app/c-admin/components/adnhome/adnhome.component.ts");
    /* harmony import */


    var _c_admin_components_users_users_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./c-admin/components/users/users.component */
    "./src/app/c-admin/components/users/users.component.ts");
    /* harmony import */


    var _components_post_post_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/post/post.component */
    "./src/app/components/post/post.component.ts");
    /* harmony import */


    var _c_user_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./c-user/components/profile/profile.component */
    "./src/app/c-user/components/profile/profile.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["AuthInterceptor"],
        multi: true
      }, _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _c_user_components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _c_user_components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _c_user_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _c_user_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"], _c_admin_c_admin_component__WEBPACK_IMPORTED_MODULE_15__["CAdminComponent"], _c_user_c_user_component__WEBPACK_IMPORTED_MODULE_16__["CUserComponent"], _c_user_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"], _c_user_components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_18__["PagenotfoundComponent"], _c_admin_components_adnhome_adnhome_component__WEBPACK_IMPORTED_MODULE_19__["AdnhomeComponent"], _c_admin_components_users_users_component__WEBPACK_IMPORTED_MODULE_20__["UsersComponent"], _components_post_post_component__WEBPACK_IMPORTED_MODULE_21__["PostComponent"], _c_user_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _c_user_components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _c_user_components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _c_user_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _c_user_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"], _c_admin_c_admin_component__WEBPACK_IMPORTED_MODULE_15__["CAdminComponent"], _c_user_c_user_component__WEBPACK_IMPORTED_MODULE_16__["CUserComponent"], _c_user_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"], _c_user_components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_18__["PagenotfoundComponent"], _c_admin_components_adnhome_adnhome_component__WEBPACK_IMPORTED_MODULE_19__["AdnhomeComponent"], _c_admin_components_users_users_component__WEBPACK_IMPORTED_MODULE_20__["UsersComponent"], _components_post_post_component__WEBPACK_IMPORTED_MODULE_21__["PostComponent"], _c_user_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["AuthInterceptor"],
            multi: true
          }, _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _c_user_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../c-user/components/login/login.component */
    "./src/app/c-user/components/login/login.component.ts");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(userService, router, dialog) {
        _classCallCheck(this, AuthGuard);

        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
      }

      _createClass(AuthGuard, [{
        key: "openDialoglogin",
        value: function openDialoglogin() {
          var dialogRef = this.dialog.open(_c_user_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]);
          dialogRef.afterClosed().subscribe(function () {});
        }
      }, {
        key: "canActivate",
        value: function canActivate(next, state) {
          if (!this.userService.isLoggedIn()) {
            // this.router.navigateByUrl('/login');
            this.openDialoglogin();
            this.userService.deleteToken();
            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.interceptor.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/auth.interceptor.ts ***!
    \******************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _c_user_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../c-user/components/login/login.component */
    "./src/app/c-user/components/login/login.component.ts");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(userService, router, dialog) {
        _classCallCheck(this, AuthInterceptor);

        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
      }

      _createClass(AuthInterceptor, [{
        key: "openDialoglogin",
        value: function openDialoglogin() {
          var dialogRef = this.dialog.open(_c_user_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]);
          dialogRef.afterClosed().subscribe(function () {});
        }
      }, {
        key: "intercept",
        value: function intercept(req, next) {
          var _this = this;

          if (req.headers.get('noauth')) return next.handle(req.clone());else {
            var clonedreq = req.clone({
              headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) {}, function (err) {
              if (err.error.auth == false) {
                // this.router.navigateByUrl('/login');
                _this.openDialoglogin();
              }
            }));
          }
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/c-admin/c-admin.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/c-admin/c-admin.component.ts ***!
    \**********************************************/

  /*! exports provided: CAdminComponent */

  /***/
  function srcAppCAdminCAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CAdminComponent", function () {
      return CAdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CAdminComponent = /*#__PURE__*/function () {
      function CAdminComponent() {
        _classCallCheck(this, CAdminComponent);

        this.name = "SAMEERA PRABHATH";
        this.bn = "S";
      }

      _createClass(CAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CAdminComponent;
    }();

    CAdminComponent.ɵfac = function CAdminComponent_Factory(t) {
      return new (t || CAdminComponent)();
    };

    CAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CAdminComponent,
      selectors: [["app-c-admin"]],
      decls: 28,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/admincp/adminhome", "routerLinkActive", "active1", 1, "nav-link", "x"], ["routerLink", "/admincp/userlist", "routerLinkActive", "active1", 1, "nav-link", "x"], [1, "dropdown", "form-inline", "my-2", "my-lg-0"], [1, "namePara"], ["data-toggle", "dropdown", "id", "dropdownMenuButton", "aria-haspopup", "true", "aria-expanded", "false", "type", "button", 1, "btn", "btn-outline-success", "my-2", "my-sm-0", 2, "border-radius", "50%"], [1, "fas", "fa-user-cog"], ["aria-labelledby", "dropdownMenuButton", 1, "dropD", "dropdown-menu", "dropdown-menu-right"], ["routerLink", "/ProfileComponent", "href", "#", 1, "dropdown-item", "DropdounHover"], ["href", "#", 1, "dropdown-item", "DropdounHover"], [1, "dropdown-divider"], [1, "dropdown-item", "DropdounHover"], [1, "fas", "fa-sign-out-alt"], ["type", "button", "routerLink", "/home", 1, "btn", "btn-success"]],
      template: function CAdminComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "A D M I N\xA0");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\xA0LogOut");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "user home -->");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".x[_ngcontent-%COMP%]:hover{\r\n    border-radius: 7px;\r\n   background: rgba(90, 63, 63, 0.062);\r\n}\r\n.x[_ngcontent-%COMP%]{\r\n    margin-right: 2px;\r\n}\r\n.active1[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    border-radius: 7px;\r\n    background: rgba(90, 63, 63, 0.055);\r\n \r\n}\r\n.dropD[_ngcontent-%COMP%]{\r\nmargin-top: 5px;\r\n    width:190px;\r\n    background-color: rgb(248, 249,250);\r\n    border-color: rgb(248, 249,250); \r\n}\r\n.namePara[_ngcontent-%COMP%]{\r\n    letter-spacing: 2px;\r\n    color: rgb(29, 27, 27);\r\n    font-size: 12px;\r\n    margin: auto 2px;\r\n\r\n}\r\n.DropdounHover[_ngcontent-%COMP%]:hover{\r\n    background-color: #eee\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy1hZG1pbi9jLWFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7R0FDbkIsbUNBQW1DO0FBQ3RDO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUNBQW1DOztBQUV2QztBQUVBO0FBQ0EsZUFBZTtJQUNYLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYy1hZG1pbi9jLWFkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueDpob3ZlcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgYmFja2dyb3VuZDogcmdiYSg5MCwgNjMsIDYzLCAwLjA2Mik7XHJcbn1cclxuLnh7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxufVxyXG4uYWN0aXZlMXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg5MCwgNjMsIDYzLCAwLjA1NSk7XHJcbiBcclxufVxyXG5cclxuLmRyb3BEe1xyXG5tYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB3aWR0aDoxOTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OSwyNTApO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQ4LCAyNDksMjUwKTsgXHJcbn1cclxuLm5hbWVQYXJhe1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiByZ2IoMjksIDI3LCAyNyk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IGF1dG8gMnB4O1xyXG5cclxufVxyXG4uRHJvcGRvdW5Ib3Zlcjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVcclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-c-admin',
          templateUrl: './c-admin.component.html',
          styleUrls: ['./c-admin.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/c-admin/components/adnhome/adnhome.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/c-admin/components/adnhome/adnhome.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AdnhomeComponent */

  /***/
  function srcAppCAdminComponentsAdnhomeAdnhomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdnhomeComponent", function () {
      return AdnhomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdnhomeComponent = /*#__PURE__*/function () {
      function AdnhomeComponent() {
        _classCallCheck(this, AdnhomeComponent);
      }

      _createClass(AdnhomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdnhomeComponent;
    }();

    AdnhomeComponent.ɵfac = function AdnhomeComponent_Factory(t) {
      return new (t || AdnhomeComponent)();
    };

    AdnhomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdnhomeComponent,
      selectors: [["app-adnhome"]],
      decls: 2,
      vars: 0,
      template: function AdnhomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "adnhome works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2MtYWRtaW4vY29tcG9uZW50cy9hZG5ob21lL2FkbmhvbWUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdnhomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-adnhome',
          templateUrl: './adnhome.component.html',
          styleUrls: ['./adnhome.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/c-admin/components/users/users.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/c-admin/components/users/users.component.ts ***!
    \*************************************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppCAdminComponentsUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UsersComponent_tr_15_Template(rf, ctx) {
      if (rf & 1) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\xA0view");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xA0delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var u_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", u_r11.fullName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", u_r11.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", u_r11.googleId, " ");
      }
    }

    var UsersComponent = /*#__PURE__*/function () {
      function UsersComponent(userService) {
        _classCallCheck(this, UsersComponent);

        this.userService = userService;
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchUsers();
        }
      }, {
        key: "fetchUsers",
        value: function fetchUsers() {
          var _this2 = this;

          this.userService.getUsers().subscribe(function (data) {
            _this2.user = data;
            console.log('Data requested...');
            console.log(_this2.user);
          });
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      decls: 17,
      vars: 1,
      consts: [[1, "mainDiv"], [1, "btn-h1"], [1, "table", "tableWidth", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btnB", "btn", "btn-sm", "btn-outline-dark"], [1, "fas", "fa-pencil-alt"], ["type", "button", 1, "btnB", "del-btn", "btn", "btn-sm", "btn-outline-danger"], [1, "fas", "fa-trash-alt"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2MtYWRtaW4vY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-users',
          templateUrl: './users.component.html',
          styleUrls: ['./users.component.css']
        }]
      }], function () {
        return [{
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/c-user/c-user.component.ts":
  /*!********************************************!*\
    !*** ./src/app/c-user/c-user.component.ts ***!
    \********************************************/

  /*! exports provided: CUserComponent */

  /***/
  function srcAppCUserCUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CUserComponent", function () {
      return CUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/c-user/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/c-user/components/footer/footer.component.ts");

    var CUserComponent = /*#__PURE__*/function () {
      function CUserComponent() {
        _classCallCheck(this, CUserComponent);
      }

      _createClass(CUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CUserComponent;
    }();

    CUserComponent.ɵfac = function CUserComponent_Factory(t) {
      return new (t || CUserComponent)();
    };

    CUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CUserComponent,
      selectors: [["app-c-user"]],
      decls: 6,
      vars: 0,
      consts: [["type", "button", "routerLink", "/admincp", 1, "btn", "btn-success"]],
      template: function CUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "admin -->");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2MtdXNlci9jLXVzZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-c-user',
          templateUrl: './c-user.component.html',
          styleUrls: ['./c-user.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/c-user/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/c-user/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppCUserComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 75,
      vars: 0,
      consts: [[1, "page-footer", "font-small", "mdb-color", "lighten-3", "pt-4"], [1, "container", "text-center", "text-md-left"], [1, "row"], [1, "col-md-4", "col-lg-3", "mr-auto", "my-md-4", "my-0", "mt-4", "mb-1"], [1, "font-weight-bold", "text-uppercase", "mb-4"], [1, "clearfix", "w-100", "d-md-none"], [1, "col-md-2", "col-lg-2", "mx-auto", "my-md-4", "my-0", "mt-4", "mb-1"], [1, "list-unstyled"], ["href", "#!"], [1, "col-md-4", "col-lg-3", "mx-auto", "my-md-4", "my-0", "mt-4", "mb-1"], [1, "fas", "fa-home", "mr-3"], [1, "fas", "fa-envelope", "mr-3"], [1, "fas", "fa-phone", "mr-3"], [1, "fas", "fa-print", "mr-3"], [1, "col-md-2", "col-lg-2", "text-center", "mx-auto", "my-4"], ["href", "#"], [1, "fab", "fa-facebook", "fa-2x"], [1, "fab", "fa-twitter", "fa-2x"], [1, "fab", "fa-google-plus", "fa-2x"], [1, "fab", "fa-linkedin", "fa-2x"], [1, "size", "footer-copyright", "text-center", "py-3"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\xA9 2018 Copyright: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " sameera.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".size[_ngcontent-%COMP%]{\r\n    \r\n    margin:-40px 0 0 0;\r\n    padding: 0;\r\n    \r\n    float: bottom;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixVQUFVOztJQUVWLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jLXVzZXIvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l6ZXtcclxuICAgIFxyXG4gICAgbWFyZ2luOi00MHB4IDAgMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIFxyXG4gICAgZmxvYXQ6IGJvdHRvbTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/c-user/components/home/home.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/c-user/components/home/home.component.ts ***!
    \**********************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppCUserComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/post.service */
    "./src/app/shared/post.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Read more");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 5k \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "100 \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "1.2k ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r8.topic);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By ", p_r8.ownerid, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r8.postbody);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(postService) {
        _classCallCheck(this, HomeComponent);

        this.postService = postService;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.postService.getPosts().subscribe(function (res) {
            _this3.posts = res;
          }, function (err) {
            alert("err" + err);
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 24,
      vars: 1,
      consts: [[1, "bg-primary", "py-5", "mb-5", "bk"], [1, "container", "h-100"], [1, "row", "h-100", "align-items-center"], [1, "col-lg-12"], [1, "display-4", "text-white", "mt-5", "mb-2"], [1, "lead", "mb-5", "text-white-50"], [1, "container"], [1, "row"], [1, "col-md-9", "mb-5"], [4, "ngFor", "ngForOf"], [1, "col-md-3", "mb-5"], [1, "input-group"], ["type", "text", "placeholder", "Search for...", 1, "form-control"], [1, "input-group-btn"], ["type", "button", 1, "btn", "btn-light"], [1, "fas", "fa-search"], [1, "card", 2, "width", "100%"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "card-text"], ["href", "#", 1, "card-link"], [1, "fas", "fa-heart"], [1, "fas", "fa-heart-broken"], [1, "fas", "fa-comment-dots"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 20, 3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "something");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".bk[_ngcontent-%COMP%]{\r\n\r\n    background-color: #36a4ff;\r\nbackground-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23ffd92e' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%2336a4ff' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23089ef1' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%230097e3' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%230090d4' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%230088c6' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%230081b7' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%230079a9' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%2300729a' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23006a8c' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%2300627e' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23005a71' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23005264' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23004a57' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%2300424b' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23003b40' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23003336' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23002b2c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23002423' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E\");\r\nbackground-attachment: fixed;\r\nbackground-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUkseUJBQXlCO0FBQzdCLHNwQ0FBc3BDO0FBQ3RwQyw0QkFBNEI7QUFDNUIsc0JBQXNCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmt7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2YTRmZjtcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1JyB2aWV3Qm94PScwIDAgMTYwMCA4MDAnJTNFJTNDZyBzdHJva2U9JyUyM2ZmZDkyZScgc3Ryb2tlLXdpZHRoPSc2Ni43JyBzdHJva2Utb3BhY2l0eT0nMC4wNScgJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzM2YTRmZicgY3g9JzAnIGN5PScwJyByPScxODAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMDg5ZWYxJyBjeD0nMCcgY3k9JzAnIHI9JzE3MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMwMDk3ZTMnIGN4PScwJyBjeT0nMCcgcj0nMTYwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzAwOTBkNCcgY3g9JzAnIGN5PScwJyByPScxNTAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMDA4OGM2JyBjeD0nMCcgY3k9JzAnIHI9JzE0MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMwMDgxYjcnIGN4PScwJyBjeT0nMCcgcj0nMTMwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzAwNzlhOScgY3g9JzAnIGN5PScwJyByPScxMjAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMDA3MjlhJyBjeD0nMCcgY3k9JzAnIHI9JzExMDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMwMDZhOGMnIGN4PScwJyBjeT0nMCcgcj0nMTAwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzAwNjI3ZScgY3g9JzAnIGN5PScwJyByPSc5MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMwMDVhNzEnIGN4PScwJyBjeT0nMCcgcj0nODAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMDA1MjY0JyBjeD0nMCcgY3k9JzAnIHI9JzcwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzAwNGE1NycgY3g9JzAnIGN5PScwJyByPSc2MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMwMDQyNGInIGN4PScwJyBjeT0nMCcgcj0nNTAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMDAzYjQwJyBjeD0nMCcgY3k9JzAnIHI9JzQwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzAwMzMzNicgY3g9JzAnIGN5PScwJyByPSczMDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMwMDJiMmMnIGN4PScwJyBjeT0nMCcgcj0nMjAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMDAyNDIzJyBjeD0nMCcgY3k9JzAnIHI9JzEwMCcvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xyXG5iYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/c-user/components/login/login.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/c-user/components/login/login.component.ts ***!
    \************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppCUserComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function LoginComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.serverErrorMessages, " ");
      }
    }

    function LoginComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email address.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minimum 4 characters. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(userService, router, dialogRef) {
        _classCallCheck(this, LoginComponent);

        this.userService = userService;
        this.router = router;
        this.dialogRef = dialogRef;
        this.model = {
          email: '',
          password: ''
        };
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this4 = this;

          this.userService.login(form.value).subscribe(function (res) {
            // /*next line is my new line*/ 
            // this.userService.userMode(true);
            _this4.userService.setToken(res['token']);

            _this4.router.navigateByUrl('/home');

            _this4.userService.islog = true;

            _this4.dialogRef.close();
          }, function (err) {
            _this4.serverErrorMessages = err.error.message;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 27,
      vars: 12,
      consts: [[1, "wsize"], ["class", "alert alert-danger", 4, "ngIf"], [3, "ngSubmit"], ["signInForm", "ngForm"], [1, "form-group"], ["for", "formGroupExampleInput"], ["type", "text", "name", "email", "placeholder", "Email", "required", "", 1, "form-control", 3, "ngModel", "pattern", "ngClass", "ngModelChange"], ["email", "ngModel"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "name", "password", "placeholder", "Password", "required", "", "minlength", "4", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["password", "ngModel"], ["type", "submit", "value", "Sign In", 1, "btn", "btn-primary", "mb-2"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "fab", "fa-google"], [1, "alert", "alert-danger"], [1, "invalid-feedback"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            return _r1.valid && ctx.onSubmit(_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.model.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.model.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \xA0 Signup With Google ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"]],
      styles: ["@media only screen and (min-width: 680px) {\r\n    .wsize[_ngcontent-%COMP%]{\r\n        margin: 10px auto;\r\n        width: 500px;\r\n        \r\n        }\r\n  }\r\n\r\n\r\n\r\n@media only screen and (max-width: 680px) {\r\n    .wsize[_ngcontent-%COMP%]{\r\n        margin: 10px auto;\r\n \r\n        \r\n        }\r\n  }\r\n\r\n\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n }\r\n\r\n\r\n\r\nform[_ngcontent-%COMP%]{\r\n     text-align: center\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixZQUFZOztRQUVaO0VBQ047Ozs7QUFJRjtJQUNJO1FBQ0ksaUJBQWlCOzs7UUFHakI7RUFDTjs7OztBQU1GO0lBQ0ksa0JBQWtCO0NBQ3JCOzs7O0FBQ0E7S0FDSTtDQUNKIiwiZmlsZSI6InNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY4MHB4KSB7XHJcbiAgICAud3NpemV7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjgwcHgpIHtcclxuICAgIC53c2l6ZXtcclxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuIFxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBmb3Jte1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gfVxyXG4gIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/c-user/components/navbar/navbar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/c-user/components/navbar/navbar.component.ts ***!
    \**************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppCUserComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../signup/signup.component */
    "./src/app/c-user/components/signup/signup.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login/login.component */
    "./src/app/c-user/components/login/login.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NavbarComponent_button_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_15_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.openDialoglogin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_button_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_17_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r49.openDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Signup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_p_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r44.name, "\xA0");
      }
    }

    function NavbarComponent_button_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r45.bn);
      }
    }

    function NavbarComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_20_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r51.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xA0LogOut");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NavbarComponent = /*#__PURE__*/function () {
      // methana public krna eke aulak thiynawda danne naa, wenama service ekak haduwanm hri.. islog wage ewa danna
      function NavbarComponent(userService, dialog, http) {
        _classCallCheck(this, NavbarComponent);

        this.userService = userService;
        this.dialog = dialog;
        this.http = http;
        this.name = "";
        this.bn = "";
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userService.islog = this.userService.isLoggedIn();
          this.getuser();
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var dialogRef = this.dialog.open(_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__["SignupComponent"]);
          dialogRef.afterClosed().subscribe(function () {});
        }
      }, {
        key: "openDialoglogin",
        value: function openDialoglogin() {
          var _this5 = this;

          var dialogRef = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]);
          dialogRef.afterClosed().subscribe(function () {
            _this5.ngOnInit();
          });
        }
      }, {
        key: "googlel",
        value: function googlel() {
          var _this6 = this;

          var win = window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/googlelll', "mywindow", "location=1,status=1,scrollbars=1, width=800,height=800");
          var timer = setInterval(function () {
            if (win.closed) {
              console.log("closed");

              _this6.ngOnInit();

              clearInterval(timer);
            }
          }, 500); // var sint = window.setInterval(function() { 
          //   try {
          //       console.log("xxzz"+ win.location.href);
          //       if (win.document.URL.indexOf( environment.apiBaseUrl  +'/google/callback') != -1) {
          //           window.clearInterval(sint);
          //           var url =   win.document.URL;
          //           console.log("xxxxx"+url)
          //           // this.sss =   gup(url, 'token');
          //           win.close();
          //       }
          //   } catch(e) {
          //   }
          // }, 10);
        }
      }, {
        key: "getuser",
        value: function getuser() {
          var _this7 = this;

          if (this.userService.isLoggedIn()) this.userService.getUserProfile().subscribe(function (res) {
            _this7.name = res.user.fullName.toUpperCase();
            _this7.bn = res.user.fullName.split('')[0].toUpperCase();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.userService.deleteToken();
          this.ngOnInit();
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 21,
      vars: 5,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/home", "routerLinkActive", "active1", 1, "nav-link", "x"], ["routerLink", "/home/addpost", "routerLinkActive", "active1", 1, "nav-link", "x"], [1, "btn", "btn-danger", 3, "click"], [1, "dropdown", "form-inline", "my-2", "my-lg-0"], ["type", "button", "class", "btn btn-success  btn-sm ", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success  btn-sm", 3, "click", 4, "ngIf"], ["class", "namePara", 4, "ngIf"], ["style", "border-radius:50%", "class", "btn btn-outline-success my-2 my-sm-0", "data-toggle", "dropdown", "id", "dropdownMenuButton", "aria-haspopup", "true", "aria-expanded", "false", "type", "button", 4, "ngIf"], ["class", "dropD dropdown-menu dropdown-menu-right", "aria-labelledby", "dropdownMenuButton", 4, "ngIf"], ["type", "button", 1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "namePara"], ["data-toggle", "dropdown", "id", "dropdownMenuButton", "aria-haspopup", "true", "aria-expanded", "false", "type", "button", 1, "btn", "btn-outline-success", "my-2", "my-sm-0", 2, "border-radius", "50%"], ["aria-labelledby", "dropdownMenuButton", 1, "dropD", "dropdown-menu", "dropdown-menu-right"], ["routerLink", "/home/profile", "href", "#", 1, "dropdown-item", "DropdounHover"], ["href", "#", 1, "dropdown-item", "DropdounHover"], [1, "dropdown-divider"], [1, "dropdown-item", "DropdounHover", 3, "click"], [1, "fas", "fa-sign-out-alt"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_12_listener() {
            return ctx.googlel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Google+ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_button_15_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \xA0 \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavbarComponent_button_17_Template, 2, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NavbarComponent_p_18_Template, 2, 1, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NavbarComponent_button_19_Template, 2, 1, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavbarComponent_div_20_Template, 9, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: [".x[_ngcontent-%COMP%]:hover{\r\n    border-radius: 7px;\r\n   background: rgba(90, 63, 63, 0.062);\r\n}\r\n.x[_ngcontent-%COMP%]{\r\n    margin-right: 2px;\r\n}\r\n.active1[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    border-radius: 7px;\r\n    background: rgba(90, 63, 63, 0.055);\r\n \r\n}\r\n.dropD[_ngcontent-%COMP%]{\r\nmargin-top: 5px;\r\n    width:190px;\r\n    background-color: rgb(248, 249,250);\r\n    border-color: rgb(248, 249,250); \r\n}\r\n.namePara[_ngcontent-%COMP%]{\r\n    letter-spacing: 2px;\r\n    color: rgb(29, 27, 27);\r\n    font-size: 12px;\r\n    margin: auto 2px;\r\n\r\n}\r\n.DropdounHover[_ngcontent-%COMP%]:hover{\r\n    background-color: #eee\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0dBQ25CLG1DQUFtQztBQUN0QztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1DQUFtQzs7QUFFdkM7QUFFQTtBQUNBLGVBQWU7SUFDWCxXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2MtdXNlci9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi54OmhvdmVye1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICBiYWNrZ3JvdW5kOiByZ2JhKDkwLCA2MywgNjMsIDAuMDYyKTtcclxufVxyXG4ueHtcclxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG59XHJcbi5hY3RpdmUxe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDkwLCA2MywgNjMsIDAuMDU1KTtcclxuIFxyXG59XHJcblxyXG4uZHJvcER7XHJcbm1hcmdpbi10b3A6IDVweDtcclxuICAgIHdpZHRoOjE5MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ5LDI1MCk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNDgsIDI0OSwyNTApOyBcclxufVxyXG4ubmFtZVBhcmF7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHJnYigyOSwgMjcsIDI3KTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogYXV0byAycHg7XHJcblxyXG59XHJcbi5Ecm9wZG91bkhvdmVyOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZVxyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/c-user/components/pagenotfound/pagenotfound.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/c-user/components/pagenotfound/pagenotfound.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PagenotfoundComponent */

  /***/
  function srcAppCUserComponentsPagenotfoundPagenotfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function () {
      return PagenotfoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PagenotfoundComponent = /*#__PURE__*/function () {
      function PagenotfoundComponent() {
        _classCallCheck(this, PagenotfoundComponent);
      }

      _createClass(PagenotfoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PagenotfoundComponent;
    }();

    PagenotfoundComponent.ɵfac = function PagenotfoundComponent_Factory(t) {
      return new (t || PagenotfoundComponent)();
    };

    PagenotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PagenotfoundComponent,
      selectors: [["app-pagenotfound"]],
      decls: 23,
      vars: 0,
      consts: [[1, "zoom-area"], [1, "error-container"], [1, "four"], [1, "screen-reader-text"], [1, "zero"], [1, "link-container"], ["type", "button", "routerLink", "/home", 1, "btn", "btn-dark"]],
      template: function PagenotfoundComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700');\r\n@import url('https://fonts.googleapis.com/css?family=Catamaran:400,800');\r\n.error-container[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 106px;\r\n  font-family: 'Catamaran', sans-serif;\r\n  font-weight: 800;\r\n  margin: 70px 15px;\r\n}\r\n.error-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n.error-container[_ngcontent-%COMP%]    > span.four[_ngcontent-%COMP%] {\r\n  width: 136px;\r\n  height: 43px;\r\n  border-radius: 999px;\r\n  background:\r\n    linear-gradient(140deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 43%, transparent 44%, transparent 100%),\r\n    linear-gradient(105deg, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.06) 41%, rgba(0, 0, 0, 0.07) 76%, transparent 77%, transparent 100%),\r\n    linear-gradient(to right, #066837, #022e0d);\r\n}\r\n.error-container[_ngcontent-%COMP%]    > span.four[_ngcontent-%COMP%]:before, .error-container[_ngcontent-%COMP%]    > span.four[_ngcontent-%COMP%]:after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  border-radius: 999px;\r\n}\r\n.error-container[_ngcontent-%COMP%]    > span.four[_ngcontent-%COMP%]:before {\r\n  width: 43px;\r\n  height: 156px;\r\n  left: 60px;\r\n  bottom: -43px;\r\n  background:\r\n    linear-gradient(128deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 40%, transparent 41%, transparent 100%),\r\n    linear-gradient(116deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 50%, transparent 51%, transparent 100%),\r\n    linear-gradient(to top, rgb(255, 230, 0), rgb(159, 184, 17), rgb(33, 168, 105), rgb(25, 99, 37), rgb(1, 65, 1));\r\n}\r\n.error-container[_ngcontent-%COMP%]    > span.four[_ngcontent-%COMP%]:after {\r\n  width: 137px;\r\n  height: 43px;\r\n  transform: rotate(-49.5deg);\r\n  left: -18px;\r\n  bottom: 36px;\r\n  background: linear-gradient(to right, rgb(93, 126, 3), rgb(81, 168, 9), rgb(22, 105, 6), rgb(9, 104, 56), rgb(3, 36, 1));\r\n}\r\n.error-container[_ngcontent-%COMP%]    > span.zero[_ngcontent-%COMP%] {\r\n  vertical-align: text-top;\r\n  width: 156px;\r\n  height: 156px;\r\n  border-radius: 999px;\r\n  background: linear-gradient(-45deg, transparent 0%, rgba(0, 0, 0, 0.06) 50%,  transparent 51%, transparent 100%),\r\n    linear-gradient(to top right, rgb(179, 224, 17), rgb(40, 206, 7), rgb(103, 179, 16), rgb(14, 121, 23), rgb(13, 104, 36), rgb(11, 114, 33), rgb(3, 61, 27));\r\n  overflow: hidden;\r\n  -webkit-animation: bgshadow 5s infinite;\r\n          animation: bgshadow 5s infinite;\r\n}\r\n.error-container[_ngcontent-%COMP%]    > span.zero[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  transform: rotate(45deg);\r\n  width: 90px;\r\n  height: 90px;\r\n  background-color: transparent;\r\n  left: 0px;\r\n  bottom: 0px;\r\n  background:\r\n    linear-gradient(95deg, transparent 0%, transparent 8%, rgba(0, 0, 0, 0.07) 9%, transparent 50%, transparent 100%),\r\n    linear-gradient(85deg, transparent 0%, transparent 19%, rgba(0, 0, 0, 0.05) 20%, rgba(0, 0, 0, 0.07) 91%, transparent 92%, transparent 100%);\r\n}\r\n.error-container[_ngcontent-%COMP%]    > span.zero[_ngcontent-%COMP%]:after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  border-radius: 999px;\r\n  width: 70px;\r\n  height: 70px;\r\n  left: 43px;\r\n  bottom: 43px;\r\n  background: #FDFAF5;\r\n  box-shadow: -2px 2px 2px 0px rgba(0, 0, 0, 0.1);\r\n}\r\n.screen-reader-text[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: -9999em;\r\n    left: -9999em;\r\n}\r\n@-webkit-keyframes bgshadow {\r\n  0% {\r\n    box-shadow: inset -160px 160px 0px 5px rgba(0, 0, 0, 0.4);\r\n  }\r\n  45% {\r\n    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n  55% {\r\n    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n  100% {\r\n    box-shadow: inset 160px -160px 0px 5px rgba(0, 0, 0, 0.4);\r\n  }\r\n}\r\n@keyframes bgshadow {\r\n  0% {\r\n    box-shadow: inset -160px 160px 0px 5px rgba(0, 0, 0, 0.4);\r\n  }\r\n  45% {\r\n    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n  55% {\r\n    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n  100% {\r\n    box-shadow: inset 160px -160px 0px 5px rgba(0, 0, 0, 0.4);\r\n  }\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  background-color: #FDFAF5;\r\n  margin-bottom: 50px;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin: 30px 15px;\r\n}\r\n.zoom-area[_ngcontent-%COMP%] { \r\n  max-width: 490px;\r\n  margin: 30px auto 30px;\r\n  font-size: 19px;\r\n  text-align: center;\r\n}\r\n.link-container[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\na.more-link[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n    background-color: #de7e85;\r\n    padding: 10px 15px;\r\n    border-radius: 0;\r\n    color: #fff;\r\n    display: inline-block;\r\n    margin-right: 5px;\r\n    margin-bottom: 5px;\r\n    line-height: 1.5;\r\n    text-decoration: none;\r\n  margin-top: 50px;\r\n  letter-spacing: 1px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUE2RTtBQUM3RSx3RUFBd0U7QUFDeEU7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFvQjtFQUNwQjs7OytDQUc2QztBQUMvQztBQUNBOztFQUVFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixVQUFVO0VBQ1YsYUFBYTtFQUNiOzs7bUhBR2lIO0FBQ25IO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHdIQUF3SDtBQUMxSDtBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCOzhKQUM0SjtFQUM1SixnQkFBZ0I7RUFDaEIsdUNBQStCO1VBQS9CLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCxXQUFXO0VBQ1g7O2dKQUU4STtBQUNoSjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsK0NBQStDO0FBQ2pEO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFFQTtFQUNFO0lBQ0UseURBQXlEO0VBQzNEO0VBQ0E7SUFDRSxvREFBb0Q7RUFDdEQ7RUFDQTtJQUNFLG9EQUFvRDtFQUN0RDtFQUNBO0lBQ0UseURBQXlEO0VBQzNEO0FBQ0Y7QUFiQTtFQUNFO0lBQ0UseURBQXlEO0VBQzNEO0VBQ0E7SUFDRSxvREFBb0Q7RUFDdEQ7RUFDQTtJQUNFLG9EQUFvRDtFQUN0RDtFQUNBO0lBQ0UseURBQXlEO0VBQzNEO0FBQ0Y7QUFFQSxlQUFlO0FBQ2Y7SUFHSSxzQkFBc0I7QUFDMUI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jLXVzZXIvY29tcG9uZW50cy9wYWdlbm90Zm91bmQvcGFnZW5vdGZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDYwMCw3MDAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1DYXRhbWFyYW46NDAwLDgwMCcpO1xyXG4uZXJyb3ItY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMDZweDtcclxuICBmb250LWZhbWlseTogJ0NhdGFtYXJhbicsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBtYXJnaW46IDcwcHggMTVweDtcclxufVxyXG4uZXJyb3ItY29udGFpbmVyID4gc3BhbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZXJyb3ItY29udGFpbmVyID4gc3Bhbi5mb3VyIHtcclxuICB3aWR0aDogMTM2cHg7XHJcbiAgaGVpZ2h0OiA0M3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDAsIDAsIDAsIDAuMSkgMCUsIHJnYmEoMCwgMCwgMCwgMC4wNykgNDMlLCB0cmFuc3BhcmVudCA0NCUsIHRyYW5zcGFyZW50IDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDEwNWRlZywgdHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDQwJSwgcmdiYSgwLCAwLCAwLCAwLjA2KSA0MSUsIHJnYmEoMCwgMCwgMCwgMC4wNykgNzYlLCB0cmFuc3BhcmVudCA3NyUsIHRyYW5zcGFyZW50IDEwMCUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDY2ODM3LCAjMDIyZTBkKTtcclxufVxyXG4uZXJyb3ItY29udGFpbmVyID4gc3Bhbi5mb3VyOmJlZm9yZSxcclxuLmVycm9yLWNvbnRhaW5lciA+IHNwYW4uZm91cjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG59XHJcbi5lcnJvci1jb250YWluZXIgPiBzcGFuLmZvdXI6YmVmb3JlIHtcclxuICB3aWR0aDogNDNweDtcclxuICBoZWlnaHQ6IDE1NnB4O1xyXG4gIGxlZnQ6IDYwcHg7XHJcbiAgYm90dG9tOiAtNDNweDtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgbGluZWFyLWdyYWRpZW50KDEyOGRlZywgcmdiYSgwLCAwLCAwLCAwLjEpIDAlLCByZ2JhKDAsIDAsIDAsIDAuMDcpIDQwJSwgdHJhbnNwYXJlbnQgNDElLCB0cmFuc3BhcmVudCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCgxMTZkZWcsIHJnYmEoMCwgMCwgMCwgMC4xKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjA3KSA1MCUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2IoMjU1LCAyMzAsIDApLCByZ2IoMTU5LCAxODQsIDE3KSwgcmdiKDMzLCAxNjgsIDEwNSksIHJnYigyNSwgOTksIDM3KSwgcmdiKDEsIDY1LCAxKSk7XHJcbn1cclxuLmVycm9yLWNvbnRhaW5lciA+IHNwYW4uZm91cjphZnRlciB7XHJcbiAgd2lkdGg6IDEzN3B4O1xyXG4gIGhlaWdodDogNDNweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDkuNWRlZyk7XHJcbiAgbGVmdDogLTE4cHg7XHJcbiAgYm90dG9tOiAzNnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDkzLCAxMjYsIDMpLCByZ2IoODEsIDE2OCwgOSksIHJnYigyMiwgMTA1LCA2KSwgcmdiKDksIDEwNCwgNTYpLCByZ2IoMywgMzYsIDEpKTtcclxufVxyXG5cclxuLmVycm9yLWNvbnRhaW5lciA+IHNwYW4uemVybyB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gIHdpZHRoOiAxNTZweDtcclxuICBoZWlnaHQ6IDE1NnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHRyYW5zcGFyZW50IDAlLCByZ2JhKDAsIDAsIDAsIDAuMDYpIDUwJSwgIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgMTAwJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCByZ2IoMTc5LCAyMjQsIDE3KSwgcmdiKDQwLCAyMDYsIDcpLCByZ2IoMTAzLCAxNzksIDE2KSwgcmdiKDE0LCAxMjEsIDIzKSwgcmdiKDEzLCAxMDQsIDM2KSwgcmdiKDExLCAxMTQsIDMzKSwgcmdiKDMsIDYxLCAyNykpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYW5pbWF0aW9uOiBiZ3NoYWRvdyA1cyBpbmZpbml0ZTtcclxufVxyXG4uZXJyb3ItY29udGFpbmVyID4gc3Bhbi56ZXJvOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBsaW5lYXItZ3JhZGllbnQoOTVkZWcsIHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA4JSwgcmdiYSgwLCAwLCAwLCAwLjA3KSA5JSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCAxMDAlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCg4NWRlZywgdHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDE5JSwgcmdiYSgwLCAwLCAwLCAwLjA1KSAyMCUsIHJnYmEoMCwgMCwgMCwgMC4wNykgOTElLCB0cmFuc3BhcmVudCA5MiUsIHRyYW5zcGFyZW50IDEwMCUpO1xyXG59XHJcbi5lcnJvci1jb250YWluZXIgPiBzcGFuLnplcm86YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgbGVmdDogNDNweDtcclxuICBib3R0b206IDQzcHg7XHJcbiAgYmFja2dyb3VuZDogI0ZERkFGNTtcclxuICBib3gtc2hhZG93OiAtMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnNjcmVlbi1yZWFkZXItdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC05OTk5ZW07XHJcbiAgICBsZWZ0OiAtOTk5OWVtO1xyXG59XHJcbiAgICBcclxuQGtleWZyYW1lcyBiZ3NoYWRvdyB7XHJcbiAgMCUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTE2MHB4IDE2MHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIH1cclxuICA0NSUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgNTUlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMTYwcHggLTE2MHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIH1cclxufVxyXG5cclxuLyogZGVtbyBzdHVmZiAqL1xyXG4qIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZERkFGNTtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMzBweCAxNXB4O1xyXG59XHJcbi56b29tLWFyZWEgeyBcclxuICBtYXgtd2lkdGg6IDQ5MHB4O1xyXG4gIG1hcmdpbjogMzBweCBhdXRvIDMwcHg7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubGluay1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5hLm1vcmUtbGluayB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGU3ZTg1O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagenotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pagenotfound',
          templateUrl: './pagenotfound.component.html',
          styleUrls: ['./pagenotfound.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/c-user/components/profile/profile.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/c-user/components/profile/profile.component.ts ***!
    \****************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppCUserComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(userService) {
        _classCallCheck(this, ProfileComponent);

        this.userService = userService;
        this.profile = {};
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getprofile();
        }
      }, {
        key: "getprofile",
        value: function getprofile() {
          var _this8 = this;

          this.userService.getUserProfile().subscribe(function (res) {
            _this8.profile = res.user;
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 73,
      vars: 3,
      consts: [[1, "container"], [1, "row"], [1, "col-md-12", "col-sm-12", "col-xs-12", "image-section"], [1, "row", "user-left-part"], [1, "col-md-3", "col-sm-3", "col-xs-12", "user-profil-part", "pull-left"], [1, "col-md-12", "col-md-12-sm-12", "col-xs-12", "user-image", "text-center"], ["src", "https://cdn2.iconfinder.com/data/icons/user-icon-2-1/100/user_5-15-512.png", 1, "rounded-circle"], [1, "col-md-12", "col-sm-12", "col-xs-12", "user-detail-section1", "text-center"], ["id", "btn-contact", "data-toggle", "modal", "data-target", "#contact", 1, "btn", "btn-success", "btn-block", "follow"], [1, "row", "user-detail-row"], [1, "col-md-12", "col-sm-12", "user-detail-section2", "pull-left"], [1, "col-md-9", "col-sm-9", "col-xs-12", "pull-right", "profile-right-section"], [1, "row", "profile-right-section-row"], [1, "col-md-12", "profile-header"], [1, "col-md-8", "col-sm-6", "col-xs-6", "profile-header-section1", "pull-left"], [1, "col-md-4", "col-sm-6", "col-xs-6", "profile-header-section1", "text-right", "pull-rigth"], [1, "col-md-12"], [1, "col-md-8"], [1, "tab-content"], ["role", "tabpanel", "id", "profile", 1, "tab-pane", "fade", "show", "active"], [1, "col-md-2"], [1, "col-md-6"], [1, "col-md-4", "img-main-rightPart"], [1, "row", "image-right-part"], [1, "col-md-6", "pull-left", "image-right-detail"], ["href", "http://camaradecomerciozn.com/"], [1, "col-md-12", "image-right"], [1, "col-md-12", "image-right-detail-section2"], ["id", "contact", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "contact", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["signUpForm", "ngForm"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-primary"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\xD7");

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile.fullName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile.fullName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile.email);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: [".border[_ngcontent-%COMP%]{\r\n        border-bottom:1px solid #F1F1F1;\r\n        margin-bottom:10px;\r\n      }\r\n      .container[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n    }\r\n      .col-md-3[_ngcontent-%COMP%] {\r\n      flex: 0 0 40%;\r\n      max-width: 40%;\r\n  }\r\n      .col-md-2[_ngcontent-%COMP%] {\r\n    flex: 0 0 30.666667%;\r\n    max-width: 30.666667%;\r\n  }\r\n      .col-md-9[_ngcontent-%COMP%] {\r\n    flex: 0 0 60%;\r\n    max-width: 60%;\r\n  }\r\n      .image-section[_ngcontent-%COMP%]{\r\n        padding: 0px;\r\n      }\r\n      .image-section[_ngcontent-%COMP%]{\r\n        background-color: #fafafa;\r\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23eef4fa' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23e1effa' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23d4e9fa' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23c7e4fa' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23b9defa' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23c8e3f5' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23d7e9f0' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23e5eeeb' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23f2f4e5' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23fff9e0' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E\");\r\n        background-attachment: fixed;\r\n        background-size: cover;\r\n        width: 100%;\r\n        height:200px;\r\n        position: relative;\r\n      }\r\n      .user-image[_ngcontent-%COMP%]{\r\n        position: absolute;\r\n        margin-top:-50px;\r\n      }\r\n      .user-left-part[_ngcontent-%COMP%]{\r\n        margin: 0px;\r\n      }\r\n      .user-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width:100px;\r\n        height:100px;\r\n      }\r\n      .user-profil-part[_ngcontent-%COMP%]{\r\n        padding-bottom:30px;\r\n        background-color:#FAFAFA;\r\n      }\r\n      .follow[_ngcontent-%COMP%]{    \r\n        margin-top:70px;   \r\n      }\r\n      .user-detail-row[_ngcontent-%COMP%]{\r\n        margin:0px; \r\n      }\r\n      .user-detail-section2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size:12px;\r\n        padding: 0px;\r\n        margin: 0px;\r\n      }\r\n      .user-detail-section2[_ngcontent-%COMP%]{\r\n        margin-top:10px;\r\n      }\r\n      .user-detail-section2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n        color:#7CBBC3;\r\n        font-size: 20px;\r\n      }\r\n      .user-detail-section2[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{\r\n        font-size:12px;\r\n        color:#D3A86A;\r\n      }\r\n      .profile-right-section[_ngcontent-%COMP%]{\r\n        padding: 20px 0px 10px 15px;\r\n        background-color: #FFFFFF;  \r\n      }\r\n      .profile-right-section-row[_ngcontent-%COMP%]{\r\n        margin: 0px;\r\n      }\r\n      .profile-header-section1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 25px;\r\n        margin: 0px;\r\n      }\r\n      .profile-header-section1[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n        color: #0062cc;\r\n      }\r\n      .req-btn[_ngcontent-%COMP%]{\r\n        height:30px;\r\n        font-size:12px;\r\n      }\r\n      .profile-tag[_ngcontent-%COMP%]{\r\n        padding: 10px;\r\n        border:1px solid #F6F6F6;\r\n      }\r\n      .profile-tag[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 12px;\r\n        color:black;\r\n      }\r\n      .profile-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n        color:#ADADAD;\r\n        font-size: 20px;\r\n      }\r\n      .image-right-part[_ngcontent-%COMP%]{\r\n        background-color: #FCFCFC;\r\n        margin: 0px;\r\n        padding: 5px;\r\n      }\r\n      .img-main-rightPart[_ngcontent-%COMP%]{\r\n        background-color: #FCFCFC;\r\n        margin-top: auto;\r\n      }\r\n      .image-right-detail[_ngcontent-%COMP%]{\r\n        padding: 0px;\r\n      }\r\n      .image-right-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 12px;\r\n      }\r\n      .image-right-detail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n        text-decoration: none;\r\n      }\r\n      .image-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n      }\r\n      .image-right-detail-section2[_ngcontent-%COMP%]{\r\n        margin: 0px;\r\n      }\r\n      .image-right-detail-section2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        color:#38ACDF;\r\n        margin:0px;\r\n      }\r\n      .image-right-detail-section2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n        color:#7F7F7F;\r\n      }\r\n      .nav-link[_ngcontent-%COMP%]{\r\n        font-size: 1.2em;    \r\n      }\r\n      .xx[_ngcontent-%COMP%]{\r\n   margin-left: 45px;\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO1FBQ0ksK0JBQStCO1FBQy9CLGtCQUFrQjtNQUNwQjtNQUNBO1FBQ0UsZUFBZTtJQUNuQjtNQUVBO01BRUUsYUFBYTtNQUNiLGNBQWM7RUFDbEI7TUFDQTtJQUVFLG9CQUFvQjtJQUNwQixxQkFBcUI7RUFDdkI7TUFDQTtJQUVFLGFBQWE7SUFDYixjQUFjO0VBQ2hCO01BQ0k7UUFDRSxZQUFZO01BQ2Q7TUFDQTtRQUNFLHlCQUF5QjtRQUN6Qiw4N0RBQTg3RDtRQUM5N0QsNEJBQTRCO1FBQzVCLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtNQUNwQjtNQUNBO1FBQ0Usa0JBQWtCO1FBQ2xCLGdCQUFnQjtNQUNsQjtNQUNBO1FBQ0UsV0FBVztNQUNiO01BQ0E7UUFDRSxXQUFXO1FBQ1gsWUFBWTtNQUNkO01BQ0E7UUFDRSxtQkFBbUI7UUFDbkIsd0JBQXdCO01BQzFCO01BQ0E7UUFDRSxlQUFlO01BQ2pCO01BQ0E7UUFDRSxVQUFVO01BQ1o7TUFDQTtRQUNFLGNBQWM7UUFDZCxZQUFZO1FBQ1osV0FBVztNQUNiO01BQ0E7UUFDRSxlQUFlO01BQ2pCO01BQ0E7UUFDRSxhQUFhO1FBQ2IsZUFBZTtNQUNqQjtNQUNBO1FBQ0UsY0FBYztRQUNkLGFBQWE7TUFDZjtNQUNBO1FBQ0UsMkJBQTJCO1FBQzNCLHlCQUF5QjtNQUMzQjtNQUNBO1FBQ0UsV0FBVztNQUNiO01BQ0E7UUFDRSxlQUFlO1FBQ2YsV0FBVztNQUNiO01BQ0E7UUFDRSxjQUFjO01BQ2hCO01BQ0E7UUFDRSxXQUFXO1FBQ1gsY0FBYztNQUNoQjtNQUNBO1FBQ0UsYUFBYTtRQUNiLHdCQUF3QjtNQUMxQjtNQUNBO1FBQ0UsZUFBZTtRQUNmLFdBQVc7TUFDYjtNQUNBO1FBQ0UsYUFBYTtRQUNiLGVBQWU7TUFDakI7TUFDQTtRQUNFLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsWUFBWTtNQUNkO01BQ0E7UUFDRSx5QkFBeUI7UUFDekIsZ0JBQWdCO01BQ2xCO01BQ0E7UUFDRSxZQUFZO01BQ2Q7TUFDQTtRQUNFLGVBQWU7TUFDakI7TUFDQTtRQUNFLHFCQUFxQjtNQUN2QjtNQUNBO1FBQ0UsV0FBVztNQUNiO01BQ0E7UUFDRSxXQUFXO01BQ2I7TUFDQTtRQUNFLGFBQWE7UUFDYixVQUFVO01BQ1o7TUFDQTtRQUNFLGFBQWE7TUFDZjtNQUVBO1FBQ0UsZ0JBQWdCO01BQ2xCO01BSUE7R0FDSCxpQkFBaUI7TUFDZCIsImZpbGUiOiJzcmMvYXBwL2MtdXNlci9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAuYm9yZGVye1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNGMUYxRjE7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wtbWQtMyB7XHJcbiAgICAgIC1tcy1mbGV4OiAwIDAgNDAlO1xyXG4gICAgICBmbGV4OiAwIDAgNDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDQwJTtcclxuICB9XHJcbiAgLmNvbC1tZC0yIHtcclxuICAgIC1tcy1mbGV4OiAwIDAgMzAuNjY2NjY3JTtcclxuICAgIGZsZXg6IDAgMCAzMC42NjY2NjclO1xyXG4gICAgbWF4LXdpZHRoOiAzMC42NjY2NjclO1xyXG4gIH1cclxuICAuY29sLW1kLTkge1xyXG4gICAgLW1zLWZsZXg6IDAgMCA2MCU7XHJcbiAgICBmbGV4OiAwIDAgNjAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgfVxyXG4gICAgICAuaW1hZ2Utc2VjdGlvbntcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmltYWdlLXNlY3Rpb257XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnIHZpZXdCb3g9JzAgMCAxNjAwIDgwMCclM0UlM0NnICUzRSUzQ3BhdGggZmlsbD0nJTIzZWVmNGZhJyBkPSdNNDg2IDcwNS44Yy0xMDkuMy0yMS44LTIyMy40LTMyLjItMzM1LjMtMTkuNEM5OS41IDY5Mi4xIDQ5IDcwMyAwIDcxOS44VjgwMGg4NDMuOGMtMTE1LjktMzMuMi0yMzAuOC02OC4xLTM0Ny42LTkyLjJDNDkyLjggNzA3LjEgNDg5LjQgNzA2LjUgNDg2IDcwNS44eicvJTNFJTNDcGF0aCBmaWxsPSclMjNlMWVmZmEnIGQ9J00xNjAwIDBIMHY3MTkuOGM0OS0xNi44IDk5LjUtMjcuOCAxNTAuNy0zMy41YzExMS45LTEyLjcgMjI2LTIuNCAzMzUuMyAxOS40YzMuNCAwLjcgNi44IDEuNCAxMC4yIDJjMTE2LjggMjQgMjMxLjcgNTkgMzQ3LjYgOTIuMkgxNjAwVjB6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyM2Q0ZTlmYScgZD0nTTQ3OC40IDU4MWMzLjIgMC44IDYuNCAxLjcgOS41IDIuNWMxOTYuMiA1Mi41IDM4OC43IDEzMy41IDU5My41IDE3Ni42YzE3NC4yIDM2LjYgMzQ5LjUgMjkuMiA1MTguNi0xMC4yVjBIMHY1NzQuOWM1Mi4zLTE3LjYgMTA2LjUtMjcuNyAxNjEuMS0zMC45QzI2OC40IDUzNy40IDM3NS43IDU1NC4yIDQ3OC40IDU4MXonLyUzRSUzQ3BhdGggZmlsbD0nJTIzYzdlNGZhJyBkPSdNMCAwdjQyOS40YzU1LjYtMTguNCAxMTMuNS0yNy4zIDE3MS40LTI3LjdjMTAyLjgtMC44IDIwMy4yIDIyLjcgMjk5LjMgNTQuNWMzIDEgNS45IDIgOC45IDNjMTgzLjYgNjIgMzY1LjcgMTQ2LjEgNTYyLjQgMTkyLjFjMTg2LjcgNDMuNyAzNzYuMyAzNC40IDU1Ny45LTEyLjZWMEgweicvJTNFJTNDcGF0aCBmaWxsPSclMjNiOWRlZmEnIGQ9J00xODEuOCAyNTkuNGM5OC4yIDYgMTkxLjkgMzUuMiAyODEuMyA3Mi4xYzIuOCAxLjEgNS41IDIuMyA4LjMgMy40YzE3MSA3MS42IDM0Mi43IDE1OC41IDUzMS4zIDIwNy43YzE5OC44IDUxLjggNDAzLjQgNDAuOCA1OTcuMy0xNC44VjBIMHYyODMuMkM1OSAyNjMuNiAxMjAuNiAyNTUuNyAxODEuOCAyNTkuNHonLyUzRSUzQ3BhdGggZmlsbD0nJTIzYzhlM2Y1JyBkPSdNMTYwMCAwSDB2MTM2LjNjNjIuMy0yMC45IDEyNy43LTI3LjUgMTkyLjItMTkuMmM5My42IDEyLjEgMTgwLjUgNDcuNyAyNjMuMyA4OS42YzIuNiAxLjMgNS4xIDIuNiA3LjcgMy45YzE1OC40IDgxLjEgMzE5LjcgMTcwLjkgNTAwLjMgMjIzLjJjMjEwLjUgNjEgNDMwLjggNDkgNjM2LjYtMTYuNlYweicvJTNFJTNDcGF0aCBmaWxsPSclMjNkN2U5ZjAnIGQ9J000NTQuOSA4Ni4zQzYwMC43IDE3NyA3NTEuNiAyNjkuMyA5MjQuMSAzMjVjMjA4LjYgNjcuNCA0MzEuMyA2MC44IDYzNy45LTUuM2MxMi44LTQuMSAyNS40LTguNCAzOC4xLTEyLjlWMEgyODguMWM1NiAyMS4zIDEwOC43IDUwLjYgMTU5LjcgODJDNDUwLjIgODMuNCA0NTIuNSA4NC45IDQ1NC45IDg2LjN6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyM2U1ZWVlYicgZD0nTTE2MDAgMEg0OThjMTE4LjEgODUuOCAyNDMuNSAxNjQuNSAzODYuOCAyMTYuMmMxOTEuOCA2OS4yIDQwMCA3NC43IDU5NSAyMS4xYzQwLjgtMTEuMiA4MS4xLTI1LjIgMTIwLjMtNDEuN1YweicvJTNFJTNDcGF0aCBmaWxsPSclMjNmMmY0ZTUnIGQ9J00xMzk3LjUgMTU0LjhjNDcuMi0xMC42IDkzLjYtMjUuMyAxMzguNi00My44YzIxLjctOC45IDQzLTE4LjggNjMuOS0yOS41VjBINjQzLjRjNjIuOSA0MS43IDEyOS43IDc4LjIgMjAyLjEgMTA3LjRDMTAyMC40IDE3OC4xIDEyMTQuMiAxOTYuMSAxMzk3LjUgMTU0Ljh6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyM2ZmZjllMCcgZD0nTTEzMTUuMyA3Mi40Yzc1LjMtMTIuNiAxNDguOS0zNy4xIDIxNi44LTcyLjRoLTcyM0M5NjYuOCA3MSAxMTQ0LjcgMTAxIDEzMTUuMyA3Mi40eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgIC51c2VyLWltYWdle1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOi01MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC51c2VyLWxlZnQtcGFydHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgfVxyXG4gICAgICAudXNlci1pbWFnZSBpbWd7XHJcbiAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC51c2VyLXByb2ZpbC1wYXJ0e1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOjMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRkFGQUZBO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb2xsb3d7ICAgIFxyXG4gICAgICAgIG1hcmdpbi10b3A6NzBweDsgICBcclxuICAgICAgfVxyXG4gICAgICAudXNlci1kZXRhaWwtcm93e1xyXG4gICAgICAgIG1hcmdpbjowcHg7IFxyXG4gICAgICB9XHJcbiAgICAgIC51c2VyLWRldGFpbC1zZWN0aW9uMiBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgfVxyXG4gICAgICAudXNlci1kZXRhaWwtc2VjdGlvbjJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC51c2VyLWRldGFpbC1zZWN0aW9uMiBzcGFue1xyXG4gICAgICAgIGNvbG9yOiM3Q0JCQzM7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC51c2VyLWRldGFpbC1zZWN0aW9uMiBzbWFsbHtcclxuICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICBjb2xvcjojRDNBODZBO1xyXG4gICAgICB9XHJcbiAgICAgIC5wcm9maWxlLXJpZ2h0LXNlY3Rpb257XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHggMTBweCAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7ICBcclxuICAgICAgfVxyXG4gICAgICAucHJvZmlsZS1yaWdodC1zZWN0aW9uLXJvd3tcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgfVxyXG4gICAgICAucHJvZmlsZS1oZWFkZXItc2VjdGlvbjEgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5wcm9maWxlLWhlYWRlci1zZWN0aW9uMSBoNXtcclxuICAgICAgICBjb2xvcjogIzAwNjJjYztcclxuICAgICAgfVxyXG4gICAgICAucmVxLWJ0bntcclxuICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgfVxyXG4gICAgICAucHJvZmlsZS10YWd7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNGNkY2RjY7XHJcbiAgICAgIH1cclxuICAgICAgLnByb2ZpbGUtdGFnIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICB9XHJcbiAgICAgIC5wcm9maWxlLXRhZyBpe1xyXG4gICAgICAgIGNvbG9yOiNBREFEQUQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pbWFnZS1yaWdodC1wYXJ0e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0ZDRkM7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pbWctbWFpbi1yaWdodFBhcnR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRkNGQztcclxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbWFnZS1yaWdodC1kZXRhaWx7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pbWFnZS1yaWdodC1kZXRhaWwgcHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgLmltYWdlLXJpZ2h0LWRldGFpbCBhOmhvdmVye1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAuaW1hZ2UtcmlnaHQgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbWFnZS1yaWdodC1kZXRhaWwtc2VjdGlvbjJ7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmltYWdlLXJpZ2h0LWRldGFpbC1zZWN0aW9uMiBwe1xyXG4gICAgICAgIGNvbG9yOiMzOEFDREY7XHJcbiAgICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgfVxyXG4gICAgICAuaW1hZ2UtcmlnaHQtZGV0YWlsLXNlY3Rpb24yIHNwYW57XHJcbiAgICAgICAgY29sb3I6IzdGN0Y3RjtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5uYXYtbGlua3tcclxuICAgICAgICBmb250LXNpemU6IDEuMmVtOyAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICBcclxuICBcclxuICAgICAgLnh4e1xyXG4gICBtYXJnaW4tbGVmdDogNDVweDtcclxuICAgICAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.css']
        }]
      }], function () {
        return [{
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/c-user/components/signup/signup.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/c-user/components/signup/signup.component.ts ***!
    \**************************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppCUserComponentsSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function SignupComponent_h1_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Signup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " successfully ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.serverErrorMessages, " ");
      }
    }

    function SignupComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Hi There \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Welcome to the our site");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_8_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_8_div_13_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_8_div_13_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email address. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_8_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_8_div_13_div_1_Template, 2, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_8_div_13_div_2_Template, 2, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r21.submitted && _r24.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r21.submitted && _r24.errors.pattern);
      }
    }

    function SignupComponent_form_8_div_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_8_div_19_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter atleast 4 characters.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_8_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_8_div_19_div_1_Template, 2, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_8_div_19_div_2_Template, 2, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r21.submitted && _r26.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r21.submitted && _r26.errors.minlength);
      }
    }

    function SignupComponent_form_8_div_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_8_div_25_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " confirm password dose not match ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_8_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_8_div_25_div_1_Template, 2, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_8_div_25_div_2_Template, 2, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r21.submitted && _r28.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r21.submitted && _r28.errors.pattern);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    function SignupComponent_form_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_form_8_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return _r21.valid && ctx_r36.onSubmit(_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Full Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_8_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.userService.selectedUser.fullName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SignupComponent_form_8_div_7_Template, 2, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 18, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_8_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.userService.selectedUser.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignupComponent_form_8_div_13_Template, 3, 2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_8_Template_input_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.userService.selectedUser.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignupComponent_form_8_div_19_Template, 3, 2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Confirm Password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 22, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_8_Template_input_ngModelChange_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.confirmPassword = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SignupComponent_form_8_div_25_Template, 3, 2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \xA0 Signup With Google ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.userService.selectedUser.fullName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, _r21.submitted && !_r22.valid));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r21.submitted && !_r22.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.userService.selectedUser.email)("pattern", ctx_r20.emailRegex)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, _r21.submitted && !_r24.valid));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r21.submitted && _r24.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.userService.selectedUser.password)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, _r21.submitted && !_r26.valid));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r21.submitted && _r26.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", _r26.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.confirmPassword)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, _r21.submitted && !_r28.valid));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r21.submitted && _r28.errors);
      }
    }

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(userService, dialogRef) {
        _classCallCheck(this, SignupComponent);

        this.userService = userService;
        this.dialogRef = dialogRef;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.showSucessMessage = false;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetSelectedUser();
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this9 = this;

          this.userService.postUser(form.value).subscribe(function (res) {
            _this9.showSucessMessage = true;
            setTimeout(function () {
              return _this9.showSucessMessage = false;
            }, 3000);

            _this9.resetForm(form);

            setTimeout(function () {
              return _this9.dialogRef.close();
            }, 3000);
          }, function (err) {
            if (err.status === 422) {
              _this9.serverErrorMessages = err.error.join('<br/>');
            } else _this9.serverErrorMessages = 'Something went wrong.';
          });
        }
      }, {
        key: "resetSelectedUser",
        value: function resetSelectedUser() {
          this.userService.selectedUser = {
            fullName: '',
            email: '',
            password: ''
          };
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
          this.userService.selectedUser = {
            fullName: '',
            email: '',
            password: ''
          };
          form.resetForm();
          this.serverErrorMessages = '';
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 9,
      vars: 5,
      consts: [[1, "wsize"], [4, "ngIf"], ["style", "text-align: center;", "class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["style", "text-align: center;", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [1, "alert", "alert-success", 2, "text-align", "center"], [1, "alert", "alert-danger"], [2, "text-align", "center"], [1, "text-secondary"], [1, "far", "fa-grin-beam"], [3, "ngSubmit"], ["signUpForm", "ngForm"], [1, "form-group"], ["for", "formGroupExampleInput"], ["type", "text", "name", "fullName", "placeholder", "Full Name", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["fullName", "ngModel"], ["class", "invalidtext text-danger", 4, "ngIf"], ["type", "text", "name", "email", "placeholder", "Email", "required", "", 1, "form-control", 3, "ngModel", "pattern", "ngClass", "ngModelChange"], ["email", "ngModel"], ["type", "password", "name", "password", "placeholder", "Password", "minlength", "4", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["password", "ngModel"], ["type", "password", "name", "confirmPassword", "placeholder", "Confirm Password", "required", "", 1, "form-control", 3, "pattern", "ngModel", "ngClass", "ngModelChange"], ["cPassword", "ngModel"], ["type", "submit", "value", "Signup", 1, "btn", "btn-primary", "mb-2"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "fab", "fa-google"], [1, "invalidtext", "text-danger"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"]],
      styles: ["@media only screen and (min-width: 680px) {\r\n    .wsize[_ngcontent-%COMP%]{\r\n        margin: 10px auto;\r\n        width: 500px;\r\n        \r\n        }\r\n  }\r\n\r\n\r\n\r\n@media only screen and (max-width: 680px) {\r\n    .wsize[_ngcontent-%COMP%]{\r\n        margin: 10px auto;\r\n \r\n        \r\n        }\r\n  }\r\n\r\n\r\n\r\n.invalidtext[_ngcontent-%COMP%]{\r\n\r\n    font-size: 12px;\r\n}\r\n\r\n\r\n\r\nh1[_ngcontent-%COMP%]{\r\n   text-align: center;\r\n}\r\n\r\n\r\n\r\nform[_ngcontent-%COMP%]{\r\n    text-align: center\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLFlBQVk7O1FBRVo7RUFDTjs7OztBQUlGO0lBQ0k7UUFDSSxpQkFBaUI7OztRQUdqQjtFQUNOOzs7O0FBR0Y7O0lBRUksZUFBZTtBQUNuQjs7OztBQUlBO0dBQ0csa0JBQWtCO0FBQ3JCOzs7O0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYy11c2VyL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjgwcHgpIHtcclxuICAgIC53c2l6ZXtcclxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2ODBweCkge1xyXG4gICAgLndzaXple1xyXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gXHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gIH1cclxuXHJcbiAgICBcclxuLmludmFsaWR0ZXh0e1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuXHJcblxyXG5oMXtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmZvcm17XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/post/post.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/post/post.component.ts ***!
    \***************************************************/

  /*! exports provided: PostComponent */

  /***/
  function srcAppComponentsPostPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostComponent", function () {
      return PostComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/post.service */
    "./src/app/shared/post.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PostComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cannot Empty");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PostComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cannot Empty ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PostComponent = /*#__PURE__*/function () {
      function PostComponent(postService) {
        _classCallCheck(this, PostComponent);

        this.postService = postService;
        this.model = {
          topic: '',
          postbody: ''
        };
      }

      _createClass(PostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createPost",
        value: function createPost() {
          this.postService.addPost(this.model).subscribe(function (res) {
            alert("Done");
          }, function (err) {
            console.log("err" + JSON.stringify(err));
          });
        }
      }]);

      return PostComponent;
    }();

    PostComponent.ɵfac = function PostComponent_Factory(t) {
      return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]));
    };

    PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostComponent,
      selectors: [["app-post"]],
      decls: 21,
      vars: 2,
      consts: [[2, "width", "60%", "margin", "auto"], [1, "form-group"], ["for", "formGroupExampleInput"], ["type", "text", "name", "Topic", "placeholder", "Topic", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["topic", "ngModel"], ["class", "invalid-feedback", 4, "ngIf"], ["name", "postbody", "placeholder", "Type your post", "required", "", "id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["postbody", "ngModel"], ["type", "submit", "value", "Create", 1, "btn", "btn-primary", "mb-2", 3, "click"], [1, "invalid-feedback"]],
      template: function PostComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.model.topic = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PostComponent_div_13_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostComponent_Template_textarea_ngModelChange_17_listener($event) {
            return ctx.model.postbody = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PostComponent_div_19_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_Template_input_click_20_listener() {
            return ctx.createPost();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.topic);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.postbody);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post',
          templateUrl: './post.component.html',
          styleUrls: ['./post.component.css']
        }]
      }], function () {
        return [{
          type: _shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/post.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/post.service.ts ***!
    \****************************************/

  /*! exports provided: PostService */

  /***/
  function srcAppSharedPostServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostService", function () {
      return PostService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PostService = /*#__PURE__*/function () {
      function PostService(http) {
        _classCallCheck(this, PostService);

        this.http = http;
      }

      _createClass(PostService, [{
        key: "getPosts",
        value: function getPosts() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/posts');
        }
      }, {
        key: "getAPost",
        value: function getAPost(id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + "/post/".concat(id));
        }
      }, {
        key: "deletePost",
        value: function deletePost(id) {
          return this.http["delete"](_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + "/post/delete/".concat(id));
        }
      }, {
        key: "addPost",
        value: function addPost(post) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/addpost', post);
        }
      }]);

      return PostService;
    }();

    PostService.ɵfac = function PostService_Factory(t) {
      return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PostService,
      factory: PostService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/user.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/user.service.ts ***!
    \****************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.selectedUser = {
          fullName: '',
          email: '',
          password: ''
        };
        this.islog = false;
      }

      _createClass(UserService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/userlist');
        }
      }, {
        key: "getanuser",
        value: function getanuser(id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + "/user/".concat(id));
        }
      }, {
        key: "deleteuser",
        value: function deleteuser(id) {
          return this.http["delete"](_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + "/user/delete/".concat(id));
        }
      }, {
        key: "postUser",
        value: function postUser(user) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/register', user);
        }
      }, {
        key: "login",
        value: function login(authCredentials) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/signin', authCredentials);
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/userProfile');
        }
      }, {
        key: "googlelogin",
        value: function googlelogin() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/googlelll');
        }
      }, {
        key: "setToken",
        value: function setToken(token) {
          localStorage.setItem('token', token);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('token');
        }
      }, {
        key: "deleteToken",
        value: function deleteToken() {
          localStorage.removeItem('token');
        }
      }, {
        key: "getUserPayload",
        value: function getUserPayload() {
          var token = this.getToken();

          if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
          } else return null;
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var userPayload = this.getUserPayload();
          if (userPayload) return userPayload.exp > Date.now() / 1000;else return false;
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiBaseUrl: '/api'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\MEAN stack app\homeproject\Angular9\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map