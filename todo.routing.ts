import { TodosCompletedComponent } from './todos-completed.component';
import { TodoManageComponent } from './todo-manage.component';
import {TodosComponent} from './todos.component';
import {Routes, RouterModule} from "@angular/router";
import {TodoNavComponent} from "./todo-nav.component";

const TODO_ROUTES: Routes = [
    {path: '', redirectTo: 'manage', pathMatch: 'full'},
    {path: 'manage', component: TodoManageComponent},
    {path: 'completed', component: TodosCompletedComponent}
];

export const todoRoutes = RouterModule.forChild(TODO_ROUTES);