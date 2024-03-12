import React from "react";

import styles from "css/components/About.module.css";

const About = () => {
  const [abouts, setAbouts] = React.useState([
    {
      title: "개발경력 10 YEAR+",
      wstyle: {},
      tstyle: { color: "red" },
      icon: "fa-solid fa-laptop-code",
    },
    {
      title: "PHP",
      wstyle: { transform: "rotate(30deg)" },
      tstyle: { color: "red" },
      icon: "fa-brands fa-php",
    },
    {
      title: "LARAVEL",
      wstyle: { transform: "rotate(30deg)" },
      tstyle: { color: "red" },
      icon: "fa-brands fa-laravel",
    },
    {
      title: "HTML",
      wstyle: { transform: "rotate(30deg)" },
      tstyle: { color: "red" },
      icon: "fa-brands fa-html5",
    },
    {
      title: "CSS",
      wstyle: { transform: "rotate(30deg)" },
      tstyle: { color: "red" },
      icon: "fa-brands fa-css3-alt",
    },
    {
      title: "JAVASCRIPT",
      wstyle: { transform: "rotate(30deg)" },
      tstyle: { color: "red" },
      icon: "fa-brands fa-js",
    },
    {
      title: "REACT",
      wstyle: { transform: "rotate(30deg)" },
      tstyle: { color: "red" },
      icon: "fa-brands fa-react",
    },
    {
      title: "ORACLE",
      wstyle: { transform: "rotate(30deg)" },
      tstyle: { color: "red" },
      icon: "fa-solid fa-database",
    },
    {
      title: "MS-SQL",
      wstyle: { transform: "rotate(30deg)" },
      tstyle: { color: "red" },
      icon: "fa-solid fa-database",
    },
    {
      title: "MYSQL",
      wstyle: { transform: "rotate(30deg)" },
      tstyle: { color: "red" },
      icon: "fa-solid fa-database",
    },
    {
      title: "DOCKER",
      wstyle: { transform: "rotate(30deg)" },
      tstyle: { color: "red" },
      icon: "fa-brands fa-docker",
    },
    {
      title: "LINUX",
      wstyle: { transform: "rotate(30deg)" },
      tstyle: { color: "red" },
      icon: "fa-brands fa-linux",
    },
    {
      title: "AWS",
      wstyle: { transform: "rotate(30deg)" },
      tstyle: { color: "red" },
      icon: "fa-brands fa-aws",
    },
    {
      title: "Apache",
      wstyle: { transform: "rotate(30deg)" },
      tstyle: { color: "red" },
      icon: "fa-solid fa-server",
    },
    {
      title: "NGINX",
      wstyle: { transform: "rotate(30deg)" },
      tstyle: { color: "red" },
      icon: "fa-solid fa-server",
    },
    {
      title: "GIT",
      wstyle: { transform: "rotate(30deg)" },
      tstyle: { color: "red" },
      icon: "fa-brands fa-git",
    },
  ]);

  // const aboutsEls = abouts.map((about, index) => {
  //   return (
  //     <div key={index} className={styles.about_item_wrap} style={about.wstyle}>
  //       <i className={about.icon}></i>
  //       <span className={styles.about_item_name} style={about.tstyle}>
  //         {about.title}
  //       </span>
  //     </div>
  //   );
  // });

  return (
    <section className={`section ${styles.about}`}>
      <div className={styles.about_wrap}>
        <div className={styles.about_item_wrap}>
          <i className="fa-solid fa-laptop-code"></i>
          <span className={styles.about_item_name}>개발경력 10 YEAR+</span>
        </div>
      </div>
      <div className={`${styles.usecomputer} ${styles.first}`}></div>
      <div className={`${styles.usecomputer} ${styles.second}`}></div>
      <div className={`${styles.usecomputer} ${styles.third}`}></div>
      <div className={`${styles.usecomputer} ${styles.fourth}`}></div>
    </section>
  );
};

export default About;
