import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  create(value: any) {
    return this.httpClient.post("http://localhost:8080/api/users/posts/save",value);
  }
}
