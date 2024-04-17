import { SVGBell, SVGCheckAll, SVGSourceControl } from "components/atoms/svgs";
import React from "react";

import "styles/components/templates/footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="left">
        <div className="icon">
          <SVGSourceControl className="svg" width="14" height="14" />
        </div>
        <div className="text">master</div>
      </div>
      <div className="copyright">© 2024. UNANI All right reserved.</div>
      <div className="right">
        <div className="icon">
          <SVGCheckAll className="svg" width="14" height="14" />
        </div>
        <div className="text">Prettier</div>
        <div className="icon bell">
          <SVGBell className="svg" width="14" height="14" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
