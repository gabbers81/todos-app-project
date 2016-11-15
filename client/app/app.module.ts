import { LogOutComponent } from './users/logout.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {NavBarComponent} from "./shared/navbar.component";
import {routing} from "./app.routing";
import {TodosComponent} from "./todos/todos.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UserModule} from "./users/user.module";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        TodosComponent,
        LogOutComponent
    ],
    imports: [
        BrowserModule,
        routing,
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        UserModule,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}