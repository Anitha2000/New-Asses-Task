import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IRequestOptions {
    headers?: HttpHeaders;
    observe?: 'body';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    body?: any;
}

@Injectable()
export class AppHttpClient {
    private baseUrl;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.apiUrl;
    }

    public Get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
        return this.http.get<T>(this.baseUrl + endPoint, options);
    }

    public Post<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
        return this.http.post<T>(this.baseUrl + endPoint, params, options);
    }

    public Put<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
        return this.http.put<T>(this.baseUrl + endPoint, params, options);
    }

    public Delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
        return this.http.delete<T>(this.baseUrl + endPoint, options);
    }

    public GetExternal<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
        return this.http.get<T>(endPoint, options);
    }

}