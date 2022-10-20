import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators} from '@angular/forms';
import {Report} from "../../model/report";
import {ReportDetailService} from "../../service_report/report-detail.service";


@Component({
  selector: 'app-create-report-detail',
  templateUrl: './create-report-detail.component.html',
  styleUrls: ['./create-report-detail.component.css']
})
export class CreateReportDetailComponent implements OnInit {
  reportDetailForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    post: new FormControl(''),
    reporter: new FormControl(''),
    report: new FormControl('',[Validators.required]),
    status: new FormControl(''),
    timeReport: new FormControl('')
  });
  reportList: Report[] = [];

   today= new Date( )
   reporter= {
    idUser: 2
  }
   post = {
    idPost: 4
  }

  constructor(private reportDetailService: ReportDetailService)
  {
    this.reportDetailService.getAllReport().subscribe(data => {
      console.log(data);
      this.reportList = data;
    });
  }

  ngOnInit(): void {
    this.reportDetailForm = new FormGroup({
      id: new FormControl(''),
      post: new FormControl(this.post.idPost),
      reporter: new FormControl(this.reporter.idUser),
      report: new FormControl('',Validators.required),
      status: new FormControl(8),
      timeReport: new FormControl(this.today)
    });
  }

  submit() {
    const reportDetail = this.reportDetailForm.value;
    console.log(reportDetail)
    if (this.reportDetailForm.valid){
      this.reportDetailService.save(reportDetail).subscribe(() => {
        alert('Tạo thành công');
      }, e => {
        console.log(e);
      });
    }else {
      alert('Bạn chưa chọn nội dung tố cáo')
    }

  }

}
