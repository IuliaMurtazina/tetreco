import React from "react";
import { Button } from "@mui/material";
import classes from "./AuthBottom.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { SET_IS_AUTH_POPUP_OPEN } from "@/store/reducers/ui";
import RestorePassword from "../RestorePassword/RestorePassword";

const AuthBottom = () => {
  const dispatch = useDispatch();
  const authMode = useSelector((state) => state.ui.authMode);

  return (
    <>
      {authMode === "Sign up" && (
        <div className={classes.bottom}>
          <span>Already have an account?</span>
          <Button
            variant="text"
            size="small"
            onClick={() => {
              dispatch(SET_IS_AUTH_POPUP_OPEN("Log in"));
            }}
          >
            Log in
          </Button>
        </div>
      )}
      {authMode === "Log in" && <RestorePassword />}
    </>
  );
};

export default AuthBottom;
