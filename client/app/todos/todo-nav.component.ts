import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-todonav',
    template: `
        <div class="container">
            <ul class="nav nav-pills">
                <li role="presentation"><a [routerLink]="['manage']" >Todos</a></li>
                <li role="presentation"><a>Completed</a></li>
            </ul>
        <div>
        <router-outlet></router-outlet>
    `
})
export class TodoNavComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}