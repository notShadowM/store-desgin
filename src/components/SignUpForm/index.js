import React from "react";
import * as S from "./style";
import Input from "../Input";

export default function LoginForm() {
  return (
    <>
      <S.H1>Sign Up</S.H1>
      <S.Form novalidate>
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          holder="Enter Your Email"
        />

        <Input
          id="nickName"
          name="nickName"
          type="text"
          label="Nick Name"
          holder="Enter Your Nick Name"
        />

        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          holder="Enter Your Password"
        />

        <Input
          id="repassword"
          name="repassword"
          type="password"
          label="RePassword"
          holder="Enter Your RePassword"
        />

        <S.Button>Sign Up</S.Button>
      </S.Form>
    </>
  );
}
