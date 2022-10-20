import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './component/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TestComponent } from './component/test/test.component';
import { TestAdminComponent } from './component/test-admin/test-admin.component';
import {AuthenticationService} from "./service/authentication.service";
import {AuthGuardService} from "./service/auth-guard.service";
import {TokenStorageService} from "./service/token-storage.service";


@NgModule({
  declarations: [LoginComponent, TestComponent, TestAdminComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AccountModule { }
