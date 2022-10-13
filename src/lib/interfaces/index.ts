import { CONTINENT } from "lib/enums";

export interface IPhoto {
  id: number;
  url: string;
}

interface ICountry {
  id: number;
  name: string;
  urlSlug: string;
  continent: CONTINENT;
}

export interface ICity {
  name: string;
  urlSlug: string;
  region: string;
  photos: IPhoto[];
  country: ICountry;
}
