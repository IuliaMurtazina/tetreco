import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import classes from "./AuthActions.module.scss";
import { SET_IS_AUTH_POPUP_OPEN } from "@/store/reducers/ui";

const AuthActions = () => {
  const authMode = useSelector((state) => state.ui.authMode);
  const dispatch = useDispatch();

  return (
    <div className={classes.actions}>
      {authMode === "Log in" && (
        <>
          <Button
            variant="outlined"
            size="small"
            onClick={() => dispatch(SET_IS_AUTH_POPUP_OPEN("Sign up"))}
          >
            Create profile
          </Button>
          <Button
            variant="contained"
            size="small"
            type="sumbit"
          >
            Log in
          </Button>
        </>
      )}
      {authMode === "Sign up" && (
        <Button
          variant="contained"
          size="small"
          type="sumbit"
        >
          Sign up
        </Button>
      )}
    </div>
  );
};

export default AuthActions;
