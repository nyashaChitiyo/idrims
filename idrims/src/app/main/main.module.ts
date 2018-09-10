import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './loading/loading.component';
import { BuyEcosureComponent } from './buy-ecosure/buy-ecosure.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CollectionPointsComponent } from './collection-points/collection-points.component';
import { InsuranceCompaniesComponent } from './insurance-companies/insurance-companies.component';
import { ProductsComponent } from './products/products.component';
import { VerifyVehicleComponent } from './verify-vehicle/verify-vehicle.component';
import { AddCollectionPointComponent } from './add-collection-point/add-collection-point.component';
import { AddInsuranceCompanyComponent } from './add-insurance-company/add-insurance-company.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewAgentsComponent } from './view-agents/view-agents.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { VerifiedVehiclesComponent } from './verified-vehicles/verified-vehicles.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { ClosedClaimsComponent } from './closed-claims/closed-claims.component';
import { OpenClaimsComponent } from './open-claims/open-claims.component';
import { PricingSchemeComponent } from './pricing-scheme/pricing-scheme.component';
import { ZinaraPricingSchemeComponent } from './zinara-pricing-scheme/zinara-pricing-scheme.component';
import { InsurancePricingSchemeComponent } from './insurance-pricing-scheme/insurance-pricing-scheme.component';
import { AddInsurancePricingSchemeComponent } from './add-insurance-pricing-scheme/add-insurance-pricing-scheme.component';
import { AddZinaraPricingSchemeComponent } from './add-zinara-pricing-scheme/add-zinara-pricing-scheme.component';
import { ViewAdminsComponent } from './view-admins/view-admins.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { RegisterAgentComponent } from './register-agent/register-agent.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { AgentManagementComponent } from './agent-management/agent-management.component';
import { CustomerAgentManagementComponent } from './customer-agent-management/customer-agent-management.component';
import { ReportsComponent } from './reports/reports.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { RegisterSBadminComponent } from './register-sbadmin/register-sbadmin.component';
import { CloseClaimComponent } from './close-claim/close-claim.component';
import { ViewSBadminComponent } from './view-sbadmin/view-sbadmin.component';
import { RegisterComponent } from './register/register.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { MyVehiclesComponent } from './my-vehicles/my-vehicles.component';
import { GetIdriveComponent } from './get-idrive/get-idrive.component';
import { AddClaimComponent } from './add-claim/add-claim.component';
import { MypendingVerificationComponent } from './mypending-verification/mypending-verification.component';
import { MyVerifiedVehiclesComponent } from './my-verified-vehicles/my-verified-vehicles.component';
import { MyTransactionsComponent } from './my-transactions/my-transactions.component';
import { MyClaimsComponent } from './my-claims/my-claims.component';
import { SubmitClaimComponent } from './submit-claim/submit-claim.component';
import { ViewMyClaimsComponent } from './view-my-claims/view-my-claims.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewPrintedDiscsComponent } from './view-printed-discs/view-printed-discs.component';
import { CustomersComponent } from './customers/customers.component';
import { AgentRegisterCustomerComponent } from './agent-register-customer/agent-register-customer.component';
import { AgentRegisterVehicleComponent } from './agent-register-vehicle/agent-register-vehicle.component';
import { AgentSubmitClaimComponent } from './agent-submit-claim/agent-submit-claim.component';
import { AgentTransactionsComponent } from './agent-transactions/agent-transactions.component';
import { AgentGetIdriveComponent } from './agent-get-idrive/agent-get-idrive.component';
import { QuotationComponent } from './quotation/quotation.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { BackofficeDashboardComponent } from './backoffice-dashboard/backoffice-dashboard.component';
import { SBbackofficeDashboardComponent } from './sbbackoffice-dashboard/sbbackoffice-dashboard.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  LoadingComponent,
  BuyEcosureComponent,
  MailboxComponent,
  RegisterUserComponent,
  UserManagementComponent,
  VehiclesComponent,
  CollectionPointsComponent,
  InsuranceCompaniesComponent,
  ProductsComponent,
  VerifyVehicleComponent,
  AddCollectionPointComponent,
  AddInsuranceCompanyComponent,
  AddProductComponent,
  ViewAgentsComponent,
  ViewCustomersComponent,
  VerifiedVehiclesComponent,
  ViewVehicleComponent,
  AdminComponent,
  CustomerComponent,
  ClosedClaimsComponent,
  OpenClaimsComponent,
  PricingSchemeComponent,
  ZinaraPricingSchemeComponent,
  InsurancePricingSchemeComponent,
  AddInsurancePricingSchemeComponent,
  AddZinaraPricingSchemeComponent,
  ViewAdminsComponent,
  RegisterCustomerComponent,
  RegisterAgentComponent,
  CustomerManagementComponent,
  AgentManagementComponent,
  CustomerAgentManagementComponent,
  ReportsComponent,
  TransactionsComponent,
  RegisterSBadminComponent,
  CloseClaimComponent,
  ViewSBadminComponent,
  RegisterComponent,
  AddVehicleComponent,
  MyVehiclesComponent,
  GetIdriveComponent,
  AddClaimComponent,
  MypendingVerificationComponent,
  MyVerifiedVehiclesComponent,
  MyTransactionsComponent,
  MyClaimsComponent,
  SubmitClaimComponent,
  ViewMyClaimsComponent,
  ProfileComponent,
  ViewPrintedDiscsComponent,
  CustomersComponent,
  AgentRegisterCustomerComponent,
  AgentRegisterVehicleComponent,
  AgentSubmitClaimComponent,
  AgentTransactionsComponent,
  AgentGetIdriveComponent,
  QuotationComponent,
  CustomerDashboardComponent,
  AgentDashboardComponent,
  BackofficeDashboardComponent,
  SBbackofficeDashboardComponent]
})
export class MainModule { }
