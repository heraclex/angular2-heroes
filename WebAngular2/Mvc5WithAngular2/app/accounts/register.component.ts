import {Component, OnInit, Input} from "@angular/core";
import {RegisterModel} from "./register.model";
import { AccountService } from "./account.service";

@Component({
    moduleId: module.id,
    selector: "register-component",
    templateUrl: "register.component.html",
    providers: [AccountService]
})
export class RegisterComponent implements OnInit {
    //@Input() model: RegisterModel;
    model: RegisterModel;
    constructor(private accountService: AccountService) {}

    ngOnInit() {
        //this.accountService.getHeroes().subscribe(data => this.heroes = heroes.json());
        this.model = new RegisterModel();
    }

    onSubmit(model: RegisterModel) {
        this.accountService.register(model).subscribe(accountId => console.log(accountId.json()));
    }
}