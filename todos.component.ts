import { LoadingComponent } from './../shared/loading.component';
import { Todo } from './todo.model';
import { TodosService } from './todos.service';
import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styles: [`
        .config {
            align: right;
        }
    `]
})

export class TodosComponent implements OnInit {

    todos: Todo[] = [];
    todosLoading = true;

    constructor(private _todosService: TodosService) { }

    ngOnInit() {
        this._todosService.getTodos('pending')
            .subscribe(
                res => {
                    this.todos = res;
                    console.log(res);
                },
                err => console.log(err)
                ,
                () => this.todosLoading = false
            );

    }

    updateTodoStatus(todo: Todo, status: String) {
        todo.status = status;
        console.log(todo);
        this._todosService.updateTodo(todo)
            .subscribe(
            res => console.log(res),
            err => console.log(err),
        );

    }

    removeTodo(todo: Todo) {
        console.log(todo);
        this._todosService.deleteMessage(todo)
            .subscribe(
            res => console.log(res),
            err => console.log(err)
            )
    }

    onEdit(todo: Todo) {
        this._todosService.todoIsEdit(todo);
    }

}