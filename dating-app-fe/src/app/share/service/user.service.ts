import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationService} from "../../service/authentication/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient, private auth: AuthenticationService) {
  }

  public getUserById(id: number): Observable<any> {
    return this.http.get("http://localhost:8080/api/users/users/" + id, this.auth.getToken());
  }

  getAllSearchPage(page: number, search: string): Observable<any> {
    return this.http.get(`http://localhost:8080/api/public/searchPage?page=${page}` + `&name=${search}`,
      this.auth.getToken())
  }

}
