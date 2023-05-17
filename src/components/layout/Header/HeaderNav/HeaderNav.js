import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import classes from "../Header.module.scss";

const HeaderNav = () => {
  return (
    <>
      <div className={classes.nav}>
        <Link href="/">
          <Button
            size="small"
            variant="text"
          >
            Main
          </Button>
        </Link>
        <Link href="/">
          <Button
            size="small"
            variant="text"
          >
            About us
          </Button>
        </Link>
        <Link href="/">
          <Button
            size="small"
            variant="text"
          >
            Contacts
          </Button>
        </Link>
      </div>
    </>
  );
};

export default HeaderNav;
