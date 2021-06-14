export interface Region {
  id: string | undefined;
  iso2code: string | undefined;
  value: string | undefined;
}
export interface Adminregion {
  id: string | undefined;
  iso2code: string | undefined;
  value: string | undefined;
}
export interface LendingType {
  id: string | undefined;
  iso2code: string | undefined;
  value: string | undefined;
}
export interface IncomeLevel {
  id: string | undefined;
  iso2code: string | undefined;
  value: string | undefined;
}

export interface Country {
  id: string | undefined;
  iso2Code: string | undefined;
  name: string | undefined;
  region: Region | undefined;
  adminregion: Adminregion | undefined;
  incomeLevel: IncomeLevel | undefined;
  lendingType: LendingType | undefined;
  capitalCity: string | undefined;
  longitude: string | undefined;
  latitude: string | undefined;
}
