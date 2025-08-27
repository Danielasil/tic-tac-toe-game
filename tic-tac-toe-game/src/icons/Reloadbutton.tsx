
import React from "react";

const ReLoadButton = ({ fill = "none", stroke = "currentColor", ...props }) => {
  return ( 
<svg 
width="28"
height="28"
viewBox="0 0 57 65" 
fill="none"
className="button-reload"
>
<path d="M49.8341 22.8022C53.506 28.4564 58.1081 42.7147 47.1413 54.5148C33.4329 69.2648 10.1776 60.1689 4.54723 44.9272C-0.367444 31.6228 5.77118 10.7563 32.4537 11.0022" 
stroke="currentColor" 
stroke-width="5" 
stroke-linecap="round"/>
<path d="M33 11L18 3.00011" 
stroke="currentColor" 
stroke-width="5" 
stroke-linecap="round"/>
<path d="M21 23L33 11" 
stroke="currentColor" 
stroke-width="5" 
stroke-linecap="round"/>
</svg>
);
};

export default ReLoadButton;