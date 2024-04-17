import React from "react";

import "styles/components/organisms/indicator.scss";

import {
  SVGFileHtml,
  SVGClose,
  SVGFileCss,
  SVGFileJs,
  SVGFileJson,
  SVGFiles,
  SVGArrowRight,
} from "components/atoms/svgs";

const Indicator: React.FC = () => {
  return (
    <>
      <div className="content_tab">
        <ul>
          <li className="active">
            <div className="icon">
              <SVGFileHtml className="svg html" width="16" height="16" />
            </div>
            <div className="text">index.html</div>
          </li>
          <li>
            <div className="icon">
              <SVGFileCss className="svg css" width="16" height="16" />
            </div>
            <div className="text">about.css</div>
          </li>
          <li>
            <div className="icon">
              <SVGFileJs className="svg js" width="16" height="16" />
            </div>
            <div className="text">works.js</div>
          </li>
          <li>
            <div className="icon">
              <SVGFileJson className="svg json" width="16" height="16" />
            </div>
            <div className="text">contact.json</div>
          </li>
        </ul>
        <div></div>
      </div>
      <div className="content_indicator">
        <div className="line">
          <div className="icon">
            <SVGFiles className="svg" width="16" height="16" />
          </div>
          <div className="text">portfolio</div>
        </div>
        <div className="divider">
          <div className="icon">
            <SVGArrowRight className="svg" width="16" height="16" />
          </div>
        </div>
        <div className="line">
          <div className="icon">
            <SVGFileHtml className="svg html" width="16" height="16" />
          </div>
          <div className="text">index.html</div>
        </div>
      </div>
    </>
  );
};

export default Indicator;
