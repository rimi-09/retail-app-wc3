import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ContainersModule } from '@backbase/universal-ang/containers';
import { LayoutContainerModule } from '@backbase/universal-ang/layouts';
import { ContentWidgetModule } from '@backbase/universal-ang/content';
import { ExampleWidgetModule } from '@backbase/example-widget';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackbaseUiModule } from '@backbase/ui-ang';

import { NotificationsBadgeWidgetModule, NotificationsPopupsWidgetModule } from '@backbase/retail-ang/notifications';
import { UserContextMenuWidgetModule, SelectContextWidgetModule} from '@backbase/entitlements-ang/access-control';
import { NavigationSpaWidgetModule } from '@backbase/navigation-spa-widget-ang';
import { HeadingWidgetModule } from '@backbase/heading-widget-ang';
import {
  ProductSummaryListWidgetModule, ProductSummaryManageAccountsWidgetModule, ProductSummaryWidgetAccountSelectorModule,
  ProductSummaryDetailsWidgetModule
} from '@backbase/retail-ang/product-summary';
import {ProductSummaryDataHttpModule} from  '@backbase/data-ang/product-summary'
import { TransactionsListWidgetModule } from '@backbase/retail-ang/transactions';
import {
  BillpayManagePayeeWidgetModule, BillpayManagePaymentWidgetModule, BillpayPayeeListWidgetModule,
  BillpayPaymentsWidgetModule, BillpayEnrolmentWidgetModule, BillpayGuardContainerModule,
  BillpayPayverisEbillsEnrolmentWidgetModule, BillpayPayeeSummaryWidgetModule
} from '@backbase/retail-ang/billpay';
import {
  PayordInitiatePaymentWidgetModule, PayordUpcomingPaymentsWidgetModule, PayordA2aExternalAccountManagerWidgetModule,
  PayordStopChecksListWidgetAngModule, PayordStopChecksWidgetModule, 
  //PaymentsCommonModule,
  //PayordFormBuilderAngModule, PayordOmniPaymentWidgetAngModule, PaymentOrdersUiModule
} from '@backbase/retail-ang/payment-order';
import {
  IncomeSpendingAnalysisWidgetModule, LeftToSpendWidgetModule, SavingGoalsWidgetModule,
  TopMetricsWidgetModule, TurnoversWidgetModule, BudgetWidgetModule
} from '@backbase/retail-ang/pfm';
import { CardsListWidgetModule, CardDetailsWidgetModule, CardsTravelNoticeModule } from '@backbase/retail-ang/cards';
import { AccountStatementListWidgetModule } from '@backbase/retail-ang/account-statement';
import { ContactManagerWidgetModule } from '@backbase/retail-ang/contact';
import { UserManageProfileWidgetModule, UserIdentitySecurityCenterWidgetModule } from '@backbase/retail-ang/users';
import {
  MessagesCreateMessageModalWidgetModule, MessagesConversationsListWidgetModule,
  MessagesConversationThreadWidgetModule, MessagesUnreadConversationCountModule
} from '@backbase/retail-ang/messages';
import { PlacesWidgetModule } from '@backbase/retail-ang/places';
import { ActionsProductNotificationsSettingsWidgetModule } from '@backbase/retail-ang/actions';
import { NavigationStepperWidgetModule } from '@backbase/navigation-stepper-widget-ang';
import {
  SelfEnrollmentIdentificationWidgetModule, SelfEnrollmentVerificationWidgetModule, SelfEnrollmentCreateAccountWidgetModule,
  SelfEnrollmentLockedOutWidgetModule, SelfEnrollmentConfirmationWidgetModule
} from '@backbase/retail-ang/self-enrollment';
import {
  ConsentDetailsWidgetModule, ConsentListWidgetModule, ConsentRequestWidgetModule, PaymentRequestWidgetModule
} from '@backbase/retail-ang/consent';
import { LoginWidgetModule } from '@backbase/retail-ang/iam';

import { AvatarModule, EmptyStateModule } from '@backbase/ui-ang';
import { ChatbotWidgetModule } from '@backbase/chatbot-widget';
import { DemoServicesModuleModule } from '@backbase/demo-services-module';
import { XeLoginWidgetModule } from '@backbase/xe-login-widget';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    BackbaseCoreModule.forRoot({
      features: {
        THEME_V2: true
      }
    }),
    RouterModule.forRoot([], { initialNavigation: false, useHash: true }),
    NgbModule,
    BackbaseUiModule,
    LayoutContainerModule,
    ContentWidgetModule,
    ContainersModule,
    ExampleWidgetModule,
    NotificationsBadgeWidgetModule,
    NotificationsPopupsWidgetModule,
    UserContextMenuWidgetModule,
    SelectContextWidgetModule,
    NavigationSpaWidgetModule,
    HeadingWidgetModule,
    ProductSummaryListWidgetModule,
    ProductSummaryManageAccountsWidgetModule,
    ProductSummaryWidgetAccountSelectorModule,
    ProductSummaryDetailsWidgetModule,
    SavingGoalsWidgetModule,
    TopMetricsWidgetModule,
    TransactionsListWidgetModule,
    BillpayManagePayeeWidgetModule,
    BillpayManagePaymentWidgetModule,
    BillpayPayeeListWidgetModule,
    BillpayPaymentsWidgetModule,
    BillpayEnrolmentWidgetModule,
    BillpayGuardContainerModule,
    BillpayPayverisEbillsEnrolmentWidgetModule,
    BillpayPayeeSummaryWidgetModule,
    PayordInitiatePaymentWidgetModule,
    PayordUpcomingPaymentsWidgetModule,
    PayordA2aExternalAccountManagerWidgetModule,
    TurnoversWidgetModule,
    IncomeSpendingAnalysisWidgetModule,
    LeftToSpendWidgetModule,
    BudgetWidgetModule,
    CardsListWidgetModule,
    CardDetailsWidgetModule,
    CardsTravelNoticeModule,
    AccountStatementListWidgetModule,
    ContactManagerWidgetModule,
    PayordStopChecksListWidgetAngModule,
    PayordStopChecksWidgetModule,
    //PaymentsCommonModule,
    //PayordFormBuilderAngModule,
    //PayordOmniPaymentWidgetAngModule,
    //PaymentOrdersUiModule,
    UserManageProfileWidgetModule,
    UserIdentitySecurityCenterWidgetModule,
    MessagesCreateMessageModalWidgetModule,
    MessagesConversationsListWidgetModule,
    MessagesConversationThreadWidgetModule,
    MessagesUnreadConversationCountModule,
    PlacesWidgetModule,
    ActionsProductNotificationsSettingsWidgetModule,
    NavigationStepperWidgetModule,
    SelfEnrollmentIdentificationWidgetModule,
    SelfEnrollmentVerificationWidgetModule,
    SelfEnrollmentCreateAccountWidgetModule,
    SelfEnrollmentLockedOutWidgetModule,
    SelfEnrollmentConfirmationWidgetModule,
    ConsentDetailsWidgetModule,
    ConsentListWidgetModule,
    ConsentRequestWidgetModule,
    PaymentRequestWidgetModule,
    LoginWidgetModule,
    AvatarModule, EmptyStateModule,
    ChatbotWidgetModule,
    DemoServicesModuleModule,
    XeLoginWidgetModule,
    ProductSummaryDataHttpModule
  ],
  providers: [...environment.mockProviders || []],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
