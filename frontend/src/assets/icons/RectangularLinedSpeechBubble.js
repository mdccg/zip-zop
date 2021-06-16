import * as React from "react";
import Svg, { Defs, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

function SvgComponent(props) {
  return (
    <Svg
      id="prefix__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <Defs></Defs>
      <Path
        d="M448 51H64a64 64 0 00-64 64v328.21c0 15.85 19.16 23.79 30.37 12.58l46.43-46.43H448a64 64 0 0064-64V115a64 64 0 00-64-64z"
        fill="white"
      />
      <Path
        className="prefix__cls-2"
        d="M332.8 191.76H179.2a12.8 12.8 0 010-25.6h153.6a12.8 12.8 0 110 25.6zM332.8 243H179.2a12.8 12.8 0 110-25.6h153.6a12.8 12.8 0 110 25.6zM332.8 294.16H179.2a12.8 12.8 0 110-25.6h153.6a12.8 12.8 0 010 25.6z"
      />
    </Svg>
  );
}

export default SvgComponent;