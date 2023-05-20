import React from "react";
import classes from "./ItemsList.module.scss";
import Item from "../Item/Item";

const ItemsList = ({ items }) => {
  return (
    <div className={classes.list}>
      {items.map((item) => (
        <Item
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          created={item.created}
        />
      ))}
    </div>
  );
};

export default ItemsList;
