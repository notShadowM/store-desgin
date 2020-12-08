import React from "react";
import * as S from "./style";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

export default function LoginHeader() {
  return (
    <S.Wrapper>
      <S.Pic>
        <Logo />
      </S.Pic>

      <S.Mode>
        <S.Type active>Login</S.Type>

        <S.Type>Sign up</S.Type>
      </S.Mode>
    </S.Wrapper>
  );
}
