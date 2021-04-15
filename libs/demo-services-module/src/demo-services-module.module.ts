import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { ChatbotService } from './chatbot/chatbot.service';
import { MyAuthService } from './interceptors/AuthHeaderInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {WebSdkApiModule } from '@backbase/foundation-ang/web-sdk';

@NgModule({
  imports: [
    CommonModule,
    WebSdkApiModule,
    BackbaseCoreModule.withConfig({
      classMap: {}
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyAuthService,
      multi: true
    },
  //   {
  //     provide: LOGIN,
  //     useClass: MyAuthService,
  //     multi: true
  //  }
  ]
})
export class DemoServicesModuleModule {
  static forRoot(): ModuleWithProviders<DemoServicesModuleModule> {
    return {
      ngModule: DemoServicesModuleModule,
      providers: [
        ChatbotService
      ]
    };
  }
 }