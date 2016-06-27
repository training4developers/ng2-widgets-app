import { RouterConfig, provideRouter } from '@angular/router';

import { WidgetsViewer } from './widgets/widgets-viewer/widgets-viewer.component';
import { WidgetViewer } from './widgets/widget-viewer/widget-viewer.component';

const routes: RouterConfig = [
	{ path: '', component: WidgetsViewer },
	{ path: 'widget/:id', component: WidgetViewer },
];

export const APP_ROUTER_PROVIDERS = [ provideRouter(routes) ];