import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FormationService {
  private apiUrl = 'http://localhost:3000/formations';

  constructor(private http: HttpClient) { }

  getFormations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getFormationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addFormation(formation: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formation);
  }

  deleteFormation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}