import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UserpostsComponent } from './userposts/userposts.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserinfoComponent,
    routingComponents,
    UserpostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
