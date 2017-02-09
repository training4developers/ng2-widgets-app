import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";

import { CapitalizePipe } from "../../pipes/capitalize.pipe";
import { WidgetsTableComponent } from "../shared/widgets-table/widgets-table.component";
import { WidgetsViewerComponent } from "./widgets-viewer.component";
import { Widgets } from "../../services/widgets.service";

class MockHttp { }

class MockRouter { public createUrlTree() { return; } }

describe("Widgets Viewer Tests", () => {

    let fixture: ComponentFixture<WidgetsViewerComponent>;
    let theComponent: WidgetsViewerComponent;
    let de: DebugElement;
    let el: HTMLElement;
    let widgets: Widgets;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [
                WidgetsViewerComponent,
                WidgetsTableComponent,
                CapitalizePipe
            ],
            providers: [
                Widgets,
                { provide: Http, useClass: MockHttp },
                { provide: Router, useClass: MockRouter }
            ],
        });

        fixture = TestBed.createComponent(WidgetsViewerComponent);
        theComponent = fixture.componentInstance;

        widgets = fixture.debugElement.injector.get(Widgets);

    });

    it("widgets viewer initialization", () => {

        spyOn(widgets, "getAll").and.returnValue(Observable.create(
            ((observer) => observer.next([{ name: "Widget 1" }])) as (observer: any) => any,
        ));

        fixture.detectChanges();

        expect(widgets.getAll).toHaveBeenCalled();

    });

});
