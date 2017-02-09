import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { Widget } from "../../models/widget";
import { Widgets } from "../../services/widgets.service";

import { WidgetFormComponent } from "../shared/widget-form/widget-form.component";

@Component({
    selector: "widget-editor",
    template: require("./widget-editor.component.html"),
    styleUrls: [require("./widget-editor.component.scss")],
    providers: [Widgets]
})
export class WidgetEditorComponent implements OnInit {

    public widget: Widget = {} as Widget;

    constructor(
        private widgetsData: Widgets,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    public ngOnInit() {
        this.route.params.subscribe(params =>
            this.widgetsData.get(parseInt(params["id"], 10)).subscribe(widget =>
                this.widget = widget));
    }

    public saveWidget(widget: Widget) {
        (widget.id
            ? this.widgetsData.update(widget)
            : this.widgetsData.insert(widget))
            .subscribe(() => {
                this.router.navigate(["/"]);
            });
    }

    public deleteWidget(widget: Widget) {
        if (confirm("Are you sure you want to delete this widget?")) {
            this.widgetsData.delete(widget.id).subscribe(() =>
                this.router.navigate(["/"]));
        }
    }

    public cancelWidget(widget: Widget) {
        this.router.navigate(["/"]);
    }
}
