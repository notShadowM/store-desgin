import React from "react";
import * as S from "./style";
import Header from "../../components/Header";
import Sliders from "../../components/Sliders";
import DiscoverNow from "../../components/DiscoverNow";
import MonthlyDeals from "../../components/MonthlyDeals";
import RecentNews from "../../components/RecentNews";
import Brands from "../../components/Brands";
import Testimonials from "../../components/Testomonials";

export default function HomePage() {
  return (
    <S.Container>
      <Header />
      <Sliders />
      <DiscoverNow />
      <MonthlyDeals />
      <RecentNews />
      <Brands />
      <Testimonials />
    </S.Container>
  );
}
