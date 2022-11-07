import React from "react";
import { SvgXml } from "react-native-svg";  
export default function Group_6918(){  
  const svgMarkup = `<svg width="161" height="226" viewBox="0 0 161 226" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_312_903)">
  <rect width="161" height="226" rx="25" fill="url(#paint0_linear_312_903)"/>
  </g>
  <defs>
  <linearGradient id="paint0_linear_312_903" x1="80.5" y1="0" x2="80.5" y2="226" gradientUnits="userSpaceOnUse">
  <stop stop-color="#93E2ED"/>
  <stop offset="0.497917" stop-color="#303FCE"/>
  <stop offset="1" stop-color="#7530CE"/>
  </linearGradient>
  <clipPath id="clip0_312_903">
  <rect width="161" height="226" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="50%" />;  

  return <SvgImage />;
}
