import React from "react";

function AddIcon(props: {
  height: number;
  width: number;
  stroke: string;
  strokeWidth: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={props.strokeWidth}
      stroke={props.stroke}
      height={props.height}
      width={props.width}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}

export default AddIcon;
