import React from "react";
import * as S from "./style";
import Cards from "./Cards";

export default function Brands() {
  return (
    <S.Wrapper>
      <S.ColumnWrapper>
        <S.Column>
          <S.H2>Maple Series</S.H2>
          <S.Hr />
          <Cards />
          <Cards />
          <Cards />
        </S.Column>

        <S.Column>
          <S.H2>Maple Series</S.H2>
          <S.Hr />
          <Cards />
          <Cards />
          <Cards />
        </S.Column>

        <S.Column>
          <S.H2>Maple Series</S.H2>
          <S.Hr />
          <Cards />
          <Cards />
          <Cards />
        </S.Column>
      </S.ColumnWrapper>

      <S.LastLine>
        <S.LongHR />
        <S.Button>
          <S.Pb>See More</S.Pb>
        </S.Button>
        <S.LongHR />
      </S.LastLine>
    </S.Wrapper>
  );
}
