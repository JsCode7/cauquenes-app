import {
  FormattedPlaceProps,
  PhotoProps,
  AuthorAttributionsProps,
} from "@/app/interfaces/place.interface";

const formatPlaceData = (data: any[]): FormattedPlaceProps[] => {
  const formattedData = data.map((place: FormattedPlaceProps) => ({
    name: {
      text: place.name?.text || "",
      languageCode: place.name?.languageCode || "",
    },
    formatted_address: place.formatted_address || "",
    google_maps_uri: place.google_maps_uri || "",
    photos: place.photos?.map((photo: PhotoProps) => ({
      _id: photo._id,
      name: photo.name,
      widthPx: photo.widthPx,
      heightPx: photo.heightPx,
      authorAttributions: photo.authorAttributions?.map(
        (author: AuthorAttributionsProps) => ({
          displayName: author.displayName,
        })
      ),
    })),
  }));
  return formattedData;
};

export const getAllData = async () => {
  const apiKey: any = process.env.API_KEY;
  const apiUrl: any = process.env.API_URL;
  try {
    const response = await fetch(`${apiUrl}/dbdata`, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
      },
    });
    if (!response.ok) {
      throw new Error("No se pudo obtener los datos.");
    }

    const data = await response.json();

    if (!data.places) {
      console.log(
        'La propiedad "places" en la respuesta es nula o no está definida.'
      );
      return [];
    }

    return formatPlaceData(data.places);

  } catch (error) {
    console.log("Ha ocurrido un error al recuperar los lugares:", error);
    return null;
  }
};

export const getEmergencyData = async () => {
  const apiKey: any = process.env.API_KEY;
  const apiUrl: any = process.env.API_URL;

  try {
    const response = await fetch(`${apiUrl}/categories/emergency`, {
      method: "POST",
      headers: { "x-api-key": apiKey },
    });
    if (!response.ok) {
      throw new Error("No se pudo obtener los datos.");
    }
    const data = await response.json();

    if (!data.emergencies) {
      console.log(
        'La propiedad "emergencies" en la respuesta es nula o no está definida.'
      );
      return [];
    }

    return formatPlaceData(data.emergencies);

  } catch (error) {
    console.log("Ha ocurrido un error al recuperar los lugares:", error);
    return null;
  }
};

export const getMarketsData = async () => {
  const apiKey: any = process.env.API_KEY;
  const apiUrl: any = process.env.API_URL;
  try {
    const response = await fetch(`${apiUrl}/categories/markets`, {
      method: "POST",
      headers: { "x-api-key": apiKey },
    });
    if (!response.ok) {
      throw new Error("No se pudo obtener los datos.");
    }

    const data = await response.json();

    if (!data.markets) {
      console.log(
        'La propiedad "markets" en la respuesta es nula o no está definida.'
      );
      return [];
    }

    return formatPlaceData(data.markets);

  } catch (error) {
    console.log("Ha ocurrido un error al recuperar los lugares:", error);
    return null;
  }
};

export const getParksData = async () => {
  const apiKey: any = process.env.API_KEY;
  const apiUrl: any = process.env.API_URL;
  try {
    const response = await fetch(`${apiUrl}categories/parks`, {
      method: "POST",
      headers: { "x-api-key": apiKey },
    });
    if (!response.ok) {
      throw new Error("No se pudo obtener los datos.");
    }

    const data = await response.json();

    if (!data.parks) {
      console.log(
        'La propiedad "parks" en la respuesta es nula o no está definida.'
      );
      return [];
    }

    return formatPlaceData(data.parks);

  } catch (error) {
    console.log("Ha ocurrido un error al recuperar los lugares:", error);
    return null;
  }
};

export const getServicesData = async () => {
  const apiKey: any = process.env.API_KEY;
  const apiUrl: any = process.env.API_URL;
  try {
    const response = await fetch(`${apiUrl}/categories/services`, {
      method: "POST",
      headers: { "x-api-key": apiKey
      },
    });
    if (!response.ok) {
      throw new Error("No se pudo obtener los datos.");
    }

    const data = await response.json();

    if (!data.services) {
      console.log(
        'La propiedad "services" en la respuesta es nula o no está definida.'
      );
      return [];
    }

    return formatPlaceData(data.services);

  } catch (error) {
    console.log("Ha ocurrido un error al recuperar los lugares:", error);
    return null;
  }
};

export const getSportsData = async () => { 
  const apiKey: any = process.env.API_KEY;
  const apiUrl: any = process.env.API_URL;
  try {
    const response = await fetch(`${apiUrl}/categories/sports`, {
      method: "POST",
      headers: { "x-api-key": apiKey },
    });
    if (!response.ok) {
      throw new Error("No se pudo obtener los datos.");
    }

    const data = await response.json();

    if (!data.sports) {
      console.log(
        'La propiedad "sports" en la respuesta es nula o no está definida.'
      );
      return [];
    }

    return formatPlaceData(data.sports);

  } catch (error) {
    console.log("Ha ocurrido un error al recuperar los lugares:", error);
    return null;
  }
};
