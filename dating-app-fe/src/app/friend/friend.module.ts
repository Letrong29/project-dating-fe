import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendRoutingModule } from './friend-routing.module';

import { FriendRequestComponent } from './component/friend-request/friend-request.component';


@NgModule({
  declarations: [FriendRequestComponent],
  exports: [

import { FriendlistComponent } from './component/friendlist/friendlist.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [FriendlistComponent],
  exports: [
    FriendlistComponent
  ],
  imports: [
    CommonModule,
    FriendRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class FriendModule { }
