import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

import { JwtModule } from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    AppComponent,
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
    LocationsComponent,
    RegionsComponent,
    SubRegionsComponent,
    AddSubRegionComponent,
    AddRegionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    })
  ],
  providers: [
    AuthGuard,
    DemoService,
    SessionsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

