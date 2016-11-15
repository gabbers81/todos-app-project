import { Injectable } from '@angular/core';
import {User} from "./user.model";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class UserService {

    userURL = 'http://localhost:3000/user';

    constructor(private _http: Http) { }

    signUp(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post(this.userURL, body, {headers: headers})
            .map((res: Response) => res.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

}