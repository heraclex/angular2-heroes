import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroComponent } from "./heroes/hero.component";
import Registercomponent = require("./accounts/register.component");

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, JsonpModule],
    declarations: [AppComponent, HeroesComponent, HeroComponent, Registercomponent.RegisterComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
