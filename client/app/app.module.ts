import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {NavBarComponent} from "./shared/navbar.component";
import {SignupComponent} from "./users/signup.component";

@NgModule({
    declarations: [AppComponent, NavBarComponent, SignupComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}