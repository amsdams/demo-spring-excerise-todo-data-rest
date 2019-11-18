import { Component, OnInit } from '@angular/core';
import { TodoEntityService } from '../api/services/todo-entity.service';
import { ResourceTodo, Todo } from '../api/models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.sass']
})
export class TodoDetailComponent implements OnInit {

  constructor(private todoEntityService: TodoEntityService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.detail(this.route.snapshot.params['id'])
  }
  todo: Todo;

  async detail(id: number) {
    console.log(id);
    this.todo = await this.todoEntityService.findByIdTodoUsingGET(id).toPromise();
  }

  async delete(id: number) {
    console.log(id);
    this.todo = await this.todoEntityService.deleteTodoUsingDELETE(id).toPromise();
    this.router.navigate(['/todo']);
  }
}
