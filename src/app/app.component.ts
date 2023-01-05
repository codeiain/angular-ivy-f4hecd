import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

}
