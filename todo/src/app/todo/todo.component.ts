import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service'
import { Todo } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoId: number
  todo: Todo

  constructor(
    private route: ActivatedRoute,
    private service: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id']
    this.todo = new Todo(-1, '', false, new Date())
    if (this.todoId != -1) {
      this.service.retriveTodo('haochao', this.todoId).subscribe(
        data => this.todo = data
      )
    } 
  }

  saveUpdate() {
    if (this.todoId == -1) {
      //POST
      this.service.createTodo('haochao', this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['/todolist'])
        }
      )
    } else {
      this.service.updateTodo('haochao', this.todoId, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['/todolist'])
        }
      )  
    }
  }




}
