import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserinfoComponent } from './userinfo/userinfo.component'
import { UsersComponent } from './users/users.component'
import { UserpostsComponent } from './userposts/userposts.component'
const routes: Routes = [
  { path: 'usersinfo/:id',data:{name: 'userId'}, component: UserinfoComponent },
  { path: '',data:{name: 'users'}, component: UsersComponent },
  { path: 'usersinfo/userposts/:id',data:{name: 'Userposts'}, component: UserpostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ UserinfoComponent, UsersComponent];
