import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { App } from "../../models/app";
import { PageFooterComponent } from "./page-footer.component";

describe("Page Footer", () => {

    let fixture: ComponentFixture<PageFooterComponent>;
    let pageFooterComponent: PageFooterComponent;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [PageFooterComponent]
        });

        fixture = TestBed.createComponent(PageFooterComponent);

        pageFooterComponent = fixture.componentInstance;

        de = fixture.debugElement.query(By.css("small"));
        el = de.nativeElement;

    });

    it("page footer initialization", () => {

        pageFooterComponent.app = new App("test app", "test owner", 2015);
        fixture.detectChanges();

        expect(el.innerText).toBe(`${String.fromCharCode(169)} 2015, test owner`);

    });

});