import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../../services/formation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-formations',
  standalone: true,
  imports: [CommonModule], // Import CommonModule pour *ngFor
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class AdminFormationsComponent implements OnInit {
  formations: any[] = [];

  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.formationService.getFormations().subscribe((data) => {
      this.formations = data;
    });
  }
}
