import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-wishlist',
  templateUrl: './user-wishlist.component.html',
  styleUrls: ['./user-wishlist.component.scss']
})
export class UserWishlistComponent implements OnInit {

  currentWishlist: any = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getCurrentWishlist();
  }

  getCurrentWishlist(): void {
    this.authService.getCurrentUserInfo().subscribe(response => {
      this.currentWishlist = response.wishlist;
      console.log(this.currentWishlist)
    });
  }

}
