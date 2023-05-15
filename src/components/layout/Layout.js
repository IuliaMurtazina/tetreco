import React from "react";
import Footer from "./footer/Footer";
import MainNavigation from "./header/MainNavigation";
import SearchBar from "./header/SearchBar";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <SearchBar />
      <main>
        <div className="container">{props.children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
