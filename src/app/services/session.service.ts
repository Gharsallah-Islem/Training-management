import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private apiUrl = 'http://localhost:3000/sessions';

  constructor(private http: HttpClient) { }

  getSessions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addSession(session: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, session);
  }

  updateSession(session: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${session.id}`, session);
  }

  deleteSession(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}