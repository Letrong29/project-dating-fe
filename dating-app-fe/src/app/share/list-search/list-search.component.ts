import {Component, OnInit} from '@angular/core';
import {User} from "../../user/model/user";
import {UserService} from "../service/user.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, ParamMap} from "@angular/router";


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
  name:any;

  constructor(private userService: UserService,
              private toastrService: ToastrService,
              private activatedRoute :ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap : ParamMap)=>{
      this.name = paramMap.get('search')
      console.log(this.name)
    })
  }

  ngOnInit() {
    this.getAllPageSearch();

  }


  getAllPageSearch() {
    this.userService.getAllSearchPage(this.page, '').subscribe(data => {
      this.user = data.content;
      this.countTotalPages = new Array(data.totalPages)
      this.totalPages = data.totalPages;
    })
    // if (this.name == "") {
    //   this.getAllPageSearch();
    // }
    // if (this.name.length > 30) {
    //   this.toastrService.success("Bạn đã nhập quá nhiều ký tự")
    // }
    // if (this.name.match("^\\W+$")) {
    //   this.toastrService.success("Không được nhập ký tự đặc biệt")
    // } else {
    //   this.userService.getAllSearchPage(this.page, this.name).subscribe(data => {
    //     this.user = data.content;
    //     this.countTotalPages = new Array(data.totalPages)
    //     this.totalPages = data.totalPages;
    //   })
    //
    // }

  }


  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
    }
    this.getAllPageSearch();
  }

  previousPage() {
    if (this.page > 0) {
      this.page--;
    }
    this.getAllPageSearch();
  }

  searchName($event: string) {
    if ($event == "") {
      this.getAllPageSearch();
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
