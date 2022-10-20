import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FriendlistComponent} from "./component/friendlist/friendlist.component";


const routes: Routes = [
  {
    path: '',
    component: FriendlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendRoutingModule { }
