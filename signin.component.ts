import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user.model';
import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { EmailValidator } from "../shared/email-validator";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})

export class SigninComponent implements OnInit {

    signinForm: FormGroup;

    constructor(private _userService: UserService, private _router: Router) { }

    ngOnInit() {
        this.signinForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                EmailValidator.validateIsEmail
            ]),
            password: new FormControl(null, [
                Validators.required
            ])
        })
    }

    onSubmit() {
        const user = new User(
            this.signinForm.value.email,
            this.signinForm.value.password
        );
        this._userService.logIn(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this._router.navigateByUrl('/');
                    console.log(data);
                },
                error => console.log(error)
            );
    }
}