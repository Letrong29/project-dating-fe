import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ReportDetailService} from "../../service/report-detail.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {
  reportDetailList: any = null;
  p: 1;
  idModal: number;
  nameModal: string;
  searchForm: FormGroup;
  delete = []
  confirm = []
  page: number = 0;
  pageTotal: number;
  pageCurrent: number = 0;


  constructor(private reportDetailService: ReportDetailService, private router: Router, private toast: ToastrService) {
    this.searchForm = new FormGroup({
      nameSearch: new FormControl()
    });
  }

  ngOnInit(): void {
    this.getReportDetailsList()
  }

  getReportDetailsList() {
    this.reportDetailService.getAllReportDetail(this.page).subscribe(data => {
      this.reportDetailList = data.content;
      this.pageTotal = data.totalPages;
    }, error => {
      this.router.navigateByUrl('/share/error');
      this.toast.error('Bạn không có quyền vào trang này', "Thông báo")
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
      this.toast.success("Xoá thành công", "Thông báo")
    }, error => {
      this.router.navigateByUrl('/share/error');
      this.toast.error('Bạn không có quyền vào trang này', "Thông báo")
    });
  }

  confirmReportDetail() {
    this.reportDetailService.confirmReportDetail(this.idModal).subscribe(() => {
      this.toast.success("Xác nhận thành công", "Thông báo")
    }, error => {
      this.router.navigateByUrl('/share/error');
      this.toast.error('Bạn không có quyền vào trang này', "Thông báo")
    });
  }

  resetModal() {
    this.delete = [];
    this.confirm = [];
  }

  nameSearch() {
    const name = this.searchForm.value.nameSearch;
    this.reportDetailService.searchByKeyWord(name, this.pageCurrent).subscribe(data => {
      this.reportDetailList = data.content;
      this.pageTotal = data.totalPages;
    }, error => {
      this.router.navigateByUrl('/share/error');
      this.toast.error('Bạn không có quyền vào trang này', "Thông báo")
    });
  }

  nextPage(currentPage: number) {
    this.page = currentPage
    if (this.pageCurrent < this.pageTotal - 1) {
      this.pageCurrent = this.pageCurrent + 1;
    }
    this.reportDetailService.getAllReportDetail(this.page).subscribe(data => {
      this.reportDetailList = data.content;
    }, error => {
      this.router.navigateByUrl('/share/error');
      this.toast.error('Bạn không có quyền vào trang này', "Thông báo")
    });
    this.nameSearch();
  }

  previousPage(currentPage: number) {
    this.page = currentPage;
    if (this.pageCurrent > 0) {
      this.pageCurrent = this.pageCurrent - 1;
    }
    this.reportDetailService.getAllReportDetail(this.page).subscribe(data => {
      this.reportDetailList = data.content;
    }, error => {
      this.router.navigateByUrl('/share/error');
      this.toast.error('Bạn không có quyền vào trang này', "Thông báo")
    });
    this.nameSearch();
  }
}
