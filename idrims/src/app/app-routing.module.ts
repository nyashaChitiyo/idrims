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
<<<<<<< HEAD
import {AdminComponent} from './main/admin/admin.component';
=======
import { ClosedClaimsComponent} from './main/closed-claims/closed-claims.component';
import { OpenClaimsComponent } from './main/open-claims/open-claims.component';
import { PricingSchemeComponent} from './main/pricing-scheme/pricing-scheme.component';
import { ZinaraPricingSchemeComponent } from './main/zinara-pricing-scheme/zinara-pricing-scheme.component';
import { InsurancePricingSchemeComponent} from './main/insurance-pricing-scheme/insurance-pricing-scheme.component';
import { AddZinaraPricingSchemeComponent} from './main/add-zinara-pricing-scheme/add-zinara-pricing-scheme.component';
import { AddInsurancePricingSchemeComponent} from './main/add-insurance-pricing-scheme/add-insurance-pricing-scheme.component';


import { NgxPermissionsGuard } from 'ngx-permissions';
>>>>>>> ddbc5053c4bc38b3b7f52f5cfb58994763043f1c


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'Dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'userManagement', component: UserManagementComponent, canActivate: [AuthGuard]},
  {path: 'userManagement/:phoneNumber', component: AgentComponent, canActivate: [AuthGuard]},
  {path: 'vehicles', component: VehiclesComponent, canActivate: [AuthGuard]},
  {path: 'vehicles/:vehicleRegistrationNumber', component: VerifyVehicleComponent ,canActivate: [AuthGuard]},
  {path: 'collectionPoints', component: CollectionPointsComponent, canActivate: [AuthGuard]},
  {path: 'InsCompanies', component: InsuranceCompaniesComponent, canActivate: [AuthGuard]},
  {path: 'Products', component: ProductsComponent, canActivate: [AuthGuard]},
  {path: 'verifyVehicle', component: VerifyVehicleComponent, canActivate: [AuthGuard]},
  {path: 'registerUser', component: RegisterUserComponent, canActivate: [AuthGuard]},
  {path: 'addColPoint', component: AddCollectionPointComponent, canActivate: [AuthGuard]},
  {path: 'addInsComp', component: AddInsuranceCompanyComponent, canActivate: [AuthGuard]},
  {path: 'addProduct', component: AddProductComponent, canActivate: [AuthGuard]},
  {path: 'viewAgents', component: ViewAgentsComponent, canActivate: [AuthGuard]},
  {path: 'viewCustomers', component: ViewCustomersComponent, canActivate: [AuthGuard]},
  {path: 'verifiedVehicles', component: VerifiedVehiclesComponent, canActivate: [AuthGuard]},
  {path: 'viewVehicle', component: ViewVehicleComponent, canActivate: [AuthGuard]},
  {path: 'locations', component: LocationsComponent, canActivate: [AuthGuard]},
  {path: 'regions', component: RegionsComponent, canActivate: [AuthGuard]},
  {path: 'subRegions', component: SubRegionsComponent, canActivate: [AuthGuard]},
  {path: 'addRegions', component: AddRegionComponent, canActivate: [AuthGuard]},
  {path: 'addSubRegions', component: AddSubRegionComponent, canActivate: [AuthGuard]},
  {path: 'closedClaims', component: ClosedClaimsComponent, canActivate: [AuthGuard]},
  {path: 'openClaims', component: OpenClaimsComponent, canActivate: [AuthGuard]},
  {path: 'PricingScheme', component: PricingSchemeComponent, canActivate: [AuthGuard]},
  {path: 'ZinaraPricingScheme', component: ZinaraPricingSchemeComponent, canActivate: [AuthGuard,]},
  {path: 'InsurancePricingScheme', component: InsurancePricingSchemeComponent, canActivate: [AuthGuard]},
  {path: 'AddZinaraPricingScheme', component: AddZinaraPricingSchemeComponent, canActivate: [AuthGuard]},
  {path: 'AddInsurancePricingScheme', component: AddInsurancePricingSchemeComponent, canActivate: [AuthGuard]},

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
