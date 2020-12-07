import React from "react";
import * as S from "./style";
import Header from "../../components/Header";
import AddToCart from "../../components/AddToCart";
import Details from "../../components/Details";
import Footer from "../../components/Footer";

export default function ProductPage() {
  return (
    <S.Container>
      <Header />
      <AddToCart />
      <Details />
      <Footer />
    </S.Container>
  );
}
