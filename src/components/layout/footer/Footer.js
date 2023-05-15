import React from "react";
import Link from "next/link";
import { TextField, InputAdornment } from "@mui/material";
import Icon from "@/components/ui/icons/Icon";
import FooterNav from "./FooterNav";
import classes from "./Footer.module.scss";
import { useMediaQuery } from "@mui/material";

const Footer = () => {
  const tabletBig = useMediaQuery((theme) =>
    theme.breakpoints.down("tabletBig"),
  );

  return (
    <>
      <footer className={classes.footer}>
        <div className={`${classes["footer-container"]} container`}>
          <div className={classes.left}>
            <nav>
              <Link href="/">О компании</Link>
              <Link href="/">Контакты</Link>
              <Link href="/">Карьера</Link>
              <Link href="/">Отзывы</Link>
            </nav>
            <Link href="/">FAQ</Link>
            <Link
              href="tel:88009999999"
              className={classes.phone}
            >
              8 800 999-99-99
            </Link>
          </div>
          <div className={classes.right}>
            <span>Рассылка</span>
            <p>Подписывайтесь на наши новости:</p>
            <form>
              <TextField
                search={true}
                size="small"
                placeholder="Введите вашу почту"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon iconId="chat" />
                    </InputAdornment>
                  ),
                }}
              />
            </form>
          </div>
        </div>
      </footer>
      {tabletBig && <FooterNav tabletBig={tabletBig} />}
    </>
  );
};

export default Footer;
