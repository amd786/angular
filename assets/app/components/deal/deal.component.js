System.register(['@angular/core', '@angular/common', './deal', './deal.service'], function(exports_1, context_1) {
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
    var core_1, common_1, deal_1, deal_service_1;
    var DealComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (deal_1_1) {
                deal_1 = deal_1_1;
            },
            function (deal_service_1_1) {
                deal_service_1 = deal_service_1_1;
            }],
        execute: function() {
            DealComponent = (function () {
                function DealComponent(fb, dealService) {
                    this.dealService = dealService;
                    this.title = "Bidding";
                    this.deal = new deal_1.Deal();
                }
                DealComponent = __decorate([
                    core_1.Component({
                        selector: 'deal-form',
                        templateUrl: "app/templates/deal.html",
                        providers: [deal_service_1.DealService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, deal_service_1.DealService])
                ], DealComponent);
                return DealComponent;
            }());
            exports_1("DealComponent", DealComponent);
        }
    }
});
//# sourceMappingURL=deal.component.js.map