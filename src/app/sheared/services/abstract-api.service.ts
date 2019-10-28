import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { throwError, Observable } from 'rxjs';

import { AbstractModel } from '../models/abstract.model';
import { environment } from 'src/environments/environment';

export abstract class AbstractApiService<T extends AbstractModel> {
  protected http: HttpClient;
  protected url: string;

  constructor(protected injector: Injector, private endpoint: string, private api?: string) {
    this.url = (api === undefined) ? `${environment.apiUrl}/${this.endpoint}` : `${api}/${this.endpoint}`;
    this.http = injector.get(HttpClient);
  }

  public findById(id: number): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`);
  }

  public findAllPageable(): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}`);
  }

  public create(object: T): Observable<T> {
    return this.http.post<T>(this.url, object);
  }

  public update(object: T): Observable<T> {
    return this.http.put<T>(`${this.url}/${object.id}`, object);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }


  protected jsonDataToResources(jsonData: any): Array<T> {
    const objects = new Array<T>();
    jsonData.forEach(e => objects.push(e as T));
    return objects;
  }

  protected jsonDataToResource(jsonData: any): T {
    return jsonData as T;
  }

  protected handleError(error: any): Observable<any> {
    return throwError(error);
  }
}
