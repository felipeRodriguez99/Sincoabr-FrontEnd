import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../Models/appSettings.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private http: HttpClient) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  createSubject(json: any): Observable<any> {
    return this.http.post(AppSettings.API_ENDPOINT + 'Subject/CreateSubject', JSON.stringify(json), this.headers);
  }

  getSubject(): Observable<any> {
    return this.http.get(AppSettings.API_ENDPOINT + 'Subject/GetSubject');
  }
}
