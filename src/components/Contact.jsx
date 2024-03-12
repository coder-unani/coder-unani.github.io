import React from "react";

import styles from "css/components/Contact.module.css";

const Contact = () => {
  return (
    <section className={`section ${styles.contact}`}>
      <div className={styles.contact_wrap}>
        <div className={styles.memoji_wrap}>
          <img
            src="images/my_memoji.png"
            className={styles.memoji}
            alt="my_memoji"
          />
        </div>
        <ul className={styles.contact_list}>
          <li className={styles.contact_item}>
            <i className={`fa-solid fa-envelope`}></i>
            <a href="mailto:coder.unani@gmail.com">coder.unani@gmail.com</a>
          </li>
          <li className={styles.contact_item}>
            <i className={`fa-brands fa-square-github`}></i>
            <a href="https://github.com/coder-unani" target="_BLANK">
              github.com/coder-unani
            </a>
          </li>
          <li className={styles.contact_item}>
            <i className={`fa-brands fa-linkedin`} target="_BLANK"></i>
            <a href="https://www.linkedin.com/in/yunhwan-lee-774b7b2b9/">
              yunhwan-lee-774b7b2b9
            </a>
          </li>
          <li className={styles.contact_item}>
            <i className={`fa-solid fa-comment`}></i>
            <a href="https://open.kakao.com/o/s55G0wfg">KakaoTalk</a>
          </li>
        </ul>
      </div>
      <div className={styles.copyright_wrap}>
        <p>© 2024 UNANI. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
