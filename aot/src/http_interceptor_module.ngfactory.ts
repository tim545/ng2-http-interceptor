/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../src/http_interceptor_module';
import * as import2 from '@angular/core/src/di/injector';
class HttpInterceptorModuleInjector extends import0.NgModuleInjector<import1.HttpInterceptorModule> {
  _HttpInterceptorModule_0:import1.HttpInterceptorModule;
  constructor(parent:import2.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  createInternal():import1.HttpInterceptorModule {
    this._HttpInterceptorModule_0 = new import1.HttpInterceptorModule();
    return this._HttpInterceptorModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.HttpInterceptorModule)) { return this._HttpInterceptorModule_0; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const HttpInterceptorModuleNgFactory:import0.NgModuleFactory<import1.HttpInterceptorModule> = new import0.NgModuleFactory(HttpInterceptorModuleInjector,import1.HttpInterceptorModule);