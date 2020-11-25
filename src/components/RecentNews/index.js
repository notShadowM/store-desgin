import React from "react";
import * as S from "./style";
import * as T from "../../themes/Typography";
import Thumbbnail from "./Thumbnail.png";
import { ReactComponent as Lines } from "./Lines.svg";

export default function RecentNews() {
  return (
    <S.Wrapper>
      <S.Left>
        <T.H2>Recent News</T.H2>
        <S.Hr />

        <S.P>Where To Travel</S.P>
        <S.H2>Matoa Where To Travel? Yogyakarta</S.H2>
        <S.Button>
          <S.Pb>Discover</S.Pb>
        </S.Button>
      </S.Left>
      <S.Right>
        <S.Picture>
          <S.Img src={Thumbbnail} />
        </S.Picture>
        <S.Lines>
          <Lines />
        </S.Lines>
        <S.Back />
      </S.Right>
    </S.Wrapper>
  );
}
