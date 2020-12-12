import styled from "styled-components";
import * as C from "../../themes/ColorThemes/Styled";
import * as T from "../../themes/Typography";
import * as B from "../Button/style";

export const Form = styled.form`
  margin-top: 20px;
`;
export const H1 = styled(T.H1)`
  margin-top: 50px;
`;

export const Button = styled(B.Button)`
  background-color: ${C.theme.primary.dark};
  color: ${C.theme.common.white};
  margin-top: 30px;
  font-size: 17px;
  height: 45px;
  width: 90px;
  border-radius: 5px;
  padding-top: 5px;
`;
