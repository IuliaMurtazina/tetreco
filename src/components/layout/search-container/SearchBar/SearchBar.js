import React from "react";
import { Button, TextField, InputAdornment, Autocomplete } from "@mui/material";
import Icon from "@/components/ui/icons/Icon";
import { buttonPalette } from "@/theme/overrides/palette";
import classes from "./SearchBar.module.scss";

const DUMMY_LOCATION = [{ label: "Moscow" }, { label: "Saint-Petersburg" }];

const SearchBar = () => {
  return (
    <div className={classes.search}>
      <TextField
        className={classes["search__input"]}
        placeholder="Search for items"
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

      <Autocomplete
        className={classes["search__city"]}
        options={DUMMY_LOCATION}
        sx={{
          ".MuiAutocomplete-endAdornment": { top: "calc(50% - 10px);" },
        }}
        renderInput={(params) => (
          <TextField
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <Icon iconId="room" />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root fieldset": {
                borderColor: buttonPalette.secondary.enabled,
              },
              ".MuiInputBase-root": {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              },
            }}
            {...params}
            placeholder="Moscow"
          />
        )}
      ></Autocomplete>

      <Button
        sx={{ width: "100%", maxWidth: "144px" }}
        size="large"
        startIcon={<Icon iconId="search" />}
        search="true"
      >
        Find
      </Button>
    </div>
  );
};

export default SearchBar;
