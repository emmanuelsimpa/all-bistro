import * as React from "react";
import Svg, { Text, Rect, Path } from "react-native-svg";

export default function SvgComponent(props) {
  return (
    <Svg height="15" width="15" viewBox="0 0 21 20">
      <Path
        d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
      l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"
        fill="#ca8a04"
      />
    </Svg>
  );
}

export const OpenComponent = () => {
  return (
    <Svg height="100%" width="100%" viewBox="0 0 320 320">
      <Rect x="0" y="0" width="320" height="320" fill="white" />
      <Path d="M20,20 H280 V280 H20 Z" fill="black" />
      <Text x="140" y="140" font-size="72px" fill="red">
        OPEN
      </Text>
    </Svg>
  );
};
