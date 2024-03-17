import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "css/components/Projects.module.css";

const Projects = () => {
  const swiperEls = useRef(null);

  return (
    <section className={`section ${styles.projects}`}>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        ref={swiperEls}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className={`${styles.project_wrap} ${styles.project1}`}>
            <div className={styles.description}>
              <h1>Shoppy</h1>
              <p>
                React 로 제작된 쇼핑몰
                <br />
                Firebase 를 이용한 로그인, 상품 등록, 장바구니 등의 기능 구현
                <br />
                Cloudinary 에 상품이미지 저장
                <br />
                Tailwind 를 사용한 스타일링
                <br />
                <br />
                <a href="https://github.com/coder-unani/shoppy" target="_BLANK">
                  github
                </a>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.project_wrap}>
            <h1>Project #2</h1>
            <p>Project Details..</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.project_wrap}>
            <h1>Project #3</h1>
            <p>Project Details..</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.project_wrap}>
            <h1>Project #4</h1>
            <p>Project Details..</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Projects;
