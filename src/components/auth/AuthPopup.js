import React from "react";
import classes from "./AuthPopup.module.scss";
import Link from "next/link";
import Icon from "../ui/icons/Icon";
import { Button, Modal } from "@mui/material";
import UserTips from "./UserTips/UserTips";
import AuthForm from "./AuthForm/AuthForm";
import { useMediaQuery } from "@mui/material";
import AuthBottom from "./AuthForm/AuthBottom/AuthBottom";
import { useDispatch, useSelector } from "react-redux";
import { SET_IS_AUTH_POPUP_CLOSE } from "@/store/reducers/ui";

const AuthPopup = () => {
  const desktopSmall = useMediaQuery((theme) =>
    theme.breakpoints.down("desktopSmall"),
  );
  const tablet = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const isAuthPopupOpen = useSelector((state) => state.ui.isAuthPopupOpen);
  const dispatch = useDispatch();
  const authMode = useSelector((state) => state.ui.authMode);

  return (
    <Modal
      open={isAuthPopupOpen}
      onClose={() => dispatch(SET_IS_AUTH_POPUP_CLOSE())}
      style={{ position: "absolute" }}
    >
      <div className={classes.popup}>
        {!tablet && (
          <div className={classes.header}>
            <Link
              href="/"
              className="logo"
            >
              Tetreco
            </Link>
            <Button onClick={() => dispatch(SET_IS_AUTH_POPUP_CLOSE())}>
              <Icon
                iconId="close"
                className={classes.close}
              />
            </Button>
          </div>
        )}
        <div className={classes.content}>
          <AuthForm tablet={tablet} />
          {!desktopSmall && <UserTips />}
        </div>
        {tablet && <AuthBottom />}
      </div>
    </Modal>
  );
};

export default AuthPopup;
