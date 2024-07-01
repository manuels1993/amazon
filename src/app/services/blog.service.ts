import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostDTO } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

  getPostsById(id: string): Observable<Post> {
    return this.http.get<Post>("https://jsonplaceholder.typicode.com/posts/" + id);
  }

  appPost(post: PostDTO) {
    console.log(post);
    //chiamata ajax POST

  }
}
