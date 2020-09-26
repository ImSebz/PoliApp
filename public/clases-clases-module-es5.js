function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clases-clases-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/clases/clases.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clases/clases.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClasesClasesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">     \n      <ion-menu-button></ion-menu-button> \n      <ion-button></ion-button>\n      <ion-title>Guías</ion-title>   \n    </ion-buttons>    \n    <div align=\"right\"><img  class=encabezado src=\"assets/imagen/imagen1.png\" ></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar showCancelButton=\"focus\" cancelButtonText=\"Custom Cancel\" placeholder=\"Buscar lección\"></ion-searchbar>\n  \n  <div>\n    <input type=\"hidden\" name=\"MAX_FILE_SIZE\" value=\"4194304\" />\n    <input type=\"file\" />\n  </div>\n  <br/>\n  \n  <!-- \n  <ion-content class=\"sub-menu\">\n   <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">  \n  \n      <ion-tab-button tab=\"speakers\">\n        <ion-icon name=\"document\"></ion-icon>\n        <ion-label>Guías</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"map\" routerLink=\"/video\">\n        <ion-icon name=\"videocam\"></ion-icon>\n        <ion-label>Videos</ion-label>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n   </ion-tabs>\n  </ion-content> -->\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/clases/clases-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/clases/clases-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: ClasesPageRoutingModule */

  /***/
  function srcAppClasesClasesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClasesPageRoutingModule", function () {
      return ClasesPageRoutingModule;
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


    var _clases_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./clases.page */
    "./src/app/clases/clases.page.ts");

    var routes = [{
      path: '',
      component: _clases_page__WEBPACK_IMPORTED_MODULE_3__["ClasesPage"]
    }];

    var ClasesPageRoutingModule = function ClasesPageRoutingModule() {
      _classCallCheck(this, ClasesPageRoutingModule);
    };

    ClasesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ClasesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/clases/clases.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/clases/clases.module.ts ***!
    \*****************************************/

  /*! exports provided: ClasesPageModule */

  /***/
  function srcAppClasesClasesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClasesPageModule", function () {
      return ClasesPageModule;
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


    var _clases_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./clases-routing.module */
    "./src/app/clases/clases-routing.module.ts");
    /* harmony import */


    var _clases_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./clases.page */
    "./src/app/clases/clases.page.ts");

    var ClasesPageModule = function ClasesPageModule() {
      _classCallCheck(this, ClasesPageModule);
    };

    ClasesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _clases_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClasesPageRoutingModule"]],
      declarations: [_clases_page__WEBPACK_IMPORTED_MODULE_6__["ClasesPage"]]
    })], ClasesPageModule);
    /***/
  },

  /***/
  "./src/app/clases/clases.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/clases/clases.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppClasesClasesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  --background: transparentize($color: #000000, $amount: 0);\n}\n\nion-content {\n  --background: linear-gradient(to top, rgb(132, 179, 255) 0%, #fff 100%);\n}\n\n.logo {\n  margin-top: 20px;\n  width: 150px;\n  height: 150px;\n}\n\n.encabezado {\n  width: 75px;\n  height: 68px;\n}\n\n.piefondo {\n  margin-top: 10px;\n  width: 30px;\n  height: 30px;\n}\n\n.pie {\n  font-size: 10px;\n  color: black;\n}\n\nion-content {\n  text-align: center;\n}\n\n.sub-menu {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xhc2VzL0M6XFxVc2Vyc1xcQ29uZmlrb3JlXFxQb2xpQXBwL3NyY1xcYXBwXFxjbGFzZXNcXGNsYXNlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NsYXNlcy9jbGFzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseURBQUE7QUNBSjs7QURFQTtFQUNJLHVFQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9jbGFzZXMvY2xhc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnRpemUoJGNvbG9yOiAjMDAwMDAwLCAkYW1vdW50OiAwKTtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiKDEzMiwgMTc5LCAyNTUpIDAlLCAjZmZmIDEwMCUpO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcbi5lbmNhYmV6YWRve1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDY4cHg7IFxyXG59XHJcbi5waWVmb25kb3tcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4ucGlle1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3ViLW1lbnUge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59IiwiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKCRjb2xvcjogIzAwMDAwMCwgJGFtb3VudDogMCk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2IoMTMyLCAxNzksIDI1NSkgMCUsICNmZmYgMTAwJSk7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uZW5jYWJlemFkbyB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDY4cHg7XG59XG5cbi5waWVmb25kbyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5waWUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdWItbWVudSB7XG4gIGhlaWdodDogNTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/clases/clases.page.ts":
  /*!***************************************!*\
    !*** ./src/app/clases/clases.page.ts ***!
    \***************************************/

  /*! exports provided: ClasesPage */

  /***/
  function srcAppClasesClasesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClasesPage", function () {
      return ClasesPage;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var ClasesPage = /*#__PURE__*/function () {
      function ClasesPage(authSvc) {
        _classCallCheck(this, ClasesPage);

        this.authSvc = authSvc;
      }

      _createClass(ClasesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClasesPage;
    }();

    ClasesPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    ClasesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-clases',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./clases.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/clases/clases.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./clases.page.scss */
      "./src/app/clases/clases.page.scss"))["default"]]
    })], ClasesPage);
    /***/
  }
}]);
//# sourceMappingURL=clases-clases-module-es5.js.map