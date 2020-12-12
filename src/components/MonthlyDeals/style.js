import styled from "styled-components";
import * as C from "../../themes/ColorThemes/Styled";
import * as T from "../../themes/Typography";
import * as B from "../Button/style";

export const Wrapper = styled.div`
  margin-top: 112px;
  width: 100%;
  background-color: inherit;
  margin-bottom: 100px;
`;

export const Hr = styled.hr`
  border-top: solid 2px ${C.theme.common.black};
  width: 105px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 410px;
`;

export const Card = styled.div`
  width: 23%;
  background-color: ${C.theme.common.white};
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 100px;
  height: 380px;
  transition: height 0.3s linear;
  transition: box-shadow 0.3;
  position: relative;

  &:hover {
    /* height: 395px; */
    height: ${(props) => (props.longer ? "425px" : "395px")};
    box-shadow: 0 6px 10px #888888;
    transition: height 0.2s linear;
    transition: box-shadow 0.3;
  }
`;

export const Picture = styled.div`
  /* position: absolute;
  z-index: 1; */
  margin-top: -50px;
  margin-bottom: 25px;

  &:hover {
    cursor: pointer;
  }
`;

export const Img = styled.img`
  /* position: absolute; */
  /* z-index: -1; */
  width: 207px;
  height: 221px;
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

export const H4 = styled(T.H4)`
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  ${Card}:hover & {
    margin-top: 30px;
    /* position: absolute;
    bottom: 0; */
  }
`;

export const Button = styled(B.Button)`
  line-height: 24px;
  font-size: 16px;
  width: ${(props) => (props.heart ? "20%" : "75%")};
  visibility: hidden;
  transition: visibility 0s linear 0s, opacity 300ms;
  ${Card}:hover & {
    visibility: visible;
    transition: visibility 0.1s linear 0.1s, opacity 300ms;
  }
`;

export const Pbutton = styled(T.P2)`
  font-weight: 400;
  line-height: 24px;
  color: ${C.theme.common.white};
`;
