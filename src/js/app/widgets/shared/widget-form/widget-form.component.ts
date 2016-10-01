import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Widget } from '../../../models/widget';

interface SelectItem { 
	value: string;
	label: string;
}

@Component({
	selector: 'widget-form',
	template: require('./widget-form.component.html'),
	styles: [require('./widget-form.component.scss')]
})
export class WidgetFormComponent {

	@Input()
	widget: Widget = <Widget>{};

	@Output()
	saveWidget: EventEmitter<Widget> = new EventEmitter<Widget>();

	@Output()
	deleteWidget: EventEmitter<Widget> = new EventEmitter<Widget>();

	@Output()
	cancelWidget: EventEmitter<Widget> = new EventEmitter<Widget>();

	colors: SelectItem[] = [
		{ value: 'red', label: 'Red' },
		{ value: 'blue', label: 'Blue' },
		{ value: 'green', label: 'Green' },
		{ value: 'orange', label: 'Orange' },
		{ value: 'yellow', label: 'Yellow' },
		{ value: 'purple', label: 'Purple' }
	] 

	sizes: SelectItem[] = [
		{ value: 'tiny', label: 'Tiny' },
		{ value: 'small', label: 'Small' },
		{ value: 'medium', label: 'Medium' },
		{ value: 'large', label: 'Large' },
		{ value: 'huge', label: 'Huge' }
	] 

	saveWidgetButton(widget: Widget) {
		
		this.saveWidget.emit(widget);
	}

	deleteWidgetButton(widget: Widget) {
		this.deleteWidget.emit(widget);
	}

	cancelWidgetButton(widget: Widget) {
		this.cancelWidget.emit(widget);
	}

}