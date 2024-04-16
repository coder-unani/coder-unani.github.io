import React from "react";

type ImgProps = {
  src: string;
  cls?: string | null;
  alt?: string | null;
};

const Img: React.FC<ImgProps> = ({ src, cls, alt }) => {
  const imgSrc: string = require(src).default;
  const imgCls: string = cls ? cls : "img";
  const imgAlt: string = alt ? alt : "image";
  return <img src={imgSrc} className={imgCls} alt={imgAlt} />;
};

export default Img;
