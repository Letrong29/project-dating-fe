import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../../user/model/user";
import {TokenStorageService} from "../../service/authentication/token-storage.service";
import {UserServiceService} from "../../user/service/user-service.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()keySearch = new EventEmitter();
  user :User[] =[];
  myUser: User;
  myIdUser;
  name:string;
  constructor(private userService : UserService,
              private tokenStorageService: TokenStorageService
              , private userServiceService:UserServiceService,
              ) {
    this.myIdUser = this.tokenStorageService.getUser().idAccount;
    this.userServiceService.getUserById(this.myIdUser).subscribe(user=>{
      this.myUser = user;

    })
  }

  ngOnInit(): void {
    this.userService.getAllSearchPage(0,"").subscribe(data=>{
      this.user =data.content;
    })
  }


  logOut() {
    this.tokenStorageService.logOut();
    window.location.reload();
  }
}
