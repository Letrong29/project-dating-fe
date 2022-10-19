import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GiveAGiftComponent} from "./component/give-a-gift/give-a-gift.component";


const routes: Routes = [
  {path: 'gift',
  component: GiveAGiftComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendRoutingModule { }
