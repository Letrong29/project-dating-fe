import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {FriendModule} from "./friend/friend.module";
import {APP_BASE_HREF} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireStorageModule,
        AngularFireModule,
        FriendModule,
      HttpClientModule,
      ToastrModule.forRoot({
        timeOut: 2500,
        progressBar: true,
        preventDuplicates: true,
        positionClass: 'toast-top-center',
      }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
