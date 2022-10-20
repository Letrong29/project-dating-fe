import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FriendlistComponent} from "./component/friendlist/friendlist.component";
import {AuthGuardService} from "../service/authentication/auth-guard.service";


const routes: Routes = [
  {
    path: 'listFriend',
    component: FriendlistComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendRoutingModule { }
