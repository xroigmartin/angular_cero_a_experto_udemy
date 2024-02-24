import { Region } from "./Region.type";
import { Country } from "./country";

export interface cacheStore {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegionCountries;
}

export interface TermCountries {
  term:string;
  countries: Country[];
}

export interface RegionCountries{
  region: Region;
  countries: Country[];
}
