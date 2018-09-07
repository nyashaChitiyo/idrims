import { Component, OnInit ,ViewChild} from '@angular/core';
import * as $ from "jquery";
import {DemoService} from '../../demo.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ServicesService } from '../../services.service';
import {SessionsService} from '../../authentication/sessions.service';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import{Router,NavigationExtras} from '@angular/router';


@Component({
  selector: 'app-get-idrive',
  templateUrl: './get-idrive.component.html',
  styleUrls: ['./get-idrive.component.css']
})
export class GetIdriveComponent implements OnInit {

  // Top fields
  vehicleRegistrationNumber: string;
  phoneNumber: string;
  selectInsuranceCompany: string;
  selectInsurancePeriod: string;
  selectInsuranceType: string;
  vehicleValue: number;
///// Toggle Switches
  hasSelectedZinara: boolean;
  hasSelectedZBC: boolean;
  hasSelectedPickup: boolean;
  hasSelectedDelivery: boolean;
  /////////// Toggle Variables
  zinaraPeriod: 0;
  zbcPeriod: 0;
  pickUpPoint: '';
  region: number;
  subregion: number;
  city: number;
  surburb: number;
  collectionPoint: number;
  /// App variables
  regions: any[];
  cities: any[];
  subRegions: any[];
  suburbs: any[];
  collectionPoints: any[];
  constructor(public session: SessionsService,private router: Router, private httpClient: HttpClient, private demo: DemoService) { }

  ngOnInit() {
    this.httpClient.get('http://108.61.174.41:7070/api/location/view/allRegions')
      .subscribe((data: any[]) => {
        this.regions = data;
      });
  }
  selectDelivery () {this.hasSelectedPickup = false; }
  selectPickup () {this.hasSelectedDelivery = false; }

  getSubRegions (value) {
    this.region = value;
    this.httpClient.post('http://108.61.174.41:7070/api/location/view/SubRegionsInRegion', { 'id': value })
      .subscribe((data: any[]) => {
        this.subRegions = data;
      });
  }
  getSurburbs (value) {
    this.region = value;
    this.httpClient.post('http://108.61.174.41:7070/api/location/view/SuburbInSubRegion', { 'id': value })
      .subscribe((data: any[]) => {
        this.cities = data;
      });
  }
  // getSurburbs (value) {
  //   this.city = value;
  //   this.http.post('http://108.61.174.41:7070/api/location/view/SuburbInSubRegion', { 'id': value })
  //     .subscribe((data: any[]) => {
  //       this.suburbs = data;
  //     });
  // }
  getCollectionPoint (value) {
    this.subregion = value;
    this.httpClient.post('http://108.61.174.41:7070/api/location/view/CollectionPointInSubRegion', { 'id': value })
      .subscribe((data: any[]) => {
        this.collectionPoints = data;
      });
  }
  setCollectionPoint(value) {
    this.collectionPoint = value;
  }
  setZinara(value) {
    this.zinaraPeriod = value;
  }
  setZbc(value) {
    this.zbcPeriod = value;
  }
  setSurburb(value) {
    this.surburb = value;
  }
  getIdrive() {
    const data = {
      'collectionType': (this.hasSelectedDelivery ? 'D' : 'C'),
      'insuranceCompany': this.selectInsuranceCompany,
      'insurancePeriod': this.selectInsurancePeriod,
      'insuranceType': this.selectInsuranceType,
      'requestChannel': 'web',
      'vehicleRegistrationNumber': this.vehicleRegistrationNumber,
      'vehicleValue': this.vehicleValue,
      'zbcPeriod': this.zbcPeriod,
      'zinaraPeriod': this.zinaraPeriod
    }
    ;
    this.httpClient.post('http://108.61.174.41:7070/api/orders/create/quoatation', data)
      .subscribe((response: any[]) => {
        console.log(response);
      });
  }
}
