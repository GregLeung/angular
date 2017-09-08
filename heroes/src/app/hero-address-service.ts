import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

@Injectable()
export class HeroAddressService {
  private addressesUrl = "../asset/addresses.json"
  constructor(
    private http:Http
  ){}
  getAddresses(){
      return this.http.get(this.addressesUrl)
                      .map(res => res.json());
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
