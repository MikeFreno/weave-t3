import React from "react";

const FlipMessageIcon = (props: {
  height: string | number | undefined;
  width: string | number | undefined;
  fill: string | undefined;
  stroke?: string | undefined;
  content: any;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={props.height}
      width={props.width}
    >
      <path
        fill={props.fill}
        stroke={props.stroke}
        d="M448 96.033H336.025L268.801 6.4C265.6 2.133 260.801 0 256 0S246.4 2.133 243.199 6.4L175.975 96.033H64C28.75 96.033 0 124.781 0 160.029V448.006C0 483.252 28.75 512 64 512H448C483.25 512 512 483.252 512 448.006V160.029C512 124.781 483.25 96.033 448 96.033ZM464 448.006C464 456.676 456.674 464 448 464H64C55.326 464 48 456.676 48 448.006V160.029C48 151.359 55.326 144.033 64 144.033H199.975L256 69.332L312.025 144.033H448C456.674 144.033 464 151.359 464 160.029V448.006Z "
      ></path>
    </svg>
  );
};

export default FlipMessageIcon;
