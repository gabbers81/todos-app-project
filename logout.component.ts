import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-logout',
    template: `<li><a (click)="loggingOut()">Log out</a></li>`,
    providers: [UserService]
})
export class LogOutComponent {
    
    constructor(private _userService: UserService) { }

    loggingOut() {

        this._userService.logOut();

     }
}