import React from "react";

import {
  SVGAccount,
  SVGCommentDiscussion,
  SVGExtensions,
  SVGFiles,
  SVGSettingGear,
  SVGSourceControl,
  SVGFileHtml,
  SVGFileCss,
  SVGFileJs,
  SVGFileJson,
  SVGArrowDown,
  SVGFolder,
} from "components/atoms/svgs";
// html :
// css :
// js :
// json :
import "styles/components/molecules/nav.scss";

const Nav: React.FC = () => {
  return (
    <>
      <nav className="menu">
        <ul>
          <li>
            <SVGFiles className="svg active" />
          </li>
          <li>
            <SVGSourceControl className="svg" />
          </li>
          <li>
            <SVGExtensions className="svg" />
          </li>
          <li>
            <SVGCommentDiscussion className="svg" />
          </li>
        </ul>
        <ul>
          <li>
            <SVGAccount className="svg" />
          </li>
          <li>
            <SVGSettingGear className="svg" />
          </li>
        </ul>
      </nav>
      <div className="toggle_menu">
        <div className="title">
          <div className="arrow"></div>
          <div className="text">EXPLORER</div>
        </div>
        <div className="line">
          <div className="arrow">
            <SVGArrowDown className="svg" />
          </div>
          <div className="icon">
            <SVGFolder className="svg folder" width="16" height="16" />
          </div>
          <div className="text">CODER.UNANI</div>
        </div>
        <ul className="list">
          <li>
            <div className="line depth1">
              <div className="icon">
                <SVGFileHtml className="svg html" />
              </div>
              <div className="text">index.html</div>
            </div>
          </li>
          <li>
            <div className="line depth2">
              <div className="icon">🚀</div>
              <div className="text">print("Hello World!")</div>
            </div>
          </li>
          <li>
            <div className="line depth2">
              <div className="icon">🙋🏻‍♂️</div>
              <div className="text">introduce</div>
            </div>
          </li>
          <li>
            <div className="line depth1">
              <div className="icon">
                <SVGFileCss className="svg css" />
              </div>
              <div className="text">about.css</div>
            </div>
          </li>
          <li>
            <div className="line depth1">
              <div className="icon">
                <SVGFileJs className="svg js" />
              </div>
              <div className="text">works.js</div>
            </div>
          </li>
          <li>
            <div className="line depth1">
              <div className="icon">
                <SVGFileJson className="svg json" />
              </div>
              <div className="text">contact.json</div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
