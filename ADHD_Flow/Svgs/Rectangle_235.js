import React from "react";
import { SvgXml } from "react-native-svg";  
export default function Rectangle_235(){  
  const svgMarkup = `<svg width="161" height="226" viewBox="0 0 161 226" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="161" height="226" rx="25" fill="#7B61FF"/>
  </svg>
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="50%" />;  

  return <SvgImage />;
}
