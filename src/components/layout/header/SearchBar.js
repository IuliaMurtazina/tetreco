import React from "react";
import { Button, TextField, InputAdornment, Autocomplete } from "@mui/material";
import Icon from "@/components/ui/icons/Icon";
import classes from "./SearchBar.module.scss";
import { buttonPalette } from "@/theme/overrides/palette";
import { useMediaQuery } from "@mui/material";

const DUMMY_LOCATION = [{ label: "Москва" }, { label: "Санкт-Петербург" }];

const SearchBar = () => {
  const desktop = useMediaQuery((theme) => theme.breakpoints.down("desktop"));
  const desktopSmall = useMediaQuery((theme) =>
    theme.breakpoints.down("desktopSmall"),
  );
  const tabletBig = useMediaQuery((theme) =>
    theme.breakpoints.down("tabletBig"),
  );

  return (
    <div className={`${classes.searchBar} container`}>
      {!tabletBig && (
        <>
          {!desktop && (
            <Button
              size="large"
              variant="contained"
              startIcon={<Icon iconId="format_list_bulleted" />}
            >
              Категории
            </Button>
          )}
          {desktop && (
            <Button
              variant="contained"
              type="round"
            >
              <Icon iconId="format_list_bulleted" />
            </Button>
          )}

          <div className={classes.search}>
            <TextField
              className={classes["search__input"]}
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
                  placeholder="Москва"
                />
              )}
            ></Autocomplete>
            <Button
              sx={{ width: "100%", maxWidth: "144px" }}
              size="large"
              startIcon={<Icon iconId="search" />}
              search={true}
            >
              Поиск
            </Button>
          </div>

          {!desktopSmall && (
            <Button
              size="large"
              variant="contained"
            >
              Разместить объявление
            </Button>
          )}
          {desktopSmall && (
            <Button
              variant="contained"
              type="round"
            >
              <Icon iconId="add" />
            </Button>
          )}
        </>
      )}

      {tabletBig && (
        <TextField
          fullWidth
          className={classes["search__input"]}
          placeholder="Поиск"
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

export default SearchBar;
