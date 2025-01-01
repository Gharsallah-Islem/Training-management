import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mt-4">
      <h2>Admin Space</h2>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" routerLink="/admin/candidates">Candidats</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/admin/trainers">Formateurs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/admin/formations">Formations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/admin/sessions">Sessions</a>
        </li>
      </ul>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent { }