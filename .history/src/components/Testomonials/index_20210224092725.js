import React from "react";
import * as S from "./style";
import image from "./image.png";
import { ReactComponent as Lines } from "./Lines.svg";

export default function Testimonials() {
  return (
    <S.Wrapper>
      <S.Left>
        <S.Picture>
          <S.Img src={image} />
        </S.Picture>
        <S.Back />
        <S.Lines>
          <Lines />
        </S.Lines>
      </S.Left>
      <S.Right>
        <S.H2>
          Testimonials
          <S.Hr />
        </S.H2>
        <S.P1>
          Loving my new KAILI watch from @matoa_id, the first ever Indonesian
          watch local brand that uses wood as their main material. Like any
          other Matoa products, KAILI is inspired by Indonesian heritage.
        </S.P1>

        <S.H3>Gita Savitri</S.H3>
        <S.P2>Content Creator/Influencer</S.P2>
      </S.Right>
    </S.Wrapper>
  );
}
