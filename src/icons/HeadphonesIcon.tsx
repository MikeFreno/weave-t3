import React from "react";

const HeadphonesIcon = (props: {
  height: number;
  width: number;
  color: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={props.height}
      width={props.width}
      fill={props.color}
    >
      <path d="M512 287.734V399.875C512 444.055 476.111 480 432 480C405.533 480 384 458.438 384 431.938V304.062C384 277.562 405.533 256 432 256C442.826 256 452.9 258.643 462.287 262.598C449.697 159.871 362.072 80 256 80S62.303 159.871 49.713 262.598C59.1 258.643 69.174 256 80 256C106.467 256 128 277.562 128 304.062V431.938C128 458.438 106.467 480 80 480C35.889 480 0 444.055 0 399.875V288C0 146.844 114.844 32 256 32C396.922 32 511.582 146.469 511.965 287.305C511.971 287.451 511.994 287.588 512 287.734Z" />
    </svg>
  );
};

export default HeadphonesIcon;
