import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { PageHeaderComponent } from "./shared/page-header/page-header.component";
import { PageFooterComponent } from "./shared/page-footer/page-footer.component";
import { WidgetsViewerComponent } from "./widgets/widgets-viewer/widgets-viewer.component";
import { WidgetViewerComponent } from "./widgets/widget-viewer/widget-viewer.component";
import { WidgetEditorComponent } from "./widgets/widget-editor/widget-editor.component";
import { WidgetsTableComponent } from "./widgets/shared/widgets-table/widgets-table.component";
import { WidgetDetailsComponent } from "./widgets/shared/widget-details/widget-details.component";
import { WidgetFormComponent } from "./widgets/shared/widget-form/widget-form.component";

import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { ActivePipe } from "./pipes/active.pipe";

import { AppRoutingModule } from "./app.routes";

import "../../scss/styles.scss";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent,
    WidgetsViewerComponent,
    WidgetViewerComponent,
    WidgetEditorComponent,
    WidgetsTableComponent,
    WidgetDetailsComponent,
    WidgetFormComponent,
    CapitalizePipe,
    ActivePipe,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
