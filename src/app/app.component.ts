import { Component } from '@angular/core';
import data from '../utils/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = data

  clearAll() {
    this.users = []
  }
}
