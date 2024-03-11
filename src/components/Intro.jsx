import React from "react";

import styles from "css/components/Intro.module.css";

const Intro = (props) => {
  const { updateCurrSection } = props;

  const onClick = () => {
    updateCurrSection("set", 1);
  };

  return (
    <section className={`section ${styles.intro}`}>
      <div className={styles.title_wrap}>
        <span className={styles.title_span}>
          <h1 className={styles.title}>
            Hello,
            <br />
            I'm Software Developer
            <br />
            UNANI
          </h1>
        </span>
      </div>
      <div className={styles.scroll_down_wrap}>
        <div className={styles.scroll_down} onClick={onClick}>
          <p>SCROLL DOWN</p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
