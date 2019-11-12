import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  @ViewChild('postForm', {static: false}) postForm: NgForm;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPosts();
  }

  private getPosts(){
    this.http.get('https://angular-practice-be.firebaseio.com/posts.json').subscribe(
      (responseData) => {
        console.log('Fetched data:');
        console.log(responseData);
      });
  }
  onCreatePost(postData: { title: string; content: string }) {
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
