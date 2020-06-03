import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../Models/appSettings.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }


  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  getNotesByCode(code: string): Observable<any> {
    return this.http.get(AppSettings.API_ENDPOINT + 'Notes/GetNote?code=' + code);
  }

  createNote(json: any): Observable<any> {
    return this.http.post(AppSettings.API_ENDPOINT + 'Notes/CreateNote', JSON.stringify(json), this.headers);
  }

  updateNote(json: any): Observable<any> {
    return this.http.put(AppSettings.API_ENDPOINT + 'Notes/UpdateNote', JSON.stringify(json), this.headers);
  }

  getNotes(): Observable<any> {
    return this.http.get(AppSettings.API_ENDPOINT + 'Subject/GetSubject');
  }

  getPeriods(): Observable<any> {
    return this.http.get(AppSettings.API_ENDPOINT + 'Periods/GetPeriod');
  }
}
