(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-company-company-module"],{

/***/ "4hzC":
/*!*********************************************************!*\
  !*** ./src/app/pages/company/company-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CompanyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRoutingModule", function() { return CompanyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _view_company_view_company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-company/view-company.component */ "U4wS");





const routes = [
    {
        path: '',
        component: _view_company_view_company_component__WEBPACK_IMPORTED_MODULE_2__["ViewCompanyComponent"]
    },
];
class CompanyRoutingModule {
}
CompanyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompanyRoutingModule });
CompanyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompanyRoutingModule_Factory(t) { return new (t || CompanyRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "U4wS":
/*!**********************************************************************!*\
  !*** ./src/app/pages/company/view-company/view-company.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCompanyComponent", function() { return ViewCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_Model_Company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Model/Company */ "uFMN");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/company/company.service */ "fyic");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "GaVp");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "WJhm");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "tYkK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/table */ "haRT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/modal */ "NFMk");
/* harmony import */ var _detailview_company_detailview_company_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../detailview-company/detailview-company.component */ "UrUy");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ "66zS");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "W4B1");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/divider */ "SBNi");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/empty */ "mW00");



















function ViewCompanyComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewCompanyComponent_tr_27_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const data_r6 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.showSingleCompany(data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewCompanyComponent_tr_27_Template_i_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const data_r6 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event.stopPropagation(ctx_r10.handleEdit(data_r6)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nz-divider", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewCompanyComponent_tr_27_Template_i_click_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const data_r6 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event.stopPropagation(ctx_r11.DeleteCompany(data_r6)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, data_r6.createTime));
} }
function ViewCompanyComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-empty", 26);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzNotFoundImage", "assets/images/no-data/no-company.svg")("nzNotFoundContent", _r4);
} }
function ViewCompanyComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Data Available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Create new Broker ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ViewCompanyComponent {
    constructor(_companyService, _notification) {
        this._companyService = _companyService;
        this._notification = _notification;
        this.isVisible = false;
        this.listData = [];
        this.modalTitle = "Create new Broker";
        this.companyObserverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.checked = false;
        this.showCompany = false;
        this.company = new src_app_Model_Company__WEBPACK_IMPORTED_MODULE_2__["Company"]();
    }
    ngOnInit() {
        this._companyService.companyObserver$.subscribe(res => {
            if (res)
                this.listData = res;
            this.isVisible = false;
        });
        this._companyService.GetCompanies();
    }
    // ngOnDestroy()
    // {
    //   this.contactSubject.unsubscribe();
    // }
    handleModalOpen() {
        this.isVisible = true;
        this.modalTitle = "New Broker";
        this.companyObserverSubject.next(null);
        this.showCompany = false;
    }
    handleCancel() {
        this.isVisible = false;
        this.showCompany = false;
    }
    handleEdit(data) {
        this.modalTitle = "Edit Broker";
        this.isVisible = true;
        this.showCompany = false;
        this.companyObserverSubject.next(data);
    }
    showSingleCompany(data) {
        this.company = data;
        this.showCompany = true;
    }
    DeleteCompany(data) {
        this._notification.delete().then(result => {
            if (result.isConfirmed) {
                this._companyService.DeleteCompany(data.id).subscribe(res => {
                    if (res.isSuccessfull) {
                        this._companyService.GetCompanies();
                        this._notification.success('Broker Deleted Successfully!');
                    }
                    else {
                        this._notification.error('Error while deleting Broker!');
                    }
                });
            }
            else {
                return;
            }
        });
        this.showCompany = false;
    }
}
ViewCompanyComponent.ɵfac = function ViewCompanyComponent_Factory(t) { return new (t || ViewCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
ViewCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewCompanyComponent, selectors: [["app-view-company"]], decls: 50, vars: 10, consts: [[1, "breadcrumbs", "mb-3"], [1, "row", "mb-4"], [1, "col-xl-10"], [1, "w-25"], [1, "col-xl-2"], ["nz-button", "", "nzType", "primary", 1, "float-right", 3, "click"], ["nz-col", "", 3, "nzSpan"], ["nzSize", "middle", 3, "nzData", "nzNoResult"], ["rowSelectionTable", ""], ["nzTooltipTitle", "Click to View Broker", "style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["noData", ""], ["noDescrip", ""], ["nzFooter", "null", "nzWidth", "30%", "nzMaskClosable", "false", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel"], [3, "companyDataSubject"], ["nzFooter", "null", "nzWidth", "700", "nzMaskClosable", "false", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel"], [1, "row"], [1, "popup-action-btns"], ["nz-icon", "", "nzType", "edit", "nz-tooltip", "", "nzTooltipTitle", "Edit Broker", "nzTheme", "fill", 1, "text-success", 3, "click"], ["nz-icon", "", "nzType", "delete", "nz-tooltip", "", "nzTooltipTitle", "Delete Broker", "nzTheme", "fill", 1, "text-success", 3, "click"], [1, "col-xl-12", "p-4"], [1, "card-body"], [1, "row", "mb-3"], [1, "col-xl-5", "mb-4", "offset-sm-1"], [1, "t-10", "text-gray-5"], ["nzTooltipTitle", "Click to View Broker", 2, "cursor", "pointer", 3, "click"], ["nzType", "vertical"], [1, "m-5", 3, "nzNotFoundImage", "nzNotFoundContent"], [1, "m-4"], [1, "kit__utils__link"]], template: function ViewCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Broker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewCompanyComponent_Template_a_click_8_listener() { return ctx.handleModalOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add Broker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-table", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Broker Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Created Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ViewCompanyComponent_tr_27_Template, 15, 6, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ViewCompanyComponent_ng_template_28_Template, 1, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ViewCompanyComponent_ng_template_30_Template, 4, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nz-modal", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function ViewCompanyComponent_Template_nz_modal_nzVisibleChange_33_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function ViewCompanyComponent_Template_nz_modal_nzOnCancel_33_listener() { return ctx.handleCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-detailview-company", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nz-modal", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function ViewCompanyComponent_Template_nz_modal_nzVisibleChange_36_listener($event) { return ctx.showCompany = $event; })("nzOnCancel", function ViewCompanyComponent_Template_nz_modal_nzOnCancel_36_listener() { return ctx.showCompany = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewCompanyComponent_Template_i_click_40_listener($event) { return $event.stopPropagation(ctx.handleEdit(ctx.company)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewCompanyComponent_Template_i_click_41_listener($event) { return $event.stopPropagation(ctx.DeleteCompany(ctx.company)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Broker Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listData)("nzNoResult", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzTitle", ctx.modalTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("companyDataSubject", ctx.companyObserverSubject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.showCompany)("nzTitle", "BrokerInfo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company.name);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__["NzModalComponent"], _detailview_company_detailview_company_component__WEBPACK_IMPORTED_MODULE_11__["DetailviewCompanyComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__["NzTooltipDirective"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_14__["NzDividerComponent"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_15__["NzEmptyComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWNvbXBhbnkuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-company',
                templateUrl: './view-company.component.html',
                styleUrls: ['./view-company.component.css']
            }]
    }], function () { return [{ type: src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"] }, { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "UrUy":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/company/detailview-company/detailview-company.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DetailviewCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailviewCompanyComponent", function() { return DetailviewCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/company/company.service */ "fyic");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "tYkK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ "GaVp");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "Jp/u");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "WJhm");
















function DetailviewCompanyComponent_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Broker Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailviewCompanyComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Opening Balance is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DetailviewCompanyComponent {
    constructor(fb, _notification, _companyService) {
        this.fb = fb;
        this._notification = _notification;
        this._companyService = _companyService;
        this.isEditMode = false;
        this.loading = false;
        this.form = fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            openingBalance: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    get f() { return this.form.controls; }
    ngOnInit() {
        this.companyDataSubject.subscribe(res => {
            if (res) {
                this.form.patchValue(res);
                this.companyId = res.id;
                this.isEditMode = true;
            }
            else {
                this.form.reset();
                this.companyId = null;
                this.isEditMode = false;
            }
        });
    }
    handleSubmit() {
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        let data = this.form.value;
        if (this.isEditMode) {
            data.id = this.companyId;
            this._companyService.UpdateCompany(data).subscribe(res => {
                this.loading = false;
                if (res.isSuccessfull) {
                    this._companyService.GetCompanies();
                    this._notification.success('Broker Updated Successfully!');
                }
                else {
                    this._notification.error('Error while updating Broker!');
                }
            });
        }
        else {
            this.loading = false;
            this._companyService.SaveCompanies(data).subscribe(res => {
                if (res.isSuccessfull) {
                    this._companyService.GetCompanies();
                    this._notification.success('Broker Saved Successfully!');
                }
                else {
                    this._notification.error('Error while saving Broker!');
                }
            });
        }
    }
    resetForm() {
        this.form.setValue({
            name: null
        });
    }
}
DetailviewCompanyComponent.ɵfac = function DetailviewCompanyComponent_Factory(t) { return new (t || DetailviewCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"])); };
DetailviewCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailviewCompanyComponent, selectors: [["app-detailview-company"]], inputs: { companyDataSubject: "companyDataSubject" }, decls: 16, vars: 6, consts: [["nz-row", ""], ["nz-col", "", 3, "nzSpan"], [3, "formGroup"], [1, "col-xl-12", "mb-2"], ["matInput", "", "formControlName", "name"], [4, "ngIf"], ["matInput", "", "formControlName", "openingBalance"], [1, "form-group", "text-center", "mt-4"], ["type", "submit", "nz-button", "", "nzType", "primary", 3, "nzLoading", "click"]], template: function DetailviewCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Broker Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailviewCompanyComponent_mat_error_7_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Opening Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DetailviewCompanyComponent_mat_error_12_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailviewCompanyComponent_Template_button_click_14_listener() { return ctx.handleSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.name.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.openingBalance.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Update Broker" : "Add Broker", " ");
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzColDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWx2aWV3LWNvbXBhbnkuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailviewCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detailview-company',
                templateUrl: './detailview-company.component.html',
                styleUrls: ['./detailview-company.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"] }]; }, { companyDataSubject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "fZ5M":
/*!*************************************!*\
  !*** ./src/app/Model/BaseEntity.ts ***!
  \*************************************/
/*! exports provided: BaseEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseEntity", function() { return BaseEntity; });
class BaseEntity {
}


/***/ }),

/***/ "fyic":
/*!*****************************************************!*\
  !*** ./src/app/services/company/company.service.ts ***!
  \*****************************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Model/Global */ "BQhZ");
/* harmony import */ var _base_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-api-handler.service */ "91If");







class CompanyService extends _base_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["BaseApiHandlerService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.companySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.statementSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.companyObserver$ = this.companySubject$.asObservable();
        this.statementObserver$ = this.statementSubject$.asObservable();
    }
    get companies() { return this.companySubject$.value; }
    // GetBrokerStatement(companyId)
    // {
    //   console.log('chal rha')
    //   return this.GetAll(API_URL+API_ENDPOINTS.Transaction+`/GetBrokerStatement?companyId=${companyId}`).subscribe(res=>{
    //     this.statementSubject$.next(res.dynamicResult);
    //   });
    // }
    GetBrokerStatement(req) {
        console.log('chal rha');
        return this.Post(req, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Transaction + `/GetBrokerStatement`).subscribe(res => {
            this.statementSubject$.next(res.dynamicResult);
        });
    }
    GetAgentStatement(req) {
        console.log('chal rha');
        return this.Post(req, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Transaction + `/GetAgentStatement`).subscribe(res => {
            this.statementSubject$.next(res.dynamicResult);
        });
    }
    GetBankStatement(req) {
        return this.Post(req, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Transaction + `/GetBankStatement`).subscribe(res => {
            this.statementSubject$.next(res.dynamicResult);
        });
    }
    SaveCompanies(data) {
        return this.Post(data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Company);
    }
    UpdateCompany(data) {
        return this.Update(data.id, data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Company);
    }
    GetCompanies() {
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Company).subscribe(res => {
            this.companySubject$.next(res.dynamicResult);
        });
    }
    DeleteCompany(id) {
        return this.Delete(id, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Company);
    }
}
CompanyService.ɵfac = function CompanyService_Factory(t) { return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CompanyService, factory: CompanyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CompanyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rXpt":
/*!*************************************************!*\
  !*** ./src/app/pages/company/company.module.ts ***!
  \*************************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-routing.module */ "4hzC");
/* harmony import */ var _detailview_company_detailview_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detailview-company/detailview-company.component */ "UrUy");
/* harmony import */ var _view_company_view_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-company/view-company.component */ "U4wS");
/* harmony import */ var src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/antd/antd.module */ "PaOY");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");









class CompanyModule {
}
CompanyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompanyModule });
CompanyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompanyModule_Factory(t) { return new (t || CompanyModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _company_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyRoutingModule"],
            src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_5__["AntdModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyModule, { declarations: [_detailview_company_detailview_company_component__WEBPACK_IMPORTED_MODULE_3__["DetailviewCompanyComponent"], _view_company_view_company_component__WEBPACK_IMPORTED_MODULE_4__["ViewCompanyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _company_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyRoutingModule"],
        src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_5__["AntdModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_detailview_company_detailview_company_component__WEBPACK_IMPORTED_MODULE_3__["DetailviewCompanyComponent"], _view_company_view_company_component__WEBPACK_IMPORTED_MODULE_4__["ViewCompanyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _company_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyRoutingModule"],
                    src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_5__["AntdModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "uFMN":
/*!**********************************!*\
  !*** ./src/app/Model/Company.ts ***!
  \**********************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
/* harmony import */ var _BaseEntity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseEntity */ "fZ5M");

class Company extends _BaseEntity__WEBPACK_IMPORTED_MODULE_0__["BaseEntity"] {
}


/***/ })

}]);
//# sourceMappingURL=src-app-pages-company-company-module.js.map