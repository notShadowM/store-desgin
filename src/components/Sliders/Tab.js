import React from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import * as S from "./style";
import * as T from "../../themes/Typography";
import Button from "../Button";
import { ReactComponent as Cart } from "./Cart.svg";
import { ReactComponent as Word } from "./Word.svg";
import FamousClock from "../../assets/FamousClock.png";

export default function Tab() {
  return (
    <div>
      <S.TextWrapper>
        <T.H1>WAY KAMBAS MINI EBONY</T.H1>
        <S.Hr />
        <T.P1>
          MATOA Way Kambas - This wood is chosen to represent the Sumatran
          Rhino's skin which is designed with an overlap effect on its strap to
          represent Rhino's skin.
        </T.P1>
        <S.Pbold>Discover</S.Pbold>
        <S.Buttons>
          <Button type="filled" width="180px">
            <Cart />
            Add to cart
          </Button>
          <Button width="120px">
            <Word />
          </Button>
        </S.Buttons>
        <S.Picture>
          <S.Img src={FamousClock} />
        </S.Picture>
      </S.TextWrapper>
    </div>
  );
}
