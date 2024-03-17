import React from "react";
import { UiContextProvider } from "context/UiContext";

import styles from "css/App.module.css";
import Main from "pages/Main";

function App() {
  return (
    <UiContextProvider>
      <Main />
    </UiContextProvider>
  );
}

export default App;
