import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name = '';
  email = '';
  password = '';
  @Input()regitereduser : any;
  logIn() {
    if (this.name === this.regitereduser.name && this.email === this.regitereduser.email && this.password === this.regitereduser.password) {
      alert("login successfull");
    }
    else {
      alert("login failed ")
    }
  }


}