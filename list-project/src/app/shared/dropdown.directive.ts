import { Directive, ElementRef, HostBinding,Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // constructor(private renderer: Renderer2, hostElement: ElementRef) {
  //   renderer.addClass(hostElement.nativeElement, 'open');
  // }

  // @HostListener('click') mouseover(eventData: Event) {
  //   if(this.elementClass === 'btn-group open'){
  //     this.elementClass = 'btn-group';
  //   } else {
  //     this.elementClass = 'btn-group open';
  //   }
  // }
  

  @HostBinding('class.open')
    isAdded = false;
   
    @HostListener('click') clicked() {
      this.isAdded = !this.isAdded;
    }

    
  }
  
   

