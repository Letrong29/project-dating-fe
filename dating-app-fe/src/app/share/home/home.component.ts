import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user/service/user.service";
import {Router} from "@angular/router";
import {User} from "../../user/model/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User[] = [];
  constructor(private userService: UserService,private router :Router) { }

  ngOnInit(): void {
  }
  search(page:number,name: string) {
    this.userService.getAllSearchPage(0,name).subscribe(data => {
      this.user = data;
      this.router.navigateByUrl("/share/list")
    })
  }
}
