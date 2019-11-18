import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoDeleteComponent } from './todo-delete/todo-delete.component';


const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'todo', component: TodoComponent },
  {
    path: 'todo-create', component: TodoCreateComponent
  }, {
    path: 'todo-detail/:id', component: TodoDetailComponent
  },
  {
    path: 'todo-edit/:id', component: TodoEditComponent
  },
  {
    path: 'todo-delete/:id', component: TodoDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
