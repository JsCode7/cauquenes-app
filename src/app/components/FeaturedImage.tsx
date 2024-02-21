import Image from "next/image";
import React from "react";

export default function FeaturedImage({
  imageUrlPath,
}: {
  imageUrlPath: string;
}) {
  return (
    <div className="px-[1.25rem]">
      <Image
        src={imageUrlPath}
        alt="featured image"
        className="w-[50rem] h-[28rem] rounded-lg"
        width={2000}
        height={1000}
        priority={true}
        quality={100}
      />
    </div>
  );
}
