import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportDetailComponent} from "./website/report-component/report-detail/report-detail.component";
import {CreateReportDetailComponent} from "./website/report-component/create-report-detail/create-report-detail.component";


const routes: Routes = [
  {
    path: '',
    component: ReportDetailComponent
  },
  {
    path: 'report',
    component: CreateReportDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
