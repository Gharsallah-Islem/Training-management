import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../../services/formation.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [CommonModule,RouterModule], 
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  formations: any[] = [];

  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.formationService.getFormations().subscribe((data) => {
      this.formations = data;
    });
  }
}
