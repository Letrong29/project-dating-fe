import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../service/token-storage.service";
import {TestService} from "../../service/test.service";

@Component({
  selector: 'app-test-admin',
  templateUrl: './test-admin.component.html',
  styleUrls: ['./test-admin.component.css']
})
export class TestAdminComponent implements OnInit {
  result: any;

  constructor(private tokenStorageService: TokenStorageService, private testService: TestService) {
  }

  ngOnInit(): void {
    this.result = this.tokenStorageService.getUser();
    console.log(this.result.idAccount)
    this.getAll()
  }

  getAll() {
    this.testService.getAllAdmin().subscribe(next => {
      console.log(next)
    }, error => {
      console.log(error)
    })
  }
}
