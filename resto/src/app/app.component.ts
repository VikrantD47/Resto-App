import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resto';
  constructor(private router: Router) {}

  logout() {
    // Implement your logout logic here
    // For example, clear tokens, session data, etc.
    
    // Then navigate to the LogoutComponent
    this.router.navigate(['logout']);
  }
}
