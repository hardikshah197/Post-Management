import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = "https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/"
  constructor (private http:HttpClient) {}

  getPosts(userId:string): Observable<any> {
    return this.http.get(this.apiUrl + 'users/' + userId + '/posts')
  }

  getPost(userId:string, postId: string): Observable<any> {
    return this.http.get(this.apiUrl + 'users/' + userId + '/posts/' + postId);
  }

  createPost(userId:string, data: { "Title": string, "content": string }): Observable<any> {
    return this.http.post(this.apiUrl + 'users/' + userId + '/posts', JSON.stringify(data));
  }

  updatePost(userId:string, postId: string, data: Object): Observable<any>{
    return this.http.put(this.apiUrl + 'users/' + userId + '/posts/' + postId, JSON.stringify(data));
  }

  removePost(userId:string, postId:string): Observable<any> {
    return this.http.delete(this.apiUrl + 'users/' + userId + '/posts/' + postId);
  }
}
