import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RacesComponent } from './races/races.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthService} from "./auth/auth.service";
import {AuthGuardService} from "./auth/auth-guard.service";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import {CustomCapitalize} from "./pipes/custom-capitalize.pipe";
import {CustomDateText} from "./pipes/custom-date-text.pipe";
import {CustomDate} from "./pipes/custom-date.pipe";
import { CustomWinnerDirective } from './directives/custom-winner.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    RacesComponent,
    DashboardComponent,
    NavbarComponent,
    CustomCapitalize,
    CustomDateText,
    CustomDate,
    CustomWinnerDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuardService, JwtHelperService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },],
  bootstrap: [AppComponent]
})
export class AppModule { }
