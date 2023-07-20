(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"],{

/***/ "+j1i":
/*!****************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.ts ***!
  \****************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/modal */ "NFMk");




class WelcomeComponent {
    constructor(modal) {
        this.modal = modal;
        this.users = [
            {
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park'
            },
            {
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park'
            },
            {
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park'
            }
        ];
        this.isVisible = false;
    }
    ngOnInit() {
    }
    showModal() {
        this.isVisible = true;
    }
    handleOk() {
        console.log('Button ok clicked!');
        this.isVisible = false;
    }
    handleCancel() {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    }
    showDeleteConfirm() {
        this.modal.confirm({
            nzTitle: 'Are you sure delete this task?',
            nzContent: '<b style="color: red;">Some descriptions</b>',
            nzOkText: 'Yes',
            nzOkType: 'primary',
            nzOnOk: () => console.log('OK'),
            nzCancelText: 'No',
            nzOnCancel: () => console.log('Cancel')
        });
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalService"])); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 0, vars: 0, template: function WelcomeComponent_Template(rf, ctx) { }, styles: ["[nz-button][_ngcontent-%COMP%] {\n  margin-right: 8px;\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6IndlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbbnotYnV0dG9uXSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.scss']
            }]
    }], function () { return [{ type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalService"] }]; }, null); })();


/***/ }),

/***/ "T2Lb":
/*!*********************************************************!*\
  !*** ./src/app/pages/welcome/welcome-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeRoutingModule", function() { return WelcomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome.component */ "+j1i");





const routes = [
    { path: '', component: _welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"] },
];
class WelcomeRoutingModule {
}
WelcomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WelcomeRoutingModule });
WelcomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WelcomeRoutingModule_Factory(t) { return new (t || WelcomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WelcomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "TtBp":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.module.ts ***!
  \*************************************************/
/*! exports provided: WelcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/antd/antd.module */ "PaOY");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome-routing.module */ "T2Lb");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome.component */ "+j1i");






class WelcomeModule {
}
WelcomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WelcomeModule });
WelcomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function WelcomeModule_Factory(t) { return new (t || WelcomeModule)(); }, imports: [[_welcome_routing_module__WEBPACK_IMPORTED_MODULE_3__["WelcomeRoutingModule"], src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_2__["AntdModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WelcomeModule, { declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]], imports: [_welcome_routing_module__WEBPACK_IMPORTED_MODULE_3__["WelcomeRoutingModule"], src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_2__["AntdModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WelcomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_welcome_routing_module__WEBPACK_IMPORTED_MODULE_3__["WelcomeRoutingModule"], src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_2__["AntdModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]],
                exports: [_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-welcome-welcome-module.js.map