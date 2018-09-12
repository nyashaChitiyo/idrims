import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import {DemoService}from './demo.service';
import {FrameComponent} from './main/frame/frame.component';
import {DashboardComponent} from './main/dashboard/dashboard.component';
import {PageNotFoundComponent} from './main/page-not-found/page-not-found.component';
import {SidebarComponent} from './main/sidebar/sidebar.component';
import {ControlSidebarComponent} from './main/control-sidebar/control-sidebar.component';
import {HeaderComponent} from './main/header/header.component';
import {FooterComponent} from './main/footer/footer.component';
import {LoginComponent} from './main/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {SessionsService} from './authentication/sessions.service';
import {AuthGuard} from './authentication/auth.guard';
import {AuthGuardRouteService} from './authentication/auth-guard-route.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoadingComponent} from './main/loading/loading.component';
import {BuyEcosureComponent} from './main/buy-ecosure/buy-ecosure.component';
import {MailboxComponent} from './main/mailbox/mailbox.component';
import {RegisterUserComponent} from './main/register-user/register-user.component';
import {JwtInterceptor} from './jwt-interceptor';
import { UserManagementComponent } from './main/user-management/user-management.component';
import { VehiclesComponent } from './main/vehicles/vehicles.component';
import { CollectionPointsComponent } from './main/collection-points/collection-points.component';
import { InsuranceCompaniesComponent } from './main/insurance-companies/insurance-companies.component';
import { ProductsComponent } from './main/products/products.component';
import { VerifyVehicleComponent } from './main/verify-vehicle/verify-vehicle.component';
import { AddCollectionPointComponent } from './main/add-collection-point/add-collection-point.component';
import { AddInsuranceCompanyComponent } from './main/add-insurance-company/add-insurance-company.component';
import { AddProductComponent } from './main/add-product/add-product.component';
import { ViewCustomersComponent } from './main/view-customers/view-customers.component';
import { ViewAgentsComponent } from './main/view-agents/view-agents.component';
import { VerifiedVehiclesComponent } from './main/verified-vehicles/verified-vehicles.component';
import {AgentComponent} from './main/agent/agent.component';
import { ViewVehicleComponent } from './main/view-vehicle/view-vehicle.component';
import { LocationsComponent } from './main/locations/locations.component';
import { RegionsComponent } from './main/regions/regions.component';
import { SubRegionsComponent } from './main/sub-regions/sub-regions.component';
import { AddRegionComponent} from './main/add-region/add-region.component';
import { AddSubRegionComponent } from './main/add-sub-region/add-sub-region.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {AdminComponent} from './main/admin/admin.component';
import{ProfileComponent} from './main/profile/profile.component';
//import { NgxPermissionsModule } from 'ngx-permissions';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'; 
import { JwtModule } from '@auth0/angular-jwt';
import { ClosedClaimsComponent } from './main/closed-claims/closed-claims.component';
import { OpenClaimsComponent } from './main/open-claims/open-claims.component';
import { PricingSchemeComponent} from './main/pricing-scheme/pricing-scheme.component';
import { ZinaraPricingSchemeComponent } from './main/zinara-pricing-scheme/zinara-pricing-scheme.component';
import { InsurancePricingSchemeComponent} from './main/insurance-pricing-scheme/insurance-pricing-scheme.component';
import { AddZinaraPricingSchemeComponent} from './main/add-zinara-pricing-scheme/add-zinara-pricing-scheme.component';
import { AddInsurancePricingSchemeComponent} from './main/add-insurance-pricing-scheme/add-insurance-pricing-scheme.component';
import { ViewAdminsComponent } from './main/view-admins/view-admins.component';
import { RegisterCustomerComponent } from './main/register-customer/register-customer.component';
import { RegisterAgentComponent } from './main/register-agent/register-agent.component';
import { CustomerManagementComponent } from './main/customer-management/customer-management.component';
import { AgentManagementComponent } from './main/agent-management/agent-management.component';
import {CustomerAgentManagementComponent } from './main/customer-agent-management/customer-agent-management.component';
import { RegisterSBadminComponent} from './main/register-sbadmin/register-sbadmin.component';
import { TransactionsComponent} from './main/transactions/transactions.component';
import {CloseClaimComponent} from './main/close-claim/close-claim.component';
import { ViewSBadminComponent } from './main/view-sbadmin/view-sbadmin.component';
import { RegisterComponent } from './main/register/register.component';
import{AddVehicleComponent} from './main/add-vehicle/add-vehicle.component';
import { MyVehiclesComponent} from './main/my-vehicles/my-vehicles.component';
import {GetIdriveComponent} from './main/get-idrive/get-idrive.component';
import { MypendingVerificationComponent} from './main/mypending-verification/mypending-verification.component';
import {MyVerifiedVehiclesComponent} from './main/my-verified-vehicles/my-verified-vehicles.component';
import { MyTransactionsComponent } from './main/my-transactions/my-transactions.component';
import {MyClaimsComponent} from './main/my-claims/my-claims.component';
import { SubmitClaimComponent } from './main/submit-claim/submit-claim.component';
import { ViewMyClaimsComponent } from './main/view-my-claims/view-my-claims.component';
import {ViewPrintedDiscsComponent} from './main/view-printed-discs/view-printed-discs.component';
import {CustomersComponent} from './main/customers/customers.component';
import { AgentRegisterCustomerComponent } from './main/agent-register-customer/agent-register-customer.component';
import { AgentRegisterVehicleComponent } from './main/agent-register-vehicle/agent-register-vehicle.component';
import { AgentSubmitClaimComponent } from './main/agent-submit-claim/agent-submit-claim.component';
import { AgentTransactionsComponent } from './main/agent-transactions/agent-transactions.component';
import { AgentGetIdriveComponent } from './main/agent-get-idrive/agent-get-idrive.component';
import{ QuotationDetailsComponent} from './main/quotation-details/quotation-details.component';
import{ ProcessPaymentComponent} from './main/process-payment/process-payment.component';
import { CustomerDashboardComponent } from './main/customer-dashboard/customer-dashboard.component';
import { AgentDashboardComponent } from './main/agent-dashboard/agent-dashboard.component';
import { BackofficeDashboardComponent } from './main/backoffice-dashboard/backoffice-dashboard.component';
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




//import { AdminComponent } from './admin/admin.component';
// import { AdminModule } from './admin/admin.module';

// const routes: Routes =[
//   { path: 'Home', loadChildren:()=> System.import('./Home').then((comp: any) => comp.default) }
// ]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    ControlSidebarComponent,
    SidebarComponent,
    PageNotFoundComponent,
    DashboardComponent,
    FrameComponent,
    AgentComponent,
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
    ViewVehicleComponent,
    ProfileComponent,
    LocationsComponent,
    RegionsComponent,
    SubRegionsComponent,
    AddSubRegionComponent,
    AddRegionComponent,
    ClosedClaimsComponent,
    OpenClaimsComponent,
    PricingSchemeComponent,
    ZinaraPricingSchemeComponent,
    InsurancePricingSchemeComponent,
    AddZinaraPricingSchemeComponent,
    AddInsurancePricingSchemeComponent,
    ViewAdminsComponent,
    RegisterCustomerComponent,
    RegisterAgentComponent,
    CustomerManagementComponent,
    AgentManagementComponent,
    CustomerAgentManagementComponent,
    RegisterSBadminComponent,
    TransactionsComponent,
    CloseClaimComponent,
    ViewSBadminComponent,
    RegisterComponent,
    AddVehicleComponent,
    MyVehiclesComponent,
    GetIdriveComponent,
    MypendingVerificationComponent,
    MyVerifiedVehiclesComponent,
    MyTransactionsComponent,
    MyClaimsComponent,
    SubmitClaimComponent,
    ViewMyClaimsComponent,
    ViewPrintedDiscsComponent,
    CustomersComponent,
    AgentRegisterCustomerComponent,
    AgentRegisterVehicleComponent,
    AgentSubmitClaimComponent,
    AgentTransactionsComponent,
    AgentGetIdriveComponent,
    QuotationDetailsComponent,
    ProcessPaymentComponent,
    CustomerDashboardComponent,
    AgentDashboardComponent,
    BackofficeDashboardComponent,
    SBbackofficeDashboardComponent,
    SystemAdminDashboardComponent,
    BackOfficeAdminDashboardComponent,
    SbSupervisorsComponent,
    RegisterSupervisorComponent,
    SupervisorReportsComponent,
    SupervisorDashBoardComponent,
    MonthlyReportComponent,
    WeeklyReportComponent,
    DailyReportComponent,
    TransactionReportsComponent,
    ViewMonthlyReportComponent,
    InsuranceReportsComponent,
    ZbcReportsComponent,
    ZinaraReportsComponent



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
   // NgxPermissionsModule.forRoot()
    
  ],
  providers: [
    AuthGuard,
    AuthGuardRouteService,
    DemoService,
    SessionsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  exports: [
 //   NgxPermissionsModule
],
  bootstrap: [AppComponent]
})
export class AppModule {}

