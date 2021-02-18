import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  host = "https://jsonplaceholder.typicode.com";
  constructor(private http: HttpClient){
  }
  getUsers(){
    return this.http.get(`${this.host}/users`)
  }
  getUserById(id){
    return this.http.get(`${this.host}/users/${id}`)
  }
  getPosts(){
    return this.http.get(`${this.host}/posts`)
  }
}
