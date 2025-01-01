import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TrainerService {
  private apiUrl = 'http://localhost:3000/trainers';

  constructor(private http: HttpClient) { }

  getTrainers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addTrainer(trainer: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, trainer);
  }

  deleteTrainer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}