import React from "react";

const XButton = ({ fill = "currentColor", stroke = "currentColor", ...props }) => {
return ( 
<svg 
width="60" 
height="60" 
viewBox="0 0 100 115" 
fill="currentColor"
className="x-button">

<g opacity="0.55">
<line x1="5.62933" y1="4.55736" x2="91.5574" y2="109.371" 
stroke="currentColor" 
stroke-width="8" 
stroke-linecap="round"/>
<line x1="4" y1="-4" x2="139.534" y2="-4" 
transform="matrix(-0.633996 0.773336 0.773336 0.633996 100 4)" 
stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
</g>
</svg>
);
};

export default XButton;