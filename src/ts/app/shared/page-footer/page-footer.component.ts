import { Component, Input } from "@angular/core";

import { App } from "../../models/app";

@Component({
    selector: "page-footer",
    template: require("./page-footer.component.html"),
    styles: [require("./page-footer.component.scss")]
})
export class PageFooterComponent {

    @Input()
    public app: App;

}