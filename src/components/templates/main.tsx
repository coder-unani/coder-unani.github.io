import React from "react";
import { Outlet } from "react-router-dom";

import Header from "components/templates/header";
import Footer from "components/templates/footer";
import Nav from "components/organisms/nav";
import Indicator from "components/organisms/indicator";
import Terminal from "components/organisms/terminal";

import "styles/components/templates/main.scss";

const Main: React.FC = () => {
  return (
    <div className="body_wrap">
      <Header />
      <main className="main">
        <Nav />
        <div className="content_wrap">
          <Indicator />
          <section className="content">
            <div className="editor">
              <Outlet />
            </div>
            <Terminal />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
