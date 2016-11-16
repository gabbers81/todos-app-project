import { Router } from '@angular/router';
import { UserService } from '../users/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor (private _userService: UserService, private _router: Router) { }

    canActivate() {
        if (this._userService.isLoggedIn()) {
            this._router.navigateByUrl('/todos');
            return false;
        }
        return true;
    }
}