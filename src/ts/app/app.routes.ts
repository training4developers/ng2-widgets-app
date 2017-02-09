import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WidgetsViewerComponent } from "./widgets/widgets-viewer/widgets-viewer.component";
import { WidgetViewerComponent } from "./widgets/widget-viewer/widget-viewer.component";
import { WidgetEditorComponent } from "./widgets/widget-editor/widget-editor.component";

const appRoutes: Routes = [
    { path: "", component: WidgetsViewerComponent },
    { path: "widget/:id", component: WidgetViewerComponent },
    { path: "widget/:id/edit", component: WidgetEditorComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
