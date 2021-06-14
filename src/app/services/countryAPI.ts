import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Country } from "../module/country";

@Injectable()
export class countryApiServices {
  constructor(private httpclient: HttpClient) { }
  Root_URL = 'https://api.worldbank.org/v2/country';

  public getcountry(isoCode: any): Observable<Country[]> {
    return this.httpclient.get<Country[]>(this.Root_URL + '/' + isoCode + '?format=json');
  }
}
