import React from "react";
import MainNavigation from "./MainNavigation";
import SearchBar from "./SearchBar";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={`${classes.header} container`}>
        <MainNavigation />
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
