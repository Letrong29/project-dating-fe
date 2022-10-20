import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../service/token-storage.service";
import {TestService} from "../../service/test.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  account: any

  constructor(private tokenStorageService: TokenStorageService, private testService: TestService) {
  }

  ngOnInit(): void {
    // console.log(this.account.idAccount)
    this.getAll()
  }

  logOut() {
    this.tokenStorageService.logOut();
    window.location.reload();
  }

  getAll() {
    this.testService.getAll().subscribe(next => {
      this.account = next;
      console.log(next)
    }, error => {
      console.log(error)
    })
  }
}
