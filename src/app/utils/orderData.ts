import {
  FormattedPlaceProps,
  PhotoProps,
  AuthorAttributionsProps,
} from "@/app/interfaces/place.interface";

export const getDataCard = async () => {
  const apiKey: any = process.env.API_KEY;
  console.log("este es el api key", apiKey);
  try {
    const response = await fetch("http://localhost:3000/api/dbdata", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
      },
    });
    if (response.ok) {
      console.log("Response ok");
    } else {
      throw new Error("No se pudo obtener los datos.");
    }

    const data = await response.json();

    if (!data.places) {
      console.log(
        'La propiedad "places" en la respuesta es nula o no está definida.'
      );
      return [];
    }

    const formattedData: FormattedPlaceProps[] = data.places.map(
      (place: FormattedPlaceProps) => ({
        name: {
          text: place.name?.text,
          languageCode: place.name?.languageCode,
        },
        formatted_address: place.formatted_address,
        google_maps_uri: place.google_maps_uri,
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
      })
    );
    return formattedData;

  } catch (error) {
    console.log("Ha ocurrido un error al recuperar los lugares:", error);
    return null; // o podrías lanzar el error de nuevo si lo prefieres
  }
};
