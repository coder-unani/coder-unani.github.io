import React from "react";

// components
import Header from "components/templates/header";
import Footer from "components/templates/footer";
import Main from "components/templates/main";

// scss
import "styles/app.scss";

const app: React.FC = () => {
  return (
    <div className="body_wrap">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default app;
