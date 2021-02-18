import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userposts',
  templateUrl: './userposts.component.html',
  styleUrls: ['./userposts.component.scss']
})
export class UserpostsComponent implements OnInit {
  // user;
  userId;
  posts = [];
  constructor(private appComponent : AppComponent,private router: Router, private activatedRoute: ActivatedRoute) { }
  //
  ngOnInit(): void {
     /* Call function getPosts() from appComponent, which fetches the data than
  subscribe it and stores in local variable posts*/
    this.appComponent.getPosts().subscribe((data: any[])=>{
      console.log(data);
      this.posts = data;
    }) 
    //get current user and stores it in local variable userId; 
    this.activatedRoute.paramMap.subscribe(value => {
      this.userId = +value.get('id');
      });
    }
  

}
