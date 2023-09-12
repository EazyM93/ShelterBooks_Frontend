import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {

  userLogged: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userLogged = localStorage.getItem('token') !== null;
  }

  ngDoCheck(): void {
    this.userLogged = localStorage.getItem('token') !== null
  }

  logout(){
    this.authService.logout();
  }

}
