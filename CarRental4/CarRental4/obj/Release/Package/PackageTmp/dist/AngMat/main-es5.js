(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Premission1+/manage-car-types/carTypeModal.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Premission1+/manage-car-types/carTypeModal.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <!--<mat-form-field>\r\n    <input matInput [(ngModel)]=\"editedCar.CarTypeId\" placeholder=\"CarType id\">\r\n  </mat-form-field>\r\n  <br />-->\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"editedCar.Manufacturer\" placeholder=\"Manufacturer\">\r\n  </mat-form-field>\r\n  <br />\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"editedCar.Model\" placeholder=\"Model\">\r\n  </mat-form-field>\r\n  <br />\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"editedCar.PricePerDay\" placeholder=\"Price per day (£)\">\r\n  </mat-form-field>\r\n  <br />\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"editedCar.PricePerDayOver\" placeholder=\"Delay charge (£)\">\r\n  </mat-form-field>\r\n  <br />\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"editedCar.YearOfManufacture\" placeholder=\"YearOfManufacture\">\r\n  </mat-form-field>\r\n  <br />\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"editedCar.Transmission\" placeholder=\"Transmission\">\r\n  </mat-form-field>\r\n  <br />\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"editedCar.PictureUrl\" placeholder=\"PictureUrl\">\r\n  </mat-form-field>\r\n  <br />\r\n  <button mat-raised-button color=\"accent\" (click)=\"save()\"> Save </button>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Premission1+/manage-car-types/manage-car-types.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Premission1+/manage-car-types/manage-car-types.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Manage car models</h2>\r\n<div class=\"tableWrapper\">\r\n  <mat-card class=\"table\">\r\n    <table matSort (matSortChange)=\"sortData($event)\">\r\n      <tr>\r\n        <th mat-sort-header=\"CarTypeId\">CarType Id</th>\r\n        <th mat-sort-header=\"Manufacturer\">Manufacturer</th>\r\n        <th mat-sort-header=\"Model\">Model</th>\r\n        <th mat-sort-header=\"PricePerDay\">Price Per Day</th>\r\n        <th mat-sort-header=\"PriceOverdue\">Price Overdue</th>\r\n        <th mat-sort-header=\"YearOfManufacture\">Manufactured</th>\r\n        <th mat-sort-header=\"Transmission\">Transmission</th>\r\n        <th mat-sort-header=\"PictureUrl\">Picture Url</th>\r\n      </tr>\r\n      <mat-divider></mat-divider>\r\n      <tr *ngFor=\"let car of sortedCarTypes\">\r\n        <td>{{car.CarTypeId}}</td>\r\n        <td>{{car.Manufacturer}}</td>\r\n        <td>{{car.Model}}</td>\r\n        <td>{{car.PricePerDay | currency: 'GBP'}}</td>\r\n        <td>{{car.PricePerDayOver | currency: 'GBP'}}</td>\r\n        <td>{{car.YearOfManufacture}}</td>\r\n        <td>{{car.Transmission}}</td>\r\n        <td title=\"{{car.PictureUrl}}\">{{car.PictureUrl}}</td>\r\n        <button mat-raised-button color=\"primary\" (click)=\"openDialog(car)\"> Edit </button>\r\n        <button mat-raised-button color=\"accent\" (click)=\"deleteAttempt(car)\"> Delete </button>\r\n      </tr>\r\n    </table>\r\n  </mat-card>\r\n  <mat-card class=\"sheet\" (click)=\"deleteCheck=false\" *ngIf=\"deleteCheck\">\r\n  </mat-card>\r\n  <div class=\"modalAligner\">\r\n    <mat-card class=\"deleteModal\" *ngIf=\"deleteCheck\">\r\n      <h2>Confirm delete</h2>\r\n      <p>Do you really want to delete ?</p>\r\n      <button mat-raised-button color=\"accent\" (click)=\"delete()\"> Confirm </button>\r\n      <button mat-raised-button (click)=\"removeDeleteCheck()\"> Remove delete check </button>\r\n    </mat-card>\r\n  </div>\r\n  <button mat-raised-button color=\"accent\" (click)=\"openDialog(newType); newCarTypeSwitcher()\"> New Type + </button>\r\n </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Premission1+/manage-cars/carsModal.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Premission1+/manage-cars/carsModal.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-form-field>\r\n    <input matInput autocomplete=\"off\" type=\"number\" [(ngModel)]=\"editedCar.CarId\" placeholder=\"Car id\">\r\n  </mat-form-field>\r\n  <br />\r\n  <mat-form-field>\r\n    <input matInput autocomplete=\"off\" type=\"number\" [(ngModel)]=\"editedCar.CarTypeId\" placeholder=\"Car Type\">\r\n  </mat-form-field>\r\n  <br />\r\n  <mat-form-field>\r\n    <input matInput autocomplete=\"off\" maxlength=\"8\" minlenght=\"5\" [(ngModel)]=\"editedCar.CarNumber\" placeholder=\"Number plate\">\r\n  </mat-form-field>\r\n  <br />\r\n  <mat-form-field>\r\n    <input matInput autocomplete=\"off\" type=\"number\" step=\"any\" pattern=\"[0-9]*[,]?[0-9]+\" [(ngModel)]=\"editedCar.Mileage\" placeholder=\"Mileage\">\r\n  </mat-form-field>\r\n  <br />\r\n  <section class=\"switch\">\r\n    FitForRental\r\n    <mat-slide-toggle [(ngModel)]=\"editedCar.FitForRental\" [checked]=\"false\" class=\"switch\" color=\"primary\">\r\n      {{editedCar.FitForRental}}\r\n    </mat-slide-toggle>\r\n  </section>\r\n  <br />\r\n  <section class=\"switch\">\r\n    Available\r\n    <mat-slide-toggle [(ngModel)]=\"editedCar.Available\" [checked]=\"false\" class=\"switch\" color=\"primary\">\r\n      {{editedCar.Available}}\r\n    </mat-slide-toggle>\r\n  </section>\r\n  <br />\r\n  <mat-form-field>\r\n    <input matInput autocomplete=\"off\" type=\"number\" [(ngModel)]=\"editedCar.BranchId\" placeholder=\"BranchId\">\r\n  </mat-form-field>\r\n  <br />\r\n  <mat-form-field>\r\n    <input matInput autocomplete=\"off\" [(ngModel)]=\"editedCar.PictureUrl\" placeholder=\"PictureUrl\">\r\n  </mat-form-field>\r\n  <br />\r\n  <button mat-raised-button color=\"accent\" (click)=\"save()\"> Save </button>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Premission1+/manage-cars/manage-cars.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Premission1+/manage-cars/manage-cars.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Manage cars</h2>\r\n<div class=\"tableWrapper\">\r\n  <mat-card class=\"table\">\r\n    <table matSort (matSortChange)=\"sortData($event)\">\r\n      <tr>\r\n        <th mat-sort-header=\"CarId\">Car Id</th>\r\n        <th mat-sort-header=\"CarTypeId\">Car Type Id</th>\r\n        <th mat-sort-header=\"CarNumber\">Car Number</th>\r\n        <th mat-sort-header=\"Mileage\">Mileage</th>\r\n        <th mat-sort-header=\"FitForRental\">Fit For Rental</th>\r\n        <th mat-sort-header=\"Available\">Available</th>\r\n        <th mat-sort-header=\"BranchId\">Branch Id</th>\r\n        <th mat-sort-header=\"PictureUrl\">Picture Url</th>\r\n      </tr>\r\n      <mat-divider></mat-divider>\r\n      <mat-divider></mat-divider>\r\n      <tr *ngFor=\"let car of sortedCars\">\r\n        <td>{{car.CarId}}</td>\r\n        <td>{{car.CarType.CarTypeId}}</td>\r\n        <td>{{car.CarNumber}}</td>\r\n        <td>{{car.Mileage}}</td>\r\n        <td>{{car.FitForRental}}</td>\r\n        <td>{{car.Available}}</td>\r\n        <td>{{car.Branch.BranchId}}</td>\r\n        <td title=\"{{car.PictureUrl}}\">{{car.PictureUrl}}</td>\r\n        <button mat-raised-button color=\"primary\" (click)=\"openDialog(car)\"> Edit </button>\r\n        <button mat-raised-button color=\"accent\" (click)=\"deleteAttempt(car)\"> Delete </button>\r\n      </tr>\r\n    </table>\r\n  </mat-card>\r\n  <mat-card class=\"sheet\" (click)=\"deleteCheck=false\" *ngIf=\"deleteCheck\">\r\n  </mat-card>\r\n  <div class=\"modalAligner\">\r\n    <mat-card class=\"deleteModal\" *ngIf=\"deleteCheck\">\r\n      <h2>Confirm delete</h2>\r\n      <p>Do you really want to delete ?</p>\r\n      <button mat-raised-button color=\"accent\" (click)=\"delete()\"> Confirm </button>\r\n      <button mat-raised-button (click)=\"removeDeleteCheck()\"> Remove delete check </button>\r\n    </mat-card>\r\n  </div>\r\n  <button mat-raised-button color=\"accent\" (click)=\"openDialog(newCar); newCarSwitcher()\"> New Car + </button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Premission1+/manage-returns/manage-returns.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Premission1+/manage-returns/manage-returns.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Manage car returns</h2>\r\n<mat-card class=\"table\">\r\n  <table matSort (matSortChange)=\"sortData($event)\">\r\n    <tr>\r\n      <th mat-sort-header=\"RentalsId\">Rental</th>\r\n      <th mat-sort-header=\"StartDate\">Began</th>\r\n      <th mat-sort-header=\"DueBackDate\">DueBackDate</th>\r\n      <th mat-sort-header=\"ReturnedDate\">Returned</th>\r\n      <th mat-sort-header=\"CarId\">Car</th>\r\n    </tr>\r\n    <mat-divider></mat-divider>\r\n    <tr *ngFor=\"let r of sortedOpenRentals\">\r\n      <td>{{r.RentalsId}}</td>\r\n      <td>{{r.StartDate | date :'shortDate' | date: 'd/M/yy'}}</td>\r\n      <td>{{r.EndDate | date :'shortDate' | date: 'd/M/yy'}}</td>\r\n      <td>{{r.Returned | date :'shortDate' | date: 'd/M/yy'}}</td>\r\n      <td>{{r.CarId}}</td>\r\n      <button mat-raised-button color=\"accent\" (click)=\"openDialog(r)\"> Return </button>\r\n    </tr>\r\n  </table>\r\n</mat-card>\r\n<button class=\"leftMargin\" mat-raised-button color=\"primary\" (click)=\"summonRentals()\"> Clear returned cars </button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Premission1+/manage-returns/returnsModal.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Premission1+/manage-returns/returnsModal.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-form-field>\r\n    <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" [(ngModel)]=\"returnedDate\" placeholder=\"Car was returned on:\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker #picker></mat-datepicker>\r\n  </mat-form-field>\r\n  <br />\r\n  <button mat-raised-button color=\"accent\" (click)=\"save()\"> Save </button><!--[mat-dialog-close]=\"data\"-->\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Premission1+/manage-users/manage-users.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Premission1+/manage-users/manage-users.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Manage Users and Employees</h2>\r\n<mat-card class=\"table\">\r\n  <table matSort (matSortChange)=\"sortData($event)\">\r\n    <tr>\r\n      <th mat-sort-header=\"UserId\">Id</th>\r\n      <th mat-sort-header=\"Fullname\">Name</th>\r\n      <th mat-sort-header=\"PassportNumber\">Passport number</th>\r\n      <th mat-sort-header=\"UserName\">User name</th>\r\n      <th mat-sort-header=\"Birthdate\">Birthdate</th>\r\n      <th mat-sort-header=\"Gender\">Gender</th>\r\n      <th mat-sort-header=\"Email\">Email</th>\r\n      <th mat-sort-header=\"Password\">Password</th>\r\n      <th mat-sort-header=\"PictureUrl\">Pic</th>\r\n      <th mat-sort-header=\"Permission\">Permission</th>\r\n    </tr>\r\n    <mat-divider></mat-divider>\r\n    <tr *ngFor=\"let u of sortedUsers\">\r\n      <td>{{u.UserId}}</td>\r\n      <td>{{u.Fullname}}</td>\r\n      <td>{{u.PassportNumber}}</td>\r\n      <td>{{u.UserName}}</td>\r\n      <td>{{u.BirthDate  | date :'shortDate' | date : 'd/M/y'}}</td>\r\n      <td>{{u.Gender}}</td>\r\n      <td>{{u.Email}}</td>\r\n      <td>{{u.Password}}</td>\r\n      <td><img style=\"width: 40px;\" src=\"{{u.PictureUrl ? userFolder + u.PictureUrl : (u.Gender=='male'?(userFolder + 'male.png'):(userFolder + 'female.jpg'))}}\"\r\n               title=\"{{u.Fullname + ' mugshot'}}\" /></td>\r\n      <td>{{u.Permission | permission}}</td>\r\n      <button mat-raised-button color=\"primary\" (click)=\"openDialog(u)\"> Edit </button>\r\n      <button mat-raised-button color=\"accent\" (click)=\"deleteAttempt(u, this)\"> Delete </button>\r\n    </tr>\r\n  </table>\r\n</mat-card>\r\n<mat-card class=\"sheet\" (click)=\"deleteCheck=false\" *ngIf=\"deleteCheck\">\r\n</mat-card>\r\n<div class=\"modalAligner\">\r\n  <mat-card class=\"deleteModal\" *ngIf=\"deleteCheck\">\r\n    <h2>Confirm delete</h2>\r\n    <p>Do you really want to delete ?</p>\r\n    <button mat-raised-button color=\"accent\" (click)=\"delete()\"> Confirm </button>\r\n    <button mat-raised-button (click)=\"removeDeleteCheck()\"> Remove delete check </button>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Premission1+/manage-users/userModal.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Premission1+/manage-users/userModal.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"box\">\r\n  <div class=\"container\">\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" [(ngModel)]=\"editedUser.Fullname\" placeholder=\"Enter name\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" [(ngModel)]=\"editedUser.UserName\"  placeholder=\"Enter user name\">\r\n    </mat-form-field>\r\n    <mat-form-field hintLabel=\"Requires 9 digits\">\r\n      <input matInput autocomplete=\"off\" #passport [(ngModel)]=\"editedUser.PassportNumber\"  maxlength=\"9\" minlength=\"9\" placeholder=\"Enter passport number\">\r\n      <mat-hint align=\"end\">{{passport.value?.length || 0}}/9</mat-hint>\r\n    </mat-form-field>\r\n    <br>\r\n    <br>\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" placeholder=\"Enter password\" [(ngModel)]=\"editedUser.Password\" [type]=\"hide ? 'password' : 'text'\">\r\n      <a mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n      </a>\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field>\r\n      <mat-select autocomplete=\"off\" [(ngModel)]=\"editedUser.Gender\" placeholder=\"Select gender\">\r\n        <mat-option disabled value=\"\">Gender:</mat-option>\r\n        <mat-option value=\"Male\"><span><i class=\"fa fa-mars fa-lg\"></i></span>Male</mat-option>\r\n        <mat-option value=\"female\"><span><i class=\"fa fa-venus fa-lg\"></i></span>Female</mat-option>\r\n        <mat-option value=\"both\"><span id=\"spn\"><i class=\"fa fa-venus-mars fa-lg\"></i></span>Both</mat-option>\r\n        <mat-option value=\"neither\"><span><i class=\"fa fa-neuter fa-lg\"></i></span>Neither</mat-option>\r\n        <mat-option value=\"undecided\"><span><i class=\"fa fa-question fa-lg\"></i></span>Undecided</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input autocomplete=\"off\" matInput placeholder=\"Email\" [(ngModel)]=\"editedUser.Email\" >\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-divider></mat-divider>\r\n    <br>\r\n    <mat-form-field>\r\n      <input autocomplete=\"off\" matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" [(ngModel)]=\"editedUser.Birthdate\" placeholder=\"Enter birthdate\">\r\n      <mat-hint>optional</mat-hint>\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field>\r\n      <input autocomplete=\"off\" matInput [(ngModel)]=\"editedUser.PictureUrl\" placeholder=\"Enter url\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput #permiss autocomplete=\"off\" maxlength=\"1\" pattern=\"/[0-2]/g\" [(ngModel)]=\"editedUser.Permission\" placeholder=\"Permission: (0, 1 or 2)\">\r\n      <mat-hint>{{permiss.value? (permiss.value | permission):\"-\"}}</mat-hint>\r\n    </mat-form-field>\r\n  </div>\r\n  <br />\r\n  <button mat-raised-button color=\"accent\" (click)=\"save()\"> Save </button>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Premission1+/view-rentals/view-rentals.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Premission1+/view-rentals/view-rentals.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>View all rentals</h2>\r\n<mat-card class=\"table\">\r\n  <table matSort (matSortChange)=\"sortData($event)\">\r\n    <tr>\r\n      <th mat-sort-header=\"RentalsId\">Rental</th>\r\n      <th mat-sort-header=\"UserId\">UserId</th>\r\n      <th mat-sort-header=\"Username\">Username</th>\r\n      <th mat-sort-header=\"StartDate\">Began</th>\r\n      <th mat-sort-header=\"DueBackDate\">DueBackDate</th>\r\n      <th mat-sort-header=\"ReturnedDate\">Returned</th>\r\n      <th mat-sort-header=\"CarId\">Car</th>\r\n    </tr>\r\n    <mat-divider></mat-divider>\r\n    <mat-divider></mat-divider>\r\n    <tr *ngFor=\" let r of sortedRentals\">\r\n      <td>{{r.RentalsId}}</td>\r\n      <td>{{r.User.UserId}}</td>\r\n      <td>{{r.User.Fullname}}</td>\r\n      <td>{{r.StartDate | date :'shortDate' | date: 'd/M/yy'}}</td>\r\n      <td>{{r.EndDate | date :'shortDate' | date: 'd/M/yy'}}</td>\r\n      <td>{{r.Returned | date :'shortDate' | date: 'd/M/yy'}}</td>\r\n      <td>{{r.CarId}}</td>\r\n      <mat-divider></mat-divider>\r\n    </tr>\r\n    <mat-divider></mat-divider>\r\n  </table>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-side-nav></app-side-nav>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Checkout</h1>\r\n<div class=\"carCardContainer\">\r\n  <div class=\"carCard\">\r\n    <mat-card>\r\n      <h4 *ngIf=\"!car\">Select a vehicle at the rentals tab!</h4>\r\n      <div class=\"link\" [routerLink]=\"\" *ngIf=\"car\">\r\n        <div class=\"crop\"><img src=\"{{carFolder + car.PictureUrl}}\" alt=\"{{car.CarType.Model}} image\" onerror=\"this.src='./../../assets/fallbackImages/Car_placeholder.jpg'\"></div>\r\n        <br>\r\n        {{car.CarType.Manufacturer}} {{car.CarType.Model}} - car Id: {{car.CarId}}<br><b>Mileage:</b> {{car.Mileage}}<br>\r\n        <b>Available:</b> {{car.Available}}<br><b>Reg. No. </b>{{car.CarNumber}}<br><b>Located in</b> {{car.Branch.Address}}\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n  <!--<form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">-->\r\n  <div class=\"carCard\" *ngIf=\"car\">\r\n    <mat-card *ngIf=\"rentalComplete\"><h2>Enjoy your Car!</h2></mat-card>\r\n    <mat-card *ngIf=\"!rentalComplete\">\r\n      <h3>Select dates for rental</h3>\r\n      <mat-form-field>\r\n        <input matInput (dateChange)=\"setDateStrings()\" [matDatepicker]=\"startDate\" [min]=\"minDate\" [(ngModel)]=\"sDate\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\r\n        <mat-datepicker #startDate></mat-datepicker>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput (dateChange)=\"setDateStrings()\" [matDatepicker]=\"endDate\" [min]=\"sDate ? sDate:minDate\" [(ngModel)]=\"eDate\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\r\n        <mat-datepicker #endDate></mat-datepicker>\r\n      </mat-form-field>\r\n      <div *ngIf=\"sDate && eDate\">\r\n        From {{sString | date : 'd/M/yy'}}<br> till {{eString | date : 'd/M/yy'}}<br>\r\n        at {{car.CarType.PricePerDay | currency: 'GBP'}} per day<br>\r\n        totals {{car.CarType.PricePerDay*daysDifference | currency: 'GBP'}}<br>\r\n        for {{daysDifference}} days<br>\r\n        {{car.CarType.PricePerDayOver | currency: 'GBP'}} per day past {{eDate | date :'shortDate' | date : 'd/M/yy'}}<br>\r\n        Please return punctually!\r\n      </div>\r\n      <button mat-raised-button type=\"submit\" (click)=\"onSubmit()\" color=\"accent\">Accept</button>\r\n    </mat-card>\r\n  </div>\r\n  <!--</form>-->\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer-cards/footer-cards.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer-cards/footer-cards.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<mat-card ><br /><br />\r\nGREAT BIG CARD<br /><br />\r\n</mat-card><br />-->\r\n<div class=\"footer\" *ngIf=\"carsOfInterest.length>0\">\r\n  <mat-card class=\"footerTitle\">Recently viewed:\r\n     <button mat-button (click)=\"toggleHide()\">(toggle on/off)\r\n        <span *ngIf=\"displayWanted\">V</span>\r\n        <span style=\"font-size: 25px\" *ngIf=\"!displayWanted\">^</span>\r\n     </button>\r\n  </mat-card><br />\r\n  <div *ngIf=\"displayWanted\">\r\n  <mat-card class=\"footerCardPic\" *ngFor=\"let car of carsOfInterest\">\r\n    <img src=\"{{carFolder + car.PictureUrl}}\" /><br />\r\n    {{car.CarType.Manufacturer}}<br />{{car.CarType.Model}}\r\n\r\n  </mat-card>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Copyright © 5th Wheel 2019\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex\">\r\n  <div class=\"firstDiv\">\r\n    <img src={{assets+logo}} />\r\n    <mat-card class=\"quote firstQuote\">\r\n      <h1>5th Wheel Rentals</h1>\r\n      <h3>\"Luxury that no-one needs\"</h3>\r\n      <p>You'll be hard pressed to find another company as dedicated as us, when it comes to providing you with services totally superfluous to your needs.</p>\r\n      <p>Try us out! Our cars are all overpowered and largely impractical for urban use. </p>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div class=\"secondDiv\">\r\n    <div>\r\n      <img src={{assets+car1}} />\r\n    </div>\r\n    <mat-card class=\"quote secondQuote\">\r\n      <p>Aaron Fresh said \"J'adore les voitures de sport françaises chères. Où puis-je conduire la Bugatti Divo autres que la 5th Wheel?\"</p>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div class=\"thirdDiv\">\r\n    <div>\r\n      <img src={{assets+car2}} />\r\n    </div>\r\n    <mat-card class=\"quote thirdQuote\">\r\n      <p>Ben Chaimowitcz said \"Nowadays, my friends and I always drive to mountain ski resorts in a fleet of Lamborghinis.\"</p>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div class=\"secondDiv\">\r\n    <div>\r\n      <img src={{assets+car3}} />\r\n    </div>\r\n    <mat-card class=\"quote secondQuote\">\r\n      <p>Eli Romanov said \"זה לא בדיוק אותו שית\"</p>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\r\n  <h2>User Login</h2>\r\n  <mat-card class=\"box\">\r\n    <div class=\"container\">\r\n\r\n      <mat-form-field>\r\n        <mat-label>User name</mat-label>\r\n        <input matInput autocomplete=\"log_name\" [formControl]=\"usernameFormControl\" placeholder=\"Enter user name\">\r\n        <mat-icon matSuffix>lock</mat-icon>\r\n        <!--<mat-hint>Hint</mat-hint>-->\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput autocomplete=\"password\" placeholder=\"Enter your password\" [formControl]=\"passwordFormControl\" [type]=\"hide ? 'password' : 'text'\">\r\n        <button mat-icon-button matSuffix type=\"button\" (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n        </button>\r\n      </mat-form-field>\r\n      <br>\r\n      <div class=\"container\">\r\n\r\n        <button mat-raised-button color=\"accent\" type=\"submit\">Login <mat-icon matSuffix>edit</mat-icon></button>\r\n        <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"logOut()\">Logout</button><br />\r\n\r\n      </div>\r\n      <br />\r\n      <mat-divider></mat-divider>\r\n      <br />\r\n      <div class=\"container\">\r\n        <span>Not registered?</span>\r\n        <button mat-raised-button type=\"button\" (click)=\"regRoute()\">Register <mat-icon matSuffix>edit</mat-icon></button>\r\n      </div>\r\n    </div>\r\n  </mat-card>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/message/message.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/message/message.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <mat-card class=\"messageFrame\" *ngIf=\"display\">\r\n  <a (click)=\"hide()\">&times;</a>\r\n  <i class=\"fab fa-mailchimp fa-6x\"></i>\r\n  <div class=\"message\">\r\n    <h1>{{title}}</h1>\r\n    <p>{{body}}</p>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\r\n  <h2>User registration form</h2>\r\n  <mat-card class=\"box\">\r\n    <div class=\"container\">\r\n\r\n      <mat-form-field>\r\n        <mat-label>Full name</mat-label>\r\n        <input matInput [formControl]=\"nameFormControl\" placeholder=\"Enter name\">\r\n        <!--<mat-icon matSuffix>directions_car</mat-icon>-->\r\n      </mat-form-field>     <i class=\"fas fa-user fa-lg\"></i>\r\n      <br>\r\n      <!-- <mat-form-field appearance=\"outline\" appearance=\"fill\"> -->\r\n      <mat-form-field>\r\n        <mat-label>User name</mat-label>\r\n        <input matInput [formControl]=\"usernameFormControl\" placeholder=\"Enter user name\">\r\n\r\n        <!-- <mat-hint>Hint</mat-hint> -->\r\n      </mat-form-field>        <i class=\"fas fa-user-tag fa-lg\"></i>\r\n      <mat-form-field hintLabel=\"Requires 9 digits\">\r\n        <input matInput #input [formControl]=\"passportFormControl\" maxlength=\"9\" minlength=\"9\" placeholder=\"Enter passport number\">\r\n        <mat-hint align=\"end\">{{input.value?.length || 0}}/9</mat-hint>\r\n      </mat-form-field>\r\n      <br>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" [formControl]=\"dateFormControl\" placeholder=\"Enter birthdate\">\r\n        <mat-hint>optional</mat-hint>\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n      </mat-form-field>\r\n      <br>\r\n    </div>\r\n\r\n\r\n    <div class=\"container\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Enter your password\" [formControl]=\"passwordFormControl\" [type]=\"hide ? 'password' : 'text'\">\r\n        <a mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n        </a>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <mat-select [formControl]=\"genderFormControl\" placeholder=\"Select gender\">\r\n          <mat-option disabled value=\"\">Gender:</mat-option>\r\n          <mat-option value=\"Male\"><span><i class=\"fa fa-mars fa-lg\"></i></span>Male</mat-option>\r\n          <mat-option value=\"female\"><span><i class=\"fa fa-venus fa-lg\"></i></span>Female</mat-option>\r\n          <mat-option value=\"both\"><span id=\"spn\"><i class=\"fa fa-venus-mars fa-lg\"></i></span>Both</mat-option>\r\n          <mat-option value=\"neither\"><span><i class=\"fa fa-neuter fa-lg\"></i></span>Neither</mat-option>\r\n          <mat-option value=\"undecided\"><span><i class=\"fa fa-question fa-lg\"></i></span>Undecided</mat-option>\r\n        </mat-select>\r\n        <mat-hint align=\"end\">Hint select</mat-hint>\r\n      </mat-form-field>\r\n\r\n      <!-- </div>\r\n      </mat-card>\r\n      <mat-card class=\"box\">\r\n        <div class=\"container\"> -->\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput autocomplete=\"email\" placeholder=\"Email\" [formControl]=\"emailFormControl\">\r\n        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n          Please enter a valid email address\r\n        </mat-error>\r\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n          Email is <strong>required</strong>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-divider></mat-divider>\r\n      <br>\r\n      <mat-form-field>\r\n        <mat-label>Picture Url</mat-label>\r\n        <input matInput [formControl]=\"pictureFormControl\" placeholder=\"Enter url\">\r\n        <mat-hint>optional</mat-hint>\r\n        <mat-icon matSuffix>directions_car</mat-icon>\r\n      </mat-form-field>\r\n    </div>\r\n  </mat-card>\r\n  <div class=\"box\">\r\n    <button mat-raised-button primary type=\"submit\">Submit   <mat-icon matSuffix>edit</mat-icon></button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rentals/rentals.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rentals/rentals.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Select a vehicle</h1>\r\n<div class=\"cardContainer\">\r\n  <mat-card class=\"topCard\">\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <h4 *ngIf=\"carType\">Your chosen model: {{carType.Manufacturer}} {{carType.Model}} - ID {{carType.CarTypeId}}</h4>\r\n        <h3 *ngIf=\"!carType\">No model selected</h3>\r\n        <section class=\"switch\">\r\n          <mat-slide-toggle id=\"allCarsViewbtn\" (change)=\"viewAllCars()\" [(ngModel)]=\"allCarsView\" class=\"switch\" color=\"warning\">\r\n            <!--[disabled]=\"allCarsView\"-->\r\n            View all cars: {{allCarsView}}\r\n          </mat-slide-toggle>\r\n          <button class=\"extraMargin\" mat-raised-button color=\"accent\" (click)=\"backToSearch()\">Back to Search</button>\r\n        </section>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n   \r\n    <mat-card-content *ngIf=\"carType\">\r\n      <img class=\"modelPic\" *ngIf=\"carType\" src=\"{{carTypeFolder + carType.PictureUrl}}\" onerror=\"this.src='./../../assets/fallbackImages/Brand_placeholder.jpg'\" alt=\"Model pic\">\r\n      <div class=\"modelDetails\">\r\n        <b>Car type</b> {{carType.CarTypeId}}<br>\r\n        <b>Costs</b> {{carType.PricePerDay | currency: 'GBP'}} <b>per day</b><br>\r\n        {{carType.PricePerDayOver | currency: 'GBP'}} <b>overdue charge per day</b><br>\r\n        <b>Transmission: </b>{{carType.Transmission}}<br>\r\n      </div>\r\n      <!--<button mat-raised-button color=\"accent\" (click)=\"\">Select</button>-->\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"table\">\r\n    <h3 *ngIf=\"!usersRentals\">You have no past rentals</h3>\r\n    <h3 *ngIf=\"usersRentals\">Your past rentals:</h3>\r\n    <table *ngIf=\"usersRentals\" matSort (matSortChange)=\"sortData($event)\">\r\n      <!-- (matSortChange)=\"sortData($event)\"-->\r\n      <tr>\r\n        <th mat-sort-header=\"RentalsId\">Rental</th>\r\n        <th mat-sort-header=\"StartDate\">Began</th>\r\n        <th mat-sort-header=\"DueBackDate\">Ended</th>\r\n        <th mat-sort-header=\"ReturnedDate\">Returned</th>\r\n        <th mat-sort-header=\"CarId\">Car</th>\r\n      </tr>\r\n      <mat-divider></mat-divider>\r\n      <tr *ngFor=\"let r of sortedUsersRentals\">\r\n        <td>{{r.RentalsId}}</td>\r\n        <td>{{r.StartDate | date :'shortDate' | date: 'd/M/yy'}}</td>\r\n        <td>{{r.EndDate | date :'shortDate' | date: 'd/M/yy'}}</td>\r\n        <td>{{r.Returned | date :'shortDate' | date: 'd/M/yy'}}</td>\r\n        <td>{{r.CarId}} {{r.Car.CarType.Manufacturer}} {{r.Car.CarType.Model}}</td>\r\n      </tr>\r\n    </table>\r\n  </mat-card>\r\n</div>\r\n\r\n<h2 *ngIf=\"carType && !allCarsView\" class=\"extraMargin\">Cars of this model:</h2>\r\n<h2 *ngIf=\"!carType && !allCarsView\" class=\"extraMargin\">No cars selected</h2>\r\n<h2 *ngIf=\"allCarsView\" class=\"extraMargin\">All cars:</h2>\r\n<div class=\"carCardContainer\" *ngIf=\"carsForSelection\">\r\n  <mat-card class=\"carCard\" [class.growOnHover]=\"car.Available ? true : null\" [class.disabledCursor]=\"car.Available ? null : true\" *ngFor=\"let car of carsForSelection\">\r\n    <div class=\"link\" (click)=\"setServiceCar(car)\" [routerLink]=\"['/checkout']\" [class.disabledEvents]=\"car.Available ? null : true\">\r\n      <div class=\"crop\"><img src=\"{{carFolder + car.PictureUrl}}\" alt=\"{{car.CarType.Model}} image\" onerror=\"this.src = './../../assets/fallbackImages/Car_placeholder.jpg'\"></div>\r\n      <br>\r\n      {{car.CarType.Manufacturer}} {{car.CarType.Model}} - car Id: {{car.CarId}}<br><b>Mileage:</b> {{car.Mileage}}<br>\r\n      <b>Available:</b> {{car.Available}}<br><b>Reg. No. </b>{{car.CarNumber}}<br><b>Located in</b> {{car.Branch.Address}}\r\n\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n<!--<div class=\"trimmedimg\" style=\"background-image:url('{{car.PictureUrl}}');\"></div>-->\r\n<!--<img class=\"trimmedimg\" src=\"{{car.PictureUrl}}\" alt=\"{{car.CarType.Model}} image\">-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search-cars/search-cars.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search-cars/search-cars.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardContainer\">\r\n  <mat-card class=\"card\">\r\n    <h1> Select a car model</h1>\r\n    <div class=\"inline lftmrgn\">\r\n      <h4>Search by Manufacturer</h4>\r\n      <mat-form-field>\r\n        <mat-label>Manufacturer</mat-label>\r\n        <mat-select name=\"make\" class=\"form-control\" (selectionChange)=\"change()\" [(ngModel)]=\"selected.Manufacturer\">\r\n          <mat-option>None</mat-option>\r\n          <mat-option *ngFor=\"let manufacturer of Manufacturers\" [value]=\"manufacturer\">{{manufacturer}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"inline lftmrgn\">\r\n      <h4>Search by Model</h4>\r\n      <mat-form-field>\r\n        <mat-label>Model</mat-label>\r\n        <mat-select name=\"model\" class=\"form-control\" (selectionChange)=\"!AllCarsView ? toggle(): toggle2()\" [(ngModel)]=\"selected.Model\">\r\n          <mat-option>None</mat-option>\r\n          <mat-option *ngFor=\"let type of reducedModels\" [value]=\"type.Model\">{{type.Model}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"inline lftmrgn\">\r\n      <h4>Search by Year</h4>\r\n      <mat-form-field>\r\n        <mat-label>Year</mat-label>\r\n        <mat-select name=\"year\" class=\"form-control\" (selectionChange)=\"!AllCarsView ? toggle(): toggle2()\" [(ngModel)]=\"selected.Year\">\r\n          <mat-option>None</mat-option>\r\n          <mat-option *ngFor=\"let year of Years\" [value]=\"year\">{{year}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"inline lftmrgn\">\r\n      <h4>Search by text</h4>\r\n      <mat-form-field>\r\n        <mat-label>Text</mat-label>\r\n        <input matInput name=\"text\" class=\"form-control\" (change)=\"!AllCarsView ? toggle(): toggle2()\" [(ngModel)]=\"selected.Text\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n  </mat-card>\r\n</div>\r\n\r\n<div class=\"cardContainer\">\r\n  <mat-card class=\"card\">\r\n    <h2 class=\"inline btmmrgn\">Showing:</h2>\r\n    <div class=\"inline lftmrgn\">\r\n      <h3>manual</h3>\r\n      <section class=\"switch\">\r\n        <mat-slide-toggle (change)=\"!AllCarsView ? toggle(): toggle2()\" [(ngModel)]=\"switch.Manual\" class=\"switch\" color=\"primary\">\r\n          {{switch.Manual}}\r\n        </mat-slide-toggle>\r\n      </section>\r\n    </div>\r\n    <div class=\"inline lftmrgn\">\r\n      <h3>automatic</h3>\r\n      <section class=\"switch\">\r\n        <mat-slide-toggle (change)=\"!AllCarsView ? toggle(): toggle2()\" [(ngModel)]=\"switch.Automatic\" class=\"switch\" color=\"primary\">\r\n          {{switch.Automatic}}\r\n        </mat-slide-toggle>\r\n      </section>\r\n    </div>\r\n    <div class=\"inline lftmrgn\">\r\n      <h3>unavailable</h3>\r\n      <section class=\"switch\">\r\n        <mat-slide-toggle (change)=\"!AllCarsView ? toggle(): toggle2()\" [(ngModel)]=\"switch.Unavailable\" class=\"switch\" color=\"warning\">\r\n          {{switch.Unavailable}}\r\n        </mat-slide-toggle>\r\n      </section>\r\n    </div>\r\n    <button mat-raised-button color=\"accent\" (click)=\"rentals_allCars()\">\r\n    <span *ngIf=\"!AllCarsView\">Switch to ALL CARS view</span>\r\n    <span *ngIf=\"AllCarsView\">Switch to MODELS view</span></button>\r\n  </mat-card>\r\n</div>\r\n<!--LOADING SPINNER-->\r\n<div class=\"flex\"><mat-spinner *ngIf=\"!displayTypes\" color=\"warn\"></mat-spinner></div>\r\n\r\n<div *ngIf=\"!AllCarsView\" class=\"carCardContainer carTypeCardContainer\">\r\n  <mat-card class=\"carCard\" *ngFor=\"let car of displayTypes\">\r\n      <mat-card-title class=\"twoLine\">\r\n        <h4>{{car.Manufacturer}} {{car.Model}} {{car.Id}}</h4>\r\n      </mat-card-title>\r\n\r\n    <div class=\"carTypeImgSize\">\r\n      <img src=\"{{carTypeFolder + car.PictureUrl}}\" onerror= \"this.src = ''\" alt=\"Car pic\">\r\n    </div>\r\n\r\n    <mat-card-content>\r\n      Costs {{car.PricePerDay | currency: 'GBP'}} per day<br>\r\n      Transmission: {{car.Transmission}}<br>\r\n      <button mat-raised-button color=\"accent\" (click)=\"rent(car)\">Select model</button>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n<div *ngIf=\"AllCarsView\" class=\"carCardContainer\">\r\n  <mat-card [class.disabledCursor]=\"car.Available ? null : true\" class=\"carCard\" *ngFor=\"let car of displayCars\">\r\n      <mat-card-title >\r\n        <div>{{car.CarType.Manufacturer}}<br>{{car.CarType.Model}}</div>\r\n      </mat-card-title>\r\n      <div class=\"carImgSize\">\r\n        <img src=\"{{carFolder + car.PictureUrl}}\" alt=\"Car pic\" title=\"{{car.CarType.Manufacturer}} {{car.CarType.Model}}\">\r\n      </div>\r\n    <mat-card-content>\r\n      <b>Mileage:</b> {{car.Mileage}}<br>\r\n      <b>Available:</b> {{car.Available}}<br><b>Reg. No. </b>{{car.CarNumber}}<br><b>Located in</b> {{car.Branch.Address}}<br>\r\n      <b>Transmission:</b> {{car.CarType.Transmission}}<br>\r\n      Costs {{car.CarType.PricePerDay | currency: 'GBP'}} per day<br>\r\n      <button mat-raised-button color=\"accent\" (click)=\"rent(car.CarType)\">Select model</button>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/side-nav/side-nav.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/side-nav/side-nav.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport\r\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n      [opened]=\"((isHandset$ | async) === false) && loggedUser && loggedUser.Permission >= 1\">\r\n    <mat-toolbar>Admin menu</mat-toolbar>\r\n    <mat-nav-list>\r\n      <!--<a mat-list-item routerLink=\"/home\" routerLinkActive=\"active\"><div class=\"iconbox\"><i class=\"fa fa-home fa-lg\"></i></div><label>Home</label></a>\r\n  <a mat-list-item routerLink=\"/search\"><div class=\"iconbox\"><i class=\"fas fa-search\"></i></div><label>Search</label></a>\r\n  <a mat-list-item routerLink=\"/rentals\" [class.disabled]=\"loggedIn ? null : true\"><div class=\"iconbox\"><i class=\"fa fa-car fa-lg\"></i></div><label>Rentals</label></a>\r\n  <a mat-list-item routerLink=\"/checkout\" [class.disabled]=\"loggedIn ? null : true\"><div class=\"iconbox\"><i class=\"fa fa-pound-sign fa-lg\"></i></div><label>Checkout</label></a>\r\n  <mat-divider></mat-divider>\r\n  <a mat-list-item routerLink=\"/login\"><div class=\"iconbox\"><i class=\"fa fa-address-card fa-lg inline\"></i></div><label>Login</label></a>\r\n  <a mat-list-item routerLink=\"/register\"><div class=\"iconbox\"><i class=\"fab fa-stack-overflow fa-lg\"></i></div><label>Register</label></a>-->\r\n      <mat-divider></mat-divider>\r\n      <a class=\"link\" *ngIf=\"loggedUser && loggedUser.Permission == 2\" mat-list-item routerLink=\"/viewRentals\"><div class=\"iconbox\"><i class=\"fas fa-tachometer-alt fa-lg\"></i></div><label>View Rentals</label></a>\r\n      <a class=\"link\" *ngIf=\"loggedUser && loggedUser.Permission >= 1\" mat-list-item routerLink=\"/manageReturns\"><div class=\"iconbox\"><i class=\"fas fa-gas-pump fa-lg\"></i></div><label>Manage Returns</label></a>\r\n      <a class=\"link\" *ngIf=\"loggedUser && loggedUser.Permission == 2\" mat-list-item routerLink=\"/manageCars\"><div class=\"iconbox\"><i class=\"fas fa-car fa-lg\"></i></div><label>Manage Cars</label></a>\r\n      <a class=\"link\" *ngIf=\"loggedUser && loggedUser.Permission == 2\" mat-list-item routerLink=\"/manageCarTypes\"><div class=\"iconbox\"><i class=\"fas fa-car-side fa-lg\"></i></div><label>Manage Car Types</label></a>\r\n      <a class=\"link\" *ngIf=\"loggedUser && loggedUser.Permission == 2\" mat-list-item routerLink=\"/manageUsers\"><div class=\"iconbox\"><i class=\"fas fa-users fa-lg\"></i></div><label>Manage Users</label></a>\r\n      <mat-divider></mat-divider>\r\n      <a class=\"link\" mat-list-item routerLink=\"/error\"><div class=\"iconbox\"><i class=\"fas fa-skull fa-lg\"></i></div><label>Not Found</label></a>\r\n      <img class=\"logo\" type=file src=\".\\..\\..\\assets\\5thWheel6.png\" />\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <button type=\"button\"\r\n              aria-label=\"Toggle sidenav\"\r\n              mat-icon-button\r\n              (click)=\"drawer.toggle()\"\r\n              *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <img class=\"logo_nav\" type=file src=\".\\..\\..\\assets\\5thWh_line_BW.png\" />\r\n      <div class=\"link\" mat-list-item routerLink=\"/home\" routerLinkActive=\"active\"><div class=\"iconbox\"><i class=\"fa fa-home fa-lg\"></i></div><label *ngIf=\"drawer.mode == 'side'\">QHome</label></div>\r\n      <div class=\"link nudge\" mat-list-item routerLink=\"/search\"><div class=\"iconbox\"><i class=\"fas fa-search\"></i></div><label *ngIf=\"drawer.mode == 'side'\">Search</label></div>\r\n      <div class=\"link\" mat-list-item routerLink=\"/rentals\" [class.disabled]=\"loggedIn ? null : true\"><div class=\"iconbox\"><i class=\"fa fa-car fa-lg\"></i></div><label *ngIf=\"drawer.mode == 'side'\">Rentals</label></div>\r\n      <div class=\"link nudge\" mat-list-item routerLink=\"/checkout\" [class.disabled]=\"loggedIn ? null : true\"><div class=\"iconbox\"><i class=\"fas fa-cash-register fa-lg\"></i></div><label *ngIf=\"drawer.mode == 'side'\">Checkout</label></div>\r\n      <mat-divider></mat-divider>\r\n      <div class=\"link nudge\" mat-list-item routerLink=\"/login\"><div class=\"iconbox\"><i class=\"fa fa-address-card fa-lg inline\"></i></div><label *ngIf=\"drawer.mode == 'side'\">Login</label></div>\r\n      <div class=\"link\" mat-list-item routerLink=\"/register\"><div class=\"iconbox\"><i class=\"fas fa-user-plus fa-lg\"></i></div><label *ngIf=\"drawer.mode == 'side'\">Register</label></div>\r\n      <mat-divider></mat-divider>\r\n      <span class=\"example-fill-remaining-space\"></span>\r\n      <!--<mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>-->\r\n      <span class=\"right\" *ngIf=\"!loggedUser\">Logged out</span><a *ngIf=\"loggedUser\" (click)=\"calltoLogout()\">Log out</a><mat-divider style=\"height:60px\" [vertical]=\"true\"></mat-divider><div *ngIf=\"loggedUser\" class=\"right rghtMrgn\">Logged in as {{loggedUser.UserName}}</div>\r\n\r\n    </mat-toolbar>\r\n    <!--APP CONTENT-->\r\n    <div class=\"routerWrapper\" [@slideInAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\r\n      <router-outlet #o=\"outlet\"></router-outlet>\r\n    </div>\r\n    <app-message></app-message>\r\n    <app-footer></app-footer>\r\n    <app-footer-cards *ngIf=\"router.url === '/search'\"></app-footer-cards>\r\n    <!--APP CONTENT-->\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n<!--<button mat-icon-button><mat-icon>child_friendly</mat-icon>    Login</button>-->\r\n"

/***/ }),

/***/ "./src/app/Classes/Car.ts":
/*!********************************!*\
  !*** ./src/app/Classes/Car.ts ***!
  \********************************/
/*! exports provided: Car */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Car", function() { return Car; });
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());



/***/ }),

/***/ "./src/app/Classes/CarType.ts":
/*!************************************!*\
  !*** ./src/app/Classes/CarType.ts ***!
  \************************************/
/*! exports provided: CarType, Gear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarType", function() { return CarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gear", function() { return Gear; });
var CarType = /** @class */ (function () {
    function CarType() {
    }
    return CarType;
}());

var Gear;
(function (Gear) {
    Gear[Gear["automatic"] = 0] = "automatic";
    Gear[Gear["manual"] = 1] = "manual";
})(Gear || (Gear = {}));


/***/ }),

/***/ "./src/app/PageNotFoundComponent.ts":
/*!******************************************!*\
  !*** ./src/app/PageNotFoundComponent.ts ***!
  \******************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");



var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(messageService) {
        this.messageService = messageService;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        var m = new _services_message_service__WEBPACK_IMPORTED_MODULE_2__["CarMessage"]("Oops!", "check that Url");
        this.messageService.changeMessage(m);
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'Page-not-found',
            template: "<div class=\"cardContainer\"><mat-card class=\"card\">\n  <mat-card-header>\n    <mat-card-title>\n      Error\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <h1>404 - Page Not Found</h1>\n<h3>5th Wheel contains some useful pages, and this is not one of them</h3><br>\n  </mat-card-content>\n\n</mat-card>\n</div>\n<i class=\"fas fa-car-side fa-3x anim1\"></i><i class=\"fas fa-car-side fa-3x anim2\"></i><i class=\"fas fa-truck-monster fa-3x anim3\"></i>",
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());

//<i class="fa fa-check fa-3x" > </i><i class="fa fa-subway fa-3x"></i > <i class="fa fa-space-shuttle fa-3x" > </i>
//  < i class="fa fa-syringe fa-3x" > </i><i class="fa fa-sliders-h fa-3x"></i > <i class="fab fa-steam fa-3x" > </i>
//    < i class="fab fa-studiovinari fa-3x" > </i><i class="fa fa-address-card fa-3x inline"></i > <i class="fab fa-gitkraken fa-3x" > </i>
//      < i class="fa fa-key fa-3x" > </i><i class="fas fa-skull fa-3x"></i > <i class="fab fa-old-republic fa-3x" > </i>
//        < i class="fas fa-synagogue fa-3x" > </i><i class="fas fa-star-of-david fa-3x"></i >
//          <i class="fas fa-skull-crossbones fa-3x" > </i>
//            < i class="fas fa-snowboarding fa-3x" > </i><i class="fas fa-snowman fa-3x"></i > <i class="fab fa-suse fa-3x" > </i>
//              < i class="fas fa-radiation fa-3x" > </i><i class="fas fa-dungeon fa-3x"></i >
//<i class="fas fa-skull fa-3x"></i><i class="fas fa-skull fa-3x"></i><i class="fas fa-skull fa-3x"></i>


/***/ }),

/***/ "./src/app/Premission1+/manage-car-types/carTypeModal.ts":
/*!***************************************************************!*\
  !*** ./src/app/Premission1+/manage-car-types/carTypeModal.ts ***!
  \***************************************************************/
/*! exports provided: carTypeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carTypeModal", function() { return carTypeModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var carTypeModal = /** @class */ (function () {
    function carTypeModal(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.editedCar = {};
    }
    carTypeModal.prototype.ngOnInit = function () {
        this.sendBackData = this.data.car;
    };
    carTypeModal.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    carTypeModal.prototype.save = function () {
        console.log();
        //this.sendBackData.CarTypeId = this.editedCar.CarTypeId ? this.editedCar.CarTypeId : this.sendBackData.CarTypeId;
        this.sendBackData.Manufacturer = this.editedCar.Manufacturer ? this.editedCar.Manufacturer : this.sendBackData.Manufacturer;
        this.sendBackData.Model = this.editedCar.Model ? this.editedCar.Model : this.sendBackData.Model;
        this.sendBackData.PricePerDay = this.editedCar.PricePerDay ? this.editedCar.PricePerDay : this.sendBackData.PricePerDay;
        this.sendBackData.PricePerDayOver = this.editedCar.PricePerDayOver ? this.editedCar.PricePerDayOver : this.sendBackData.PricePerDayOver;
        this.sendBackData.Transmission = this.editedCar.Transmission ? this.editedCar.Transmission : this.sendBackData.Transmission;
        this.sendBackData.YearOfManufacture = this.editedCar.YearOfManufacture ? this.editedCar.YearOfManufacture : this.sendBackData.YearOfManufacture;
        this.sendBackData.PictureUrl = this.editedCar.PictureUrl ? this.editedCar.PictureUrl : this.sendBackData.PictureUrl;
        this.dialogRef.close(this.sendBackData);
    };
    carTypeModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'carTypeModal',
            template: __webpack_require__(/*! raw-loader!./carTypeModal.html */ "./node_modules/raw-loader/index.js!./src/app/Premission1+/manage-car-types/carTypeModal.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], carTypeModal);
    return carTypeModal;
}());



/***/ }),

/***/ "./src/app/Premission1+/manage-car-types/manage-car-types.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/Premission1+/manage-car-types/manage-car-types.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n}\n\n.tableWrapper {\n  margin: 15px;\n  max-width: 1210px;\n}\n\ntd {\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\nbutton {\n  margin-right: 10px;\n}\n\n.deleteModal {\n  width: 300px;\n  height: 120px;\n  /*align-self: center;\n  margin: auto;*/\n  position: fixed;\n  top: 30%;\n}\n\n.modalAligner {\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.sheet {\n  top: 0px;\n  left: 0px;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJlbWlzc2lvbjErL21hbmFnZS1jYXItdHlwZXMvQzpcXFVzZXJzXFxyeXRlbFxcRGVza3RvcFxcQ2FyUmVudGFsXFxDYXJSZW50YWw0XFxBbmd1bGFyQXBwL3NyY1xcYXBwXFxQcmVtaXNzaW9uMStcXG1hbmFnZS1jYXItdHlwZXNcXG1hbmFnZS1jYXItdHlwZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1ByZW1pc3Npb24xKy9tYW5hZ2UtY2FyLXR5cGVzL21hbmFnZS1jYXItdHlwZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0E7Z0JBQUE7RUFFQSxlQUFBO0VBQ0EsUUFBQTtBQ0VGOztBREFBO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEREE7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL1ByZW1pc3Npb24xKy9tYW5hZ2UtY2FyLXR5cGVzL21hbmFnZS1jYXItdHlwZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGFibGVXcmFwcGVyIHtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgbWF4LXdpZHRoOiAxMjEwcHg7XHJcbn1cclxudGQge1xyXG4gIG1heC13aWR0aDogMTUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweFxyXG59XHJcbi8vREVMRVRJTkdcclxuLmRlbGV0ZU1vZGFsIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICAvKmFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87Ki9cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAzMCU7XHJcbn1cclxuLm1vZGFsQWxpZ25lciB7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnNoZWV0IHtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuIiwiaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWJsZVdyYXBwZXIge1xuICBtYXJnaW46IDE1cHg7XG4gIG1heC13aWR0aDogMTIxMHB4O1xufVxuXG50ZCB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5kZWxldGVNb2RhbCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgLyphbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bzsqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMzAlO1xufVxuXG4ubW9kYWxBbGlnbmVyIHtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaGVldCB7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMC42O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Premission1+/manage-car-types/manage-car-types.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Premission1+/manage-car-types/manage-car-types.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ManageCarTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCarTypesComponent", function() { return ManageCarTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_car_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/car-data.service */ "./src/app/services/car-data.service.ts");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_Classes_CarType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Classes/CarType */ "./src/app/Classes/CarType.ts");
/* harmony import */ var _carTypeModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carTypeModal */ "./src/app/Premission1+/manage-car-types/carTypeModal.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var ManageCarTypesComponent = /** @class */ (function () {
    function ManageCarTypesComponent(router, carService, messageService, dialog) {
        this.router = router;
        this.carService = carService;
        this.messageService = messageService;
        this.dialog = dialog;
        this.deleteCheck = false;
        this.deleteCheckOverride = false;
        this.newType = new src_app_Classes_CarType__WEBPACK_IMPORTED_MODULE_5__["CarType"];
    }
    ManageCarTypesComponent.prototype.ngOnInit = function () {
        this.summonCarTypes();
    };
    ManageCarTypesComponent.prototype.openDialog = function (car) {
        var _this = this;
        var dialogRef = this.dialog.open(_carTypeModal__WEBPACK_IMPORTED_MODULE_6__["carTypeModal"], {
            width: '250px',
            data: { car: car }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.returnedData = result;
                _this.saveToDatabase(_this.returnedData);
            }
            else {
                var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["CarMessage"]("No edit done", "No input");
                _this.messageService.changeMessage(m);
            }
        });
    };
    ManageCarTypesComponent.prototype.saveToDatabase = function (recievedCar) {
        var _this = this;
        console.log(recievedCar);
        if (this.newTypeSwitch == true) {
            this.carService.newCarType(recievedCar)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
                .subscribe(function (data) {
                var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["CarMessage"]("Creating carType...", "" + data);
                _this.messageService.changeMessage(m);
            }, function (error) {
                var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["CarMessage"]("Error!", "" + error);
                _this.messageService.changeMessage(m);
            });
            this.newTypeSwitch = false;
        }
        else {
            this.carService.editCarType(recievedCar)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
                .subscribe(function (data) {
                var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["CarMessage"]("Editing carType...", "" + data);
                _this.messageService.changeMessage(m);
            }, function (error) {
                var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["CarMessage"]("Error!", "" + error);
                _this.messageService.changeMessage(m);
            });
        }
    };
    ManageCarTypesComponent.prototype.summonCarTypes = function () {
        var _this = this;
        this.carService.getCarTypes().subscribe(function (cars) {
            _this.sortedCarTypes = _this.carTypes = cars;
            console.log( /*JSON.stringify(this.sortedCarTypes, null, 2)*/);
        });
    };
    ;
    ManageCarTypesComponent.prototype.deleteAttempt = function (carType) {
        this.slatedForDelete = carType;
        if (this.deleteCheckOverride == false) {
            this.deleteCheck = true;
        }
        else
            this.delete();
    };
    ManageCarTypesComponent.prototype.removeDeleteCheck = function () {
        this.deleteCheckOverride = true;
        var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["CarMessage"]("Warning", "Delete responsibly");
        this.messageService.changeMessage(m);
        this.deleteCheck = false;
    };
    ManageCarTypesComponent.prototype.delete = function () {
        var _this = this;
        var type = this.slatedForDelete;
        var id = type.CarTypeId;
        this.carService.deleteCarTypes(id)
            .subscribe(function (res) {
            _this.summonCarTypes();
            var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["CarMessage"]("Success", "CarType no. " + id + " was deleted");
            _this.messageService.changeMessage(m);
        }, function (err) {
            console.log(err);
            //     this.isLoadingResults = false;
            var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["CarMessage"]("Error!", "CarType no. " + id + " was NOT deleted");
            _this.messageService.changeMessage(m);
        });
    };
    ManageCarTypesComponent.prototype.newCarTypeSwitcher = function () {
        this.newTypeSwitch = true;
    };
    //carType table sort function
    ManageCarTypesComponent.prototype.sortData = function (sort) {
        var data = this.carTypes;
        //    debugger;
        if (!sort.active || sort.direction === '') {
            this.sortedCarTypes = data;
            return;
        }
        this.sortedCarTypes = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'CarTypeId': return compare(a.CarTypeId, b.CarTypeId, isAsc);
                case 'Manufacturer': return compare(a.Manufacturer, b.Manufacturer, isAsc);
                case 'Model': return compare(a.Model, b.Model, isAsc);
                case 'PricePerDay': return compare(a.PricePerDay, b.PricePerDay, isAsc);
                case 'PriceOverdue': return compare(a.PricePerDayOver, b.PricePerDayOver, isAsc);
                case 'YearOfManufacture': return compare(a.YearOfManufacture, b.YearOfManufacture, isAsc);
                case 'Transmission': return compare(a.Transmission, b.Transmission, isAsc);
                default: return 0;
            }
        });
    };
    ManageCarTypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'manage-car-types',
            template: __webpack_require__(/*! raw-loader!./manage-car-types.component.html */ "./node_modules/raw-loader/index.js!./src/app/Premission1+/manage-car-types/manage-car-types.component.html"),
            styles: [__webpack_require__(/*! ./manage-car-types.component.scss */ "./src/app/Premission1+/manage-car-types/manage-car-types.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_services_car_data_service__WEBPACK_IMPORTED_MODULE_2__["CarDataService"],
            src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ManageCarTypesComponent);
    return ManageCarTypesComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/Premission1+/manage-cars/carsModal.ts":
/*!*******************************************************!*\
  !*** ./src/app/Premission1+/manage-cars/carsModal.ts ***!
  \*******************************************************/
/*! exports provided: carsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carsModal", function() { return carsModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_car_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/car-data.service */ "./src/app/services/car-data.service.ts");




var carsModal = /** @class */ (function () {
    function carsModal(dialogRef, data, carService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.carService = carService;
        this.editedCar = {};
    }
    carsModal.prototype.ngOnInit = function () {
        this.sendBackData = this.data.car;
        this.editedCar = this.data.car; //this.carService.findCar()
        if (this.data.newCarSwitch == true) {
        }
    };
    carsModal.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    carsModal.prototype.save = function () {
        console.log(this.editedCar);
        this.sendBackData.CarId = this.editedCar.CarId ? this.editedCar.CarId : this.sendBackData.CarId;
        this.sendBackData.CarType.CarTypeId = this.editedCar.CarTypeId ? this.editedCar.CarTypeId : this.sendBackData.CarType.CarTypeId;
        this.sendBackData.CarNumber = this.editedCar.CarNumber ? this.editedCar.CarNumber : this.sendBackData.CarNumber;
        this.sendBackData.Mileage = this.editedCar.Mileage ? this.editedCar.Mileage : this.sendBackData.Mileage;
        this.sendBackData.FitForRental = this.editedCar.FitForRental != null ? this.editedCar.FitForRental : this.sendBackData.FitForRental;
        this.sendBackData.Available = this.editedCar.Available != null ? this.editedCar.Available : this.sendBackData.Available;
        this.sendBackData.Branch.BranchId = this.editedCar.BranchId ? this.editedCar.BranchId : this.sendBackData.Branch.BranchId;
        this.sendBackData.PictureUrl = this.editedCar.PictureUrl ? this.editedCar.PictureUrl : this.sendBackData.PictureUrl;
        this.dialogRef.close(this.sendBackData);
    };
    carsModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'carsModal',
            template: __webpack_require__(/*! raw-loader!./carsModal.html */ "./node_modules/raw-loader/index.js!./src/app/Premission1+/manage-cars/carsModal.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_car_data_service__WEBPACK_IMPORTED_MODULE_3__["CarDataService"]])
    ], carsModal);
    return carsModal;
}());



/***/ }),

/***/ "./src/app/Premission1+/manage-cars/manage-cars.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/Premission1+/manage-cars/manage-cars.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  width: 100%;\n}\n\nh2 {\n  text-align: center;\n}\n\ntd {\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.tableWrapper {\n  margin: 15px;\n  max-width: 1010px;\n  overflow-x: auto;\n}\n\n.cellDiv div {\n  display: inline-block;\n  max-width: 50px;\n}\n\n.column {\n  display: inline-block;\n  width: 90px;\n}\n\n.column input {\n  text-align: center;\n}\n\n.tableCard {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nbutton {\n  margin-right: 10px;\n}\n\n.deleteModal {\n  width: 300px;\n  height: 120px;\n  /*align-self: center;\n  margin: auto;*/\n  position: fixed;\n  top: 30%;\n}\n\n.modalAligner {\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.sheet {\n  top: 0px;\n  left: 0px;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  opacity: 0.3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJlbWlzc2lvbjErL21hbmFnZS1jYXJzL0M6XFxVc2Vyc1xccnl0ZWxcXERlc2t0b3BcXENhclJlbnRhbFxcQ2FyUmVudGFsNFxcQW5ndWxhckFwcC9zcmNcXGFwcFxcUHJlbWlzc2lvbjErXFxtYW5hZ2UtY2Fyc1xcbWFuYWdlLWNhcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1ByZW1pc3Npb24xKy9tYW5hZ2UtY2Fycy9tYW5hZ2UtY2Fycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNJRjs7QURGQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0tGOztBREhBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDTUY7O0FESkE7RUFDRSxrQkFBQTtBQ09GOztBRExBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDUUY7O0FETkE7RUFDRSxrQkFBQTtBQ1NGOztBRE5BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQTtnQkFBQTtFQUVBLGVBQUE7RUFDQSxRQUFBO0FDU0Y7O0FETkE7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNTRjs7QUROQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ1NGIiwiZmlsZSI6InNyYy9hcHAvUHJlbWlzc2lvbjErL21hbmFnZS1jYXJzL21hbmFnZS1jYXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxudGQge1xyXG4gIG1heC13aWR0aDogMTUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi50YWJsZVdyYXBwZXIge1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBtYXgtd2lkdGg6IDEwMTBweDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcbi5jZWxsRGl2IGRpdiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1heC13aWR0aDogNTBweDtcclxufVxyXG4uY29sdW1uIHtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB3aWR0aDogOTBweDtcclxufVxyXG4uY29sdW1uIGlucHV0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRhYmxlQ2FyZCB7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHhcclxufVxyXG4vL0RFTEVUSU5HXHJcbi5kZWxldGVNb2RhbCB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgLyphbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvOyovXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMzAlO1xyXG59XHJcblxyXG4ubW9kYWxBbGlnbmVyIHtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNoZWV0IHtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuIiwiLmZ1bGwtd2lkdGgtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi50YWJsZVdyYXBwZXIge1xuICBtYXJnaW46IDE1cHg7XG4gIG1heC13aWR0aDogMTAxMHB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4uY2VsbERpdiBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogNTBweDtcbn1cblxuLmNvbHVtbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDkwcHg7XG59XG5cbi5jb2x1bW4gaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWJsZUNhcmQge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmRlbGV0ZU1vZGFsIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICAvKmFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvOyovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAzMCU7XG59XG5cbi5tb2RhbEFsaWduZXIge1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNoZWV0IHtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwLjM7XG59Il19 */"

/***/ }),

/***/ "./src/app/Premission1+/manage-cars/manage-cars.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Premission1+/manage-cars/manage-cars.component.ts ***!
  \*******************************************************************/
/*! exports provided: ManageCarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCarsComponent", function() { return ManageCarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_car_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/car-data.service */ "./src/app/services/car-data.service.ts");
/* harmony import */ var src_app_Classes_Car__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Classes/Car */ "./src/app/Classes/Car.ts");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _carsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carsModal */ "./src/app/Premission1+/manage-cars/carsModal.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var ManageCarsComponent = /** @class */ (function () {
    function ManageCarsComponent(router, carService, messageService, dialog) {
        this.router = router;
        this.carService = carService;
        this.messageService = messageService;
        this.dialog = dialog;
        this.cars = [];
        this.deleteCheck = false;
        this.deleteCheckOverride = false;
        this.newCar = new src_app_Classes_Car__WEBPACK_IMPORTED_MODULE_3__["Car"];
        this.newCarSwitch = false;
    }
    //carForm: FormGroup;
    //PictureUrlFormControl = new FormControl('', []);
    //CarIdFormControl = new FormControl('', []);
    //CarTypeIdFormControl = new FormControl('', []);
    //CarNumberFormControl = new FormControl('', []);
    //MileageFormControl = new FormControl('', []);
    //FitForRentFormControl = new FormControl('', []);
    //AvailableFormControl = new FormControl('', []);
    //BranchIdFormControl = new FormControl('', []);
    ManageCarsComponent.prototype.ngOnInit = function () {
        this.summonCars();
    };
    ManageCarsComponent.prototype.openDialog = function (car) {
        var _this = this;
        var dialogRef = this.dialog.open(_carsModal__WEBPACK_IMPORTED_MODULE_6__["carsModal"], {
            width: '250px',
            data: { car: car, newCarSwitch: this.newCarSwitch }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.returnedDate = result;
                _this.saveToDatabase(_this.returnedDate);
                _this.newCarSwitch = false;
            }
            else {
                var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["CarMessage"]("No edit done", "No input");
                _this.messageService.changeMessage(m);
            }
        });
    };
    ManageCarsComponent.prototype.saveToDatabase = function (recievedCar) {
        var _this = this;
        console.log(recievedCar);
        if (this.newCarSwitch == true) {
            this.carService.newCar(recievedCar)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
                .subscribe(function (data) {
                var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["CarMessage"]("Creating car...", "" + data);
                _this.messageService.changeMessage(m);
            }, function (error) {
                var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["CarMessage"]("Error!", "" + error);
                _this.messageService.changeMessage(m);
            });
        }
        else {
            this.carService.editCar(recievedCar)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
                .subscribe(function (data) {
                var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["CarMessage"]("Editing car...", "" + data);
                _this.messageService.changeMessage(m);
            }, function (error) {
                var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["CarMessage"]("Error!", "" + error);
                _this.messageService.changeMessage(m);
            });
        }
    };
    ManageCarsComponent.prototype.summonCars = function () {
        var _this = this;
        this.carService.getCars().subscribe(function (cars) {
            _this.sortedCars = _this.cars = cars;
            //    console.log(this.sortedCars)
            console.log( /*JSON.stringify(this.sortedCars, null, 2)*/);
        });
    };
    ManageCarsComponent.prototype.deleteAttempt = function (car) {
        this.slatedForDelete = car;
        if (this.deleteCheckOverride == false) {
            this.deleteCheck = true;
        }
        else
            this.delete();
    };
    ManageCarsComponent.prototype.removeDeleteCheck = function () {
        this.deleteCheckOverride = true;
        var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["CarMessage"]("Warning", "Delete responsibly");
        this.messageService.changeMessage(m);
        this.deleteCheck = false;
    };
    ManageCarsComponent.prototype.delete = function () {
        var _this = this;
        var car = this.slatedForDelete;
        var id = car.CarId;
        this.carService.deleteCars(id)
            .subscribe(function (res) {
            _this.summonCars();
            var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["CarMessage"]("Success", "Car no. " + id + " was deleted");
            _this.messageService.changeMessage(m);
        }, function (err) {
            console.log(err);
            //     this.isLoadingResults = false;
            var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["CarMessage"]("Error!", "Car no. " + id + " was NOT deleted");
            _this.messageService.changeMessage(m);
        });
        this.deleteCheck = false;
    };
    ManageCarsComponent.prototype.newCarSwitcher = function () {
        this.newCarSwitch = true;
    };
    //cars table sort function
    ManageCarsComponent.prototype.sortData = function (sort) {
        var data = this.cars;
        if (!sort.active || sort.direction === '') {
            this.sortedCars = data;
            return;
        }
        this.sortedCars = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'CarId': return compare(a.CarId, b.CarId, isAsc);
                case 'CarTypeId': return compare(a.CarType.CarTypeId, b.CarType.CarTypeId, isAsc);
                case 'Mileage': return compare(a.Mileage, b.Mileage, isAsc);
                case 'PictureUrl': return compare(a.PictureUrl, b.PictureUrl, isAsc);
                case 'FitForRental': return compare(a.FitForRental, b.FitForRental, isAsc);
                case 'BranchId': return compare(a.Branch.BranchId, b.Branch.BranchId, isAsc);
                case 'CarNumber': return compare(a.CarNumber, b.CarNumber, isAsc);
                case 'Available': return compare(a.Available, b.Available, isAsc);
                default: return 0;
            }
        });
    };
    ManageCarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'manage-cars',
            template: __webpack_require__(/*! raw-loader!./manage-cars.component.html */ "./node_modules/raw-loader/index.js!./src/app/Premission1+/manage-cars/manage-cars.component.html"),
            styles: [__webpack_require__(/*! ./manage-cars.component.scss */ "./src/app/Premission1+/manage-cars/manage-cars.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_services_car_data_service__WEBPACK_IMPORTED_MODULE_2__["CarDataService"],
            src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], ManageCarsComponent);
    return ManageCarsComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/Premission1+/manage-returns/manage-returns.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Premission1+/manage-returns/manage-returns.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  max-width: 480px;\n  margin: 15px;\n}\n\nh2 {\n  text-align: center;\n}\n\nbutton {\n  margin-right: 10px;\n}\n\n.leftMargin {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJlbWlzc2lvbjErL21hbmFnZS1yZXR1cm5zL0M6XFxVc2Vyc1xccnl0ZWxcXERlc2t0b3BcXENhclJlbnRhbFxcQ2FyUmVudGFsNFxcQW5ndWxhckFwcC9zcmNcXGFwcFxcUHJlbWlzc2lvbjErXFxtYW5hZ2UtcmV0dXJuc1xcbWFuYWdlLXJldHVybnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1ByZW1pc3Npb24xKy9tYW5hZ2UtcmV0dXJucy9tYW5hZ2UtcmV0dXJucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxpQkFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvUHJlbWlzc2lvbjErL21hbmFnZS1yZXR1cm5zL21hbmFnZS1yZXR1cm5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcclxuICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gIG1hcmdpbjogMTVweDtcclxufVxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5sZWZ0TWFyZ2luIHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4iLCIudGFibGUge1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICBtYXJnaW46IDE1cHg7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5sZWZ0TWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/Premission1+/manage-returns/manage-returns.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Premission1+/manage-returns/manage-returns.component.ts ***!
  \*************************************************************************/
/*! exports provided: ManageReturnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageReturnsComponent", function() { return ManageReturnsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_rental_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rental-data.service */ "./src/app/services/rental-data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _returnsModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./returnsModal */ "./src/app/Premission1+/manage-returns/returnsModal.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_car_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/car-data.service */ "./src/app/services/car-data.service.ts");










var ManageReturnsComponent = /** @class */ (function () {
    function ManageReturnsComponent(router, rentalService, messageService, dialog, carService) {
        this.router = router;
        this.rentalService = rentalService;
        this.messageService = messageService;
        this.dialog = dialog;
        this.carService = carService;
        this.dateFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', []);
    }
    ManageReturnsComponent.prototype.ngOnInit = function () {
        this.returnForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            returned: this.dateFormControl,
        });
        this.summonCars();
        this.summonRentals();
    };
    ManageReturnsComponent.prototype.openDialog = function (rental) {
        var _this = this;
        var dialogRef = this.dialog.open(_returnsModal__WEBPACK_IMPORTED_MODULE_7__["returnsModal"], {
            width: '250px',
            data: { rental: rental }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.recievedRental = result;
                _this.saveToDatabase(_this.recievedRental);
            }
            else {
                var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["CarMessage"]("No edit done", "No input");
                _this.messageService.changeMessage(m);
            }
        });
    };
    ManageReturnsComponent.prototype.saveToDatabase = function (recievedRental) {
        var _this = this;
        this.rentalService.return(recievedRental)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
            .subscribe(function (data) {
            var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["CarMessage"]("Returning car...", "" + data);
            _this.messageService.changeMessage(m);
        }, function (error) {
            var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["CarMessage"]("Error!", "" + error);
            _this.messageService.changeMessage(m);
        });
        //MAKE CAR AVAILABLE AGAIN
        this.car = this.cars.find(function (c) { return c.CarId == recievedRental.Car.CarId; });
        this.car.Available = true;
        this.carService.editCar(this.car)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
            .subscribe(function (data) {
            //var m: CarMessage = new CarMessage("Returning car...", `${data}`);
            //this.messageService.changeMessage(m)
        }, function (error) {
            var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["CarMessage"]("Error!", "" + error);
            _this.messageService.changeMessage(m);
        });
    };
    ManageReturnsComponent.prototype.summonRentals = function () {
        var _this = this;
        this.rentalService.getRentals().subscribe(function (rentals) {
            _this.rentals = rentals;
            _this.sortedOpenRentals = _this.openRentals = _this.rentals.filter(function (r) { return !r.Returned; });
            //    console.log(JSON.stringify(this.sortedOpenRentals, null, 2))
            console.log(_this.rentals);
        });
    };
    ManageReturnsComponent.prototype.summonCars = function () {
        var _this = this;
        this.carService.getCars().subscribe(function (cars) {
            _this.cars = cars;
        });
    };
    //Rentals table sort function
    ManageReturnsComponent.prototype.sortData = function (sort) {
        var data = this.openRentals;
        if (!sort.active || sort.direction === '') {
            this.sortedOpenRentals = data;
            return;
        }
        this.sortedOpenRentals = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'RentalsId': return compare(a.RentalsId, b.RentalsId, isAsc);
                case 'StartDate': return compare(a.StartDate, b.StartDate, isAsc);
                case 'DueBackDate': return compare(a.EndDate, b.EndDate, isAsc);
                case 'ReturnedDate': return compare(a.Returned, b.Returned, isAsc);
                case 'CarId': return compare(a.Car.CarId, b.Car.CarId, isAsc);
                default: return 0;
            }
        });
    };
    ManageReturnsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'manage-returns',
            template: __webpack_require__(/*! raw-loader!./manage-returns.component.html */ "./node_modules/raw-loader/index.js!./src/app/Premission1+/manage-returns/manage-returns.component.html"),
            styles: [__webpack_require__(/*! ./manage-returns.component.scss */ "./src/app/Premission1+/manage-returns/manage-returns.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_rental_data_service__WEBPACK_IMPORTED_MODULE_5__["RentalDataService"],
            src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            src_app_services_car_data_service__WEBPACK_IMPORTED_MODULE_9__["CarDataService"]])
    ], ManageReturnsComponent);
    return ManageReturnsComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/Premission1+/manage-returns/returnsModal.ts":
/*!*************************************************************!*\
  !*** ./src/app/Premission1+/manage-returns/returnsModal.ts ***!
  \*************************************************************/
/*! exports provided: returnsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnsModal", function() { return returnsModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var returnsModal = /** @class */ (function () {
    function returnsModal(dialogRef, rental) {
        this.dialogRef = dialogRef;
        this.rental = rental;
        this.maxDate = new Date();
    }
    returnsModal.prototype.ngOnInit = function () {
        this.sendBackData = this.rental.rental;
        this.minDate = this.rental.rental.StartDate;
    };
    returnsModal.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    returnsModal.prototype.save = function () {
        this.sendBackData.Returned = this.returnedDate;
        //this.sendBackData.Car.Available = 1;
        this.dialogRef.close(this.sendBackData);
    };
    returnsModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'returnsModal',
            template: __webpack_require__(/*! raw-loader!./returnsModal.html */ "./node_modules/raw-loader/index.js!./src/app/Premission1+/manage-returns/returnsModal.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], returnsModal);
    return returnsModal;
}());



/***/ }),

/***/ "./src/app/Premission1+/manage-users/manage-users.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/Premission1+/manage-users/manage-users.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n}\n\n.table {\n  margin: 15px;\n}\n\nbutton {\n  margin-right: 10px;\n}\n\n.deleteModal {\n  width: 300px;\n  height: 120px;\n  /*align-self: center;\n    margin: auto;*/\n  position: fixed;\n  top: 30%;\n}\n\n.modalAligner {\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.sheet {\n  top: 0px;\n  left: 0px;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  opacity: 0.3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJlbWlzc2lvbjErL21hbmFnZS11c2Vycy9DOlxcVXNlcnNcXHJ5dGVsXFxEZXNrdG9wXFxDYXJSZW50YWxcXENhclJlbnRhbDRcXEFuZ3VsYXJBcHAvc3JjXFxhcHBcXFByZW1pc3Npb24xK1xcbWFuYWdlLXVzZXJzXFxtYW5hZ2UtdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1ByZW1pc3Npb24xKy9tYW5hZ2UtdXNlcnMvbWFuYWdlLXVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNGO2tCQUFBO0VBRUUsZUFBQTtFQUNBLFFBQUE7QUNHRjs7QURBQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0dGOztBRERBO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9QcmVtaXNzaW9uMSsvbWFuYWdlLXVzZXJzL21hbmFnZS11c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4XHJcbn1cclxuLmRlbGV0ZU1vZGFsIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuLyphbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvOyovXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMzAlO1xyXG5cclxufVxyXG4ubW9kYWxBbGlnbmVyIHtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uc2hlZXQge1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG4iLCJoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhYmxlIHtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5kZWxldGVNb2RhbCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgLyphbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvOyovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAzMCU7XG59XG5cbi5tb2RhbEFsaWduZXIge1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNoZWV0IHtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwLjM7XG59Il19 */"

/***/ }),

/***/ "./src/app/Premission1+/manage-users/manage-users.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Premission1+/manage-users/manage-users.component.ts ***!
  \*********************************************************************/
/*! exports provided: ManageUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersComponent", function() { return ManageUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _userModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userModal */ "./src/app/Premission1+/manage-users/userModal.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_pipes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/pipes */ "./src/app/services/pipes.ts");









var ManageUsersComponent = /** @class */ (function () {
    function ManageUsersComponent(router, userService, messageService, dialog, permission) {
        this.router = router;
        this.userService = userService;
        this.messageService = messageService;
        this.dialog = dialog;
        this.permission = permission;
        this.userFolder = "./../../../assets/users/";
        this.deleteCheck = false;
        this.deleteCheckOverride = false;
    }
    ManageUsersComponent.prototype.ngOnInit = function () {
        this.summonUsers();
    };
    //MODAL STUFF
    ManageUsersComponent.prototype.openDialog = function (user) {
        var _this = this;
        var dialogRef = this.dialog.open(_userModal__WEBPACK_IMPORTED_MODULE_5__["userModal"], {
            width: '500px',
            data: {
                user: user
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result) {
                _this.returnedDate = result;
                _this.saveToDatabase(_this.returnedDate);
            }
            else {
                var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["CarMessage"]("No edit done", "No input");
                _this.messageService.changeMessage(m);
            }
        });
    };
    ManageUsersComponent.prototype.saveToDatabase = function (user) {
        var _this = this;
        this.userService.editUser(user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe(function (data) {
            var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["CarMessage"]("Editing user...", "" + data);
            _this.messageService.changeMessage(m);
        }, function (error) {
            var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["CarMessage"]("Error!", "" + error);
            _this.messageService.changeMessage(m);
        });
    };
    ManageUsersComponent.prototype.summonUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (Users) {
            _this.sortedUsers = _this.Users = Users;
            console.log(Users);
        });
    };
    ManageUsersComponent.prototype.deleteAttempt = function (user, button) {
        this.slatedForDelete = user;
        if (this.deleteCheckOverride == false) {
            this.deleteCheck = true;
        }
        else
            this.delete();
    };
    ManageUsersComponent.prototype.removeDeleteCheck = function () {
        this.deleteCheckOverride = true;
        var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["CarMessage"]("Warning", "Delete responsibly");
        this.messageService.changeMessage(m);
        this.deleteCheck = false;
    };
    ManageUsersComponent.prototype.delete = function () {
        var _this = this;
        var user = this.slatedForDelete;
        var id = user.UserId;
        //var m: CarMessage = new CarMessage("Warning!", `Do you want to remove user no. ${id}?`);
        //this.messageService.changeMessage(m)
        //this.deleteCheck = true;
        //setTimeout(() => this.deleteCheck = false,3000)
        this.userService.deleteUsers(id)
            .subscribe(function (res) {
            _this.summonUsers();
            //  button.parentElement.style.display = "none";
            var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["CarMessage"]("Success", "User no. " + id + " was deleted");
            _this.messageService.changeMessage(m);
        }, function (err) {
            console.log(err);
            //     this.isLoadingResults = false;
            var m = new src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["CarMessage"]("Error!", "User no. " + id + " was NOT deleted");
            _this.messageService.changeMessage(m);
        });
        this.deleteCheck = false;
    };
    //Rentals table sort function
    ManageUsersComponent.prototype.sortData = function (sort) {
        var data = this.Users;
        if (!sort.active || sort.direction === '') {
            this.sortedUsers = data;
            return;
        }
        this.sortedUsers = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'UserId': return compare(a.UserId, b.UserId, isAsc);
                case 'Fullname': return compare(a.Fullname, b.Fullname, isAsc);
                case 'PassportNumber': return compare(a.PassportNumber, b.PassportNumber, isAsc);
                case 'UserName': return compare(a.UserName, b.UserName, isAsc);
                case 'Birthdate': return compare(a.Birthdate, b.Birthdate, isAsc);
                case 'Gender': return compare(a.PassportNumber, b.PassportNumber, isAsc);
                case 'Password': return compare(a.UserName, b.UserName, isAsc);
                case 'PictureUrl': return compare(a.Birthdate, b.Birthdate, isAsc);
                case 'Permission': return compare(a.Birthdate, b.Birthdate, isAsc);
                default: return 0;
            }
        });
    };
    ManageUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'manage-users',
            template: __webpack_require__(/*! raw-loader!./manage-users.component.html */ "./node_modules/raw-loader/index.js!./src/app/Premission1+/manage-users/manage-users.component.html"),
            styles: [__webpack_require__(/*! ./manage-users.component.scss */ "./src/app/Premission1+/manage-users/manage-users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"],
            src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_pipes__WEBPACK_IMPORTED_MODULE_8__["permissionPipe"]])
    ], ManageUsersComponent);
    return ManageUsersComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/Premission1+/manage-users/userModal.ts":
/*!********************************************************!*\
  !*** ./src/app/Premission1+/manage-users/userModal.ts ***!
  \********************************************************/
/*! exports provided: userModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userModal", function() { return userModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/pipes */ "./src/app/services/pipes.ts");




var userModal = /** @class */ (function () {
    function userModal(dialogRef, data, permission) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.permission = permission;
        this.editedUser = {};
        this.hide = false;
        this.minDate = new Date("1/1/1920");
        this.maxDate = new Date();
    }
    userModal.prototype.ngOnInit = function () {
        this.sendBackData = this.data.user;
    };
    userModal.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    userModal.prototype.save = function () {
        console.log(this.editedUser);
        this.sendBackData.UserName = this.editedUser.UserName ? this.editedUser.UserName : this.sendBackData.UserName;
        this.sendBackData.Birthdate = this.editedUser.Birthdate ? this.editedUser.Birthdate : this.sendBackData.Birthdate;
        this.sendBackData.Email = this.editedUser.Email ? this.editedUser.Email : this.sendBackData.Email;
        this.sendBackData.Fullname = this.editedUser.Fullname ? this.editedUser.Fullname : this.sendBackData.Fullname;
        this.sendBackData.Gender = this.editedUser.Gender ? this.editedUser.Gender : this.sendBackData.Gender;
        this.sendBackData.PassportNumber = this.editedUser.PassportNumber ? this.editedUser.PassportNumber : this.sendBackData.PassportNumber;
        this.sendBackData.Password = this.editedUser.Password ? this.editedUser.Password : this.sendBackData.Password;
        this.sendBackData.Permission = this.editedUser.Permission ? this.editedUser.Permission : this.sendBackData.Permission;
        this.sendBackData.PictureUrl = this.editedUser.PictureUrl ? this.editedUser.PictureUrl : this.sendBackData.PictureUrl;
        this.dialogRef.close(this.sendBackData);
    };
    userModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'userModal',
            template: __webpack_require__(/*! raw-loader!./userModal.html */ "./node_modules/raw-loader/index.js!./src/app/Premission1+/manage-users/userModal.html"),
            providers: [_services_pipes__WEBPACK_IMPORTED_MODULE_3__["permissionPipe"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_pipes__WEBPACK_IMPORTED_MODULE_3__["permissionPipe"]])
    ], userModal);
    return userModal;
}());



/***/ }),

/***/ "./src/app/Premission1+/view-rentals/view-rentals.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/Premission1+/view-rentals/view-rentals.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  max-width: 600px;\n  margin: 15px;\n}\n\nh2 {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJlbWlzc2lvbjErL3ZpZXctcmVudGFscy9DOlxcVXNlcnNcXHJ5dGVsXFxEZXNrdG9wXFxDYXJSZW50YWxcXENhclJlbnRhbDRcXEFuZ3VsYXJBcHAvc3JjXFxhcHBcXFByZW1pc3Npb24xK1xcdmlldy1yZW50YWxzXFx2aWV3LXJlbnRhbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1ByZW1pc3Npb24xKy92aWV3LXJlbnRhbHMvdmlldy1yZW50YWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsZ0JBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvUHJlbWlzc2lvbjErL3ZpZXctcmVudGFscy92aWV3LXJlbnRhbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG5tYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMTVweDtcclxufVxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIi50YWJsZSB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/Premission1+/view-rentals/view-rentals.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Premission1+/view-rentals/view-rentals.component.ts ***!
  \*********************************************************************/
/*! exports provided: ViewRentalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRentalsComponent", function() { return ViewRentalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_rental_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rental-data.service */ "./src/app/services/rental-data.service.ts");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");




var ViewRentalsComponent = /** @class */ (function () {
    function ViewRentalsComponent(rentalService, messageService) {
        this.rentalService = rentalService;
        this.messageService = messageService;
    }
    ViewRentalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rentalService.getRentals().subscribe(function (rentals) {
            _this.sortedRentals = _this.rentals = rentals;
            console.log( /*JSON.stringify(this.sortedRentals, null, 2)*/);
        });
    };
    //Rentals table sort function
    ViewRentalsComponent.prototype.sortData = function (sort) {
        var data = this.rentals;
        if (!sort.active || sort.direction === '') {
            this.sortedRentals = data;
            return;
        }
        this.sortedRentals = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'RentalId': return compare(a.RentalsId, b.RentalsId, isAsc);
                case 'UserId': return compare(a.User.UserId, b.User.UserId, isAsc);
                case 'Username': return compare(a.User.UserName, b.User.UserName, isAsc);
                case 'RentalsId': return compare(a.RentalsId, b.RentalsId, isAsc);
                case 'StartDate': return compare(a.StartDate, b.StartDate, isAsc);
                case 'DueBackDate': return compare(a.EndDate, b.EndDate, isAsc);
                case 'ReturnedDate': return compare(a.Returned, b.Returned, isAsc);
                case 'CarId': return compare(a.Car.CarId, b.Car.CarId, isAsc);
                default: return 0;
            }
        });
    };
    ViewRentalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-rentals',
            template: __webpack_require__(/*! raw-loader!./view-rentals.component.html */ "./node_modules/raw-loader/index.js!./src/app/Premission1+/view-rentals/view-rentals.component.html"),
            styles: [__webpack_require__(/*! ./view-rentals.component.scss */ "./src/app/Premission1+/view-rentals/view-rentals.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_rental_data_service__WEBPACK_IMPORTED_MODULE_2__["RentalDataService"],
            src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], ViewRentalsComponent);
    return ViewRentalsComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _rentals_rentals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rentals/rentals.component */ "./src/app/rentals/rentals.component.ts");
/* harmony import */ var _search_cars_search_cars_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-cars/search-cars.component */ "./src/app/search-cars/search-cars.component.ts");
/* harmony import */ var _PageNotFoundComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PageNotFoundComponent */ "./src/app/PageNotFoundComponent.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _Premission1_manage_cars_manage_cars_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Premission1+/manage-cars/manage-cars.component */ "./src/app/Premission1+/manage-cars/manage-cars.component.ts");
/* harmony import */ var _Premission1_manage_returns_manage_returns_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Premission1+/manage-returns/manage-returns.component */ "./src/app/Premission1+/manage-returns/manage-returns.component.ts");
/* harmony import */ var _Premission1_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Premission1+/manage-users/manage-users.component */ "./src/app/Premission1+/manage-users/manage-users.component.ts");
/* harmony import */ var _Premission1_manage_car_types_manage_car_types_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Premission1+/manage-car-types/manage-car-types.component */ "./src/app/Premission1+/manage-car-types/manage-car-types.component.ts");
/* harmony import */ var _Premission1_view_rentals_view_rentals_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Premission1+/view-rentals/view-rentals.component */ "./src/app/Premission1+/view-rentals/view-rentals.component.ts");















var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'rentals', component: _rentals_rentals_component__WEBPACK_IMPORTED_MODULE_5__["RentalsComponent"] },
    { path: 'search', component: _search_cars_search_cars_component__WEBPACK_IMPORTED_MODULE_6__["SearchCarsComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutComponent"] },
    { path: 'manageCars', component: _Premission1_manage_cars_manage_cars_component__WEBPACK_IMPORTED_MODULE_10__["ManageCarsComponent"] },
    { path: 'manageCarTypes', component: _Premission1_manage_car_types_manage_car_types_component__WEBPACK_IMPORTED_MODULE_13__["ManageCarTypesComponent"] },
    { path: 'viewRentals', component: _Premission1_view_rentals_view_rentals_component__WEBPACK_IMPORTED_MODULE_14__["ViewRentalsComponent"] },
    { path: 'manageReturns', component: _Premission1_manage_returns_manage_returns_component__WEBPACK_IMPORTED_MODULE_11__["ManageReturnsComponent"] },
    { path: 'manageUsers', component: _Premission1_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_12__["ManageUsersComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _PageNotFoundComponent__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardContainer {\n  width: 100%;\n  height: 600px;\n  display: flex;\n  justify-content: center;\n}\n\n.cardContainer .card {\n  text-align: center;\n  margin: 15px;\n  min-width: 30%;\n  height: 35%;\n}\n\ndiv.ng-tns-c1-0.ng-trigger.ng-trigger-slideInAnimation {\n  min-height: 90%;\n}\n\n.anim1 {\n  position: absolute;\n  top: 250px;\n  left: 50%;\n  -webkit-animation: speedRight 0.5s ease-in 1.5s 1 forwards;\n          animation: speedRight 0.5s ease-in 1.5s 1 forwards;\n}\n\n.anim2 {\n  position: absolute;\n  top: 250px;\n  left: 45%;\n  -webkit-animation: speedRight 0.5s ease-in 1.8s 1 forwards;\n          animation: speedRight 0.5s ease-in 1.8s 1 forwards;\n}\n\n.anim3 {\n  position: absolute;\n  top: 250px;\n  left: 40%;\n  -webkit-animation: speedRight 3s ease-in 2s 1 forwards;\n          animation: speedRight 3s ease-in 2s 1 forwards;\n}\n\n@-webkit-keyframes speedRight {\n  to {\n    margin-left: 1000px;\n  }\n}\n\n@keyframes speedRight {\n  to {\n    margin-left: 1000px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxyeXRlbFxcRGVza3RvcFxcQ2FyUmVudGFsXFxDYXJSZW50YWw0XFxBbmd1bGFyQXBwL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUdBLHVCQUFBO0FDRko7O0FES0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBREtFO0VBQ0UsZUFBQTtBQ0ZKOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUlBLDBEQUFBO1VBQUEsa0RBQUE7QUNKRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwwREFBQTtVQUFBLGtEQUFBO0FDSEY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0RBQUE7VUFBQSw4Q0FBQTtBQ0ZGOztBRElBO0VBSUU7SUFDRSxtQkFBQTtFQ0pGO0FBQ0Y7O0FERkE7RUFJRTtJQUNFLG1CQUFBO0VDSkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5jYXJkQ29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZENvbnRhaW5lciAuY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMzUlO1xyXG4gIH1cclxuXHJcbiAgZGl2Lm5nLXRucy1jMS0wLm5nLXRyaWdnZXIubmctdHJpZ2dlci1zbGlkZUluQW5pbWF0aW9uIHtcclxuICAgIG1pbi1oZWlnaHQ6IDkwJTtcclxuICB9XHJcbi5hbmltMSB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOiAyNTBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLy9hbmltYXRpb24tbmFtZTogc3BlZWRSaWdodDtcclxuICAvL2FuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgLy9hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IHNwZWVkUmlnaHQgMC41cyBlYXNlLWluIDEuNXMgMSBmb3J3YXJkcztcclxufVxyXG4uYW5pbTIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDI1MHB4O1xyXG4gIGxlZnQ6IDQ1JTtcclxuICBhbmltYXRpb246IHNwZWVkUmlnaHQgMC41cyBlYXNlLWluIDEuOHMgMSBmb3J3YXJkcztcclxufVxyXG4uYW5pbTMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDI1MHB4O1xyXG4gIGxlZnQ6IDQwJTtcclxuICBhbmltYXRpb246IHNwZWVkUmlnaHQgM3MgZWFzZS1pbiAycyAxIGZvcndhcmRzO1xyXG59XHJcbkBrZXlmcmFtZXMgc3BlZWRSaWdodCB7XHJcbiAgZnJvbSB7XHJcbiAgIC8vbWFyZ2luLWxlZnQ6IC0yMDBweDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMDBweDtcclxuICB9XHJcbn1cclxuIiwiLmNhcmRDb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkQ29udGFpbmVyIC5jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDE1cHg7XG4gIG1pbi13aWR0aDogMzAlO1xuICBoZWlnaHQ6IDM1JTtcbn1cblxuZGl2Lm5nLXRucy1jMS0wLm5nLXRyaWdnZXIubmctdHJpZ2dlci1zbGlkZUluQW5pbWF0aW9uIHtcbiAgbWluLWhlaWdodDogOTAlO1xufVxuXG4uYW5pbTEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjUwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGVlZFJpZ2h0IDAuNXMgZWFzZS1pbiAxLjVzIDEgZm9yd2FyZHM7XG59XG5cbi5hbmltMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNTBweDtcbiAgbGVmdDogNDUlO1xuICBhbmltYXRpb246IHNwZWVkUmlnaHQgMC41cyBlYXNlLWluIDEuOHMgMSBmb3J3YXJkcztcbn1cblxuLmFuaW0zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1MHB4O1xuICBsZWZ0OiA0MCU7XG4gIGFuaW1hdGlvbjogc3BlZWRSaWdodCAzcyBlYXNlLWluIDJzIDEgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgc3BlZWRSaWdodCB7XG4gIHRvIHtcbiAgICBtYXJnaW4tbGVmdDogMTAwMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user-data.service */ "./src/app/services/user-data.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.title = 'AngMat';
    }
    AppComponent.prototype.ngOnInit = function () {
        var userFromStorage = JSON.parse(localStorage.getItem('currentUser'));
        if (userFromStorage) {
            this.userService.Servicelogin(true, userFromStorage);
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "./src/app/side-nav/side-nav.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _search_cars_search_cars_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search-cars/search-cars.component */ "./src/app/search-cars/search-cars.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _PageNotFoundComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PageNotFoundComponent */ "./src/app/PageNotFoundComponent.ts");
/* harmony import */ var _rentals_rentals_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rentals/rentals.component */ "./src/app/rentals/rentals.component.ts");
/* harmony import */ var _services_car_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/car-data.service */ "./src/app/services/car-data.service.ts");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _Premission1_manage_cars_manage_cars_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Premission1+/manage-cars/manage-cars.component */ "./src/app/Premission1+/manage-cars/manage-cars.component.ts");
/* harmony import */ var _services_rental_data_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/rental-data.service */ "./src/app/services/rental-data.service.ts");
/* harmony import */ var _error_handler__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./error-handler */ "./src/app/error-handler.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _Premission1_manage_returns_manage_returns_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Premission1+/manage-returns/manage-returns.component */ "./src/app/Premission1+/manage-returns/manage-returns.component.ts");
/* harmony import */ var _Premission1_manage_returns_returnsModal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Premission1+/manage-returns/returnsModal */ "./src/app/Premission1+/manage-returns/returnsModal.ts");
/* harmony import */ var _Premission1_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Premission1+/manage-users/manage-users.component */ "./src/app/Premission1+/manage-users/manage-users.component.ts");
/* harmony import */ var _Premission1_manage_car_types_manage_car_types_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Premission1+/manage-car-types/manage-car-types.component */ "./src/app/Premission1+/manage-car-types/manage-car-types.component.ts");
/* harmony import */ var _Premission1_manage_cars_carsModal__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Premission1+/manage-cars/carsModal */ "./src/app/Premission1+/manage-cars/carsModal.ts");
/* harmony import */ var _Premission1_manage_users_userModal__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Premission1+/manage-users/userModal */ "./src/app/Premission1+/manage-users/userModal.ts");
/* harmony import */ var _Premission1_manage_car_types_carTypeModal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Premission1+/manage-car-types/carTypeModal */ "./src/app/Premission1+/manage-car-types/carTypeModal.ts");
/* harmony import */ var _Premission1_view_rentals_view_rentals_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Premission1+/view-rentals/view-rentals.component */ "./src/app/Premission1+/view-rentals/view-rentals.component.ts");
/* harmony import */ var _footer_cards_footer_cards_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./footer-cards/footer-cards.component */ "./src/app/footer-cards/footer-cards.component.ts");
/* harmony import */ var _authorization_basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./authorization/basic-auth.interceptor */ "./src/app/authorization/basic-auth.interceptor.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _services_pipes__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/pipes */ "./src/app/services/pipes.ts");









//import { FlexLayoutModule } from '@angular/flex-layout';




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_7__["SideNavComponent"],
                _search_cars_search_cars_component__WEBPACK_IMPORTED_MODULE_12__["SearchCarsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _PageNotFoundComponent__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
                _rentals_rentals_component__WEBPACK_IMPORTED_MODULE_16__["RentalsComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_20__["CheckoutComponent"],
                _Premission1_manage_cars_manage_cars_component__WEBPACK_IMPORTED_MODULE_21__["ManageCarsComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_24__["MessageComponent"],
                _Premission1_manage_returns_manage_returns_component__WEBPACK_IMPORTED_MODULE_25__["ManageReturnsComponent"],
                _Premission1_manage_returns_returnsModal__WEBPACK_IMPORTED_MODULE_26__["returnsModal"], _Premission1_manage_cars_carsModal__WEBPACK_IMPORTED_MODULE_29__["carsModal"], _Premission1_manage_users_userModal__WEBPACK_IMPORTED_MODULE_30__["userModal"], _Premission1_manage_car_types_carTypeModal__WEBPACK_IMPORTED_MODULE_31__["carTypeModal"],
                _Premission1_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_27__["ManageUsersComponent"],
                _Premission1_manage_car_types_manage_car_types_component__WEBPACK_IMPORTED_MODULE_28__["ManageCarTypesComponent"],
                _Premission1_view_rentals_view_rentals_component__WEBPACK_IMPORTED_MODULE_32__["ViewRentalsComponent"],
                _footer_cards_footer_cards_component__WEBPACK_IMPORTED_MODULE_33__["FooterCardsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_35__["FooterComponent"],
                _services_pipes__WEBPACK_IMPORTED_MODULE_36__["permissionPipe"],
            ],
            imports: [
                // FlexLayoutModule,
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__["AngularFontAwesomeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            ],
            exports: [_services_pipes__WEBPACK_IMPORTED_MODULE_36__["permissionPipe"]],
            providers: [_services_car_data_service__WEBPACK_IMPORTED_MODULE_17__["CarDataService"], _services_user_data_service__WEBPACK_IMPORTED_MODULE_18__["UserDataService"], _services_rental_data_service__WEBPACK_IMPORTED_MODULE_22__["RentalDataService"], _services_pipes__WEBPACK_IMPORTED_MODULE_36__["permissionPipe"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], useClass: _error_handler__WEBPACK_IMPORTED_MODULE_23__["CarErrorHandler"] },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _authorization_basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_34__["BasicAuthInterceptor"], multi: true },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE"], useValue: 'en-GB' },
            ],
            entryComponents: [_Premission1_manage_returns_returnsModal__WEBPACK_IMPORTED_MODULE_26__["returnsModal"], _Premission1_manage_cars_carsModal__WEBPACK_IMPORTED_MODULE_29__["carsModal"], _Premission1_manage_users_userModal__WEBPACK_IMPORTED_MODULE_30__["userModal"], _Premission1_manage_car_types_carTypeModal__WEBPACK_IMPORTED_MODULE_31__["carTypeModal"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authorization/basic-auth.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/authorization/basic-auth.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: BasicAuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function() { return BasicAuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicAuthInterceptor = /** @class */ (function () {
    function BasicAuthInterceptor() {
    }
    BasicAuthInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with basic auth credentials if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            var pass = btoa(currentUser.UserName + ":" + currentUser.Password);
            request = request.clone({
                setHeaders: {
                    Authorization: "Basic " + pass
                }
            });
        }
        return next.handle(request);
    };
    BasicAuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BasicAuthInterceptor);
    return BasicAuthInterceptor;
}());

//@Injectable()
//export class BasicAuthInterceptor implements HttpInterceptor {
//  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//    // add authorization header with basic auth credentials if available
//    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
//    if (currentUser && currentUser.authdata) {
//      request = request.clone({
//        setHeaders: {
//          Authorization: `Basic ${currentUser.authdata}`
//        }
//      });
//    }
//    return next.handle(request);
//  }
//}


/***/ }),

/***/ "./src/app/checkout/checkout.component.scss":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center;\n}\n\n.carCardContainer {\n  margin-top: 10px;\n  margin-left: 10px;\n}\n\n.carCard {\n  display: inline-block;\n  margin: 10px;\n}\n\n.crop {\n  height: 200px;\n  width: 400px;\n  overflow: hidden;\n}\n\n.crop img {\n  height: auto;\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvQzpcXFVzZXJzXFxyeXRlbFxcRGVza3RvcFxcQ2FyUmVudGFsXFxDYXJSZW50YWw0XFxBbmd1bGFyQXBwL3NyY1xcYXBwXFxjaGVja291dFxcY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQ0dGOztBRERBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0lGOztBREZBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FyQ2FyZENvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uY2FyQ2FyZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4uY3JvcCB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY3JvcCBpbWcge1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbiIsImgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyQ2FyZENvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY2FyQ2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY3JvcCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNyb3AgaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogNDAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_car_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/car-data.service */ "./src/app/services/car-data.service.ts");
/* harmony import */ var _services_rental_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rental-data.service */ "./src/app/services/rental-data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _classes_Rental__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../classes/Rental */ "./src/app/classes/Rental.ts");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");








var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(carService, rentalService, userService, messageService) {
        this.carService = carService;
        this.rentalService = rentalService;
        this.userService = userService;
        this.messageService = messageService;
        this.carFolder = "./../../assets/cars/";
        this.minDate = new Date();
        this.sString = "";
        this.eString = "";
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.car.subscribe(function (c) { return _this.car = c; });
        this.userService.user.subscribe(function (user) { return _this.loggedUser = user; });
        //this.rentalForm.controls['Car'].setValue(this.car);
        //this.rentalForm.controls['User'].setValue(this.user);
        this.rentalComplete = false;
        if (!this.car) {
            var m = new _services_message_service__WEBPACK_IMPORTED_MODULE_7__["CarMessage"]("No selected vehicle", "Dude, you can't check out a lack of car, go back and find one you like");
            this.messageService.changeMessage(m);
            //console.log("LOGGED USER: " + this.loggedUser.UserId)
        }
    };
    CheckoutComponent.prototype.setDateStrings = function () {
        this.sString = this.sDate ? (this.sDate.getMonth() + 1) + "/" + (this.sDate.getDate() + 1) + "/" + this.sDate.getFullYear() : "";
        this.eString = this.eDate ? (this.eDate.getMonth() + 1) + "/" + (this.eDate.getDate() + 1) + "/" + this.eDate.getFullYear() : "";
        if (this.sDate && this.eDate) {
            var millisecondDifference = this.eDate.getTime() - this.sDate.getTime();
            this.daysDifference = millisecondDifference / (1000 * 60 * 60 * 24);
        }
    };
    CheckoutComponent.prototype.picError = function () {
    };
    CheckoutComponent.prototype.onSubmit = function () {
        var _this = this;
        //if (this.rentalForm.invalid) {
        //  return;
        //}
        //if (this.rentalForm.valid) {
        //  console.log("Form valid");
        //  console.log(this.rentalForm.value);
        if (!this.sDate || !this.eDate) {
            var m = new _services_message_service__WEBPACK_IMPORTED_MODULE_7__["CarMessage"]("Unselected dates", "Make sure to select a start and end date");
            this.messageService.changeMessage(m);
            return;
        }
        else if (this.sDate.getTime() > this.eDate.getTime()) {
            var m = new _services_message_service__WEBPACK_IMPORTED_MODULE_7__["CarMessage"]("Time paradox", "You've managed to request a negative rental. You want us to pay you for it??");
            this.messageService.changeMessage(m);
            return;
        }
        //this.rentalObject.Car = this.car;
        //this.rentalObject.User = this.loggedUser;
        //this.rentalObject.StartDate = this.sDate;
        //this.rentalObject.EndDate = this.eDate;
        // this.rental = <Rental>this.rentalObject;
        this.rental = new _classes_Rental__WEBPACK_IMPORTED_MODULE_5__["Rental"](this.sDate, this.eDate, this.loggedUser, this.car);
        this.rental.User.UserId = this.loggedUser.UserId;
        console.log("LOGGED USER: " + this.rental.User.UserId);
        this.rentalService.rent(this.rental)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            console.log(data);
            var m = new _services_message_service__WEBPACK_IMPORTED_MODULE_7__["CarMessage"]("Your order has been processed", "Enjoy your car, " + _this.loggedUser.UserName + "!");
            _this.messageService.changeMessage(m);
        }, function (error) {
            console.log(error);
        });
        //MAKE CAR UNAVAILABLE
        this.car.Available = false;
        this.carService.editCar(this.car)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
        }, function (error) {
            var m = new _services_message_service__WEBPACK_IMPORTED_MODULE_7__["CarMessage"]("Error!", "" + error);
            _this.messageService.changeMessage(m);
        });
        this.rentalComplete = true;
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.scss */ "./src/app/checkout/checkout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_car_data_service__WEBPACK_IMPORTED_MODULE_2__["CarDataService"],
            _services_rental_data_service__WEBPACK_IMPORTED_MODULE_3__["RentalDataService"],
            _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__["UserDataService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/classes/Rental.ts":
/*!***********************************!*\
  !*** ./src/app/classes/Rental.ts ***!
  \***********************************/
/*! exports provided: Rental */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rental", function() { return Rental; });
var Rental = /** @class */ (function () {
    function Rental(StartDate, EndDate, User, Car) {
        this.StartDate = StartDate;
        this.EndDate = EndDate;
        this.User = User;
        this.Car = Car;
    }
    return Rental;
}());



/***/ }),

/***/ "./src/app/error-handler.ts":
/*!**********************************!*\
  !*** ./src/app/error-handler.ts ***!
  \**********************************/
/*! exports provided: CarErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarErrorHandler", function() { return CarErrorHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");



var CarErrorHandler = /** @class */ (function () {
    function CarErrorHandler(messageService) {
        this.messageService = messageService;
    }
    CarErrorHandler.prototype.handleError = function (error) {
        console.log(error);
        var m = new _services_message_service__WEBPACK_IMPORTED_MODULE_2__["CarMessage"]("An error has occurred!", "");
        this.messageService.changeMessage(m);
    };
    CarErrorHandler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], CarErrorHandler);
    return CarErrorHandler;
}());



/***/ }),

/***/ "./src/app/footer-cards/footer-cards.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/footer-cards/footer-cards.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footerCardPic {\n  margin-left: 10px;\n  margin-bottom: 5px;\n  display: inline-block;\n  height: 90px;\n  width: 60px;\n  padding: 10px;\n  top: 0;\n}\n\n.footerTitle {\n  margin-left: 10px;\n  padding: 5px;\n}\n\n.footer {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  max-width: 40%;\n}\n\n.footer span {\n  display: inline-block;\n}\n\nmat-card img {\n  height: 45px;\n  width: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyLWNhcmRzL0M6XFxVc2Vyc1xccnl0ZWxcXERlc2t0b3BcXENhclJlbnRhbFxcQ2FyUmVudGFsNFxcQW5ndWxhckFwcC9zcmNcXGFwcFxcZm9vdGVyLWNhcmRzXFxmb290ZXItY2FyZHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci1jYXJkcy9mb290ZXItY2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSxNQUFBO0FDQUY7O0FERUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFFQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQUNFLHFCQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyLWNhcmRzL2Zvb3Rlci1jYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJDYXJkUGljIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogOTBweDtcclxuICB3aWR0aDogNjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC8vICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG59XHJcbi5mb290ZXJUaXRsZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICAvLyAgIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1heC13aWR0aDogNDAlO1xyXG59XHJcbi5mb290ZXIgc3BhbntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxubWF0LWNhcmQgaW1nIHtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuIiwiLmZvb3RlckNhcmRQaWMge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRvcDogMDtcbn1cblxuLmZvb3RlclRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG5cbi5mb290ZXIgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxubWF0LWNhcmQgaW1nIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer-cards/footer-cards.component.ts":
/*!********************************************************!*\
  !*** ./src/app/footer-cards/footer-cards.component.ts ***!
  \********************************************************/
/*! exports provided: FooterCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterCardsComponent", function() { return FooterCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterCardsComponent = /** @class */ (function () {
    function FooterCardsComponent() {
        this.carFolder = "./../../assets/cars/";
        this.carsOfInterest = [];
        this.displayWanted = true;
    }
    FooterCardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentCars = 0;
        setInterval(function () { return _this.fetchFromStorage(); }, 1500);
    };
    FooterCardsComponent.prototype.fetchFromStorage = function () {
        var temp = JSON.parse(localStorage.getItem("carsOfInterest"));
        if (temp && temp.length > this.currentCars) {
            this.carsOfInterest = temp;
            this.currentCars = temp.length;
        }
    };
    FooterCardsComponent.prototype.toggleHide = function () {
        this.displayWanted = this.displayWanted ? false : true;
    };
    FooterCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer-cards',
            template: __webpack_require__(/*! raw-loader!./footer-cards.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer-cards/footer-cards.component.html"),
            styles: [__webpack_require__(/*! ./footer-cards.component.scss */ "./src/app/footer-cards/footer-cards.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterCardsComponent);
    return FooterCardsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homePic {\n  text-align: center;\n  overflow: hidden;\n  justify-content: center;\n  display: flex;\n  width: 100%;\n}\n\n.quote {\n  font-size: 30px;\n  opacity: 0.8;\n  max-width: 35vw;\n}\n\n.firstDiv img {\n  max-width: 50vw;\n  margin-left: 20px;\n  margin-top: 10px;\n  display: inline-block;\n}\n\n.firstQuote {\n  float: right;\n  margin-top: 15vh;\n  margin-right: 15vh;\n}\n\n.secondDiv {\n  margin-top: 10vh;\n}\n\n.secondDiv img {\n  border-radius: 15px;\n  max-width: 50%;\n  float: right;\n}\n\n.secondQuote {\n  float: left;\n  margin-top: 20vh;\n  margin-left: 20vh;\n  margin-bottom: 18vh;\n}\n\n.thirdDiv {\n  width: 100%;\n  float: left;\n}\n\n.thirdDiv img {\n  border-radius: 15px;\n  max-width: 50%;\n}\n\n.thirdQuote {\n  float: right;\n  margin-top: -300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHJ5dGVsXFxEZXNrdG9wXFxDYXJSZW50YWxcXENhclJlbnRhbDRcXEFuZ3VsYXJBcHAvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNHRjs7QUREQTtFQUVFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFFRSxnQkFBQTtBQ0dGOztBRERBO0VBRUUsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNLRjs7QURIQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ01GOztBREpBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDT0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZVBpYyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ucXVvdGUge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgbWF4LXdpZHRoOiAzNXZ3O1xyXG59XHJcbi5maXJzdERpdiBpbWd7XHJcbiAgbWF4LXdpZHRoOiA1MHZ3O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHggO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uZmlyc3RRdW90ZSB7XHJcbiAgLy93aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDE1dmg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXZoO1xyXG59XHJcbi5zZWNvbmREaXYge1xyXG4vLyAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTB2aDtcclxufVxyXG4uc2Vjb25kRGl2IGltZyB7XHJcbi8vICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIG1heC13aWR0aDogNTAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4uc2Vjb25kUXVvdGUge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDIwdmg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwdmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTh2aDtcclxufVxyXG4udGhpcmREaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi50aGlyZERpdiBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuLnRoaXJkUXVvdGV7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IC0zMDBweDtcclxufVxyXG4iLCIuaG9tZVBpYyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucXVvdGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG9wYWNpdHk6IDAuODtcbiAgbWF4LXdpZHRoOiAzNXZ3O1xufVxuXG4uZmlyc3REaXYgaW1nIHtcbiAgbWF4LXdpZHRoOiA1MHZ3O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZmlyc3RRdW90ZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTV2aDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXZoO1xufVxuXG4uc2Vjb25kRGl2IHtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbn1cblxuLnNlY29uZERpdiBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc2Vjb25kUXVvdGUge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjB2aDtcbiAgbWFyZ2luLWxlZnQ6IDIwdmg7XG4gIG1hcmdpbi1ib3R0b206IDE4dmg7XG59XG5cbi50aGlyZERpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnRoaXJkRGl2IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1heC13aWR0aDogNTAlO1xufVxuXG4udGhpcmRRdW90ZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogLTMwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(messageService) {
        this.messageService = messageService;
        this.assets = "./../../assets/";
        this.logo = "5thWheel6.png";
        this.car1 = "Bugatti_Divo.jpg";
        this.car2 = "lamborghini-huracans-mountains.jpg";
        this.car3 = "Maserati.jpg";
    }
    HomeComponent.prototype.ngOnInit = function () {
        var m = new _services_message_service__WEBPACK_IMPORTED_MODULE_2__["CarMessage"]("Welcome!", _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].greeting);
        this.messageService.changeMessage(m);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  display: flex;\n  max-width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 15px;\n  align-items: center;\n}\n\n.box > div {\n  align-items: center;\n  align-self: center;\n  justify-content: center;\n}\n\n.box button {\n  align-self: center;\n  justify-content: center;\n}\n\nh2 {\n  text-align: center;\n}\n\n.container {\n  margin-left: auto;\n  margin-right: auto;\n  align-self: center;\n}\n\n.container button {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxyeXRlbFxcRGVza3RvcFxcQ2FyUmVudGFsXFxDYXJSZW50YWw0XFxBbmd1bGFyQXBwL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0MsbUJBQUE7QUNBSDs7QURVQztFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ1BIOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtBQ05GOztBRFNBO0VBQ0Usa0JBQUE7QUNORjs7QURRQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFHQSxrQkFBQTtBQ1BGOztBRFVBO0VBQ0UsaUJBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIC8vIGhlaWdodDogMzAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3ggPiAqIHtcclxuICAvLyB3aWR0aDogMTUlO1xyXG4gIC8vIGhlaWdodDogMjAwcHg7XHJcbiAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4gLmJveD5kaXYge1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICBhbGlnbi1zZWxmOmNlbnRlcjtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmJveCBidXR0b24ge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgLy8gd2lkdGg6IDgwJTtcclxuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAvLyAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lciBidXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbiIsIi5ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm94ID4gZGl2IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJveCBidXR0b24ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, messageService) {
        this.router = router;
        this.userService = userService;
        this.messageService = messageService;
        this.loggedIn = false;
        this.hide = true;
        this.usernameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]);
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            UserName: this.usernameFormControl,
            Password: this.passwordFormControl,
        });
        //this.userService.getUsers().subscribe(
        //  Users => {
        //    this.Users = Users;
        //    console.log(Users)
        //  })
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.userService.swtch.subscribe(function (swtch) { return _this_1.loggedIn = swtch; });
        //var a: boolean = true
        //var b: User = {
        //  Birthdate: new Date(1987 - 10 - 23),
        //  Email: "yaacovteller@gmail.com",
        //  Fullname: "Yaacov Teller",
        //  Gender: Gender.male,
        //  PassportNumber: 343807961,
        //  Password: "password5",
        //  Permission: 2,
        //  PictureUrl: "",
        //  UserId: 3,
        //  UserName: "Jake"
        //}
        //AUTOMATIC ADMIN LOGIN FOR DEBUGGING
        // this.userService.Servicelogin(a, b)
    };
    LoginComponent.prototype.regRoute = function () {
        this.router.navigateByUrl('/register');
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        if (this.userForm.invalid) {
            var m = new _services_message_service__WEBPACK_IMPORTED_MODULE_5__["CarMessage"]("Login failed!", "input was invalid");
            this.messageService.changeMessage(m);
            return;
        }
        if (this.userForm.valid) {
            //this.userService.login(this.usernameFormControl.value, this.passwordFormControl.value)
            //this.userService.register(this.userForm.value)
            //  .pipe(first())
            //  .subscribe(
            //    data => {
            //      // this.alertService.success('Registration successful', true);
            //      this.router.navigate(['/login']);
            //    },
            //    error => {
            //      // this.alertService.error(error);
            //      this.loading = false;
            //    });
            this.logAttempt = {
                userName: this.usernameFormControl.value.toLowerCase(),
                password: this.passwordFormControl.value
            };
            this.userService.Login(this.logAttempt).subscribe(function (data) { return _this_1.userAttempt = data; });
            //OLD LOGIN WORKAROUND
            //var userAttempt = this.Users.find(
            //  u => u.UserName.toLowerCase() == this.usernameFormControl.value.toLowerCase() && u.Password == this.passwordFormControl.value
            //)
            //console.log(userAttempt)
            //OLD LOGIN WORKAROUND
            //   debugger
            //this.logCheck = setInterval(() => this.successfulLogin() ,20)
            //setTimeout(() => { this.clear(), this.throwError() }, 500);
            //   this.userAttempt == null;
            setTimeout(function () { return _this_1.successfulLogin(); }, 500);
        }
    };
    LoginComponent.prototype.clear = function () {
        clearInterval(this.logCheck);
    };
    LoginComponent.prototype.throwError = function () {
        var m = new _services_message_service__WEBPACK_IMPORTED_MODULE_5__["CarMessage"]("Login failed!", "password or user name are incorrect");
        this.messageService.changeMessage(m);
    };
    LoginComponent.prototype.successfulLogin = function () {
        //  debugger
        //if (this.userAttempt === undefined) {
        //  return;
        //}
        if (this.userAttempt) {
            this.clear();
            this.loggedUser = this.userAttempt;
            this.userForm.reset();
            this.router.navigateByUrl('/search');
            //this.router.navigateByUrl('/rentals');
            this.userService.Servicelogin(true, this.loggedUser);
            var _this = this;
            var m = new _services_message_service__WEBPACK_IMPORTED_MODULE_5__["CarMessage"]("Login succeeded!", "hello " + _this.loggedUser.UserName + "!");
            this.messageService.changeMessage(m);
            localStorage.setItem('currentUser', JSON.stringify(_this.loggedUser));
            var a = JSON.parse(localStorage.getItem('currentUser'));
            console.log(a);
        }
        else {
            this.throwError();
        }
    };
    LoginComponent.prototype.logOut = function () {
        this.userService.Servicelogin(false, null);
        //   localStorage.removeItem('currentUser');
        this.userAttempt == null;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.scss":
/*!************************************************!*\
  !*** ./src/app/message/message.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messageFrame {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 5;\n}\n\n.messageFrame div {\n  display: inline-block;\n}\n\n.messageFrame i {\n  margin-right: 20px;\n}\n\n.messageFrame a {\n  cursor: pointer;\n  font-size: x-large;\n  position: absolute;\n  top: 8px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9DOlxcVXNlcnNcXHJ5dGVsXFxEZXNrdG9wXFxDYXJSZW50YWxcXENhclJlbnRhbDRcXEFuZ3VsYXJBcHAvc3JjXFxhcHBcXG1lc3NhZ2VcXG1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNDRjs7QURDQTtFQUNFLHFCQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2VGcmFtZXtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuLm1lc3NhZ2VGcmFtZSBkaXZ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5tZXNzYWdlRnJhbWUgaSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5tZXNzYWdlRnJhbWUgYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA4cHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuIiwiLm1lc3NhZ2VGcmFtZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgei1pbmRleDogNTtcbn1cblxuLm1lc3NhZ2VGcmFtZSBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tZXNzYWdlRnJhbWUgaSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLm1lc3NhZ2VGcmFtZSBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




var MessageComponent = /** @class */ (function () {
    function MessageComponent(srvc) {
        this.srvc = srvc;
        this.display = true;
        this.title = "Title";
        this.body = "message text body";
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.srvc.message.subscribe(function (m) { _this_1.display = m.display, _this_1.title = m.title, _this_1.body = m.body, _this_1.remove(_this_1); });
    };
    MessageComponent.prototype.remove = function (_this) {
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__(".messageFrame").fadeOut();
            // _this.display = false
        }, 4000);
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__(".messageFrame").fadeIn();
            _this.display = false;
        }, 5000);
    };
    MessageComponent.prototype.hide = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(".messageFrame").hide();
    };
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/index.js!./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.scss */ "./src/app/message/message.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  display: flex;\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 15px;\n  padding-left: 35px;\n  padding-top: 35px;\n  padding-bottom: 35px;\n}\n\ndiv.box {\n  width: 100px;\n  height: 50px;\n}\n\n.fa {\n  margin-right: 3px;\n}\n\n.fas {\n  margin-left: 5px;\n}\n\nmat-option span {\n  margin-right: 10px;\n}\n\nmat-option #spn {\n  margin-right: 2px;\n}\n\nh2 {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxyeXRlbFxcRGVza3RvcFxcQ2FyUmVudGFsXFxDYXJSZW50YWw0XFxBbmd1bGFyQXBwL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBR0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDSEY7O0FEWUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ1RGOztBRFlBO0VBQ0UsaUJBQUE7QUNURjs7QURXQTtFQUNFLGdCQUFBO0FDUkY7O0FEV0E7RUFDRSxrQkFBQTtBQ1JGOztBRFdBO0VBQ0UsaUJBQUE7QUNSRjs7QURXQTtFQUNFLGtCQUFBO0FDUkYiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgLy8gaGVpZ2h0OiAzMDBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxuICBwYWRkaW5nLXRvcDogMzVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcclxufVxyXG5cclxuLmJveCA+ICoge1xyXG4gIC8vIHdpZHRoOiAxNSU7XHJcbiAgLy8gaGVpZ2h0OiAyMDBweDtcclxuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdi5ib3gge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5mYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbn1cclxuLmZhcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxubWF0LW9wdGlvbiBzcGFuIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbm1hdC1vcHRpb24gI3NwbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiLmJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgcGFkZGluZy10b3A6IDM1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xufVxuXG5kaXYuYm94IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5mYSB7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG4uZmFzIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxubWF0LW9wdGlvbiBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5tYXQtb3B0aW9uICNzcG4ge1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService, messageService) {
        this.router = router;
        this.userService = userService;
        this.messageService = messageService;
        this.loading = false;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]);
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]);
        this.usernameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]);
        this.passportFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(9)]);
        this.genderFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]);
        this.pictureFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', []);
        this.dateFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', []);
        this.minDate = new Date(1910, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
        this.hide = true;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            FullName: this.nameFormControl,
            PassportNumber: this.passportFormControl,
            UserName: this.usernameFormControl,
            Gender: this.genderFormControl,
            Email: this.emailFormControl,
            Password: this.passwordFormControl,
            PictureUrl: this.pictureFormControl,
            BirthDate: this.dateFormControl,
        });
    }
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.userForm.invalid) {
            var m = new _services_message_service__WEBPACK_IMPORTED_MODULE_6__["CarMessage"]("Registration failed!", "input was invalid");
            this.messageService.changeMessage(m);
            return;
        }
        if (this.userForm.valid) {
            console.log(JSON.stringify(this.userForm.value));
            this.userService.register(this.userForm.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (data) {
                var m = new _services_message_service__WEBPACK_IMPORTED_MODULE_6__["CarMessage"]("Registration Succeeded!", "Welcome to the database!");
                _this.messageService.changeMessage(m);
                _this.router.navigate(['/login']);
                setTimeout(function () { return _this.userForm.reset(); }, 1000);
            }, function (error) {
                //if (error.status == 400) {
                //       this.loading = false;
                //}
                if (error.status == 409) {
                    var m = new _services_message_service__WEBPACK_IMPORTED_MODULE_6__["CarMessage"]("Duplicate user", "Registration failed with " + error.status + ", user name already exists.");
                    _this.messageService.changeMessage(m);
                }
                else {
                    var m = new _services_message_service__WEBPACK_IMPORTED_MODULE_6__["CarMessage"]("Error", "Registration failed with " + error.status);
                    _this.messageService.changeMessage(m);
                }
            });
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/rentals/rentals.component.scss":
/*!************************************************!*\
  !*** ./src/app/rentals/rentals.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center;\n}\n\nh3 {\n  text-align: center;\n}\n\n.cardContainer {\n  display: flex;\n  justify-content: space-between;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.topCard {\n  display: inline-block;\n  margin: 15px;\n}\n\n.table {\n  max-width: 800px;\n  margin: 15px;\n}\n\n.carCardContainer {\n  margin-top: 10px;\n  margin-left: 10px;\n  /*display: flex;*/\n  /*align-items: center;*/\n  /*width: 40%;*/\n}\n\n.carCard {\n  display: inline-block;\n  margin: 10px;\n  transition: all 0.2s ease-in-out;\n}\n\n.growOnHover:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n}\n\n.extraMargin {\n  margin-left: 30px;\n}\n\n/*.trimmedimg {\n  position: relative;\n  float: left;\n  width: 100px;\n  height: 100px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n}*/\n\n.modelPic {\n  max-width: 200px;\n}\n\n.modelDetails {\n  font-size: 18px;\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.crop {\n  height: 200px;\n  width: 380px;\n  overflow: hidden;\n}\n\n.crop img {\n  height: auto;\n  width: 380px;\n}\n\n.disabledCursor {\n  cursor: not-allowed !important;\n  opacity: 0.3;\n}\n\n.disabledEvents {\n  pointer-events: none !important;\n}\n\n.link {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVudGFscy9DOlxcVXNlcnNcXHJ5dGVsXFxEZXNrdG9wXFxDYXJSZW50YWxcXENhclJlbnRhbDRcXEFuZ3VsYXJBcHAvc3JjXFxhcHBcXHJlbnRhbHNcXHJlbnRhbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlbnRhbHMvcmVudGFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEREE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNJRjs7QUREQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0lGOztBREZBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUNLRjs7QURIQTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QUNNRjs7QURBQTtFQUNFLGlCQUFBO0FDR0Y7O0FEQUE7Ozs7Ozs7O0VBQUE7O0FBU0E7RUFDRSxnQkFBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNJRjs7QUREQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNJRjs7QURGQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDS0Y7O0FESEE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNNRjs7QURKQTtFQUNFLCtCQUFBO0FDT0Y7O0FETEE7RUFDRSxlQUFBO0FDUUYiLCJmaWxlIjoic3JjL2FwcC9yZW50YWxzL3JlbnRhbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmgzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBib3R0b206IDE1cHg7XHJcbn1cclxuLnRvcENhcmQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDE1cHg7XHJcbn1cclxuLnRhYmxlIHtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuLmNhckNhcmRDb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgLypkaXNwbGF5OiBmbGV4OyovXHJcbiAgLyphbGlnbi1pdGVtczogY2VudGVyOyovXHJcbiAgLyp3aWR0aDogNDAlOyovXHJcbn1cclxuLmNhckNhcmQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxufVxyXG4uZ3Jvd09uSG92ZXI6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSlcclxufVxyXG4uY2FyQ2FyZDpob3ZlciB7XHJcblxyXG59XHJcblxyXG4uZXh0cmFNYXJnaW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4vKi50cmltbWVkaW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0qL1xyXG4ubW9kZWxQaWN7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG4ubW9kZWxEZXRhaWxze1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jcm9wIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAzODBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jcm9wIGltZyB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAzODBweDtcclxufVxyXG4uZGlzYWJsZWRDdXJzb3Ige1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuLmRpc2FibGVkRXZlbnRzIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5saW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiIsImgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmRDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbn1cblxuLnRvcENhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLnRhYmxlIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4uY2FyQ2FyZENvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAvKmRpc3BsYXk6IGZsZXg7Ki9cbiAgLyphbGlnbi1pdGVtczogY2VudGVyOyovXG4gIC8qd2lkdGg6IDQwJTsqL1xufVxuXG4uY2FyQ2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmdyb3dPbkhvdmVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLmV4dHJhTWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi8qLnRyaW1tZWRpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Ki9cbi5tb2RlbFBpYyB7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5tb2RlbERldGFpbHMge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jcm9wIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDM4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY3JvcCBpbWcge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAzODBweDtcbn1cblxuLmRpc2FibGVkQ3Vyc29yIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5kaXNhYmxlZEV2ZW50cyB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/rentals/rentals.component.ts":
/*!**********************************************!*\
  !*** ./src/app/rentals/rentals.component.ts ***!
  \**********************************************/
/*! exports provided: RentalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalsComponent", function() { return RentalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_car_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/car-data.service */ "./src/app/services/car-data.service.ts");
/* harmony import */ var _services_rental_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rental-data.service */ "./src/app/services/rental-data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var RentalsComponent = /** @class */ (function () {
    function RentalsComponent(carService, rentalService, userService, messageService, router) {
        this.carService = carService;
        this.rentalService = rentalService;
        this.userService = userService;
        this.messageService = messageService;
        this.router = router;
        this.carTypeFolder = "./../../assets/carTypes/";
        this.carFolder = "./../../assets/cars/";
        this.fallbackFolder = "./../../assets/fallbackImages/";
        this.allCarsView = false;
        this.carsOfInterest = [];
    }
    RentalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //SUBSRIBE FOR LOGGED USER
        this.userService.user.subscribe(function (user) { return _this.loggedUser = user; });
        //   console.log('ngOninit after getCarType() ' + JSON.stringify(this.carType, null, 2));
        this.getCarType().subscribe(function (_) {
            ;
            (function (error) {
                console.log('problem', error);
                var m = new _services_message_service__WEBPACK_IMPORTED_MODULE_6__["CarMessage"]("Error!", "CarTypes were not imported");
                _this.messageService.changeMessage(m);
            });
        });
        this.getCars().subscribe(function (_) {
            ;
            (function (error) {
                console.log('problem', error);
                var m = new _services_message_service__WEBPACK_IMPORTED_MODULE_6__["CarMessage"]("Error!", "Cars were not imported");
                _this.messageService.changeMessage(m);
            });
            if (_this.carType) {
                _this.carsForSelection = _this.allCars.filter(function (c) { return c.CarType.CarTypeId == _this.carType.CarTypeId; });
            }
        });
        //FILTER RENTALS FOR USER
        this.getRentals().subscribe(function (_) {
            if (_this.loggedUser) {
                _this.assignusersRentals();
                (function (error) {
                    console.log('problem', error);
                    var m = new _services_message_service__WEBPACK_IMPORTED_MODULE_6__["CarMessage"]("Error!", "Rentals were not imported");
                    _this.messageService.changeMessage(m);
                });
            }
        });
        //LOCAL STORAGE FOR FOOTER CARDS
        var temp = JSON.parse(localStorage.getItem('carsOfInterest'));
        if (temp) {
            this.carsOfInterest = temp;
        }
    };
    RentalsComponent.prototype.assignusersRentals = function () {
        var _this = this;
        this.sortedUsersRentals = this.usersRentals = this.rentals.filter(function (r) { return r.User.UserId == _this.loggedUser.UserId; });
    };
    RentalsComponent.prototype.getRentals = function () {
        var _this = this;
        return this.rentalService.getRentals().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (rentals) { _this.rentals = rentals; }));
    };
    RentalsComponent.prototype.getCarType = function () {
        var _this = this;
        return this.carService.carType.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (carType) { _this.carType = carType; }));
    };
    RentalsComponent.prototype.getCars = function () {
        var _this = this;
        return this.carService.getCars().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (carsFS) { _this.allCars = carsFS; }));
    };
    RentalsComponent.prototype.viewAllCars = function () {
        var _this = this;
        if (this.allCarsView == true) {
            this.carsForSelection = this.allCars;
            //  this.allCarsView = true;
        }
        else {
            if (this.carType) {
                this.carsForSelection = this.allCars.filter(function (c) { return c.CarType.CarTypeId == _this.carType.CarTypeId; });
            }
            else {
                this.carsForSelection = [];
                //     this.allCarsView = false;
            }
        }
        // (<HTMLInputElement>document.getElementById("allCarsViewbtn")).style.display = 'none';
    };
    RentalsComponent.prototype.backToSearch = function () {
        this.router.navigateByUrl("/search");
    };
    //Set chosen car and ADD TO LOCAL STORAGE for FOOTER
    RentalsComponent.prototype.setServiceCar = function (car) {
        this.carService.changeCar(car);
        var exists = false;
        var temp = JSON.parse(localStorage.getItem('carsOfInterest'));
        if (temp) {
            for (var i = 0; i < temp.length; i++) {
                if (temp[i].CarId == car.CarId) {
                    exists = true;
                    break;
                }
            }
        }
        if (exists == false) {
            this.carsOfInterest.push(car);
            localStorage.setItem('carsOfInterest', JSON.stringify(this.carsOfInterest));
        }
        //var storedCars = JSON.parse(localStorage.getItem("carsOfInterest"));
        //localStorage.removeItem('carsOfInterest');
    };
    //Past rentals table sort function
    RentalsComponent.prototype.sortData = function (sort) {
        var data = this.usersRentals;
        if (!sort.active || sort.direction === '') {
            this.sortedUsersRentals = data;
            return;
        }
        this.sortedUsersRentals = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'RentalsId': return compare(a.RentalsId, b.RentalsId, isAsc);
                case 'StartDate': return compare(a.StartDate, b.StartDate, isAsc);
                case 'DueBackDate': return compare(a.EndDate, b.EndDate, isAsc);
                case 'ReturnedDate': return compare(a.Returned, b.Returned, isAsc);
                case 'CarId': return compare(a.Car.CarId, b.Car.CarId, isAsc);
                default: return 0;
            }
        });
    };
    RentalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rentals',
            template: __webpack_require__(/*! raw-loader!./rentals.component.html */ "./node_modules/raw-loader/index.js!./src/app/rentals/rentals.component.html"),
            styles: [__webpack_require__(/*! ./rentals.component.scss */ "./src/app/rentals/rentals.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_car_data_service__WEBPACK_IMPORTED_MODULE_2__["CarDataService"],
            _services_rental_data_service__WEBPACK_IMPORTED_MODULE_3__["RentalDataService"],
            _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], RentalsComponent);
    return RentalsComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/search-cars/search-cars.component.scss":
/*!********************************************************!*\
  !*** ./src/app/search-cars/search-cars.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px;\n}\n\nh1 {\n  text-align: center;\n}\n\n.mat-card-title {\n  font-weight: 200;\n}\n\n.carCardContainer h4 {\n  margin-top: 0;\n}\n\n.imageContainer {\n  min-height: 385px;\n}\n\n.carCardContainer {\n  margin-top: 10px;\n  margin-left: 10px;\n  display: flex;\n  width: 99%;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.carCardContainer img {\n  max-width: 100%;\n  max-height: 200px;\n  border-radius: 5px;\n}\n\n.carCard {\n  text-align: center;\n  width: 215px;\n  display: inline-block;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\n.carCard mat-card-content {\n  bottom: 5px;\n  width: 100%;\n}\n\n.carTypeImgSize {\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.carImgSize {\n  display: flex;\n  align-items: center;\n  height: 150px;\n}\n\n.twoLine {\n  height: 60px;\n}\n\n.inline {\n  display: inline-block;\n}\n\n.lftmrgn {\n  margin-left: 10px;\n}\n\n.tpmrgn {\n  margin-top: 10px;\n}\n\nmat-card button {\n  margin-top: 10px;\n  transition: all 0.2s ease-in-out;\n}\n\nmat-card button:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.disabledCursor {\n  cursor: not-allowed !important;\n  opacity: 0.3;\n}\n\n.disabledEvents {\n  pointer-events: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWNhcnMvQzpcXFVzZXJzXFxyeXRlbFxcRGVza3RvcFxcQ2FyUmVudGFsXFxDYXJSZW50YWw0XFxBbmd1bGFyQXBwL3NyY1xcYXBwXFxzZWFyY2gtY2Fyc1xcc2VhcmNoLWNhcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlYXJjaC1jYXJzL3NlYXJjaC1jYXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLGdCQUFBO0FDR0Y7O0FEREE7RUFDRSxhQUFBO0FDSUY7O0FEREE7RUFDRSxpQkFBQTtBQ0lGOztBRERBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUVBLDZCQUFBO0FDR0Y7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBRUEscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEQUE7RUFFRSxXQUFBO0VBQ0EsV0FBQTtBQ0VGOztBREFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDR0Y7O0FEREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0FDSUY7O0FERkE7RUFDRSxxQkFBQTtBQ0tGOztBREhBO0VBQ0UsaUJBQUE7QUNNRjs7QURKQTtFQUNFLGdCQUFBO0FDT0Y7O0FETEE7RUFDRSxnQkFBQTtFQUNBLGdDQUFBO0FDUUY7O0FETkE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDU0Y7O0FEUEE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNVRjs7QURQQTtFQUNFLCtCQUFBO0FDVUYiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtY2Fycy9zZWFyY2gtY2Fycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbmgxe1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbi5tYXQtY2FyZC10aXRsZXtcclxuICBmb250LXdlaWdodDoyMDA7XHJcbn1cclxuLmNhckNhcmRDb250YWluZXIgaDQge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5pbWFnZUNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMzg1cHg7XHJcbn1cclxuXHJcbi5jYXJDYXJkQ29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDk5JTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uY2FyQ2FyZENvbnRhaW5lciBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmNhckNhcmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMjE1cHg7XHJcbiAvLyBoZWlnaHQ6IDM0MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2FyQ2FyZCBtYXQtY2FyZC1jb250ZW50e1xyXG4gLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jYXJUeXBlSW1nU2l6ZSB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNhckltZ1NpemUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG4udHdvTGluZXtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmlubGluZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5sZnRtcmduIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4udHBtcmdue1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxubWF0LWNhcmQgYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxubWF0LWNhcmQgYnV0dG9uOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcclxufVxyXG4uZGlzYWJsZWRDdXJzb3Ige1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5kaXNhYmxlZEV2ZW50cyB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iLCIuZ3JpZC1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4uY2FyQ2FyZENvbnRhaW5lciBoNCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5pbWFnZUNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDM4NXB4O1xufVxuXG4uY2FyQ2FyZENvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTklO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uY2FyQ2FyZENvbnRhaW5lciBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jYXJDYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyQ2FyZCBtYXQtY2FyZC1jb250ZW50IHtcbiAgYm90dG9tOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyVHlwZUltZ1NpemUge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhckltZ1NpemUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4udHdvTGluZSB7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmxmdG1yZ24ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnRwbXJnbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbm1hdC1jYXJkIGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5tYXQtY2FyZCBidXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5kaXNhYmxlZEN1cnNvciB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uZGlzYWJsZWRFdmVudHMge1xuICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/search-cars/search-cars.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-cars/search-cars.component.ts ***!
  \******************************************************/
/*! exports provided: SearchCarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCarsComponent", function() { return SearchCarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_car_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/car-data.service */ "./src/app/services/car-data.service.ts");
/* harmony import */ var _Classes_CarType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Classes/CarType */ "./src/app/Classes/CarType.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");







var SearchCarsComponent = /** @class */ (function () {
    function SearchCarsComponent(carService, router, userService, messageService) {
        this.carService = carService;
        this.router = router;
        this.userService = userService;
        this.messageService = messageService;
        this.fallbackLogo = './../../assets/fallbackImages/BrandName.jpg';
        this.carTypeFolder = "./../../assets/carTypes/";
        this.carFolder = "./../../assets/cars/";
        this.allcarTypeData = [];
        this.reducedModels = [];
        this.allCarData = [];
        this.Manufacturers = [];
        this.Years = [];
        this.displayTypes = [];
        this.displayCars = [];
        this.availableCars = [];
        this.selected = {};
        this.switch = {
            Manual: true,
            Automatic: true,
            Unavailable: true,
        };
        this.defaultCheck = true;
        this.AllCarsView = true;
    }
    SearchCarsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCars().subscribe(function (carData) {
            _this.displayCars = _this.allCarData = carData;
            _this.availableCars = _this.allCarData.filter(function (a) { return a.Available; });
        });
        this.carService.getCarTypes().subscribe(function (carTypeData) {
            _this.displayTypes = _this.reducedModels = _this.allcarTypeData = carTypeData;
            _this.Manufacturers = _this.allcarTypeData.map(function (x) { return x.Manufacturer; }).filter(function (x, i, a) { return a.indexOf(x) == i; });
            _this.Years = _this.allcarTypeData.map(function (x) { return x.YearOfManufacture; }).filter(function (x, i, a) { return a.indexOf(x) == i; }).sort();
        });
        this.userService.swtch.subscribe(function (swtch) { _this.loggedIn = swtch; });
    };
    SearchCarsComponent.prototype.change = function () {
        var _this = this;
        this.selected.Model = "";
        if (this.selected.Manufacturer) {
            this.reducedModels = this.allcarTypeData.filter(function (c) { return c.Manufacturer == _this.selected.Manufacturer; });
            this.displayTypes = this.reducedModels;
        }
        else
            this.reducedModels = this.displayTypes = this.allcarTypeData;
        if (this.AllCarsView == false) {
            this.toggle();
        }
        else
            this.toggle2();
    };
    SearchCarsComponent.prototype.toggle = function () {
        var _this = this;
        var tempCars = this.allcarTypeData;
        if (this.selected.Manufacturer) {
            tempCars = tempCars.filter(function (c) { return c.Manufacturer == _this.selected.Manufacturer; });
        }
        if (this.selected.Model) {
            tempCars = tempCars.filter(function (c) { return c.Model == _this.selected.Model; });
        }
        if (this.selected.Year) {
            tempCars = tempCars.filter(function (c) { return c.YearOfManufacture == _this.selected.Year; });
        }
        tempCars = this.switch.Manual == false ? tempCars.filter(function (c) { return c.Transmission.toString() == _Classes_CarType__WEBPACK_IMPORTED_MODULE_3__["Gear"][0]; }) : tempCars.filter(function (c) { return c; });
        tempCars = this.switch.Automatic == false ? tempCars.filter(function (c) { return c.Transmission.toString() == _Classes_CarType__WEBPACK_IMPORTED_MODULE_3__["Gear"][1]; }) : tempCars.filter(function (c) { return c; });
        tempCars = this.switch.Unavailable == false ? tempCars.filter(function (c) { return _this.availableCars.find(function (a) { return a.CarType.Model == c.Model; }); }) : tempCars.filter(function (c) { return c; });
        if (this.selected.Text) {
            tempCars = tempCars.filter(function (c) { return c.Model.toLowerCase().includes(_this.selected.Text) || c.Manufacturer.toLowerCase().includes(_this.selected.Text); });
        }
        this.displayTypes = tempCars;
    };
    SearchCarsComponent.prototype.toggle2 = function () {
        var _this = this;
        var tempCars = this.allCarData;
        if (this.selected.Manufacturer) {
            tempCars = tempCars.filter(function (c) { return c.CarType.Manufacturer == _this.selected.Manufacturer; });
        }
        if (this.selected.Model) {
            tempCars = tempCars.filter(function (c) { return c.CarType.Model == _this.selected.Model; });
        }
        if (this.selected.Year) {
            tempCars = tempCars.filter(function (c) { return c.CarType.YearOfManufacture == _this.selected.Year; });
        }
        tempCars = this.switch.Manual == false ? tempCars.filter(function (c) { return c.CarType.Transmission.toString() == _Classes_CarType__WEBPACK_IMPORTED_MODULE_3__["Gear"][0]; }) : tempCars.filter(function (c) { return c; });
        tempCars = this.switch.Automatic == false ? tempCars.filter(function (c) { return c.CarType.Transmission.toString() == _Classes_CarType__WEBPACK_IMPORTED_MODULE_3__["Gear"][1]; }) : tempCars.filter(function (c) { return c; });
        tempCars = this.switch.Unavailable == false ? tempCars.filter(function (c) { return c.Available == true; }) : tempCars.filter(function (c) { return c; });
        if (this.selected.Text) {
            tempCars = tempCars.filter(function (c) { return c.CarType.Model.toLowerCase().includes(_this.selected.Text) || c.CarType.Manufacturer.toLowerCase().includes(_this.selected.Text); });
        }
        this.displayCars = tempCars;
    };
    SearchCarsComponent.prototype.rent = function (CarType) {
        console.log(this.loggedIn);
        if (this.loggedIn) {
            this.router.navigateByUrl('/rentals');
        }
        else {
            this.router.navigateByUrl('/login');
            var m = new _services_message_service__WEBPACK_IMPORTED_MODULE_6__["CarMessage"]("No logged user", "Please login, or register if you are not yet a member");
            this.messageService.changeMessage(m);
        }
        this.carService.changeCarType(CarType);
    };
    SearchCarsComponent.prototype.rentals_allCars = function () {
        this.AllCarsView = this.AllCarsView ? false : true;
        //this.router.navigateByUrl('/rentals');
    };
    SearchCarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-cars',
            template: __webpack_require__(/*! raw-loader!./search-cars.component.html */ "./node_modules/raw-loader/index.js!./src/app/search-cars/search-cars.component.html"),
            styles: [__webpack_require__(/*! ./search-cars.component.scss */ "./src/app/search-cars/search-cars.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_car_data_service__WEBPACK_IMPORTED_MODULE_2__["CarDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])
    ], SearchCarsComponent);
    return SearchCarsComponent;
}());



/***/ }),

/***/ "./src/app/services/car-data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/car-data.service.ts ***!
  \**********************************************/
/*! exports provided: CarDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDataService", function() { return CarDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var CarDataService = /** @class */ (function () {
    function CarDataService(client) {
        this.client = client;
        this.Url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].Url;
        this.carTypeDelivery = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.carType = this.carTypeDelivery.asObservable();
        this.carDelivery = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.car = this.carDelivery.asObservable();
    }
    CarDataService.prototype.getCarTypes = function () {
        return this.client.get(this.Url + "CarInfo/GetCarTypes", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log( /*data*/); }));
    };
    CarDataService.prototype.findCarTypes = function (id) {
        return this.client.get(this.Url + "CarInfo/FindCarTypes?id=" + id);
    };
    CarDataService.prototype.findCar = function (id) {
        return this.client.get(this.Url + "CarInfo/FindCar/" + id);
    };
    CarDataService.prototype.deleteCarTypes = function (id) {
        return this.client.delete(this.Url + "CarInfo/DeleteCarTypes?id=" + id);
    };
    CarDataService.prototype.deleteCars = function (id) {
        return this.client.delete(this.Url + "CarInfo/DeleteCars?id=" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("deleted no. " + id); }));
    };
    CarDataService.prototype.getCars = function () {
        return this.client.get(this.Url + "CarInfo/GetCars", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log( /*JSON.stringify(data)*/); }));
    };
    CarDataService.prototype.changeCar = function (car) {
        this.carDelivery.next(car);
    };
    CarDataService.prototype.changeCarType = function (carType) {
        this.carTypeDelivery.next(carType);
    };
    CarDataService.prototype.editCar = function (car) {
        return this.client.put(this.Url + "CarInfo/PutCars", car)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log( /*JSON.stringify(data, null, 2)*/); }));
    };
    CarDataService.prototype.editCarType = function (carType) {
        return this.client.put(this.Url + "CarInfo/PutCarTypes", carType)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log( /*JSON.stringify(data, null, 2)*/); }));
    };
    CarDataService.prototype.newCarType = function (carType) {
        return this.client.post(this.Url + "CarInfo/PostCarTypes", carType)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log( /*JSON.stringify(data, null, 2)*/); }));
    };
    CarDataService.prototype.newCar = function (car) {
        return this.client.post(this.Url + "CarInfo/PostCars", car)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log( /*JSON.stringify(data, null, 2)*/); }));
    };
    CarDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CarDataService);
    return CarDataService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: CarMessage, MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarMessage", function() { return CarMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CarMessage = /** @class */ (function () {
    function CarMessage(title, body, style) {
        this.title = title;
        this.body = body;
        this.style = style || 'info';
        this.display = true;
    }
    return CarMessage;
}());

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messageDelivery = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ body: "", title: "", display: false, style: "" });
        this.message = this.messageDelivery.asObservable();
    }
    MessageService.prototype.changeMessage = function (message) {
        this.messageDelivery.next(message);
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/pipes.ts":
/*!***********************************!*\
  !*** ./src/app/services/pipes.ts ***!
  \***********************************/
/*! exports provided: permissionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permissionPipe", function() { return permissionPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var permissionPipe = /** @class */ (function () {
    function permissionPipe() {
    }
    permissionPipe.prototype.transform = function (value) {
        var newVal;
        if (value == 2) {
            newVal = "Admin";
        }
        else if (value == 1) {
            newVal = "Employee";
        }
        else if (value == 0) {
            newVal = "User";
        }
        else
            newVal = "";
        return newVal;
    };
    permissionPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: "permission" })
    ], permissionPipe);
    return permissionPipe;
}());



/***/ }),

/***/ "./src/app/services/rental-data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/rental-data.service.ts ***!
  \*************************************************/
/*! exports provided: RentalDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalDataService", function() { return RentalDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var RentalDataService = /** @class */ (function () {
    function RentalDataService(client) {
        this.client = client;
        this.Url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].Url;
    }
    RentalDataService.prototype.getRentals = function () {
        return this.client.get(this.Url + "RentalInfo/GetRentals")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log( /*JSON.stringify(data, null, 2)*/); }));
    };
    RentalDataService.prototype.rent = function (rental) {
        console.log(rental);
        return this.client.post(this.Url + "RentalInfo/PostRentals", rental)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(JSON.stringify(data, null, 2)); }));
    };
    RentalDataService.prototype.return = function (rental) {
        return this.client.put(this.Url + "RentalInfo/PutRentals", rental)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(JSON.stringify(data, null, 2)); }));
    };
    RentalDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RentalDataService);
    return RentalDataService;
}());



/***/ }),

/***/ "./src/app/services/user-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user-data.service.ts ***!
  \***********************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var UserDataService = /** @class */ (function () {
    function UserDataService(client, messageService) {
        this.client = client;
        this.messageService = messageService;
        //Url: string = UrlStrings.LocalUrl
        this.Url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].Url;
        //MASTER LOGGED IN PROPERTY -- REMOVE
        this.loginInfo = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.swtch = this.loginInfo.asObservable();
        //LOGGED IN USER -- UNNECCESSARY?
        this.loggedUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.user = this.loggedUser.asObservable();
    }
    UserDataService.prototype.getUsers = function () {
        return this.client.get(this.Url + "UserInfo/GetUsers")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log( /*JSON.stringify(data)*/); }));
    };
    UserDataService.prototype.deleteUsers = function (id) {
        return this.client.delete(this.Url + "UserInfo/DeleteUsers?id=" + id);
    };
    UserDataService.prototype.editUser = function (user) {
        return this.client.put(this.Url + "UserInfo/PutUsers", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log( /*JSON.stringify(data, null, 2)*/); }));
    };
    UserDataService.prototype.switchLoggedIn = function (swtch) {
        this.loginInfo.next(swtch);
    };
    UserDataService.prototype.register = function (user) {
        user.Permission = 0;
        console.log(JSON.stringify(user));
        return this.client.post(this.Url + "UserInfo/PostUsers", user);
    };
    UserDataService.prototype.Login = function (login) {
        //  debugger;
        return this.client.post(this.Url + "UserInfo/Login", login)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log(data); }));
    };
    UserDataService.prototype.Servicelogin = function (s, loggedUser) {
        // this.loginInfo.next(s)
        if (s == false) {
            // localStorage.removeItem('currentUser');
            localStorage.clear();
            var m = new _message_service__WEBPACK_IMPORTED_MODULE_5__["CarMessage"]("Logged out", "so long!");
            this.messageService.changeMessage(m);
        }
        this.loggedUser.next(loggedUser);
        this.switchLoggedIn(s);
    };
    UserDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], UserDataService);
    return UserDataService;
}());

//const Observr = {
//  next: x => console.log(x),
//  complete: () =>
//}
//.pipe(map(data => user = data))
//this.client.post(this.Url + "UserInfo/Login", login).subscribe//.pipe(map(data => user = data))
//  (data => { console.log("Log attempt: " + JSON.stringify(data, null, 2)) }),
//  (error => console.log(error));
//return JSON.parse(user);


/***/ }),

/***/ "./src/app/side-nav/side-nav.component.scss":
/*!**************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container .sidenav mat-nav-list {\n  overflow: hidden;\n}\n\n.sidenav {\n  width: 200px;\n  overflow: hidden;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar-single-row span {\n  padding: 16px;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {\n  font-weight: 200;\n}\n\n.mat-toolbar a {\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  margin-right: 20px;\n}\n\n.mat-toolbar a:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.link {\n  cursor: pointer;\n  transition: all 0.1s ease-in-out;\n  margin-right: 16px;\n  outline: 0;\n  z-index: 1;\n}\n\n.link:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  color: orange;\n}\n\n.link * {\n  display: inline-block;\n  cursor: pointer;\n}\n\n.link .iconbox {\n  margin-right: 5px;\n}\n\n.link .iconbox i {\n  float: right;\n  max-width: none;\n  max-height: none;\n}\n\n.logo {\n  width: 170px;\n  position: absolute;\n  bottom: 10px;\n  left: 15px;\n  z-index: -1;\n}\n\n.logo_nav {\n  width: 200px;\n  margin-left: 0px;\n  margin-right: 20px;\n}\n\n.example-fill-remaining-space {\n  flex: 1 1 auto;\n}\n\n.right {\n  margin-left: 15px;\n}\n\nmat-nav-list label {\n  font-family: \"Arial\";\n}\n\nmat-toolbar {\n  padding-left: 20px;\n}\n\n.disabled {\n  pointer-events: none;\n  cursor: default;\n  opacity: 0.5;\n}\n\na label {\n  cursor: pointer;\n}\n\n.routerWrapper {\n  min-height: 75vh;\n}\n\n.iconbox {\n  display: flex;\n  width: 25px;\n}\n\n.fa-car {\n  font-size: 26px;\n}\n\n.dark {\n  opacity: 0.2;\n  right: 0px;\n}\n\n.rghtMrgn {\n  margin-right: 16px;\n}\n\n.nudge {\n  margin-right: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1uYXYvQzpcXFVzZXJzXFxyeXRlbFxcRGVza3RvcFxcQ2FyUmVudGFsXFxDYXJSZW50YWw0XFxBbmd1bGFyQXBwL3NyY1xcYXBwXFxzaWRlLW5hdlxcc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsbUJBQUE7QUNHRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURDQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDSUY7O0FEREE7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDSUY7O0FERkE7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsYUFBQTtBQ0tGOztBREZBO0VBQ0UscUJBQUE7RUFFQSxlQUFBO0FDSUY7O0FERkE7RUFDRSxpQkFBQTtBQ0tGOztBREhBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ01GOztBREpBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDT0Y7O0FETEE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1FGOztBRExBO0VBQ0UsY0FBQTtBQ1FGOztBRE5BO0VBQ0UsaUJBQUE7QUNTRjs7QURQQTtFQUVFLG9CQUFBO0FDU0Y7O0FEUEE7RUFDRSxrQkFBQTtBQ1VGOztBRFJBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ1dGOztBRFRBO0VBQ0UsZUFBQTtBQ1lGOztBRFZBO0VBQ0UsZ0JBQUE7QUNhRjs7QURYQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDY0Y7O0FEWkE7RUFDRSxlQUFBO0FDZUY7O0FEYkE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQ2dCRjs7QURkQTtFQUNFLGtCQUFBO0FDaUJGOztBRGZBO0VBQ0Usa0JBQUE7QUNrQkYiLCJmaWxlIjoic3JjL2FwcC9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciAuc2lkZW5hdiBtYXQtbmF2LWxpc3Qge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnNpZGVuYXYge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG4ubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XHJcbiAvLyBwYWRkaW5nOiAwO1xyXG59XHJcbi5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHNwYW4ge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5tYXQtdG9vbGJhciwgLm1hdC10b29sYmFyIGgxLCAubWF0LXRvb2xiYXIgaDIsIC5tYXQtdG9vbGJhciBoMywgLm1hdC10b29sYmFyIGg0LCAubWF0LXRvb2xiYXIgaDUsIC5tYXQtdG9vbGJhciBoNiB7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG4vL0hPVkVSU1xyXG4ubWF0LXRvb2xiYXIgYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5tYXQtdG9vbGJhciBhOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKVxyXG59XHJcbi8vSE9WRVJTXHJcbi5saW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgb3V0bGluZTogMDtcclxuICB6LWluZGV4OjE7XHJcbn1cclxuLmxpbms6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgY29sb3I6IG9yYW5nZTtcclxuLy8gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCk7XHJcbn1cclxuLmxpbmsgKiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gLy8gbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubGluayAuaWNvbmJveCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmxpbmsgLmljb25ib3ggaSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1heC13aWR0aDogbm9uZTtcclxuICBtYXgtaGVpZ2h0OiBub25lO1xyXG59XHJcbi5sb2dvIHtcclxuICB3aWR0aDogMTcwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTBweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbi5sb2dvX25hdiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuLnJpZ2h0IHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5tYXQtbmF2LWxpc3QgbGFiZWx7XHJcbiAgLy9tYXJnaW4tbGVmdDogMTBweDtcclxuICBmb250LWZhbWlseTogJ0FyaWFsJztcclxufVxyXG5tYXQtdG9vbGJhcntcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLmRpc2FibGVkIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbmEgbGFiZWwge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucm91dGVyV3JhcHBlcntcclxuICBtaW4taGVpZ2h0OiA3NXZoO1xyXG59XHJcbi5pY29uYm94e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbn1cclxuLmZhLWNhciB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcbi5kYXJre1xyXG4gIG9wYWNpdHk6IDAuMjtcclxuICByaWdodDogMHB4O1xyXG59XHJcbi5yZ2h0TXJnbntcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuLm51ZGdle1xyXG4gIG1hcmdpbi1yaWdodDogMjVweDtcclxufVxyXG4iLCIuc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYgbWF0LW5hdi1saXN0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHNwYW4ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5tYXQtdG9vbGJhciwgLm1hdC10b29sYmFyIGgxLCAubWF0LXRvb2xiYXIgaDIsIC5tYXQtdG9vbGJhciBoMywgLm1hdC10b29sYmFyIGg0LCAubWF0LXRvb2xiYXIgaDUsIC5tYXQtdG9vbGJhciBoNiB7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5tYXQtdG9vbGJhciBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubWF0LXRvb2xiYXIgYTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIG91dGxpbmU6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5saW5rOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmxpbmsgKiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGluayAuaWNvbmJveCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubGluayAuaWNvbmJveCBpIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXgtd2lkdGg6IG5vbmU7XG4gIG1heC1oZWlnaHQ6IG5vbmU7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDE3MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogMTVweDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5sb2dvX25hdiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ucmlnaHQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxubWF0LW5hdi1saXN0IGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbn1cblxubWF0LXRvb2xiYXIge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuYSBsYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJvdXRlcldyYXBwZXIge1xuICBtaW4taGVpZ2h0OiA3NXZoO1xufVxuXG4uaWNvbmJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4uZmEtY2FyIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG4uZGFyayB7XG4gIG9wYWNpdHk6IDAuMjtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLnJnaHRNcmduIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4ubnVkZ2Uge1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/side-nav/side-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.ts ***!
  \************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _slideAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../slideAnimation */ "./src/app/slideAnimation.ts");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(breakpointObserver, userService, router) {
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        this.userService = userService;
        this.router = router;
        this.loggedIn = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
        this.userService.swtch.subscribe(function (swtch) { _this.loggedIn = swtch; });
        this.userService.user.subscribe(function (user) { return _this.loggedUser = user; });
    }
    SideNavComponent.prototype.calltoLogout = function () {
        this.userService.Servicelogin(false, null);
    };
    SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! raw-loader!./side-nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/side-nav/side-nav.component.html"),
            animations: [_slideAnimation__WEBPACK_IMPORTED_MODULE_4__["slideInAnimation"]],
            styles: [__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/side-nav/side-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"],
            _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/slideAnimation.ts":
/*!***********************************!*\
  !*** ./src/app/slideAnimation.ts ***!
  \***********************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInAnimation', [
    // Transition between any two states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        // Events to apply
        // Defined style and animation function to apply
        // Config object with optional set to true to handle when element not yet added to the DOM
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
        // group block executes in parallel
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true })
        ])
    ])
]);


/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false,
    Url: "http://localhost:64825/api/",
    greeting: "I, mailChimp, will oversee development",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rytel\Desktop\CarRental\CarRental4\AngularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map