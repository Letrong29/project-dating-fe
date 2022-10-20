import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendRoutingModule } from './friend-routing.module';
import { FriendRequestComponent } from './component/friend-request/friend-request.component';


@NgModule({
  declarations: [FriendRequestComponent],
  exports: [
    FriendRequestComponent
  ],
  imports: [
    CommonModule,
    FriendRoutingModule
  ]
})
export class FriendModule { }
