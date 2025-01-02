import { Component } from '@angular/core';
import { FormationService } from '../../../services/formation.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent {
  formations: any[] = []; // All formations
  filteredFormations: any[] = []; // Formations filtered by search
  searchQuery: string = ''; // Search query

  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.formationService.getFormations().subscribe((data) => {
      this.formations = data;
      this.filteredFormations = data; // Initialize filteredFormations with all formations
    });
  }

  // Filter formations based on search query
  filterFormations(): void {
    this.filteredFormations = this.formations.filter((formation) =>
      formation.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}