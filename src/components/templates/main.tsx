import React from "react";
import { Outlet } from "react-router-dom";

import Nav from "components/organisms/nav";
import Indicator from "components/organisms/indicator";
import Terminal from "components/organisms/terminal";

import "styles/components/templates/main.scss";

const Main: React.FC = () => {
  return (
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
  );
};

export default Main;
