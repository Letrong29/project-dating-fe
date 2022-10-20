import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccountModule} from "./account/account.module";
import {AuthenticationService} from "./account/service/authentication.service";
import {AuthGuardService} from "./account/service/auth-guard.service";
import {TokenStorageService} from "./account/service/token-storage.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFireModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
