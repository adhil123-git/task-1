import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  //      userdata=[
  //     {name:"id",label:"ID"},
  //     {name:"name",label:"NAME"},
  //     {name:"email",label:"EMAIL"}
  //   ];

  //    displayedColumns: string[] = [];

  //    dataSource=[
  //     {id:1,name:"adhil",email:"adhil@gmail.com",},
  //     {id:2,name:"selva",email:"selva@gmail.com"},
  //     {id:3,name:"dheena",email:"dheena@gmail.com"},
  //     {id:4,name:"arun",email:"arun@gmail.com"},
  //     {id:5,name:"karthi",email:"karthi@gmail.com"},
  //     {id:6,name:"kesav",email:"kesav@gmail.com"},
  //     {id:7,name:"raj",email:"raj@gmail.com"},
  //    ]

  //   ngOnInit(): void {
  //     for(let data of this.userdata){
  //       this.displayedColumns.push(data.name);

  //     }


  //   }
  // }


  dataSource: any = [
    { id: 1, name: "adhil", email: "adhil@gmail.com" },
    { id: 2, name: "selva", email: "selva@gmail.com" },
    { id: 3, name: "dheena", email: "dheena@gmail.com" },
    { id: 4, name: "arun", email: "arun@gmail.com" },
    { id: 5, name: "karthi", email: "karthi@gmail.com" },
    { id: 6, name: "kesav", email: "kesav@gmail.com" },
    { id: 7, name: "raj", email: "raj@gmail.com" },
    { id: 8, name: "ragul", email: "ragul@gmail.com" }
  ];

  userdata: any[] = [
    { thead: "id" },
    { thead: "name" },
    { thead: "email" }
  ];

  dispalyedheading: any[] = [];

  ngOnInit(): void {
    for (let data of this.userdata) {
      this.dispalyedheading.push(data.thead)
      console.log(this.nestedarray)
    }
  
    
  }
  nestedarray :any=[
    [{id: 2},{name: "selva"},{email: "selva@gmail.com"}],
    [{name:"selva"},{email: "selva@gmail.com"}],
    [{email: "ragul@gmail.com"}]
  ]

}


