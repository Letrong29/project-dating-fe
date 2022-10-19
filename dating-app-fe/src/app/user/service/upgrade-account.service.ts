import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UpgradeAccountService {

  constructor(private httpClient: HttpClient) { }


  findByUserById(idAccount: number): Observable<User>{
    return this.httpClient.get("http://localhost:8080/api/users/upgradeAccount/detailUser/" + idAccount);
  }


  saveInvoice(value: any) {
    return this.httpClient.post("http://localhost:8080/api/users/upgradeAccount/save",value);
  }
}
