import { Component, OnInit } from '@angular/core';
import { TodoEntityService } from '../api/services';
import { Router, ActivatedRoute } from '@angular/router';
import { ResourceTodo, Todo } from '../api/models';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.sass']
})
export class TodoEditComponent implements OnInit {
  resourceTodo: ResourceTodo;
  todo: Todo = {};

  constructor(private todoEntityService: TodoEntityService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.get(id);
  }
  async get(id: number) {
    this.todo = this.resourceTodo = await this.todoEntityService.findByIdTodoUsingGET(id).toPromise();

  }
  async edit(id:number) {
    let params: TodoEntityService.SaveTodoUsingPUTParams = {id:id, body:this.todo};

    this.resourceTodo = await this.todoEntityService.saveTodoUsingPUT(params).toPromise();
    this.router.navigate(['/todo-detail', this.resourceTodo.id]);
  }
}
