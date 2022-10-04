export interface IPhoto {
  id: number;
  url: string;
}

export interface ICity {
  name: string;
  urlSlug: string;
  photos: IPhoto[];
}
