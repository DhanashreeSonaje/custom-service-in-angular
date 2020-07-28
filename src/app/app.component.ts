import { Component } from '@angular/core';
import { User } from './User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SmartSetu';

  userDetails: User = new User();
  password;
  role;
  feedback;
  flag = false;
  submitted=false;
  
  constructor( private router:Router) { }

  ngOnInit() {
  }

  costDetails(){
    this.submitted=true;
    console.log("Hello");
  }
}

