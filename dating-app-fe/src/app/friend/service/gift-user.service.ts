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

  GiveAGiftUser(idGift: number, idUserReceiver:number, idUserSender:number, quantity:number): Observable<GiftUser> {
    return this.http.get<GiftUser>(`${API_URL}/api/user/gift/saveGiftUser?idGift=${idGift}&idUserReceiver=${idUserReceiver}&idUserSender=${idUserSender}&quantity=${quantity}`);
  }

  findByIdUser(idUser: number): Observable<User> {
    return this.http.get<User>(`${API_URL}/api/user/gift/user/${idUser}`);
  }

  findByIdGift(idGift: number): Observable<Gift> {
    return this.http.get<Gift>(`${API_URL}/api/user/gift/gift/${idGift}`);
  }

}
