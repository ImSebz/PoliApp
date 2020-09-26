function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content class=\"menu\" [fullscreen]=\"true\">\n  <div padding align=\"center\">\n    <img class=logo src=\"assets/imagen/1.png\" >\n  </div>\n  <form>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Usuario</ion-label>\n      <ion-input type=\"text\" required [(ngModel)]=\"user.email\" name=\"email\" ></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\" >\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input type=\"password\" required [(ngModel)]=\"user.password\" name=\"password\" ></ion-input>\n    </ion-item>\n    <br>\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" class=\"ingresar\" (click)=\"onLogin()\">Ingresar</ion-button>       \n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-button class=\"google\" (click)=\"loginGoogle()\">\n            <ion-icon name=\"logo-google\"></ion-icon>\n          </ion-button>\n          <ion-button class=\"facebook\" (click)=\"loginFacebook()\">\n            <ion-icon name=\"logo-facebook\"></ion-icon>\n          </ion-button>       \n        </ion-col>\n      </ion-row>\n\n  </form>\n  <br>\n  <a [routerLink]=\"['/create-user']\" class=\"small-text\">¿No Tienes Cuenta?  Registrate!</a>\n</ion-content>\n<ion-footer>\n  <div padding align=\"center\">\n    <img  class=piefondo src=\"assets/imagen/footer.png\" >\n  </div>\n  <div align=\"center\" class=\"pie\">\n    <p >Derechos Reservados</p>\n  </div>\n  \n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  --background: transparentize($color: #000000, $amount: 0);\n}\n\nion-content.menu {\n  --background: linear-gradient(to top, rgb(132, 179, 255) 0%, #fff 100%);\n}\n\n.logo {\n  margin-top: 35px;\n  width: 150px;\n  height: 150px;\n}\n\n.encabezado {\n  width: 75px;\n  height: 68px;\n}\n\n.piefondo {\n  margin-top: 10px;\n  width: 30px;\n  height: 30px;\n}\n\n.pie {\n  font-size: 10px;\n  color: black;\n}\n\nion-content {\n  text-align: center;\n}\n\n.a {\n  text-decoration: none;\n}\n\nion-row {\n  text-align: center;\n}\n\n.ingresar:hover {\n  border: 1px solid #428cff;\n  border-radius: 5px;\n  --background: white;\n  color: #428cff;\n}\n\n.google {\n  --background: #DB4437;\n}\n\n.google:hover {\n  --background:white;\n  color: #DB4437;\n  border: 1px solid #DB4437;\n  border-radius: 5px;\n}\n\n.facebook {\n  --background: #3b5998;\n}\n\n.facebook:hover {\n  --background:white;\n  color: #3b5998;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxDb25maWtvcmVcXFBvbGlBcHAvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlEQUFBO0FDQVI7O0FER0k7RUFDSSx1RUFBQTtBQ0FSOztBREdJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0FSOztBREVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDUjs7QURDSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFUjs7QURBSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDR1I7O0FEREk7RUFDSSxrQkFBQTtBQ0lSOztBREZJO0VBQ0kscUJBQUE7QUNLUjs7QURISTtFQUNJLGtCQUFBO0FDTVI7O0FESkk7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDT1I7O0FETEk7RUFDSSxxQkFBQTtBQ1FSOztBRE5JO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ1NSOztBRFBJO0VBQ0kscUJBQUE7QUNVUjs7QURSSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ1dSIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW9uLWl0ZW17XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnRpemUoJGNvbG9yOiAjMDAwMDAwLCAkYW1vdW50OiAwKTtcbiAgICBcbiAgICB9XG4gICAgaW9uLWNvbnRlbnQubWVudXtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2IoMTMyLCAxNzksIDI1NSkgMCUsICNmZmYgMTAwJSk7XG4gICAgfVxuICBcbiAgICAubG9nb3tcbiAgICAgICAgbWFyZ2luLXRvcDozNXB4O1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgfVxuICAgIC5lbmNhYmV6YWRve1xuICAgICAgICB3aWR0aDogNzVweDtcbiAgICAgICAgaGVpZ2h0OiA2OHB4OyBcbiAgICB9XG4gICAgLnBpZWZvbmRve1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICAucGlle1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5hIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcbiAgICB9XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmluZ3Jlc2FyOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzQyOGNmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzQyOGNmZjtcbiAgICB9XG4gICAgLmdvb2dsZSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI0RCNDQzNzsgXG4gICAgfVxuICAgIC5nb29nbGU6aG92ZXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6d2hpdGU7XG4gICAgICAgIGNvbG9yOiAgI0RCNDQzNztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgICNEQjQ0Mzc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgIFxuICAgIH1cbiAgICAuZmFjZWJvb2sge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICMzYjU5OTg7XG4gICAgfVxuICAgIC5mYWNlYm9vazpob3ZlcntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOndoaXRlO1xuICAgICAgICBjb2xvcjojM2I1OTk4O1xuICAgIH1cblxuXG5cbiAgICIsImlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgkY29sb3I6ICMwMDAwMDAsICRhbW91bnQ6IDApO1xufVxuXG5pb24tY29udGVudC5tZW51IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2IoMTMyLCAxNzksIDI1NSkgMCUsICNmZmYgMTAwJSk7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uZW5jYWJlemFkbyB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDY4cHg7XG59XG5cbi5waWVmb25kbyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5waWUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tcm93IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5ncmVzYXI6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDI4Y2ZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiAjNDI4Y2ZmO1xufVxuXG4uZ29vZ2xlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjREI0NDM3O1xufVxuXG4uZ29vZ2xlOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kOndoaXRlO1xuICBjb2xvcjogI0RCNDQzNztcbiAgYm9yZGVyOiAxcHggc29saWQgI0RCNDQzNztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZmFjZWJvb2sge1xuICAtLWJhY2tncm91bmQ6ICMzYjU5OTg7XG59XG5cbi5mYWNlYm9vazpob3ZlciB7XG4gIC0tYmFja2dyb3VuZDp3aGl0ZTtcbiAgY29sb3I6ICMzYjU5OTg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _shared_user_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/user.class */
    "./src/app/shared/user.class.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(router, authSvc) {
        _classCallCheck(this, LoginPage);

        this.router = router;
        this.authSvc = authSvc;
        this.user = new _shared_user_class__WEBPACK_IMPORTED_MODULE_4__["User"]();
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var user;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.authSvc.onLogin(this.user);

                  case 2:
                    user = _context.sent;

                    if (user) {
                      console.log('Successfully logged in!');
                      this.router.navigateByUrl('/q-somos');
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "loginGoogle",
        value: function loginGoogle() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.authSvc.loginWithGoogle().then(function () {
                      _this.router.navigateByUrl('/q-somos');
                    })["catch"](function (err) {
                      alert("Los datos son incorrectos o no existe el usuario");
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "loginFacebook",
        value: function loginFacebook() {
          var _this2 = this;

          this.authSvc.loginWithFacebook().then(function (res) {
            _this2.router.navigate(['/q-somos']);
          })["catch"](function (err) {
            alert('hubo un error');
          });
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map