import styled from "styled-components";
import * as C from "../../themes/ColorThemes/Styled";
import { P1, Pbold } from "../../themes/Typography";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const Card = styled.div`
  width: 48%;
  height: 270px;
  background-color: ${C.theme.common.white};
  padding: 20px;
  position: relative;
`;

export const P = styled(P1)`
  margin-top: 8px;
`;

export const BoldP = styled(Pbold)`
  margin-top: 30px;
  position: absolute;
  left: 20;
  top: 40%;

  &:hover {
    cursor: pointer;
  }
`;

export const Pic = styled.div`
  position: absolute;
  right: ${(props) => (props.right ? props.right : "0")};
  bottom: ${(props) => (props.bottom ? props.bottom : "0")};
`;

export const Img = styled.img``;
