import * as React from 'react';
import Svg, { Path, Line, Defs, ClipPath, G } from 'react-native-svg';

function SearchIcon({ size = 24, fill, ...props }) {
  return (
    <Svg height={size} role="img" viewBox="0 0 24 24" width={size} {...props}>
      <Path
        d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Line
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="16.511"
        x2="22"
        y1="16.511"
        y2="22"
      />
    </Svg>
  );
}

function SearchFilled({ size = 24, ...props }) {
  return (
    <Svg height={size} role="img" viewBox="0 0 48 48" width={size} {...props}>
      <Path d="M47.6 44L35.8 32.2C38.4 28.9 40 24.6 40 20 40 9 31 0 20 0S0 9 0 20s9 20 20 20c4.6 0 8.9-1.6 12.2-4.2L44 47.6c.6.6 1.5.6 2.1 0l1.4-1.4c.6-.6.6-1.6.1-2.2zM20 35c-8.3 0-15-6.7-15-15S11.7 5 20 5s15 6.7 15 15-6.7 15-15 15z" />
    </Svg>
  );
}

function Movie(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#a)">
        <Path
          d="m23.036 10.296-.001-.002v.002Zm.188-.53.002-.001h-.002Zm-3.28-2.004 2.471 2.014h-1.75v12.26a.457.457 0 0 1-.453.458h-4.47c-.275 0-.49-.24-.49-.458V17.42c0-.882-.673-1.757-1.69-1.757H10.51c-.943 0-1.763.8-1.763 1.757v4.617c0 .292-.2.458-.417.458H3.788a.457.457 0 0 1-.454-.458V9.776h-1.75l9.973-8.13a.699.699 0 0 1 .44-.14c.194 0 .349.063.446.142l4.012 3.27 1.632 1.33V3.273h1.489V7.46l.368.3ZM.774 9.765h.002-.002Zm.191.53Z"
          stroke="#ACADB1"
          strokeWidth={2}
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function MovieFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#a)">
        <Path
          d="m23.578 9.434-3.002-2.448V3.072a.8.8 0 0 0-.8-.8h-1.89a.8.8 0 0 0-.799.8v1.071L13.075.873a1.704 1.704 0 0 0-1.077-.367c-.403 0-.784.13-1.073.365L.422 9.434c-.478.389-.45.727-.39.895.06.167.251.447.864.447h1.438v11.26c0 .804.652 1.458 1.454 1.458H8.33c.795 0 1.417-.64 1.417-1.458V17.42c0-.396.364-.757.763-.757h3.053c.38 0 .69.34.69.757v4.617c0 .79.682 1.458 1.49 1.458h4.47c.8 0 1.453-.654 1.453-1.458v-11.26h1.438c.613 0 .804-.28.864-.447.06-.168.088-.506-.39-.895Z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function Bookmark(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#a)">
        <Path
          d="M4.074 23a.051.051 0 0 1-.024-.005.043.043 0 0 1-.016-.014.587.587 0 0 1-.089-.344v-20.6c0-.504.5-1.037 1.13-1.037H19a1.06 1.06 0 0 1 1.055 1.037v20.6c0 .142-.02.234-.039.288a.238.238 0 0 1-.037.075h-.003c-.009 0-.108 0-.315-.177v-.001l-6.209-5.288a2.174 2.174 0 0 0-1.405-.498c-.49 0-1.006.157-1.404.497l-.002.001-6.228 5.288-.002.002c-.188.16-.311.176-.337.176Z"
          stroke="#ACADB1"
          strokeWidth={2}
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function BookmarkFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#a)">
        <Path
          d="M19 0H5.075c-1.134 0-2.13.933-2.13 2.037v20.6c0 .37.103.677.269.915.198.285.518.448.86.448.324 0 .668-.144.987-.416l6.23-5.29c.192-.164.468-.258.756-.258.287 0 .563.094.756.259l6.21 5.288c.318.273.64.417.962.417.547 0 1.08-.421 1.08-1.363v-20.6C21.055.933 20.135 0 19 0Z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
function ProfileIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        fill="#ACADB1"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0ZM2.182 12c0 2.28.777 4.379 2.081 6.046a9.803 9.803 0 0 1 7.807-3.864 9.801 9.801 0 0 1 7.737 3.772A9.775 9.775 0 0 0 21.818 12c0-5.422-4.396-9.818-9.818-9.818S2.182 6.578 2.182 12ZM12 21.818c-2.346 0-4.5-.823-6.188-2.195a7.627 7.627 0 0 1 6.258-3.26 7.627 7.627 0 0 1 6.207 3.187A9.78 9.78 0 0 1 12 21.818Z"
        fill="#ACADB1"
      />
    </Svg>
  );
}

function ProfileFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0ZM2.182 12c0 2.28.777 4.379 2.081 6.046a9.803 9.803 0 0 1 7.807-3.864 9.801 9.801 0 0 1 7.737 3.772A9.775 9.775 0 0 0 21.818 12c0-5.422-4.396-9.818-9.818-9.818S2.182 6.578 2.182 12ZM12 21.818c-2.346 0-4.5-.823-6.188-2.195a7.627 7.627 0 0 1 6.258-3.26 7.627 7.627 0 0 1 6.207 3.187A9.78 9.78 0 0 1 12 21.818Z"
        fill="#fff"
      />
    </Svg>
  );
}

export { SearchIcon, SearchFilled, Movie, MovieFill, Bookmark, BookmarkFill, ProfileIcon, ProfileFill };
