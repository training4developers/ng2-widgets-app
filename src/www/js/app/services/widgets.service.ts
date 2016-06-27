import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import "rxjs/add/operator/map";

import { Widget } from '../models/widget';

@Injectable()
export class Widgets {

	requestOptions: RequestOptions = new RequestOptions({
		headers: new Headers({ 'Content-Type': 'application/json' })
	});

	constructor(private http: Http) { }

	getAll(): Observable<Widget[]> {
		return this.http.get('/api/widgets').map(res => res.json());
	}

	get(widgetId: number): Observable<Widget> {
		return this.http.get('/api/widgets/' + encodeURIComponent(widgetId.toString())).map(res => res.json());
	}

	insert(widget: Widget): Observable<Widget> {
		return this.http.post('/api/widgets', JSON.stringify(widget), this.requestOptions).map(res => res.json());
	}

	update(widget: Widget): Observable<Widget> {
		return this.http.put('/api/widgets/' + encodeURIComponent(widget.id.toString()),
			JSON.stringify(widget), this.requestOptions).map(res => res.json());
	}

	delete(widgetId: number): Observable<Widget> {
		return this.http.delete('/api/widgets/' + encodeURIComponent(widgetId.toString())).map(res => res.json());
	}

}