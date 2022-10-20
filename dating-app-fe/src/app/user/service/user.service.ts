import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get<any>
    (`http://localhost:8080/api/users/listAndSearch`)
  }


  getSearch(name: string,
            dateOfBirth: string,
            address: string,
            job: string,
            gender: string,
            hobbitName: string): Observable<any> {
    return this.httpClient.get<any>
    (`http://localhost:8080/api/users/listAndSearch?name=${name}&address=${address}&job=${job}&dateOfBirth=${dateOfBirth}&gender=${gender}&hobbitName=${hobbitName}`)
  }
}
