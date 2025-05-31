import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';


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

//   onSubmit(loginform: NgForm) {
//     if (loginform.valid) {
//       // const logindata = this.regitereduser.forEach(
//       //   u =>
//       //     u.name === this.name &&
//       //     u.email === this.email &&
//       //     u.password === this.password
//       // );
      
// this.findobject();

//     }
//     else {
//       alert("invalid detail")
//     }
//   }
  onSubmit(loginform: NgForm){

    let loginuser = false;
    for( let i=0;i<this.regitereduser.length;i++){
      const user= this.regitereduser[i];
      if(user.name === this.name && user.email === this.email && user.password === this.password){
        loginuser= true;   
      }
    }


    if(loginuser){
      alert("login successfull")
    }
    else{
      alert("login failed")
    }
  }
  
  
  }



 





