import React from "react";
import * as S from "./style";
import * as T from "../../themes/Typography";
import Button from "../Button";
import { ReactComponent as Cart } from "./Cart.svg";
import { ReactComponent as Word } from "./Word.svg";
import { ReactComponent as RightArrow } from "./RightArrow.svg";
import { ReactComponent as LeftArrow } from "./LeftArrow.svg";
import { ReactComponent as Lines } from "./Lines.svg";
import FamousClock from "../../assets/FamousClock.png";

import SliderTab from "./SliderTab";

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
    autoplaySpeed: 10000,
    draggable: false,
  };
  return (
    <S.Wrapper>
      <Slider {...settings} style={{}}>
        <SliderTab />
        <SliderTab />
        <SliderTab />
        <SliderTab />
      </Slider>

      {/* <SliderTab /> */}

      <S.Arrows>
        <Button>
          <LeftArrow />
        </Button>
        <Button type="filled">
          <RightArrow />
        </Button>
      </S.Arrows>

      <S.Lines>
        <Lines />
      </S.Lines>
    </S.Wrapper>
  );
}
