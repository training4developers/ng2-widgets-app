import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Widget } from '../../models/widget';
import { Widgets } from '../../services/widgets.service';

import { WidgetFormComponent } from '../shared/widget-form/widget-form.component';

@Component({
	selector: 'widget-editor',
	template: require('./widget-editor.component.html'),
	styleUrls: [require('./widget-editor.component.scss')],
	providers: [ Widgets ],
	directives: [ WidgetFormComponent ]
})
export class WidgetEditorComponent implements OnInit {

	widget: Widget = <Widget>{};

	constructor(
		private widgetsData: Widgets,
		private router: Router,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params.subscribe(params =>
			this.widgetsData.get(parseInt(params['id'],10)).subscribe(widget =>
				this.widget = widget));
	}

	saveWidget(widget: Widget) {
		this.router.navigate(["/"]);
	}

	deleteWidget(widget: Widget) {
		this.router.navigate(["/"]);
	}

	cancelWidget(widget: Widget) {
		this.router.navigate(["/"]);
	}

}