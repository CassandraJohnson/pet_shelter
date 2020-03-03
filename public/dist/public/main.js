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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align:center\">\n  <h1>Pet Shelter</h1>\n  <h3>These pets are looking for a home!<h3><br>\n      <button class=\"favorite styled\" type=\"button\" [routerLink]=\"['']\">Home</button> \n      <button class=\"favorite styled\" type=\"button\" [routerLink]=\"['/new']\">Add a pet</button>\n      <br><br>\n      <router-outlet></router-outlet>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Detail about {{thispet.name}}</h3>\n<table>\n  <tr>\n    <th>Pet Type:</th>\n    <td>{{thispet.pettype}}</td>\n  </tr>\n  <tr>\n    <th>Description:</th>\n    <td>{{thispet.description}}</td>\n  </tr>\n  <tr>\n    <th>Skill#1:</th>\n    <td>{{thispet.skill1}} </td>\n  </tr>\n  <tr>\n    <th>Skill#2:</th>\n    <td>{{thispet.skill2}}</td>\n  </tr>\n  <tr>\n    <th>Skill#3:</th>\n    <td>{{thispet.skill3}} </td>\n  </tr>\n  <tr>\n    <th>Likes:</th>\n    <td>{{thispet.like_count}}</td>\n  </tr>\n  <tr>\n    <td><button *ngIf=\"thispet.seeLike\" (click)=\"onLike(thispet)\">Like</button> </td>\n    <td><button (click)=\"onDelete(thispet._id)\">Adopt</button> </td>\n  </tr>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Edit a Pet</h2>\n\n<p id=\"error\" style=\"background: red; color:white;\">{{message}}</p>\n\n<div id=\"newform\">\n  <form (submit)=\"onEdit(thispet)\">\n    <table>\n      <tr>\n        <th>Pet name:</th>\n        <td><input type=\"text\" name=\"thispet.name\" [(ngModel)]=\"thispet.name\" /></td>\n      </tr>\n      <tr>\n        <th>Pet type:</th>\n        <td><input type=\"text\" name=\"thispet.pettype\" [(ngModel)]=\"thispet.pettype\" /></td>\n      </tr>\n      <tr>\n        <th>Description:</th>\n        <td><input type=\"text\" name=\"thispet.description\" [(ngModel)]=\"thispet.description\" /></td>\n      </tr>\n      <h3>Add skills(optional)</h3>\n      <tr>\n        <th>Skill#1:</th>\n        <td><input type=\"text\" name=\"thispet.skill1\" [(ngModel)]=\"thispet.skill1\" /></td>\n      </tr>\n      <tr>\n        <th>Skill#2:</th>\n        <td><input type=\"text\" name=\"thispet.skill2\" [(ngModel)]=\"thispet.skill2\" /></td>\n      </tr>\n      <tr>\n        <th>Skill#3:</th>\n        <td><input type=\"text\" name=\"thispet.skill3\" [(ngModel)]=\"thispet.skill3\" /></td>\n      </tr>\n      <tr>\n        <td><button [routerLink]=\"['']\">Cancel</button> </td>\n        <td><input type=\"submit\" value=\"Edit This Pet\" /></td>\n      </tr>\n    </table>\n  </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<fieldset>\n  <table>\n    <tr>\n      <th>Pet Name</th>\n      <th>Type</th>\n      <th>Action</th>\n    </tr>\n    <tr *ngFor=\"let a of pets\">\n      <td>{{a.name}}</td>\n      <td>{{a.pettype}}</td>\n      <td><button [routerLink]=\"['/edit/', a._id]\">Edit</button> - <button (click)=\"onDelete(a._id)\">Adopt</button> -\n        <button [routerLink]=\"['/detail/', a._id]\">Details</button></td>\n    </tr>\n  </table>\n</fieldset>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new/new.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new/new.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Pet Shelter</h2>\n<h3>Please add a pet that needs a home</h3>\n<p id=\"error\" style=\"background: rgb(10, 61, 8);color:white;\">{{message}}</p>\n\n<div id=\"nform\">\n  <form (submit)=\"onSubmit()\">\n    <table>\n      <tr>\n        <th>Pet's name:</th>\n        <td><input type=\"text\" name=\"newPet.name\" [(ngModel)]=\"newPet.name\" /></td>\n      </tr>\n      <tr>\n        <th>Pet's type:</th>\n        <td><input type=\"text\" name=\"newPet.pettype\" [(ngModel)]=\"newPet.pettype\" /></td>\n      </tr>\n      <tr>\n        <th>Description:</th>\n        <td><input type=\"text\" name=\"newPet.description\" [(ngModel)]=\"newPet.description\" /></td>\n      </tr>\n      <tr>\n        <th>Add skill #1:</th>\n        <td><input type=\"text\" name=\"newPet.skill1\" [(ngModel)]=\"newPet.skill1\" /></td>\n      </tr>\n      <tr>\n        <th>Add skill #2:</th>\n        <td><input type=\"text\" name=\"newPet.skill2\" [(ngModel)]=\"newPet.skill2\" /></td>\n      </tr>\n      <tr>\n        <th>Add skill #3:</th>\n        <td><input type=\"text\" name=\"newPet.skill3\" [(ngModel)]=\"newPet.skill3\" /></td>\n      </tr>\n\n      <tr>\n        <td><button [routerLink]=\"['']\">Cancel</button> </td>\n        <td><input type=\"submit\" value=\"Add New Pet\" /></td>\n      </tr>\n    </table>\n  </form>\n</div>");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");







var routes = [
    {
        path: 'new',
        component: _new_new_component__WEBPACK_IMPORTED_MODULE_3__["NewComponent"]
    },
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'edit/:id',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
    },
    {
        path: 'detail/:id',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".styled {\n    border: 0;\n    line-height: 2.5;\n    padding: 0 20px;\n    font-size: 1rem;\n    text-align: center;\n    color: #fff;\n    text-shadow: 1px 1px 1px #000;\n    border-radius: 10px;\n    background-color: rgb(135, 94, 189);\n    background-image: -webkit-gradient(linear,\n                                      right bottom, left top,\n                                      from(rgba(0, 0, 0, .2)),\n                                      color-stop(30%, rgba(0, 0, 0, .2)),\n                                      to(rgba(0, 0, 0, 0)));\n    background-image: linear-gradient(to top left,\n                                      rgba(0, 0, 0, .2),\n                                      rgba(0, 0, 0, .2) 30%,\n                                      rgba(0, 0, 0, 0));\n    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),\n                inset -2px -2px 3px rgba(0, 0, 0, .6);\n}\n\n.styled:hover {\n    background-color: rgb(135, 94, 189);\n}\n\n.styled:active {\n    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),\n                inset 2px 2px 3px rgba(0, 0, 0, .6);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQzs7OzsyREFHbUQ7SUFIbkQ7Ozt1REFHbUQ7SUFDbkQ7cURBQ2lEO0FBQ3JEOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0k7bURBQytDO0FBQ25EIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R5bGVkIHtcbiAgICBib3JkZXI6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDIuNTtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsIDk0LCAxODkpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjIpIDMwJSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuNiksXG4gICAgICAgICAgICAgICAgaW5zZXQgLTJweCAtMnB4IDNweCByZ2JhKDAsIDAsIDAsIC42KTtcbn1cblxuLnN0eWxlZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwgOTQsIDE4OSk7XG59XG5cbi5zdHlsZWQ6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMnB4IC0ycHggM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpLFxuICAgICAgICAgICAgICAgIGluc2V0IDJweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgLjYpO1xufVxuIl19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        // this._router.navigate(['']);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_8__["NewComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_10__["DetailComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/detail/detail.component.css":
/*!*********************************************!*\
  !*** ./src/app/detail/detail.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var DetailComponent = /** @class */ (function () {
    function DetailComponent(_httpService, _route, router) {
        this._httpService = _httpService;
        this._route = _route;
        this.router = router;
        this.seeLike = true;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.id = params['id'];
        });
        this.getPetFromService();
        this.getPetForlike();
    };
    DetailComponent.prototype.getPetFromService = function () {
        var _this = this;
        var observable = this._httpService.getOnePet(this.id);
        observable.subscribe(function (data) {
            console.log("Found our pet", data);
            _this.thispet = data['data'];
        });
    };
    DetailComponent.prototype.getPetForlike = function () {
        var _this = this;
        var observable = this._httpService.getOnePet(this.id);
        observable.subscribe(function (data) {
            console.log("Found our pet", data);
            _this.thispet = data['data'];
            _this.thispet.seeLike = true;
        });
    };
    DetailComponent.prototype.onDelete = function (pet_id) {
        var _this = this;
        var delete_task = this._httpService.deletePet(pet_id);
        delete_task.subscribe(function (data) {
            //go back home here
            _this.router.navigate(['']);
        });
    };
    DetailComponent.prototype.onLike = function (thispet) {
        var _this = this;
        thispet.seeLike = false;
        var addLike = this._httpService.addOneLike(thispet._id, thispet);
        addLike.subscribe(function (data) {
            console.log("Got data from post back", data);
            _this.getPetFromService();
        });
    };
    DetailComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    DetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./detail.component.css */ "./src/app/detail/detail.component.css")).default]
        })
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _route, router) {
        this._httpService = _httpService;
        this._route = _route;
        this.router = router;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.id = params['id'];
        });
        this.getPetFromService();
    };
    EditComponent.prototype.getPetFromService = function () {
        var _this = this;
        var observable = this._httpService.getOnePet(this.id);
        observable.subscribe(function (data) {
            console.log("Got our One pet", data);
            _this.thispet = data['data'];
        });
    };
    EditComponent.prototype.onEdit = function (thispet) {
        var _this = this;
        var Observable = this._httpService.editPet(this.id, thispet);
        Observable.subscribe(function (data) {
            console.log("Edited Pet", data);
            if (data['error'] != null) {
                _this.message = data['error']['message'];
            }
            else {
                _this.router.navigate(['/detail/' + thispet._id]);
            }
        });
    };
    EditComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    EditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")).default]
        })
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n\tbackground: black; color: white;\n}\n* {\n\tbackground: rgb(16, 74, 128);\n}\nfieldset{\n\twidth: 30%;\n\tmargin-left: 460px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxpQkFBaUIsRUFBRSxZQUFZO0FBQ2hDO0FBQ0E7Q0FDQyw0QkFBNEI7QUFDN0I7QUFDQTtDQUNDLFVBQVU7Q0FDVixrQkFBa0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG5cdGJhY2tncm91bmQ6IGJsYWNrOyBjb2xvcjogd2hpdGU7XG59XG4qIHtcblx0YmFja2dyb3VuZDogcmdiKDE2LCA3NCwgMTI4KTtcbn1cbmZpZWxkc2V0e1xuXHR3aWR0aDogMzAlO1xuXHRtYXJnaW4tbGVmdDogNDYwcHg7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.pets = [];
        this.AllPets();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.AllPets = function () {
        var _this = this;
        var allpets = this._httpService.getPets();
        allpets.subscribe(function (data) {
            _this.pets = data['pets'];
            console.log(data);
        });
    };
    HomeComponent.prototype.onDelete = function (autho_id) {
        var _this = this;
        var delete_task = this._httpService.deletePet(autho_id);
        delete_task.subscribe(function (data) {
            _this.AllPets();
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
    ]; };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.addPet = function (newtask) {
        console.log('httpService worked!!');
        return this._http.post('/addNew', newtask);
    };
    HttpService.prototype.getPets = function () {
        return this._http.get('/all');
    };
    HttpService.prototype.deletePet = function (pet_id) {
        return this._http.delete('/pet/' + pet_id);
    };
    HttpService.prototype.editPet = function (pet_id, onepet) {
        return this._http.put('/pet/' + pet_id, onepet);
    };
    HttpService.prototype.getOnePet = function (pet_id) {
        return this._http.get('/pet/' + pet_id);
    };
    HttpService.prototype.addOneLike = function (pet_id, onepet) {
        return this._http.put('/petlike/' + pet_id, onepet);
    };
    HttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy9uZXcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




var NewComponent = /** @class */ (function () {
    function NewComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.error = [];
    }
    NewComponent.prototype.ngOnInit = function () {
        this.newPet = { name: "", pettype: "", description: "", skill1: "", skill2: "", skill3: "" };
    };
    NewComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('hit onSubmit');
        var observable = this._httpService.addPet(this.newPet);
        observable.subscribe(function (data) {
            console.log("Got data from post back", data);
            if (data['error'] != null) {
                _this.message = data['error']['message'];
            }
            else {
                _this._router.navigate(['']);
            }
            _this.newPet = { name: "", pettype: "", description: "", skill1: "", skill2: "", skill3: "" };
        });
    };
    NewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
    ]; };
    NewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new',
            template: __importDefault(__webpack_require__(/*! raw-loader!./new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new/new.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")).default]
        })
    ], NewComponent);
    return NewComponent;
}());



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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/pet_shelter/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map