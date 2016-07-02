import {
	describe, it, expect, beforeEach, addProviders, inject, ComponentFixture, TestComponentBuilder
} from '@angular/core/testing';

import { App } from '../../models/app';
import { PageFooterComponent } from './page-footer.component';

describe('Page Footer', () => {

	beforeEach(() => addProviders([ TestComponentBuilder, PageFooterComponent ]));

	it ('page footer initialization', inject([ TestComponentBuilder ], (tcb: TestComponentBuilder) => {
	
		const fixture = tcb.createSync(PageFooterComponent);
		const pageFooterComponent = fixture.componentInstance;
		const element = fixture.nativeElement;

		pageFooterComponent.app = new App('test app', 'test owner', 2015);

		fixture.detectChanges();

		expect(element.querySelector('small').innerText).toBe(`${String.fromCharCode(169)} 2015, test owner`);

	}));


});