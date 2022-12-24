import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/"
  constructor (private http:HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl + "users");
  }

  getUser(id: string): Observable<any> {
    return this.http.get(this.apiUrl + "users/" + id);
  }

  createUser(data: Object): Observable<any> {
    return this.http.post(this.apiUrl + "users", JSON.stringify(data));
  }

  editUser(data: any): Observable<any> {
    return this.http.put(this.apiUrl + "users/" + data["id"], JSON.stringify(data));
  }

  removeUser(id: string): Observable<any> {
    return this.http.delete(this.apiUrl + "users/" + id);
  }
}
