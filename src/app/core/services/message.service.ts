import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

import { Message } from '../models/message';

@Injectable()
export class MessagesService {

  url = 'http://5c07d7fa646dca0013f87e5f.mockapi.io/api/v1/';

  constructor(private http: HttpClient) { }

  list(): Observable<Message[]> {
    return this.http.get<any>(this.url + 'crewMessages').pipe(
      map((res) => res.data.map(message => {
        message.sentDate = new Date(message.sentDate);
        return message;
      }))
    );
  }

}
