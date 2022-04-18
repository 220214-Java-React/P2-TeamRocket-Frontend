import React from "react";
import { Background } from "react-imgix";

export const BannerIMG = () => (
  <Background
    src="https://raw.githubusercontent.com/crouther/test/main/loading.png"
    className="banner-img"
  >
    <h2>Player Gallery</h2>
  </Background>
);
