import { RouterConfig, provideRouter } from '@angular/router';

import { WidgetsViewer } from './widgets/widgets-viewer/widgets-viewer.component';

const routes: RouterConfig = [
	{ path: '', component: WidgetsViewer }
];

export const APP_ROUTER_PROVIDERS = [ provideRouter(routes) ];