import React from "react";
import Img from "components/atoms/img";

import "styles/components/molecules/indicator.scss";

import { SVGFileHtml, SVGClose } from "components/atoms/svgs";

const Indicator: React.FC = () => {
  return (
    <>
      <ul className="indicator">
        <li className="active">
          <div className="icon">
            <SVGFileHtml className="svg html" />
          </div>
          <div className="text">index.html</div>
          <div className="close">
            <SVGClose className="svg" />
          </div>
        </li>
        <li>
          <div className="text">about.css</div>
          <div className="close">
            <SVGClose className="svg" />
          </div>
        </li>
        <li>
          <div className="text">works.js</div>
          <div className="close">
            <SVGClose className="svg" />
          </div>
        </li>
        <li>
          <div className="text">contact.json</div>
          <div className="close">
            <SVGClose className="svg" />
          </div>
        </li>
        <li></li>
      </ul>
      <div className="navigator">portfolio index</div>
    </>
  );
};

export default Indicator;
