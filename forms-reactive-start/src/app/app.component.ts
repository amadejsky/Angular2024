import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Adi','Test'];
  formOrAssigment = false;
  loadedPosts = [];
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
         'username': new FormControl(null, [Validators.required, this.forbidden.bind(this)]),
      'email': new FormControl(null, [Validators.required,Validators.email],this.forbiddenEmails),
      }),
     
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]) 
    });
    this.signupForm.valueChanges.subscribe(
      (value) => console.log(value))
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signupForm.setValue({
      'userData': {
        'username': 'A',
        'email': 'testemail@a.com'
      },
      'gender': 'male',
      'hobbies': []
    });
    this.signupForm.patchValue({
      'userData': {
        'username': 'M',
        'email': 'testemail@a.com'
      }
    });
  }

  onSubmit(){
    console.log(this.signupForm);

    this.signupForm.reset();
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
  
  forbidden(control: FormControl): {[s: string]: boolean}{
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com'){
          resolve({'emailsIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onCreatePost(postData: Post) {

    this.http
    .post<{name: string}>(
      'https://angular-ms-project-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
       { username: this.signupForm.get('userData.username').value,
       email: this.signupForm.get('userData.email').value}
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
