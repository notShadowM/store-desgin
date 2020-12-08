import React from "react";
import * as S from "./style";
import LoginHeader from "../../components/LoginHeader";
import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";
import { ReactComponent as Lines } from "./Lines.svg";

export default function HomePage() {
  return (
    <S.Container>
      <LoginHeader />
      {/* <LoginForm /> */}
      <SignUpForm />

      <S.Line1>
        <Lines />
      </S.Line1>
    </S.Container>
  );
}
