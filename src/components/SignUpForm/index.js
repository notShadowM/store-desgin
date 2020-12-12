import React, { useState } from "react";
import * as S from "./style";
import Input from "../Input";
import * as yup from "yup";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    nickName: "",
    password: "",
    rePassword: "",
  });

  const sets = {
    email: setEmail,
    nickName: setNickName,
    password: setPassword,
    repassword: setRepassword,
  };

  const handleChange = (e) => {
    const { value, id, name } = e.target;
    sets[id](value);

    fieldSchema(name)
      .validate(value)
      .then((data) => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.message });
      });
  };

  const fieldSchema = (fieldName) => {
    switch (fieldName) {
      case "email":
        return yup.string().email().required();
      case "nickName":
        return yup.string().required();
      case "password":
        return yup.string().required();
      case "rePassword":
        return yup
          .string()
          .test(
            "match testing",
            "This passowrd doesn't match the previous one",
            (value) => value === password
          )
          .required();

      default:
        throw new Error("invalid fieldName try again");
    }
  };

  // const handleFoucs = (e) => {
  //   console.log("hello");
  //   const { name, value } = e.target;
  //   fieldSchema(name)
  //     .validate(value)
  //     .then((data) => {
  //       setErrors({ ...errors, [name]: "" });
  //     })
  //     .catch((err) => {
  //       setErrors({ ...errors, [name]: err.message });
  //     });
  // };

  return (
    <>
      <S.H1>Sign Up</S.H1>
      <S.Form novalidate>
        <Input
          id="email"
          name="email"
          value={email}
          type="email"
          label="Email"
          holder="Enter Your Email"
          handleChange={handleChange}
          error={errors.email}
          // foucs={handleFoucs}
        />

        <Input
          id="nickName"
          name="nickName"
          value={nickName}
          type="text"
          label="Nick Name"
          holder="Enter Your Nick Name"
          handleChange={handleChange}
          error={errors.nickName}
          // foucs={handleFoucs}
        />

        <Input
          id="password"
          name="password"
          value={password}
          type="password"
          label="Password"
          holder="Enter Your Password"
          handleChange={handleChange}
          error={errors.password}
          // foucs={handleFoucs}
        />

        <Input
          id="repassword"
          name="rePassword"
          value={repassword}
          type="password"
          label="RePassword"
          holder="Enter Your RePassword"
          handleChange={handleChange}
          error={errors.rePassword}
          // foucs={handleFoucs}
        />

        <S.Button>Sign Up</S.Button>
      </S.Form>
    </>
  );
}
