System.register(['@angular/core', '@angular/common', './registration', './registration.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, common_1, registration_1, registration_service_1, router_1;
    var RegistrationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (registration_1_1) {
                registration_1 = registration_1_1;
            },
            function (registration_service_1_1) {
                registration_service_1 = registration_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RegistrationComponent = (function () {
                function RegistrationComponent(fb, registrationService, router) {
                    this.registrationService = registrationService;
                    this.router = router;
                    this.registration = new registration_1.Registration();
                    this.loginForm = fb.group({
                        email: [this.registration.email, common_1.Validators.required],
                        uname: [this.registration.uname, common_1.Validators.required]
                    });
                }
                RegistrationComponent.prototype.doLogin = function (event) {
                    var _this = this;
                    if (this.loginForm.dirty && this.loginForm.valid) {
                        this.registrationService.addUser(this.loginForm.value).subscribe(function (data) { return _this.success(data._body); }, function (err) { return _this.logError(err); }, function () { console.log("success"); });
                    }
                    event.preventDefault();
                };
                RegistrationComponent.prototype.success = function (data) {
                    var a = JSON.parse(data);
                    console.log(a.email);
                    this.router.navigate(['deal']);
                };
                RegistrationComponent = __decorate([
                    core_1.Component({
                        selector: 'registration',
                        templateUrl: "app/templates/registration.html",
                        providers: [registration_service_1.RegistrationService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, registration_service_1.RegistrationService, router_1.Router])
                ], RegistrationComponent);
                return RegistrationComponent;
            }());
            exports_1("RegistrationComponent", RegistrationComponent);
        }
    }
});
//# sourceMappingURL=registration.component.js.map