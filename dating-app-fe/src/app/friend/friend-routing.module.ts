import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FriendRequestComponent} from "./component/friend-request/friend-request.component";


const routes: Routes = [
  {path:'request', component:FriendRequestComponent}

import {FriendlistComponent} from "./component/friendlist/friendlist.component";


const routes: Routes = [
  {
    path: '',
    component: FriendlistComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendRoutingModule { }
