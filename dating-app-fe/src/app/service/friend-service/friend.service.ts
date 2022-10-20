import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../user/model/user";

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private httpClient: HttpClient) {
  }
 public getRequest(id : number):Observable<User[]>{
    return this.httpClient.get<User[]>("http://localhost:8080/api/users/request/"+id)
  }
 public accept(id1:number , id2:number){
    return this.httpClient.patch(`http://localhost:8080/api/users/accept/${id1}/${id2}`,'')
  }
  public denied(id1:number , id2:number){
    return this.httpClient.patch(`http://localhost:8080/api/users/denied/${id1}/${id2}`,'')
  }
}
