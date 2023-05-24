import React from "react";
import { Button } from "@mui/material";
import Icon from "@/components/ui/icons/Icon";
import classes from "./ButtonsActions.module.scss";
import { useDispatch } from "react-redux";
import { SET_IS_AUTH_POPUP_OPEN } from "@/store/reducers/ui";

const ButtonsActions = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes.actions}>
      <Button
        size="small"
        variant="text"
        startIcon={<Icon iconId="favorite_border" />}
        sx={{ ".MuiButton-startIcon": { marginRight: "10px" } }}
      >
        Favorites
      </Button>
      <Button
        size="small"
        variant="outlined"
        startIcon={<Icon iconId="user" />}
        onClick={() => dispatch(SET_IS_AUTH_POPUP_OPEN("Log in"))}
      >
        Log in
      </Button>
      <Button
        size="small"
        variant="contained"
        onClick={() => dispatch(SET_IS_AUTH_POPUP_OPEN("Sign up"))}
      >
        Sign up
      </Button>
    </div>
  );
};

export default ButtonsActions;
