import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { PersonalPageComponent } from './component/personal-page/personal-page.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [CreateUserComponent, PersonalPageComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],

  exports: []
})
export class UserModule { }
