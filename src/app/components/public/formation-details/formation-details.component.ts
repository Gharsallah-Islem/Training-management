import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from '../../../services/formation.service';
import { SessionService } from '../../../services/session.service';
import { TrainerService } from '../../../services/trainer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formation-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.scss']
})
export class FormationDetailsComponent implements OnInit {
  formation: any;
  sessions: any[] = [];
  trainers: any[] = [];
  trainer: any;
  isFull = false;
  showForm = false;
  candidate = { name: '', email: '' };

  constructor(
    private route: ActivatedRoute,
    private formationService: FormationService,
    private sessionService: SessionService,
    private trainerService: TrainerService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log('Formation ID:', id);
    this.formationService.getFormation(id).subscribe((data) => {
      console.log('Formation Data:', data);
      this.formation = data;
      this.loadSessions();
    });
    this.loadTrainers();
  }

  loadSessions(): void {
    this.sessionService.getSessions().subscribe((sessions) => {
      console.log('All Sessions:', sessions); // Debugging
      this.sessions = sessions.filter((session: any) => session.formationId === Number(this.formation.id)); // Convert to number
      console.log('Filtered Sessions:', this.sessions); // Debugging
    });
  }

  loadTrainers(): void {
    this.trainerService.getTrainers().subscribe((trainers) => {
      this.trainers = trainers;
    });
  }

  getTrainerNames(trainerIds: number[]): string {
    return trainerIds
      .map((id) => {
        const trainer = this.trainers.find((t) => t.id == id);
        return trainer ? `${trainer.firstName} ${trainer.lastName}` : 'Unknown Trainer';
      })
      .join(', ');
  }
  getTrainerName(trainerIds: number[]) {
    this.trainerService.getTrainerById(trainerIds).subscribe((data) => {
      this.trainer = data;
    })
  }

  register(sessionId: number): void {
    const session = this.sessions.find((s) => s.id === sessionId);
    if (session && session.candidateIds.length < 15) {
      this.showForm = true;
    } else {
      this.isFull = true;
    }
  }

  onSubmit(): void {
    alert('Subscription successful!');
    this.showForm = false;
  }
}