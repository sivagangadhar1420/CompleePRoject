import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
   uri = '/registration';
  constructor(private http: HttpClient) { }
  addRegistration(hotelcode, hotelname, hotellocation) {
    const obj = {
      hotelcode: {hotelcode},
      hotelname: {hotelname},
      hotellocation: {hotellocation}
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}
