import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentPage: string = '';
  isConnected: boolean = false;
  isNavBarOpen: boolean = false;

  constructor(private readonly router: Router, private readonly auth: AuthService) { }

    public logout() {
      this.auth.logout();
    }

  ngOnInit() {
    //detect current page
    const currentUrl = this.router.url;
    if (currentUrl.includes('dashboard')) this.currentPage = 'dashboard';
    else if (currentUrl.includes('races')) this.currentPage = 'races';
    else if (currentUrl.includes('login')) this.currentPage = 'login';
    else this.currentPage = '';

    //detect if user is connected
    this.isConnected = this.auth.isAuthenticated();
  }

  toggleNavbar() {
    this.isNavBarOpen = !this.isNavBarOpen;
  }
}
