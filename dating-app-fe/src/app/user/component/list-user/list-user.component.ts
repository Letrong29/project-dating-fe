import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {

  keyword: string = "";
  page: number = 0;
  totalPage: number;
  userList: User[] = [];
  reportDetailList: any = null;
  selectedMember = "";
  selectWarning: "";
  user: User = null;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.searchAndListUser();
    this.updateStatus();
  }

  searchAndListUser() {
    this.page = 0;
    return this.userService.findByAllAndSearchNameUser(this.keyword, this.selectedMember, this.page).subscribe(us => {
      // @ts-ignore
      this.userList = us.content;
      // @ts-ignore
      this.totalPage = us.totalPages;
    })
  }

  previous() {
    this.page = this.page - 1;
    return this.userService.findByAllAndSearchNameUser(this.keyword, this.selectedMember, this.page).subscribe(us => {
      // @ts-ignore
      this.userList = us.content;
      // @ts-ignore
      this.totalPage = us.totalPages;
    })
  }

  next() {
    this.page = this.page + 1;
    return this.userService.findByAllAndSearchNameUser(this.keyword, this.selectedMember, this.page).subscribe(us => {
      // @ts-ignore
      this.userList = us.content;
      // @ts-ignore
      this.totalPage = us.totalPages;
    })
  }

  getReportDetail(id: number) {
    this.userService.getAllReportDetail(id).subscribe(rd => {
      this.reportDetailList = rd
      this.userService.findByIdUser(id).subscribe(us => {
        this.user = us;
        console.log(us)
      })
    });
  }

  updateStatus() {
    const request = {
      idUser: this.reportDetailList[0].idUser,
      status: this.selectWarning
    }
    this.userService.updateStatusWarrningUser(request).subscribe(() => {
    });
  }

}
