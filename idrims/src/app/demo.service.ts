import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  private url: string = "../assets/vehicles.json";
  private agents_url: string = "../assets/agents.json";
  constructor(private http: HttpClient) { }
  getVehicles(){
    return this.http.get(this.url);
  }

  getAgents(){
    return this.http.get(this.agents_url);
  }
}
