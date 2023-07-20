(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-pages-outstanding-outstanding-module~src-app-pages-sales-sales-module~src-app-pages-~790ca9bd"],{

/***/ "6grI":
/*!**********************************************************!*\
  !*** ./src/app/services/motortype/motor-type.service.ts ***!
  \**********************************************************/
/*! exports provided: MotorTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotorTypeService", function() { return MotorTypeService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Model/Global */ "BQhZ");
/* harmony import */ var _base_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-api-handler.service */ "91If");







class MotorTypeService extends _base_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["BaseApiHandlerService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.motortypeSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.motortypeObserve$ = this.motortypeSubject$.asObservable();
    }
    get motortypes() { return this.motortypeSubject$.value; }
    SaveMotortypes(data) {
        return this.Post(data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].MotorType);
    }
    UpdateMotortypes(data) {
        return this.Update(data.id, data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].MotorType);
    }
    GetMotortypes() {
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].MotorType).subscribe(res => {
            this.motortypeSubject$.next(res.dynamicResult);
        });
    }
    DeleteMotortypes(id) {
        return this.Delete(id, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].MotorType);
    }
}
MotorTypeService.ɵfac = function MotorTypeService_Factory(t) { return new (t || MotorTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
MotorTypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MotorTypeService, factory: MotorTypeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MotorTypeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "77T7":
/*!***************************************************!*\
  !*** ./src/app/services/branch/branch.service.ts ***!
  \***************************************************/
/*! exports provided: BranchDetails, SalesAgentReport, SalesReport, BranchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchDetails", function() { return BranchDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesAgentReport", function() { return SalesAgentReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesReport", function() { return SalesReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchService", function() { return BranchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Model/Global */ "BQhZ");
/* harmony import */ var _base_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-api-handler.service */ "91If");







class BranchDetails {
}
class SalesAgentReport {
}
class SalesReport {
}
class BranchService extends _base_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["BaseApiHandlerService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.branchSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.branchDetailSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.branchObserver$ = this.branchSubject$.asObservable();
        this.branchDetailsObserver$ = this.branchDetailSubject$.asObservable();
    }
    get branchesWithDetail() { return this.branchSubject$.value; }
    SaveBranch(data) {
        return this.Post(data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Branch);
    }
    UpdateBranch(data) {
        return this.Update(data.id, data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Branch);
    }
    GetBranches() {
        this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Branch).subscribe(res => {
            this.branchSubject$.next(res.dynamicResult);
        });
    }
    GetBranchAsync() {
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Branch + "/GetBranchAsync");
    }
    GetBranchDetailsAsync(month, branchId) {
        this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Branch + "/GetBranchDetailsAsync?month=" + month + "&branchId=" + branchId).subscribe(res => {
            this.branchDetailSubject$.next(res.dynamicResult);
        });
    }
    GetAgentBranchSales(month, branchId) {
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Branch + `/GetAgentsSalesForBranchPerMonth?month=${month}&branchId=${branchId}`);
    }
    GetAgentARForBranchPerMonth(month, branchId) {
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Branch + `/GetAgentARForBranchPerMonth?month=${month}&branchId=${branchId}`);
    }
    GetBrokersAPForBranchPerMonth(month, branchId) {
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Branch + `/GetBrokersAPForBranchPerMonth?month=${month}&branchId=${branchId}`);
    }
    GetAgentRelatedBranchWithOpenBalanceByMonthOrDate(branchId, pageRowCount, page, month, from, to, nameQuery, isExcel, isPdf, variable) {
        let queryParams = [];
        if (month) {
            queryParams.push(`month=${encodeURIComponent(month)}`);
        }
        if (from) {
            queryParams.push(`from=${encodeURIComponent(from.toISOString())}`);
        }
        if (to) {
            queryParams.push(`to=${encodeURIComponent(to.toISOString())}`);
        }
        if (nameQuery) {
            queryParams.push(`nameQuery=${encodeURIComponent(nameQuery)}`);
        }
        if (isExcel) {
            queryParams.push(`isExcel=${encodeURIComponent(isExcel)}`);
        }
        if (isPdf) {
            queryParams.push(`isPDF=${encodeURIComponent(isPdf)}`);
        }
        if (pageRowCount) {
            queryParams.push(`pageRowCount=${encodeURIComponent(pageRowCount)}`);
        }
        if (page) {
            queryParams.push(`page=${encodeURIComponent(page)}`);
        }
        if (variable) {
            queryParams.push(`variable=${encodeURIComponent(variable)}`);
        }
        const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Branch + `/GetAgentRelatedBranchWithOpenBalanceByMonthOrDate?branchId=${encodeURIComponent(branchId)}&${queryString}`);
    }
    GetAgentTransactionalHistoryByBranches(agentId, from, to, branches) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('from', from)
            .set('to', to)
            .set('branches', branches.join(','))
            .set('agentId', agentId);
        return this.http.get(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Branch + "/GetAgentTransactionalHistoryByBranches", { params });
    }
}
BranchService.ɵfac = function BranchService_Factory(t) { return new (t || BranchService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
BranchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BranchService, factory: BranchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BranchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


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

/***/ "PHgr":
/*!************************************************!*\
  !*** ./src/app/services/sales/sale.service.ts ***!
  \************************************************/
/*! exports provided: SaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleService", function() { return SaleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Model/Global */ "BQhZ");
/* harmony import */ var _base_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-api-handler.service */ "91If");







class SaleService extends _base_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["BaseApiHandlerService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.saleSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.motortypeSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.vehicleModelSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.salesObserver$ = this.saleSubject$.asObservable();
        this.motortypeObserver$ = this.motortypeSubject$.asObservable();
        this.vehicleModelObserver$ = this.vehicleModelSubject$.asObservable();
    }
    get Sales() { return this.saleSubject$.value; }
    SaveSale(data) {
        return this.Post(data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Sales);
    }
    UpdateSale(data) {
        return this.Update(data.id, data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Sales);
    }
    GetSale(page = 1, pageSize = 10) {
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Sales + `/GetPaginated?page=${page}&pageSize=${pageSize}`).subscribe(res => {
            this.saleSubject$.next(res.dynamicResult);
        });
    }
    GetTotalSales() {
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Sales + `/GetTotalSales`);
    }
    SearchSales(search) {
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Sales + `/Search?search=${search}`).subscribe(res => {
            this.saleSubject$.next(res.dynamicResult);
        });
    }
    GetMotorType() {
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].MotorType).subscribe(res => {
            this.motortypeSubject$.next(res.dynamicResult);
        });
    }
    GetVehicleModel() {
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].VehicleModel).subscribe(res => {
            this.vehicleModelSubject$.next(res.dynamicResult);
        });
    }
    DeleteSale(id) {
        return this.Delete(id, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Sales);
    }
    filterByDateRangeAndSearchTerm(fromDate, toDate, searchTerm, requestExcel) {
        if (searchTerm) {
            return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].SalesFilter + `?fromDate=${fromDate}&toDate=${toDate}&requestExcel=${requestExcel}`);
        }
        else {
            return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].SalesFilter + `?fromDate=${fromDate}&toDate=${toDate}&searchTerm=${searchTerm == null ? "" : searchTerm}&requestExcel=${requestExcel}`);
        }
    }
    Filter(from, to) {
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].SalesFilter + `?from=${from}&to=${to}`);
    }
}
SaleService.ɵfac = function SaleService_Factory(t) { return new (t || SaleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SaleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SaleService, factory: SaleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Y8+K":
/*!*************************************************!*\
  !*** ./src/app/services/agent/agent.service.ts ***!
  \*************************************************/
/*! exports provided: AgentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentService", function() { return AgentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Model/Global */ "BQhZ");
/* harmony import */ var _base_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-api-handler.service */ "91If");







class AgentService extends _base_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["BaseApiHandlerService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.agentSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.agentObserve$ = this.agentSubject$.asObservable();
    }
    get Agent() { return this.agentSubject$.value; }
    SaveAgent(data) {
        return this.Post(data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Agent);
    }
    UpdateAgent(data) {
        return this.Update(data.id, data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Agent);
    }
    GetAgent() {
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Agent).subscribe(res => {
            this.agentSubject$.next(res.dynamicResult);
        });
    }
    DeleteAgent(id) {
        return this.Delete(id, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Agent);
    }
}
AgentService.ɵfac = function AgentService_Factory(t) { return new (t || AgentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AgentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AgentService, factory: AgentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Zg9g":
/*!***************************************************!*\
  !*** ./src/app/services/broker/broker.service.ts ***!
  \***************************************************/
/*! exports provided: BrokerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerService", function() { return BrokerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Model/Global */ "BQhZ");
/* harmony import */ var _base_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-api-handler.service */ "91If");







class BrokerService extends _base_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["BaseApiHandlerService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.brokerSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.brokerObserver$ = this.brokerSubject$.asObservable();
    }
    get brokers() { return this.brokerSubject$.value; }
    Savebrokers(data) {
        return this.Post(data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Broker);
    }
    Updatebroker(data) {
        return this.Update(data.id, data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Broker);
    }
    Getbrokers() {
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Broker).subscribe(res => {
            this.brokerSubject$.next(res.dynamicResult);
        });
    }
    Deletebroker(id) {
        return this.Delete(id, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Broker);
    }
}
BrokerService.ɵfac = function BrokerService_Factory(t) { return new (t || BrokerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
BrokerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrokerService, factory: BrokerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrokerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


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


/***/ })

}]);
//# sourceMappingURL=default~src-app-pages-outstanding-outstanding-module~src-app-pages-sales-sales-module~src-app-pages-~790ca9bd.js.map