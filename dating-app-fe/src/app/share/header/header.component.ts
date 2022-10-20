import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../../user/model/user";
import {TokenStorageService} from "../../service/authentication/token-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()keySearch = new EventEmitter();
  user :User[] =[];
  constructor(private userService : UserService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.userService.getAllSearchPage(0,"").subscribe(data=>{
      this.user =data.content;
    })
  }
  search(page:number,name: string) {
    this.keySearch.emit(name) ;
  }

  logOut() {
    this.tokenStorageService.logOut();
    window.location.reload();
  }
}
