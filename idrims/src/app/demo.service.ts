import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  body: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  //private url: string = "http://108.61.174.41:7070/api/vehicles/view/all";
  private createVehile: string = "http://108.61.174.41:7070/api/vehicles/create";
  private agents_url: string = "../assets/agents.json";
  
  constructor(private http: HttpClient) { }
  get(url:string){
    return this.http.get(url);
  }

  post(url:string,body: any){
    return this.http.post(url,body,this.httpOptions);
  }
}
