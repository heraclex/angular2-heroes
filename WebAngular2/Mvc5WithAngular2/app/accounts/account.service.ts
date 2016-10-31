import { Injectable }     from "@angular/core";
import { Http } from '@angular/http';
import { RegisterModel } from "./register.model";

@Injectable()
export class AccountService {
    constructor(private http: Http) {}
    
    register(model: RegisterModel) {
        return this.http.post("/api/account/register", { model: model});
    }
}