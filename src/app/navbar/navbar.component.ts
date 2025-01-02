import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand fs-4 fw-bold" routerLink="/">ISET Radès</a>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <!-- Formations Link -->
            <li class="nav-item">
              <a class="nav-link fs-5 mx-2" routerLink="/formations">Formations</a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link fs-5 mx-2 btn btn-outline-light"
                (click)="openAdminModal()"
              >
                Admin Space
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div
      class="modal fade"
      id="adminModal"
      tabindex="-1"
      aria-labelledby="adminModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="adminModalLabel">Admin Access</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form (ngSubmit)="navigateToAdmin()">
              <div class="mb-3">
                <label for="password" class="form-label">Enter Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  [(ngModel)]="password"
                  name="password"
                  required
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: []
})
export class NavbarComponent {
  password: string = ''; 

  constructor(private router: Router) { }

  openAdminModal(): void {
    const modal = document.getElementById('adminModal');
    if (modal) {
      new (window as any).bootstrap.Modal(modal).show();
    }
  }

  navigateToAdmin(): void {
    if (this.password === '12345678') {
      this.router.navigate(['/admin/candidates']);
    } else {
      alert('Access Denied');
    }
    this.password = ''; 
    this.closeAdminModal(); 
  }

  closeAdminModal(): void {
    const modal = document.getElementById('adminModal');
    if (modal) {
      const bootstrapModal = (window as any).bootstrap.Modal.getInstance(modal);
      if (bootstrapModal) {
        bootstrapModal.hide();
      } else {
        new (window as any).bootstrap.Modal(modal).hide();
      }
    }
  }
}