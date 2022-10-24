import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtRequest} from "../model/jwt-request";

const AUTH_API = 'http://localhost:8080/api/users/account';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  constructor(private http: HttpClient) {
  }

  doResetPassword(authenticationRequest: JwtRequest, email: string): Observable<JwtRequest> {
    return this.http.post<JwtRequest>(`${AUTH_API}/changePassword/${email}`, authenticationRequest);
  }
}
