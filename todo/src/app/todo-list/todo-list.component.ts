import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {

  constructor (
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ) {

  }
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  message : string
  todos : Todo[]

  constructor(
    private service : TodoDataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.refreshTodos()
  }

  refreshTodos() {
    this.service.retriveAllTodo('haochao').subscribe(
      response => {
        this.todos = response
      }
    )
  }

  deleteTodo(todoId) {
    this.service.deleteById('haochao', todoId).subscribe(
      response => {
        this.message = `Delete ${todoId} successful!`
        this.refreshTodos()
      }
    )
  }

  updateTodo(todoId) {
    this.router.navigate(['todos', todoId])
  }
  
  addTodo() {
    this.router.navigate(['todos', -1])
  }

  finishTodo(todo) {
    todo.done = true
    this.service.updateTodo('haochao', todo.id, todo).subscribe(
      response => {
        console.log("update successful!")
        this.refreshTodos()
      }
    )
  }

}
