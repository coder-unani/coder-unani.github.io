import React from "react";
import { SVGSidebarLeft, SVGPanel } from "components/atoms/svgs";

import "styles/components/templates/header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <ul className="circle_wrap">
        <li className="circle red"></li>
        <li className="circle yellow"></li>
        <li className="circle green"></li>
      </ul>
      <div className="search_wrap">
        <input type="text" className="search" placeholder="Search..." />
      </div>
      <div className="sidebar_wrap">
        <ul>
          <li>
            <SVGPanel className="svg" />
          </li>
          <li>
            <SVGSidebarLeft className="svg" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
