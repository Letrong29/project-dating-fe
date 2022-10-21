import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UpdateAvatarService {

  constructor(private httpClient : HttpClient,private auth: AuthenticationService) {

  }

  getUpdateAvatar(user: User) {
    return this.httpClient.patch('http://localhost:8080/api/users/update_avatar/' + 1, user,this.auth.getToken())
  }

  getUpdateActive(user: User) {
    return this.httpClient.patch('http://localhost:8080/api/users/update_active/' + 7, user,this.auth.getToken())
  }

}
