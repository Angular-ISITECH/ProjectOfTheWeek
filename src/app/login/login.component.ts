import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private auth: AuthService, private readonly router: Router) {}

  ngOnInit() {
    if(this.auth.isAuthenticated()) {
      this.router.navigate(['dashboard']);
    } else {
      this.loginForm = new FormGroup({
        username: new FormControl('pony.racer@test.com', Validators.required),
        password: new FormControl('123456', Validators.required),
      });
    }
  }

  public onSubmit() {
    this.auth.login(
      this.loginForm.get('username')!.value,
      this.loginForm!.get('password')!.value
    );
  }
}
