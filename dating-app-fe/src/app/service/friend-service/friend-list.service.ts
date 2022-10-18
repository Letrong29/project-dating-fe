import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../user/model/user";

@Injectable({
  providedIn: 'root'
})
export class FriendListService {

  constructor(private httpClient:HttpClient) { }

  getFriendList(id:number,name: String):Observable<any>{
    return this.httpClient.get(`http://localhost:8080/api/user/list/friend_list/${id}?name=${name}`);
  }
}
