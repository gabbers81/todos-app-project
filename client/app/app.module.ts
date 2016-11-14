import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {NavBarComponent} from "./shared/navbar.component";
import {SignupComponent} from "./users/signup.component";
import {routing} from "./app.routing";
import {TodosComponent} from "./todos/todos.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        SignupComponent,
        TodosComponent
    ],
    imports: [
        BrowserModule,
        routing,
        ReactiveFormsModule,
        CommonModule,
        FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}