import {TodosComponent} from './todos.component';
import {Routes, RouterModule} from "@angular/router";
import {TodoNavComponent} from "./todo-nav.component";

export const TODO_ROUTES: Routes = [
    {path: '', redirectTo: '/todos', pathMatch: 'full'},
    {path: 'todos', component: TodoNavComponent},
    {path: 'manage', component: TodosComponent}
];

export const todoRoutes = RouterModule.forChild(TODO_ROUTES);