import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FriendRequestComponent} from "./component/friend-request/friend-request.component";


import {FriendlistComponent} from "./component/friendlist/friendlist.component";
import {AuthGuardService} from "../service/authentication/auth-guard.service";
import {GiveAGiftComponent} from "./component/give-a-gift/give-a-gift.component";


const routes: Routes = [
  {
    path: 'listFriend',
    component: FriendlistComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'request',
    component: FriendRequestComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'gift',
    component:GiveAGiftComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendRoutingModule {
}
