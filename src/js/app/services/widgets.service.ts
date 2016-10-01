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
		return this.http.get('http://localhost:3010/widgets').map(res => res.json());
	}

	get(widgetId: number): Observable<Widget> {
		return this.http.get('http://localhost:3010/widgets/' + encodeURIComponent(widgetId.toString())).map(res => res.json());
	}

	insert(widget: Widget): Observable<Widget> {
		return this.http.post('http://localhost:3010/widgets/', JSON.stringify(widget), this.requestOptions).map(res => res.json());
	}

	update(widget: Widget): Observable<Widget> {
		return this.http.put('http://localhost:3010/widgets/' + encodeURIComponent(widget.id.toString()),
			JSON.stringify(widget), this.requestOptions).map(res => res.json());
	}

	delete(widgetId: number): Observable<Widget> {
		return this.http.delete('http://localhost:3010/widgets/' + encodeURIComponent(widgetId.toString())).map(res => res.json());
	}

}