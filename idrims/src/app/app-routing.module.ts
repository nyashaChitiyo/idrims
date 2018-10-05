import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from './main/page-not-found/page-not-found.component';
import { CustomerDashboardComponent } from './main/customer-dashboard/customer-dashboard.component';
import {DashboardComponent} from './main/dashboard/dashboard.component';
import {LoginComponent} from './main/login/login.component';
import {AuthGuard} from './authentication/auth.guard';
import { UserManagementComponent } from './main/user-management/user-management.component';
import { VehiclesComponent } from './main/vehicles/vehicles.component';
import { CollectionPointsComponent } from './main/collection-points/collection-points.component';
import { InsuranceCompaniesComponent } from './main/insurance-companies/insurance-companies.component';
import { ProductsComponent } from './main/products/products.component';
import {AgentComponent} from './main/agent/agent.component';
import { VerifyVehicleComponent } from './main/verify-vehicle/verify-vehicle.component';
import { RegisterUserComponent } from './main/register-user/register-user.component';
import { AddCollectionPointComponent } from './main/add-collection-point/add-collection-point.component';
import { AddInsuranceCompanyComponent } from './main/add-insurance-company/add-insurance-company.component';
import { AddProductComponent } from './main/add-product/add-product.component';
import { ViewAgentsComponent } from './main/view-agents/view-agents.component';
import { ViewCustomersComponent } from './main/view-customers/view-customers.component';
import { VerifiedVehiclesComponent } from './main/verified-vehicles/verified-vehicles.component';
import { ViewVehicleComponent } from './main/view-vehicle/view-vehicle.component';
import { LocationsComponent} from './main/locations/locations.component';
import { SubRegionsComponent } from './main/sub-regions/sub-regions.component';
import { RegionsComponent} from './main/regions/regions.component';
import { AddRegionComponent} from './main/add-region/add-region.component';
import { AddSubRegionComponent } from './main/add-sub-region/add-sub-region.component';
import {AdminComponent} from './main/admin/admin.component';
import { ClosedClaimsComponent} from './main/closed-claims/closed-claims.component';
import { OpenClaimsComponent } from './main/open-claims/open-claims.component';
import { PricingSchemeComponent} from './main/pricing-scheme/pricing-scheme.component';
import { ZinaraPricingSchemeComponent } from './main/zinara-pricing-scheme/zinara-pricing-scheme.component';
import { InsurancePricingSchemeComponent} from './main/insurance-pricing-scheme/insurance-pricing-scheme.component';
import { AddZinaraPricingSchemeComponent} from './main/add-zinara-pricing-scheme/add-zinara-pricing-scheme.component';
import { AddInsurancePricingSchemeComponent} from './main/add-insurance-pricing-scheme/add-insurance-pricing-scheme.component';
import { AuthGuardRouteService } from './authentication/auth-guard-route.service';
import { ViewAdminsComponent } from './main/view-admins/view-admins.component';
import { RegisterCustomerComponent } from './main/register-customer/register-customer.component';
import { RegisterAgentComponent } from './main/register-agent/register-agent.component';
import { CustomerManagementComponent } from './main/customer-management/customer-management.component';
import { AgentManagementComponent } from './main/agent-management/agent-management.component';
import {CustomerAgentManagementComponent} from './main/customer-agent-management/customer-agent-management.component';
import { RegisterSBadminComponent } from './main/register-sbadmin/register-sbadmin.component';
import { TransactionsComponent} from './main/transactions/transactions.component';
import {CloseClaimComponent} from './main/close-claim/close-claim.component';
import {ViewSBadminComponent } from './main/view-sbadmin/view-sbadmin.component';
import {RegisterComponent} from './main/register/register.component';
import {AddVehicleComponent} from './main/add-vehicle/add-vehicle.component';
import { MyVehiclesComponent} from './main/my-vehicles/my-vehicles.component';
import {GetIdriveComponent} from './main/get-idrive/get-idrive.component';
import { MypendingVerificationComponent} from './main/mypending-verification/mypending-verification.component';
import {MyVerifiedVehiclesComponent } from './main/my-verified-vehicles/my-verified-vehicles.component';
import { MyTransactionsComponent } from './main/my-transactions/my-transactions.component';
import {MyClaimsComponent} from './main/my-claims/my-claims.component';
import { SubmitClaimComponent } from './main/submit-claim/submit-claim.component';
import { ViewMyClaimsComponent } from './main/view-my-claims/view-my-claims.component';
import{ProfileComponent} from './main/profile/profile.component';
import { MailboxComponent} from './main/mailbox/mailbox.component';
import {ViewPrintedDiscsComponent} from './main/view-printed-discs/view-printed-discs.component';
import {CustomersComponent} from './main/customers/customers.component';
import { AgentRegisterCustomerComponent } from './main/agent-register-customer/agent-register-customer.component';
import { AgentRegisterVehicleComponent } from './main/agent-register-vehicle/agent-register-vehicle.component';
import { AgentSubmitClaimComponent } from './main/agent-submit-claim/agent-submit-claim.component';
import { AgentTransactionsComponent } from './main/agent-transactions/agent-transactions.component';
import { AgentGetIdriveComponent } from './main/agent-get-idrive/agent-get-idrive.component';
import {QuotationDetailsComponent} from './main/quotation-details/quotation-details.component';
import {ProcessPaymentComponent} from './main/process-payment/process-payment.component';
import {QuotationComponent} from './main/quotation/quotation.component';
import { AgentDashboardComponent } from './main/agent-dashboard/agent-dashboard.component';
//import { BackofficeDashboardComponent } from './main/backoffice-dashboard/backoffice-dashboard.component';
import { SBbackofficeDashboardComponent } from './main/sbbackoffice-dashboard/sbbackoffice-dashboard.component';
import { SystemAdminDashboardComponent } from './main/system-admin-dashboard/system-admin-dashboard.component';
import { BackOfficeAdminDashboardComponent } from './main/back-office-admin-dashboard/back-office-admin-dashboard.component';
import { SbSupervisorsComponent } from './main/sb-supervisors/sb-supervisors.component';
import { RegisterSupervisorComponent } from './main/register-supervisor/register-supervisor.component';
import { SupervisorReportsComponent } from './main/supervisor-reports/supervisor-reports.component';
import { SupervisorDashBoardComponent } from './main/supervisor-dash-board/supervisor-dash-board.component';
import { MonthlyReportComponent } from './main/monthly-report/monthly-report.component';
import { WeeklyReportComponent } from './main/weekly-report/weekly-report.component';
import { DailyReportComponent } from './main/daily-report/daily-report.component';
import { TransactionReportsComponent } from './main/transaction-reports/transaction-reports.component';
import { ViewMonthlyReportComponent } from './main/view-monthly-report/view-monthly-report.component';
import { InsuranceReportsComponent } from './main/insurance-reports/insurance-reports.component';
import { ZbcReportsComponent } from './main/zbc-reports/zbc-reports.component';
import { ZinaraReportsComponent } from './main/zinara-reports/zinara-reports.component';
import { SBadminReportsComponent } from './main/sbadmin-reports/sbadmin-reports.component';
import { SupervisorAgentsManagementComponent } from './main/supervisor-agents-management/supervisor-agents-management.component';
import { ForgotPasswordComponent } from './main/forgot-password/forgot-password.component';
import { CentralPrintingComponent } from './main/central-printing/central-printing.component';
import { CreateCentralPrintingComponent } from './main/create-central-printing/create-central-printing.component';
import { CustomerComponent } from './main/customer/customer.component';
import { SuburbsComponent } from './main/suburbs/suburbs.component';
import { CreateSuburbComponent } from './main/create-suburb/create-suburb.component';
import { ViewSuburbsComponent } from './main/view-suburbs/view-suburbs.component';

//import { NgxPermissionsGuard } from 'ngx-permissions';
 

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}, 
  {path: 'forgotPassword', component: ForgotPasswordComponent},  
  {path: 'customer/Dashboard', component: CustomerDashboardComponent, canActivate:[AuthGuardRouteService]},
  {path: 'Dashboard', component: DashboardComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement', component: UserManagementComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/registerUser', component: RegisterUserComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/registerSBadmin', component: RegisterSBadminComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/viewAgents', component: ViewAgentsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/viewCustomers', component: ViewCustomersComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/ViewAdmins', component: ViewAdminsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/viewAgents/:phoneNumber', component: AgentComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/ViewAdmins/:phoneNumber', component: AdminComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/CustomerManagement/:phoneNumber', component: CustomerComponent, canActivate:[AuthGuardRouteService]},
  {path: 'vehicles', component: VehiclesComponent,canActivate:[AuthGuardRouteService] },
  {path: 'admin/vehicles', component: VehiclesComponent,canActivate:[AuthGuardRouteService] },
  {path: 'vehicles/:vehicleRegistrationNumber', component: VerifyVehicleComponent ,canActivate:[AuthGuardRouteService]},
  {path: 'admin/locations/collectionPoints', component: CollectionPointsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/InsCompanies', component: InsuranceCompaniesComponent, canActivate:[AuthGuardRouteService]},
  {path: 'Products', component: ProductsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'CloseClaim/:claimId', component: CloseClaimComponent, canActivate:[AuthGuardRouteService]},
  {path: 'CloseClaim', component: CloseClaimComponent, canActivate:[AuthGuardRouteService]},
  {path: 'verifyVehicle', component: VerifyVehicleComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/locations/collectionPoints/addColPoint', component: AddCollectionPointComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/InsCompanies/addInsComp', component: AddInsuranceCompanyComponent, canActivate:[AuthGuardRouteService]},
  {path: 'addProduct', component: AddProductComponent, canActivate:[AuthGuardRouteService]},
  {path: 'verifiedVehicles', component: VerifiedVehiclesComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/verifiedVehicles', component: VerifiedVehiclesComponent, canActivate:[AuthGuardRouteService]},
  {path: 'viewVehicle', component: ViewVehicleComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/locations', component: LocationsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/locations/regions', component: RegionsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/locations/subRegions', component: SubRegionsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/locations/regions/addRegions', component: AddRegionComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/locations/subRegions/addSubRegions', component: AddSubRegionComponent, canActivate:[AuthGuardRouteService]},
  {path: 'closedClaims', component: ClosedClaimsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'openClaims', component: OpenClaimsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/PricingScheme', component: PricingSchemeComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/PricingScheme/ZinaraPricingScheme', component: ZinaraPricingSchemeComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/PricingScheme/InsurancePricingScheme', component: InsurancePricingSchemeComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/PricingScheme/InsurancePricingScheme/AddZinaraPricingScheme', component: AddZinaraPricingSchemeComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/PricingScheme/InsurancePricingScheme/AddInsurancePricingScheme', component: AddInsurancePricingSchemeComponent, canActivate:[AuthGuardRouteService]},
  {path: 'RegisterCustomer', component: RegisterCustomerComponent, canActivate:[AuthGuardRouteService]},
  {path: 'RegisterAgent', component: RegisterAgentComponent, canActivate:[AuthGuardRouteService]},
  {path: 'CustomerManagement', component: CustomerManagementComponent, canActivate:[AuthGuardRouteService]},
  {path: 'AgentManagement', component: AgentManagementComponent, canActivate:[AuthGuardRouteService]},
  {path: 'customerAgentManagement', component: CustomerAgentManagementComponent, canActivate:[AuthGuardRouteService]},
  {path: 'sbadmin/transactions', component: TransactionsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'sbadmin/usermanagement', component: CustomerAgentManagementComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/viewSBadmin', component: ViewSBadminComponent, canActivate:[AuthGuardRouteService]},
  {path: 'customer/addVehicle', component: AddVehicleComponent, canActivate:[AuthGuardRouteService]},
  {path: 'agent/addVehicle', component: AddVehicleComponent, canActivate:[AuthGuardRouteService]},
  {path: 'customer/myVehicles', component: MyVehiclesComponent, canActivate:[AuthGuardRouteService]}, 
  {path: 'customer/getIdrive', component: GetIdriveComponent, canActivate:[AuthGuardRouteService]},
  {path: 'customer/getIdrive/:vehicleRegistrationNumber', component: QuotationDetailsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'customer/getIdrive/:vehicleRegistrationNumber/:quotationId/:grandTotal', component: ProcessPaymentComponent}, 
  {path: 'customer/getIdrive/generate/quote', component: QuotationComponent, canActivate:[AuthGuardRouteService]},
  {path: 'customer/myPendingVehicles', component: MypendingVerificationComponent, canActivate:[AuthGuardRouteService]},
  {path: 'customer/myVerifiedVehicles', component: MyVerifiedVehiclesComponent, canActivate:[AuthGuardRouteService]},
  {path: 'customer/myTransactions', component: MyTransactionsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'customer/myClaims', component: MyClaimsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'customer/submitmyClaim', component: SubmitClaimComponent, canActivate:[AuthGuardRouteService]},
  {path: 'customer/viewMyClaims', component: ViewMyClaimsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'customer/profile', component: ProfileComponent, canActivate:[AuthGuardRouteService]},
  {path: 'agent/mailbox', component: MailboxComponent, canActivate:[AuthGuardRouteService]},
  {path: 'agent/ViewPrintedDiscs', component: ViewPrintedDiscsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'agent/Customers', component: CustomersComponent, canActivate:[AuthGuardRouteService]},
  {path: 'agent/regCustomer', component: AgentRegisterCustomerComponent, canActivate:[AuthGuardRouteService]},
  {path: 'agent/regVehicle', component: AgentRegisterVehicleComponent, canActivate:[AuthGuardRouteService]},
  {path: 'agent/addClaim', component: AgentSubmitClaimComponent, canActivate:[AuthGuardRouteService]},
  {path: 'agent/agentTransactions', component: AgentTransactionsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'agent/getIdrive/:vehicleRegistrationNumber', component: GetIdriveComponent, canActivate:[AuthGuardRouteService]},
  {path: 'agent/getidrive/:vehicleRegistrationNumber', component: QuotationDetailsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'agent/agentGetIdrive', component: AgentGetIdriveComponent, canActivate:[AuthGuardRouteService]},
  {path: 'agent/getIdrive/:vehicleRegistrationNumber/:quotationId/:grandTotal', component: ProcessPaymentComponent},
  {path: 'userManagement', component: UserManagementComponent, canActivate:[AuthGuardRouteService]},
  {path: 'agent/dashboard', component: AgentDashboardComponent, canActivate:[AuthGuardRouteService]},
  {path: 'sbadmin/dashboard', component: SBbackofficeDashboardComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/dashboard', component: SystemAdminDashboardComponent, canActivate:[AuthGuardRouteService]},
  {path: 'backOffice/dashboard', component: BackOfficeAdminDashboardComponent, canActivate:[AuthGuardRouteService]},
  {path: 'backOffice/userManagement/ViewAdmins/:phoneNumber', component: AgentComponent, canActivate:[AuthGuardRouteService]},
  {path: 'backOffice/userManagement/Viewcustomers/:phoneNumber', component: AgentComponent, canActivate:[AuthGuardRouteService]},
  {path: 'sbadmin/SbSupervisors', component: SbSupervisorsComponent , canActivate:[AuthGuardRouteService]},
  {path: 'sbadmin/registerSupervisor', component:  RegisterSupervisorComponent, canActivate:[AuthGuardRouteService]},
  {path: 'supervisor/reports', component: SupervisorReportsComponent , canActivate:[AuthGuardRouteService]},
  {path: 'supervisor/dashboard', component:  SupervisorDashBoardComponent, canActivate:[AuthGuardRouteService]},
  {path: 'sbadmin/mothlyReport', component:  MonthlyReportComponent, canActivate:[AuthGuardRouteService]},
  {path: 'sbadmin/weeklyReport', component:  WeeklyReportComponent, canActivate:[AuthGuardRouteService]},
  {path: 'sbadmin/dailyReport', component:  DailyReportComponent, canActivate:[AuthGuardRouteService]},
  {path: 'sbadmin/transactionReports', component:  TransactionReportsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'sbadmin/viewMonthlyReports', component:  ViewMonthlyReportComponent, canActivate:[AuthGuardRouteService]},
  {path: 'sbadmin/insuranceReports', component:  InsuranceReportsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'sbadmin/zbcReports', component:  ZbcReportsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'sbadmin/zinaraReports', component:  ZinaraReportsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'sbadmin/reports', component:  SBadminReportsComponent, canActivate:[AuthGuardRouteService]}, 
  {path: 'supervisor/AgentManagement', component:  SupervisorAgentsManagementComponent, canActivate:[AuthGuardRouteService]},
  {path: 'supervisor/RegisterAgent', component: RegisterAgentComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/locations/centralPrinting', component: CentralPrintingComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/locations/centralPrinting/createCentralPrinting', component: CreateCentralPrintingComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/locations/suburbs', component: SuburbsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/locations/suburbs/createSuburb', component: CreateSuburbComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/locations/suburbs/viewSuburb', component: ViewSuburbsComponent, canActivate:[AuthGuardRouteService]},
  

  
 
  {path: '', redirectTo: '/', pathMatch: 'full', canActivate:[AuthGuardRouteService]},

  {path: '**', component: PageNotFoundComponent}
]; 


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
