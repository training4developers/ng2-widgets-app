import { describe, it, expect, beforeEachProviders, beforeEach, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';

import { App } from '../../models/app';
import { PageFooterComponent } from './page-footer.component';

describe('Page Footer', () => {

	let _tcb: TestComponentBuilder;

	beforeEachProviders(() => [ TestComponentBuilder, PageFooterComponent ]);

	beforeEach(inject([ TestComponentBuilder ], (tcb: TestComponentBuilder) => _tcb = tcb));

	it ('page footer initialization', (done => {

		_tcb.createAsync(PageFooterComponent).then(fixture => {

			let pageFooterComponent = fixture.componentInstance;
			let element = fixture.nativeElement;

			pageFooterComponent.app = new App('test app', 'test owner', 2015);

			fixture.detectChanges();

			expect(element.querySelector('small').innerText).toBe(`${String.fromCharCode(169)} 2015, test owner`);

			done();

		}).catch(e => done.fail(e));


	}));


});