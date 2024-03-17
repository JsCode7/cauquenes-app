import { PhotoProps } from "../interfaces/place.interface";

export const joinPhotosUri = (photos?: PhotoProps[]): string[] => {
    const googlePlacesApi: any = process.env.GOOGLE_PLACES_API;
    const configApi: any = process.env.CONFIG_IMAGES_APIKEY;

    return (photos ?? []).map(photo => {
        const url = `${googlePlacesApi}${photo.name}${configApi}`;
        return url;    
        }
    );
};