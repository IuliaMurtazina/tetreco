import React from "react";
import { Button, useMediaQuery } from "@mui/material";
import Icon from "@/components/ui/icons/Icon";

const ButtonAd = () => {
  const desktopSmall = useMediaQuery((theme) =>
    theme.breakpoints.down("desktopSmall"),
  );

  return (
    <>
      {!desktopSmall && (
        <Button
          size="large"
          variant="contained"
        >
          Post an item
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
  );
};

export default ButtonAd;
