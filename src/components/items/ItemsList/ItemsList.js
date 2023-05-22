import React from "react";
import classes from "./ItemsList.module.scss";
import Item from "../Item/Item";
import { useSelector } from "react-redux";

const ItemsList = ({ items }) => {
  const view = useSelector((state) => state.items.view);
  const viewClassName = view ? "module" : "list";

  return (
    <div className={`${classes.list} ${classes[`list__${viewClassName}`]}`}>
      {items.map((item) => (
        <Item
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          created={item.created}
          viewClassName={viewClassName}
        />
      ))}
    </div>
  );
};

export default ItemsList;
