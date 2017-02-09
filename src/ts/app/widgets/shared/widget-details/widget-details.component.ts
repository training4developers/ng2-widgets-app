import { Component, Input } from "@angular/core";

import { Widget } from "../../../models/widget";
import { CapitalizePipe } from "../../../pipes/capitalize.pipe";
import { ActivePipe } from "../../../pipes/active.pipe";

@Component({
    selector: "widget-details",
    template: require("./widget-details.component.html"),
    styles: [require("./widget-details.component.scss")]
})
export class WidgetDetailsComponent {

    @Input()
    public widget: Widget;

}
