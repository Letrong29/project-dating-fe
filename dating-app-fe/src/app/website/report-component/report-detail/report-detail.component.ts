import { Component, OnInit } from '@angular/core';
import {ReportDetail} from "../../model/report-detail";
import {FormControl, FormGroup} from "@angular/forms";
import {ReportDetailService} from "../../service_report/report-detail.service";


@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {
  reportDetailList: ReportDetail[];
  p:1;
  idModal: number;
  nameModal: string;
  searchForm: FormGroup;
  delete = []
  confirm = []
  page: number =0;
  pageTotal: number;
  pageCurrent: number =0;


  constructor(private reportDetailService:ReportDetailService) {
    this.searchForm = new FormGroup({
      nameSearch: new FormControl()
    });
  }

  ngOnInit(): void {
    this.getReportDetailsList()
  }

  getReportDetailsList() {
    this.reportDetailService.getAllReportDetail(this.page).subscribe(data => {
      // @ts-ignore
      this.reportDetailList = data.content;
      // @ts-ignore
      this.pageTotal = data.totalPages;
    });
  }

  elementDelete(id: number, userPost: String) {
    this.idModal = id;
    // @ts-ignore
    this.nameModal = userPost;
  }

  elementConfirm(id: number, userPost: String) {
    this.idModal = id;
    // @ts-ignore
    this.nameModal = userPost;
  }

  deleteReportDetail() {
    this.reportDetailService.deleteReportDetail(this.idModal).subscribe(() => {
    }, error => {
    }, () => {
      this.ngOnInit();
     alert("Xoá thành công")
    });
  }

  confirmReportDetail() {
    this.reportDetailService.confirmReportDetail(this.idModal).subscribe(() => {
    }, error => {
    }, () => {
      this.ngOnInit();
      alert("Xác nhận thành công")
    });
  }

  resetModal() {
    this.delete = [];
    this.confirm = [];
  }

  nameSearch() {
    const name = this.searchForm.value.nameSearch;
    console.log('here');
    this.reportDetailService.searchByKeyWord(name, this.pageCurrent).subscribe(data => {
      console.log(data);
      // @ts-ignore
      this.reportDetailList = data.content;
      // @ts-ignore
      this.pageTotal = data.totalPages;
    });
  }
  nextPage(currentPage: number) {
    this.page=currentPage
    if (this.pageCurrent < this.pageTotal -1) {
      this.pageCurrent = this.pageCurrent + 1;
    }
    this.reportDetailService.getAllReportDetail(this.page).subscribe(data => {
      // @ts-ignore
      this.reportDetailList = data.content;
    });
    this.nameSearch();
  }

  previousPage(currentPage: number) {
    this.page=currentPage;
    if(this.pageCurrent >0) {
      this.pageCurrent = this.pageCurrent -1;
    }
    this.reportDetailService.getAllReportDetail(this.page).subscribe(data => {
      // @ts-ignore
      this.reportDetailList = data.content;
    });
    this.nameSearch();
  }
}
