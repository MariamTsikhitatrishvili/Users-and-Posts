import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {
  user;
  constructor(private appComponent : AppComponent,private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // map through users and get user by id
    this.activatedRoute.paramMap.subscribe(value => {
      const userId = +value.get('id');
      this.appComponent.getUserById(userId).subscribe(user => {
        this.user = user;
        });
      });
    }
  

}
