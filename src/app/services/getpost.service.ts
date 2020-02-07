import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetpostService {
  public header: any;
  fileheader: { headers: HttpHeaders; };
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  SetHeader() {
    const fileheader = new HttpHeaders({
      Authorization: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).tk : "",
    });

    this.fileheader = { headers: fileheader };
  }

  ClearCookie() {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }

  getMethod(url): Observable<any> {
    this.SetHeader();
    return this.http.get(url, {
      headers:
        new HttpHeaders(
          {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('auth_token') ? localStorage.getItem('auth_token') : ''

          }),
    })
      .pipe(catchError((err) => {
        if (err.status === 400 || err.status === 401) {
          this.ClearCookie();
        } else {
          return throwError(err);
        }
      }));
  }

  postMethod(url, value) {
    this.SetHeader();
    return this.http.post(url, value, {
      headers:
        new HttpHeaders(
          {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('auth_token') ? localStorage.getItem('auth_token') : ''

          }),
    })
      .pipe(catchError((err) => {
        if (err.status === 400 || err.status === 401) {
          this.ClearCookie();
        } else {
          return throwError(err);
        }
      }));
  }

  fileUploadMethod(url, value) {
    return this.http.post(url, value, this.fileheader);
  }
}
