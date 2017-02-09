import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { App } from '../../models/app';
import { PageHeaderComponent } from './page-header.component';

describe('Page Header', () => {

	let fixture: ComponentFixture<PageHeaderComponent>;
	let theComponent: PageHeaderComponent;
	let de: DebugElement;
	let el: HTMLElement;

	beforeEach(() => {

		TestBed.configureTestingModule({
			declarations: [ PageHeaderComponent ]
		});

		fixture = TestBed.createComponent(PageHeaderComponent);

		theComponent = fixture.componentInstance;

		de = fixture.debugElement.query(By.css('h1'));
		el = de.nativeElement;

	});	

	it('page header initialization', () => {

		theComponent.app = new App('test app','test owner', 2016);

		fixture.detectChanges();

		expect(el.innerText).toBe('test app');

	});

});