import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  logged = false;

  username = '';
  password = '';


  constructor(public loginService: LoginService, private router: Router) {
    if (this.loginService.login(this.username, this.password) && this.logged) {
     this.router.navigate(['account'])
    }
    else {
            this.logged == true;
    }
    this.logged = loginService.getLogged();
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.loginService.updateLogged(true);
      // this.logged = true;
    }
  }

  login() {
    this.loginService.login(this.username, this.password)
      .subscribe(res => {

        localStorage.setItem('token', res.token);

        this.logged = true;
        this.loginService.updateLogged(true);

        this.username = '';
        this.password = '';
        this.router.navigate(['account']);

      });
  }

}
