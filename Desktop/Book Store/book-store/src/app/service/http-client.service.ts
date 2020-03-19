import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  putUsers(userdata:User[]) {
    return this.httpClient.put('https://book-store-cb6ee.firebaseio.com/users.json',userdata);
  }

  getUsers() {
    return this.httpClient.get<User[]>('https://book-store-cb6ee.firebaseio.com/users.json');
  }

  postUser(newUser:User) {
    return this.httpClient.post('https://book-store-cb6ee.firebaseio.com/users.json',newUser);
  }
}
