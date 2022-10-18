import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SendRequestService {

  constructor(private http: HttpClient) { }
  public  checkFriend(idUser1, idUser2){
    return this.http.get(`http://localhost:8080/api/users/friendList/check/${idUser1}/${idUser2}`);
      // { responseType: 'text'});
  }

  public addRequest(idUser1, idUser2){
    return this.http.post(`http://localhost:8080/api/users/friendList/addRequest/${idUser1}/${idUser2}`,"")
  }
}
