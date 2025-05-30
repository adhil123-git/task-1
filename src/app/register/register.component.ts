import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  @Output() signindata = new EventEmitter();

  SignIn() {

    const data = {
      name: this.name,
      email: this.email,
      password: this.password
    }

    this.signindata.emit(data);
    alert("signin Successfull")
    this.name = '';
    this.email = '';
    this.password = '';
  }
}
