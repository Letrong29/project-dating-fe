import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { ReportComponent } from './report-component/report/report.component';
import { ReportDetailComponent } from './report-component/report-detail/report-detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CreateReportDetailComponent } from './report-component/create-report-detail/create-report-detail.component';


@NgModule({
    declarations: [ReportComponent, ReportDetailComponent, CreateReportDetailComponent],
  exports: [
    ReportComponent,
    ReportDetailComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    ReactiveFormsModule
  ]
})
export class WebsiteModule { }
