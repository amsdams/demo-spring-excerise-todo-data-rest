/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { WebMvcLinksHandlerService } from './services/web-mvc-links-handler.service';
//import { OperationHandlerService } from './services/operation-handler.service';
import { BasicErrorControllerService } from './services/basic-error-controller.service';
import { ProfileControllerService } from './services/profile-controller.service';
import { TodoEntityService } from './services/todo-entity.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    WebMvcLinksHandlerService,
    /*OperationHandlerService,*/
    BasicErrorControllerService,
    ProfileControllerService,
    TodoEntityService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
