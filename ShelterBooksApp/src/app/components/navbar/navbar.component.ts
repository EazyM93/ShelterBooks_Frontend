import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {

  userLogged: boolean = false;
  currentUserStatus: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.userLogged = localStorage.getItem('token') !== null;

    if(this.userLogged !== false){

      this.authService.getCurrentUserInfo().subscribe(userInfo => {
        this.currentUserStatus = userInfo.role;
      });

    }

  }

  ngDoCheck(): void {
    this.userLogged = localStorage.getItem('token') !== null
  }

  logout(){
    this.authService.logout();
  }

}
