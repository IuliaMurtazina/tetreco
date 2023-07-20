import React, { useState } from "react";
import classes from "./Header.module.scss";
import Link from "next/link";
import { Button } from "@mui/material";
import Icon from "@/components/ui/icons/Icon";
import { useMediaQuery } from "@mui/material";
import HeaderNav from "./HeaderNav/HeaderNav";
import ButtonsActions from "./ButtonsActions/ButtonsActions";

const Header = () => {
  const [showActionsButtons, setShowActionsButtons] = useState(false);
  const desktop = useMediaQuery((theme) => theme.breakpoints.down("desktop"));
  const desktopSmall2 = useMediaQuery((theme) =>
    theme.breakpoints.down("desktopSmall2"),
  );
  const tablet = useMediaQuery((theme) => theme.breakpoints.down("tablet"));

  return (
    <div className={`${classes.header} container`}>
      <div className={classes.left}>
        <Link
          href="/"
          className="logo"
        >
          Tetreco
        </Link>
        <div className={classes.location}>
          {!tablet && <p>Location: </p>}
          <Button
            className={classes["location__button"]}
            startIcon={<Icon iconId="room" />}
            size="small"
            variant="text"
            sx={{ ".MuiButton-startIcon": { marginRight: "8px" } }}
          >
            Moscow
          </Button>
        </div>
      </div>

      {!tablet && <HeaderNav />}

      <div className={classes.right}>
        {!desktopSmall2 && <ButtonsActions />}
        {desktopSmall2 && (
          <Button
            variant="contained"
            type="round"
            onClick={() => {
              setShowActionsButtons(!showActionsButtons);
            }}
          >
            <Icon iconId="menu" />
          </Button>
        )}
      </div>

      {showActionsButtons && desktop && (
        <div className={classes.actions}>
          {tablet && <HeaderNav />}
          <ButtonsActions />
        </div>
      )}
    </div>
  );
};

export default Header;
