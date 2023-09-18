import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TokenInterceptor } from './auth/token.interceptor';
import { BookManagerComponent } from './components/book-manager/book-manager.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { UpdateComponent } from './components/update/update.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Route[] = [
  { path: '', redirectTo: 'homepage',pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'bookManager', component: BookManagerComponent, children: [
    { path: 'createBook', component: CreateBookComponent },
    { path: 'update', component: UpdateComponent }
  ]},
  { path: 'bookDetails/:id', component: BookDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    BookManagerComponent,
    CreateBookComponent,
    UpdateComponent,
    BookDetailsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
