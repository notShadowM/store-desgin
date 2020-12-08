import React from "react";
import * as S from "./style";
import Input from "../Input";

export default function LoginForm() {
  return (
    <>
      <S.H1>Login</S.H1>
      <S.Form novalidate>
        <Input
          id="name"
          name="name"
          type="text"
          label="Name"
          holder="Enter Your Name"
        />

        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          holder="Enter Your Password"
        />

        <S.Button>Login</S.Button>
      </S.Form>
    </>
  );
}
