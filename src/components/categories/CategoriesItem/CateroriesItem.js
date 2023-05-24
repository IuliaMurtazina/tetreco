import React from "react";
import classes from "./CategoriesItem.module.scss";
import Image from "next/image";
// import { useRouter } from "next/router";

const CateroriesItem = ({ image, name }) => {
  // const router = useRouter();
  return (
    <div
      className={classes.item}
      // onClick={() => router.push("/")}
    >
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
      />
      <span>{name}</span>
    </div>
  );
};

export default CateroriesItem;
