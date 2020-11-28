import React from "react";
import * as S from "./style";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
import pic4 from "./pic4.png";
import pic5 from "./pic5.png";

export default function Instagram() {
  return (
    <S.Wrapper>
      <S.H2>Instagram</S.H2>
      <S.Hr />
      <S.imgWrapper>
        <S.Picture>
          <S.Img src={pic1} />
        </S.Picture>
        <S.Picture>
          <S.Img src={pic2} />
        </S.Picture>
        <S.Picture>
          <S.Img src={pic3} />
        </S.Picture>
        <S.Picture>
          <S.Img src={pic4} />
        </S.Picture>
        <S.Picture>
          <S.Img src={pic5} />
        </S.Picture>
      </S.imgWrapper>
    </S.Wrapper>
  );
}
