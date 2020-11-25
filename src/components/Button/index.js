import React from "react";
import * as S from "./style";

export default function Button(props) {
  return (
    <S.Button width={props.width} type={props.type}>
      {props.children}
    </S.Button>
  );
}
