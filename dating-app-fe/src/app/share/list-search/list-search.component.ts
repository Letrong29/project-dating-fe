import {Component, OnInit} from '@angular/core';
import {User} from "../../user/model/user";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UserService} from "../service/user.service";


@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.css']
})
export class ListSearchComponent implements OnInit {
  user: User[] = [];
  page: number = 0;
  totalPages: number;
  countTotalPages: number[];
  searchValue: string;

  constructor(private userService: UserService, private toastrService: ToastrService, private  activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.searchValue = paramMap.get("search");
    })

  }

  ngOnInit() {
    this.getAllPageSearch(this.page, this.searchValue);

  }

  getAllPageSearch(page: number, name: string) {
    if (name == "") {
      this.getAllPageSearch(this.page, "");
    }
    if (name.length > 30) {
      this.toastrService.success("Bạn đã nhập quá nhiều ký tự")
    }
    if (name.match("^\\W+$")) {
      this.toastrService.success("Không được nhập ký tự đặc biệt")
    }
    else{
      this.userService.getAllSearchPage(page, name).subscribe(data => {
        if(data == null){
          this.toastrService.success("Tên bận nhâp không có")
        }else {
          this.user = data.content;
          console.log(this.user)

          this.countTotalPages = new Array(data.totalPages)
          this.totalPages = data.totalPages;
        }
        })
    }

  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      console.log(this.page)
    }
    this.getAllPageSearch(this.page, "");
  }

  previousPage() {
    if (this.page > 0) {
      this.page--;
    }
    this.getAllPageSearch(this.page, "");
  }

  searchName($event: string) {
    if ($event == "") {
      this.getAllPageSearch(this.page, "");
    }
    if ($event.length > 30) {
      this.toastrService.success("Bạn đã nhập quá nhiều ký tự")
    }
    if ($event.match("^\\W+$")) {
      this.toastrService.success("Không được nhập ký tự đặc biệt")
    } else {
      this.userService.getAllSearchPage(this.page, $event).subscribe(data => {
        this.user = data.content;
      })
    }

  }
}
