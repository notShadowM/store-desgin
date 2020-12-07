import styled from "styled-components";
import * as C from "../../themes/ColorThemes/Styled";
import * as T from "../../themes/Typography";

export const Wrapper = styled.div`
  margin-top: 70px;
  margin-bottom: 30px;
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  height: 385px;
`;

export const Card = styled.div`
  width: 23%;
  background-color: ${C.theme.common.white};
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  padding-top: 48px;
  position: relative;
  border: solid transparent 1px;
  transition: border-color 0.3s ease;
  &:hover {
    border-color: ${C.theme.text.main};
    transition: border-color 0.3s ease;
    cursor: pointer;
  }
`;

export const Pic = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const Img = styled.img``;

export const H4 = styled(T.H4)`
  &:hover {
    cursor: pointer;
  }
`;

export const P2 = styled(T.P2)`
  font-weight: 400;
  color: ${C.theme.text.sub};
  line-height: 24px;
  text-decoration: ${(props) => (props.deleted ? "line-through" : "none")};
  text-decoration-color: ${(props) =>
    props.deleted ? C.theme.primary.dark : "none"};
  text-decoration-thickness: 2px;
`;

export const Sales = styled(T.P2)`
  color: ${C.theme.common.white};
  font-weight: 500;
  line-height: 24px;
  background-color: ${C.theme.primary.dark};
  padding: 5px 15px;
  position: absolute;
  top: -12px;
  right: 24px;
`;
export const SalesG = styled(T.P2)`
  color: ${C.theme.common.white};
  font-weight: 500;
  line-height: 24px;
  background-color: #01522d;
  padding: 5px 15px;
  position: absolute;
  top: -12px;
  right: 24px;
`;

export const H2 = styled(T.H2)``;

export const Hr = styled.hr`
  border-top: solid 2px ${C.theme.common.black};
  width: 105px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
