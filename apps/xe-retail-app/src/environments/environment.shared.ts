import { createMocksInterceptor } from '@backbase/foundation-ang/data-http';

import { ExternalServices } from '@backbase/foundation-ang/start';

import { Environment } from './type';

import { pageModel } from '../mocks/page-model';

const services: ExternalServices = {};

import { ProductSummaryDataHttpMocksProvider } from '@backbase/data-ang/product-summary';

export const environment: Environment = {
  production: false,
  mockProviders: [createMocksInterceptor(), ProductSummaryDataHttpMocksProvider],
  bootstrap: {
    pageModel,
    services,
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
