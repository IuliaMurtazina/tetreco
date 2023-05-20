import React from "react";
import classes from "./Item.module.scss";
import Image from "next/image";
import IconFavorite from "@/components/ui/icons/IconFavorite";

const Item = ({ image, name, price, created }) => {
  const date = new Date(created).toLocaleDateString();
  const time = new Date(created).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={classes.item}>
      <IconFavorite selected={false} />
      <Image
        width={280}
        height={210}
        src={image}
        alt="a"
        style={{ objectFit: "cover" }}
      />
      <div className={classes.content}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>{price && `${price} ₽`}</span>
        <span className={classes.date}>{`${date} at ${time}`}</span>
      </div>
    </div>
  );
};

export default Item;
