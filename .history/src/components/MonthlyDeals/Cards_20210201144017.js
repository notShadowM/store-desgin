import React, { useState, useEffect } from "react";
import * as S from "./style";
import * as T from "../../themes/Typography";
import Card1 from "../../assets/Card1.png";
import { ReactComponent as Heart } from "./Heart.svg";
import axios from "axios";

// src={"https://mohammed-al-nabahin.herokuapp.com/" + api[0].image}

export default function Cards() {
  const [api, setApi] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://mohammed-al-nabahin.herokuapp.com/api/products")
      .then((data) => {
        console.log(data.data.data);
        setApi(data.data.data);
        setLoading(false);
      });
  }, []);

  return (
    <S.CardsWrapper>
      <S.Card>
        <S.Picture>
          <S.Img
            src={
              loading ||
              "https://mohammed-al-nabahin.herokuapp.com/" + api[0].image
            }
          />
        </S.Picture>
        <S.H4 bolder>{loading || api[0].title}</S.H4>
        <S.P2>{loading || api[0].sale}% Off</S.P2>
        <S.P2 deleted>
          &nbsp;Rp {loading || api[0].deleted_price}.000 &nbsp;
        </S.P2>
        <T.H4>Rp {loading || api[0].price}.000</T.H4>
        <S.ButtonsWrapper>
          <S.Button heart>
            <Heart />
          </S.Button>
          <S.Button type="filled">
            <S.Pbutton>Add to cart</S.Pbutton>
          </S.Button>
        </S.ButtonsWrapper>
      </S.Card>
      <S.Card>
        <S.Picture>
          <S.Img
            src={
              loading ||
              "https://mohammed-al-nabahin.herokuapp.com/" + api[1].image
            }
          />
        </S.Picture>
        <S.H4 bolder>{loading || api[1].title}</S.H4>
        <S.P2>{loading || api[1].sale}% Off</S.P2>
        <S.P2 deleted>
          &nbsp;Rp {loading || api[1].deleted_price}.000 &nbsp;
        </S.P2>
        <T.H4>Rp {loading || api[1].price}.000</T.H4>
        <S.ButtonsWrapper>
          <S.Button heart>
            <Heart />
          </S.Button>
          <S.Button type="filled">
            <S.Pbutton>Add to cart</S.Pbutton>
          </S.Button>
        </S.ButtonsWrapper>
      </S.Card>
      <S.Card>
        <S.Picture>
          <S.Img
            src={
              loading ||
              "https://mohammed-al-nabahin.herokuapp.com/" + api[2].image
            }
          />
        </S.Picture>
        <S.H4 bolder>{loading || api[2].title}</S.H4>
        <S.P2>{loading || api[2].sale}% Off</S.P2>
        <S.P2 deleted>
          &nbsp;Rp {loading || api[2].deleted_price}.000 &nbsp;
        </S.P2>
        <T.H4>Rp {loading || api[2].price}.000</T.H4>
        <S.ButtonsWrapper>
          <S.Button heart>
            <Heart />
          </S.Button>
          <S.Button type="filled">
            <S.Pbutton>Add to cart</S.Pbutton>
          </S.Button>
        </S.ButtonsWrapper>
      </S.Card>
      <S.Card longer>
        <S.Picture>
          <S.Img
            src={
              loading ||
              "https://mohammed-al-nabahin.herokuapp.com/" + api[3].image
            }
          />
        </S.Picture>
        <S.H4 bolder>{loading || api[3].title}</S.H4>
        <S.P2>{loading || api[3].sale}% Off</S.P2>
        <S.P2 deleted>
          &nbsp;Rp {loading || api[3].deleted_price}.000 &nbsp;
        </S.P2>
        <T.H4>Rp {loading || api[3].price}.000</T.H4>
        <S.ButtonsWrapper>
          <S.Button heart>
            <Heart />
          </S.Button>
          <S.Button type="filled">
            <S.Pbutton>Add to cart</S.Pbutton>
          </S.Button>
        </S.ButtonsWrapper>
      </S.Card>
    </S.CardsWrapper>
  );
}
