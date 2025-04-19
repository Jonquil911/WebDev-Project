import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.loginService.updateLogged(true);
      // this.logged = true;
    }
  }

}
