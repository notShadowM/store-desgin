import styled, { css } from "styled-components";
import * as C from "../../themes/ColorThemes/Styled";
import * as T from "../../themes/Typography";

const fontFaces = css`
  @import url("https://fonts.googleapis.com/css2?family=Taviraj&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
`;

export const Button = styled.button`
  width: ${(props) => props.width};
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: ${(props) =>
    props.type === "filled" ? C.theme.primary.dark : "inherit"};
  color: ${(props) =>
    props.type === "filled" ? C.theme.common.white : C.theme.primary.dark};
  border: solid 1px ${C.theme.primary.dark};
  font-family: Taviraj;
  font-weight: 400;
  font-size: 20px;
  line-height: 34.12px;
  letter-spacing: 0.02em;
  display: flex;
  justify-content: space-evenly;
  padding: 8px;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 4px ${C.theme.primary.dark};
    transition: box-shadow 0.5s;
  }
`;
