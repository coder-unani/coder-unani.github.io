import React from "react";

import styles from "css/components/Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={styles.contact_wrap}>
        <img
          src="images/my_memoji.png"
          className={styles.memoji}
          alt="my_memoji"
        />
        <ul className={styles.info}>
          <li>
            <h1>coder.unani@gmail.com</h1>
          </li>
          <li>
            <h1>coder-unani.github.io</h1>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
