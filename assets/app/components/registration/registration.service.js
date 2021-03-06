System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var RegistrationService, RegistrationService2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            RegistrationService = (function () {
                function RegistrationService(http) {
                    this.http = http;
                    this.usersGet = '/user';
                    this.usersCreate = '/user/create';
                }
                RegistrationService.prototype.addUser = function (newUser) {
                    return this.http.get(this.usersCreate + "?name=" + newUser.uname + "&email=" + newUser.email);
                    map(function (res) { return res.json(); });
                };
                RegistrationService.prototype.extractData = function (res) {
                    var body = res.json();
                    return body.data || {};
                };
                RegistrationService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                };
                RegistrationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RegistrationService);
                return RegistrationService;
            }());
            exports_1("RegistrationService", RegistrationService);
            RegistrationService2 = (function () {
                function RegistrationService2(http) {
                    this.http = http;
                    this.usersGet = '/user';
                    this.usersCreate = '/user/create';
                }
                RegistrationService2.prototype.addUser = function (newUser) {
                    return this.http.get(this.usersCreate + "?name=" + newUser.uname + "&email=" + newUser.email);
                    map(function (res) { return res.json(); });
                };
                RegistrationService2.prototype.extractData = function (res) {
                    var body = res.json();
                    return body.data || {};
                };
                RegistrationService2.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                };
                return RegistrationService2;
            }());
            exports_1("RegistrationService2", RegistrationService2);
        }
    }
});
//# sourceMappingURL=registration.service.js.map