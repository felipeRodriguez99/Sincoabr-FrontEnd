import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../Models/appSettings.model';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private http: HttpClient) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  createTeacher(json: any): Observable<any> {
    return this.http.post(AppSettings.API_ENDPOINT + 'Teachers/CreateTeacher', JSON.stringify(json), this.headers);
  }

  createTeacherSubject(json: any): Observable<any> {
    return this.http.post(AppSettings.API_ENDPOINT + 'Teachers/CreateTeacherSubject', JSON.stringify(json), this.headers);
  }

  getTeacher(): Observable<any> {
    return this.http.get(AppSettings.API_ENDPOINT + 'Teachers/GetTeacher');
  }

  isActiveTeacher(code: string): Observable<any> {
    return this.http.delete(AppSettings.API_ENDPOINT + 'Teachers/DeleteTeacher?code=' + code);
  }

  GetTeacherSubject(code: string): Observable<any> {
    return this.http.get(AppSettings.API_ENDPOINT + 'Teachers/GetTeacherSubject?code=' + code);
  }
}
