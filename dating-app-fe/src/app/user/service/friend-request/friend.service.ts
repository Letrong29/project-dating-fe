import { Injectable } from '@angular/core';
import {User} from "../../model/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private httpClient:HttpClient) { }

  getSuggestRequest(idSuggest:number):Observable<User[]>{
    return this.httpClient.get<User[]>("http://localhost:8080/api/users/suggest/"+idSuggest);
  }
  public addRequest(id1:number , id2:number){
    return this.httpClient.post(`http://localhost:8080/api/users/friendList/addRequest/${id1}/${id2}`,'')
  }
}
