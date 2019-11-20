import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from 'src/app/service/data/welcome-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user = ''
  messageFromServer : string
  constructor(
    private route : ActivatedRoute,
    private service : WelcomeDataService) { }

  ngOnInit() {
    this.user = this.route.snapshot.params['name']
  }

  getMessage() {
    this.service.invokeBackEnd('zhuzhu').subscribe(
      response => this.messageFromServer = response.message,
      error => this.messageFromServer = error.message
    );
  }

  handleError(error) {
    
  } 

}
