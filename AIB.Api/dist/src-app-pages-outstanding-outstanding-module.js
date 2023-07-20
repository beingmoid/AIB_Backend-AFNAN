(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-outstanding-outstanding-module"],{

/***/ "2v8c":
/*!*********************************************************!*\
  !*** ./src/app/pages/outstanding/outstanding.module.ts ***!
  \*********************************************************/
/*! exports provided: OutstandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutstandingModule", function() { return OutstandingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _outstanding_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outstanding-routing.module */ "38ug");
/* harmony import */ var _view_outstanding_view_outstanding_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-outstanding/view-outstanding.component */ "VgwI");
/* harmony import */ var _detailview_outstanding_detailview_outstanding_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detailview-outstanding/detailview-outstanding.component */ "TsSU");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/antd/antd.module */ "PaOY");
/* harmony import */ var _company_outstandings_company_outstandings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company-outstandings/company-outstandings.component */ "5vnp");
/* harmony import */ var _agent_outstadings_agent_outstadings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./agent-outstadings/agent-outstadings.component */ "d844");
/* harmony import */ var _transactions_transactions_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../transactions/transactions.module */ "RMDf");











class OutstandingModule {
}
OutstandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OutstandingModule });
OutstandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OutstandingModule_Factory(t) { return new (t || OutstandingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _outstanding_routing_module__WEBPACK_IMPORTED_MODULE_2__["OutstandingRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_6__["AntdModule"],
            _transactions_transactions_module__WEBPACK_IMPORTED_MODULE_9__["TransactionsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OutstandingModule, { declarations: [_view_outstanding_view_outstanding_component__WEBPACK_IMPORTED_MODULE_3__["ViewOutstandingComponent"], _detailview_outstanding_detailview_outstanding_component__WEBPACK_IMPORTED_MODULE_4__["DetailviewOutstandingComponent"], _company_outstandings_company_outstandings_component__WEBPACK_IMPORTED_MODULE_7__["CompanyOutstandingsComponent"], _agent_outstadings_agent_outstadings_component__WEBPACK_IMPORTED_MODULE_8__["AgentOutstadingsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _outstanding_routing_module__WEBPACK_IMPORTED_MODULE_2__["OutstandingRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_6__["AntdModule"],
        _transactions_transactions_module__WEBPACK_IMPORTED_MODULE_9__["TransactionsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutstandingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_view_outstanding_view_outstanding_component__WEBPACK_IMPORTED_MODULE_3__["ViewOutstandingComponent"], _detailview_outstanding_detailview_outstanding_component__WEBPACK_IMPORTED_MODULE_4__["DetailviewOutstandingComponent"], _company_outstandings_company_outstandings_component__WEBPACK_IMPORTED_MODULE_7__["CompanyOutstandingsComponent"], _agent_outstadings_agent_outstadings_component__WEBPACK_IMPORTED_MODULE_8__["AgentOutstadingsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _outstanding_routing_module__WEBPACK_IMPORTED_MODULE_2__["OutstandingRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_6__["AntdModule"],
                    _transactions_transactions_module__WEBPACK_IMPORTED_MODULE_9__["TransactionsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "38ug":
/*!*****************************************************************!*\
  !*** ./src/app/pages/outstanding/outstanding-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: OutstandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutstandingRoutingModule", function() { return OutstandingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _view_outstanding_view_outstanding_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-outstanding/view-outstanding.component */ "VgwI");





const routes = [{
        path: '',
        component: _view_outstanding_view_outstanding_component__WEBPACK_IMPORTED_MODULE_2__["ViewOutstandingComponent"]
    }];
class OutstandingRoutingModule {
}
OutstandingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OutstandingRoutingModule });
OutstandingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OutstandingRoutingModule_Factory(t) { return new (t || OutstandingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OutstandingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutstandingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "5vnp":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/outstanding/company-outstandings/company-outstandings.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CompanyOutstandingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyOutstandingsComponent", function() { return CompanyOutstandingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_transaction_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/transaction/transaction.service */ "GIIu");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "tYkK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ "NFMk");
/* harmony import */ var _transactions_detailview_transaction_detailview_transaction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../transactions/detailview-transaction/detailview-transaction.component */ "xmP1");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/card */ "YdS3");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "GaVp");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "Jp/u");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "WJhm");













function CompanyOutstandingsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Amount Payble : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", company_r3.company)("nzExtra", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, company_r3.payable, "1.2-2"), " AED ");
} }
function CompanyOutstandingsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyOutstandingsComponent_ng_template_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.isVisible = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CompanyOutstandingsComponent {
    constructor(_transactionService) {
        this._transactionService = _transactionService;
        this.companyObserverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this._transactionService.transactionForCompanyObserver$.subscribe(res => {
            this.Outstandings = res;
        });
    }
}
CompanyOutstandingsComponent.ɵfac = function CompanyOutstandingsComponent_Factory(t) { return new (t || CompanyOutstandingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_transaction_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"])); };
CompanyOutstandingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyOutstandingsComponent, selectors: [["app-company-outstandings"]], decls: 10, vars: 3, consts: [[1, "breadcrumbs", "mb-3"], ["nz-row", ""], ["nz-col", "", 4, "ngFor", "ngForOf"], ["extraTemplate", ""], ["nzFooter", "null", "nzWidth", "50%", "nzTitle", "Transaction", 3, "nzVisible", "nzVisibleChange", "nzOnCancel"], [3, "transactionDataSubject"], ["nz-col", ""], [2, "width", "31.25rem", 3, "nzTitle", "nzExtra"], ["nz-button", "", 1, "ant-btn-dangerous", 3, "click"]], template: function CompanyOutstandingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Broker's Outstandings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CompanyOutstandingsComponent_div_4_Template, 7, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CompanyOutstandingsComponent_ng_template_5_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-modal", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function CompanyOutstandingsComponent_Template_nz_modal_nzVisibleChange_8_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function CompanyOutstandingsComponent_Template_nz_modal_nzOnCancel_8_listener() { return ctx.isVisible = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-detailview-transaction", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Outstandings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("transactionDataSubject", ctx.companyObserverSubject);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__["NzModalComponent"], _transactions_detailview_transaction_detailview_transaction_component__WEBPACK_IMPORTED_MODULE_6__["DetailviewTransactionComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__["NzCardComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LW91dHN0YW5kaW5ncy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyOutstandingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-company-outstandings',
                templateUrl: './company-outstandings.component.html',
                styleUrls: ['./company-outstandings.component.css']
            }]
    }], function () { return [{ type: src_app_services_transaction_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"] }]; }, null); })();


/***/ }),

/***/ "TsSU":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/outstanding/detailview-outstanding/detailview-outstanding.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DetailviewOutstandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailviewOutstandingComponent", function() { return DetailviewOutstandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class DetailviewOutstandingComponent {
    constructor() { }
    ngOnInit() {
    }
}
DetailviewOutstandingComponent.ɵfac = function DetailviewOutstandingComponent_Factory(t) { return new (t || DetailviewOutstandingComponent)(); };
DetailviewOutstandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailviewOutstandingComponent, selectors: [["app-detailview-outstanding"]], decls: 2, vars: 0, template: function DetailviewOutstandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "detailview-outstanding works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWx2aWV3LW91dHN0YW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailviewOutstandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detailview-outstanding',
                templateUrl: './detailview-outstanding.component.html',
                styleUrls: ['./detailview-outstanding.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "VgwI":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/outstanding/view-outstanding/view-outstanding.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewOutstandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOutstandingComponent", function() { return ViewOutstandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_agent_agent_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/agent/agent.service */ "Y8+K");
/* harmony import */ var src_app_services_BankAccounts_bankaccounts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/BankAccounts/bankaccounts.service */ "KD4f");
/* harmony import */ var src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company/company.service */ "fyic");
/* harmony import */ var src_app_services_transaction_transaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/transaction/transaction.service */ "GIIu");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "1+nf");
/* harmony import */ var _company_outstandings_company_outstandings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../company-outstandings/company-outstandings.component */ "5vnp");
/* harmony import */ var _agent_outstadings_agent_outstadings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../agent-outstadings/agent-outstadings.component */ "d844");













class ViewOutstandingComponent {
    constructor(_transacionService, _bankAccountService, _agentService, _companyService) {
        this._transacionService = _transacionService;
        this._bankAccountService = _bankAccountService;
        this._agentService = _agentService;
        this._companyService = _companyService;
    }
    ngOnInit() {
        this._transacionService.GetTransactionForCompany();
        this._transacionService.GetTransactionForAgent();
        this._transacionService.GetTransaction();
        this._bankAccountService.GetBankAccounts();
        this._agentService.GetAgent();
        this._companyService.GetCompanies();
    }
}
ViewOutstandingComponent.ɵfac = function ViewOutstandingComponent_Factory(t) { return new (t || ViewOutstandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_transaction_transaction_service__WEBPACK_IMPORTED_MODULE_4__["TransactionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_BankAccounts_bankaccounts_service__WEBPACK_IMPORTED_MODULE_2__["BankAccountsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_agent_agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"])); };
ViewOutstandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewOutstandingComponent, selectors: [["app-view-outstanding"]], decls: 5, vars: 0, consts: [["nzTitle", "Broker's Outstandings"], ["nzTitle", "Agent's Outstadings "]], template: function ViewOutstandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-company-outstandings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-agent-outstadings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_5__["NzTabSetComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_5__["NzTabComponent"], _company_outstandings_company_outstandings_component__WEBPACK_IMPORTED_MODULE_6__["CompanyOutstandingsComponent"], _agent_outstadings_agent_outstadings_component__WEBPACK_IMPORTED_MODULE_7__["AgentOutstadingsComponent"]], styles: ["nz-card[_ngcontent-%COMP%]\r\n{\r\n    margin-bottom: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctb3V0c3RhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoidmlldy1vdXRzdGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibnotY2FyZFxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewOutstandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-outstanding',
                templateUrl: './view-outstanding.component.html',
                styleUrls: ['./view-outstanding.component.css']
            }]
    }], function () { return [{ type: src_app_services_transaction_transaction_service__WEBPACK_IMPORTED_MODULE_4__["TransactionService"] }, { type: src_app_services_BankAccounts_bankaccounts_service__WEBPACK_IMPORTED_MODULE_2__["BankAccountsService"] }, { type: src_app_services_agent_agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"] }, { type: src_app_services_company_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] }]; }, null); })();


/***/ }),

/***/ "d844":
/*!************************************************************************************!*\
  !*** ./src/app/pages/outstanding/agent-outstadings/agent-outstadings.component.ts ***!
  \************************************************************************************/
/*! exports provided: AgentOutstadingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentOutstadingsComponent", function() { return AgentOutstadingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_transaction_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/transaction/transaction.service */ "GIIu");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "WJhm");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ "px0D");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "tYkK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "66zS");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/card */ "YdS3");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/modal */ "NFMk");
/* harmony import */ var _transactions_detailview_transactionbyagent_detailview_transactionbyagent_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../transactions/detailview-transactionbyagent/detailview-transactionbyagent.component */ "uZPw");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ "GaVp");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "Jp/u");
















function AgentOutstadingsComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
} }
function AgentOutstadingsComponent_div_11_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgentOutstadingsComponent_div_11_ng_template_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.isVisible = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Receive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentOutstadingsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Amount Receivable : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AgentOutstadingsComponent_div_11_ng_template_7_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-modal", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function AgentOutstadingsComponent_div_11_Template_nz_modal_nzVisibleChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.isVisible = $event; })("nzOnCancel", function AgentOutstadingsComponent_div_11_Template_nz_modal_nzOnCancel_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.isVisible = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-detailview-transactionbyagent", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r3 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", company_r3.agent)("nzExtra", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 5, company_r3.receving, "1.2-2"), " AED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx_r2.isVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("transactionDataSubject", ctx_r2.companyObserverSubject);
} }
class FilterObject {
    constructor(data) {
        this.data = data;
        this.agent = this.data.agent;
    }
}
class AgentOutstadingsComponent {
    constructor(_transacionService) {
        this._transacionService = _transacionService;
        this.companyObserverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this._transacionService.transactionForAgentObserver$.subscribe(res => {
            this.AgentOutStandings = res;
            this.listDataCopy = JSON.stringify(this.AgentOutStandings);
        });
    }
    filter() {
        this.AgentOutStandings = JSON.parse(this.listDataCopy);
        if (this.search !== "") {
            this.AgentOutStandings = this.AgentOutStandings.filter(item => {
                let data = new FilterObject(item);
                return Object.keys(data).some(k => data[k] != null &&
                    data[k]
                        .toString()
                        .toLowerCase()
                        .includes(this.search.toLowerCase()));
            });
        }
    }
}
AgentOutstadingsComponent.ɵfac = function AgentOutstadingsComponent_Factory(t) { return new (t || AgentOutstadingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_transaction_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"])); };
AgentOutstadingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgentOutstadingsComponent, selectors: [["app-agent-outstadings"]], decls: 12, vars: 3, consts: [[1, "breadcrumbs", "mb-3"], [1, "row", "mb-4"], [1, "col-xl-10"], [1, "w-25"], ["nzSize", "large", 3, "nzPrefix"], ["type", "text", "nz-input", "", "placeholder", "Search for Agents", 3, "ngModel", "ngModelChange"], ["suffixIconSearch", ""], ["nz-row", ""], ["nz-col", "", 4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "search"], ["nz-col", ""], [2, "width", "31.25rem", 3, "nzTitle", "nzExtra"], ["extraTemplate", ""], ["nzFooter", "null", "nzWidth", "50%", "nzTitle", "Transaction", 3, "nzVisible", "nzVisibleChange", "nzOnCancel"], [3, "transactionDataSubject"], ["nz-button", "", 1, "ant-btn-dangerous", 3, "click"]], template: function AgentOutstadingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Agent's Outstandings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-input-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgentOutstadingsComponent_Template_input_ngModelChange_7_listener($event) { return ctx.search = $event; })("ngModelChange", function AgentOutstadingsComponent_Template_input_ngModelChange_7_listener() { return ctx.filter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AgentOutstadingsComponent_ng_template_8_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AgentOutstadingsComponent_div_11_Template, 12, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPrefix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.AgentOutStandings);
    } }, directives: [ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputGroupWhitSuffixOrPrefixDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__["NzModalComponent"], _transactions_detailview_transactionbyagent_detailview_transactionbyagent_component__WEBPACK_IMPORTED_MODULE_11__["DetailviewTransactionbyagentComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__["NzWaveDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ2VudC1vdXRzdGFkaW5ncy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgentOutstadingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agent-outstadings',
                templateUrl: './agent-outstadings.component.html',
                styleUrls: ['./agent-outstadings.component.css']
            }]
    }], function () { return [{ type: src_app_services_transaction_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-pages-outstanding-outstanding-module.js.map