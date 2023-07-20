(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-vehiclemodel-vehiclemodel-module"],{

/***/ "6QX0":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/vehiclemodel/detailview-vehiclemodel/detailview-vehiclemodel.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DetailviewVehiclemodelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailviewVehiclemodelComponent", function() { return DetailviewVehiclemodelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_vehiclemodel_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/vehiclemodel/vehicle.service */ "B7v2");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "tYkK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ "GaVp");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "Jp/u");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "WJhm");

















function DetailviewVehiclemodelComponent_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Vehicle Model Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DetailviewVehiclemodelComponent {
    constructor(fb, _notification, _vehicleService) {
        this.fb = fb;
        this._notification = _notification;
        this._vehicleService = _vehicleService;
        this.isEditMode = false;
        this.loading = false;
        this.form = fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    get f() { return this.form.controls; }
    ngOnInit() {
        this.vehicleModelSubject.subscribe(res => {
            if (res) {
                this.form.patchValue(res);
                this.MotorTypeId = res.id;
                this.isEditMode = false;
            }
            else {
                this.form.reset();
                this.MotorTypeId = null;
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
            data.id = this.MotorTypeId;
            this._vehicleService.UpdateVehicleModel(data).subscribe(res => {
                this.loading = false;
                if (res.isSuccessfull) {
                    this.resetForm();
                    this._vehicleService.GetVehicleModel();
                    this._notification.success('VehicleModel Update successfully!');
                }
                else {
                    this._notification.error(' Error While Updating VehicleModel!');
                }
            });
        }
        else {
            this.loading = false;
            this._vehicleService.SaveVehicleModel(data).subscribe(res => {
                if (res.isSuccessfull) {
                    this.resetForm();
                    this._vehicleService.GetVehicleModel();
                    this._notification.success('VehicleModel Save successfully!');
                }
                else {
                    this._notification.error(' Error While Saving VehicleModel!');
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
DetailviewVehiclemodelComponent.ɵfac = function DetailviewVehiclemodelComponent_Factory(t) { return new (t || DetailviewVehiclemodelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_vehiclemodel_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"])); };
DetailviewVehiclemodelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailviewVehiclemodelComponent, selectors: [["app-detailview-vehiclemodel"]], inputs: { vehicleModelSubject: "vehicleModelSubject" }, decls: 11, vars: 5, consts: [["nz-row", ""], ["nz-col", "", 3, "nzSpan"], [3, "formGroup"], [1, "col-xl-12", "mb-2"], ["matInput", "", "formControlName", "name"], [4, "ngIf"], [1, "form-group", "text-center", "mt-4"], ["type", "submit", "nz-button", "", "nzType", "primary", 3, "nzLoading", "click"]], template: function DetailviewVehiclemodelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Vehicle Model Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailviewVehiclemodelComponent_mat_error_7_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailviewVehiclemodelComponent_Template_button_click_9_listener() { return ctx.handleSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Update MotorType" : "Add Vehicle Model", "");
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzColDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWx2aWV3LXZlaGljbGVtb2RlbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailviewVehiclemodelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detailview-vehiclemodel',
                templateUrl: './detailview-vehiclemodel.component.html',
                styleUrls: ['./detailview-vehiclemodel.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: src_app_services_vehiclemodel_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"] }]; }, { vehicleModelSubject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "B7v2":
/*!**********************************************************!*\
  !*** ./src/app/services/vehiclemodel/vehicle.service.ts ***!
  \**********************************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Model/Global */ "BQhZ");
/* harmony import */ var _base_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-api-handler.service */ "91If");







class VehicleService extends _base_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["BaseApiHandlerService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.VehicleModelSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.vehiclemodalObserve$ = this.VehicleModelSubject$.asObservable();
    }
    DeleteMotortypes(id) {
        throw new Error('Method not implemented.');
    }
    get vehiclemodel() { return this.VehicleModelSubject$.value; }
    SaveVehicleModel(data) {
        return this.Post(data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].VehicleModel);
    }
    UpdateVehicleModel(data) {
        return this.Update(data.id, data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].VehicleModel);
    }
    GetVehicleModel() {
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].VehicleModel).subscribe(res => {
            this.VehicleModelSubject$.next(res.dynamicResult);
        });
    }
    DeleteVehiclemodel(id) {
        return this.Delete(id, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].VehicleModel);
    }
}
VehicleService.ɵfac = function VehicleService_Factory(t) { return new (t || VehicleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
VehicleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VehicleService, factory: VehicleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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

/***/ "iwYh":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/vehiclemodel/view-vehiclemodel/view-vehiclemodel.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ViewVehiclemodelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVehiclemodelComponent", function() { return ViewVehiclemodelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var src_app_Model_VehicleModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Model/VehicleModel */ "BBhy");
/* harmony import */ var src_app_services_vehiclemodel_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/vehiclemodel/vehicle.service */ "B7v2");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "WJhm");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/input */ "px0D");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "GaVp");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ "tYkK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/table */ "haRT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/modal */ "NFMk");
/* harmony import */ var _detailview_vehiclemodel_detailview_vehiclemodel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../detailview-vehiclemodel/detailview-vehiclemodel.component */ "6QX0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ "66zS");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/divider */ "SBNi");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/empty */ "mW00");




















function ViewVehiclemodelComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 28);
} }
function ViewVehiclemodelComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewVehiclemodelComponent_tr_31_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r8 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.showSingleVehiclemodel(data_r8); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewVehiclemodelComponent_tr_31_Template_i_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r8 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event.stopPropagation(ctx_r12.handleEdit(data_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nz-divider", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewVehiclemodelComponent_tr_31_Template_i_click_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r8 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event.stopPropagation(ctx_r13.DeleteVehiclemodel(data_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, data_r8.createTime), " ");
} }
function ViewVehiclemodelComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-empty", 32);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzNotFoundImage", "assets/images/no-data/no-transaction.svg")("nzNotFoundContent", _r6);
} }
function ViewVehiclemodelComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Data Available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create New Vehicle Modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { y: "500px" }; };
class ViewVehiclemodelComponent {
    constructor(_vehicleService, _notification) {
        this._vehicleService = _vehicleService;
        this._notification = _notification;
        this.listData = [];
        this.isvisible = false;
        this.modalTitle = "Create new Vehicle Model";
        this.VehicleModelObserverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.checked = false;
        this.showVehicleModel = false;
        this.vehiclemodel = new src_app_Model_VehicleModel__WEBPACK_IMPORTED_MODULE_3__["VehicleModel"]();
    }
    ngOnInit() {
        this._vehicleService.vehiclemodalObserve$.subscribe(res => {
            if (res) {
                this.listData = res;
            }
            this.isvisible = false;
        });
        this._vehicleService.GetVehicleModel();
    }
    // ngOnDestroy() {
    //   this.contactSubject.unsubscribe();
    // }
    handleCancel() {
        console.log("aaaa");
        this.isvisible = false;
        this.showVehicleModel = false;
    }
    handleOpen() {
        this.isvisible = true;
        this.modalTitle = "New VehicleModel";
        this.VehicleModelObserverSubject.next(null);
        this.showVehicleModel = false;
    }
    handleEdit(data) {
        this.modalTitle = "Edit VehicleModel";
        this.isvisible = true;
        this.showVehicleModel = false;
        this.VehicleModalObserSubject.next(data);
    }
    showSingleVehiclemodel(data) {
        this.vehiclemodel = data;
        this.showVehicleModel = true;
    }
    DeleteVehiclemodel(data) {
        this._notification.delete().then(result => {
            if (result.isConfirmed) {
                this._vehicleService.DeleteVehiclemodel(data.id).subscribe(res => {
                    if (res.isSuccessfull) {
                        this._vehicleService.GetVehicleModel();
                        this._notification.success('VehicleModel Deleted sucessfully!');
                    }
                    else {
                        this._notification.error('Error while Deleteing VehicleModel!');
                    }
                });
            }
            else {
                return;
            }
        });
        this.showVehicleModel = false;
    }
}
ViewVehiclemodelComponent.ɵfac = function ViewVehiclemodelComponent_Factory(t) { return new (t || ViewVehiclemodelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_vehiclemodel_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"])); };
ViewVehiclemodelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewVehiclemodelComponent, selectors: [["app-view-vehiclemodel"]], decls: 55, vars: 15, consts: [[1, "breadcrumbs", "mb-3"], [1, "row", "mb-4"], [1, "col-xl-10"], [1, "w-25"], ["nzSize", "large", 3, "nzPrefix"], ["type", "text", "nz-input", "", "placeholder", "Search for Vehicle Model", 3, "ngModel", "ngModelChange"], ["suffixIconSearch", ""], [1, "col-xl-2"], ["nz-button", "", "nzType", "primary", 1, "float-right", 3, "click"], ["nz-col", "", 3, "nzSpan"], ["nzSize", "middle", 3, "nzData", "nzShowPagination", "nzScroll", "nzPageSize"], ["rowSelectionTable", ""], ["nzTooltipTitle", "Click to view Vehicle Modal", "style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["noData", ""], ["noDescrip", ""], ["nz-Footer", "null", "nzWidth", "30%", "nzMaskcloseable", "false", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel"], [3, "vehicleModelSubject"], ["nzFooter", "null", "nzWidth", "700", "nzMaskClosable", "false", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel"], [1, "row"], [1, "popup-action-btns"], ["nz-icon", "", "nzType", "edit", "nz-tooltipnzTooltipTitle", "edit VehicleModel", "nzTheme", "fill", 1, "text-success", 3, "click"], ["nzType", "vertical"], ["nz-icon", "", "nzType", "delete", "nz-tooltipnzTooltipTitle", "delete VehicleModel", "nzTheme", "fill", 1, "text-success", 3, "click"], [1, "col-xl-12", "p-4"], [1, "card-body"], [1, "row", "mb-3"], [1, "col-xl-5", "mb-4", "offset-sm-1"], [1, "t-10", "text-gray-5"], ["nz-icon", "", "nzType", "search"], ["nzTooltipTitle", "Click to view Vehicle Modal", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzType", "edit", "nz-tooltipnzTooltipTitle", "edit Vehicle Modal", "nzTheme", "fill", 1, "text-success", 3, "click"], ["nz-icon", "", "nzType", "delete", "nz-tooltipnzTooltipTitle", "delete Vehicle Modal", "nzTheme", "fill", 1, "text-success", 3, "click"], [1, "m-5", 3, "nzNotFoundImage", "nzNotFoundContent"], [1, "m-4"], [1, "kit__utils__link"]], template: function ViewVehiclemodelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Vehicle Model");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-input-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewVehiclemodelComponent_Template_input_ngModelChange_8_listener($event) { return ctx.search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ViewVehiclemodelComponent_ng_template_9_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewVehiclemodelComponent_Template_a_click_12_listener() { return ctx.handleOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add Vehicle Modal");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Vehicle Modal Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Created Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ViewVehiclemodelComponent_tr_31_Template, 15, 6, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ViewVehiclemodelComponent_ng_template_32_Template, 1, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ViewVehiclemodelComponent_ng_template_34_Template, 4, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nz-modal", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function ViewVehiclemodelComponent_Template_nz_modal_nzVisibleChange_37_listener($event) { return ctx.isvisible = $event; })("nzOnCancel", function ViewVehiclemodelComponent_Template_nz_modal_nzOnCancel_37_listener() { return ctx.handleCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-detailview-vehiclemodel", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nz-modal", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function ViewVehiclemodelComponent_Template_nz_modal_nzVisibleChange_40_listener($event) { return ctx.showVehicleModel = $event; })("nzOnCancel", function ViewVehiclemodelComponent_Template_nz_modal_nzOnCancel_40_listener() { return ctx.showVehicleModel = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewVehiclemodelComponent_Template_i_click_44_listener($event) { return $event.stopPropagation(ctx.handleEdit(ctx.vehiclemodel)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "nz-divider", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewVehiclemodelComponent_Template_i_click_46_listener($event) { return $event.stopPropagation(ctx.DeleteVehiclemodel(ctx.vehiclemodel)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Vehicle Model Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPrefix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listData)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0))("nzPageSize", ctx.listData.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isvisible)("nzTitle", ctx.modalTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vehicleModelSubject", ctx.VehicleModelObserverSubject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.showVehicleModel)("nzTitle", "VehicleModelInfo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.vehiclemodel.name);
    } }, directives: [ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputGroupWhitSuffixOrPrefixDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzColDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__["NzModalComponent"], _detailview_vehiclemodel_detailview_vehiclemodel_component__WEBPACK_IMPORTED_MODULE_13__["DetailviewVehiclemodelComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconDirective"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_15__["NzDividerComponent"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__["NzEmptyComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXZlaGljbGVtb2RlbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewVehiclemodelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-vehiclemodel',
                templateUrl: './view-vehiclemodel.component.html',
                styleUrls: ['./view-vehiclemodel.component.css']
            }]
    }], function () { return [{ type: src_app_services_vehiclemodel_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"] }, { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "pCAL":
/*!*******************************************************************!*\
  !*** ./src/app/pages/vehiclemodel/vehiclemodel-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: VehiclemodelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclemodelRoutingModule", function() { return VehiclemodelRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _view_vehiclemodel_view_vehiclemodel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-vehiclemodel/view-vehiclemodel.component */ "iwYh");





const routes = [{
        path: '',
        component: _view_vehiclemodel_view_vehiclemodel_component__WEBPACK_IMPORTED_MODULE_2__["ViewVehiclemodelComponent"]
    }];
class VehiclemodelRoutingModule {
}
VehiclemodelRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VehiclemodelRoutingModule });
VehiclemodelRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VehiclemodelRoutingModule_Factory(t) { return new (t || VehiclemodelRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VehiclemodelRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehiclemodelRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "sI0O":
/*!***********************************************************!*\
  !*** ./src/app/pages/vehiclemodel/vehiclemodel.module.ts ***!
  \***********************************************************/
/*! exports provided: VehiclemodelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclemodelModule", function() { return VehiclemodelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _vehiclemodel_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vehiclemodel-routing.module */ "pCAL");
/* harmony import */ var _view_vehiclemodel_view_vehiclemodel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-vehiclemodel/view-vehiclemodel.component */ "iwYh");
/* harmony import */ var _detailview_vehiclemodel_detailview_vehiclemodel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detailview-vehiclemodel/detailview-vehiclemodel.component */ "6QX0");
/* harmony import */ var src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/antd/antd.module */ "PaOY");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");









class VehiclemodelModule {
}
VehiclemodelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VehiclemodelModule });
VehiclemodelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VehiclemodelModule_Factory(t) { return new (t || VehiclemodelModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _vehiclemodel_routing_module__WEBPACK_IMPORTED_MODULE_2__["VehiclemodelRoutingModule"],
            src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_5__["AntdModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VehiclemodelModule, { declarations: [_view_vehiclemodel_view_vehiclemodel_component__WEBPACK_IMPORTED_MODULE_3__["ViewVehiclemodelComponent"], _detailview_vehiclemodel_detailview_vehiclemodel_component__WEBPACK_IMPORTED_MODULE_4__["DetailviewVehiclemodelComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _vehiclemodel_routing_module__WEBPACK_IMPORTED_MODULE_2__["VehiclemodelRoutingModule"],
        src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_5__["AntdModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehiclemodelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_view_vehiclemodel_view_vehiclemodel_component__WEBPACK_IMPORTED_MODULE_3__["ViewVehiclemodelComponent"], _detailview_vehiclemodel_detailview_vehiclemodel_component__WEBPACK_IMPORTED_MODULE_4__["DetailviewVehiclemodelComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _vehiclemodel_routing_module__WEBPACK_IMPORTED_MODULE_2__["VehiclemodelRoutingModule"],
                    src_app_antd_antd_module__WEBPACK_IMPORTED_MODULE_5__["AntdModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-pages-vehiclemodel-vehiclemodel-module.js.map