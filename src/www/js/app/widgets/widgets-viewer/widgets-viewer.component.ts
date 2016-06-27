import { Component, OnInit } from '@angular/core';

import { Widget } from '../../models/widget';
import { Widgets } from '../../services/widgets.service';
import { WidgetsTable } from '../shared/widgets-table/widgets-table.component';

@Component({
	selector: 'widgets-viewer',
	template: require('./widgets-viewer.component.html'),
	styles: [require('./widgets-viewer.component.scss')],
	providers: [ Widgets ],
	directives: [ WidgetsTable ]
})
export class WidgetsViewer implements OnInit {

	widgets: Widget[];

	constructor(private widgetsData: Widgets) { }

	ngOnInit() {
		this.widgetsData.getAll().subscribe(widgets => this.widgets = widgets);
	}

}