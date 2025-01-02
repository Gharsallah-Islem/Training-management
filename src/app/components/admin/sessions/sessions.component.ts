import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { FormationService } from '../../../services/formation.service';
import { TrainerService } from '../../../services/trainer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sessions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
  sessions: any[] = [];
  formations: any[] = [];
  trainers: any[] = [];
  selectedSession: any = {};
  isEditing = false;

  constructor(
    private sessionService: SessionService,
    private formationService: FormationService,
    private trainerService: TrainerService
  ) { }

  ngOnInit(): void {
    this.loadSessions();
    this.loadFormations();
    this.loadTrainers();
  }

  loadSessions(): void {
    this.sessionService.getSessions().subscribe((data) => {
      this.sessions = data;
    });
  }

  loadFormations(): void {
    this.formationService.getFormations().subscribe((data) => {
      this.formations = data;
    });
  }

  loadTrainers(): void {
    this.trainerService.getTrainers().subscribe((data) => {
      this.trainers = data;
    });
  }

  addSession(): void {
    this.sessionService.addSession(this.selectedSession).subscribe(() => {
      this.loadSessions();
      this.selectedSession = {};
    });
  }

  editSession(session: any): void {
    this.selectedSession = { ...session };
    this.isEditing = true;
  }

  updateSession(): void {
    this.sessionService.updateSession(this.selectedSession).subscribe(() => {
      this.loadSessions();
      this.selectedSession = {};
      this.isEditing = false;
    });
  }

  deleteSession(id: number): void {
    this.sessionService.deleteSession(id).subscribe(() => {
      this.loadSessions();
    });
  }
  getFormationName(formationId: number): string {
    const formation = this.formations.find((f) => f.id == formationId);
    return formation ? formation.title : 'Unknown Formation';
  }

  getTrainerNames(trainerIds: number[]): string {
    return trainerIds
      .map((id) => {
        const trainer = this.trainers.find((t) => t.id == id);
        return trainer ? `${trainer.firstName} ${trainer.lastName}` : 'Unknown Trainer';
      })
      .join(', ');
  }
}