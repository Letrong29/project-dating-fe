import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

const SERVICE_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ReportDetailService {

  constructor(){}

}
