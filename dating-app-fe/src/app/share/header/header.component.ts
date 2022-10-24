import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../../user/model/user";
import {TokenStorageService} from "../../service/authentication/token-storage.service";
import {UserServiceService} from "../../user/service/user-service.service";
import {AuthenticationService} from "../../service/authentication/authentication.service";

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
              private auth: AuthenticationService
              ) {

  }
  ngOnInit(): void {
    if (this.tokenStorageService.getUser()){
      this.myIdUser = this.tokenStorageService.getUser().idAccount;
      this.auth.getUserByAccount(this.myIdUser).subscribe(user=>{
        this.myUser = user;
        console.log(this.myUser.avatar)
      })
    }
  }

  logOut() {
    this.tokenStorageService.logOut();
    window.location.reload();
  }
}
