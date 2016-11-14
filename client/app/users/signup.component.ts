import {Component, OnInit} from '@angular/core'
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {EmailValidator} from "../shared/email-validator";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {

    signupForm: FormGroup;

    constructor(){}

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
}