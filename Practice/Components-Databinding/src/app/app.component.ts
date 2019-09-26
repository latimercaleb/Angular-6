import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

  onServerAdded(serverData: {name: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {name: string, blueprintContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.name,
      content: blueprintData.blueprintContent
    });
  }

  deleteFirstServer(){
    this.serverElements.shift(); // Removing an element, thus removing from the dom, thus calling the destroy hook
  }

}
