import React from "react";
import * as S from "./style";
import Pic1 from "./Pic1.png";
import Pic2 from "./Pic2.png";
import Pic3 from "./Pic3.png";

export default function Relates() {
  return (
    <S.Wrapper>
      <S.H2>Relate Products</S.H2>
      <S.Hr />

      <S.CardsWrapper>
        <S.Card>
          <S.Pic>
            <S.Img src={Pic1} />
          </S.Pic>
          <S.H4 bolder>Singo Maple</S.H4>
          <S.P2 deleted>Rp 1.500.000</S.P2>
          <S.H4>Rp 1.264.000</S.H4>
          <S.Sales>20% OFF</S.Sales>
        </S.Card>
        <S.Card>
          <S.Pic>
            <S.Img src={Pic2} />
          </S.Pic>
          <S.H4 bolder>Sikka (Ebony {"&"} Maple)</S.H4>
          <S.H4>Rp 1.264.000</S.H4>
          <S.SalesG>NEW</S.SalesG>
        </S.Card>
        <S.Card>
          <S.Pic>
            <S.Img src={Pic3} />
          </S.Pic>
          <S.H4 bolder>Sunda</S.H4>
          <S.H4>Rp 1.170.000</S.H4>
        </S.Card>
        <S.Card>
          <S.Pic>
            <S.Img src={Pic1} />
          </S.Pic>
          <S.H4 bolder>Singo Maple</S.H4>
          <S.P2 deleted>Rp 1.280.000</S.P2>
          <S.H4>Rp 960.000</S.H4>
          <S.Sales>25% OFF</S.Sales>
        </S.Card>
      </S.CardsWrapper>
    </S.Wrapper>
  );
}
