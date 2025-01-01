import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sessions',
  standalone: true,
  imports: [CommonModule], // Import CommonModule pour *ngFor
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
  sessions: any[] = [];

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionService.getSessions().subscribe((data) => {
      this.sessions = data;
    });
  }
}
