import { placesData } from "../data/data.js";
import FeaturedImage from "../components/FeaturedImage";

export default function Page({ params}: { params: { slug: string } }) {
  const reformTitle = params.slug?.replace(/-/g, ' ') || '';
  const imageUrl = placesData.reduce((foundUrl, place) => {
    if (place.Place.toLowerCase() === reformTitle.toLowerCase()) {
      return place.ImagePath || foundUrl;
    }
    return foundUrl;
  }, '');
  
  return (
    <div className="w-full flex flex-col items-center">
      {imageUrl && <FeaturedImage imageUrlPath={imageUrl} />}
      <h1 className="text-4xl font-bold mt-10">{reformTitle}</h1>
    </div>
  )
}