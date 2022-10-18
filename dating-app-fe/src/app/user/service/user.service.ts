import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Post} from "../model/post";
import {NewFeed} from "../model/new-feed";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

   getListPost(id : number):Observable<any>{
     return this.httpClient.get<NewFeed[]>("http://localhost:8080/api/users/list/"+id);
  }
}
