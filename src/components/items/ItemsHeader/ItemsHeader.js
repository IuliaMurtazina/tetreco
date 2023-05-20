import React from "react";
import classes from "./ItemsHeader.module.scss";
import { Switch, Select, MenuItem } from "@mui/material";
import Icon from "@/components/ui/icons/Icon";
import { useDispatch, useSelector } from "react-redux";
import { sortItems } from "@/store/reducers/items";

const ItemsHeader = () => {
  const sort = useSelector((state) => state.items.sort);
  const dispath = useDispatch();
  const handleChange = (event) => {
    dispath(sortItems(event.target.value));
    // router.push(`${`ordering=${sort}&`}page=1`);
  };

  return (
    <div className={classes.header}>
      <h2>Popular items</h2>
      <div className={classes.actions}>
        <Switch
          defaultChecked
          mode="viewList"
          icon={<Icon iconId="view_list" />}
          checkedIcon={<Icon iconId="view_module" />}
        />
        <Select
          value={sort}
          displayEmpty
          size="medium"
          onChange={handleChange}
          inputProps={{ "aria-label": "Without label" }}
          IconComponent={() => <Icon iconId="expand_more" />}
        >
          <MenuItem
            style={{ display: "none" }}
            value=""
            disabled
          >
            Sort
          </MenuItem>
          <MenuItem value="name">By title</MenuItem>
          <MenuItem value="price">By price</MenuItem>
          <MenuItem value="date">By date</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default ItemsHeader;
