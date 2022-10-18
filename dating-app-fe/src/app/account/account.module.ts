import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';


@NgModule({
  declarations: [ResetPasswordComponent],
  exports: [
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
