import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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
    this.userLogged = localStorage.getItem('token') !== null;

    // check if user is admin
    if(this.userLogged !== false){
      this.authService.getCurrentUserInfo().subscribe(userInfo => {
        console.log(userInfo.name);
        this.currentUserStatus = userInfo.role === 'ADMIN';
      });
    }

  }

  logout(){
    this.authService.logout();
    this.userLogged = false;
    this.currentUserStatus = false;
    this.router.navigate(['/homepage']);
  }

}
