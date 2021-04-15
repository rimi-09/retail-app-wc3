import { Provider } from "@angular/core";
import { createMocksInterceptor } from "@backbase/foundation-ang/data-http";

import { AccessgroupDataHttpMocksProvider } from "@backbase/data-ang/accessgroup";
import { AccountDataHttpMocksProvider } from "@backbase/data-ang/account";
import { AccountStatementsDataHttpMocksProvider } from "@backbase/data-ang/account-statements";
import { ActionrecipesDataHttpMocksProvider } from "@backbase/data-ang/action-recipes";
import { ApprovalDataHttpMocksProvider } from "@backbase/data-ang/approvals";
import { AuditDataHttpMocksProvider } from "@backbase/data-ang/audit";
import { BillpayDataHttpMocksProvider } from "@backbase/data-ang/billpay";
import { BudgetingDataHttpMocksProvider } from "@backbase/data-ang/budgeting";
import { CardsDataHttpMocksProvider } from "@backbase/data-ang/cards";
import { CashManagementDataHttpMocksProvider } from "@backbase/data-ang/cash-management";
import { CategoriesManagementDataHttpMocksProvider } from "@backbase/data-ang/categories-management";
import { ConsentDataHttpMocksProvider } from "@backbase/data-ang/consent";
import { ContactDataHttpMocksProvider } from "@backbase/data-ang/contact";
import { DeviceManagementDataHttpMocksProvider } from "@backbase/data-ang/device-management";
import { LegalentityDataHttpMocksProvider } from "@backbase/data-ang/legalentity";
import { LimitsDataHttpMocksProvider } from "@backbase/data-ang/limits";
import { MessagesDataHttpMocksProvider } from "@backbase/data-ang/messages";
import { NotificationsDataHttpMocksProvider } from "@backbase/data-ang/notifications";
import { PaymentOrdersDataHttpMocksProvider } from "@backbase/data-ang/payment-orders";
import { PaymentOrderA2aDataHttpAngMocksProvider } from "@backbase/data-ang/payment-orders-a2a";
import { PlacesDataHttpMocksProvider } from "@backbase/data-ang/places";
import { PortfolioSummaryDataHttpMocksProvider } from "@backbase/data-ang/portfolio-summary";
import { ProductSummaryDataHttpMocksProvider } from "@backbase/data-ang/product-summary";
import { SavingGoalsDataHttpMocksProvider } from "@backbase/data-ang/saving-goals";
import { SelfEnrollmentDataHttpMocksProvider } from "@backbase/data-ang/self-enrollment";
import { StopChecksDataHttpMocksProvider } from "@backbase/data-ang/stop-checks";
import { TradingfxDataHttpMocksProvider } from "@backbase/data-ang/trading-fx";
import { TransactionsDataHttpMocksProvider } from "@backbase/data-ang/transactions";
import { UserDataHttpMocksProvider } from "@backbase/data-ang/user";
import { UserProfileManagerDataHttpMocksProvider } from "@backbase/data-ang/user-profile-manager";

export const mockProviders: Array<Provider> = [
  createMocksInterceptor(),
  AccessgroupDataHttpMocksProvider,
  AccountDataHttpMocksProvider,
  AccountStatementsDataHttpMocksProvider,
  ActionrecipesDataHttpMocksProvider,
  ApprovalDataHttpMocksProvider,
  AuditDataHttpMocksProvider,
  BillpayDataHttpMocksProvider,
  BudgetingDataHttpMocksProvider,
  CardsDataHttpMocksProvider,
  CashManagementDataHttpMocksProvider,
  CategoriesManagementDataHttpMocksProvider,
  ConsentDataHttpMocksProvider,
  ContactDataHttpMocksProvider,
  DeviceManagementDataHttpMocksProvider,
  LegalentityDataHttpMocksProvider,
  LimitsDataHttpMocksProvider,
  MessagesDataHttpMocksProvider,
  NotificationsDataHttpMocksProvider,
  PaymentOrdersDataHttpMocksProvider,
  PaymentOrderA2aDataHttpAngMocksProvider,
  PlacesDataHttpMocksProvider,
  PortfolioSummaryDataHttpMocksProvider,
  ProductSummaryDataHttpMocksProvider,
  SavingGoalsDataHttpMocksProvider,
  SelfEnrollmentDataHttpMocksProvider,
  StopChecksDataHttpMocksProvider,
  TradingfxDataHttpMocksProvider,
  TransactionsDataHttpMocksProvider,
  UserDataHttpMocksProvider,
  UserProfileManagerDataHttpMocksProvider
]
