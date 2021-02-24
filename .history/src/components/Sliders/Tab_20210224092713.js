import React from "react";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import * as S from "./style";
import * as T from "../../themes/Typography";
import Button from "../Button";
import { ReactComponent as Cart } from "./Cart.svg";
import { ReactComponent as Word } from "./Word.svg";
import FamousClock from "../../assets/FamousClock.png";
import { Link } from "react-router-dom";

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
          <Link to="/ProductPage">
            <Button type="filled" width="180px">
              <Cart />
              Add to cart
            </Button>
          </Link>
          <Link to="/ProductPage">
            <Button width="120px">
              <Word />
            </Button>
          </Link>
        </S.Buttons>
        <S.Picture>
          <S.Img src={FamousClock} />
        </S.Picture>
      </S.TextWrapper>
    </div>
  );
}
