import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = () => (
  <ContentLoader
    speed={5}
    width={800}
    height={160}
    viewBox="0 0 800 160"
    backgroundColor="#ff6161"
    foregroundColor="#61edff"
  >
    <rect x="125" y="104" rx="3" ry="3" width="298" height="9" />
    <rect x="122" y="70" rx="6" ry="6" width="620" height="27" />
    <rect x="236" y="115" rx="0" ry="0" width="14" height="0" />
    <rect x="763" y="72" rx="7" ry="7" width="34" height="24" />
    <circle cx="56" cy="91" r="53" />
  </ContentLoader>
);

export default Skeleton;
