import React from "react";
import Footer from "./Footer/Footer";
import MainNavigation from "./Header/Header";
import SearchContainer from "./SearchContainer/SearchContainer";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <SearchContainer />
      <main>
        <div className="container">{props.children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
