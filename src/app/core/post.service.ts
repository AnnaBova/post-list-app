import { Post } from '../post';
import { ApiUrls } from '../api-urls';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class PostService {

  constructor( private http: HttpClient ) { }

  posts$: BehaviorSubject<Post[]> = new BehaviorSubject(null);

  getPosts(): Observable<Post[]> {
     return this.http.get<Post[]>(ApiUrls.posts);
  }

  deletePost(id: number) {
   this.deletePostFromArray(id);
   return this.http.delete(ApiUrls.posts + `/${id}`);
  }

  createPost(body) {
    console.log(body);
    return this.http.post(ApiUrls.posts, body);
  }

  deletePostFromArray(i: number) {
    this.posts$.subscribe( value =>
      value.forEach( (post, index) => {
        if (index === i) {
          value.splice(index, 1);
        }
      }
      )
    );
  }
}
