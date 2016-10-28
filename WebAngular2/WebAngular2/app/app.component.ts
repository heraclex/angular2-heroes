import {Component, Directive} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1> {{title }} </h1>
    <toh-heroes></toh-heroes>
`
})
export class AppComponent {
    title = 'An Angular 2 Force Awakens';
}