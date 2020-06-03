import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../Models/appSettings.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  createStudent(json: any): Observable<any> {
    return this.http.post(AppSettings.API_ENDPOINT + 'Students/CreateStudent', JSON.stringify(json), this.headers);
  }

  getStudentByCode(code: string): Observable<any> {
    return this.http.get(AppSettings.API_ENDPOINT + 'Students/GetStudent?code=' + code);
  }

  getStudent(): Observable<any> {
    return this.http.get(AppSettings.API_ENDPOINT + 'Students/GetStudent');
  }

  updateStudent(json: any): Observable<any> {
    return this.http.put(AppSettings.API_ENDPOINT + 'Students/UpdateStudent', JSON.stringify(json), this.headers);
  }

}
