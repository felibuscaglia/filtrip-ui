export interface IPhoto {
  id: number;
  url: string;
}

interface ICountry {
  id: number;
  name: string;
  urlSlug: string;
}

export interface ICity {
  name: string;
  urlSlug: string;
  region: string;
  photos: IPhoto[];
  country: ICountry;
}
