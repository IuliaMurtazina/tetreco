import React from "react";
import classes from "./ItemsHeader.module.scss";
import { Switch, TextField, InputAdornment } from "@mui/material";
import Icon from "@/components/ui/icons/Icon";
import { useDispatch } from "react-redux";
import { SET_VIEW_MODE_LIST } from "@/store/reducers/items";
import { useMediaQuery } from "@mui/material";
import SelectOrdering from "./SelectOrdering/SelectOrdering";

const ItemsHeader = () => {
  const dispatch = useDispatch();
  const tablet = useMediaQuery((theme) => theme.breakpoints.down("tablet"));

  return (
    <div className={classes.header}>
      <h2 className={classes.heading}>Popular items</h2>
      <div className={classes.actions}>
        <Switch
          defaultChecked
          mode="viewList"
          icon={<Icon iconId="view_list" />}
          checkedIcon={<Icon iconId="view_module" />}
          onChange={(event, checked) => dispatch(SET_VIEW_MODE_LIST(checked))}
        />
        <SelectOrdering tablet={tablet} />
      </div>
    </div>
  );
};

export default ItemsHeader;
