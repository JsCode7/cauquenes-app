export interface Place {
    Place?: string;
    Address?: string | null;
    MapsUrl?: string;
    Category?: string;
    ImagePath?: string | undefined;
  }

  export interface PhotoProps {
    _id?: string;
    name?: string;
    widthPx?: number;
    heightPx?: number;
    authorAttributions?: AuthorAttributionsProps[];
  }

  export interface AuthorAttributionsProps {
    _id?: string;
    displayName?: string;
    uri?: string;
    photoUri?: string;
  }

  export interface FormattedPlaceProps {
    name?: {
      text: string;
      languageCode: string;
    };
    formatted_address?: string;
    google_maps_uri?: string;
    photos?: PhotoProps[];
    }[];



  