import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // adjust path if needed
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, RouterLink]
})
export class LoginComponent {
  form = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.form.email, this.form.password).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token); // Save the JWT token
        this.router.navigate(['/dashboard']); // Redirect to dashboard
      },
      error: (err) => {
        alert('Login failed. Please check your credentials.');
      }
    });
  }
}