import {Component} from '@angular/core';

@Component({
    selector: 'app-todonav',
    template: `
            <header class="row spacing">
                <nav class="col-md-8 col-md-offset-2">
                    <ul class="nav nav-pills">
                        <li role="presentation"><a [routerLink]="['manage']">Todos</a></li>
                        <li role="presentation"><a>Completed</a></li>
                    </ul>
                </nav>
            </header>
            <div class="row spacing">     
                <router-outlet></router-outlet>
            </div>
    `
})
export class TodoNavComponent {

    constructor() {
    }

}