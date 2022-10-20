import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SearchComponent} from "./component/search/search.component";
import {PersonalPageComponent} from "./component/personal-page/personal-page.component";
import {UpgradeAccountComponent} from "./component/upgrade-account/upgrade-account.component";
import {AuthGuardService} from "../service/authentication/auth-guard.service";


const routes: Routes = [{
  path: "searchFriend",
  component: SearchComponent,

},
  {
    path: "users/:id",
    component: PersonalPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "upgradeAccount",
    component: UpgradeAccountComponent,
    canActivate: [AuthGuardService]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
