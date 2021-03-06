﻿import {Component, OnInit, Input} from "@angular/core";
import {Hero} from "./hero.model";

@Component({
    moduleId: module.id,
    selector: "toh-hero",
    templateUrl: "hero.component.html",
})
export class HeroComponent {
    @Input()hero: Hero;
    //@Input() hero: Hero;
}