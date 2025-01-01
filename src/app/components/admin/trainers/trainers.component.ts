import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../../services/trainer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {
  trainers: any[] = [];

  constructor(private trainerService: TrainerService) { }

  ngOnInit(): void {
    this.trainerService.getTrainers().subscribe((data) => {
      this.trainers = data;
    });
  }
}
