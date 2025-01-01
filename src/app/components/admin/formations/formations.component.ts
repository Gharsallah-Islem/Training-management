import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../../services/formation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  formations: any[] = [];
  selectedFormation: any = {};
  isEditing = false;

  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.loadFormations();
  }

  loadFormations(): void {
    this.formationService.getFormations().subscribe((data) => {
      this.formations = data;
    });
  }

  addFormation(): void {
    this.formationService.addFormation(this.selectedFormation).subscribe(() => {
      this.loadFormations();
      this.selectedFormation = {};
    });
  }

  editFormation(formation: any): void {
    this.selectedFormation = { ...formation };
    this.isEditing = true;
  }

  updateFormation(): void {
    this.formationService.updateFormation(this.selectedFormation).subscribe(() => {
      this.loadFormations();
      this.selectedFormation = {};
      this.isEditing = false;
    });
  }

  deleteFormation(id: number): void {
    this.formationService.deleteFormation(id).subscribe(() => {
      this.loadFormations();
    });
  }
}