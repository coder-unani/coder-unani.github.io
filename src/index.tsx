import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// pages
import App from "app";
import Index from "pages/index";
import About from "pages/about";
import Works from "pages/works";
import Contact from "pages/contact";
import NotFound from "pages/NotFound";

// reportWebVitals
import reportWebVitals from "./reportWebVitals";

// reset.css
import { Reset } from "styled-reset";
import "styles/index.scss";

// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", index: true, element: <Index /> },
      { path: "/about", element: <About /> },
      { path: "/works", element: <Works /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Reset />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
