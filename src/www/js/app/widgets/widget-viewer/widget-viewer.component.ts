import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Widget } from '../../models/widget';
import { Widgets } from '../../services/widgets.service';
import { WidgetDetailsComponent } from '../shared/widget-details/widget-details.component';

@Component({
	template: require('./widget-viewer.component.html'),
	styles: [require('./widget-viewer.component.scss')],
	providers: [ Widgets ],
	directives: [ WidgetDetailsComponent ]
})
export class WidgetViewerComponent implements OnInit {

	widget: Widget;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private widgetsData: Widgets
	) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.widgetsData.get(parseInt(params['id'], 10)).subscribe(widget => this.widget = widget);
		});
	}

	editWidget(widgetId: number) {
		this.router.navigate(["/widget", widgetId, "/edit"]);
	}

	returnToList() {
		this.router.navigate(["/"]);
	}

}