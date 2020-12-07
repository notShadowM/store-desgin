import React from "react";
import * as S from "./style";
import Desgin from "./Desgin.png";

export default function Details() {
  return (
    <S.Wrapper>
      <S.Navbar>
        <S.NavItem active>Detail</S.NavItem>
        <S.NavItem>Warranty</S.NavItem>
        <S.NavItem>Custom Engrave</S.NavItem>
        <S.NavItem>How to Adjust</S.NavItem>
        <S.NavItem>How to Care</S.NavItem>
        <S.NavItem>Gallery</S.NavItem>
      </S.Navbar>

      <S.Paragraphs>
        <S.Para>
          <S.H4>Material</S.H4>
          <S.P>
            MATOA Way Kambas - Sumatran Rhino comes with a material form of
            Makassar Ebony (Diospyros celebica). This wood is chosen to
            represent the Sumatran Rhino's skin which is designed with an
            overlap effect on its strap to represent Rhino's skin. Sumatran
            Rhino has unique skin fold, the skin is fairly thin about 10-16mm,
            and is soft and pliable.
          </S.P>
        </S.Para>

        <S.Para>
          <S.H4>Case</S.H4>
          <S.P>
            The case on this timepiece is made with Height 12.5mm, Width 36mm,
            Length 33mm and Dial Opening 25mm. The glass is equipped with K1
            flat glass to increase the enhanced durability on timepieces as
            scratch resistant and anti fingerprint. This timepiece is also
            equipped with Hand Polish Brass Spacer for a longer usage periods.
          </S.P>
        </S.Para>

        <S.Para>
          <S.H4>Movement</S.H4>
          <S.P>
            For the first time, MATOA comes with Seiko Quartz VD78 movement with
            small second function. A small second hand is above 6 o'clock
            position. This second hand dial is dedicated to Sumatran Rhino whom
            every second of its life is so precious because whenever Sumatran
            Rhino goes, it can be threatened by illegal poaching
          </S.P>
        </S.Para>

        <S.Para>
          <S.H4>Dial</S.H4>
          <S.P>
            In the dial, there are double layer of Makassar Ebony Veneer with 3,
            9 {"&"} 12 o'clock laser cut brass plate index.
          </S.P>
        </S.Para>

        <S.Para>
          <S.H4>Hand</S.H4>
          <S.P>
            The hour, minute {"&"} small second hands on MATOA Way Kambas -
            Sumatran Rhino is outfitted with skeleton hand and brush finished
            with Gold Matte color. This new design aims at adding a value for
            this special edition.
          </S.P>
        </S.Para>

        <S.Para>
          <S.H4>Important to Note</S.H4>
          <S.P>
            Wood color on watches is produced from a combination of mature and
            fresh wood but should not be viewed as a defect. It is a very
            natural process of wood aging.
          </S.P>
        </S.Para>
      </S.Paragraphs>
      <S.Pic>
        <S.Img src={Desgin} />
      </S.Pic>
    </S.Wrapper>
  );
}
