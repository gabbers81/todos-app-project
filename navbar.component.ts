import { Router } from '@angular/router';
import { UserService } from './../users/user.service';
import { Component } from '@angular/core'

@Component({
    selector: '<app-navbar></app-navbar>',
    templateUrl: 'navbar.component.html',
})

export class NavBarComponent {


    constructor(private _userService: UserService, private _router: Router ) { }

    loggingOut() {

        confirm("Are you sure you want to log out?") ? this._userService.logOut() : null;

    }

    isLoggedIn() {

        return this._userService.isLoggedIn();

    }
}