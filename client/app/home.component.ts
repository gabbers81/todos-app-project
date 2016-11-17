import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-app',
    template: `
        <div class="jumbotron">
            <h1>Welcome!</h1>
                <p>To use the application please follow the next steps</p>
                <ul>
                    <li>Click the sign up button in the right corner of the nav and create an user</li>
                    <li>Log in into the application</li>
                    <li>Start creating your Todo list!</li>
                </ul>
                <p><a class="btn btn-primary btn-lg" routerLink="/user/signup" role="button">Simple, right? Get started!</a></p>
        </div>
    `
})

export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}