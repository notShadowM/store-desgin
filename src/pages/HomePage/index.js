import React from "react";
import * as S from "./style";
import Header from "../../components/Header";
import Sliders from "../../components/Sliders";
import DiscoverNow from "../../components/DiscoverNow";
import MonthlyDeals from "../../components/MonthlyDeals";
import RecentNews from "../../components/RecentNews";
import Brands from "../../components/Brands";

export default function HomePage() {
  return (
    <S.Container>
      <Header />
      <Sliders />
      <DiscoverNow />
      <MonthlyDeals />
      <RecentNews />
      <Brands />
    </S.Container>
  );
}
