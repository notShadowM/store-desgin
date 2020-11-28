import React from "react";
import * as S from "./style";
import * as T from "../../themes/Typography";
import B1 from "./B1.png";
import B2 from "./B2.png";
import B3 from "./B3.png";
import B4 from "./B4.png";
import B5 from "./B5.png";
import B6 from "./B6.png";
import B7 from "./B7.png";
import B8 from "./B8.png";
import B9 from "./B9.png";
import B10 from "./B10.png";
import Logo from "./Logo.png";
import Facebook from "./Facebook.png";
import Twitter from "./Twitter.png";
import Instagram from "./Instagram.png";
import Youtube from "./Youtube.png";

export default function Footer() {
  return (
    <S.Wrapper>
      <S.Wrapper1>
        <S.FullLine>
          <S.Picture>
            <S.Img src={B1} />
          </S.Picture>
          <S.Picture>
            <S.Img src={B2} />
          </S.Picture>
          <S.Picture>
            <S.Img src={B3} />
          </S.Picture>
          <S.Picture>
            <S.Img src={B4} />
          </S.Picture>
          <S.Picture>
            <S.Img src={B5} />
          </S.Picture>
        </S.FullLine>
        <S.FullLine>
          <S.Picture>
            <S.Img src={B6} />
          </S.Picture>
          <S.Picture>
            <S.Img src={B7} />
          </S.Picture>
          <S.Picture>
            <S.Img src={B8} />
          </S.Picture>
          <S.Picture>
            <S.Img src={B9} />
          </S.Picture>
          <S.Picture>
            <S.Img src={B10} />
          </S.Picture>
        </S.FullLine>
      </S.Wrapper1>

      <S.Wrapper2>
        <S.Colomun>
          <S.Picture style={{ marginBottom: "30px" }}>
            <S.Img src={Logo} />
          </S.Picture>
          <S.SmallHeader>Address</S.SmallHeader>
          <S.FooterP>Store {"&"} Office </S.FooterP>
          <S.FooterP>
            Jl. Setrasari Kulon III, No. 10-12, Sukarasa, Sukasari, Bandung,
            Jawa Barat, Indonesia 40152
          </S.FooterP>

          <S.SmallHeader>Office Hour</S.SmallHeader>
          <S.FooterP>Monday - Sunday</S.FooterP>
          <S.FooterP>10.00 - 18.00</S.FooterP>
        </S.Colomun>

        <S.Colomun>
          <T.FooterH>Get in touch</T.FooterH>
          <S.Hr />
          <S.ColomunCells>
            <S.Cell1>
              <S.SmallHeader2>Phone</S.SmallHeader2>
            </S.Cell1>
            <S.Cell2>
              <T.FooterP>022-20277564</T.FooterP>
            </S.Cell2>
          </S.ColomunCells>

          <S.ColomunCells>
            <S.Cell1>
              <S.SmallHeader2>Service Center</S.SmallHeader2>
            </S.Cell1>
            <S.Cell2>
              <T.FooterP>0811-233-8899</T.FooterP>
            </S.Cell2>
          </S.ColomunCells>

          <S.ColomunCells>
            <S.Cell1>
              <S.SmallHeader2>Customer Service</S.SmallHeader2>
            </S.Cell1>
            <S.Cell2>
              <T.FooterP>0811-235-9988</T.FooterP>
            </S.Cell2>
          </S.ColomunCells>

          <S.Media>
            <S.Picture>
              <S.Img src={Facebook} />
            </S.Picture>
            <S.Picture>
              <S.Img src={Instagram} />
            </S.Picture>
            <S.Picture>
              <S.Img src={Twitter} />
            </S.Picture>
            <S.Picture>
              <S.Img src={Youtube} />
            </S.Picture>
          </S.Media>
          {/*  */}
        </S.Colomun>

        <S.Colomun>
          <T.FooterH>Useful Link</T.FooterH>
          <S.Hr />
          <S.FooterP1>Warranty {"&"} Complaints</S.FooterP1>
          <S.FooterP1>Order {"&"} Shipping</S.FooterP1>
          <S.FooterP1>Tracking Order</S.FooterP1>
          <S.FooterP1>About Us</S.FooterP1>
          <S.FooterP1>Repair</S.FooterP1>
          <S.FooterP1>Terms</S.FooterP1>
          <S.FooterP1>FAQ</S.FooterP1>
        </S.Colomun>

        <S.Colomun>
          <T.FooterH>Campaign</T.FooterH>
          <S.Hr />
          <S.FooterP1>Mengenal Arti Cukup</S.FooterP1>
          <S.FooterP1>Tell Your Difference</S.FooterP1>
          <S.FooterP1>Waykambas</S.FooterP1>
          <S.FooterP1>Rebrand</S.FooterP1>
          <S.FooterP1>Gallery</S.FooterP1>
          <S.FooterP1>Singo</S.FooterP1>
          <S.FooterP1>Rakai</S.FooterP1>
        </S.Colomun>
      </S.Wrapper2>
    </S.Wrapper>
  );
}
