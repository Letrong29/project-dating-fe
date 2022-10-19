import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../user/model/user";
import {Gift} from "../model/gift";
import {GiftUser} from "../model/gift-user";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class GiftUserService {

  constructor(private http: HttpClient) {

  }

  findByIdUser(idUser: number): Observable<User> {
    return this.http.get<User>(`${API_URL}/api/user/gift/user/${idUser}`)
  }

  findByIdGift(idGift: number): Observable<Gift> {
    return this.http.get<Gift>(`${API_URL}/api/user/gift/gift/${idGift}`)
  }

  updateGiftUser(idUser: number, giftUser: GiftUser): Observable<GiftUser> {
    return this.http.patch<GiftUser>(`${API_URL}/api/user/gift/saveGiftUser${idUser}`, giftUser);
  }

}
