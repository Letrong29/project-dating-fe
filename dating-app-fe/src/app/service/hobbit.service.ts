import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HobbitService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<any>{
    return this.httpClient.get('http://localhost:8080/api/public/user/get-all-hobbit');
  }
}
