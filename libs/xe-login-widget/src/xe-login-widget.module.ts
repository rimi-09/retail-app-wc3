import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { XeLoginWidgetComponent } from './xe-login-widget.component';
import { LoginWidgetModule} from '@backbase/retail-ang/iam';
import { BB_LOGIN_HEADER_CONFIG_TOKEN , BB_LOGIN_URL_CONFIG_TOKEN, BB_LOGINFORM_CUSTOMFIELDS_TOKEN } from '@backbase/retail-ang/iam';
import { Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const LoginConfigCustomProvider: Array<Provider> = [{
  provide: BB_LOGIN_HEADER_CONFIG_TOKEN,
  useValue: {
    Accept: '*/*',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
  },
}, 
{
  provide: BB_LOGIN_URL_CONFIG_TOKEN,
  useValue: {
    baseUri: '',
    gatewayRoot: "/gateway",
    apiRoot: 'http://52.147.193.71:8080/api',
    authUri: '/auth',
    loginUri: '/login',
  },
},
// {
//   provide: BB_LOGINFORM_CUSTOMFIELDS_TOKEN,
//   useValue: {
//     username: ['', Validators.required],
//     password: ['', Validators.required],
//   },
// }
]

@NgModule({
  declarations: [XeLoginWidgetComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { XeLoginWidgetComponent }
    }),
    LoginWidgetModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  providers: [... LoginConfigCustomProvider],
})
export class XeLoginWidgetModule { }