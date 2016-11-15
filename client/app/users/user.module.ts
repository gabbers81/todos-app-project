import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import { SigninComponent } from "./signin.component";
import { SignupComponent } from "./signup.component";
import {UserService} from "./user.service";

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        UserService
    ]
})
export class UserModule {

}