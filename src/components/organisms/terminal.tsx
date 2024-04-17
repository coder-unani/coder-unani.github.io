import React from "react";

import "styles/components/organisms/terminal.scss";

const Terminal: React.FC = () => {
  return (
    <div className="terminal_wrap">
      <div className="tab">
        <ul>
          <li className="problems">
            <span>PROBLEMS</span>
          </li>
          <li className="output">
            <span>OUTPUT</span>
          </li>
          <li className="debug">
            <span>DEBUG CONSOLE</span>
          </li>
          <li className="terminal active">
            <span>TERMINAL</span>
          </li>
        </ul>
      </div>
      <div className="output"></div>
    </div>
  );
};

export default Terminal;
