import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: any = null;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const credentials = { email, password };
    return this.http.post<any>('http://localhost:3001/auth/login', credentials)
      .pipe(map(response => {
        console.log('Server Response:', response);
        if (response.accessToken) {
          console.log('Token:', response.accessToken);
          localStorage.setItem('token', response.accessToken);
        }
        return response;
      }));
  }

  register(
      image: string,
      name: string,
      surname: string,
      email: string,
      password: string,
      addressName: string,
      postalCode: string,
      city: string,
      district: string,
      country: string
    ): Observable<any> {
      const newUser = { image, name, surname, email, password, addressName, postalCode, city, district, country };
    return this.http.post<any>('http://localhost:3001/auth/register', newUser);
  }

  getCurrentUserInfo(): Observable<any> {
    return this.http.get<any>('http://localhost:3001/users/getCurrent');
  }

  logout() {
    localStorage.removeItem('token');
    return this.http.post<any>('http://localhost:3001/auth/logout', null);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): String | null {
    return localStorage.getItem('token');
  }

}
