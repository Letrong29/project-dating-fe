import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchComponent} from "./component/search/search.component";
import {PersonalPageComponent} from './component/personal-page/personal-page.component';
import {UpgradeAccountComponent} from './component/upgrade-account/upgrade-account.component';
import {UpdateAvatarComponent} from './component/update-avatar/update-avatar.component';
import {WebcamModule} from "ngx-webcam";
import {UpdateStatusActiveComponent} from './component/update-status-active/update-status-active.component';
import {CreateCommentComponent} from './component/create-comment/create-comment.component';
import {PostComponent} from "./component/post/post.component";
import {DetailPostComponent} from "./component/detail-post/detail-post.component";
import {ListUserComponent} from './component/list-user/list-user.component';
import {CreateUserComponent} from './component/create-user/create-user.component';


@NgModule({
  declarations: [
    SearchComponent,
    PersonalPageComponent,
    UpgradeAccountComponent,
    UpdateAvatarComponent,
    UpdateStatusActiveComponent,
    CreateCommentComponent,
    PostComponent,
    DetailPostComponent,
    ListUserComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    WebcamModule,
  ],

  exports: []
})
export class UserModule {
}
