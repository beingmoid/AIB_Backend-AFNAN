(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\InsuranceBroker\src\main.ts */"zUnb");


/***/ }),

/***/ "3LUQ":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);



class AlertService {
    constructor() { }
    success(msg) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Success!',
            text: msg,
            icon: 'success',
            timer: 3000,
            confirmButtonText: '  Ok  ',
            confirmButtonColor: '#5BAB54',
        });
    }
    error(msg) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Error!',
            text: msg,
            icon: 'error',
            timer: 3000,
            confirmButtonText: '  Ok  ',
            confirmButtonColor: '#F15E5E',
        });
    }
    delete(msg) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Are you sure?',
            text: `Do you really want to delete this records? \n This process cannot be undone.`,
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#F15E5E',
        });
    }
    confirm(title, msg) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: title,
            text: msg,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            confirmButtonColor: '#109CF1',
        });
    }
    warn(msg) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Cannot Perform!',
            text: msg,
            icon: 'warning',
            timer: 3000,
            confirmButtonText: '  Ok  ',
            confirmButtonColor: '#FFB946',
        });
    }
    info(msg) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Information',
            text: msg,
            icon: 'info',
            timer: 3000,
            confirmButtonText: '  Ok  ',
            confirmButtonColor: '#1292d5',
        });
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "91If":
/*!******************************************************!*\
  !*** ./src/app/services/base-api-handler.service.ts ***!
  \******************************************************/
/*! exports provided: BaseApiHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseApiHandlerService", function() { return BaseApiHandlerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class BaseApiHandlerService {
    constructor(myHttpClient) {
        this.myHttpClient = myHttpClient;
    }
    Get(id, url = "") {
        let apiURL = url == "" ? this.url : url;
        apiURL += `/${id}`;
        return this.myHttpClient.get(`${apiURL}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(x => this.HandleResponse(x)));
    }
    GetAll(url = "") {
        let apiURL = url == "" ? this.url : url;
        return this.myHttpClient
            .get(`${apiURL}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(x => this.HandleResponse(x)));
    }
    Post(data, url = "") {
        let apiURL = url == "" ? this.url : url;
        return this.myHttpClient
            .post(`${apiURL}`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(x => this.HandleResponse(x)));
    }
    Delete(id, url = "") {
        let apiURL = url == "" ? this.url : url;
        apiURL += `/${id}`;
        return this.myHttpClient.delete(`${apiURL}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(x => this.HandleResponse(x)));
    }
    Update(id, data, url = "") {
        let apiURL = url == "" ? this.url : url;
        apiURL += `/${id}`;
        return this.myHttpClient.put(`${apiURL}`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(x => this.HandleResponse(x)));
    }
    HandleResponse(response) {
        if (response.statusCode === 500) {
            alert('There is an error while getting the data. please try again later');
            console.log(response);
        }
    }
}
BaseApiHandlerService.ɵfac = function BaseApiHandlerService_Factory(t) { return new (t || BaseApiHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
BaseApiHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BaseApiHandlerService, factory: BaseApiHandlerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BaseApiHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "9ans":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "7RJT");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/map */ "q3Kh");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_Model_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Model/Global */ "BQhZ");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert.service */ "3LUQ");
/* harmony import */ var _base_api_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base-api-handler.service */ "91If");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/message */ "JXeA");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _permission_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../permission.service */ "Coov");

















class AuthService extends _base_api_handler_service__WEBPACK_IMPORTED_MODULE_7__["BaseApiHandlerService"] {
    constructor(http, alert, _permission, message, router) {
        super(http);
        this.http = http;
        this.alert = alert;
        this._permission = _permission;
        this.message = message;
        this.router = router;
        this.roleListSubject$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
        this.roleListObserver$ = this.roleListSubject$.asObservable();
        this.userSubject = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
        this.user = this.userSubject.asObservable();
    }
    CreateRoleWithClaims(data) {
        return this.Post(data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINTS"].Auth + "/CreateRoleWithClaims");
    }
    UpdateRoleWithClaims(roleId, data) {
        return this.Update(roleId, data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINTS"].Auth + "/UpdateRoleWithClaims");
    }
    GetAllRoles() {
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINTS"].Auth + "/GetAllRoles").subscribe(res => {
            this.roleListSubject$.next(res.dynamicResult);
        });
    }
    OnBoardingProcess(data) {
        return this.Post(data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINTS"].Auth + "/OnBoardingProcess");
    }
    login(data) {
        return this.Post(data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_5__["API_ENDPOINTS"].Auth)
            .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            if (response && response.isSuccessfull) {
                localStorage.setItem('accessToken', response.dynamicResult.token);
                this.message.success("You're Authenticated, Redirecting you to portal");
                this.tokenPayload = this.decodeToken(response.dynamicResult.token);
                this.userClaims = Object.keys(this.tokenPayload);
                this.userClaims = this.userClaims.map(x => x.toLowerCase());
                var roles = this.userClaims.slice(3, 16);
                roles.forEach(role => {
                    this._permission.setPermissions(role, this.tokenPayload);
                });
                //  this.message.clear();
                this.alert.success('You have successfully logged in.');
                this.router.navigate(['/welcome']);
                return response;
            }
            else {
                this.alert.success('Incorrect Password');
            }
        }));
    }
    generatePasswordResetToken(email) {
        return this.http.get(`${src_app_Model_Global__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}api/auth/GenerateForgotPasswordToken?email=${email}`);
    }
    resetPasswordResetWithToken(data) {
        return this.http.post(`${src_app_Model_Global__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}api/auth/ResetPasswordWithToken`, data);
    }
    createNewPassword(data) {
        return this.http.post(`${src_app_Model_Global__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}api/auth/CreateNewPassword`, data);
    }
    decodeToken(token) {
        try {
            return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_9__["default"])(token);
        }
        catch (_a) {
            return null;
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_permission_service__WEBPACK_IMPORTED_MODULE_10__["PermissionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }, { type: _permission_service__WEBPACK_IMPORTED_MODULE_10__["PermissionService"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__["NzMessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    url: "https://aibapi20230717171938.azurewebsites.net/",
    // url:"https://scbapiv4.azurewebsites.net/",
    // url:"https://scb-backend-22.azurewebsites.net/",
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.ng
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BQhZ":
/*!*********************************!*\
  !*** ./src/app/Model/Global.ts ***!
  \*********************************/
/*! exports provided: API_URL, API_ENDPOINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ENDPOINTS", function() { return API_ENDPOINTS; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");

//export const API_URL: string = "https://aicbbackend.azurewebsites.net/";
const API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].url;
//export const API_URL: string = "https://192.168.0.110:5000/"
//export const API_URL: string = environment.api_url;
const API_ENDPOINTS = {
    // dummy endpoints for reusability
    DummyList: 'api/dummy/list',
    DummyAdd: 'api/dummy/add',
    DummyDelete: 'api/dummy/delete',
    DummyUpdate: 'api/dummy/update',
    DummyGet: 'api/dummy/get',
    BankAccount: 'api/BankAccount',
    Company: 'api/Company',
    Invoice: 'api/Invoice',
    MotorType: 'api/MotorType',
    Outstandings: 'api/Outstandings',
    Sales: 'api/Sales',
    Transaction: 'api/Transaction',
    VehicleModel: 'api/VehicleModel',
    CheckEmail: 'api/auth/CheckEmail',
    ImmigrationDepartmentStatus: 'api/ImmigrationDepartmentStatus',
    Form: 'api/Form',
    Subscription: 'api/SubscriptionPlans',
    Auth: 'api/Auth',
    PaymentHistory: 'api/PaymentHistory',
    Roles: 'api/Roles',
    Team: 'api/TeamMembers',
    Users: 'api/Users',
    TransactionForCompany: 'api/transaction/OutstandingsForCompany',
    TransactionForAgent: 'api/transaction/OutstandingsForAgent',
    CreateTeamMember: 'api/User/CreateTeamMember',
    UpdateTeamMember: 'api/User/UpdateTeamMember',
    TeamMember: 'api/user/GetTeamMembers',
    DeleteTeamMember: 'api/user',
    Agent: 'api/agent',
    Broker: 'api/broker',
    Expense: 'api/expense',
    SalesFilter: 'api/Sales/Filter',
    Branch: 'api/Branch'
};


/***/ }),

/***/ "Coov":
/*!************************************************!*\
  !*** ./src/app/services/permission.service.ts ***!
  \************************************************/
/*! exports provided: PermissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionService", function() { return PermissionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_Model_claimsConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Model/claimsConstant */ "G++v");



class HomePermissionsObject {
}
class PermissionService {
    constructor() {
        this.historyPermissions = [];
        this.homePermissionsObject = {
            team: { canView: false, canCreate: false },
            contact: { canView: false, canCreate: false },
            task: { canView: false, canCreate: false },
            case: { canView: false, canCreate: false },
            event: { canView: false, canCreate: false },
        };
    }
    setPermissions(name, tokenPayload) {
        this.historyPermissions = [];
        this.role = tokenPayload.Role;
        if (tokenPayload.Role === "Admin") {
            this.permission = ["Create", "View", "Edit", "Delete"];
            Object.keys(src_app_Model_claimsConstant__WEBPACK_IMPORTED_MODULE_1__["ClaimType"]).forEach(element => {
                if (element.includes("History")) {
                    this.historyPermissions.push(element);
                }
            });
        }
        else {
            if (tokenPayload[name]) {
                if (typeof tokenPayload[name] === "string") {
                    this.permission = [`${tokenPayload[name]}`];
                }
                else {
                    this.permission = tokenPayload[name];
                }
            }
        }
    }
    getRole() {
        return this.role;
    }
    getPermissions() {
        return this.permission;
    }
    // getHomePermissions() {
    //   return this.homePermissionsObject;
    // }
    // public get getHistoryPermissions() {
    //   return this.historyPermissions;
    // }
    get canView() {
        return this.permission && this.permission.indexOf('View') > -1;
    }
    get canCreate() {
        return this.permission && this.permission.indexOf('Create') > -1;
    }
    get canEdit() {
        return this.permission && this.permission.indexOf('Edit') > -1;
    }
    get canDelete() {
        return this.permission && this.permission.indexOf('Delete') > -1;
    }
}
PermissionService.ɵfac = function PermissionService_Factory(t) { return new (t || PermissionService)(); };
PermissionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PermissionService, factory: PermissionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FBHr":
/*!***********************************************************!*\
  !*** ./src/app/auth/auth-layout/auth-layout.component.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ "tYkK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




class AuthLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 10, vars: 0, consts: [["nz-row", ""], ["nz-col", "", "nzSpan", "12", 1, "left-section"], [1, "main"], ["src", "/assets/images/logo.png", "alt", "logo", "height", "300", "width", "400", 2, "margin-left", "20%", "margin-top", "30%"], ["nz-col", "", "nzSpan", "12", 1, "right-section"], ["outlet", "outlet"]], template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Panorama - Portal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Afnan Insurance Brokers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzColDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".left-section[_ngcontent-%COMP%]{\r\n    background:#001529;\r\n    height: 100vh;\r\n    \r\n    }\r\n\r\n\r\n\r\n.main[_ngcontent-%COMP%]{\r\n    color: aliceblue;\r\n    font-size: 30px;\r\n    font-weight: 600;\r\n    font-family:sans-serif;\r\n    font-style:normal;\r\n    justify-content: center;\r\n    text-align: center;\r\n    margin-top: 10%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtEQUFrRDtJQUNsRCw0Q0FBNEMsQ0FBQzs7QUFFakQ7O0dBRUc7O0FBQ0g7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTs7QUFFbkIiLCJmaWxlIjoiYXV0aC1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWZ0LXNlY3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kOiMwMDE1Mjk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgLyogY2xpcC1wYXRoOiBlbGxpcHNlKCAzMjNweCA2ODRweCBhdCAxMDUlIDEwMCUpICovXHJcbiAgICAvKiBjbGlwLXBhdGg6IGVsbGlwc2UoNzAlIDEwMCUgYXQgMzAlIDEwJSkgKi99XHJcblxyXG4vKiAucmlnaHQtc2VjdGlvbntcclxuIFxyXG59ICovXHJcbi5tYWlue1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTpub3JtYWw7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-layout',
                templateUrl: './auth-layout.component.html',
                styleUrls: ['./auth-layout.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FxgB":
/*!***************************************!*\
  !*** ./src/app/app-routing-loader.ts ***!
  \***************************************/
/*! exports provided: AppPreloader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPreloader", function() { return AppPreloader; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");



class AppPreloader {
    preload(route, load) {
        return route.data && route.data.preload ? load() : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
}
AppPreloader.ɵfac = function AppPreloader_Factory(t) { return new (t || AppPreloader)(); };
AppPreloader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppPreloader, factory: AppPreloader.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppPreloader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "G++v":
/*!*****************************************!*\
  !*** ./src/app/Model/claimsConstant.ts ***!
  \*****************************************/
/*! exports provided: ClaimValue, ClaimType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimValue", function() { return ClaimValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimType", function() { return ClaimType; });
const ClaimValue = {
    View: 'View',
    Create: 'Create',
    Edit: 'Edit',
    Delete: 'Delete',
};
const ClaimType = {
    SalesManagement: 'SalesManagement',
    BankAccount: 'BankAccount',
    Broker: 'Broker',
    Outstandings: 'Outstandings',
    Transactions: 'Transactions',
    ManageSetups: 'ManageSetups',
    Settings: 'Settings',
    TeamMember: 'TeamMember',
    Statements: 'Statements',
    Dashboard: 'Dashboard',
    Expenses: 'Expenses'
    // Analytics: 'Analytics',
    // History_Case: 'History_Case',
    // History_Event: 'History_Event',
    // History_Task: 'History_Task',
    // History_Contact: 'History_Contact',
    // History_Commission: 'History_Commission',
    // History_Accounting: 'History_Accounting',
    // History_Documents: 'History_Documents',
};


/***/ }),

/***/ "Hhmg":
/*!******************************************!*\
  !*** ./src/app/icons-provider.module.ts ***!
  \******************************************/
/*! exports provided: IconsProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsProviderModule", function() { return IconsProviderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ "66zS");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "D4Yc");




const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuFoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuUnfoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["DashboardOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["FormOutline"]];
class IconsProviderModule {
}
IconsProviderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IconsProviderModule });
IconsProviderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IconsProviderModule_Factory(t) { return new (t || IconsProviderModule)(); }, providers: [
        { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NZ_ICONS"], useValue: icons }
    ], imports: [[ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsProviderModule, { imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]], exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsProviderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
                exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
                providers: [
                    { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NZ_ICONS"], useValue: icons }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _antd_antd_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../antd/antd.module */ "PaOY");






















var MODULES = [_antd_antd_module__WEBPACK_IMPORTED_MODULE_20__["AntdModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"]];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ...MODULES,
        ], _antd_antd_module__WEBPACK_IMPORTED_MODULE_20__["AntdModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _antd_antd_module__WEBPACK_IMPORTED_MODULE_20__["AntdModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"]], exports: [_antd_antd_module__WEBPACK_IMPORTED_MODULE_20__["AntdModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ...MODULES,
                ],
                exports: [...MODULES,],
                providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "PaOY":
/*!*************************************!*\
  !*** ./src/app/antd/antd.module.ts ***!
  \*************************************/
/*! exports provided: AntdModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntdModule", function() { return AntdModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ "v1Dh");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/alert */ "5Izy");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "yTpB");
/* harmony import */ var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/auto-complete */ "r19J");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "anqq");
/* harmony import */ var ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/back-top */ "IYs4");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/badge */ "EcpC");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "rJp6");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "GaVp");
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/calendar */ "WPSl");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/card */ "YdS3");
/* harmony import */ var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/carousel */ "wQFA");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "3ZFI");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "CYS+");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "oBm0");
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/comment */ "A7zk");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "W0Pu");
/* harmony import */ var ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/trans-button */ "9Cd2");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "Jp/u");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "lAiz");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "ce6n");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/divider */ "SBNi");
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/drawer */ "iC8E");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "phDe");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/empty */ "mW00");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/form */ "wf2+");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/grid */ "tYkK");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rgb0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/icon */ "66zS");
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/image */ "C/7j");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/input */ "px0D");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "eCGT");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/layout */ "nHXS");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/list */ "zTFG");
/* harmony import */ var ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/mention */ "JK0T");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/menu */ "/L1H");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/message */ "JXeA");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng-zorro-antd/modal */ "NFMk");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-zorro-antd/notification */ "0CZq");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "qU0y");
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ng-zorro-antd/pagination */ "vZsH");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "SHEi");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ng-zorro-antd/popover */ "FPpa");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ng-zorro-antd/progress */ "RVNi");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ng-zorro-antd/radio */ "kS4m");
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ng-zorro-antd/rate */ "NDed");
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ng-zorro-antd/result */ "5A4h");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ng-zorro-antd/select */ "jTf7");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "N2O2");
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ng-zorro-antd/slider */ "ozKM");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ng-zorro-antd/spin */ "fb/r");
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ng-zorro-antd/statistic */ "OvZZ");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ng-zorro-antd/steps */ "z+yo");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ng-zorro-antd/switch */ "DQmg");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ng-zorro-antd/table */ "haRT");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "1+nf");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ng-zorro-antd/tag */ "XFzh");
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ "YRt3");
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ng-zorro-antd/timeline */ "p+Sl");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "W4B1");
/* harmony import */ var ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ng-zorro-antd/transfer */ "HhpN");
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ng-zorro-antd/tree */ "SN7N");
/* harmony import */ var ng_zorro_antd_tree_view__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ng-zorro-antd/tree-view */ "3zcM");
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ "fwnu");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ng-zorro-antd/typography */ "VbP7");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ng-zorro-antd/upload */ "gaRz");
/* harmony import */ var ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ng-zorro-antd/resizable */ "s2Rw");
/* harmony import */ var ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ng-zorro-antd/pipes */ "S/WK");







































































var exports = [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixModule"],
    ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_3__["NzAlertModule"],
    ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_4__["NzAnchorModule"],
    ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_5__["NzAutocompleteModule"],
    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__["NzAvatarModule"],
    ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_7__["NzBackTopModule"],
    ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__["NzBadgeModule"],
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"],
    ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__["NzBreadCrumbModule"],
    ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_11__["NzCalendarModule"],
    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__["NzCardModule"],
    ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_13__["NzCarouselModule"],
    ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_14__["NzCascaderModule"],
    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__["NzCheckboxModule"],
    ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_16__["NzCollapseModule"],
    ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_17__["NzCommentModule"],
    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_21__["NzDatePickerModule"],
    ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_22__["NzDescriptionsModule"],
    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_23__["NzDividerModule"],
    ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_24__["NzDrawerModule"],
    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_25__["NzDropDownModule"],
    ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_26__["NzEmptyModule"],
    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_27__["NzFormModule"],
    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_28__["NzGridModule"],
    ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_29__["NzI18nModule"],
    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_30__["NzIconModule"],
    ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_31__["NzImageModule"],
    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__["NzInputModule"],
    ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_33__["NzInputNumberModule"],
    ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_34__["NzLayoutModule"],
    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_35__["NzListModule"],
    ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_36__["NzMentionModule"],
    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_37__["NzMenuModule"],
    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_38__["NzMessageModule"],
    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_39__["NzModalModule"],
    ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_18__["NzNoAnimationModule"],
    ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_40__["NzNotificationModule"],
    ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_41__["NzPageHeaderModule"],
    ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_42__["NzPaginationModule"],
    ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_43__["NzPopconfirmModule"],
    ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_44__["NzPopoverModule"],
    ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_45__["NzProgressModule"],
    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_46__["NzRadioModule"],
    ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_47__["NzRateModule"],
    ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_48__["NzResultModule"],
    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_49__["NzSelectModule"],
    ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_50__["NzSkeletonModule"],
    ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_51__["NzSliderModule"],
    ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_52__["NzSpinModule"],
    ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_53__["NzStatisticModule"],
    ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_54__["NzStepsModule"],
    ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_55__["NzSwitchModule"],
    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_56__["NzTableModule"],
    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_57__["NzTabsModule"],
    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_58__["NzTagModule"],
    ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_59__["NzTimePickerModule"],
    ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_60__["NzTimelineModule"],
    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_61__["NzToolTipModule"],
    ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_19__["NzTransButtonModule"],
    ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_62__["NzTransferModule"],
    ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_63__["NzTreeModule"],
    ng_zorro_antd_tree_view__WEBPACK_IMPORTED_MODULE_64__["NzTreeViewModule"],
    ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_65__["NzTreeSelectModule"],
    ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_66__["NzTypographyModule"],
    ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_67__["NzUploadModule"],
    ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__["NzWaveModule"],
    ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_68__["NzResizableModule"],
    ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_69__["NzPipesModule"]];
class AntdModule {
}
AntdModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AntdModule });
AntdModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AntdModule_Factory(t) { return new (t || AntdModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ...exports
        ], ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_3__["NzAlertModule"],
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_4__["NzAnchorModule"],
        ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_5__["NzAutocompleteModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__["NzAvatarModule"],
        ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_7__["NzBackTopModule"],
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__["NzBadgeModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"],
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__["NzBreadCrumbModule"],
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_11__["NzCalendarModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__["NzCardModule"],
        ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_13__["NzCarouselModule"],
        ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_14__["NzCascaderModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__["NzCheckboxModule"],
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_16__["NzCollapseModule"],
        ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_17__["NzCommentModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_21__["NzDatePickerModule"],
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_22__["NzDescriptionsModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_23__["NzDividerModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_24__["NzDrawerModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_25__["NzDropDownModule"],
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_26__["NzEmptyModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_27__["NzFormModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_28__["NzGridModule"],
        ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_29__["NzI18nModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_30__["NzIconModule"],
        ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_31__["NzImageModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__["NzInputModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_33__["NzInputNumberModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_34__["NzLayoutModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_35__["NzListModule"],
        ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_36__["NzMentionModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_37__["NzMenuModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_38__["NzMessageModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_39__["NzModalModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_18__["NzNoAnimationModule"],
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_40__["NzNotificationModule"],
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_41__["NzPageHeaderModule"],
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_42__["NzPaginationModule"],
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_43__["NzPopconfirmModule"],
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_44__["NzPopoverModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_45__["NzProgressModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_46__["NzRadioModule"],
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_47__["NzRateModule"],
        ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_48__["NzResultModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_49__["NzSelectModule"],
        ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_50__["NzSkeletonModule"],
        ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_51__["NzSliderModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_52__["NzSpinModule"],
        ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_53__["NzStatisticModule"],
        ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_54__["NzStepsModule"],
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_55__["NzSwitchModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_56__["NzTableModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_57__["NzTabsModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_58__["NzTagModule"],
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_59__["NzTimePickerModule"],
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_60__["NzTimelineModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_61__["NzToolTipModule"],
        ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_19__["NzTransButtonModule"],
        ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_62__["NzTransferModule"],
        ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_63__["NzTreeModule"],
        ng_zorro_antd_tree_view__WEBPACK_IMPORTED_MODULE_64__["NzTreeViewModule"],
        ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_65__["NzTreeSelectModule"],
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_66__["NzTypographyModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_67__["NzUploadModule"],
        ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__["NzWaveModule"],
        ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_68__["NzResizableModule"],
        ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_69__["NzPipesModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AntdModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_3__["NzAlertModule"],
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_4__["NzAnchorModule"],
        ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_5__["NzAutocompleteModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__["NzAvatarModule"],
        ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_7__["NzBackTopModule"],
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__["NzBadgeModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"],
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__["NzBreadCrumbModule"],
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_11__["NzCalendarModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__["NzCardModule"],
        ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_13__["NzCarouselModule"],
        ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_14__["NzCascaderModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__["NzCheckboxModule"],
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_16__["NzCollapseModule"],
        ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_17__["NzCommentModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_21__["NzDatePickerModule"],
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_22__["NzDescriptionsModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_23__["NzDividerModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_24__["NzDrawerModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_25__["NzDropDownModule"],
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_26__["NzEmptyModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_27__["NzFormModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_28__["NzGridModule"],
        ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_29__["NzI18nModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_30__["NzIconModule"],
        ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_31__["NzImageModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__["NzInputModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_33__["NzInputNumberModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_34__["NzLayoutModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_35__["NzListModule"],
        ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_36__["NzMentionModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_37__["NzMenuModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_38__["NzMessageModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_39__["NzModalModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_18__["NzNoAnimationModule"],
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_40__["NzNotificationModule"],
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_41__["NzPageHeaderModule"],
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_42__["NzPaginationModule"],
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_43__["NzPopconfirmModule"],
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_44__["NzPopoverModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_45__["NzProgressModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_46__["NzRadioModule"],
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_47__["NzRateModule"],
        ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_48__["NzResultModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_49__["NzSelectModule"],
        ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_50__["NzSkeletonModule"],
        ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_51__["NzSliderModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_52__["NzSpinModule"],
        ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_53__["NzStatisticModule"],
        ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_54__["NzStepsModule"],
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_55__["NzSwitchModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_56__["NzTableModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_57__["NzTabsModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_58__["NzTagModule"],
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_59__["NzTimePickerModule"],
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_60__["NzTimelineModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_61__["NzToolTipModule"],
        ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_19__["NzTransButtonModule"],
        ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_62__["NzTransferModule"],
        ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_63__["NzTreeModule"],
        ng_zorro_antd_tree_view__WEBPACK_IMPORTED_MODULE_64__["NzTreeViewModule"],
        ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_65__["NzTreeSelectModule"],
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_66__["NzTypographyModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_67__["NzUploadModule"],
        ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__["NzWaveModule"],
        ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_68__["NzResizableModule"],
        ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_69__["NzPipesModule"]], exports: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_3__["NzAlertModule"],
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_4__["NzAnchorModule"],
        ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_5__["NzAutocompleteModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__["NzAvatarModule"],
        ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_7__["NzBackTopModule"],
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__["NzBadgeModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"],
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__["NzBreadCrumbModule"],
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_11__["NzCalendarModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__["NzCardModule"],
        ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_13__["NzCarouselModule"],
        ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_14__["NzCascaderModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__["NzCheckboxModule"],
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_16__["NzCollapseModule"],
        ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_17__["NzCommentModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_21__["NzDatePickerModule"],
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_22__["NzDescriptionsModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_23__["NzDividerModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_24__["NzDrawerModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_25__["NzDropDownModule"],
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_26__["NzEmptyModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_27__["NzFormModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_28__["NzGridModule"],
        ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_29__["NzI18nModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_30__["NzIconModule"],
        ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_31__["NzImageModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__["NzInputModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_33__["NzInputNumberModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_34__["NzLayoutModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_35__["NzListModule"],
        ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_36__["NzMentionModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_37__["NzMenuModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_38__["NzMessageModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_39__["NzModalModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_18__["NzNoAnimationModule"],
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_40__["NzNotificationModule"],
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_41__["NzPageHeaderModule"],
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_42__["NzPaginationModule"],
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_43__["NzPopconfirmModule"],
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_44__["NzPopoverModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_45__["NzProgressModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_46__["NzRadioModule"],
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_47__["NzRateModule"],
        ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_48__["NzResultModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_49__["NzSelectModule"],
        ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_50__["NzSkeletonModule"],
        ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_51__["NzSliderModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_52__["NzSpinModule"],
        ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_53__["NzStatisticModule"],
        ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_54__["NzStepsModule"],
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_55__["NzSwitchModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_56__["NzTableModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_57__["NzTabsModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_58__["NzTagModule"],
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_59__["NzTimePickerModule"],
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_60__["NzTimelineModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_61__["NzToolTipModule"],
        ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_19__["NzTransButtonModule"],
        ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_62__["NzTransferModule"],
        ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_63__["NzTreeModule"],
        ng_zorro_antd_tree_view__WEBPACK_IMPORTED_MODULE_64__["NzTreeViewModule"],
        ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_65__["NzTreeSelectModule"],
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_66__["NzTypographyModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_67__["NzUploadModule"],
        ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__["NzWaveModule"],
        ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_68__["NzResizableModule"],
        ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_69__["NzPipesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AntdModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ...exports
                ], exports: [...exports]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");





class AppComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "Tx//":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rgb0");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-routing.module */ "iKbT");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "w/zB");
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons-provider.module */ "Hhmg");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/layout */ "nHXS");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/menu */ "/L1H");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "66zS");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "anqq");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ "px0D");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-feather */ "1tbR");
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-feather/icons */ "HX06");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");




















;
const icons = {
    Home: angular_feather_icons__WEBPACK_IMPORTED_MODULE_15__["Home"],
    MapPin: angular_feather_icons__WEBPACK_IMPORTED_MODULE_15__["MapPin"],
    ShoppingCart: angular_feather_icons__WEBPACK_IMPORTED_MODULE_15__["ShoppingCart"],
    CreditCard: angular_feather_icons__WEBPACK_IMPORTED_MODULE_15__["CreditCard"],
    Users: angular_feather_icons__WEBPACK_IMPORTED_MODULE_15__["Users"],
    FileText: angular_feather_icons__WEBPACK_IMPORTED_MODULE_15__["FileText"],
    Repeat: angular_feather_icons__WEBPACK_IMPORTED_MODULE_15__["Repeat"],
    DollarSign: angular_feather_icons__WEBPACK_IMPORTED_MODULE_15__["DollarSign"]
};
class LayoutModule {
}
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__["en_US"] }], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"],
            _icons_provider_module__WEBPACK_IMPORTED_MODULE_5__["IconsProviderModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__["NzLayoutModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__["NzMenuModule"],
            ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__["NzAvatarModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
            angular_feather__WEBPACK_IMPORTED_MODULE_14__["FeatherModule"].pick(icons)
        ], _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"],
        _icons_provider_module__WEBPACK_IMPORTED_MODULE_5__["IconsProviderModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__["NzLayoutModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__["NzMenuModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__["NzAvatarModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], angular_feather__WEBPACK_IMPORTED_MODULE_14__["FeatherModule"]], exports: [_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"],
                    _icons_provider_module__WEBPACK_IMPORTED_MODULE_5__["IconsProviderModule"],
                    ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__["NzLayoutModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconModule"],
                    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__["NzMenuModule"],
                    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__["NzAvatarModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                    angular_feather__WEBPACK_IMPORTED_MODULE_14__["FeatherModule"].pick(icons)
                ],
                providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__["en_US"] }],
                exports: [_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/layout.module */ "Tx//");
/* harmony import */ var _services_intercept_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/intercept.service */ "esv0");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _date_adapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./date.adapter */ "u/KH");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @agm/core */ "LSHg");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "+az/");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "EApP");




















Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: _services_intercept_service__WEBPACK_IMPORTED_MODULE_11__["InterceptService"],
            multi: true
        },
        // {provide: MAT_DATE_LOCALE, useValue: 'fr'}, //my change from the original documentation example
        // {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        // {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
        {
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"], useClass: _date_adapter__WEBPACK_IMPORTED_MODULE_13__["AppDateAdapter"]
        },
        {
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_FORMATS"], useValue: _date_adapter__WEBPACK_IMPORTED_MODULE_13__["APP_DATE_FORMATS"]
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyBoJB-J1BGQjed7YFK-jJvUmevXJqwFtoM',
                libraries: ['places']
            }),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot(),
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_15__["GooglePlaceModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"], _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_15__["GooglePlaceModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _layout_layout_module__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyBoJB-J1BGQjed7YFK-jJvUmevXJqwFtoM',
                        libraries: ['places']
                    }),
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot(),
                    ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_15__["GooglePlaceModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                        useClass: _services_intercept_service__WEBPACK_IMPORTED_MODULE_11__["InterceptService"],
                        multi: true
                    },
                    // {provide: MAT_DATE_LOCALE, useValue: 'fr'}, //my change from the original documentation example
                    // {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
                    // {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
                    {
                        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"], useClass: _date_adapter__WEBPACK_IMPORTED_MODULE_13__["AppDateAdapter"]
                    },
                    {
                        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_FORMATS"], useValue: _date_adapter__WEBPACK_IMPORTED_MODULE_13__["APP_DATE_FORMATS"]
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "esv0":
/*!***********************************************!*\
  !*** ./src/app/services/intercept.service.ts ***!
  \***********************************************/
/*! exports provided: InterceptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptService", function() { return InterceptService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.service */ "3LUQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.service */ "9ans");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/modal */ "NFMk");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/message */ "JXeA");
/* harmony import */ var _tostr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tostr.service */ "qGAf");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");

















class InterceptService {
    constructor(alert, router, auth, modal, message, toastAlertService) {
        this.alert = alert;
        this.router = router;
        this.auth = auth;
        this.modal = modal;
        this.message = message;
        this.toastAlertService = toastAlertService;
    }
    intercept(request, next) {
        this.toastAlertService.showLoading('Loading...');
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken != null && typeof accessToken != "undefined") {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Headers': 'Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Accept-Encoding, Content-Length, Content-MD5, Date, X-Api-Version, X-File-Name',
                    'Access-Control-Allow-Methods': 'POST,GET,PUT,PATCH,DELETE,OPTIONS',
                },
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                this.toastAlertService.showSuccess('Request successful');
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            if (error.status === 401) {
                this.toastAlertService.showUnauthorized('Unauthorized request');
                localStorage.clear();
                this.router.navigate(['/login']);
            }
            else {
                this.toastAlertService.showError('Error occurred');
                console.log(error);
                this.modal.error({
                    nzTitle: 'Error occurred',
                    nzContent: error.error.errorMessage
                });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["throwError"])(error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.toastAlertService.hideLoading();
        }));
    }
}
InterceptService.ɵfac = function InterceptService_Factory(t) { return new (t || InterceptService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_tostr_service__WEBPACK_IMPORTED_MODULE_8__["ToastrAlertService"])); };
InterceptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InterceptService, factory: InterceptService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InterceptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalService"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__["NzMessageService"] }, { type: _tostr_service__WEBPACK_IMPORTED_MODULE_8__["ToastrAlertService"] }]; }, null); })();


/***/ }),

/***/ "hfAg":
/*!************************************************!*\
  !*** ./src/app/components/Guard/auth.guard.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/permission.service */ "Coov");









// import { AuthService } from 'src/app/services/jwt/auth.service'
// import { NotificationsService } from 'src/app/services/notifications.service'
// import { PermissionService } from 'src/app/services/permission.service'
class AuthGuard {
    constructor(router, auth, _permissionService) {
        this.router = router;
        this.auth = auth;
        this._permissionService = _permissionService;
    }
    canActivate(next, state) {
        const accessToken = localStorage.getItem('accessToken');
        var url = (state.url.split('/')[1]);
        if (accessToken) {
            this.tokenPayload = this.decodeToken(accessToken);
            this.userClaims = Object.keys(this.tokenPayload);
            this.userClaims = this.userClaims.map(x => x.toLowerCase());
            if (this.userClaims.includes(url))
                return true;
            else
                false;
        }
        else {
            this.router.navigate(["auth/login"]);
            return false;
        }
    }
    decodeToken(token) {
        try {
            return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(token);
        }
        catch (_a) {
            return null;
        }
    }
    hasPermission(url) {
        url = (url.split('/')[1]);
        if ((this.userClaims && this.userClaims.length > 0)) {
            // this.router.events
            //   .pipe(filter(event => event instanceof NavigationStart))
            //   .subscribe((event: NavigationStart) => {
            // url = (url.split('/')[1])
            if ((this.userClaims &&
                this.userClaims.indexOf(url) > -1)) {
                this._permissionService.setPermissions(url.charAt(0).toUpperCase() + url.slice(1), this.tokenPayload);
                return true;
            }
            else {
                false;
            }
            // console.log(url, this.userClaims.indexOf(url))
            // })
        }
        else {
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: src_app_services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"] }]; }, null); })();


/***/ }),

/***/ "iKbT":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");




const routes = [{ path: '', pathMatch: 'full', redirectTo: '/welcome' },
    { path: 'welcome', loadChildren: () => __webpack_require__.e(/*! import() | pages-welcome-welcome-module */ "pages-welcome-welcome-module").then(__webpack_require__.bind(null, /*! ../pages/welcome/welcome.module */ "TtBp")).then(m => m.WelcomeModule) }];
class LayoutRoutingModule {
}
LayoutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutRoutingModule });
LayoutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutRoutingModule_Factory(t) { return new (t || LayoutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class AuthService {
    constructor() { }
    login(username, password) {
        if (username === "Sabah" && password == "123") {
            localStorage.setItem('Login', 'Sabah');
            return true;
        }
        return false;
    }
    validateLogin() {
        if (localStorage.getItem('accessToken'))
            return true;
        else
            return false;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qGAf":
/*!*******************************************!*\
  !*** ./src/app/services/tostr.service.ts ***!
  \*******************************************/
/*! exports provided: ToastrAlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrAlertService", function() { return ToastrAlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "EApP");




class ToastrAlertService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    showSuccess(message) {
        this.toastr.success(message);
    }
    showError(message) {
        this.toastr.error(message);
    }
    showLoading(message) {
        this.toastr.info(message, '', {
            disableTimeOut: true,
            closeButton: true
        });
    }
    hideLoading() {
        this.toastr.clear();
    }
    showUnauthorized(message) {
        this.toastr.warning(message);
    }
}
ToastrAlertService.ɵfac = function ToastrAlertService_Factory(t) { return new (t || ToastrAlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
ToastrAlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastrAlertService, factory: ToastrAlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrAlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "u/KH":
/*!*********************************!*\
  !*** ./src/app/date.adapter.ts ***!
  \*********************************/
/*! exports provided: AppDateAdapter, APP_DATE_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDateAdapter", function() { return AppDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DATE_FORMATS", function() { return APP_DATE_FORMATS; });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ "UhP/");

class AppDateAdapter extends _angular_material_core__WEBPACK_IMPORTED_MODULE_0__["NativeDateAdapter"] {
    parse(value) {
        if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
            const str = value.split('/');
            const year = Number(str[2]);
            const month = Number(str[1]) - 1;
            const date = Number(str[0]);
            return new Date(year, month, date);
        }
        const timestamp = typeof value === 'number' ? value : Date.parse(value);
        return isNaN(timestamp) ? null : new Date(timestamp);
    }
    format(date, displayFormat) {
        if (displayFormat == "input") {
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            return this._to2digit(day) + '/' + this._to2digit(month) + '/' + year;
        }
        else if (displayFormat == "inputMonth") {
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            return this._to2digit(month) + '/' + year;
        }
        else {
            return date.toDateString();
        }
    }
    _to2digit(n) {
        return ('00' + n).slice(-2);
    }
}
const APP_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
    display: {
        // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
        dateInput: 'input',
        // monthYearLabel: { month: 'short', year: 'numeric', day: 'numeric' },
        monthYearLabel: 'inputMonth',
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _app_routing_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing-loader */ "FxgB");
/* harmony import */ var _auth_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth-layout/auth-layout.component */ "FBHr");
/* harmony import */ var _components_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Guard/auth.guard */ "hfAg");
/* harmony import */ var _layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/sidenav/sidenav.component */ "w/zB");








const routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
    },
    {
        path: '',
        component: _layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["SidenavComponent"],
        children: [
            {
                path: 'welcome',
                loadChildren: () => __webpack_require__.e(/*! import() | src-app-pages-welcome-welcome-module */ "pages-welcome-welcome-module").then(__webpack_require__.bind(null, /*! src/app/pages/welcome/welcome.module */ "TtBp")).then(m => m.WelcomeModule),
            },
            {
                canActivate: [_components_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                path: 'bankaccount',
                loadChildren: () => __webpack_require__.e(/*! import() | src-app-pages-bankaccount-bankaccount-module */ "src-app-pages-bankaccount-bankaccount-module").then(__webpack_require__.bind(null, /*! src/app/pages/bankaccount/bankaccount.module */ "JGcr")).then(m => m.BankaccountModule)
            },
            {
                canActivate: [_components_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                path: 'broker',
                loadChildren: () => __webpack_require__.e(/*! import() | src-app-pages-company-company-module */ "src-app-pages-company-company-module").then(__webpack_require__.bind(null, /*! src/app/pages/company/company.module */ "rXpt")).then(m => m.CompanyModule)
            },
            {
                canActivate: [_components_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                path: 'motortype',
                loadChildren: () => __webpack_require__.e(/*! import() | src-app-pages-motortype-motortype-module */ "src-app-pages-motortype-motortype-module").then(__webpack_require__.bind(null, /*! src/app/pages/motortype/motortype.module */ "p3DP")).then(m => m.MotortypeModule)
            },
            {
                canActivate: [_components_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                path: 'outstandings',
                loadChildren: () => Promise.all(/*! import() | src-app-pages-outstanding-outstanding-module */[__webpack_require__.e("default~src-app-pages-outstanding-outstanding-module~src-app-pages-sales-sales-module~src-app-pages-~790ca9bd"), __webpack_require__.e("default~src-app-pages-outstanding-outstanding-module~src-app-pages-transactions-transactions-module"), __webpack_require__.e("src-app-pages-outstanding-outstanding-module")]).then(__webpack_require__.bind(null, /*! src/app/pages/outstanding/outstanding.module */ "2v8c")).then(m => m.OutstandingModule)
            },
            {
                canActivate: [_components_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                path: 'salesmanagement',
                loadChildren: () => Promise.all(/*! import() | src-app-pages-sales-sales-module */[__webpack_require__.e("default~src-app-pages-outstanding-outstanding-module~src-app-pages-sales-sales-module~src-app-pages-~790ca9bd"), __webpack_require__.e("default~src-app-pages-sales-sales-module~src-app-pages-statements-statements-module"), __webpack_require__.e("common"), __webpack_require__.e("src-app-pages-sales-sales-module")]).then(__webpack_require__.bind(null, /*! src/app/pages/sales/sales.module */ "U1Ny")).then(m => m.SalesModule)
            },
            {
                canActivate: [_components_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                path: 'transaction',
                loadChildren: () => Promise.all(/*! import() | src-app-pages-transactions-transactions-module */[__webpack_require__.e("default~src-app-pages-outstanding-outstanding-module~src-app-pages-sales-sales-module~src-app-pages-~790ca9bd"), __webpack_require__.e("default~src-app-pages-outstanding-outstanding-module~src-app-pages-transactions-transactions-module")]).then(__webpack_require__.bind(null, /*! src/app/pages/transactions/transactions.module */ "RMDf")).then(m => m.TransactionsModule)
            },
            {
                canActivate: [_components_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                path: 'teammember',
                loadChildren: () => Promise.all(/*! import() | src-app-pages-user-user-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-pages-user-user-module")]).then(__webpack_require__.bind(null, /*! src/app/pages/user/user.module */ "bkV9")).then(m => m.UserModule)
            },
            {
                canActivate: [_components_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                path: 'vehicletype',
                loadChildren: () => Promise.all(/*! import() | src-app-pages-vehiclemodel-vehiclemodel-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-pages-vehiclemodel-vehiclemodel-module")]).then(__webpack_require__.bind(null, /*! src/app/pages/vehiclemodel/vehiclemodel.module */ "sI0O")).then(m => m.VehiclemodelModule)
            },
            {
                canActivate: [_components_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                path: 'agent',
                loadChildren: () => __webpack_require__.e(/*! import() | src-app-pages-agent-agent-module */ "src-app-pages-agent-agent-module").then(__webpack_require__.bind(null, /*! src/app/pages/agent/agent.module */ "GTLC")).then(m => m.AgentModule)
            },
            {
                canActivate: [_components_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                path: 'invoice',
                loadChildren: () => __webpack_require__.e(/*! import() | src-app-pages-invoice-invoice-module */ "src-app-pages-invoice-invoice-module").then(__webpack_require__.bind(null, /*! src/app/pages/invoice/invoice.module */ "c/hZ")).then(m => m.InvoiceModule)
            },
            {
                canActivate: [_components_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                path: 'statements',
                loadChildren: () => Promise.all(/*! import() | src-app-pages-statements-statements-module */[__webpack_require__.e("default~src-app-pages-sales-sales-module~src-app-pages-statements-statements-module"), __webpack_require__.e("src-app-pages-statements-statements-module")]).then(__webpack_require__.bind(null, /*! src/app/pages/statements/statements.module */ "12/q")).then(m => m.StatementsModule)
            },
            {
                canActivate: [_components_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() | src-app-pages-dashboard-dashboard-module */[__webpack_require__.e("default~src-app-pages-branch-branch-module~src-app-pages-dashboard-dashboard-module"), __webpack_require__.e("src-app-pages-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! src/app/pages/dashboard/dashboard.module */ "/2RN")).then(m => m.DashboardModule)
            },
            {
                canActivate: [_components_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                path: 'user',
                loadChildren: () => Promise.all(/*! import() | src-app-pages-user-user-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-pages-user-user-module")]).then(__webpack_require__.bind(null, /*! src/app/pages/user/user.module */ "bkV9")).then(m => m.UserModule)
            },
            {
                canActivate: [_components_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                path: 'expenses',
                loadChildren: () => __webpack_require__.e(/*! import() | src-app-pages-expense-expense-module */ "src-app-pages-expense-expense-module").then(__webpack_require__.bind(null, /*! src/app/pages/expense/expense.module */ "OFS+")).then(m => m.ExpenseModule)
            },
            {
                //canActivate:[AuthGuard],
                path: 'branch-management',
                loadChildren: () => Promise.all(/*! import() | src-app-pages-branch-branch-module */[__webpack_require__.e("default~src-app-pages-branch-branch-module~src-app-pages-dashboard-dashboard-module"), __webpack_require__.e("common"), __webpack_require__.e("src-app-pages-branch-branch-module")]).then(__webpack_require__.bind(null, /*! src/app/pages/branch/branch.module */ "abSN")).then(m => m.BranchModule)
            }
        ]
    },
    {
        path: '',
        component: _auth_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthLayoutComponent"],
        children: [
            {
                path: 'auth',
                loadChildren: () => __webpack_require__.e(/*! import() | src-app-auth-auth-module */ "src-app-auth-auth-module").then(__webpack_require__.bind(null, /*! src/app/auth/auth.module */ "Yj9t")).then(m => m.AuthModule)
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [_app_routing_loader__WEBPACK_IMPORTED_MODULE_2__["AppPreloader"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                useHash: true,
                preloadingStrategy: _app_routing_loader__WEBPACK_IMPORTED_MODULE_2__["AppPreloader"]
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        useHash: true,
                        preloadingStrategy: _app_routing_loader__WEBPACK_IMPORTED_MODULE_2__["AppPreloader"]
                    })],
                providers: [_app_routing_loader__WEBPACK_IMPORTED_MODULE_2__["AppPreloader"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "w/zB":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidenav/sidenav.component.ts ***!
  \*****************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! feather-icons */ "d8Z/");
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "66zS");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/layout */ "nHXS");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/menu */ "/L1H");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "WJhm");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "W4B1");













function SidenavComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_ng_template_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.isCollapsed = !ctx_r12.isCollapsed; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r1.isCollapsed ? "menu-unfold" : "menu-fold");
} }
function SidenavComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sales Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Bank Accounts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Brokers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Outstandings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Expenses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_li_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Team Members");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Statements");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SidenavComponent {
    constructor(router, iconService, renderer) {
        this.router = router;
        this.iconService = iconService;
        this.renderer = renderer;
        this.isCollapsed = false;
        this.homeIcon = feather_icons__WEBPACK_IMPORTED_MODULE_3__["faHome"];
        this.usersIcon = feather_icons__WEBPACK_IMPORTED_MODULE_3__["faUsers"];
        this.isDarkTheme = false;
        this.cogIcon = feather_icons__WEBPACK_IMPORTED_MODULE_3__["faCog"];
        this.powerOffIcon = feather_icons__WEBPACK_IMPORTED_MODULE_3__["faPowerOff"];
        this.accessToken = localStorage.getItem('accessToken');
    }
    toggleTheme(event) {
        const root = this.renderer.selectRootElement('nz-layout');
        if (event.checked) {
            this.renderer.addClass(root, 'dark-theme');
            this.renderer.removeClass(root, 'light-theme');
        }
        else {
            this.renderer.addClass(root, 'light-theme');
            this.renderer.removeClass(root, 'dark-theme');
        }
    }
    ngOnInit() {
        this.tokenPayload = this.decodeToken(this.accessToken);
        console.log(this.tokenPayload);
        this.userClaims = Object.keys(this.tokenPayload);
        this.userClaims = this.userClaims.map(x => x.toLowerCase());
        var roles = this.userClaims.slice(3, 16);
        console.log(roles);
        console.log(this.userClaims);
    }
    checkIf(value) {
        if (this.userClaims.includes(value))
            return true;
        return false;
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/auth/login']);
    }
    decodeToken(token) {
        try {
            return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(token);
        }
        catch (_a) {
            return null;
        }
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], decls: 44, vars: 12, consts: [[1, "dark-theme"], ["nzCollapsible", "", "nzWidth", "256px", "nzBreakpoint", "md", 1, "menu-sidebar", 3, "nzZeroTrigger"], [1, "sidebar-logo"], ["href", "#", "target", "_blank"], ["src", "assets/images/logo.png", "alt", "logo"], ["toggleIcon", ""], ["nz-menu", "", "nzTheme", "dark", "nzMode", "inline", 3, "nzInlineCollapsed"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/dashboard", 4, "ngIf"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/branch-management"], ["nz-icon", "", "nzType", "insurance", "nzTheme", "outline"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/salesmanagement", 4, "ngIf"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/bankaccount", 4, "ngIf"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/broker", 4, "ngIf"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/outstandings", 4, "ngIf"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/transaction", 4, "ngIf"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/expenses", 4, "ngIf"], ["nz-submenu", "", "nzTitle", "Manage Setups", "nzIcon", "form"], ["nz-menu-item", "", "nzMatchRouter", "", "routerLink", "/agent"], ["nz-menu-item", "", "nzMatchRouter", "", "routerLink", "/vehicletype"], ["nz-menu-item", "", "nzMatchRouter", "", "routerLink", "/motortype"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/teammember", 4, "ngIf"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/statements", 4, "ngIf"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/settings", 4, "ngIf"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", 3, "click"], ["nz-icon", "", "nzType", "logout", "nzTheme", "outline"], [1, "inner-content"], [1, "menu-toggle-icon", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/dashboard"], ["nz-icon", "", "nzType", "dashboard"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/salesmanagement"], ["nz-icon", "", "nzType", "reconciliation", "nzTheme", "outline"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/bankaccount"], ["nz-icon", "", "nzType", "bank", "nzTheme", "outline"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/broker"], ["nz-icon", "", "nzType", "money-collect", "nzTheme", "outline"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/outstandings"], ["nz-icon", "", "nzType", "book", "nzTheme", "outline"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/transaction"], ["nz-icon", "", "nzType", "transaction", "nzTheme", "outline"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/expenses"], ["nz-icon", "", "nzType", "dollar-circle", "nzTheme", "fill"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/teammember"], ["nz-icon", "", "nzType", "user", "nzTheme", "outline"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/statements"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", "routerLink", "/settings"], ["nz-icon", "", "nzType", "setting", "nzTheme", "outline"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-sider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Panorama Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidenavComponent_ng_template_7_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SidenavComponent_li_10_Template, 4, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Branch Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SidenavComponent_li_15_Template, 4, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SidenavComponent_li_16_Template, 4, 0, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SidenavComponent_li_17_Template, 4, 0, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SidenavComponent_li_18_Template, 4, 0, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SidenavComponent_li_19_Template, 4, 0, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SidenavComponent_li_20_Template, 4, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Vehicle Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Motor Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SidenavComponent_li_32_Template, 4, 0, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SidenavComponent_li_33_Template, 4, 0, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SidenavComponent_li_34_Template, 4, 0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_li_click_35_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "nz-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nz-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzZeroTrigger", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzInlineCollapsed", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkIf("dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkIf("salesmanagement"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkIf("bankaccount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkIf("broker"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkIf("outstandings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkIf("transaction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkIf("expenses"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkIf("teammember"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkIf("statements"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkIf("settings"));
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzSiderComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuItemDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__["NzTooltipDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzSubMenuComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzHeaderComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.app-layout[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.light-theme[_ngcontent-%COMP%]   .anticon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #000;\n}\n\n\n\n.dark-theme[_ngcontent-%COMP%]   .anticon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n\n.menu-sidebar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  min-height: 100vh;\n  box-shadow: 2px 0 6px rgba(4, 133, 255, 0.35);\n}\n\n.header-trigger[_ngcontent-%COMP%] {\n  height: 64px;\n  padding: 20px 24px;\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.3s, padding 0s;\n}\n\n.trigger[_ngcontent-%COMP%]:hover {\n  color: #1890ff;\n}\n\n.maintenance-banner[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  \n  color: white;\n  text-align: center;\n  padding: 12px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n}\n\n.maintenance-banner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.maintenance-banner[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.maintenance-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n}\n\n.sidebar-logo[_ngcontent-%COMP%] {\n  position: relative;\n  height: 64px;\n  padding-left: 24px;\n  overflow: hidden;\n  line-height: 64px;\n  background: #001529;\n  transition: all 0.3s;\n}\n\n.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  vertical-align: middle;\n}\n\n.sidebar-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0 0 20px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;\n  vertical-align: middle;\n}\n\nnz-header[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 100%;\n  z-index: 2;\n}\n\n.app-header[_ngcontent-%COMP%] {\n  position: relative;\n  height: 64px;\n  padding: 0;\n  background: #fff;\n  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\n}\n\nnz-content[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\nnz-content[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 24px;\n  min-height: 280px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  outline: 0;\n}\n\n.menu-sidebar-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n}\n\n.menu-toggle-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  cursor: pointer;\n}\n\n.nz-menu-item-link[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.nz-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: #001529;\n}\n\n.menu-sidebar[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUNFO0VBQ0UsVUFBQTtBQUVKOztBQUNFLGVBQUE7O0FBQ0E7RUFDRSxVQUFBO0FBRUo7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0FBRUo7O0FBQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0FBRUo7O0FBQUU7RUFDRSx5QkFBQTtFQUEyQixRQUFBO0VBQzNCLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUZFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUhFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFIRTtFQUNFLDBCQUFBO0FBTUo7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBS0o7O0FBRkU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFLSjs7QUFGRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUVBQUE7RUFDQSxzQkFBQTtBQUtKOztBQUZFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBS0o7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQUtKOztBQUZFO0VBQ0UsV0FBQTtBQUtKOztBQUZFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFGSTtFQUNFLFVBQUE7QUFLTjs7QUFGRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUZFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhFO0VBQ0UsZUFBQTtBQU1KOztBQUpFO0VBQ0UseUJBQUE7QUFPSjs7QUFMRTtFQUNFLG1CQUFBO0FBUUoiLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIH1cclxuXHJcbiAgLmFwcC1sYXlvdXQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAubGlnaHQtdGhlbWUgLmFudGljb24gc3ZnIHtcclxuICAgIGZpbGw6ICMwMDA7XHJcbiAgfVxyXG5cclxuICAvKiBEYXJrIHRoZW1lICovXHJcbiAgLmRhcmstdGhlbWUgLmFudGljb24gc3ZnIHtcclxuICAgIGZpbGw6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAubWVudS1zaWRlYmFyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMCA2cHggcmdiYSg0LCAxMzMsIDI1NSwgMC4zNSk7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXRyaWdnZXIge1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyxwYWRkaW5nIDBzO1xyXG4gIH1cclxuXHJcbiAgLnRyaWdnZXI6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxODkwZmY7XHJcbiAgfVxyXG4gIC5tYWludGVuYW5jZS1iYW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjsgLyogUmVkICovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICB9XHJcbiAgLm1haW50ZW5hbmNlLWJhbm5lciBpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcbiAgLm1haW50ZW5hbmNlLWJhbm5lciAuYmFubmVyLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW50ZW5hbmNlLWJhbm5lciAuYmFubmVyLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnNpZGViYXItbG9nbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbGluZS1oZWlnaHQ6IDY0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAxNTI5O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLWxvZ28gaW1nIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLWxvZ28gaDEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIDAgMCAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pcixIZWx2ZXRpY2EgTmV1ZSxBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG5cclxuICBuei1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcblxyXG4gIC5hcHAtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwyMSw0MSwuMDgpO1xyXG4gIH1cclxuXHJcbiAgbnotY29udGVudCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICB9XHJcblxyXG4gIG56LWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyODBweDtcclxuICB9XHJcbiAgdWx7XHJcbiAgICBsaXtcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLm1lbnUtc2lkZWJhci13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtdG9nZ2xlLWljb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5uei1tZW51LWl0ZW0tbGluayB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5uei1tZW51LWl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTUyOTtcclxuICB9XHJcbiAgLm1lbnUtc2lkZWJhciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map