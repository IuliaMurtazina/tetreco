import React from "react";
import classes from "./CategoriesItemMobile.module.scss";
import Link from "next/link";

const CategoriesItemMobile = ({ name }) => {
  return (
    <Link
      href="/"
      className={classes.item}
    >
      {name}
    </Link>
  );
};

export default CategoriesItemMobile;
