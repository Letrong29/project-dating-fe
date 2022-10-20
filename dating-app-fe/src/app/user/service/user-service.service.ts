import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {TokenStorageService} from "../../service/authentication/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private  httpClient: HttpClient, private auth: AuthenticationService,
              private tokenStorageService: TokenStorageService) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get<any>
    (`http://localhost:8080/api/users/listAndSearch`, this.auth.getToken())
  }

  getIdAccount(){

  }
  getSearch(name: string,
            dateOfBirth: string,
            address: string,
            job: string,
            gender: string,
            hobbitName: string): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/api/users/listAndSearch?name=${name}&address=${address}&job=${job}&dateOfBirth=${dateOfBirth}&gender=${gender}&hobbitName=${hobbitName}`,
      this.auth.getToken())
  }

}