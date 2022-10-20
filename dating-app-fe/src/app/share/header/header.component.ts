import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../user/service/user.service";
import {User} from "../../user/model/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()keySearch = new EventEmitter();
  user :User[] =[];
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getAllSearchPage(0,"").subscribe(data=>{
      this.user =data.content;
    })
  }
  search(page:number,name: string) {
    this.keySearch.emit(name) ;
  }

}