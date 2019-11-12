import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  @ViewChild('postForm', {static: false}) postForm: NgForm;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPosts();
  }

  private getPosts(){
    // Use rxjs operators to transform the data
    this.http.get('https://angular-practice-be.firebaseio.com/posts.json')
    .pipe(
      map((responseData: {[key: string]:Post}) => {
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            this.loadedPosts.push({... responseData[key], id:key});
          }
        }
        return this.loadedPosts;
      }))
    .subscribe(
      (posts) => {
        console.log('Fetched data:');
        console.log(posts);
      });
  }
  onCreatePost(postData: Post) {
    // Send Http request
    console.log(`Sent post of : ${postData.title} & ${postData.content}`);
    this.http.post('https://angular-practice-be.firebaseio.com/posts.json', postData).subscribe( responseData => {
      console.log(responseData);
    });
    this.postForm.resetForm();
  }

  onFetchPosts() {
    // Send Http request
    this.getPosts();

  }

  onClearPosts() {
    // Send Http request
  }
}
