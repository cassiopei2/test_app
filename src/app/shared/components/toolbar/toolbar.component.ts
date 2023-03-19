import { Component } from '@angular/core';
import { navigation } from '../../in-memory';
import { Navigation } from "../../models/navigation";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {

  navigation: Navigation[];

  constructor() {
    this.navigation = navigation;
  }
}
