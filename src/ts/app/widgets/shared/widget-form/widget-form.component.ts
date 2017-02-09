import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Widget } from "../../../models/widget";

interface SelectItem {
    value: string;
    label: string;
}

@Component({
    selector: "widget-form",
    template: require("./widget-form.component.html"),
    styles: [require("./widget-form.component.scss")]
})
export class WidgetFormComponent {

    @Input()
    public widget: Widget = {} as Widget;

    @Output()
    public saveWidget: EventEmitter<Widget> = new EventEmitter<Widget>();

    @Output()
    public deleteWidget: EventEmitter<Widget> = new EventEmitter<Widget>();

    @Output()
    public cancelWidget: EventEmitter<Widget> = new EventEmitter<Widget>();

    public colors: SelectItem[] = [
        { value: "red", label: "Red" },
        { value: "blue", label: "Blue" },
        { value: "green", label: "Green" },
        { value: "orange", label: "Orange" },
        { value: "yellow", label: "Yellow" },
        { value: "purple", label: "Purple" }
    ];

    public sizes: SelectItem[] = [
        { value: "tiny", label: "Tiny" },
        { value: "small", label: "Small" },
        { value: "medium", label: "Medium" },
        { value: "large", label: "Large" },
        { value: "huge", label: "Huge" }
    ];

    public saveWidgetButton(widget: Widget) {
        this.saveWidget.emit(widget);
    }

    public deleteWidgetButton(widget: Widget) {
        this.deleteWidget.emit(widget);
    }

    public cancelWidgetButton(widget: Widget) {
        this.cancelWidget.emit(widget);
    }
}
