import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HobbitService {

  constructor(private http:HttpClient) { }
  public getHobbitByIdUser(id:number):Observable<any>{
    return this.http.get("http://localhost:8080/api/users/hobbits/" + id);
  }
}
