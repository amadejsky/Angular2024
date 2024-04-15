import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signupForm: NgForm;
  mail: string;
  sub: string;
  pswd: string;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  // defaultQuestion = 'pet';
  // answer='';
  // genders = ['male', 'female'];
  // user = {
  //   username: '',
  //   email: '',
  //   secretQ: '',
  //   answer: '',
  //   gender: ''
  // }
  submittedForm: boolean = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
    }});
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signupForm.value);
    this.mail=this.signupForm.value.mail;
    this.sub=this.signupForm.value.sub.value;
    this.pswd=this.signupForm.value.password;
    this.signupForm.reset();
  }
}
