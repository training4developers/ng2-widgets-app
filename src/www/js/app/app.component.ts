import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { App } from './models/app';
import { PageHeaderComponent } from './shared/page-header/page-header.component';
import { PageFooterComponent } from './shared/page-footer/page-footer.component';
import { WidgetsViewer } from './widgets/widgets-viewer/widgets-viewer.component';

import '../../css/styles.scss';

declare var require: any;

@Component({
  selector: 'widgets-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
  directives: [ ROUTER_DIRECTIVES, PageHeaderComponent, PageFooterComponent, WidgetsViewer ]
})
export class AppComponent implements OnInit {

  app: App;

  ngOnInit() {

    this.app = new App('Widgets Manager', 'Training 4 Developers, Inc.', (new Date()).getFullYear());

  }

}
