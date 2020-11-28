import React, { useState } from "react";
import * as S from "./style";
import Button from "../Button";
import { ReactComponent as RightArrow } from "./RightArrow.svg";
import { ReactComponent as LeftArrow } from "./LeftArrow.svg";
import { ReactComponent as Lines } from "./Lines.svg";

import Tab from "./Tab";

import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

export default function Sliders() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    draggable: false,
  };

  const [state, setState] = useState(" ");

  return (
    <S.Wrapper>
      <Slider ref={(slider) => setState(slider)} {...settings} style={{}}>
        <Tab />
        <Tab />
        <Tab />
        <Tab />
      </Slider>

      <S.Arrows>
        <Button onClick={state.slickPrev}>
          <LeftArrow />
        </Button>
        <Button type="filled" onClick={state.slickNext}>
          <RightArrow />
        </Button>
      </S.Arrows>

      <S.Lines>
        <Lines
          style={{
            position: "absolute",
            zIndex: "-1",
            top: "-140px",
            right: "-204px",
          }}
        />
      </S.Lines>
    </S.Wrapper>
  );
}
