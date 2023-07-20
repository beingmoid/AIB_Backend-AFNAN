(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-invoice-invoice-module"],{

/***/ "E90t":
/*!**********************************************************************!*\
  !*** ./src/app/pages/invoice/view-invoice/view-invoice.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewInvoiceComponent", function() { return ViewInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_Invoice_invoice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Invoice/invoice.service */ "PAu0");
/* harmony import */ var src_app_Model_Invoice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Model/Invoice */ "p3wj");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "WJhm");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/input */ "px0D");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "GaVp");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ "tYkK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/table */ "haRT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/modal */ "NFMk");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ "66zS");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "W4B1");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/divider */ "SBNi");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/empty */ "mW00");




















function ViewInvoiceComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function ViewInvoiceComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewInvoiceComponent_tr_29_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r8 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.showSingleInvoice(data_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewInvoiceComponent_tr_29_Template_i_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r8 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event.stopPropagation(ctx_r12.handleEdit(data_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nz-divider", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewInvoiceComponent_tr_29_Template_i_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r8 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event.stopPropagation(ctx_r13.DeleteInvoice(data_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r8);
} }
function ViewInvoiceComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-empty", 38);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzNotFoundImage", "assets/images/no-data/no-company.svg")("nzNotFoundContent", _r6);
} }
function ViewInvoiceComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Data Available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Create new Invoice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ViewInvoiceComponent {
    constructor(_invoiceService, _notification) {
        this._invoiceService = _invoiceService;
        this._notification = _notification;
        this.isVisible = false;
        this.listData = [];
        this.modalTitle = "Create new Invoice";
        this.invoiceObserverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.invoice = new src_app_Model_Invoice__WEBPACK_IMPORTED_MODULE_4__["Invoice"]();
        this.showInvoice = false;
    }
    ngOnInit() {
        this._invoiceService.invoiceObserver$.subscribe(res => {
            if (res)
                this.listData = res;
            this.isVisible = false;
        });
        this._invoiceService.GetInvoice();
    }
    handleModalOpen() {
        this.isVisible = true;
        this.modalTitle = "New Company";
        this.invoiceObserverSubject.next(null);
        this.showInvoice = false;
    }
    handleCancel() {
        this.isVisible = false;
        this.showInvoice = false;
    }
    handleEdit(data) {
        this.modalTitle = "Edit Company";
        this.isVisible = true;
        this.showInvoice = false;
        this.invoiceObserverSubject.next(data);
    }
    showSingleInvoice(data) {
        this.invoice = data;
        this.showInvoice = true;
    }
    DeleteInvoice(data) {
        this._notification.delete().then(result => {
            if (result.isConfirmed) {
                this._invoiceService.DeleteInvoice(data.id).subscribe(res => {
                    if (res.isSuccessfull) {
                        this._invoiceService.GetInvoice();
                        this._notification.success('Invoice Deleted Successfully!');
                    }
                    else {
                        this._notification.error('Error while deleting Invoice!');
                    }
                });
            }
            else {
                return;
            }
        });
        this.showInvoice = false;
    }
}
ViewInvoiceComponent.ɵfac = function ViewInvoiceComponent_Factory(t) { return new (t || ViewInvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Invoice_invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"])); };
ViewInvoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewInvoiceComponent, selectors: [["app-view-invoice"]], decls: 83, vars: 7, consts: [[1, "breadcrumbs", "mb-3"], [1, "row", "mb-4"], [1, "col-xl-10"], [1, "w-25"], ["nzSize", "large", 3, "nzPrefix"], ["type", "text", "nz-input", "", "placeholder", "Search for Invoice", 3, "ngModel", "ngModelChange"], ["suffixIconSearch", ""], [1, "col-xl-2"], ["nz-button", "", "nzType", "primary", 1, "float-right", 3, "click"], ["nz-col", "", 3, "nzSpan"], ["nzSize", "middle", 3, "nzData"], ["rowSelectionTable", ""], ["nzTooltipTitle", "Click to View Invoice", "style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["noData", ""], ["noDescrip", ""], ["nzFooter", "null", "nzWidth", "700", "nzMaskClosable", "false", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel"], [1, "row"], [1, "popup-action-btns"], ["nz-icon", "", "nzType", "edit", "nz-tooltip", "", "nzTooltipTitle", "Edit Invoice", "nzTheme", "fill", 1, "text-success", "mr-3"], ["nz-icon", "", "nzType", "delete", "nz-tooltip", "", "nzTooltipTitle", "Delete Invoice", "nzTheme", "fill", 1, "text-danger"], ["id", "inv", 1, "modalDdata", "px-4"], [1, ""], [1, "invoice-top-section", "pl-3"], [1, "col-md-6"], [1, "invoice-title"], [1, "fw-700", "text-primary"], [1, "col-md-6", "logo"], ["src", "assets/images/SCB_LOGO.jpg", 2, "width", "100%", "height", "100%", "max-width", "130px"], [1, "text-size-12"], [1, "row", "pt-5", "pb-4"], [1, "mb-4", "col-md-3"], [1, "t-10", "text-gray-5"], [1, "f-13"], ["nz-icon", "", "nzType", "search"], ["nzTooltipTitle", "Click to View Invoice", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzType", "edit", "nz-tooltip", "", "nzTooltipTitle", "Edit Company", "nzTheme", "fill", 1, "text-success", 3, "click"], ["nzType", "vertical"], ["nz-icon", "", "nzType", "delete", "nz-tooltip", "", "nzTooltipTitle", "Delete Company", "nzTheme", "fill", 1, "text-success", 3, "click"], [1, "m-5", 3, "nzNotFoundImage", "nzNotFoundContent"], [1, "m-4"], [1, "kit__utils__link"]], template: function ViewInvoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-input-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewInvoiceComponent_Template_input_ngModelChange_8_listener($event) { return ctx.search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ViewInvoiceComponent_ng_template_9_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewInvoiceComponent_Template_a_click_12_listener() { return ctx.handleModalOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-table", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Invoice Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ViewInvoiceComponent_tr_29_Template, 10, 2, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ViewInvoiceComponent_ng_template_30_Template, 1, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ViewInvoiceComponent_ng_template_32_Template, 4, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nz-modal", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function ViewInvoiceComponent_Template_nz_modal_nzVisibleChange_35_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function ViewInvoiceComponent_Template_nz_modal_nzOnCancel_35_listener() { return ctx.isVisible = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h1", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "aa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "aa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Invoice Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "aa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Due Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "aa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Retainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "aa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPrefix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzTitle", "InvoiceInfo");
    } }, directives: [ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputGroupWhitSuffixOrPrefixDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzColDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__["NzModalComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzTooltipDirective"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_15__["NzDividerComponent"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__["NzEmptyComponent"]], styles: [".invoice-detail-div[_ngcontent-%COMP%]   .invoice-detail[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 15%;\n  display: inline-table;\n}\n.invoice-detail-div[_ngcontent-%COMP%]   .invoice-detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.invoiceRowTitle[_ngcontent-%COMP%]   .titleData[_ngcontent-%COMP%], .invoiceRowDescp[_ngcontent-%COMP%]   .descpData[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 18%;\n}\n.row2[_ngcontent-%COMP%]   .invoiceRowTitle[_ngcontent-%COMP%]   .titleData[_ngcontent-%COMP%], .row2[_ngcontent-%COMP%]   .invoiceRowDescp[_ngcontent-%COMP%]   .descpData[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 12.8%;\n}\n.row2[_ngcontent-%COMP%]   .invoiceRowTitle[_ngcontent-%COMP%]   .titleData[_ngcontent-%COMP%]:last-child, .row2[_ngcontent-%COMP%]   .invoiceRowDescp[_ngcontent-%COMP%]   .descpData[_ngcontent-%COMP%]:last-child {\n  width: 9%;\n}\n.invoiceRowDescp[_ngcontent-%COMP%]   .descpData[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.invoiceRowDescp[_ngcontent-%COMP%]   .descpData[_ngcontent-%COMP%]:last-child, .invoiceRowTitle[_ngcontent-%COMP%]   .titleData[_ngcontent-%COMP%]:last-child {\n  width: 10%;\n}\n  .period-control__button:not(.period-control__button--disabled):focus:after {\n  bottom: -5.5px !important;\n  height: 2.5px !important;\n}\n@media (max-width: 1199px) {\n    .ant-modal {\n    width: 95% !important;\n  }\n}\n@media (max-width: 991px) {\n  .mobilePadding[_ngcontent-%COMP%] {\n    padding: 0;\n    padding-top: 15px;\n  }\n}\n@media (max-width: 575px) {\n    .ant-modal-header {\n    padding-bottom: 0 !important;\n  }\n\n  .d-flex.mobilePadding[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  .totalNumber[_ngcontent-%COMP%] {\n    padding: 10px !important;\n  }\n\n  .savePreviewBtn[_ngcontent-%COMP%] {\n    margin-top: 0 !important;\n    margin-bottom: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlldy1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FBSE47QUFNSTtFQUNFLFVBQUE7QUFKTjtBQVNBOztFQUVFLHFCQUFBO0VBQ0EsVUFBQTtBQU5GO0FBUUE7O0VBRUUscUJBQUE7RUFDQSxZQUFBO0FBTEY7QUFPQTs7RUFFRSxTQUFBO0FBSkY7QUFNQTtFQUNFLGdCQUFBO0FBSEY7QUFNQTs7RUFFRSxVQUFBO0FBSEY7QUFLQTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7QUFGRjtBQXNCQTtFQUNDO0lBQ0cscUJBQUE7RUFuQkY7QUFDRjtBQXdCQTtFQUNBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBdEJBO0FBQ0Y7QUErQkE7RUFJQTtJQUNFLDRCQUFBO0VBaENBOztFQWtDRjtJQUNFLHlCQUFBO0VBL0JBOztFQWlDRjtJQUNFLHdCQUFBO0VBOUJBOztFQWdDRjtJQUNFLHdCQUFBO0lBQ0EsbUJBQUE7RUE3QkE7QUFDRiIsImZpbGUiOiJ2aWV3LWludm9pY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXBwL2NvbXBvbmVudHMvbWl4aW5zLnNjc3MnO1xyXG5cclxuLmludm9pY2UtZGV0YWlsLWRpdiB7XHJcbiAgLmludm9pY2UtZGV0YWlsIHtcclxuICAgICYgaSB7XHJcbiAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgIH1cclxuXHJcbiAgICAmIHNwYW4ge1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmludm9pY2VSb3dUaXRsZSAudGl0bGVEYXRhLFxyXG4uaW52b2ljZVJvd0Rlc2NwIC5kZXNjcERhdGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTglO1xyXG59XHJcbi5yb3cyIC5pbnZvaWNlUm93VGl0bGUgLnRpdGxlRGF0YSxcclxuLnJvdzIgLmludm9pY2VSb3dEZXNjcCAuZGVzY3BEYXRhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEyLjglO1xyXG59XHJcbi5yb3cyIC5pbnZvaWNlUm93VGl0bGUgLnRpdGxlRGF0YTpsYXN0LWNoaWxkLFxyXG4ucm93MiAuaW52b2ljZVJvd0Rlc2NwIC5kZXNjcERhdGE6bGFzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IDklO1xyXG59XHJcbi5pbnZvaWNlUm93RGVzY3AgLmRlc2NwRGF0YSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmludm9pY2VSb3dEZXNjcCAuZGVzY3BEYXRhOmxhc3QtY2hpbGQsXHJcbi5pbnZvaWNlUm93VGl0bGUgLnRpdGxlRGF0YTpsYXN0LWNoaWxkIHtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcbjo6bmctZGVlcCAucGVyaW9kLWNvbnRyb2xfX2J1dHRvbjpub3QoLnBlcmlvZC1jb250cm9sX19idXR0b24tLWRpc2FibGVkKTpmb2N1czphZnRlcntcclxuICBib3R0b206LTUuNXB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OjIuNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFJlc3BvbnNpdmVuZXNzIFN0YXJ0cyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogXHJcbi8vIFJlc3BvbnNpdmUgdXRpbHNcclxuLy8gJHh4bC1taW4td2lkdGg6IDE2MDBweDtcclxuLy8gJHh4bC1tYXgtd2lkdGg6IDE1OTlweDtcclxuLy8gJHhsLW1pbi13aWR0aDogMTIwMHB4O1xyXG4vLyAkeGwtbWF4LXdpZHRoOiAxMTk5cHg7XHJcbi8vICRsZy1taW4td2lkdGg6IDk5MnB4O1xyXG4vLyAkbGctbWF4LXdpZHRoOiA5OTFweDtcclxuLy8gJG1kLW1pbi13aWR0aDogNzY4cHg7XHJcbi8vICRtZC1tYXgtd2lkdGg6IDc2N3B4O1xyXG4vLyAkc20tbWluLXdpZHRoOiA1NzZweDtcclxuLy8gJHNtLW1heC13aWR0aDogNTc1cHg7XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJHh4bC1tYXgtd2lkdGgpIHt9XHJcblxyXG4vLyAobWF4LXdpZHRoOiAxNTk5cHgpIGVuZHMgXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJHhsLW1heC13aWR0aCkge1xyXG4gOjpuZy1kZWVwIC5hbnQtbW9kYWx7XHJcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAkeGwtbWF4LXdpZHRoOiAxMTk5cHggZW5kcyBcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkbGctbWF4LXdpZHRoKSB7XHJcbi5tb2JpbGVQYWRkaW5ne1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxufVxyXG5cclxuLy8gJGxnLW1heC13aWR0aDogOTkxcHg7XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJG1kLW1heC13aWR0aCkge31cclxuXHJcbi8vICRsZy1tYXgtd2lkdGg6IDc2N3B4O1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICRzbS1tYXgtd2lkdGgpIHtcclxuLy8gIDo6bmctZGVlcCAuYW50LW1vZGFsLWJvZHkgLm1hdC1mb3JtLWZpZWxke1xyXG4vLyAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbjo6bmctZGVlcCAuYW50LW1vZGFsLWhlYWRlcntcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5kLWZsZXgubW9iaWxlUGFkZGluZyB7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG4udG90YWxOdW1iZXJ7XHJcbiAgcGFkZGluZzogMTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLnNhdmVQcmV2aWV3QnRue1xyXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbn1cclxuLmxvZ29cclxue1xyXG4gICAgXHJcbn1cclxuLy8gJHNtLW1heC13aWR0aDogNTc1cHg7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFJlc3BvbnNpdmVuZXNzIEVuZHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewInvoiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-invoice',
                templateUrl: './view-invoice.component.html',
                styleUrls: ['./view-invoice.component.scss']
            }]
    }], function () { return [{ type: src_app_services_Invoice_invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"] }, { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "ODCs":
/*!*********************************************************!*\
  !*** ./src/app/pages/invoice/invoice-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: InvoiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceRoutingModule", function() { return InvoiceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-invoice/view-invoice.component */ "E90t");





const routes = [
    {
        path: '',
        component: _view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_2__["ViewInvoiceComponent"]
    },
];
class InvoiceRoutingModule {
}
InvoiceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InvoiceRoutingModule });
InvoiceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InvoiceRoutingModule_Factory(t) { return new (t || InvoiceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvoiceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "PAu0":
/*!*****************************************************!*\
  !*** ./src/app/services/Invoice/invoice.service.ts ***!
  \*****************************************************/
/*! exports provided: InvoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceService", function() { return InvoiceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Model/Global */ "BQhZ");
/* harmony import */ var _base_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-api-handler.service */ "91If");







class InvoiceService extends _base_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["BaseApiHandlerService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.invoiceSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.invoiceObserver$ = this.invoiceSubject$.asObservable();
    }
    get invoices() { return this.invoiceSubject$.value; }
    SaveInvoice(data) {
        return this.Post(data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Invoice);
    }
    UpdateInvoioce(data) {
        return this.Update(data.id, data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Invoice);
    }
    GetInvoice() {
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Invoice).subscribe(res => {
            this.invoiceSubject$.next(res.dynamicResult);
        });
    }
    DeleteInvoice(id) {
        return this.Delete(id, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Invoice);
    }
}
InvoiceService.ɵfac = function InvoiceService_Factory(t) { return new (t || InvoiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
InvoiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InvoiceService, factory: InvoiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InvoiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "c/hZ":
/*!*************************************************!*\
  !*** ./src/app/pages/invoice/invoice.module.ts ***!
  \*************************************************/
/*! exports provided: InvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice-routing.module */ "ODCs");
/* harmony import */ var _view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-invoice/view-invoice.component */ "E90t");
/* harmony import */ var _detailview_invoice_detailview_invoice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detailview-invoice/detailview-invoice.component */ "d7v4");
/* harmony import */ var src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/antd/antd.module */ "PaOY");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");









class InvoiceModule {
}
InvoiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InvoiceModule });
InvoiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InvoiceModule_Factory(t) { return new (t || InvoiceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _invoice_routing_module__WEBPACK_IMPORTED_MODULE_2__["InvoiceRoutingModule"],
            src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_5__["AntdModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvoiceModule, { declarations: [_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_3__["ViewInvoiceComponent"], _detailview_invoice_detailview_invoice_component__WEBPACK_IMPORTED_MODULE_4__["DetailviewInvoiceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _invoice_routing_module__WEBPACK_IMPORTED_MODULE_2__["InvoiceRoutingModule"],
        src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_5__["AntdModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_3__["ViewInvoiceComponent"], _detailview_invoice_detailview_invoice_component__WEBPACK_IMPORTED_MODULE_4__["DetailviewInvoiceComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _invoice_routing_module__WEBPACK_IMPORTED_MODULE_2__["InvoiceRoutingModule"],
                    src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_5__["AntdModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "d7v4":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/invoice/detailview-invoice/detailview-invoice.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DetailviewInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailviewInvoiceComponent", function() { return DetailviewInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_Model_Invoice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Model/Invoice */ "p3wj");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_Invoice_invoice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/Invoice/invoice.service */ "PAu0");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "tYkK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/table */ "haRT");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "WJhm");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "66zS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "W4B1");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/divider */ "SBNi");

















function DetailviewInvoiceComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailviewInvoiceComponent_tr_24_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const data_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.showSingleInvoice(data_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailviewInvoiceComponent_tr_24_Template_i_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const data_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event.stopPropagation(ctx_r6.handleEdit(data_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-divider", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailviewInvoiceComponent_tr_24_Template_i_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const data_r2 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event.stopPropagation(ctx_r7.DeleteInvoice(data_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.invoiceTo);
} }
class DetailviewInvoiceComponent {
    constructor(fb, _notification, _invoiceService) {
        this.fb = fb;
        this._notification = _notification;
        this._invoiceService = _invoiceService;
        this.isEditMode = false;
        this.loading = false;
        this.invoice = new src_app_Model_Invoice__WEBPACK_IMPORTED_MODULE_3__["Invoice"]();
        this.listData = [];
        this.isvisible = false;
        this.form = fb.group({
            nameto: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    get f() { return this.form.controls; }
    ngOnInit() {
        this.invoiceDataSubject.subscribe(res => {
            if (res) {
                this.form.patchValue(res);
                this.invoiceId = res.id;
                this.isEditMode = true;
            }
            else {
                this.form.reset();
                this.invoiceId = null;
                this.isEditMode = false;
            }
        });
    }
    addInvoice() {
        this.isvisible = true;
        this.modalTitle = "Create New Invoice";
    }
    handleSubmit() {
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        let data = this.form.value;
        if (this.isEditMode) {
            data.id = this.invoiceId;
            this._invoiceService.UpdateInvoioce(data).subscribe(res => {
                this.loading = false;
                if (res.isSuccessfull) {
                    this.resetForm();
                    this._invoiceService.GetInvoice();
                    this._notification.success('Invoice Updated Successfully!');
                }
                else {
                    this._notification.error('Error while updating Invoice!');
                }
            });
        }
        else {
            this.loading = false;
            this._invoiceService.SaveInvoice(data).subscribe(res => {
                if (res.isSuccessfull) {
                    this.resetForm();
                    this._invoiceService.GetInvoice();
                    this._notification.success('Invoice Saved Successfully!');
                }
                else {
                    this._notification.error('Error while saving Invoice!');
                }
            });
        }
    }
    resetForm() {
        this.form.setValue({
            nameto: null
        });
    }
    showSingleInvoice(data) {
        this.invoice = data;
        this.showInvoice = true;
    }
    DeleteInvoice(data) {
        this._notification.delete().then(result => {
            if (result.isConfirmed) {
                this._invoiceService.DeleteInvoice(data.id).subscribe(res => {
                    if (res.isSuccessfull) {
                        this._invoiceService.GetInvoice();
                        this._notification.success('Invoice Deleted Successfully!');
                    }
                    else {
                        this._notification.error('Error while deleting Invoice!');
                    }
                });
            }
            else {
                return;
            }
        });
        this.showInvoice = false;
    }
}
DetailviewInvoiceComponent.ɵfac = function DetailviewInvoiceComponent_Factory(t) { return new (t || DetailviewInvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Invoice_invoice_service__WEBPACK_IMPORTED_MODULE_5__["InvoiceService"])); };
DetailviewInvoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailviewInvoiceComponent, selectors: [["app-detailview-invoice"]], inputs: { invoiceDataSubject: "invoiceDataSubject" }, decls: 25, vars: 2, consts: [["nz-col", "", 3, "nzSpan"], ["nzSize", "middle"], ["rowSelectionTable", ""], [1, "mt-3"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline", 3, "click"], ["nzTooltipTitle", "Click to View Invoice", "style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["nzTooltipTitle", "Click to View Invoice", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzType", "edit", "nz-tooltip", "", "nzTooltipTitle", "Edit Invoice", "nzTheme", "fill", 1, "text-success", 3, "click"], ["nzType", "vertical"], ["nz-icon", "", "nzType", "delete", "nz-tooltip", "", "nzTooltipTitle", "Delete Invoice", "nzTheme", "fill", 1, "text-success", 3, "click"]], template: function DetailviewInvoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-table", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailviewInvoiceComponent_Template_i_click_19_listener() { return ctx.addInvoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DetailviewInvoiceComponent_tr_24_Template, 8, 1, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listData);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTbodyComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__["NzTooltipDirective"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__["NzDividerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWx2aWV3LWludm9pY2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailviewInvoiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detailview-invoice',
                templateUrl: './detailview-invoice.component.html',
                styleUrls: ['./detailview-invoice.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: src_app_services_Invoice_invoice_service__WEBPACK_IMPORTED_MODULE_5__["InvoiceService"] }]; }, { invoiceDataSubject: [{
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

/***/ "p3wj":
/*!**********************************!*\
  !*** ./src/app/Model/Invoice.ts ***!
  \**********************************/
/*! exports provided: Invoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invoice", function() { return Invoice; });
/* harmony import */ var _BaseEntity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseEntity */ "fZ5M");

class Invoice extends _BaseEntity__WEBPACK_IMPORTED_MODULE_0__["BaseEntity"] {
}


/***/ })

}]);
//# sourceMappingURL=src-app-pages-invoice-invoice-module.js.map