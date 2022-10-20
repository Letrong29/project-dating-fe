import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FriendListService {

  constructor(private httpClient: HttpClient) {
  }

  getFriendList(id: number, page: number, name: String, size: number): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/api/users/list/friend_list/${id}?page=${page}&name=${name}&size=${size}`);
  }

  deleteFriendList(id:number, idArray:number[]):Observable<any>{
    return this.httpClient.patch<any>(`http://localhost:8080/api/users/list/delete/${id}`, idArray)
  }

  blockFriendList(id:number, idArray:number[]):Observable<any>{
    return this.httpClient.patch<any>(`http://localhost:8080/api/users/list/block/${id}`, idArray)
  }
}
