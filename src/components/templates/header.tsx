import React from "react";
import { SVGSidebarLeft, SVGPanel, SVGSearch } from "components/atoms/svgs";

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
        <div className="title">
          <div className="icon">
            <SVGSearch className="svg" width="14" height="14" />
          </div>
          <div className="text">UNANI's Portfolio</div>
        </div>
      </div>
      <div className="sidebar_wrap">
        <ul>
          <li>
            <SVGPanel className="svg" width="18" height="18" />
          </li>
          <li>
            <SVGSidebarLeft className="svg" width="18" height="18" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
