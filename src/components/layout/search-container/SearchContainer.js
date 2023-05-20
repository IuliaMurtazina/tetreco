import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import Icon from "@/components/ui/icons/Icon";
import classes from "./SearchContainer.module.scss";
import { useMediaQuery } from "@mui/material";
import ButtonCategories from "./ButtonCategories/ButtonCategories";
import ButtonAd from "./ButtonAd/ButtonAd";
import SearchBar from "./SearchBar/SearchBar";

const SearchContainer = () => {
  const tabletBig = useMediaQuery((theme) =>
    theme.breakpoints.down("tabletBig"),
  );

  return (
    <div className={`${classes.search} container`}>
      {!tabletBig && (
        <>
          <ButtonCategories />
          <SearchBar />
          <ButtonAd />
        </>
      )}

      {tabletBig && (
        <TextField
          fullWidth
          placeholder="Search"
          size="s-m"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon iconId="search" />
              </InputAdornment>
            ),
          }}
        />
      )}
    </div>
  );
};

export default SearchContainer;
