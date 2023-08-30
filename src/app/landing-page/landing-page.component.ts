import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
    constructor(private readonly router: Router, private readonly auth: AuthService) {}

    ngOnInit(): void {
        if(this.auth.isAuthenticated()) {
            this.router.navigate(['dashboard']);
        }
    }
}
