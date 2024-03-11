import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output('srEvent') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpEvent') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 // newServerName = '';
 // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;


  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
       serverContent: this.serverContentInput.nativeElement.value
      });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
       serverContent: this.serverContentInput.nativeElement.value
      });
  }

}
