import React from "react";

import styles from "css/components/Skills.module.css";

const Skills = () => {
  return (
    <section className={`section ${styles.skills}`}>
      <div className={`${styles.part} ${styles.frontend}`}>
        <div className={styles.title}>Front-End</div>
        <div className={styles.detail}>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>TYPESCRIPT</li>
            <li>NEXT.JS</li>
          </ul>
        </div>
      </div>
      <div className={`${styles.part} ${styles.backend}`}>
        <div className={styles.detail}>
          <ul>
            <li>PHP</li>
            <li>LARAVEL</li>
            <li>JAVA</li>
            <li>PYTHON</li>
          </ul>
        </div>
        <div className={styles.title}>Back-End</div>
      </div>
      <div className={`${styles.part} ${styles.database}`}>
        <div className={styles.title}>Database</div>
        <div className={styles.detail}>
          <ul>
            <li>ORACLE</li>
            <li>MYSQL</li>
            <li>MSSQL</li>
          </ul>
        </div>
      </div>
      <div className={`${styles.part} ${styles.devops}`}>
        <div className={styles.detail}>
          <ul>
            <li>DOCKER</li>
            <li>GIT/GITHUB</li>
            <li>3</li>
          </ul>
        </div>
        <div className={styles.title}>DevOps</div>
      </div>
      <div className={`${styles.part} ${styles.etc}`}>
        <div className={styles.title}>Etc</div>
        <div className={styles.detail}>
          <ul>
            <li>LINUX</li>
            <li>AWS</li>
            <li>PHOTOSHOP</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
