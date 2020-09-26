function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-video-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/video/video.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video/video.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVideoVideoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">    \n      <ion-menu-button></ion-menu-button>\n      <ion-button></ion-button> \n      <ion-title>Videos</ion-title>   \n    </ion-buttons>       \n    <div align=\"right\"><img class=encabezado src=\"assets/imagen/imagen1.png\" ></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar showCancelButton placeholder=\"Buscar\" ></ion-searchbar>\n\n<div class=\"card\">\n\n  <!-- \n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Leccion 1</ion-card-subtitle>\n      <ion-card-title>Colocación y mantenimiento de aparatos de ortodoncia removible</ion-card-title><br>\n      <iframe width=\"300\" height=\"315\" src=\"https://www.youtube.com/embed/883-Qa26jmU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>    </ion-card-header>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Leccion 1</ion-card-subtitle>\n      <ion-card-title>Protesis dentales</ion-card-title><br>\n      <iframe width=\"300\" height=\"315\" src=\"https://www.youtube.com/embed/7A_RtycZlTA\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>    </ion-card-header>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Leccion 1</ion-card-subtitle>\n      <ion-card-title>Férulas dentales</ion-card-title><br>\n      <iframe width=\"300\" height=\"315\" src=\"https://www.youtube.com/embed/Y51BZDA_h_s\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>    </ion-card-header>\n    </ion-card>\n\n  -->\n    <div>\n      <input type=\"hidden\" name=\"MAX_FILE_SIZE\" value=\"4194304\" />\n      <input type=\"file\" />\n    </div>\n    <br/>\n</div> \n\n\n</ion-content>\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/video/video-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/video/video-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: VideoPageRoutingModule */

  /***/
  function srcAppVideoVideoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoPageRoutingModule", function () {
      return VideoPageRoutingModule;
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


    var _video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./video.page */
    "./src/app/video/video.page.ts");

    var routes = [{
      path: '',
      component: _video_page__WEBPACK_IMPORTED_MODULE_3__["VideoPage"]
    }];

    var VideoPageRoutingModule = function VideoPageRoutingModule() {
      _classCallCheck(this, VideoPageRoutingModule);
    };

    VideoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VideoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/video/video.module.ts":
  /*!***************************************!*\
    !*** ./src/app/video/video.module.ts ***!
    \***************************************/

  /*! exports provided: VideoPageModule */

  /***/
  function srcAppVideoVideoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoPageModule", function () {
      return VideoPageModule;
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


    var _video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./video-routing.module */
    "./src/app/video/video-routing.module.ts");
    /* harmony import */


    var _video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./video.page */
    "./src/app/video/video.page.ts");

    var VideoPageModule = function VideoPageModule() {
      _classCallCheck(this, VideoPageModule);
    };

    VideoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _video_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoPageRoutingModule"]],
      declarations: [_video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]]
    })], VideoPageModule);
    /***/
  },

  /***/
  "./src/app/video/video.page.scss":
  /*!***************************************!*\
    !*** ./src/app/video/video.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppVideoVideoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  --background: transparentize($color: #000000, $amount: 0);\n}\n\nion-content {\n  --background: linear-gradient(to top, rgb(132, 179, 255) 0%, #fff 100%);\n  text-align: center;\n}\n\n.logo {\n  margin-top: 20px;\n  width: 150px;\n  height: 150px;\n}\n\n.encabezado {\n  width: 75px;\n  height: 68px;\n}\n\n.piefondo {\n  margin-top: 10px;\n  width: 30px;\n  height: 30px;\n}\n\n.card {\n  width: 100%;\n}\n\n.pie {\n  font-size: 10px;\n  color: black;\n}\n\n.sub-menu {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8vQzpcXFVzZXJzXFxDb25maWtvcmVcXFBvbGlBcHAvc3JjXFxhcHBcXHZpZGVvXFx2aWRlby5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZpZGVvL3ZpZGVvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlEQUFBO0FDQ0o7O0FERUE7RUFDSSx1RUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtBQ0lKOztBRERBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvL3ZpZGVvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgkY29sb3I6ICMwMDAwMDAsICRhbW91bnQ6IDApO1xyXG5cclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiKDEzMiwgMTc5LCAyNTUpIDAlLCAjZmZmIDEwMCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufVxyXG5cclxuLmxvZ297XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG4uZW5jYWJlemFkb3tcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiA2OHB4OyBcclxufVxyXG4ucGllZm9uZG97XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiBcclxufVxyXG4ucGlle1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5zdWItbWVudSB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7IFxyXG59IiwiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKCRjb2xvcjogIzAwMDAwMCwgJGFtb3VudDogMCk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2IoMTMyLCAxNzksIDI1NSkgMCUsICNmZmYgMTAwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5lbmNhYmV6YWRvIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNjhweDtcbn1cblxuLnBpZWZvbmRvIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBpZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc3ViLW1lbnUge1xuICBoZWlnaHQ6IDUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/video/video.page.ts":
  /*!*************************************!*\
    !*** ./src/app/video/video.page.ts ***!
    \*************************************/

  /*! exports provided: VideoPage */

  /***/
  function srcAppVideoVideoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoPage", function () {
      return VideoPage;
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

    var VideoPage = /*#__PURE__*/function () {
      function VideoPage(authSvc) {
        _classCallCheck(this, VideoPage);

        this.authSvc = authSvc;
      }

      _createClass(VideoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VideoPage;
    }();

    VideoPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    VideoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-video',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./video.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/video/video.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./video.page.scss */
      "./src/app/video/video.page.scss"))["default"]]
    })], VideoPage);
    /***/
  }
}]);
//# sourceMappingURL=video-video-module-es5.js.map