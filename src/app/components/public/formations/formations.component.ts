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
  formations: any[] = []; 
  filteredFormations: any[] = []; 
  searchQuery: string = ''; 

  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.formationService.getFormations().subscribe((data) => {
      this.formations = data;
      this.filteredFormations = data; 
    });
  }

  filterFormations(): void {
    this.filteredFormations = this.formations.filter((formation) =>
      formation.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}