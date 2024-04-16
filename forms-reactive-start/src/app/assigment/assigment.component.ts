import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-assigment',
  templateUrl: './assigment.component.html',
  styleUrls: ['./assigment.component.css']
})
export class AssigmentComponent implements OnInit {
  status: string[] = [
    'Stable',
    'Critical',
    'Finished'
  ]
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        'projectname': new FormControl(null,[Validators.required],this.projectNameValidator),
        'email': new FormControl('example@test.com',[Validators.required,Validators.email]),
        'status': new FormControl('Finished')
      }
    )
  }

  onSubmit(){
    console.log(this.form.value);
  }

  projectNameValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'Test'){
          resolve({'projectNameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
