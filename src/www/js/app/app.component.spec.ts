import {
  it, inject, describe, expect, beforeEach,
  addProviders, TestComponentBuilder, ComponentFixture
} from '@angular/core/testing';
import { provide } from '@angular/core';
import { Router, RouterOutletMap } from '@angular/router';

import { AppComponent } from './app.component';

class MockRouter { createUrlTree() {} }

describe('App', () => {

  beforeEach(() => addProviders([
    TestComponentBuilder, AppComponent,
    provide(Router, { useClass: MockRouter }),
    RouterOutletMap
  ]));

  it ('app initialization', inject([ TestComponentBuilder ], (tcb: TestComponentBuilder) => {

    const fixture: ComponentFixture<AppComponent> = tcb.createSync(AppComponent);
    const appComponent = fixture.componentInstance;

    fixture.detectChanges();

    expect(appComponent.app.name).toBe('Widgets Manager');
    expect(appComponent.app.creator).toBe('Training 4 Developers, Inc.');
    expect(appComponent.app.copyrightYear).toBe((new Date()).getFullYear());

  }));

});
