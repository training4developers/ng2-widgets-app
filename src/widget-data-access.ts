import { BaseDataAccess } from './base-data-access';
import { Widget } from './widget';

export class WidgetDataAccess extends BaseDataAccess<Widget> { }

export const widgetDataAccess = new WidgetDataAccess('widget');
widgetDataAccess.insert(new Widget('Small Red Widget', 'A small and red widget', 'red', 'small', 20, true));
widgetDataAccess.insert(new Widget('Medium Blue Widget', 'A medium and blue widget', 'blue', 'medium', 10, true));
widgetDataAccess.insert(new Widget('Large Orange Widget', 'A large and orange widget', 'orange', 'large', 40, true));
widgetDataAccess.insert(new Widget('Tiny Purple Widget', 'A tiny and purple widget', 'tiny', 'purple', 35, true));
widgetDataAccess.insert(new Widget('Small Yellow Widget', 'A small and yellow widget', 'yellow', 'small', 25, true));
