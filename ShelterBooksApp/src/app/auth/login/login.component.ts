import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        if (response.accessToken) {
          this.authService.getCurrentUserInfo()
            .subscribe(info => {
              if(info.role === 'ADMIN'){
                this.router.navigate(['/currentUserPage']);
              }else{
                this.router.navigate(['/homepage']);
              }
            });

        }
      },
      error => {
        this.errorMessage = 'Email o password non valide. Riprova.'; // mostrare questo messaggio di errore nel template
      }
    );
  }
}
