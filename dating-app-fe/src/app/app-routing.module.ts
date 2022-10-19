import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportDetailComponent} from "./website/report-component/report-detail/report-detail.component";


const routes: Routes = [
  {
    path: '',
    component: ReportDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
