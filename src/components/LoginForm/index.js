import React, { useState } from "react";
import * as S from "./style";
import Input from "../Input";
import * as yup from "yup";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const sets = { email: setEmail, password: setPassword };

  const handleChange = (e) => {
    const { value, id } = e.target;
    sets[id](value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const signUpSchema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    });

    signUpSchema
      .validate({ email, password }, { abortEarly: false })
      .then((data) => {
        setErrors({});
      })
      .catch((err) => {
        const errors = {};
        err.inner.forEach(({ message, params }) => {
          errors[params.path] = message;
        });
        setErrors(errors);
      });
  };

  return (
    <>
      <S.H1>Login</S.H1>
      <S.Form noValidate onSubmit={handleSubmit}>
        <Input
          id="email"
          name="email"
          value={email}
          type="email"
          label="Email"
          holder="Enter Your Email"
          handleChange={handleChange}
          error={errors.email}
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
        />

        <S.Button>Login</S.Button>
      </S.Form>
    </>
  );
}
