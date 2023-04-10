import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class JsonplaceholderService {
  baseURL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: Http) { }

  getUsers(): Observable<any> {
    const url = this.baseURL + '/users';
    return this.http.get(url);
  }

  getPostsByUser(userId: number): Observable<any> {
    const url = this.baseURL + '/posts?userId=' + userId;
    return this.http.get(url);
  }

  getCommentsByPost(postId: number): Observable<any> {
    const url = this.baseURL + '/comments?postId=' + postId;
    return this.http.get(url);
  }

}
