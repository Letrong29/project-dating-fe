import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchComponent} from "./component/search/search.component";
import { PersonalPageComponent } from './component/personal-page/personal-page.component';
import { UpgradeAccountComponent } from './component/upgrade-account/upgrade-account.component';


@NgModule({
  declarations: [SearchComponent,PersonalPageComponent,UpgradeAccountComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  exports: []
})
export class UserModule {
}
