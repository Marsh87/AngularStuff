System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ReimbursementService;
    return {
        setters:[],
        execute: function() {
            ReimbursementService = (function () {
                function ReimbursementService() {
                }
                ReimbursementService.prototype.getReimbursements = function () {
                    return ["Reimbursement1", "Reimbursement2", "Reimbursement3"];
                };
                return ReimbursementService;
            }());
            exports_1("ReimbursementService", ReimbursementService);
        }
    }
});
//# sourceMappingURL=reimbursement.service.js.map