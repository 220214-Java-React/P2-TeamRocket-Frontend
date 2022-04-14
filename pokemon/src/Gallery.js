import React from "react";
import Imgix from "react-imgix";

const images = [
  "ash",
  "brock",
  "misty",
  "surge",
  "erika",
  "koga",
  "sabrina"
];

const buildURL = imagePath =>
`https://raw.githubusercontent.com/crouther/test/main/${imagePath}.jpg`;

export const Gallery = () => (
  <div className="gallery">
    {images.map(image => (
      <Imgix
        sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
        src={buildURL(image)}
        key={image}
        imgixParams={{
          fit: "",
          fm: "jpg"
        }}
        width="393"
        height="700"
      />
      
    ))}
  </div>
);
