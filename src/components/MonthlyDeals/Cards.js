import React from "react";
import * as S from "./style";
import * as T from "../../themes/Typography";
import Card1 from "../../assets/Card1.png";
import { ReactComponent as Heart } from "./Heart.svg";

export default function Cards() {
  return (
    <S.CardsWrapper>
      <S.Card>
        <S.Picture>
          <S.Img src={Card1} />
        </S.Picture>
        <S.H4 bolder>Singo Maple</S.H4>
        <S.P2>20% Off</S.P2>
        <S.P2 deleted>&nbsp;Rp 1.500.000 &nbsp;</S.P2>
        <T.H4>Rp 1.264.000</T.H4>
        <S.ButtonsWrapper>
          <S.Button heart>
            <Heart />
          </S.Button>
          <S.Button type="filled">
            <S.Pbutton>Add to cart</S.Pbutton>
          </S.Button>
        </S.ButtonsWrapper>
      </S.Card>
      <S.Card>
        <S.Picture>
          <S.Img src={Card1} />
        </S.Picture>
        <S.H4 bolder>Singo Maple</S.H4>
        <S.P2>20% Off</S.P2>
        <S.P2 deleted>&nbsp;Rp 1.500.000 &nbsp;</S.P2>
        <T.H4>Rp 1.264.000</T.H4>
        <S.ButtonsWrapper>
          <S.Button heart>
            <Heart />
          </S.Button>
          <S.Button type="filled">
            <S.Pbutton>Add to cart</S.Pbutton>
          </S.Button>
        </S.ButtonsWrapper>
      </S.Card>
      <S.Card>
        <S.Picture>
          <S.Img src={Card1} />
        </S.Picture>
        <S.H4 bolder>Singo Maple</S.H4>
        <S.P2>20% Off</S.P2>
        <S.P2 deleted>&nbsp;Rp 1.500.000 &nbsp;</S.P2>
        <T.H4>Rp 1.264.000</T.H4>
        <S.ButtonsWrapper>
          <S.Button heart>
            <Heart />
          </S.Button>
          <S.Button type="filled">
            <S.Pbutton>Add to cart</S.Pbutton>
          </S.Button>
        </S.ButtonsWrapper>
      </S.Card>
      <S.Card>
        <S.Picture>
          <S.Img src={Card1} />
        </S.Picture>
        <S.H4 bolder>Singo Maple</S.H4>
        <S.P2>20% Off</S.P2>
        <S.P2 deleted>&nbsp;Rp 1.500.000 &nbsp;</S.P2>
        <T.H4>Rp 1.264.000</T.H4>
        <S.ButtonsWrapper>
          <S.Button heart>
            <Heart />
          </S.Button>
          <S.Button type="filled">
            <S.Pbutton>Add to cart</S.Pbutton>
          </S.Button>
        </S.ButtonsWrapper>
      </S.Card>
    </S.CardsWrapper>
  );
}
