import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TypeUserService} from "./type-user.service";
import {TypeUser} from "../model/type-user";
import {environment} from "../../../environments/environment";
import {ReportDetail} from "../../website/model/report-detail";

const SERVICE_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient,private typeUserService:TypeUserService) { }

  findByAllAndSearchNameUser(name: string, typeUser:string, page: number): Observable<User[]> {
    return this.httpClient.get<User[]>(SERVICE_URL + "/api/admin/list/user?name="+name+"&typeUser="+typeUser+"&page="+page);
  }

  getAllTypeUser() : Observable<TypeUser[]>{
    return this.httpClient.get<TypeUser[]>(SERVICE_URL + "/api/admin/list/typeUser");
  }

  getAllReportDetail(id: number): Observable<ReportDetail[]> {
    return this.httpClient.get<ReportDetail[]>(`${SERVICE_URL}/api/admin/list/warning/${id}`);
  }

  updateStatusWarrningUser(request :any): Observable<any>{
    return this.httpClient.patch<any>(`${SERVICE_URL}/api/admin/update/status`, request);
  }

  findByIdUser(id:number): Observable<any>{
    return this.httpClient.get(`${SERVICE_URL}/api/admin/findId/${id}`);
  }
}
