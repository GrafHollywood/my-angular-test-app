import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostsApiService {
  private httpBase = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.httpBase);
  }
  getPostById(id: string): Observable<IPost> {
    return this.http.get<IPost>(`${this.httpBase}/${id}`);
  }
  postPost(post: Omit<IPost, 'id'>): Observable<IPost> {
    return this.http.post<IPost>(this.httpBase, post);
  }
  deletePost(id: string): Observable<void> {
    return this.http.delete<void>(`${this.httpBase}/${id}`);
  }
}
