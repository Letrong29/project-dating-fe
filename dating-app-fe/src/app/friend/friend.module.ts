<<<<<<< HEAD
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FriendRoutingModule} from './friend-routing.module';
import {FriendlistComponent} from './component/friendlist/friendlist.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FriendRequestComponent} from "./component/friend-request/friend-request.component";
import {ShareModule} from "../share/share.module";


@NgModule({
  declarations: [FriendlistComponent, FriendRequestComponent],
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
=======
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
>>>>>>> 837a7259821805991205a53ebe16b717b4a82283
})
export class FriendModule {
}
