import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationService} from "../../service/authentication/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient, private auth: AuthenticationService) {
  }

  getCreate(comment: Comment) {
    return this.httpClient.post('http://localhost:8080/api/users/add_comment', comment, this.auth.getToken())
  }
}
