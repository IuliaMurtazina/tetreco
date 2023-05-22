import React from "react";
import { Select, MenuItem } from "@mui/material";
import Icon from "@/components/ui/icons/Icon";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { CHANGE_ORDERING, SET_NEW_PAGE } from "@/store/reducers/items";

const SelectOrdering = ({ tablet }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const ordering = useSelector((state) => state.items.ordering);

  const handleChange = (event) => {
    dispatch(SET_NEW_PAGE(1));
    dispatch(CHANGE_ORDERING(event.target.value));
    router.push({
      pathname: "/",
      query: {
        ordering: event.target.value,
        page: 1,
      },
    });
  };

  return (
    <>
      {!tablet && (
        <Select
          value={ordering}
          displayEmpty
          size="medium"
          onChange={handleChange}
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
      )}

      {tablet && (
        <Select
          value={ordering}
          displayEmpty
          size="medium"
          onChange={handleChange}
          IconComponent={() => <Icon iconId="swap_vert" />}
          sx={{
            width: 210,
            svg: { fill: "currentColor", left: 10 },
            fieldset: { border: "none" },
            ".MuiSelect-select": { paddingLeft: "40px" },
          }}
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
      )}
    </>
  );
};

export default SelectOrdering;
