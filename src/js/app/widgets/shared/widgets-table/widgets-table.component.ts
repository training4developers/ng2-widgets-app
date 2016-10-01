import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Widget } from '../../../models/widget';
import { CapitalizePipe } from '../../../pipes/capitalize.pipe';

@Component({
	selector: 'widgets-table',
	template: require('./widgets-table.component.html'),
	styles: [require('./widgets-table.component.scss')]
})
export class WidgetsTableComponent {

	@Input()
	widgets: Widget[];

	@Output()
	viewWidget: EventEmitter<number> = new EventEmitter<number>();

	@Output()
	editWidget: EventEmitter<number> = new EventEmitter<number>();

	viewWidgetButton(widgetId: number) {
		this.viewWidget.emit(widgetId)
	}

	editWidgetButton(widgetId: number) {
		this.editWidget.emit(widgetId)
	}

}