import styled from "styled-components";
import * as C from "../../themes/ColorThemes/Styled";
import * as T from "../../themes/Typography";

export const Wrapper = styled.div`
  height: 70px;
`;

export const Input = styled.input`
  width: 350px;
  height: 40px;
  border: solid 1px transparent;
  border-bottom: solid 1px ${C.theme.primary.main};
  font-family: Taviraj;
  outline: none;
  padding: 10px 18px;
  border-radius: 5px;
  transition: border-color 0.3s ease-in-out;
  margin-top: 7px;

  position: relative;
  z-index: 3;

  &:focus {
    border: solid 1px ${C.theme.primary.main};
    transition: border-color 0.3s ease-in-out;
  }
`;

export const Label = styled.label`
  font-family: Taviraj;
  font-size: 15px;
  color: #696f79;
  display: block;
  margin-top: 30px;

  position: relative;
  z-index: 3;
`;

export const Error = styled(T.P2)`
  color: red;
  font-size: 13px;
  margin: 0;
  padding: 0;
  height: 20px;
`;
