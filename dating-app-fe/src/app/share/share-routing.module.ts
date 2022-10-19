import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListSearchComponent} from "./list-search/list-search.component";
import {Error404Component} from "./error404/error404.component";


const routes: Routes = [
  {path:"list",
  component:ListSearchComponent},
  {path:"error",
  component:Error404Component}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule { }
