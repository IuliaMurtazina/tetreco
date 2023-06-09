import React from "react";
import classes from "./IconGrade.module.scss";

const IconGrade = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.grade}
    >
      <g clip-path="url(#clip0_666_27721)">
        <path d="M7.99996 11.5133L11.4466 13.5933C11.7 13.7466 12.0133 13.52 11.9466 13.2333L11.0333 9.31331L14.0733 6.67998C14.2933 6.48665 14.18 6.11998 13.88 6.09331L9.87329 5.75331L8.30662 2.05998C8.19329 1.78665 7.80662 1.78665 7.69329 2.05998L6.12662 5.75331L2.11996 6.09331C1.82662 6.11998 1.70662 6.48665 1.93329 6.67998L4.97329 9.31331L4.05996 13.2333C3.99329 13.52 4.30662 13.7466 4.55996 13.5933L7.99996 11.5133Z" />
      </g>
      <defs>
        <clipPath id="clip0_666_27721">
          <rect
            width="16"
            height="16"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconGrade;
