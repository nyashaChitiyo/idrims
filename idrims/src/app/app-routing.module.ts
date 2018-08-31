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

import { NgxPermissionsGuard } from 'ngx-permissions';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'Dashboard', component: DashboardComponent, canActivate: [AuthGuard,NgxPermissionsGuard],
  // data: {
  //   permissions: {
  //     only: 'ADMIN',
  //   }
  // }
},
  {path: 'userManagement', component: UserManagementComponent, canActivate: [AuthGuard,NgxPermissionsGuard], 
  // data: {
  //   permissions: {
  //     only: 'SYTADMIN',
  //     redirectTo: '**'
  //   }
  // }
},
  {path: 'userManagement/:phoneNumber', component: AgentComponent, canActivate: [AuthGuard,NgxPermissionsGuard],
  //  data: {
  //   permissions: {
  //     only: 'SYTADMIN',
  //     redirectTo: '**'
  //   }
  // }
},
  {path: 'vehicles', component: VehiclesComponent, canActivate: [AuthGuard,NgxPermissionsGuard],
  //  data: {
  //   permissions: {
  //     only: ['ADMIN','SYTADMIN'],
  //     redirectTo: '**'
  //   }
  // }
},

  {path: 'vehicles/:vehicleRegistrationNumber', component: VerifyVehicleComponent ,canActivate: [AuthGuard,NgxPermissionsGuard], 
  // data: {
  //   permissions: {
  //     only: 'ADMIN',
  //     redirectTo: '**'
  //   }
  // }
},
  {path: 'collectionPoints', component: CollectionPointsComponent, canActivate: [AuthGuard,NgxPermissionsGuard], 
  // data: {
  //   permissions: {
  //     only: 'SYTADMIN',
  //     redirectTo: '**'
  //   }
  // }
},
  {path: 'InsCompanies', component: InsuranceCompaniesComponent, canActivate: [AuthGuard,NgxPermissionsGuard], 
  // data: {
  //   permissions: {
  //     only: 'SYTADMIN',
  //     redirectTo: '**'
  //   }
  // }
},
  {path: 'Products', component: ProductsComponent, canActivate: [AuthGuard,NgxPermissionsGuard], 
  // data: {
  //   permissions: {
  //     only: 'ADMIN',
  //     redirectTo: '**'
  //   }
  // }
},
  {path: 'verifyVehicle', component: VerifyVehicleComponent, canActivate: [AuthGuard,NgxPermissionsGuard],
  //  data: {
  //   permissions: {
  //     only: 'ADMIN',
  //     redirectTo: '**'
  //   }
  // }
},
  {path: 'registerUser', component: RegisterUserComponent, canActivate: [AuthGuard,NgxPermissionsGuard],
  //  data: {
  //   permissions: {
  //     only: 'SYTADMIN',
  //     redirectTo: '**'
  //   }
  // }
},
  {path: 'addColPoint', component: AddCollectionPointComponent, canActivate: [AuthGuard,NgxPermissionsGuard], 
  // data: {
  //   permissions: {
  //     only: 'SYTADMIN',
  //     redirectTo: '**'
  //   }
  // }
},
  {path: 'addInsComp', component: AddInsuranceCompanyComponent, canActivate: [AuthGuard,NgxPermissionsGuard],
  //  data: {
  //   permissions: {
  //     only: 'SYTADMIN',
  //     redirectTo: '**'
  //   }
  // }
},
  {path: 'addProduct', component: AddProductComponent, canActivate: [AuthGuard,NgxPermissionsGuard], 
  // data: {
  //   permissions: {
  //     only: ['ADMIN','SYTADMIN'],
  //     redirectTo: '**'
  //   }
  // }
},
  {path: 'viewAgents', component: ViewAgentsComponent, canActivate: [AuthGuard,NgxPermissionsGuard], 
  // data: {
  //   permissions: {
  //     only: 'SYTADMIN',
  //     redirectTo: '**'
  //   }
  // }
},
  {path: 'viewCustomers', component: ViewCustomersComponent, canActivate: [AuthGuard,NgxPermissionsGuard], 
  // data: {
  //   permissions: {
  //     only: 'SYTADMIN',
  //     redirectTo: '**'
  //   }
  // }
},
  {path: 'verifiedVehicles', component: VerifiedVehiclesComponent, canActivate: [AuthGuard,NgxPermissionsGuard], 
  // data: {
  //   permissions: {
  //     only: ['ADMIN','SYTADMIN'],
  //     redirectTo: '**'
  //   }
  // }
},
  {path: 'viewVehicle', component: ViewVehicleComponent, canActivate: [AuthGuard,NgxPermissionsGuard],
  //  data: {
  //   permissions: {
  //     only: ['ADMIN','SYTADMIN'],
  //     redirectTo: '**'
  //   }
  // }
},
  {path: 'locations', component: LocationsComponent, canActivate: [AuthGuard,NgxPermissionsGuard],
  //  data: {
  //   permissions: {
  //     only: 'SYTADMIN',
  //     redirectTo: '**'
  //   }
  // }
},
  {path: 'regions', component: RegionsComponent, canActivate: [AuthGuard,NgxPermissionsGuard],
  //  data: {
  //   permissions: {
  //     only: 'SYTADMIN',
  //     redirectTo: '**'
  //   }
  // }
},
  {path: 'subRegions', component: SubRegionsComponent, canActivate: [AuthGuard,NgxPermissionsGuard],
  //  data: {
  //   permissions: {
  //     only: 'SYTADMIN',
  //     redirectTo: '**'
  //   }
  // }
},
  {path: 'addRegions', component: AddRegionComponent, canActivate: [AuthGuard,NgxPermissionsGuard],
  //  data: {
  //   permissions: {
  //     only: 'SYTADMIN',
  //     redirectTo: '**'
  //   }
  // }
},
  {path: 'addSubRegions', component: AddSubRegionComponent, canActivate: [AuthGuard,NgxPermissionsGuard], 
  // data: {
  //   permissions: {
  //     only: 'SYTADMIN',
  //     redirectTo: '**'
  //   }
  // }
},
  {path: '', redirectTo: '/Dashboard', pathMatch: 'full', canActivate: [AuthGuard,NgxPermissionsGuard],
  //  data: {
  //   permissions: {
  //     only: ['ADMIN','SYTADMIN'],
  //     redirectTo: '**'
  //   }
  // } 
},

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
