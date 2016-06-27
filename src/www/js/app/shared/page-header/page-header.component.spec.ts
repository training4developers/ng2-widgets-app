import { it, describe, beforeEachProviders, expect, inject, beforeEach } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';

import { App } from '../../models/app';
import { PageHeaderComponent } from './page-header.component';

describe('Page Header', () => {

	let _tcb: TestComponentBuilder;

	beforeEachProviders(() => [ TestComponentBuilder, PageHeaderComponent ]);

	beforeEach(inject([ TestComponentBuilder ], (tcb: TestComponentBuilder) => { 
    _tcb = tcb
  }));

	it('page header initialization', done => {

		_tcb.createAsync(PageHeaderComponent).then(fixture => {

			let pageHeaderComponent: PageHeaderComponent = fixture.componentInstance;
			let element = fixture.nativeElement;

			pageHeaderComponent.app = new App('test app','test owner', 2016);

			fixture.detectChanges();

			expect(element.querySelector('h1').innerText).toBe('test app');

			done();
			
		}).catch(e => done.fail(e));

	});

});