import React from "react";
import * as S from "./style";
import Header from "../../components/Header";
import Sliders from "../../components/Sliders";
import DiscoverNow from "../../components/DiscoverNow";

export default function HomePage() {
  return (
    <S.Container>
      <Header />
      <Sliders />
      <DiscoverNow />
    </S.Container>
  );
}
