import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../../services/candidate.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidates',
  standalone: true,
  imports: [CommonModule], // Import CommonModule pour *ngFor
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
  candidates: any[] = [];

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.candidateService.getCandidates().subscribe((data) => {
      this.candidates = data;
    });
  }
}
