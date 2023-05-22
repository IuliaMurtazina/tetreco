import React from "react";
import classes from "./Item.module.scss";
import IconFavorite from "@/components/ui/icons/IconFavorite";

const Item = ({ image, name, price, created, viewClassName }) => {
  const date = new Date(created).toLocaleDateString();
  const time = new Date(created).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`${classes.item} ${classes[`item__${viewClassName}`]}`}>
      <IconFavorite
        selected={false}
        className={`${classes.icon} ${classes[`icon__${viewClassName}`]}`}
      />
      <img
        src={image}
        alt={name}
      />

      <div
        className={`${classes.content} ${classes[`content__${viewClassName}`]}`}
      >
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>{price && `${price} ₽`}</span>
        <span className={classes.date}>{`${date} at ${time}`}</span>
      </div>
    </div>
  );
};

export default Item;
