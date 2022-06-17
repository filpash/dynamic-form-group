import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-form-group';

  public person: any = {
    firstName: {
      label: 'FirstName',
      value: 'Juri',
      type: 'text'
    },
    age: {
      label: 'Age',
      value: 32,
      type: 'number'
    }
  }
}
