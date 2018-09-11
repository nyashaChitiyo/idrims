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
import { AgentDashboardComponent } from './main/agent-dashboard/agent-dashboard.component';
//import { BackofficeDashboardComponent } from './main/backoffice-dashboard/backoffice-dashboard.component';
import { SBbackofficeDashboardComponent } from './main/sbbackoffice-dashboard/sbbackoffice-dashboard.component';
import { SystemAdminDashboardComponent } from './main/system-admin-dashboard/system-admin-dashboard.component';
import { BackOfficeAdminDashboardComponent } from './main/back-office-admin-dashboard/back-office-admin-dashboard.component';





//import { NgxPermissionsGuard } from 'ngx-permissions';
 

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}, 
  {path: 'customer/Dashboard', component: CustomerDashboardComponent, canActivate: [AuthGuard]},
  {path: 'Dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'admin/userManagement', component: UserManagementComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/registerUser', component: RegisterUserComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/registerSBadmin', component: RegisterSBadminComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/viewAgents', component: ViewAgentsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/viewCustomers', component: ViewCustomersComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/ViewAdmins', component: ViewAdminsComponent, canActivate: [AuthGuard]},
  {path: 'admin/userManagement/viewAgents/:phoneNumber', component: AdminComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/ViewAdmins/:phoneNumber', component: AgentComponent, canActivate:[AuthGuardRouteService]},
  {path: 'vehicles', component: VehiclesComponent,canActivate: [AuthGuard] },
  {path: 'vehicles/:vehicleRegistrationNumber', component: VerifyVehicleComponent ,canActivate: [AuthGuard]},
  {path: 'admin/locations/collectionPoints', component: CollectionPointsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/InsCompanies', component: InsuranceCompaniesComponent, canActivate:[AuthGuardRouteService]},
  {path: 'Products', component: ProductsComponent, canActivate: [AuthGuard]},
  {path: 'CloseClaim/:claimId', component: CloseClaimComponent, canActivate: [AuthGuard]},
  {path: 'CloseClaim', component: CloseClaimComponent, canActivate: [AuthGuard]},
  {path: 'verifyVehicle', component: VerifyVehicleComponent, canActivate: [AuthGuard]},
  {path: 'admin/locations/collectionPoints/addColPoint', component: AddCollectionPointComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/InsCompanies/addInsComp', component: AddInsuranceCompanyComponent, canActivate:[AuthGuardRouteService]},
  {path: 'addProduct', component: AddProductComponent, canActivate: [AuthGuard]},
  {path: 'verifiedVehicles', component: VerifiedVehiclesComponent, canActivate: [AuthGuard]},
  {path: 'viewVehicle', component: ViewVehicleComponent, canActivate: [AuthGuard]},
  {path: 'admin/locations', component: LocationsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/locations/regions', component: RegionsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/locations/subRegions', component: SubRegionsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/locations/regions/addRegions', component: AddRegionComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/locations/subRegions/addSubRegions', component: AddSubRegionComponent, canActivate:[AuthGuardRouteService]},
  {path: 'closedClaims', component: ClosedClaimsComponent, canActivate: [AuthGuard]},
  {path: 'openClaims', component: OpenClaimsComponent, canActivate: [AuthGuard]},
  {path: 'admin/PricingScheme', component: PricingSchemeComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/PricingScheme/ZinaraPricingScheme', component: ZinaraPricingSchemeComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/PricingScheme/InsurancePricingScheme', component: InsurancePricingSchemeComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/PricingScheme/InsurancePricingScheme/AddZinaraPricingScheme', component: AddZinaraPricingSchemeComponent, canActivate: [AuthGuard]},
  {path: 'admin/PricingScheme/InsurancePricingScheme/AddInsurancePricingScheme', component: AddInsurancePricingSchemeComponent, canActivate: [AuthGuard]},
  {path: 'RegisterCustomer', component: RegisterCustomerComponent, canActivate: [AuthGuard]},
  {path: 'RegisterAgent', component: RegisterAgentComponent, canActivate: [AuthGuard]},
  {path: 'CustomerManagement', component: CustomerManagementComponent, canActivate: [AuthGuard]},
  {path: 'AgentManagement', component: AgentManagementComponent, canActivate: [AuthGuard]},
  {path: 'customerAgentManagement', component: CustomerAgentManagementComponent, canActivate: [AuthGuard]},
  {path: 'sbadmin/transactions', component: TransactionsComponent, canActivate: [AuthGuard]},
  {path: 'sbadmin/usermanagement', component: CustomerAgentManagementComponent, canActivate: [AuthGuard]},
  {path: 'admin/userManagement/viewSBadmin', component: ViewSBadminComponent, canActivate: [AuthGuard]},
  {path: 'customer/addVehicle', component: AddVehicleComponent, canActivate: [AuthGuard]},
  {path: 'customer/myVehicles', component: MyVehiclesComponent, canActivate: [AuthGuard]},
  {path: 'customer/getIdrive', component: GetIdriveComponent, canActivate: [AuthGuard]},
  {path: 'customer/myPendingVehicles', component: MypendingVerificationComponent, canActivate: [AuthGuard]},
  {path: 'customer/myVerifiedVehicles', component: MyVerifiedVehiclesComponent, canActivate: [AuthGuard]},
  {path: 'customer/myTransactions', component: MyTransactionsComponent, canActivate: [AuthGuard]},
  {path: 'customer/myClaims', component: MyClaimsComponent, canActivate: [AuthGuard]},
  {path: 'customer/submitmyClaim', component: SubmitClaimComponent, canActivate: [AuthGuard]},
  {path: 'customer/viewMyClaims', component: ViewMyClaimsComponent, canActivate: [AuthGuard]},
  {path: 'customer/profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'agent/mailbox', component: MailboxComponent, canActivate: [AuthGuard]},
  {path: 'agent/ViewPrintedDiscs', component: ViewPrintedDiscsComponent, canActivate: [AuthGuard]},
  {path: 'agent/Customers', component: CustomersComponent, canActivate: [AuthGuard]},
  {path: 'agent/regCustomer', component: AgentRegisterCustomerComponent, canActivate: [AuthGuard]},
  {path: 'agent/regVehicle', component: AgentRegisterVehicleComponent, canActivate: [AuthGuard]},
  {path: 'agent/addClaim', component: AgentSubmitClaimComponent, canActivate: [AuthGuard]},
  {path: 'agent/agentTransactions', component: AgentTransactionsComponent, canActivate: [AuthGuard]},
  {path: 'agent/agentGetIdrive', component: AgentGetIdriveComponent, canActivate: [AuthGuard]},
  {path: 'userManagement', component: UserManagementComponent, canActivate: [AuthGuard]},
  {path: 'agent/dashboard', component: AgentDashboardComponent, canActivate: [AuthGuard]},
  // {path: 'userManagement', component: BackofficeDashboardComponent, canActivate: [AuthGuard]},
  {path: 'sbadmin/dashboard', component: SBbackofficeDashboardComponent, canActivate: [AuthGuard]},
  {path: 'admin/dashboard', component: SystemAdminDashboardComponent, canActivate: [AuthGuard]},
  {path: 'backOffice/dashboard', component: BackOfficeAdminDashboardComponent, canActivate: [AuthGuard]},

  

 
  {path: '', redirectTo: '/Dashboard', pathMatch: 'full', canActivate: [AuthGuard]},

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
