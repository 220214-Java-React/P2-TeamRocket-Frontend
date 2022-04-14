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


function PIMG(jarr){
  for (let i = 0; i < jarr.length; i++){
    images.push(jarr[i].images);
  }
}

function getIMG(){
	fetch("http://localhost:8080/myuser",{
			method: "get",
	})
	.then((response) => response.json())
	.then((jarr) => PIMG(jarr));	
}



const buildURL = imagePath =>
`https://raw.githubusercontent.com/crouther/test/main/${imagePath}.jpg`;

export const Gallery = () => (
  <div className="gallery">
    {getIMG()}
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
