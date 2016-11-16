import { todoRoutes } from './todos/Todo.routing';
import { TodoNavComponent } from './todos/todo-nav.component';
import { AuthGuard } from './shared/authgaurd.component';
import { UserService } from './users/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./shared/navbar.component";
import { routing } from "./app.routing";
import { TodosComponent } from "./todos/todos.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UserModule } from "./users/user.module";
import { HttpModule } from "@angular/http";

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        TodosComponent,
        TodoNavComponent
    ],
    imports: [
        BrowserModule,
        routing,
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        UserModule,
        HttpModule,
        todoRoutes
    ],
    providers: [UserService, AuthGuard],
    bootstrap: [AppComponent],

})
export class AppModule {

}