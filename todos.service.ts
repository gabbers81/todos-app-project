import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';
import { Headers } from '@angular/http';
import { todoRoutes } from './todo.routing';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable()
export class TodosService {

    url = "http://localhost:3000/todos";
    todos = [];
    @Output() todoEditing = new EventEmitter<Todo>();
    constructor(private _http: Http) { }

    getTodos(status: String) {
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';

        return this._http.get(this.url + '/' + status + token)
            .map((response: Response) => {
                const todos = response.json().obj;
                let transformedTodos: Todo[] = [];
                for (let todo of todos) {
                    transformedTodos.push(new Todo(
                        todo.text,
                        todo.dueDate,
                        todo.createdDate,
                        todo.status,
                        todo._id,
                        todo.user._id
                    ));
                }
                this.todos = transformedTodos;
                return transformedTodos;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    addTodo(todo: Todo) {
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        const body = JSON.stringify(todo);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + token, body, { headers: headers })
            .map((res: Response) => {
                const result = res.json();
                const todo = new Todo(
                    result.obj.text,
                    result.obj.dueDate,
                    result.obj.createdDate,
                    result.obj.status,
                    result.obj._id,
                    result.obj.user._id
                );
                this.todos.push(todo);
                return todo;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    updateTodo(todo: Todo) {
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        const body = JSON.stringify(todo);
        const headers = new Headers({ 'Content-Type': 'application/json' });

        return this._http.patch(this.url + '/' + todo.messageId + token, body, { headers: headers })
            .map((res: Response) => {
                res.json();
            })
            .catch((error: Response) => {
                return Observable.throw(error.json());
            })
    }

    deleteMessage(todo: Todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this._http.delete(this.url + '/' + todo.messageId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }

    todoIsEdit(todo: Todo) {
        this.todoEditing.emit(todo);
    }
}