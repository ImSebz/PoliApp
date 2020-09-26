function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacto-contacto-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contacto/contacto.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacto/contacto.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactoContactoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header   [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">     \n      <ion-menu-button></ion-menu-button>\n      <ion-button></ion-button>\n      <ion-title>Contacto</ion-title> \n    </ion-buttons>    \n    <div align=\"right\">\n      <img  class=encabezado src=\"assets/imagen/imagen1.png\" >\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Nombre & Apellido</ion-label>\n    <ion-input type=\"text\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\" >\n    <ion-label position=\"floating\">Email</ion-label>\n    <ion-input type=\"text\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Telefono</ion-label>\n    <ion-input type=\"numeric\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Comentario</ion-label>\n    <ion-input type=\"text\" required></ion-input>\n  </ion-item>\n  <div padding align=\"center\">\n    <button ion-button block type=\"submit\" class=\"Guardar\">Enviar</button>\n  </div>\n  <ion-text align=\"center\">\n    <h1>¿NESECITAS AYUDA?</h1>\n    <p>\n      Tenemos a tu disposición canales para que resuelvas tus dudas, ¡contáctanos!:\n    </p>\n    <div align=\"center\">\n      <ion-icon  name=\"mail-open-outline\"></ion-icon>\n      <p>Correo Electronico</p>\n      <a [routerLink]=\"['']\" class=\"small-text\">info_admisiones@pi.edu.co</a>\n    </div>\n    <div align=\"center\">\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n    </div>\n    <div align=\"center\">\n      <a [routerLink]=\"['']\" class=\"small-text\">Escribenos ></a>\n    </div>\n    <div align=\"center\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n    </div>   \n    <div>\n    <ion-button color=\"danger\"> (571) 400 5700</ion-button>\n    </div>\n    \n  </ion-text>\n</ion-content>\n\n\n<ion-footer class=\"piepagina\">\n  <div padding align=\"center\">\n    <img  class=piefondo src=\"assets/imagen/footer.png\" >\n  </div>\n  <div align=\"center\" class=\"pie\">\n    <p >Derechos Reservados</p>\n  </div>\n  \n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/contacto/contacto-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/contacto/contacto-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ContactoPageRoutingModule */

  /***/
  function srcAppContactoContactoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactoPageRoutingModule", function () {
      return ContactoPageRoutingModule;
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


    var _contacto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contacto.page */
    "./src/app/contacto/contacto.page.ts");

    var routes = [{
      path: '',
      component: _contacto_page__WEBPACK_IMPORTED_MODULE_3__["ContactoPage"]
    }];

    var ContactoPageRoutingModule = function ContactoPageRoutingModule() {
      _classCallCheck(this, ContactoPageRoutingModule);
    };

    ContactoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/contacto/contacto.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/contacto/contacto.module.ts ***!
    \*********************************************/

  /*! exports provided: ContactoPageModule */

  /***/
  function srcAppContactoContactoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactoPageModule", function () {
      return ContactoPageModule;
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


    var _contacto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contacto-routing.module */
    "./src/app/contacto/contacto-routing.module.ts");
    /* harmony import */


    var _contacto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contacto.page */
    "./src/app/contacto/contacto.page.ts");

    var ContactoPageModule = function ContactoPageModule() {
      _classCallCheck(this, ContactoPageModule);
    };

    ContactoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contacto_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactoPageRoutingModule"]],
      declarations: [_contacto_page__WEBPACK_IMPORTED_MODULE_6__["ContactoPage"]]
    })], ContactoPageModule);
    /***/
  },

  /***/
  "./src/app/contacto/contacto.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/contacto/contacto.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactoContactoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".encabezado {\n  width: 75px;\n  height: 68px;\n}\n\nion-content {\n  --background: linear-gradient(to top, rgb(132, 179, 255) 0%, #fff 100%);\n}\n\n.piefondo {\n  margin-top: 10px;\n  width: 30px;\n  height: 30px;\n}\n\n.pie {\n  font-size: 10px;\n  color: black;\n}\n\nion-item {\n  --background: transparentize($color: #000000, $amount: 0);\n}\n\nion-icon {\n  width: 50px;\n  height: 50px;\n  margin-top: 9px;\n}\n\nion-footer.piepagina {\n  background: linear-gradient(to top, #84b3ff 100%, #fff 0%);\n}\n\n.Guardar {\n  margin-top: 20px;\n  font-size: 14px;\n  background-color: #428cff;\n  padding: 10px 10px;\n  color: white;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG8vQzpcXFVzZXJzXFxDb25maWtvcmVcXFBvbGlBcHAvc3JjXFxhcHBcXGNvbnRhY3RvXFxjb250YWN0by5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbnRhY3RvL2NvbnRhY3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSx1RUFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUVJLHlEQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNLSjs7QURIQTtFQUNJLDBEQUFBO0FDTUo7O0FESkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0by9jb250YWN0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW5jYWJlemFkb3tcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDY4cHg7XG59XG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYigxMzIsIDE3OSwgMjU1KSAwJSwgI2ZmZiAxMDAlKTtcbn1cbi5waWVmb25kb3tcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cbi5waWV7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cbmlvbi1pdGVte1xuICAgIFxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnRpemUoJGNvbG9yOiAjMDAwMDAwLCAkYW1vdW50OiAwKTtcbn1cbmlvbi1pY29ue1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG59XG5pb24tZm9vdGVyLnBpZXBhZ2luYXtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2IoMTMyLCAxNzksIDI1NSkgMTAwJSwgI2ZmZiAwJSk7XG59XG4uR3VhcmRhciB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGNmZjtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlOyBcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIFxuICB9IiwiLmVuY2FiZXphZG8ge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA2OHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiKDEzMiwgMTc5LCAyNTUpIDAlLCAjZmZmIDEwMCUpO1xufVxuXG4ucGllZm9uZG8ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ucGllIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgkY29sb3I6ICMwMDAwMDAsICRhbW91bnQ6IDApO1xufVxuXG5pb24taWNvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDlweDtcbn1cblxuaW9uLWZvb3Rlci5waWVwYWdpbmEge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjODRiM2ZmIDEwMCUsICNmZmYgMCUpO1xufVxuXG4uR3VhcmRhciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGNmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/contacto/contacto.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/contacto/contacto.page.ts ***!
    \*******************************************/

  /*! exports provided: ContactoPage */

  /***/
  function srcAppContactoContactoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactoPage", function () {
      return ContactoPage;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");

    var ContactoPage = /*#__PURE__*/function () {
      function ContactoPage(authSvc, router, afAuth, google) {
        _classCallCheck(this, ContactoPage);

        this.authSvc = authSvc;
        this.router = router;
        this.afAuth = afAuth;
        this.google = google;
      }

      _createClass(ContactoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogout",
        value: function onLogout() {
          console.log('Logout!');
          this.afAuth.auth.signOut();
          this.google.disconnect();
          this.router.navigateByUrl('/login');
        }
      }]);

      return ContactoPage;
    }();

    ContactoPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__["GooglePlus"]
      }];
    };

    ContactoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contacto',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./contacto.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contacto/contacto.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./contacto.page.scss */
      "./src/app/contacto/contacto.page.scss"))["default"]]
    })], ContactoPage);
    /***/
  }
}]);
//# sourceMappingURL=contacto-contacto-module-es5.js.map