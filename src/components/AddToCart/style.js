import styled from "styled-components";
import * as T from "../../themes/Typography";
import * as C from "../../themes/ColorThemes/Styled";
import * as B from "../Button/style";

export const Container = styled.div`
  width: 100%;
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
`;

export const PathContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

export const Paths = styled(T.P2)`
  font-weight: 400;
  line-height: 27.3px;
  letter-spacing: 0.02em;
`;

export const PathsColored = styled(Paths)`
  color: ${C.theme.primary.dark};
`;

export const Left = styled.div`
  width: 50%;
  position: relative;
`;

export const PicContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`;

export const ColumnPic = styled.div`
  display: flex;
  height: 480px;
  flex-direction: column;
  justify-content: space-between;
`;

export const SmallPicContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const SmallPic = styled.img`
  width: 90px;
  opacity: ${(props) => (props.visible ? "100%" : "45%")};
  transition: opacity 0.5s ease-in-out;
  &:hover {
    opacity: 100%;
    transition: opacity 0.5s ease-in-out;
  }
`;

export const Pic = styled.div``;

export const Img = styled.img`
  width: 350px;
`;

export const Back = styled.div`
  width: 630px;
  height: 548px;
  background-color: ${C.theme.primary.light};
  position: absolute;
  left: -204px;
  top: 70px;
  z-index: -1;
`;

export const Right = styled.div`
  width: 45%;
`;

export const H1 = styled(T.H1)`
  margin-top: 110px;
`;

export const P2 = styled(T.P2)`
  font-weight: 400;
  font-size: 20px;
  color: ${C.theme.text.sub};
  line-height: 28px;
  text-decoration: ${(props) => (props.deleted ? "line-through" : "none")};
  text-decoration-color: ${(props) =>
    props.deleted ? C.theme.primary.dark : "none"};
  text-decoration-thickness: 2px;
  margin-top: 5px;
`;

export const P = styled(T.H4)`
  font-weight: 500;
  line-height: 40.94px;
  letter-spacing: 0.02em;
`;

export const Psmall = styled(T.P2)`
  font-weight: 600;
  line-height: 27.3px;
  letter-spacing: 0.02em;
  margin-top: 10px;
`;

export const Model = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;

export const ModelPic = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const ModelImg = styled.img`
  width: 44px;
`;

export const ButtonsContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const CounterButtons = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;
  margin-top: 9px;
`;

export const SmallIcons = styled.img`
  width: 24px;
`;

export const SmallButton = styled(B.Button)`
  height: 28px;
  width: 28px;
  padding-top: ${(props) => (props.type === "filled" ? "0px" : "")};
`;

export const Counter = styled(T.H2)`
  font-weight: 400;
  line-height: 61.42px;
  margin-top: -18px;
`;

export const Buttons = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
`;

export const Button1 = styled(B.Button)`
  width: 180px;
`;

export const Button2 = styled(B.Button)`
  width: 120px;
`;
