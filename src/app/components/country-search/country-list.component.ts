import { Component, OnInit } from '@angular/core';
import { countryApiServices } from 'src/app/services/countryAPI';
import { Country } from 'src/app/module/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})

export class CountryListComponent implements OnInit {

  lstcountry!: Country[];
  lstresult: any;
  submitMessage: any;
  componentName = "CountryList";

  constructor(private _countryServices: countryApiServices) {
  }

  ngOnInit(): void {
  }

  fetchCountryList(isoCodeVal: any) {
    console.log(isoCodeVal);
    this._countryServices.getcountry(isoCodeVal)
      .subscribe
      (
        data => {
          this.lstresult = data[1];
          this.lstcountry = this.lstresult;
          if (this.lstcountry == undefined) {
            this.submitMessage = "No records found. Please provide valid ISO code.";
          }
        }
      );
  }

  clearMessage() {
    this.submitMessage = "";
  }

  validation(isoCode: any) {
    this.submitMessage = "";
    if (isoCode.length >= 2 && isoCode.length <= 3) {
      if (!/[^a-zA-Z]/.test(isoCode)) {
        this.fetchCountryList(isoCode);
      }
      else {
        this.submitMessage = "Please enter only characters of length between 2 and 3.";
        this.lstcountry = [];
      }
    }
    else {
      this.submitMessage = "Please enter valid ISO code. Min characters of length between 2 and 3.";
      this.lstcountry = [];
    }
  }

  fetchCountryDetails(isoCode: string) {
    this.validation(isoCode);
  }

}
