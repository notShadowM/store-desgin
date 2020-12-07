import React from "react";
import * as S from "./style";
import Pic1 from "../../assets/Cart/Pic1.png";
import Pic2 from "../../assets/Cart/Pic2.png";
import Pic3 from "../../assets/Cart/Pic3.png";
import Pic4 from "../../assets/Cart/Pic4.png";
import BigPic from "../../assets/Cart/BigPic.png";
import Model1 from "./Model1.png";
import Model2 from "./Model2.png";
import Add from "./Add.png";
import Remove from "./Remove.png";
import { ReactComponent as Cart } from "./Cart.svg";
import { ReactComponent as Word } from "./Word.svg";

export default function AddToCart() {
  return (
    <S.Container>
      <S.Left>
        <S.PathContainer>
          <S.Paths>Home / </S.Paths>
          <S.Paths>Product / </S.Paths>
          <S.Paths>Watches / </S.Paths>
          <S.PathsColored>Way Kambas Mini Ebony</S.PathsColored>
        </S.PathContainer>
        <S.PicContainer>
          <S.ColumnPic>
            <S.SmallPicContainer>
              <S.SmallPic src={Pic1} visible />
            </S.SmallPicContainer>
            <S.SmallPicContainer>
              <S.SmallPic src={Pic2} />
            </S.SmallPicContainer>
            <S.SmallPicContainer>
              <S.SmallPic src={Pic3} />
            </S.SmallPicContainer>
            <S.SmallPicContainer>
              <S.SmallPic src={Pic4} />
            </S.SmallPicContainer>
          </S.ColumnPic>

          <S.Pic>
            <S.Img src={BigPic} />
          </S.Pic>
        </S.PicContainer>
        <S.Back />
      </S.Left>
      <S.Right>
        <S.H1>WAY KAMBAS MINI EBONY</S.H1>
        <S.P2 deleted>Rp 1.280.000</S.P2>
        <S.P>Rp 1.024.000</S.P>
        <S.Psmall>Choose Model</S.Psmall>
        <S.Model>
          <S.ModelPic>
            <S.ModelImg src={Model1} />
          </S.ModelPic>
          <S.ModelPic>
            <S.ModelImg src={Model2} />
          </S.ModelPic>
        </S.Model>
        <S.ButtonsContainer>
          <S.CounterButtons>
            <S.SmallButton>
              <S.SmallIcons style={{ marginTop: "4px" }} src={Remove} />
            </S.SmallButton>

            <S.Counter>1</S.Counter>

            <S.SmallButton type="filled">
              <S.SmallIcons src={Add} />
            </S.SmallButton>
          </S.CounterButtons>

          <S.Buttons>
            <S.Button1 type="filled">
              <Cart /> Add to cart
            </S.Button1>
            <S.Button2>
              <Word />
            </S.Button2>
          </S.Buttons>
        </S.ButtonsContainer>
      </S.Right>
    </S.Container>
  );
}
