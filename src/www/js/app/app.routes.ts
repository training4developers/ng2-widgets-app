import { RouterConfig, provideRouter } from '@angular/router';

import { WidgetsViewerComponent } from './widgets/widgets-viewer/widgets-viewer.component';
import { WidgetViewerComponent } from './widgets/widget-viewer/widget-viewer.component';
import { WidgetEditorComponent } from './widgets/widget-editor/widget-editor.component';

const routes: RouterConfig = [
	{ path: '', component: WidgetsViewerComponent },
	{ path: 'widget/:id', component: WidgetViewerComponent },
	{ path: 'widget/:id/edit', component: WidgetEditorComponent }
];

export const APP_ROUTER_PROVIDERS = [ provideRouter(routes) ];