import React, { useState, useRef, useEffect } from "react";

import Header from "components/Header";
import Intro from "components/Intro";
import About from "components/About";
import Skills from "components/Skills";
import Projects from "components/Projects";
import Contact from "components/Contact";

import styles from "css/App.module.css";

function App() {
  // Menu List
  const [menuItems, setMenuItems] = useState([
    "Intro",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ]);
  // Current Section
  const [currSection, setCurrSection] = useState(0);
  // Refs
  const bodyWrap = useRef(null);

  //  TouchStart Event Handler
  let touchStartY = 0;
  const handleTouchStart = (e) => {
    touchStartY = e.changedTouches[0].clientY;
  };

  // TouchEnd Event Handler
  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    if (touchStartY - touchEndY > 50) {
      updateCurrSection("up");
    } else if (touchStartY - touchEndY < -50) {
      updateCurrSection("down");
    }
  };

  // Wheel Event Handler
  const handleWheel = (e) => {
    const { deltaY } = e;
    if (deltaY > 0) {
      updateCurrSection("up");
    } else if (deltaY < 0) {
      updateCurrSection("down");
    }
  };

  // useEffect [currSection]
  useEffect(() => {
    // Wheel EventListener
    window.addEventListener("wheel", handleWheel);
    // Touch EventListener
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    // Scroll to current section
    const pageHeight = window.innerHeight;
    bodyWrap.current.scrollTo({
      top: currSection * pageHeight,
      left: 0,
      behavior: "smooth",
    });

    // Active menu item
    const menuEls = document.querySelectorAll("nav ul li");
    for (let i = 0; i < menuEls.length; i++) {
      menuEls[i].classList.remove("active");
    }
    menuEls[currSection].classList.add("active");

    // Clean up
    return () => {
      // Remove EventListeners
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currSection]);

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
    <>
      <div ref={bodyWrap} className={styles.body_wrap}>
        <Intro updateCurrSection={updateCurrSection} />
        <Header menuItems={menuItems} updateCurrSection={updateCurrSection} />
        <About />
        <Skills currSection={currSection} />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
