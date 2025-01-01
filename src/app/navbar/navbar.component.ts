import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="light">
  <div class="container-fluid">
    <a class="navbar-brand" routerLink="/">ISET Radès</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse show" id="navbarColor03" style="">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" routerLink="/formations">Formations
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/admin-space/candidates">Candidats</a>
        </li>
        <li class="nav-item">
           <a class="nav-link" routerLink="/admin-space/trainers">Formateurs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/admin-space/sessions">Sessions</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  `,
  styleUrls: []
})
export class NavbarComponent { }
