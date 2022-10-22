import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../user/model/user";
import {TokenStorageService} from "../../service/authentication/token-storage.service";
import {UserServiceService} from "../../user/service/user-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()keySearch = new EventEmitter();
  user :User;
  myIdUser;

  constructor(private userService : UserServiceService,
              private tokenStorageService: TokenStorageService) {
    this.myIdUser = tokenStorageService.getUser().idAccount;
    this.userService.findByIdUser(this.myIdUser).subscribe(user=>{
      this.user = user;
    })
  }

  ngOnInit(): void {
  }
  search(page:number,name: string) {
    this.keySearch.emit(name) ;
  }

  logOut() {
    this.tokenStorageService.logOut();
    window.location.reload();
  }
}
