import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero.model";
import { HeroService } from"./hero.service";
// Add the RxJS Observable operators.
import 'app/rxjs-operators';

@Component({
    moduleId: module.id,
    selector: "toh-heroes",
    templateUrl: "heroes.component.html",
    styleUrls: ["heroes.component.css"],
    providers: [HeroService]
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    constructor(private heroService: HeroService) { }

    ngOnInit() {
        //this.heroes = this.heroService.getHeroes();
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}