import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { SearchComponent } from './component/search/search.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [CreateUserComponent, SearchComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],

    exports: [
        SearchComponent
    ]
})
export class UserModule { }
