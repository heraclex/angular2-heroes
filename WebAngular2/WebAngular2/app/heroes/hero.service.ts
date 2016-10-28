import { Injectable }     from "@angular/core";
import { Http, Response } from "@angular/http";
//import {Observable} from "rxjs/Observable";
//import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {
    //private http: Http, private response: Response
    constructor() { }

    getHeroes() {
        //return this.http.get("app/heroes/heroes.json").map((res: Response)=>res.json());
        return [
            {"id": 11,"name": "Chewbacca", "twitter": "@im_chewy"},
            {"id": 12,"name": "Rey","twitter": "@rey"},
            {"id": 13,"name": "Finn (FN2187)","twitter": "@finn"},
            {"id": 14,"name": "Han Solo","twitter": "@i_know"},
            {"id": 15,"name": "Leia Organa","twitter": "@organa"},
            {"id": 16,"name": "Luke Skywalker","twitter": "@chosen_one_son"},
            {"id": 17,"name": "Poe Dameron","twitter": "@i_am_poe"},
            {"id": 18,"name": "Kylo Ren","twitter": "@daddy_issues"},
            {"id": 19,"name": "Supreme Commander Snoke","twitter": "@snoker"},
            {"id": 20,"name": "R2-D2","twitter": "@r2d2"},
            { "id": 21, "name": "BB8", "twitter": "@bb_eight" },
            { "id": 22, "name": "Toan", "twitter": "@xxxxx" }
        ];
    }
}