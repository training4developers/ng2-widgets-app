import {
	it, inject, describe, addProviders, expect,
	beforeEach, TestComponentBuilder, ComponentFixture
} from '@angular/core/testing';
import { provide } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { WidgetsViewerComponent } from './widgets-viewer.component';
import { Widgets } from '../../services/widgets.service';

class MockHttp { }
class MockRouter { createUrlTree() {} }

describe('Widgets Viewer Tests', () => {

  beforeEach(() => addProviders([
		TestComponentBuilder,
		provide(Http, { useClass: MockHttp }),
		provide(Router, { useClass: MockRouter })
	]));

  it ('widgets viewer initialization', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

		const fixture: ComponentFixture<WidgetsViewerComponent> = tcb.createSync(WidgetsViewerComponent);
		const widgets: Widgets = fixture.componentRef.injector.get(Widgets);

		spyOn(widgets, 'getAll').and.returnValue(Observable.create(observer =>
			observer.next([{ name: 'Widget 1' }])));

		fixture.detectChanges();

		expect(widgets.getAll).toHaveBeenCalled();

  }));

});
