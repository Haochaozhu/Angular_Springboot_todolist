import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === "haochao" && password === "123") {
      sessionStorage.setItem('currentUser', username)
      return true
    } else {
      return false
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('currentUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('currentUser')
  }
}
