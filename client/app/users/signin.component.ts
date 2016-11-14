import {Component, OnInit} from '@angular/core'
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {EmailValidator} from "../shared/email-validator";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})

export class SigninComponent implements OnInit {

    signinForm: FormGroup;

    constructor(){}

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
}