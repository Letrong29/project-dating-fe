import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [ResetPasswordComponent],
  exports: [
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    HttpClientModule
  ]
})
export class AccountModule { }
