import { Component, OnInit } from '@angular/core';
import { TodoEntityService } from '../api/services/todo-entity.service';
import { ResourcesTodo } from '../api/models/resources-todo';
import { Todo } from '../api/models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  constructor(private todoEntityService: TodoEntityService) { }

  ngOnInit() {
    this.getList();
  }

  resourcesTodo: ResourcesTodo;
  todos:Todo[];

  async getList() {
    let params: TodoEntityService.FindAllTodoUsingGETParams = {};

    this.resourcesTodo = await this.todoEntityService.findAllTodoUsingGET(params).toPromise();
    this.todos = this.resourcesTodo._embedded.todo;

    console.log(this.resourcesTodo);
  }
}
