import { todoRoutes } from './todos/Todo.routing';
import { TodoNavComponent } from './todos/todo-nav.component';
import { AuthGuard } from './shared/authgaurd.component';
import {Routes, RouterModule} from "@angular/router";
import {TodosComponent} from "./todos/todos.component";
import {SignupComponent} from "./users/signup.component";
import {SigninComponent} from "./users/signin.component";

const APP_ROUTES: Routes = [
    {path: 'user/login', component: SigninComponent, canActivate: [AuthGuard]},
    {path: 'user/signup', component: SignupComponent, canActivate: [AuthGuard]},
    {path: 'todos', component: TodoNavComponent, children: [todoRoutes]},
    {path: '', redirectTo: '/todos', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);