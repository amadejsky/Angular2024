import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server',name: 'Testserver', content:'Test of content'},
  {type: 'blueprint',name: 'Testblueprint', content:'Test of content blueprint'}];
  processedValue: number;
  oddNumberArray: number[]=[];
  evenNumberArray: number[]=[];
  
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst(){
    this.serverElements[0].name='Changed!';
  }
  destroy(){
    this.serverElements.splice(0,1);
  }

  emitedNumberProcess(emited: number){
    console.log("Emited number is: "+emited)
    this.processedValue=emited;
    if(emited%2===0){
      if(emited!=0)
      this.evenNumberArray.push(emited);
    }else{
      this.oddNumberArray.push(emited);
    }

  }

}
