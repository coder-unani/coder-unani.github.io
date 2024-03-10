import React, { forwardRef, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "css/components/Header.module.css";

const Header = forwardRef((props, ref) => {
  const { menuItems, updateCurrSection } = props;

  const navOnClick = (e) => {
    updateCurrSection("set", Number(e.target.attributes.gotosec.value));
  };

  return (
    <>
      <header ref={ref} className={styles.header}>
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
          <ul className={styles.menu}>
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
        <button className={styles.toggle} aria-label="navigation menu toggle">
          <i className="fa-solid fa-bars"></i>
        </button>
      </header>
    </>
  );
});

export default Header;
