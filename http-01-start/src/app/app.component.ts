import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {

    this.http
    .post<{name: string}>(
      'https://angular-ms-project-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
       postData
      ).subscribe(responseData => {
        console.log(responseData);
      });

  }

  onFetchPosts() {
   this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts(){
    this.http
    .get<{ [key:string]: Post}>(
      'https://angular-ms-project-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
    )
    .pipe(map(responseData => {
      const postsArray: Post[] = [];
      for (const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postsArray.push({ ...responseData[key], id: key })
        }
      }
      return postsArray;
    })
  ).subscribe(data => {
      this.loadedPosts = data;
    });
  }
}