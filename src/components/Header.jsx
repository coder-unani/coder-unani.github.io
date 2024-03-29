import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import styles from "css/components/Header.module.css";
import { useUiContext } from "context/UiContext";

const Header = (props) => {
  const { updateCurrSection } = props;
  const { menuItems, isMenuOpen, setIsMenuOpen } = useUiContext();
  const menuBtn = useRef(null);

  const navOnClick = (e) => {
    setIsMenuOpen(false);
    updateCurrSection("set", Number(e.target.attributes.gotosec.value));
  };

  const handleToggle = (e) => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    menuBtn.current.addEventListener("click", handleToggle);
    return () => {
      menuBtn.current.removeEventListener("click", handleToggle);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img
            className={styles.logo_img}
            src="images/my_memoji.png"
            alt="logo"
          />
          <h1 className={styles.logo_title}>
            <Link to="/">UNANI</Link>
          </h1>
        </div>
        <nav className={styles.nav}>
          <ul className={`${styles.menu} ${isMenuOpen ? styles.open : null}`}>
            {menuItems.map((menu, index) => (
              <li
                key={index}
                className={styles.menu_item}
                onClick={navOnClick}
                gotosec={index}
              >
                {menu}
              </li>
            ))}
          </ul>
        </nav>
        <button
          ref={menuBtn}
          className={styles.toggle}
          aria-label="navigation menu toggle"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </header>
    </>
  );
};

export default Header;
