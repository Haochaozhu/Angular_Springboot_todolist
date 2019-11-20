import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service'
import { BasicAuthenticationService } from '../service/basic-authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'Username'
  password = ''
  errorMessage = 'Invalid Credentials!'
  invalidCredential = false

  constructor(private router: Router,
    private hcAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService : BasicAuthenticationService) { 

    }

  ngOnInit() {
  }

  handleLogin() {
    if (this.hcAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidCredential = false
    } else {
      this.invalidCredential = true
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthenticationService.authenticate(this.username, this.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.invalidCredential = false  
      }, 
      error => {
        console.log(error)
        this.invalidCredential = true
      }
    )
  }
}
