import { Component, Input } from '@angular/core';

import { Widget } from '../../../models/widget';

@Component({
	selector: 'widget-details',
	template: require('./widget-details.component.html'),
	styles: [require('./widget-details.component.scss')]
})
export class WidgetDetails {

	@Input()
	widget: Widget;
	
}