import React from "react";

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
            <img
              src={require("assets/icon_panel.svg").default}
              alt="sidebar_icon"
            />
          </li>
          <li>
            <img
              src={require("assets/icon_sidebarleft.svg").default}
              alt="sidebar_icon"
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
