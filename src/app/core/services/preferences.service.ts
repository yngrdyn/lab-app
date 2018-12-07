import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

interface UserModel {
  id: number;
  value: string;
}

@Injectable()
export class PreferencesService {

  url = 'http://5c07d7fa646dca0013f87e5f.mockapi.io/api/v1/';

  constructor(private http: HttpClient) { }

  list(): Observable<UserModel[]> {
    return this.http.get<any>(this.url + 'crewPreferences').pipe(
      map((res) => res.data)
    );
  }

  getCrewPreferences() {
    return this.http.get<any>(this.url + 'crewPreferences/1');
  }

  setCrewPreference(preferences) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    console.log('Calling'); 
    return this.http.put<any>(this.url + 'crewPreferences/1', preferences, httpOptions)
    .pipe(
      catchError(error => this.handleError(error))
    );
    
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
