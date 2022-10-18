import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonalPageComponent} from "./component/personal-page/personal-page.component";


const routes: Routes = [
  {path:"users/:id", component: PersonalPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
