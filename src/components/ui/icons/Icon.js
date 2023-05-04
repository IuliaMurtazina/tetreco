import React from "react";
import classes from "./Icon.module.scss";

const Icon = (props) => {
  return (
    <svg className={classes.icon}>
      <use xlinkHref={`/svg/sprite.svg#${props.iconLabel}`} />
    </svg>
  );
};

export default Icon;
