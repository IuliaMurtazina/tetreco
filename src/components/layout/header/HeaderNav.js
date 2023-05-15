import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import classes from "./MainNavigation.module.scss";

const HeaderNav = () => {
  return (
    <>
      <div className={classes.nav}>
        <Link href="/">
          <Button
            size="small"
            variant="text"
          >
            Главная
          </Button>
        </Link>
        <Link href="/">
          <Button
            size="small"
            variant="text"
          >
            О нас
          </Button>
        </Link>
        <Link href="/">
          <Button
            size="small"
            variant="text"
          >
            Контакты
          </Button>
        </Link>
      </div>
    </>
  );
};

export default HeaderNav;
