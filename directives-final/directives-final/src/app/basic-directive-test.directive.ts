import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicDirectiveTest]'
})
export class BasicDirectiveTestDirective implements OnInit {
  

  constructor(private renderer: Renderer2) { }

  ngOnInit(){
    this.textColor='green';
  }
  
  @HostBinding('style.color') textColor: string;

  @HostListener('mouseover') on(){
    console.log('mouse in');
    this.textColor='red'
  }
  
  @HostListener('mouseleave') outside(){
    console.log('mouse outside');
    this.textColor='green'
  }



}
