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
  @Input() regitereduser: any[] = [];

  logIn() {
    const logindata= this.regitereduser.find(
      user =>
        user.name === this.name &&
        user.email === this.email &&
        user.password === this.password
    );
    if (logindata) {
      alert("login successfull");
    } else {
      alert("login failed ");
    }
  }
}