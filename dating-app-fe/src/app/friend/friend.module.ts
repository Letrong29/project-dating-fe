import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendRoutingModule } from './friend-routing.module';
import { FriendlistComponent } from './component/friendlist/friendlist.component';


@NgModule({
  declarations: [FriendlistComponent],
  exports: [
    FriendlistComponent
  ],
  imports: [
    CommonModule,
    FriendRoutingModule
  ]
})
export class FriendModule { }
