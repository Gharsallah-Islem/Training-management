import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">ISET Radès</a>
        <div class="navbar-collapse">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/formations">Formations</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/admin/candidates">Candidats</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/admin/trainers">Formateurs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/admin/sessions">Sessions</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styleUrls: []
})
export class NavbarComponent { }