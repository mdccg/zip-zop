import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={408}
      height={408}
      viewBox="0 0 408 408"
      {...props}
    >
      <Path d="M204 102c28.05 0 51-22.95 51-51S232.05 0 204 0s-51 22.95-51 51 22.95 51 51 51zm0 51c-28.05 0-51 22.95-51 51s22.95 51 51 51 51-22.95 51-51-22.95-51-51-51zm0 153c-28.05 0-51 22.95-51 51s22.95 51 51 51 51-22.95 51-51-22.95-51-51-51z" />
    </Svg>
  );
}

export default SvgComponent;