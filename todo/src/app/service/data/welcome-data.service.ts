import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message : string) {

  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  
  constructor(
    private httpClient : HttpClient
  ) { }

  invokeBackEnd(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader()
    // let headers = new HttpHeaders({
    //   Authorization : basicAuthHeaderString
    // })
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hellobean/${name}`
    //, {headers}
    )
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'user'
  //   let password = 'password'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
  //   return basicAuthHeaderString
  // }
}
