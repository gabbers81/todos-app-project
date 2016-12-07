import { LogOutComponent } from './logout.component';
import { AuthGuard } from '../shared/authguard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import { SigninComponent } from "./signin.component";
import { SignupComponent } from "./signup.component";

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        LogOutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
})
export class UserModule {

}