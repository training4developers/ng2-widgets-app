import { Component, OnInit } from "@angular/core";

import { App } from "./models/app";

@Component({
  selector: "widget-tool",
  template: require("./app.component.html"),
  styles: [require("./app.component.scss")],
})
export class AppComponent implements OnInit {

  public app: App;

  public ngOnInit() {
    this.app = new App("Widgets Manager", "Training 4 Developers, Inc.", (new Date()).getFullYear());
  }

}
