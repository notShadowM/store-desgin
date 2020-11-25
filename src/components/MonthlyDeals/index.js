import React from "react";
import * as S from "./style";
import * as T from "../../themes/Typography";
import Cards from "./Cards";

export default function MonthlyDeals() {
  return (
    <S.Wrapper>
      <T.H2>Monthly Deals</T.H2>
      <S.Hr />
      <Cards />
    </S.Wrapper>
  );
}
