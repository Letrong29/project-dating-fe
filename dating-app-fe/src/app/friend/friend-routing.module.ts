import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FriendRequestComponent} from "./component/friend-request/friend-request.component";


const routes: Routes = [
  {path:'request', component:FriendRequestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendRoutingModule { }
