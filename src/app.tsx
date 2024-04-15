import React from "react";
import { Outlet } from "react-router-dom";

// components
import Header from "components/templates/header";
import Nav from "components/templates/nav";
import Footer from "components/templates/footer";

const app: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Nav />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default app;
