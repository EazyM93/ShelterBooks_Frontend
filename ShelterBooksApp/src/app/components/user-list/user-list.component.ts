import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  usersList: any[] = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe((response: any) => {
        this.usersList = response;
        // removes admin from the list
        for(let i = 0; i < this.usersList.length; i++) {
          if(this.usersList[i].role === 'ADMIN'){
            this.usersList.splice(i, 1);
          }
        }
      });
  }

}
