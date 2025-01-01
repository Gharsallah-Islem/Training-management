import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from '../../../services/formation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formation-details',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.scss']
})
export class FormationDetailsComponent implements OnInit {
  formation: any;
  isFull = false;
sessions: any;

  constructor(
    private route: ActivatedRoute,
    private formationService: FormationService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.formationService.getFormationById(id).subscribe((data) => {
      this.formation = data;
    });
  }

  register(): void {
    this.isFull = true;
    }
}
