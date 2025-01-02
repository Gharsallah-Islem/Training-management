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
  isFull = false; 
  showForm = false; 
  candidate = { name: '', email: '' }; 
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private formationService: FormationService,
    private sessionService: SessionService,
    private trainerService: TrainerService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log('Formation ID:', id); 

    this.formationService.getFormation(id).subscribe(
      (data) => {
        this.formation = data;
        this.isLoading = false; 
        this.loadSessions(); 
      },
      (error) => {
        console.error('Error fetching formation:', error); 
        this.isLoading = false; 
      }
    );

    this.loadTrainers();
  }

  loadSessions(): void {
    this.sessionService.getSessions().subscribe(
      (sessions) => { 
        this.sessions = sessions.filter((session: any) => {
          return session.formationId = Number(this.formation.id); 
        });
      },
      (error) => {
        console.error('Error fetching sessions:', error); 
      }
    );
  }

  loadTrainers(): void {
    this.trainerService.getTrainers().subscribe(
      (trainers) => {
        this.trainers = trainers;
      },
      (error) => {
        console.error('Error fetching trainers:', error); 
      }
    );
  }

  getTrainerNames(trainerIds: number[]): string {
    return trainerIds
      .map((id) => {
        const trainer = this.trainers.find((t) => t.id == id);
        return trainer ? `${trainer.firstName} ${trainer.lastName}` : 'Unknown Trainer';
      })
      .join(', ');
  }

  register(sessionId: number): void {
    const session = this.sessions.find((s) => s.id == sessionId);
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