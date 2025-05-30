import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  user: any[] = [];

  recievefromchild(data: any) {
    this.user.push(data);
    console.log(this.user);
  }
}
