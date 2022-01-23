import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const Star = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="m8 1.8 2.4 4.8 4.8.6-3.296 3.696.896 5.304L8 13.8l-4.8 2.4.904-5.304L.8 7.2l4.8-.6L8 1.8Z"
        fill="#F99601"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Star;
