import { Injectable } from '@angular/core';
//import { Http, Headers } from '@angular/http';
//import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private username= 'string';
  private clientid = '5efeb74a7e251cc01d6a';
  private clientsecret = '6181e12fb8ea4387e0886f121f2d66130b984ad9';
  //client secret: string;

  constructor(private http:HttpClient) { 
    console.log("service working");
    this.username = 'Rodgersouko';
  }
  getdata() {
    return this.http.get("https://api.github.com/users/ " + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      // .map(res => res.json());
  }
}
 