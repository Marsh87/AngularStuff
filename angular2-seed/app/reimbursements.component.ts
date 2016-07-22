import {Component} from 'angular2/core';
import {ReimbursementService} from './reimbursement.service';
@Component({
    selector:'reimbursements',
    template:`
    <h2>Reimbursements</h2>
    {{title}}
    <ul>
    <li *ngFor="reimbursement of reimbursements">
    {{reimbursement}}
    </li>
    </ul>
    `,
    providers:[ReimbursementService]
})
export class ReimbursementsComponent{
    reimbursements:string[];
    title="The list of Reimbursements"
    constructor(reimbursementService:ReimbursementService){
        this.reimbursements=reimbursementService.getReimbursements();
    }
}