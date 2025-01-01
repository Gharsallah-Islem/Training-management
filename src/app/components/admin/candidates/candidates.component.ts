import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../../services/candidate.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidates',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
  candidates: any[] = [];
  selectedCandidate: any = {};
  isEditing = false;

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.loadCandidates();
  }

  loadCandidates(): void {
    this.candidateService.getCandidates().subscribe((data) => {
      this.candidates = data;
    });
  }

  addCandidate(): void {
    this.candidateService.addCandidate(this.selectedCandidate).subscribe(() => {
      this.loadCandidates();
      this.selectedCandidate = {};
    });
  }

  editCandidate(candidate: any): void {
    this.selectedCandidate = { ...candidate };
    this.isEditing = true;
  }

  updateCandidate(): void {
    this.candidateService.updateCandidate(this.selectedCandidate).subscribe(() => {
      this.loadCandidates();
      this.selectedCandidate = {};
      this.isEditing = false;
    });
  }

  deleteCandidate(id: number): void {
    this.candidateService.deleteCandidate(id).subscribe(() => {
      this.loadCandidates();
    });
  }
}