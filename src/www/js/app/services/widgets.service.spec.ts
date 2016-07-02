import { describe, expect, it, inject, beforeEach, beforeEachProviders, fakeAsync } from '@angular/core/testing';
import { provide } from '@angular/core';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import 'rxjs/add/operator/map';

import { Widgets } from './widgets.service';

const mockWidgetData = [
	{ id: 1, name: 'Widget 1', description: 'Widget 1 Description', color:'red',
		size:'large', quantity: 23, active: true, created: new Date(), modified: new Date() },
	{ id: 2, name: 'Widget 2', description: 'Widget 2 Description', color:'blue',
		size:'small', quantity: 30, active: false, created: new Date(), modified: new Date() },
	{ id: 3, name: 'Widget 3', description: 'Widget 3 Description', color:'green',
		size:'medium', quantity: 10, active: true, created: new Date(), modified: new Date() }
];


describe('Widgets Service', () => {
	
	let widgets: Widgets;
	let mockBackend: MockBackend;

	beforeEachProviders(() => [
		MockBackend, BaseRequestOptions, Widgets,
		provide(Http, {
			useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
				return new Http(backend, options);
			},
			deps: [MockBackend, BaseRequestOptions]
		})
	]);

	beforeEach(inject([MockBackend, Widgets], (_mockBackend, _widgets) => {
		widgets = _widgets;
		mockBackend = _mockBackend;
	}));

	it('can fetch widgets', fakeAsync(() => {

		const mockedResponse = new ResponseOptions({
			body: JSON.stringify(mockWidgetData)
		});

		mockBackend.connections.subscribe((connection: MockConnection) => {
			if(connection.request.url === '/api/widgets') {
				connection.mockRespond(new Response(mockedResponse));
			}
		});

		widgets.getAll().subscribe(widgets => {
			expect(widgets.length).toEqual(mockWidgetData.length);
		});

	}));

});