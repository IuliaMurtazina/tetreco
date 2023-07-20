import React from "react";
import classes from "./AuthFormContainer.module.scss";
import { Button } from "@mui/material";
import Icon from "@/components/ui/icons/Icon";
import AuthBottom from "./AuthBottom/AuthBottom";
import { useDispatch, useSelector } from "react-redux";
import { SET_IS_AUTH_POPUP_CLOSE } from "@/store/reducers/ui";
import LogInForm from "./Forms/LogInForm";
import SignUpForm from "./Forms/SignUpForm";

const AuthForm = ({ tablet }) => {
  const authMode = useSelector((state) => state.ui.authMode);
  const dispatch = useDispatch();

  return (
    <div className={classes.container}>
      <span className={classes.heading}>{authMode}</span>
      {tablet && (
        <Button
          className={classes.close}
          onClick={() => dispatch(SET_IS_AUTH_POPUP_CLOSE())}
        >
          <Icon iconId="close" />
        </Button>
      )}
      {authMode === "Log in" && <LogInForm tablet={tablet} />}
      {authMode === "Sign up" && <SignUpForm />}

      {!tablet && authMode === "Sign up" && <AuthBottom />}
    </div>
  );
};

export default AuthForm;
