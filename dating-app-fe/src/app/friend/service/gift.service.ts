import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Gift} from "../model/gift";
import {HttpClient} from "@angular/common/http";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  constructor(private http : HttpClient) { }

  getAllGift() : Observable<Gift[]>{
   return this.http.get<Gift[]>(API_URL + '/api/user/gift/listGift')
  }

}
