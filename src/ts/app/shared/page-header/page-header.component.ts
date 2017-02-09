import { Component, Input } from "@angular/core";

import { App } from "../../models/app";

@Component({
    selector: "page-header",
    template: require("./page-header.component.html"),
    styles: [require("./page-header.component.scss")]
})
export class PageHeaderComponent {

    @Input()
    public app: App;

}