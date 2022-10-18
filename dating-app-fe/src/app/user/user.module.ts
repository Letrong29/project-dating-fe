import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { PostComponent } from './component/post/post.component';
import { DetailPostComponent } from './component/detail-post/detail-post.component';


@NgModule({
  declarations: [CreateUserComponent, PostComponent, DetailPostComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],

  exports: []
})
export class UserModule { }
