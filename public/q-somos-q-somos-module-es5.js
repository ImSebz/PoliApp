function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["q-somos-q-somos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/q-somos/q-somos.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/q-somos/q-somos.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQSomosQSomosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button> \n      <ion-button></ion-button>\n      <ion-title>¿Quienes somos?</ion-title>   \n    </ion-buttons> \n    <div align=\"right\"><img  class=encabezado src=\"assets/imagen/imagen1.png\" ></div>\n  </ion-toolbar>\n</ion-header>\n\n<STYLE>A {text-decoration: none;} </STYLE>\n\n\n<ion-content>\n  <ion-item>\n  <ion-img src=\"assets/imagen/calidad.jpg\"> </ion-img>\n  </ion-item>\n\n<ion-card>\n  <ion-item>\n    <ion-card-content>\n      <h1>¿Quienes somos?</h1> <br>\n      <p> Somos un grupo por empresarios que creen en Colombia, deseosos de retribuir a la sociedad y al país los rendimientos económicos originados por sus actividades. El Politécnico Internacional es una Institución de Educación Superior constituida como una fundación privada sin ánimo de lucro, la cual contribuye a la formación integral de la juventud colombiana, para hacer realidad sus sueños a través de la empleabilidad o el emprendimiento.\n        <br>\n        Es una Institución comprometida con el desarrollo laboral de sus egresados y es reconocida por las destacadas competencias prácticas y por los altos estándares de calidad y servicio que desarrolla en sus estudiantes; los cuales tienen una gran acogida en el sector productivo.\n    </p></ion-card-content>\n  </ion-item>\n<ion-item>\n  <ion-card-content>\n    <h1>Lo que nos diferencia</h1> <br>\n    <p> Decentralizado, la ubicación estratégica de nuestras cuatro sedes facilita a los jóvenes poder ir a estudiar sin incurrir en mayores gastos, debido a la cercanía de estas a sus lugares de vivienda o trabajo. Desde el 2019 implementamos nuestra modalidad virtual, dando más cobertura y llegando a más personas a nivel nacional.\n      </p>\n    </ion-card-content>\n  </ion-item>\n<ion-item>\n  <ion-card-content>\n    <ion-img src=\"assets/imagen/mapa.jpg\"> </ion-img>\n    </ion-card-content>\n</ion-item>\n</ion-card>\n<ion-content class=\"footer\" [fullscreen]=\"true\">\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\"> \n      <a href=\"https://www.facebook.com/politecnicointernacionalcolombia\">\n        <ion-tab-button tab=\"facebook\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n         <ion-label>Facebook</ion-label>\n      </ion-tab-button></a>\n      <a href=\"https://www.instagram.com/politecnicoin\"> \n      <ion-tab-button tab=\"instagram\">\n        <ion-icon name=\"logo-instagram\"></ion-icon>\n        <ion-label>Instagram</ion-label>\n      </ion-tab-button></a>\n\n      <a href=\"https://twitter.com/PolitecnicoIn?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor\">\n      <ion-tab-button tab=\"twitter\">\n        <ion-icon name=\"logo-twitter\"></ion-icon>\n        <ion-label>Twitter</ion-label>\n      </ion-tab-button></a>\n  \n      <ion-tab-button class=\"foot\" tab=\"about\">\n        <a  href=\"https://politecnicointernacional.edu.co/sw/es/home\"><ion-img src=\"assets/imagen/footer-somos.png\"> </ion-img> </a>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n </ion-content>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/q-somos/q-somos-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/q-somos/q-somos-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: QSomosPageRoutingModule */

  /***/
  function srcAppQSomosQSomosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QSomosPageRoutingModule", function () {
      return QSomosPageRoutingModule;
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


    var _q_somos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./q-somos.page */
    "./src/app/q-somos/q-somos.page.ts");

    var routes = [{
      path: '',
      component: _q_somos_page__WEBPACK_IMPORTED_MODULE_3__["QSomosPage"]
    }];

    var QSomosPageRoutingModule = function QSomosPageRoutingModule() {
      _classCallCheck(this, QSomosPageRoutingModule);
    };

    QSomosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QSomosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/q-somos/q-somos.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/q-somos/q-somos.module.ts ***!
    \*******************************************/

  /*! exports provided: QSomosPageModule */

  /***/
  function srcAppQSomosQSomosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QSomosPageModule", function () {
      return QSomosPageModule;
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


    var _q_somos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./q-somos-routing.module */
    "./src/app/q-somos/q-somos-routing.module.ts");
    /* harmony import */


    var _q_somos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./q-somos.page */
    "./src/app/q-somos/q-somos.page.ts");

    var QSomosPageModule = function QSomosPageModule() {
      _classCallCheck(this, QSomosPageModule);
    };

    QSomosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _q_somos_routing_module__WEBPACK_IMPORTED_MODULE_5__["QSomosPageRoutingModule"]],
      declarations: [_q_somos_page__WEBPACK_IMPORTED_MODULE_6__["QSomosPage"]]
    })], QSomosPageModule);
    /***/
  },

  /***/
  "./src/app/q-somos/q-somos.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/q-somos/q-somos.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppQSomosQSomosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".encabezado {\n  width: 75px;\n  height: 68px;\n  z-index: 10;\n}\n\n.cerrar {\n  position: absolute;\n}\n\nion-content {\n  --background: linear-gradient(to top, rgb(132, 179, 255) 0%, #fff 100%);\n}\n\n.footer {\n  height: 70px;\n}\n\nion-item {\n  --background: transparentize($color: #000000, $amount: 0);\n}\n\n.pie {\n  font-size: 10px;\n  color: black;\n}\n\n.piefondo {\n  margin-top: 10px;\n  width: 30px;\n  height: 30px;\n}\n\nion-tab-button.foot {\n  background-color: #005a9b;\n}\n\nion-img.mapa {\n  color: blue;\n  position: center;\n  align-content: center;\n}\n\nion-item class.map {\n  position: center;\n  align-content: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcS1zb21vcy9DOlxcVXNlcnNcXENvbmZpa29yZVxcUG9saUFwcC9zcmNcXGFwcFxccS1zb21vc1xccS1zb21vcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Etc29tb3MvcS1zb21vcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSx1RUFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtBQ0lKOztBREZBO0VBQ0EseURBQUE7QUNLQTs7QURIQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDTUE7O0FESEE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTUE7O0FESkE7RUFDQSx5QkFBQTtBQ09BOztBRExBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNRSjs7QURMQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvcS1zb21vcy9xLXNvbW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbmNhYmV6YWRve1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogNjhweDsgXG4gICAgei1pbmRleDogMTA7IFxufVxuLmNlcnJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbn1cbmlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiKDEzMiwgMTc5LCAyNTUpIDAlLCAjZmZmIDEwMCUpO1xufVxuLmZvb3RlciB7XG4gICAgaGVpZ2h0OiA3MHB4OyBcbn1cbmlvbi1pdGVte1xuLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgkY29sb3I6ICMwMDAwMDAsICRhbW91bnQ6IDApO1xufVxuLnBpZXtcbmZvbnQtc2l6ZTogMTBweDtcbmNvbG9yOiBibGFjaztcbn1cblxuLnBpZWZvbmRve1xubWFyZ2luLXRvcDogMTBweDtcbndpZHRoOiAzMHB4O1xuaGVpZ2h0OiAzMHB4O1xufVxuaW9uLXRhYi1idXR0b24uZm9vdHtcbmJhY2tncm91bmQtY29sb3I6IzAwNWE5Yjtcbn1cbmlvbi1pbWcubWFwYXtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBwb3NpdGlvbjogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0gY2xhc3MubWFwe1xuICAgIHBvc2l0aW9uOmNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiLmVuY2FiZXphZG8ge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA2OHB4O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmNlcnJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYigxMzIsIDE3OSwgMjU1KSAwJSwgI2ZmZiAxMDAlKTtcbn1cblxuLmZvb3RlciB7XG4gIGhlaWdodDogNzBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKCRjb2xvcjogIzAwMDAwMCwgJGFtb3VudDogMCk7XG59XG5cbi5waWUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnBpZWZvbmRvIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuaW9uLXRhYi1idXR0b24uZm9vdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVhOWI7XG59XG5cbmlvbi1pbWcubWFwYSB7XG4gIGNvbG9yOiBibHVlO1xuICBwb3NpdGlvbjogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi1pdGVtIGNsYXNzLm1hcCB7XG4gIHBvc2l0aW9uOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/q-somos/q-somos.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/q-somos/q-somos.page.ts ***!
    \*****************************************/

  /*! exports provided: QSomosPage */

  /***/
  function srcAppQSomosQSomosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QSomosPage", function () {
      return QSomosPage;
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

    var QSomosPage = /*#__PURE__*/function () {
      function QSomosPage(authSvc) {
        _classCallCheck(this, QSomosPage);

        this.authSvc = authSvc;
      }

      _createClass(QSomosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return QSomosPage;
    }();

    QSomosPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    QSomosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-q-somos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./q-somos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/q-somos/q-somos.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./q-somos.page.scss */
      "./src/app/q-somos/q-somos.page.scss"))["default"]]
    })], QSomosPage);
    /***/
  }
}]);
//# sourceMappingURL=q-somos-q-somos-module-es5.js.map