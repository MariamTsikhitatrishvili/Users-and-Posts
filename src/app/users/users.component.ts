import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [];
  constructor(private appComponent : AppComponent) { }
  /* Call function getUsers() from appComponent, which fetches the data than
  subscribe it and store in local variable users*/
  ngOnInit(): void {
    this.appComponent.getUsers().subscribe((data: any[])=>{
      this.users = data;
    })  
  }

}
