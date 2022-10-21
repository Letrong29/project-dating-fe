import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FriendRoutingModule} from './friend-routing.module';
import {FriendlistComponent} from './component/friendlist/friendlist.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FriendRequestComponent} from "./component/friend-request/friend-request.component";
import {ShareModule} from "../share/share.module";
import { GiveAGiftComponent } from './component/give-a-gift/give-a-gift.component';

@NgModule({
  declarations: [FriendlistComponent, FriendRequestComponent, GiveAGiftComponent],
  exports: [
    FriendlistComponent
  ],
    imports: [
        CommonModule,
        FriendRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ShareModule,
    ]
})
export class FriendModule {
}
