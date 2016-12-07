import { TodosService } from './todos.service';
import { Todo } from './todo.model';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
    selector: 'app-todo-input',
    templateUrl: 'todo-input.component.html'
})
export class TodoInputComponent implements OnInit {

    todo: Todo;

    constructor(private _todosService: TodosService) {
    }

    onSubmit(form: NgForm) {
        if (this.todo) {
            this.todo.text = form.value.text;
            this.todo.dueDate = form.value.duedate;
            this._todosService.updateTodo(this.todo)
                .subscribe(
                res => {
                    console.log(res);
                },
                err => console.log(err)
                );
                this.todo = null;
        } else {
            var currentDate = new Date();
            this.todo = new Todo(form.value.text, form.value.duedate, currentDate, 'Pending')
            this._todosService.addTodo(this.todo)
                .subscribe(
                res => {
                    console.log(res);
                },
                err => console.log(err)
                );
                this.todo = null;
        }

        form.resetForm();

    }

    onClear(form: NgForm) {
        form.resetForm();
    }

    ngOnInit() {
        this._todosService.todoEditing.subscribe(
            (todo: Todo) => this.todo = todo
        )
    }
}