import { Component, Input } from '@angular/core';

import { Widget } from '../../../models/widget';

@Component({
	selector: 'widgets-table',
	template: require('./widgets-table.component.html'),
	styles: [require('./widgets-table.component.scss')]
})
export class WidgetsTable {

	@Input()
	widgets: Widget[];

}