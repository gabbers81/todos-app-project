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
    ],
    imports: [
        CommonModule,
        FormsModule,
        todoRoutes
    ]
})
export class TodosModule {

}
