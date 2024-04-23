import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts = [];
  isFetching = false;
  error = null;
  private subscription: Subscription;
  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.postService.error.subscribe(errorMessage =>{
      this.error=errorMessage;
    })
    this.isFetching=true;
    this.postService.fetchPosts().subscribe(posts=>{
      this.isFetching=false;
      this.loadedPosts = posts;
    },
  error =>{
    this.isFetching=false;
    this.error=error.message;
  });
  }
 
  onCreatePost(postData: Post) {
   this.postService.createAndStore(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetching=true;
    this.postService.fetchPosts().subscribe(posts=>{
      this.isFetching=false;
      this.loadedPosts = posts;
    }, error =>{
      this.isFetching=false;
      this.error = error.message;
    });
  }

  onClearPosts() {
    this.postService.delete().subscribe(()=>{
      this.loadedPosts = [];
    });
    
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onHandle(){
    this.error=null;
  }
}
