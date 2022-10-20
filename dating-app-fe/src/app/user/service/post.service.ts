import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NewFeed} from "../model/new-feed";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  create(value: any) {
    return this.httpClient.post("http://localhost:8080/api/users/posts/save",value);
  }

  getListPost(id : number):Observable<any>{
    return this.httpClient.get<NewFeed[]>("http://localhost:8080/api/users/posts/personList/"+id);
  }
  // getNewFeed(id: number):Observable<any>{
  //   return this.httpClient.get<NewFeed>("http://localhost:8080/api/users/findPost/"+id);
  // }
  // updatePost(newFeed:NewFeed){
  //   return this.httpClient.patch("http://localhost:8080/api/users/update/"+ newFeed.idUser,newFeed);
  // }
}
