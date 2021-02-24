import React from "react";
import * as T from "../../themes/Typography";
import * as S from "./style";
import Sun from "../../assets/Sun.png";
import Watch from "../../assets/Watch.png";

export default function DiscoverNow() {
  return (
    <S.Wrapper>
      <S.Card>
        <T.H3 inlineB="inline-block">
          Luxurious{" "}
          <T.H3 inlineB="inline-block" bolder>
            Eyewear
          </T.H3>
        </T.H3>
        <S.P lineHeight="24px" color="sub">
          See the beauty of exotic world with the luxurious glasses
        </S.P>

        <S.BoldP>Discover Now</S.BoldP>

        <S.Pic right="10px" bottom="3px">
          <S.Img src={Sun} />
        </S.Pic>
      </S.Card>
      <S.Card>
        <T.H3 inlineB="inline-block">
          Comfortable{" "}
          <T.H3 inlineB="inline-block" bolder>
            Watches
          </T.H3>
        </T.H3>
        <S.P lineHeight="24px" color="sub">
          Feels the balancing function and beauty in our wooden watches
        </S.P>

        <S.boldP>Discover Now</S.boldP>

        <S.Pic right="20px" bottom="5px">
          <S.Img src={Watch} />
        </S.Pic>
      </S.Card>
    </S.Wrapper>
  );
}
