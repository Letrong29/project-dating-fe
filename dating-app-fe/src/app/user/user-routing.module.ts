import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostComponent} from "./component/post/post.component";
import {DetailPostComponent} from "./component/detail-post/detail-post.component";


const routes: Routes = [{path:"", component: PostComponent},
    {path:"details/:id/:id1", component: DetailPostComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
