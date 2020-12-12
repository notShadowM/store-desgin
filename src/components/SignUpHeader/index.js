import React from "react";
import * as S from "./style";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

export default function LoginHeader() {
  return (
    <S.Wrapper>
      <Link to="/">
        <S.Pic>
          <Logo />
        </S.Pic>
      </Link>

      <S.Mode>
        <Link to="/Login">
          <S.Type>Login</S.Type>
        </Link>
        <Link to="/SignUp">
          <S.Type active>Sign up</S.Type>
        </Link>
      </S.Mode>
    </S.Wrapper>
  );
}
