/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResourcesTodo } from '../models/resources-todo';
import { ResourceTodo } from '../models/resource-todo';
import { Todo } from '../models/todo';

/**
 * Simple Jpa Repository
 */
@Injectable({
  providedIn: 'root',
})
class TodoEntityService extends __BaseService {
  static readonly findAllTodoUsingGETPath = '/todo';
  static readonly saveTodoUsingPOSTPath = '/todo';
  static readonly findByTitleTodoUsingGETPath = '/todo/search/findByTitle';
  static readonly findByIdTodoUsingGETPath = '/todo/{id}';
  static readonly saveTodoUsingPUTPath = '/todo/{id}';
  static readonly deleteTodoUsingDELETEPath = '/todo/{id}';
  static readonly saveTodoUsingPATCHPath = '/todo/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `TodoEntityService.FindAllTodoUsingGETParams` containing the following parameters:
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllTodoUsingGETResponse(params: TodoEntityService.FindAllTodoUsingGETParams): __Observable<__StrictHttpResponse<ResourcesTodo>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourcesTodo>;
      })
    );
  }
  /**
   * @param params The `TodoEntityService.FindAllTodoUsingGETParams` containing the following parameters:
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllTodoUsingGET(params: TodoEntityService.FindAllTodoUsingGETParams): __Observable<ResourcesTodo> {
    return this.findAllTodoUsingGETResponse(params).pipe(
      __map(_r => _r.body as ResourcesTodo)
    );
  }

  /**
   * @param body body
   * @return OK
   */
  saveTodoUsingPOSTResponse(body: Todo): __Observable<__StrictHttpResponse<ResourceTodo>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/todo`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceTodo>;
      })
    );
  }
  /**
   * @param body body
   * @return OK
   */
  saveTodoUsingPOST(body: Todo): __Observable<ResourceTodo> {
    return this.saveTodoUsingPOSTResponse(body).pipe(
      __map(_r => _r.body as ResourceTodo)
    );
  }

  /**
   * @param title title
   * @return OK
   */
  findByTitleTodoUsingGETResponse(title?: string): __Observable<__StrictHttpResponse<ResourcesTodo>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (title != null) __params = __params.set('title', title.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/search/findByTitle`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourcesTodo>;
      })
    );
  }
  /**
   * @param title title
   * @return OK
   */
  findByTitleTodoUsingGET(title?: string): __Observable<ResourcesTodo> {
    return this.findByTitleTodoUsingGETResponse(title).pipe(
      __map(_r => _r.body as ResourcesTodo)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  findByIdTodoUsingGETResponse(id: number): __Observable<__StrictHttpResponse<ResourceTodo>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceTodo>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  findByIdTodoUsingGET(id: number): __Observable<ResourceTodo> {
    return this.findByIdTodoUsingGETResponse(id).pipe(
      __map(_r => _r.body as ResourceTodo)
    );
  }

  /**
   * @param params The `TodoEntityService.SaveTodoUsingPUTParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  saveTodoUsingPUTResponse(params: TodoEntityService.SaveTodoUsingPUTParams): __Observable<__StrictHttpResponse<ResourceTodo>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/todo/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceTodo>;
      })
    );
  }
  /**
   * @param params The `TodoEntityService.SaveTodoUsingPUTParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  saveTodoUsingPUT(params: TodoEntityService.SaveTodoUsingPUTParams): __Observable<ResourceTodo> {
    return this.saveTodoUsingPUTResponse(params).pipe(
      __map(_r => _r.body as ResourceTodo)
    );
  }

  /**
   * @param id id
   */
  deleteTodoUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/todo/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id id
   */
  deleteTodoUsingDELETE(id: number): __Observable<null> {
    return this.deleteTodoUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `TodoEntityService.SaveTodoUsingPATCHParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  saveTodoUsingPATCHResponse(params: TodoEntityService.SaveTodoUsingPATCHParams): __Observable<__StrictHttpResponse<ResourceTodo>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/todo/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceTodo>;
      })
    );
  }
  /**
   * @param params The `TodoEntityService.SaveTodoUsingPATCHParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `body`: body
   *
   * @return OK
   */
  saveTodoUsingPATCH(params: TodoEntityService.SaveTodoUsingPATCHParams): __Observable<ResourceTodo> {
    return this.saveTodoUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as ResourceTodo)
    );
  }
}

module TodoEntityService {

  /**
   * Parameters for findAllTodoUsingGET
   */
  export interface FindAllTodoUsingGETParams {

    /**
     * sort
     */
    sort?: string;

    /**
     * size
     */
    size?: number;

    /**
     * page
     */
    page?: number;
  }

  /**
   * Parameters for saveTodoUsingPUT
   */
  export interface SaveTodoUsingPUTParams {

    /**
     * id
     */
    id: number;

    /**
     * body
     */
    body: Todo;
  }

  /**
   * Parameters for saveTodoUsingPATCH
   */
  export interface SaveTodoUsingPATCHParams {

    /**
     * id
     */
    id: number;

    /**
     * body
     */
    body: Todo;
  }
}

export { TodoEntityService }
