import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.register = {
      username: '',
      email: '',
      password: '',
    };

  }

  registerUser() {
    this.userService.registerUser(this.register).subscribe(
      response => {
        alert('User is created');
      },
      error => console.log('error', error)
    );

    this.router.navigate(['account']);
  }

}
