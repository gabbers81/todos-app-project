import { Todo } from './todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-todo-manage',
    template: `
        <div class="row">
            <app-todo-input></app-todo-input>
        </div>
        <hr>
        <div class="row">
            <app-todos></app-todos>
        </div>

    `
})
export class TodoManageComponent implements OnInit {

    todo: Todo;

    constructor() { }

    ngOnInit() { }

    updateTodo(todo: Todo) {
        this.todo = todo;
    }
}