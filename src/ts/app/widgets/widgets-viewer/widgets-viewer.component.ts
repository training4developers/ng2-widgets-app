import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Widget } from "../../models/widget";
import { Widgets } from "../../services/widgets.service";
import { WidgetsTableComponent } from "../shared/widgets-table/widgets-table.component";

@Component({
    template: require("./widgets-viewer.component.html"),
    styles: [require("./widgets-viewer.component.scss")],
    providers: [Widgets],
})
export class WidgetsViewerComponent implements OnInit {

    public widgets: Widget[];

    constructor(
        private router: Router,
        private widgetsData: Widgets
    ) { }

    public ngOnInit() {
        this.widgetsData.getAll().subscribe((widgets) => this.widgets = widgets);
    }

    public viewWidget(widgetId: number) {
        this.router.navigate(["widget", widgetId]);
    }

    public editWidget(widgetId: number) {
        this.router.navigate(["widget", widgetId, "edit"]);
    }
}
