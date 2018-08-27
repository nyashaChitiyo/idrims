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


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'Dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'userManagement', component: UserManagementComponent, canActivate: [AuthGuard]},
  {path: 'userManagement/:phoneNumber', component: AgentComponent},
  {path: 'vehicles', component: VehiclesComponent, canActivate: [AuthGuard]},
  {path: 'vehicles/:vehicleRegistrationNumber', component: VerifyVehicleComponent},
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
  {path: '', redirectTo: '/Dashboard', pathMatch: 'full', canActivate: [AuthGuard] },

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
