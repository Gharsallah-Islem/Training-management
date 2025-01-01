import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private apiUrl = 'http://localhost:3000/candidates';

  constructor(private http: HttpClient) { }

  getCandidates(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addCandidate(candidate: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, candidate);
  }

  updateCandidate(candidate: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${candidate.id}`, candidate);
  }

  deleteCandidate(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}