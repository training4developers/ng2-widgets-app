import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { Router } from "@angular/router";

import { AppComponent } from "./app.component";

class MockRouter { public createUrlTree() { return; } }

describe("App", () => {

    let fixture: ComponentFixture<AppComponent>;
    let theComponent: AppComponent;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [ AppComponent ],
            providers: [
                { provide: Router, useClass: MockRouter }
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });

        fixture = TestBed.createComponent(AppComponent);
        theComponent = fixture.componentInstance;

    });

    it ("app initialization", () => {

        fixture.detectChanges();

        expect(theComponent.app.name).toBe("Widgets Manager");
        expect(theComponent.app.creator).toBe("Training 4 Developers, Inc.");
        expect(theComponent.app.copyrightYear).toBe((new Date()).getFullYear());

    });

});
