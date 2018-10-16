import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PostService } from '../core/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  constructor(private fb: FormBuilder, private postService: PostService) {}
  addPostForm = this.fb.group({
    title: [''],
    body: ['']
  });

  submit() {
    const post = {
      title: this.addPostForm.controls.title.value,
      body: this.addPostForm.controls.body.value
    };
    this.postService
      .addPost(post)
      .subscribe(() => this.postService.fetchPosts());
  }

  cancel() {
    this.postService.navigateTo('');
  }

  ngOnInit() {}
}
