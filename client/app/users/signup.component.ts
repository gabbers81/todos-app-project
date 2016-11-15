import {Component, OnInit} from '@angular/core'
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {EmailValidator} from "../shared/email-validator";
import {User} from "./user.model";
import {UserService} from "./user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {

    signupForm: FormGroup;
    isLoading = false;
    userCreated = false;

    constructor(private _userService: UserService,
                private _router: Router) {
    }

    ngOnInit() {
        this.signupForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                EmailValidator.validateIsEmail
            ]),
            password: new FormControl(null, [
                Validators.minLength(4),
                Validators.required
            ])
        })
    }

    onSubmit() {
        this.isLoading = true;
        const user = new User(
            this.signupForm.value.email,
            this.signupForm.value.password,
            this.signupForm.value.firstName,
            this.signupForm.value.lastName
        );

        this._userService.signUp(user)
            .subscribe(
                ((data: User) => console.log(data)),
                (error => console.log(error)),
                ( () => {
                        this.isLoading = false;
                        this.userCreated = true;
                    }
                ))
    }

}