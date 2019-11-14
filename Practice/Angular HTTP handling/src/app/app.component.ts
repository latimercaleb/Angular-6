import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { Post } from './post.model';
import { PostService } from './posts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  fetching: boolean = false;
  error = null;
  @ViewChild('postForm', {static: false}) postForm: NgForm;
  constructor(private http: HttpClient, private postsService: PostService) {}

  ngOnInit() {
    this.fetching = true;
    this.postsService.getPosts()
    .subscribe(
      (posts) => {
          this.loadedPosts = posts;
          this.fetching = false;
      }, 
      (error)=>{
        this.error = error.message;
        console.log(error);
      });
  }

  onCreatePost(postData: Post) {
    this.postsService.createPost(postData.title, postData.content);
    this.postForm.resetForm();
  }

  onFetchPosts() {
    this.fetching = true;
    this.postsService.getPosts()
    .subscribe(
      (posts) => {
          this.loadedPosts = posts;
          this.fetching = false;
      }, 
      (error)=>{
        this.error = error.message;
        console.log(error);
      });
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(
      (someResponse: any) =>{
        console.log(someResponse);
      }
    );
    this.onFetchPosts();
  }
}
