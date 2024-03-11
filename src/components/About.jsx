import React from "react";

import styles from "css/components/About.module.css";

const About = () => {
  return (
    <section className={`section ${styles.about}`}>
      <div>
        <div>
          <img src="images/my_memoji.png" alt="profile" />
        </div>
        <ul>
          <li>
            <h1>10+년차 개발자</h1>
            <p>
              현업에서 10년 이상의 경력을 가지고 있습니다. <br />
              하지만 아직도 늘 새로운 것을 배우고자 합니다.
            </p>
          </li>
          <li>
            <h1>아직 더 멋진 일들을 할 수 있습니다</h1>
            <p></p>
          </li>
          <li>
            <h1>부끄럽지 않은 코드를 작성하려고 노력합니다</h1>
            <p>
              1년전 혹은 수개월전 작성한 코드가 조금 부끄럽다면 그만큼
              성장했다는 뜻이 아닐까요?
              <br />
              어떤 프로젝트에서도 항상 유지보수를 생각하고 가독성을 높이려고
              노력합니다
              <br />
              항상 더 좋은 코드를 만들기 위해 고민하고 노력합니다.
            </p>
          </li>
          <li>
            <h1>나는 프로다</h1>
            <p>
              댓가를 받고 개발을 한다는 건 프로라는 뜻입니다.
              <br />
              "프로"답게 책임감을 가지고 작은 오류도 놓치지 않으려고 노력하고,
              <br />
              마감기한을 넘기지 않으려 최선을 다합니다.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
