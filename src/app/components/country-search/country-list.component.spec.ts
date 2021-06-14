import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CountryListComponent } from './country-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { countryApiServices } from 'src/app/services/countryAPI';
import { Country } from 'src/app/module/country';

describe('CountryListComponent', () => {
  let component: CountryListComponent;
  let fixture: ComponentFixture<CountryListComponent>;
  let httpTestCtrl: HttpTestingController;
  let dataService: countryApiServices;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryListComponent],
      imports: [HttpClientTestingModule],
      providers: [countryApiServices]
    })
      .compileComponents();
  });

  beforeEach(() => {
    dataService = TestBed.get(countryApiServices);
    httpTestCtrl = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(CountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Component Name", () => {
    expect(component.componentName).toBe("CountryList");
  });

  it("Service should be createed", inject([countryApiServices], (service: countryApiServices) => {
    expect(service).toBeTruthy();
  }),
  );

  it('should test HttpClient.get', () => {
    const testPost: Country[] = [
      {
        "id": "BRA",
        "iso2Code": "BR",
        "name": "Brazil",
        "region": {
          "id": "LCN",
          "iso2code": "ZJ",
          "value": "Latin America & Caribbean (all income levels)"
        },
        "adminregion": {
          "id": "LAC",
          "iso2code": "XJ",
          "value": "Latin America & Caribbean (developing only)"
        },
        "incomeLevel": {
          "id": "UMC",
          "iso2code": "XT",
          "value": "Upper middle income"
        },
        "lendingType": {
          "id": "IBD",
          "iso2code": "XF",
          "value": "IBRD"
        },
        "capitalCity": "Brasilia",
        "longitude": "-47.9292",
        "latitude": "-15.7801"
      }
    ];
    dataService.getcountry('BR').subscribe((posts) => {
      expect(testPost).toBe(posts, 'should check mocked data');
    });
    const req = httpTestCtrl.expectOne(dataService.Root_URL + '/BRA?format=json')

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testPost);
  });


});
