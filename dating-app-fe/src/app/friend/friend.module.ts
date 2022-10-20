import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FriendRoutingModule} from './friend-routing.module';
import {FriendlistComponent} from './component/friendlist/friendlist.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
    FormsModule,

  ]
})
export class FriendModule {
}
