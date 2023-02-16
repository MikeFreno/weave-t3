import React from "react";

function CameraIcon(props: { height: number; width: number; color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      height={props.height}
      width={props.width}
      fill={props.color}
    >
      <path d="M558.766 99.641C548.172 94.156 535.438 94.953 525.656 101.812L422.828 173.781C415.578 178.844 413.828 188.828 418.891 196.062C423.953 203.312 433.906 205.047 441.172 200L544 128.031V383.969L441.172 312C433.906 306.953 423.953 308.688 418.891 315.938C413.828 323.172 415.578 333.156 422.828 338.219L525.641 410.188C531.141 414.031 537.547 415.984 543.984 415.984C549.031 415.984 554.109 414.781 558.766 412.359C569.406 406.828 576 395.953 576 383.969V128.031C576 116.047 569.406 105.172 558.766 99.641ZM320 64H64C28.654 64 0 92.654 0 128V384C0 419.346 28.654 448 64 448H320C355.346 448 384 419.346 384 384V128C384 92.654 355.346 64 320 64ZM352 384C352 401.645 337.645 416 320 416H64C46.355 416 32 401.645 32 384V128C32 110.355 46.355 96 64 96H320C337.645 96 352 110.355 352 128V384Z" />
    </svg>
  );
}

export default CameraIcon;