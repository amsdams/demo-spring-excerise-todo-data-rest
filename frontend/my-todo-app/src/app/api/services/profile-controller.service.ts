/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResourceSupport } from '../models/resource-support';

/**
 * Profile Controller
 */
@Injectable({
  providedIn: 'root',
})
class ProfileControllerService extends __BaseService {
  static readonly listAllFormsOfMetadataUsingGETPath = '/profile';
  static readonly profileOptionsUsingOPTIONSPath = '/profile';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  listAllFormsOfMetadataUsingGETResponse(): __Observable<__StrictHttpResponse<ResourceSupport>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/profile`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceSupport>;
      })
    );
  }
  /**
   * @return OK
   */
  listAllFormsOfMetadataUsingGET(): __Observable<ResourceSupport> {
    return this.listAllFormsOfMetadataUsingGETResponse().pipe(
      __map(_r => _r.body as ResourceSupport)
    );
  }

  /**
   * @return OK
   */
  profileOptionsUsingOPTIONSResponse(): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'OPTIONS',
      this.rootUrl + `/profile`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * @return OK
   */
  profileOptionsUsingOPTIONS(): __Observable<{}> {
    return this.profileOptionsUsingOPTIONSResponse().pipe(
      __map(_r => _r.body as {})
    );
  }
}

module ProfileControllerService {
}

export { ProfileControllerService }
