import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {

  userLogged: boolean = false;
  currentUserStatus: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  ngDoCheck(): void {
    this.getUserInfo();
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
  }

}
