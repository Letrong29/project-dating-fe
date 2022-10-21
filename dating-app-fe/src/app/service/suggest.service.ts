import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../user/model/user";
import {AuthenticationService} from "./authentication/authentication.service";


@Injectable({
  providedIn: 'root'
})
export class SuggestService {

  constructor(private httpClient: HttpClient, private auth: AuthenticationService) {
  }

  getSuggestRequest(idSuggest: number): Observable<any> {
    return this.httpClient.get<User[]>("http://localhost:8080/api/users/suggest/" + idSuggest,
      this.auth.getToken());
  }

  public addRequest(id1: number, id2: number) {
    return this.httpClient.post(`http://localhost:8080/api/users/friendList/addRequest/${id1}/${id2}`, '',
      this.auth.getToken())
  }


}
