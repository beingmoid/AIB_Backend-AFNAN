(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "BBhy":
/*!***************************************!*\
  !*** ./src/app/Model/VehicleModel.ts ***!
  \***************************************/
/*! exports provided: VehicleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleModel", function() { return VehicleModel; });
/* harmony import */ var _BaseEntity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseEntity */ "fZ5M");

class VehicleModel extends _BaseEntity__WEBPACK_IMPORTED_MODULE_0__["BaseEntity"] {
}


/***/ }),

/***/ "CFL1":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Model/Global */ "BQhZ");
/* harmony import */ var _base_api_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-api-handler.service */ "91If");







class UserService extends _base_api_handler_service__WEBPACK_IMPORTED_MODULE_4__["BaseApiHandlerService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.userSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.roleSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.loggedInUserSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.userObserve$ = this.userSubject$.asObservable();
        this.roleObservable$ = this.roleSubject$.asObservable();
        this.loggedInUserObservable$ = this.loggedInUserSubject$.asObservable();
    }
    get User() { return this.userSubject$.value; }
    SaveUser(data) {
        return this.Post(data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].CreateTeamMember);
    }
    UpdateUser(data) {
        return this.Update(data.id, data, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].UpdateTeamMember);
    }
    GetUser() {
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].TeamMember).subscribe(res => {
            this.userSubject$.next(res.dynamicResult);
        });
    }
    DeleteUser(id) {
        return this.Delete(id, src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].DeleteTeamMember);
    }
    GetRoles() {
        return this.Get(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Roles + "/GetAllRoles").subscribe(res => {
            this.roleSubject$.next(res.dynamicResult);
        });
    }
    GetLoginUser() {
        return this.GetAll(src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + src_app_Model_Global__WEBPACK_IMPORTED_MODULE_3__["API_ENDPOINTS"].Auth + '/GetLoggedInUser').subscribe(res => {
            this.loggedInUserSubject$.next(res.dynamicResult);
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map