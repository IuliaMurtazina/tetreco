import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import SearchContainer from "./search-container/SearchContainer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <SearchContainer />
      <main>
        <div className="container">{props.children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
