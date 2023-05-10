import React from "react";
import { Button, TextField, InputAdornment, Autocomplete } from "@mui/material";
import Icon from "@/components/ui/icons/Icon";
import classes from "./SearchBar.module.scss";
import { buttonPalette } from "@/theme/overrides/palette";

const SearchBar = () => {
  return (
    <div className={classes.searchBar}>
      <Button
        size="large"
        variant="contained"
        startIcon={<Icon iconId="format_list_bulleted" />}
      >
        Категории
      </Button>
      <div className={classes.search}>
        <TextField
          placeholder="Поиск"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon iconId="search" />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root fieldset": {
              borderColor: buttonPalette.secondary.enabled,
            },
            ".MuiInputBase-root": {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          }}
        />
        <Button
          size="large"
          startIcon={<Icon iconId="search" />}
          search
        >
          Поиск
        </Button>
      </div>
      <Button
        size="large"
        variant="contained"
      >
        Разместить объявление
      </Button>
    </div>
  );
};

export default SearchBar;
