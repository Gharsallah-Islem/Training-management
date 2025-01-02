import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private apiUrl = 'http://localhost:3000/formations';

  constructor(private http: HttpClient) { }
  getFormations(id?: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getFormation(id: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}`);
  }

  addFormation(formation: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formation);
  }

  updateFormation(formation: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${formation.id}`, formation);
  }
  deleteFormation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}