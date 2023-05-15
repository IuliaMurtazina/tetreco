import React, { useState } from "react";
import classes from "./MainNavigation.module.scss";
import Link from "next/link";
import { Button } from "@mui/material";
import Icon from "@/components/ui/icons/Icon";
import { useMediaQuery } from "@mui/material";
import ButtonsActions from "./ButtonsActions";
import HeaderNav from "./HeaderNav";

const MainNavigation = () => {
  const [showActionsButtons, setShowActionsButtons] = useState(false);
  const desktop = useMediaQuery((theme) => theme.breakpoints.down("desktop"));
  const tabletBig = useMediaQuery((theme) =>
    theme.breakpoints.down("tabletBig"),
  );

  return (
    <div className={`${classes.header} container`}>
      <div className={classes.left}>
        <Link
          href="/"
          className={classes.logo}
        >
          Tetreco
        </Link>
        <div className={classes.location}>
          {!tabletBig && <p>Местоположение: </p>}
          <Button
            className={classes["location__button"]}
            startIcon={<Icon iconId="room" />}
            size="small"
            variant="text"
            sx={{ ".MuiButton-startIcon": { marginRight: "8px" } }}
          >
            Москва
          </Button>
        </div>
      </div>

      {!tabletBig && <HeaderNav />}

      <div className={classes.right}>
        {!desktop && <ButtonsActions />}
        {desktop && (
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
          {tabletBig && <HeaderNav />}
          <ButtonsActions />
        </div>
      )}
    </div>
  );
};

export default MainNavigation;
