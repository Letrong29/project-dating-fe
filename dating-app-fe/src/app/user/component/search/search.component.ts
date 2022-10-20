import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users: any[] = [];
  hobbitName: string = '';
  name: string = '';
  address: string = '';
  dateOfBirth: string = '';
  job: string = '';
  gender: string = '';
  flag: boolean = false;
  checkSearchRequired: boolean= false ;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAll().subscribe(data => {
        this.users = data.content;
      }
    )
  }

  onSearch() {
    if (this.name == ""
      && this.dateOfBirth == ""
      && this.address == ""
      && this.hobbitName == ""
      && this.job == ""
      && this.gender == "") {
      this.flag = false;
      this.checkSearchRequired =false;
    } else {
      this.flag = true;
      console.log(this.dateOfBirth)
      this.userService.getSearch(this.name, this.dateOfBirth, this.address, this.job, this.gender, this.hobbitName).subscribe(data => {
          if (data == null) {
            this.checkSearchRequired = true;
            this.users = [];
          } else {
            this.users = data.content;
          }
        }
      )
    }
    this.checkSearchRequired=false;
  }

}


