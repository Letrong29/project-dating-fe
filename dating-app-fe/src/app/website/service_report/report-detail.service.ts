import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReportServiceService} from "./report-service.service";
import {Observable} from "rxjs";
import {ReportDetail} from "../model/report-detail";
import {Report} from "../model/report";

@Injectable({
  providedIn: 'root'
})
export class ReportDetailService {
  private URL_CONNECT = 'http://localhost:8080/api';
  constructor(private httpClient:HttpClient,private reportServiceService: ReportServiceService){
  }

  getAllReportDetail(page: number):Observable<ReportDetail[]>{
    return this.httpClient.get<ReportDetail[]>(this.URL_CONNECT + '/admin/report-detail' + '?page=' +page);
  }

  getAllReport():Observable<Report[]>{
    return this.httpClient.get<Report[]>(this.URL_CONNECT + '/report-list')
  }

  findReportDetailById(id: number): Observable<ReportDetail> {
    return this.httpClient.get<ReportDetail>(this.URL_CONNECT + '/admin/detail/' + id);
  }

  confirmReportDetail(id: number): Observable<ReportDetail> {
    // @ts-ignore
    return this.httpClient.patch<ReportDetail>(this.URL_CONNECT + '/admin/confirm/' + id);
  }

  deleteReportDetail(id: number): Observable<ReportDetail> {
    // @ts-ignore
    return this.httpClient.patch<ReportDetail>(this.URL_CONNECT + '/admin/delete/' + id);
  }


  searchByKeyWord(keyWord: string,page: number): Observable<ReportDetail[]> {
    if(keyWord==null) {
      keyWord =""
    }
    return this.httpClient.get<ReportDetail[]>(this.URL_CONNECT + '/admin/report-detail'+'?keyWord=' + keyWord + '&page='+page);
  }

  save(reportDetail: ReportDetail) {
    return  this.httpClient.post(this.URL_CONNECT + '/public/report', reportDetail);
  }

}
