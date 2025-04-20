import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { jwtDecode } from "jwt-decode";

interface TokenResponse {
  access: string;
  refresh: string;
}
@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl = "http://localhost:8000/api";
  private accessKey = "access_token";
  private refreshKey = "refresh_token";

  public isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<TokenResponse> {
    return this.http
      .post<TokenResponse>(`${this.apiUrl}/token/`, { username, password })
      .pipe(
        tap(({ access, refresh }) => {
          localStorage.setItem(this.accessKey, access);
          localStorage.setItem(this.refreshKey, refresh);
          this.isAuthenticatedSubject.next(true);
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.accessKey);
    localStorage.removeItem(this.refreshKey);
    this.isAuthenticatedSubject.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.accessKey);
  }
  getCurrentUserId(): number | null {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);

      return decodedToken.user_id;
    }
    return null;
  }
  private hasToken(): boolean {
    return !!localStorage.getItem(this.accessKey);
  }
}
