import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  @Output() registerdata = new EventEmitter();

  onSubmit(registerform: NgForm) {
    if (registerform.valid) {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      this.registerdata.emit(data);
      alert("signin Successfull")
      this.name = '';
      this.email = '';
      this.password = '';
    }
    else {
      alert("fill the form")
    }
  }

}
