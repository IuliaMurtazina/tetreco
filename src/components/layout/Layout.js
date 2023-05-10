import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>
        <div className="container">{props.children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
