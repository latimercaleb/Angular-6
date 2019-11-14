import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class PostService{
    // Wrap HTTP request messages in service, and send back responses to the component
    constructor(private http:HttpClient){}
    error = new Subject<string>();
    createPost(title: string, content: string){
        let postData: Post = {title: title, content: content};
        this.http
        .post<{name:string}>('https://angular-practice-be.firebaseio.com/posts.json', postData)
        .subscribe( responseData => {
            console.log(responseData);
        }, error => {
            this.error.next(error.message);
        });
    }

    getPosts(){
       return this.http
        .get<{[key:string ]:Post }>('https://angular-practice-be.firebaseio.com/posts.json')
        .pipe(
          map((responseData: {[key: string]:Post}) => {
            const resultArr = [];
            for(const key in responseData){
              if(responseData.hasOwnProperty(key)){
                resultArr.push({... responseData[key], id:key});
              }
            }
            return resultArr;
          }));
    }

    deletePosts(){
        return this.http.delete('https://angular-practice-be.firebaseio.com/posts.json');
    }
}