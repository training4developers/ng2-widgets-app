import { it, inject, describe, beforeEachProviders, expect, beforeEach } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';

import { AppComponent } from './app.component';

describe('App', () => {

  let _tcb: TestComponentBuilder;

  beforeEachProviders(() => [ TestComponentBuilder, AppComponent ]);

  beforeEach(inject([ TestComponentBuilder ], (tcb: TestComponentBuilder) => _tcb = tcb))

  it ('app initialization', (done) => {

    _tcb.createAsync(AppComponent).then(fixture => {
      
      let appComponent = fixture.componentInstance;
      let element = fixture.nativeElement;

      fixture.detectChanges();

      expect(appComponent.app.name).toBe('Widgets Manager');
      expect(appComponent.app.creator).toBe('Training 4 Developers, Inc.');
      expect(appComponent.app.copyrightYear).toBe((new Date()).getFullYear());

      done();

    }).catch(e => done.fail(e));

  });

});
