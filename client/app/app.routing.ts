import {Routes, RouterModule} from "@angular/router";
import {TodosComponent} from "./todos/todos.component";
import {SignupComponent} from "./users/signup.component";
import {SigninComponent} from "./users/signin.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/todos', pathMatch: 'full'},
    {path: 'todos', component: TodosComponent},
    {path: 'user/signup', component: SignupComponent},
    {path: 'user/signin', component: SigninComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);