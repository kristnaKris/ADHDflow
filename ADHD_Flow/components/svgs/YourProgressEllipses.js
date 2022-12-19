import React from "react";
import { SvgXml } from "react-native-svg";  
export default function YourProgressEllipses(){  
  const svgMarkup = `<svg width="364" height="192" viewBox="0 0 364 192" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Group 6914">
  <g id="Group 6922" clip-path="url(#clip0_1_598)">
  <ellipse id="Ellipse 129" cx="213.801" cy="156.406" rx="4.40323" ry="4.88542" fill="#FFC000"/>
  <ellipse id="Ellipse 128" cx="192.274" cy="163.385" rx="4.40322" ry="4.88542" fill="#FFC000"/>
  <ellipse id="Ellipse 127" cx="174.661" cy="155.01" rx="4.40322" ry="4.88542" fill="#FFC000"/>
  <ellipse id="Ellipse 125" cx="98.3384" cy="138.26" rx="4.40323" ry="4.88542" fill="#FFC000"/>
  <ellipse id="Ellipse 126" cx="121.822" cy="132.677" rx="4.40322" ry="4.88542" fill="#FFC000"/>
  <g id="Ellipse 124" clip-path="url(#clip1_1_598)">
  <ellipse id="Ellipse 124_2" cx="55.2846" cy="188.51" rx="12.2312" ry="14.6562" fill="#FED48B"/>
  </g>
  <ellipse id="Ellipse 126_2" cx="150.199" cy="139.656" rx="12.2312" ry="14.6562" fill="#FFC000"/>
  <ellipse id="Ellipse 125_2" cx="77.79" cy="153.615" rx="4.40323" ry="4.88542" fill="#FFC000"/>
  </g>
  <ellipse id="Ellipse 127_2" cx="249.027" cy="112.885" rx="4.40323" ry="4.88542" fill="#FFC000"/>
  <ellipse id="Ellipse 126_3" cx="233.371" cy="134.656" rx="12.2312" ry="14.6562" fill="#FFC000"/>
  </g>
  <defs>
  <linearGradient id="paint0_linear_1_598" x1="182" y1="0" x2="182" y2="192" gradientUnits="userSpaceOnUse">
  <stop stop-color="#8952FF" stop-opacity="0.89"/>
  <stop offset="1" stop-color="#3E1F94" stop-opacity="0.57"/>
  </linearGradient>
  <clipPath id="clip0_1_598">
  <rect width="175.151" height="67" fill="white" transform="translate(43.0535 125)"/>
  </clipPath>
  <clipPath id="clip1_1_598">
  <rect width="24.4624" height="29.3125" fill="white" transform="translate(43.0535 173.854)"/>
  </clipPath>
  </defs>
  </svg>
  
`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="280" />;  

  return <SvgImage />;
}