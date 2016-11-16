import { TodosComponent } from './todos.component';
import {Routes, RouterModule} from "@angular/router";

const TODO_ROUTES: Routes = [
    {path: 'manage', component: TodosComponent},
    {path: '', redirectTo: '/todos', pathMatch: 'full'}
];

export const todoRoutes = RouterModule.forChild(TODO_ROUTES);