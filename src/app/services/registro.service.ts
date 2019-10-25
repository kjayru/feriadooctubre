import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Usuario } from './../models/usuario';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  ServerUrl = 'http://landings.hww-dev.com/api/registro';

  errorData: {};

  httpOption = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer PAoHJDJsI4ABjcCkgbMGhmH0lj2nKy8CznxndVeVoKfb939paSg1k1Wj7tiH'
    })
  };

  constructor(private http: HttpClient) { }


  refForm(formData: Usuario) {
    return this.http.post<Usuario>(this.ServerUrl, formData, this.httpOption).pipe(
      catchError( this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {


      console.error('An error occurred:', error.error.message);
    } else {


      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }



    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
