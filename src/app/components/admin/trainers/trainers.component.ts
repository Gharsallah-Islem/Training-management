import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../../services/trainer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {
  trainers: any[] = [];
  currentTrainer: any = {};
  isEditing: boolean = false;

  constructor(private trainerService: TrainerService) { }

  ngOnInit(): void {
    this.loadTrainers();
  }

  loadTrainers(): void {
    this.trainerService.getTrainers().subscribe((data) => {
      this.trainers = data;
    });
  }

  addTrainer(): void {
    this.trainerService.addTrainer(this.currentTrainer).subscribe(() => {
      this.loadTrainers();
      this.currentTrainer = {};
    });
  }

  editTrainer(trainer: any): void {
    this.currentTrainer = { ...trainer };
    this.isEditing = true;
  }

  updateTrainer(): void {
    this.trainerService.updateTrainer(this.currentTrainer).subscribe(() => {
      this.loadTrainers();
      this.cancelEdit();
    });
  }

  deleteTrainer(id: number): void {
    this.trainerService.deleteTrainer(id).subscribe(() => {
      this.loadTrainers();
    });
  }

  cancelEdit(): void {
    this.currentTrainer = {};
    this.isEditing = false;
  }
}