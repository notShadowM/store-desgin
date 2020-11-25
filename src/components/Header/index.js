import React from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Search } from "./Search.svg";
import { ReactComponent as Login } from "./Login.svg";
import { ReactComponent as Shopping } from "./Shopping.svg";
import * as S from "./style";
import * as T from "../../themes/Typography";

export default function Header() {
  return (
    <S.Wrapper>
      <S.Logo>
        <Logo />
      </S.Logo>

      <S.Navs>
        <S.Navitems>Watches</S.Navitems>
        <S.Navitems>Eyewear</S.Navitems>
        <S.Navitems>Accessories</S.Navitems>
        <S.Navitems>News</S.Navitems>
      </S.Navs>

      <S.IconsWrapper>
        <S.Search>
          <Search />
        </S.Search>
        <S.Login>
          <Login />
          <T.Navitems size="18px" lineHeight="30.71px">
            Log In
          </T.Navitems>
        </S.Login>
        <S.Shopping>
          <Shopping />
        </S.Shopping>
      </S.IconsWrapper>
    </S.Wrapper>
  );
}
