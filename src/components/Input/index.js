import React from "react";
import * as S from "./style";

export default function Input(props) {
  const { id, name, type, value, label, holder, handleChange, error } = props;

  return (
    <>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={holder}
        onChange={handleChange}
      />
      {error && <div className="warning">{error}</div>}
    </>
  );
}
