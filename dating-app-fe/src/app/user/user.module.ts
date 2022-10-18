import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { ListUserComponent } from './component/list-user/list-user.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [CreateUserComponent, ListUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],

  exports: []
})
export class UserModule { }
