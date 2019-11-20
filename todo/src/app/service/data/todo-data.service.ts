import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/todo-list/todo-list.component';
import { API_URL_JPA } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private httpClient : HttpClient
  ) { }

  retriveAllTodo(username) {
    return this.httpClient.get<Todo[]>(`${API_URL_JPA}/users/${username}/todos`)
  }

  retriveTodo(username, id) {
    return this.httpClient.get<Todo>(`${API_URL_JPA}/users/${username}/todos/${id}`)
  }
  deleteById(username, id) {
    return this.httpClient.delete(`${API_URL_JPA}/users/${username}/todos/${id}`)
  }

  updateTodo(username, id, todo) {
    return this.httpClient.put(`${API_URL_JPA}/users/${username}/todos/${id}`, todo)
  }

  createTodo(username, todo) {
    return this.httpClient.post(`${API_URL_JPA}/users/${username}/todos/`, todo)
  }

}
