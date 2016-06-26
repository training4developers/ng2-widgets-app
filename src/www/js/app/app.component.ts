import { Component } from '@angular/core';

import '../../css/styles.scss';

declare var require: any;

@Component({
  selector: 'widgets-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
})
export class AppComponent { }
