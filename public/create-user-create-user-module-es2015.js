(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-user-create-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-user/create-user.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-user/create-user.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content class=\"menu\" [fullscreen]=\"true\">\n\n  <div class=\"formulario\">\n\n    <form class=\"Crearusuario\" >\n      \n        <ion-item>\n          <ion-icon name=\"person-outline\" item-start></ion-icon>&nbsp;      \n          <ion-input type=\"text\" placeholder=\"Nombres\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"person-outline\" item-start></ion-icon>&nbsp;\n          <ion-input type=\"text\" placeholder=\"Apellidos\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"mail-outline\" item-start></ion-icon>&nbsp;\n          <ion-input type=\"text\" placeholder=\"Correo electrónico\"[(ngModel)]=\"user.email\" name=\"email\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"calendar-outline\" item-start></ion-icon>&nbsp;\n          <ion-label>Fecha de nacimiento </ion-label>\n          <ion-datetime></ion-datetime>\n        </ion-item>\n        <div>\n          <ion-item>\n            <ion-icon name=\"eye-outline\" item-start></ion-icon>&nbsp;\n            <ion-input type=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"user.password\" name=\"password\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"eye-outline\" item-start></ion-icon>&nbsp;\n            <ion-input type=\"password\" placeholder=\"Confirmar contraseña\"></ion-input>\n          </ion-item>\n        </div>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-icon name=\"woman-outline\" item-start></ion-icon>\n              <ion-label>Mujer</ion-label>\n              <ion-radio value=\"2\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-icon name=\"man-outline\" item-start></ion-icon>\n              <ion-label>Hombre</ion-label>\n              <ion-radio value=\"1\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      \n      <div padding align=\"center\">\n        <button ion-button block type=\"submit\" class=\"Guardar\" (click)=\"onRegister()\">REGISTRARSE</button><br>\n        <button ion-button block type=\"submit\" class=\"Guardar\" [routerLink]=\"['/login']\">LOGIN</button>\n      </div>\n    </form>\n  </div>\n</ion-content>\n<ion-footer>\n  <div padding align=\"center\">\n    <img  class=piefondo src=\"assets/imagen/footer.png\" >\n  </div>\n  <div align=\"center\" class=\"pie\">\n    <p >Derechos Reservados</p>\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/create-user/create-user-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/create-user/create-user-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CreateUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserPageRoutingModule", function() { return CreateUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-user.page */ "./src/app/create-user/create-user.page.ts");




const routes = [
    {
        path: '',
        component: _create_user_page__WEBPACK_IMPORTED_MODULE_3__["CreateUserPage"]
    }
];
let CreateUserPageRoutingModule = class CreateUserPageRoutingModule {
};
CreateUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateUserPageRoutingModule);



/***/ }),

/***/ "./src/app/create-user/create-user.module.ts":
/*!***************************************************!*\
  !*** ./src/app/create-user/create-user.module.ts ***!
  \***************************************************/
/*! exports provided: CreateUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserPageModule", function() { return CreateUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-user-routing.module */ "./src/app/create-user/create-user-routing.module.ts");
/* harmony import */ var _create_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-user.page */ "./src/app/create-user/create-user.page.ts");







let CreateUserPageModule = class CreateUserPageModule {
};
CreateUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateUserPageRoutingModule"]
        ],
        declarations: [_create_user_page__WEBPACK_IMPORTED_MODULE_6__["CreateUserPage"]]
    })
], CreateUserPageModule);



/***/ }),

/***/ "./src/app/create-user/create-user.page.scss":
/*!***************************************************!*\
  !*** ./src/app/create-user/create-user.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".encabezado {\n  width: 75px;\n  height: 68px;\n}\n\n.menu {\n  --background: linear-gradient(to top, rgb(132, 179, 255) 0%, #fff 100%);\n}\n\nion-item {\n  --background: transparentize($color: #000000, $amount: 0);\n}\n\n.formulario {\n  margin-top: 25px;\n}\n\n.pie {\n  font-size: 10px;\n  color: black;\n}\n\n.piefondo {\n  margin-top: 10px;\n  width: 30px;\n  height: 30px;\n}\n\n.Guardar {\n  margin-top: 20px;\n  font-size: 14px;\n  background-color: #428cff;\n  padding: 10px 10px;\n  color: white;\n  border-radius: 4px;\n}\n\n.Guardar:hover {\n  border: 1px solid #428cff;\n  background-color: white;\n  color: #428cff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXVzZXIvQzpcXFVzZXJzXFxDb25maWtvcmVcXFBvbGlBcHAvc3JjXFxhcHBcXGNyZWF0ZS11c2VyXFxjcmVhdGUtdXNlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2NyZWF0ZS11c2VyL2NyZWF0ZS11c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0U7RUFDRSx1RUFBQTtBQ0FKOztBREdFO0VBQ0UseURBQUE7QUNBSjs7QURHRTtFQUNFLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS11c2VyL2NyZWF0ZS11c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gLmVuY2FiZXphZG97XHJcbiAgd2lkdGg6IDc1cHg7XHJcbiAgaGVpZ2h0OiA2OHB4O1xyXG4gIFxyXG59XHJcbiAgLm1lbnV7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYigxMzIsIDE3OSwgMjU1KSAwJSwgI2ZmZiAxMDAlKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKCRjb2xvcjogIzAwMDAwMCwgJGFtb3VudDogMCk7XHJcbiAgfVxyXG5cclxuICAuZm9ybXVsYXJpbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIH1cclxuXHJcbi5waWV7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnBpZWZvbmRve1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5HdWFyZGFyIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4Y2ZmO1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICBjb2xvcjogd2hpdGU7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbn1cclxuLkd1YXJkYXI6aG92ZXJ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQyOGNmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogIzQyOGNmZjtcclxufSIsIi5lbmNhYmV6YWRvIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNjhweDtcbn1cblxuLm1lbnUge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYigxMzIsIDE3OSwgMjU1KSAwJSwgI2ZmZiAxMDAlKTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKCRjb2xvcjogIzAwMDAwMCwgJGFtb3VudDogMCk7XG59XG5cbi5mb3JtdWxhcmlvIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnBpZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucGllZm9uZG8ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uR3VhcmRhciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGNmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLkd1YXJkYXI6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDI4Y2ZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICM0MjhjZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/create-user/create-user.page.ts":
/*!*************************************************!*\
  !*** ./src/app/create-user/create-user.page.ts ***!
  \*************************************************/
/*! exports provided: CreateUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserPage", function() { return CreateUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _shared_user_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/user.class */ "./src/app/shared/user.class.ts");





let CreateUserPage = class CreateUserPage {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
        this.user = new _shared_user_class__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    ngOnInit() {
    }
    onRegister() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.authSvc.onRegister(this.user);
            if (user) {
                console.log('Successfully created user!');
                this.router.navigateByUrl('/login');
            }
        });
    }
};
CreateUserPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CreateUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-user.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-user/create-user.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-user.page.scss */ "./src/app/create-user/create-user.page.scss")).default]
    })
], CreateUserPage);



/***/ })

}]);
//# sourceMappingURL=create-user-create-user-module-es2015.js.map