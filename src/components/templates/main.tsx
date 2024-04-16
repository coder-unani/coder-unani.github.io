import React from "react";
import { Outlet } from "react-router-dom";

import Nav from "components/organisms/nav";
import Indicator from "components/organisms/indicator";

import "styles/components/templates/main.scss";

const Main: React.FC = () => {
  return (
    <main className="main">
      <Nav />
      <div className="content_wrap">
        <Indicator />
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
