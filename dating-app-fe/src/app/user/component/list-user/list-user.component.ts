import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {ReportDetail} from "../../../website/model/report-detail";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {

  keyword: string = "";
  page: number = 0;
  totalPage: number;
  userList:User[] = [];
  reportDetailList: any = null;
  selectedMember = "";

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.searchAndListUser();
  }

  searchAndListUser() {
    this.page = 0;
    return this.userService.findByAllAndSearchNameUser(this.keyword,this.selectedMember, this.page).subscribe(us => {
      // @ts-ignore
      this.userList = us.content;
      // @ts-ignore
      this.totalPage = us.totalPages;
      console.log(this.totalPage)
    })
  }

  previous() {
    this.page = this.page - 1;
    return this.userService.findByAllAndSearchNameUser(this.keyword,this.selectedMember, this.page).subscribe(us => {
      // @ts-ignore
      this.userList = us.content;
      // @ts-ignore
      this.totalPage = us.totalPages;
      console.log(this.totalPage)
    })
  }

  next() {
    this.page = this.page + 1;
    return this.userService.findByAllAndSearchNameUser(this.keyword,this.selectedMember, this.page).subscribe(us => {
      // @ts-ignore
      this.userList = us.content;
      // @ts-ignore
      this.totalPage = us.totalPages;
      console.log(this.totalPage)
    })
  }

  getReportDetail(id:number){
    return this.userService.getAllReportDetail(id).subscribe(rd => this.reportDetailList = rd);
  }

}
