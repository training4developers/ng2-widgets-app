import {
	it, describe, beforeEach, expect, addProviders,
	inject, TestComponentBuilder, ComponentFixture
} from '@angular/core/testing';

import { App } from '../../models/app';
import { PageHeaderComponent } from './page-header.component';

describe('Page Header', () => {

	beforeEach(() => addProviders([ TestComponentBuilder, PageHeaderComponent ]));

	it('page header initialization', inject([ TestComponentBuilder ], (tcb: TestComponentBuilder) => {

		const fixture: ComponentFixture<PageHeaderComponent> = tcb.createSync(PageHeaderComponent);
		const pageHeaderComponent: PageHeaderComponent = fixture.componentInstance;
		const element = fixture.nativeElement;

		pageHeaderComponent.app = new App('test app','test owner', 2016);

		fixture.detectChanges();

		expect(element.querySelector('h1').innerText).toBe('test app');

	}));

});