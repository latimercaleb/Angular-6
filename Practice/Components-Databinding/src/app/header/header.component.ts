import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  newServerName = '';
  newServerContent = '';
  @Output() serverCreated = new EventEmitter<{name: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, blueprintContent: string}>();
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInputRefHTMLElement) {
    this.serverCreated.emit({
      name: nameInputRefHTMLElement.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(serverNameRef) {
    this.blueprintCreated.emit({
      name: serverNameRef.value,
      blueprintContent: this.newServerContent
    });
  }

}
