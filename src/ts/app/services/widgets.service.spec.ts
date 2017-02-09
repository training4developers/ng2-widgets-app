import { async, inject, TestBed } from "@angular/core/testing";
import { MockBackend, MockConnection } from "@angular/http/testing";
import { HttpModule, Http, XHRBackend, Response, ResponseOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/toPromise";

import { Widgets } from "./widgets.service";

const mockWidgetData = [
    { id: 1, name: "Widget 1", description: "Widget 1 Description", color:"red",
        size:"large", quantity: 23, active: true, created: new Date(), modified: new Date() },
    { id: 2, name: "Widget 2", description: "Widget 2 Description", color:"blue",
        size:"small", quantity: 30, active: false, created: new Date(), modified: new Date() },
    { id: 3, name: "Widget 3", description: "Widget 3 Description", color:"green",
        size:"medium", quantity: 10, active: true, created: new Date(), modified: new Date() }
];


describe("Widgets Service", () => {

    let widgets: Widgets;
    let mockBackend: MockBackend;
    let mockResponse: Response;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            providers: [
            Widgets,
            { provide: XHRBackend, useClass: MockBackend }
            ]
        })
        .compileComponents();
    }));

    beforeEach(inject([Http, XHRBackend], (http: Http, _mockBackend: MockBackend) => {

        mockBackend = _mockBackend;

        mockResponse = new Response(new ResponseOptions({
            status: 200,
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify(mockWidgetData)
        }));

        widgets = new Widgets(http);

    }));

    it("can fetch widgets", async(inject([], () => {

        mockBackend.connections.subscribe((connection: MockConnection) => {

            if(connection.request.url.endsWith("/widgets")) {
                connection.mockRespond(mockResponse);
            }

            connection.mockError(Error("request url did not match expected url"));

    });

        widgets.getAll().toPromise().then(widgets => {
            expect(widgets.length).toEqual(mockWidgetData.length);
        }).catch((err: Error) => {
            fail(err.message);
        });

    })));

});