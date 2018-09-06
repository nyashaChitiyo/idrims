import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from './main/page-not-found/page-not-found.component';
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
import{AddVehicleComponent} from './main/add-vehicle/add-vehicle.component';
import { MyVehiclesComponent} from './main/my-vehicles/my-vehicles.component';
import {GetIdriveComponent} from './main/get-idrive/get-idrive.component';



//import { NgxPermissionsGuard } from 'ngx-permissions';
 

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}, 
  {path: 'admin', component: AdminComponent},
  {path: 'Dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'admin/userManagement', component: UserManagementComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/registerUser', component: RegisterUserComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/registerSBadmin', component: RegisterSBadminComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/viewAgents', component: ViewAgentsComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/viewCustomers', component: ViewCustomersComponent, canActivate:[AuthGuardRouteService]},
  {path: 'admin/userManagement/ViewAdmins', component: ViewAdminsComponent, canActivate: [AuthGuard]},
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
  {path: 'admin/userManagement/viewSBadmin', component: ViewSBadminComponent, canActivate: [AuthGuard]},
  {path: 'customer/addVehicle', component: AddVehicleComponent, canActivate: [AuthGuard]},
  {path: 'customer/myVehicles', component: MyVehiclesComponent, canActivate: [AuthGuard]},
  {path: 'customer/getIdrive', component: GetIdriveComponent, canActivate: [AuthGuard]},
 
 
 
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
