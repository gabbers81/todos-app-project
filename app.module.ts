import { TodoNavComponent } from './todos/todo-nav.component';

import { HomeComponent } from './home.component';
import {AuthGuard} from './shared/authguard.component';
import {UserService} from './users/user.service';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {NavBarComponent} from "./shared/navbar.component";
import {routing} from "./app.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UserModule} from "./users/user.module";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        TodoNavComponent,
    ],
    imports: [
        BrowserModule,
        routing,
        ReactiveFormsModule,
        CommonModule,
        UserModule,
        HttpModule,
    ],
    providers: [UserService, AuthGuard],
    bootstrap: [AppComponent],

})
export class AppModule {

}