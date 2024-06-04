import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user-service';
import { DataService } from '../shared/data-service';

describe('UserComponent', () => {
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    }).compileComponents();
  })
  it('should create the app',() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('hould use the user name from service',()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    // important 
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });
  it('should didpslay username if uer login',()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isLoggedIn = true;
    // important 
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  });
  it('shouldnt didpslay username if user not logged',()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    // app.isLoggedIn = true;
    // important 
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
  });
  it('shouldnt fetch data succesfully if not called asynchronously', ()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
    .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  });
  // it('shouldnt fetch data succesfully if not called asynchronously', async(()=>{
  //   let fixture = TestBed.createComponent(UserComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   let dataService = fixture.debugElement.injector.get(DataService);
  //   let spy = spyOn(dataService, 'getDetails')
  //   .and.returnValue(Promise.resolve('Data'));
  //   fixture.detectChanges();
  //   fixture.whenStable().then(()=>{
  //     expect(app.data).toBe('Data');
  //   });
    
  });
  it('shouldnt fetch data succesfully if not called asynchronously', fakeAsync(()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
    .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick();
      expect(app.data).toBe('Data'); 
  }));

