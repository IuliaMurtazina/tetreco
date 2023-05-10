import React from "react";
import classes from "./MainNavigation.module.scss";
import Link from "next/link";
import { Button } from "@mui/material";
import Icon from "@/components/ui/icons/Icon";

const MainNavigation = () => {
  return (
    <div className={classes.header}>
      <div className={classes.left}>
        <Link
          href="/"
          className={classes.logo}
        >
          Tetreco
        </Link>
        <div className={classes.location}>
          <p>Местоположение: </p>
          <Button
            startIcon={<Icon iconId="room" />}
            size="small"
            variant="text"
            sx={{ ".MuiButton-startIcon": { marginRight: "8px" } }}
          >
            Москва
          </Button>
        </div>
      </div>
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
      <div className={classes.right}>
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
      </div>
    </div>
  );
};

export default MainNavigation;
