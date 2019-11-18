import { Component, OnInit } from '@angular/core';
import { TodoEntityService } from '../api/services';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from '../api/models';

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.sass']
})
export class TodoDeleteComponent implements OnInit {

  constructor(private todoEntityService: TodoEntityService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.delete(this.route.snapshot.params['id'])
  }
  todo: Todo;

  async delete(id: number) {
    console.log(id);
    this.todo = await this.todoEntityService.deleteTodoUsingDELETE(id).toPromise();
    this.router.navigate(['/todo']);
  }
}
