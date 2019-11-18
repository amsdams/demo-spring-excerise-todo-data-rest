import { Component, OnInit } from '@angular/core';
import { TodoEntityService } from '../api/services/todo-entity.service';
import { Todo } from '../api/models/todo';
import { ResourceTodo } from '../api/models/resource-todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.sass']
})
export class TodoCreateComponent implements OnInit {

  constructor(private todoEntityService: TodoEntityService, private router: Router) { }
  todo: Todo = {};

  ngOnInit() {
    //this.save();

  }
  resourceTodo: ResourceTodo;
  async save() {




    this.todo.id = 0;


    this.resourceTodo = await this.todoEntityService.saveTodoUsingPOST(this.todo).toPromise();
    this.router.navigate(['/todo-detail', this.resourceTodo.id]);



  }
}
