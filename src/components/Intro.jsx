import React from "react";

import styles from "css/components/Intro.module.css";

const Intro = (props) => {
  const { updateCurrSection } = props;

  const onClick = () => {
    updateCurrSection("set", 1);
  };

  return (
    <section id="intro" className={`section ${styles.intro}`}>
      <div>
        <span className={styles.title_wrap}>
          <h1 className={styles.title}>TITLE</h1>
        </span>
      </div>
      <div className={styles.scroll_down} onClick={onClick}>
        <p>SCROLL DOWN</p>
      </div>
    </section>
  );
};

export default Intro;
