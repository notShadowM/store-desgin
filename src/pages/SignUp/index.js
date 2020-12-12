import React from "react";
import * as S from "./style";
import SignUpHeader from "../../components/SignUpHeader";
import SignUpForm from "../../components/SignUpForm";
import { ReactComponent as Lines } from "./Lines.svg";

export default function HomePage() {
  return (
    <S.Container>
      <SignUpHeader />
      <SignUpForm />

      <S.Line1>
        <Lines />
      </S.Line1>
    </S.Container>
  );
}
