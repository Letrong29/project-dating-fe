import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {FriendModule} from "./friend/friend.module";
import {UserModule} from "./user/user.module";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment.prod";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccountModule} from "./account/account.module";
import {WebcamModule} from "ngx-webcam";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FriendModule,
    UserModule,
    HttpClientModule,
    WebcamModule,
    AngularFireModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        timeOut: 2000,
        closeButton: true,
        progressBar: true,
        positionClass: 'toast-top-center',
        preventDuplicates: true
      }
    ),
    FormsModule,
    ReactiveFormsModule,
    AccountModule,
    FriendModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
