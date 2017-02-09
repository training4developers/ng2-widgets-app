import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { App } from "./models/app";
import { PageHeaderComponent } from "./shared/page-header/page-header.component";
import { PageFooterComponent } from "./shared/page-footer/page-footer.component";
import { WidgetsViewerComponent } from "./widgets/widgets-viewer/widgets-viewer.component";

@Component({
  selector: "widget-tool",
  template: require("./app.component.html"),
  styles: [require("./app.component.scss")]
})
export class AppComponent implements OnInit {

  public app: App;

  constructor(private router: Router) { }

  public ngOnInit() {

    this.app = new App("Widgets Manager", "Training 4 Developers, Inc.", (new Date()).getFullYear());
  }

}
