System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Deal;
    return {
        setters:[],
        execute: function() {
            Deal = (function () {
                function Deal(id, amount, email) {
                    this.id = id;
                    this.amount = amount;
                    this.email = email;
                }
                return Deal;
            }());
            exports_1("Deal", Deal);
        }
    }
});
//# sourceMappingURL=deal.js.map