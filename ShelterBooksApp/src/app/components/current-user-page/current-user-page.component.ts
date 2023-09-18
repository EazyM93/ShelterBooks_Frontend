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
  image: string = '';
  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';
  addressName: string = '';
  postalCode: string = '';
  city: string = '';
  district: string = '';
  country: string = '';

  role:string = '';

  constructor(private authService: AuthService, private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.authService.getCurrentUserInfo().subscribe(userInfo => {
      this.idUser = userInfo.idUser;
      this.image = userInfo.image;
      this.name = userInfo.name;
      this.surname = userInfo.surname;
      this.email = userInfo.email;
      this.password = userInfo.password;
      this.addressName = userInfo?.address?.addressName ?? null;
      this.postalCode = userInfo?.address?.postalCode ?? null;
      this.city = userInfo?.address?.city ?? null;
      this.district = userInfo?.address?.district ?? null;
      this.country = userInfo?.address?.country ?? null;
      this.role = userInfo.role;
    });
  }

  sentUpdate(){
    this.userService.updateCurrentUser(
      this.image,
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

  deleteThisUser(){
    this.userService.deleteCurrentUser().subscribe(() => {
      this.router.navigate(['/homepage']);
      this.authService.logout().subscribe();
    });
  }

}
