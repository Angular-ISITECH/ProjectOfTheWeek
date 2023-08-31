import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  constructor(public jwtHelper: JwtHelperService, private readonly router: Router) {}

  public isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(this.getToken());
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  public getToken(): string {
    return localStorage.getItem('token') || '';
  }

  //add token to local storage
  public saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  //login with email and password given and store the token in local storage
  public login(email: string, password: string): void {
    const isEmailValid: boolean = email === 'pony.racer@test.com';
    const isPasswordValid: boolean = password === '123456';
    if (isEmailValid && isPasswordValid) {
      this.saveToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicG9ueS5yYWNlckB0ZXN0LmNvbSIsInBhc3N3b3JkIjoxMjM0NTZ9.8p5j6ZJ0DlXkPpRcNmX1NQ65iQnwBoLphIQw9uwBQ88')
      //navigate to dashboard
      this.router.navigate(['dashboard']);
    } else {
      alert('Invalid email or password');
    }
  }
}
