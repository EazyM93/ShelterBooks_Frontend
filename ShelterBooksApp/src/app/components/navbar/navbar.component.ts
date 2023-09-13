import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userLogged: boolean = false;
  currentUserStatus: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getUserInfo();

    // check if user is logged in and current status when route is changed
    // NavigationEnd Router
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.getUserInfo();
      });
  }


  getUserInfo(): void{

    // check if a user/admin is logged in
    this.userLogged = localStorage.getItem('token') !== null

    // check if user is admin
    if(this.userLogged !== false){
      this.authService.getCurrentUserInfo().subscribe(userInfo => {
        this.currentUserStatus = userInfo.role === 'ADMIN';
      });
    }

  }

  logout(){
    this.authService.logout();
    this.userLogged = false;
    this.router.navigate(['/homepage']);
  }

}
