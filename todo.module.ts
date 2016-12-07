import { LoadingComponent } from './../shared/loading.component';
import { TodosCompletedComponent } from './todos-completed.component';
import { TodosService } from './todos.service';
import { TodoManageComponent } from './todo-manage.component';
import {NgModule} from '@angular/core';

import {TodosComponent} from './todos.component';
import {CommonModule} from "@angular/common";
import {TodoInputComponent} from "./todo-input.component";
import {FormsModule} from "@angular/forms";
import {todoRoutes} from "./todo.routing";

@NgModule({
    declarations: [
        TodosComponent,
        TodoInputComponent,
        TodoManageComponent,
        TodosCompletedComponent,
        LoadingComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        todoRoutes
    ],
    providers: [TodosService]
})
export class TodosModule {

}
