import { NgModule } from '@angular/core';
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
  AdminComponent]
})
export class MainModule { }
