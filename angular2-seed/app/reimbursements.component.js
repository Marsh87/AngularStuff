System.register(['angular2/core', './reimbursement.service'], function(exports_1, context_1) {
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
    var core_1, reimbursement_service_1;
    var ReimbursementsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (reimbursement_service_1_1) {
                reimbursement_service_1 = reimbursement_service_1_1;
            }],
        execute: function() {
            ReimbursementsComponent = (function () {
                function ReimbursementsComponent(reimbursementService) {
                    this.title = "The list of Reimbursements";
                    this.reimbursements = reimbursementService.getReimbursements();
                }
                ReimbursementsComponent = __decorate([
                    core_1.Component({
                        selector: 'reimbursements',
                        template: "\n    <h2>Reimbursements</h2>\n    {{title}}\n    <ul>\n    <li *ngFor=\"reimbursement of reimbursements\">\n    {{reimbursement}}\n    </li>\n    </ul>\n    ",
                        providers: [reimbursement_service_1.ReimbursementService]
                    }), 
                    __metadata('design:paramtypes', [reimbursement_service_1.ReimbursementService])
                ], ReimbursementsComponent);
                return ReimbursementsComponent;
            }());
            exports_1("ReimbursementsComponent", ReimbursementsComponent);
        }
    }
});
//# sourceMappingURL=reimbursements.component.js.map