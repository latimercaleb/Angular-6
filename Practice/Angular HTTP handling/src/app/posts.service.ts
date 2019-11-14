import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpEventType} from '@angular/common/http';
import {Post} from './post.model';
import { map, catchError, tap} from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
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
        .post<{name:string}>('https://angular-practice-be.firebaseio.com/posts.json', postData, {
          observe: 'response',
          responseType: 'json'
        })
        .subscribe( responseData => {
            console.log(responseData);
        }, error => {
            this.error.next(error.message);
        });
    }

    getPosts(){
       return this.http
        .get<{[key:string ]:Post }>('https://angular-practice-be.firebaseio.com/posts.json', {
          headers: new HttpHeaders({'Custom-Header':'Tacos'}),
          params: new HttpParams().set('print','pretty')
        })
        .pipe(
          map((responseData: {[key: string]:Post}) => {
            const resultArr = [];
            for(const key in responseData){
              if(responseData.hasOwnProperty(key)){
                resultArr.push({... responseData[key], id:key});
              }
            }
            return resultArr;
          }),
           catchError(
             errorResponse => {
               console.log('Logged in the service');
               return throwError(errorResponse); // Throw error up to subscriber
             }
           )
          );
    }

    deletePosts(){
        return this.http.delete('https://angular-practice-be.firebaseio.com/posts.json', {
          observe: 'events'
        }).pipe(tap(
          evt=> {
            console.log(evt);
            if(evt.type === HttpEventType.Response){
              console.log('Response was returned');
            }
          }
        ));
    }
}