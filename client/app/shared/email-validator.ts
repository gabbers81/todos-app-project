import {FormBuilder, Validators, FormControl } from '@angular/forms';


export class EmailValidator {


    static validateIsEmail(control: FormControl) {

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(control.value))
            return { validateIsEmail: true }

        return null;
    }
}