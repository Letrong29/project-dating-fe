import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  update(user: User) {
    return this.httpClient.patch('http://localhost:8080/api/public/user/update', user);
  }
}
