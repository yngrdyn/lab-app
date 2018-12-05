import { Injectable } from '@angular/core';
import { PreferencesModule } from 'src/app/modules/preferences/preferences.module';

import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';

interface UserModel {
  firstPreference: string;
  secondPreference: string;
}

@Injectable()
export class PreferencesService {

  url = 'http://5c07d7fa646dca0013f87e5f.mockapi.io/api/v1/';

  constructor(private http: HttpClient) { }

  list(): Observable<UserModel> {
    return this.http.get<UserModel>(this.url + 'crewPreferences');
  }

}
