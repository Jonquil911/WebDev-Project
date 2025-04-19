import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginResponse} from './models';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL = 'http://127.0.0.1:8000';
  username;
  constructor(private http: HttpClient) {
  }

  logged = false;

  updateLogged(isLogged: boolean) {
    this.logged = isLogged;
  }

  getLogged(): boolean {
    return this.logged;
  }

  login(username, password): Observable<LoginResponse> {
    this.username = username;
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }

  getUsername(): string{
    return this.username;
  }
}
