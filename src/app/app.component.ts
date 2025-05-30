import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// signindata='';
user=[];
recievefromchild(data:any){
this.user=data;
console.log(data)
}

}
