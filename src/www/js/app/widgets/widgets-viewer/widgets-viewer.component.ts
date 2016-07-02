import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Widget } from '../../models/widget';
import { Widgets } from '../../services/widgets.service';
import { WidgetsTableComponent } from '../shared/widgets-table/widgets-table.component';

@Component({
	template: require('./widgets-viewer.component.html'),
	styles: [require('./widgets-viewer.component.scss')],
	providers: [ Widgets ],
	directives: [ WidgetsTableComponent ]
})
export class WidgetsViewerComponent implements OnInit {

	widgets: Widget[];

	constructor(
		private router: Router,
		private widgetsData: Widgets
	) { }

	ngOnInit() {
		this.widgetsData.getAll().subscribe(widgets => this.widgets = widgets);
	}

	viewWidget(widgetId) {
		this.router.navigate(['/widget', widgetId]);
	}

	editWidget(widgetId) {
		this.router.navigate(['/widget', widgetId, '/edit']);
	}
}
