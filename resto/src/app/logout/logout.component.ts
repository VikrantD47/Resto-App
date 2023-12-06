import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  showAlert: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  performLogout() {
    // Perform logout actions here, such as clearing the session variable
    sessionStorage.removeItem('authenticated');

    // Show the alert
    this.showAlert = true;

    // Optionally, you can redirect the user to the login page after a brief delay
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000); // Redirect to login after 3 seconds (adjust as needed)
  }

  closeAlert() {
    this.showAlert = false;
  }
}

