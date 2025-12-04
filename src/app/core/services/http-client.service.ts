import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHttpClient } from '@app/core/interfaces/http-client.interface';
import { Observable } from 'rxjs';

@Injectable()
export class HttpClientService implements IHttpClient {
    private _http = inject(HttpClient);

    get<T>(url: string): Observable<T> {
        return this._http.get<T>(url);
    }

    post<T>(url: string, body: any): Observable<T> {
        return this._http.post<T>(url, body);
    }

    put<T>(url: string, body: any): Observable<T> {
        return this._http.put<T>(url, body);
    }

    patch<T>(url: string, body: any): Observable<T> {
        return this._http.patch<T>(url, body);
    }

    delete<T>(url: string): Observable<T> {
        return this._http.delete<T>(url);
    }
}
