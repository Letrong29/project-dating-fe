import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchComponent} from "./component/search/search.component";


@NgModule({
  declarations: [SearchComponent],
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
