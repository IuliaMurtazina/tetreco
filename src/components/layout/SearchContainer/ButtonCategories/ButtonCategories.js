import React from "react";
import { Button, useMediaQuery } from "@mui/material";
import Icon from "@/components/ui/icons/Icon";

const ButtonCategories = () => {
  const desktop = useMediaQuery((theme) => theme.breakpoints.down("desktop"));

  return (
    <>
      {!desktop && (
        <Button
          size="large"
          variant="contained"
          startIcon={<Icon iconId="format_list_bulleted" />}
        >
          Categories
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
    </>
  );
};

export default ButtonCategories;
