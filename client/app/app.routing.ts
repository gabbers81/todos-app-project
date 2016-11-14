import {Routes, RouterModule} from "@angular/router";
import {TodosComponent} from "./todos/todos.component";
import {SignupComponent} from "./users/signup.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/todos', pathMatch: 'full'},
    {path: 'todos', component: TodosComponent},
    {path: 'signup', component: SignupComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);