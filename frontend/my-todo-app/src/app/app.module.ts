import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from './api/api.module';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoDeleteComponent } from './todo-delete/todo-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoCreateComponent,
    TodoDetailComponent,
    TodoEditComponent,
    TodoDeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
  ApiModule.forRoot({rootUrl: 'http://localhost:8080'}),
  FormsModule,
  ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
