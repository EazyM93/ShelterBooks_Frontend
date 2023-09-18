import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-current-user-page',
  templateUrl: './current-user-page.component.html',
  styleUrls: ['./current-user-page.component.scss']
})
export class CurrentUserPageComponent implements OnInit {

  idUser: string = '';
  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';
  addressName: string = '';
  postalCode: string = '';
  city: string = '';
  district: string = '';
  country: string = '';



  constructor(private authService: AuthService, private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.authService.getCurrentUserInfo().subscribe(userInfo => {
      this.idUser = userInfo.idUser;
      this.name = userInfo.name;
      this.surname = userInfo.surname;
      this.email = userInfo.email;
      this.password = userInfo.password;
      this.addressName = userInfo.addressName;
      this.postalCode = userInfo.postalCode;
      this.city = userInfo.city;
      this.district = userInfo.district;
      this.country = userInfo.country;
    });
  }

  sentUpdate(){
    this.userService.updateUser(
      this.idUser,
      this.name,
      this.surname,
      this.email,
      this.password,
      this.addressName,
      this.postalCode,
      this.city,
      this.district,
      this.country,
    ).subscribe();
  }

}
