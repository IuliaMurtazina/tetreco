import React from "react";
import { Button } from "@mui/material";
import Icon from "@/components/ui/icons/Icon";

const ButtonsActions = () => {
  return (
    <>
      <Button
        size="small"
        variant="text"
        startIcon={<Icon iconId="favorite_border" />}
        sx={{ ".MuiButton-startIcon": { marginRight: "10px" } }}
      >
        Избранное
      </Button>
      <Button
        size="small"
        variant="outlined"
        startIcon={<Icon iconId="user" />}
      >
        Вход
      </Button>
      <Button
        size="small"
        variant="contained"
      >
        Регистрация
      </Button>
    </>
  );
};

export default ButtonsActions;
