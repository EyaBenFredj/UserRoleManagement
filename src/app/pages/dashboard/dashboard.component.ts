import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: []
})
export class DashboardComponent {

  constructor(private router: Router) {}

  viewUsers() {
    alert('Navigating to Users list page (feature not built yet)');
    // later you can navigate like this:
    // this.router.navigate(['/users']);
  }

  manageRoles() {
    alert('Navigating to Roles management page (feature not built yet)');
    // later you can navigate like this:
    // this.router.navigate(['/roles']);
  }

  goToSettings() {
    alert('Navigating to Settings page (feature not built yet)');
    // later you can navigate like this:
    // this.router.navigate(['/settings']);
  }
}