import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { PersonalPageComponent } from './component/personal-page/personal-page.component';
import {HttpClientModule} from "@angular/common/http";
import { UpgradeAccountComponent } from './component/upgrade-account/upgrade-account.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [CreateUserComponent, PersonalPageComponent, UpgradeAccountComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],

  exports: []
})
export class UserModule { }
