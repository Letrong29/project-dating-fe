import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendRoutingModule } from './friend-routing.module';
import { GiveAGiftComponent } from './component/give-a-gift/give-a-gift.component';


@NgModule({
  declarations: [GiveAGiftComponent],
  imports: [
    CommonModule,
    FriendRoutingModule
  ]
})
export class FriendModule { }
