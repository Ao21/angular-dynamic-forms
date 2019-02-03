import { Component } from '@angular/core';
import { DateQuestion } from './components/dynamic-forms/models/question-date';

@Component({
  selector: 'inno-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-form';

  constructor() {
    const a = new DateQuestion({
      label: 'w',
      key: 'd'
    })
  }
}
