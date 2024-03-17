import React, { useState, createContext, useContext, useEffect } from "react";

const uiContext = createContext();

const UiContextProvider = ({ children }) => {
  const [currSection, setCurrSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([
    "Intro",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ]);

  // Update currSection
  const updateCurrSection = (updateMod, num) => {
    const maxSection = menuItems.length - 1;
    let nowPage = currSection;
    if (updateMod === "up") {
      nowPage = nowPage > maxSection ? maxSection : nowPage + 1;
    } else if (updateMod === "down") {
      nowPage = nowPage < 0 ? 0 : nowPage - 1;
    } else if (updateMod === "set") {
      nowPage = num;
    }

    if (nowPage >= 0 && nowPage <= 4) {
      setCurrSection(nowPage);
    } else {
      nowPage = currSection;
      setCurrSection(nowPage);
    }
  };

  return (
    <uiContext.Provider
      value={{
        currSection,
        isMenuOpen,
        menuItems,
        setCurrSection,
        setIsMenuOpen,
        setMenuItems,
        updateCurrSection,
      }}
    >
      {children}
    </uiContext.Provider>
  );
};

const useUiContext = () => {
  return useContext(uiContext);
};

export { UiContextProvider, useUiContext };
