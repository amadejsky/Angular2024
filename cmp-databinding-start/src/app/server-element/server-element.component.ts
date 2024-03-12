import { Component, Input, SimpleChanges, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragrapgh: ElementRef;

 constructor(){
  console.log('constructor invoke');
 }
 ngOnInit(){
  console.log('ng invoke!');
  console.log('Text Content of P'+this.paragrapgh.nativeElement.textContent);
 }

 ngOnChanges(changes: SimpleChanges){
  console.log('ngOnChanges invoke');
  console.log(changes);

 }

 ngDoCheck(){
  console.log('ngCheck get called')
 }

 ngOnDestroy(){
  console.log("destroyed first element!")
 }

}
