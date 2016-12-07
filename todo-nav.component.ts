import {Component} from '@angular/core';

@Component({
    selector: 'app-todonav',
    template: `
            <header class="row spacing">
                <nav class="col-md-10 col-md-offset-5">
                    <ul class="nav nav-pills">
                        <li role="presentation" routerLinkActive="active" ><a [routerLink]="['manage']">Todos</a></li>
                        <li role="presentation" routerLinkActive="active" ><a [routerLink]="['completed']">Completed</a></li>
                    </ul>
                </nav>
            </header>
            <hr>
            <div class="row spacing">     
                <router-outlet></router-outlet>
            </div>
    `
})
export class TodoNavComponent {

    constructor() {
    }

}