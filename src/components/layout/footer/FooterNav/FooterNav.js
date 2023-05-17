import Link from "next/link";
import React from "react";
import classes from "./FooterNav.module.scss";
import Icon from "@/components/ui/icons/Icon";
import { useRouter } from "next/router";

const FooterMobile = (props) => {
  const router = useRouter();

  return (
    <div className={`${classes.footer} ${props.tabletBig && classes.sticky}`}>
      <Link
        href="/"
        className={`${router.pathname == "/" && classes.active} ${
          classes.link
        }`}
      >
        <Icon iconId="home" />
        <span>Main</span>
      </Link>
      <Link
        href="/"
        className={classes.link}
      >
        <Icon iconId="favorite_border" />
        <span>Favorites</span>
      </Link>
      <Link
        href="/"
        className={classes.link}
      >
        <Icon iconId="menu" />
        <span>Items</span>
      </Link>
      <Link
        href="/"
        className={classes.link}
      >
        <Icon iconId="mail_outline" />
        <span>Messages</span>
      </Link>
      <Link
        href="/"
        className={classes.link}
      >
        <Icon iconId="person" />
        <span>Account</span>
      </Link>
    </div>
  );
};

export default FooterMobile;
