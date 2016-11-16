import { Todo } from './todo.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
    selector: 'app-todo-input',
    templateUrl: 'todo-input.component.html'
})
export class TodoInputComponent implements OnInit {

    todo: Todo;

    constructor() { }

    onSubmit(form: NgForm) {

        console.log(form.value.text);
        console.log(form.value.duedate);

    }

    ngOnInit() { }
}