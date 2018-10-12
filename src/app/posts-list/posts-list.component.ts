import { Post } from '../post';
import { PostService } from '../core/post.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  constructor(private postService: PostService) { }
  posts$: Observable<Post[]>;

  ngOnInit() {
    this.loadPostsList();
  }

  deleteItem(i) {
    this.postService.deletePost(i);
  }

  loadPostsList() {
    if (!this.posts$) {
      this.postService.getPosts().subscribe( value => {
        this.postService.posts$.next(value);
        this.posts$ = this.postService.posts$;
      });
    }
  }

  trackByFn(index, item) {
    return index;
  }
}
