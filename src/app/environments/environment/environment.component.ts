import { Component } from '@angular/core';

@Component({
  selector: 'app-environment',
  standalone: true,
  imports: [],
  templateUrl: './environment.component.html',
  styleUrl: './environment.component.css'
})
export class EnvironmentComponent {

}
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000' // Ensure this URL is correct
};
