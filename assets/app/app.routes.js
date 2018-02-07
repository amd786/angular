System.register(['@angular/router', './components/registration/registration.component', './components/deal/deal.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, registration_component_1, deal_component_1;
    var routes, appRouterProviders;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (registration_component_1_1) {
                registration_component_1 = registration_component_1_1;
            },
            function (deal_component_1_1) {
                deal_component_1 = deal_component_1_1;
            }],
        execute: function() {
            routes = [
                {
                    path: '',
                    component: registration_component_1.RegistrationComponent
                },
                {
                    path: 'deal',
                    component: deal_component_1.DealComponent
                }
            ];
            exports_1("appRouterProviders", appRouterProviders = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map