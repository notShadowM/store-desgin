import React from "react";
import * as S from "./style";
import * as T from "../../themes/Typography";
import WhiteClock from "../../assets/WhiteClock.png";

export default function Cards() {
  return (
    <S.CardWrapper>
      <S.Picture>
        <S.Img src={WhiteClock} />
      </S.Picture>
      <S.TextWrapper>
        <T.H4>Way Kambas Maple</T.H4>
        <S.H4>Rp 1.280.000</S.H4>
      </S.TextWrapper>
    </S.CardWrapper>
  );
}
