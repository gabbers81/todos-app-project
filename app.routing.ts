import { HomeComponent } from './home.component';
import { TodoNavComponent } from './todos/todo-nav.component';
import { AuthGuard } from './shared/authguard.component';
import {Routes, RouterModule} from "@angular/router";
import {SignupComponent} from "./users/signup.component";
import {SigninComponent} from "./users/signin.component";
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    {path: '', redirectTo:'home' , pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'todos', component: TodoNavComponent, loadChildren: '/todos/todo.module#TodosModule'},
    {path: 'user/login', component: SigninComponent, canActivate: [AuthGuard]},
    {path: 'user/signup', component: SignupComponent, canActivate: [AuthGuard]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);