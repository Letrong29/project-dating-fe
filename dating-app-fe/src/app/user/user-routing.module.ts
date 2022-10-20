import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonalPageComponent} from "./component/personal-page/personal-page.component";
import {UpgradeAccountComponent} from "./component/upgrade-account/upgrade-account.component";


const routes: Routes = [
  {path:"users/:id", component: PersonalPageComponent},
  {path: "upgradeAccount", component: UpgradeAccountComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
