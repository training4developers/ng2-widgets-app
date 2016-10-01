import { Component, OnInit } from '@angular/core';

import { App } from './models/app';
import { PageHeaderComponent } from './shared/page-header/page-header.component';
import { PageFooterComponent } from './shared/page-footer/page-footer.component';
import { WidgetsViewerComponent } from './widgets/widgets-viewer/widgets-viewer.component';

import '../../css/styles.scss';

declare var require: any;

@Component({
  selector: 'widgets-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')]
})
export class AppComponent implements OnInit {

  app: App;

  ngOnInit() {
    this.app = new App('Widgets Manager', 'Training 4 Developers, Inc.', (new Date()).getFullYear());
  }

}