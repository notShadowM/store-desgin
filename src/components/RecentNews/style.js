import styled from "styled-components";
import * as T from "../../themes/Typography";
import * as C from "../../themes/ColorThemes/Styled";
import * as B from "../Button/style";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 200px;
`;

export const Left = styled.div`
  width: 30%;
`;

export const Hr = styled.hr`
  border-top: solid 2px ${C.theme.common.black};
  width: 105px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const P = styled(T.P2)`
  font-weight: 400;
  line-height: 40px;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: ${C.theme.text.sub};
  margin-top: 200px;
`;

export const H2 = styled(T.H2)`
  font-weight: 400;
  line-height: 48px;
`;

export const Button = styled(B.Button)`
  width: 160px;
  height: 58px;
  padding-top: 15px;
  margin-top: 60px;
  margin-bottom: 60px;
  border: Solid 2px ${C.theme.primary.dark};
`;

export const Pb = styled(T.P2)`
  font-weight: 400;
  line-height: 27.3px;
  letter-spacing: 0.02em;
  color: ${C.theme.text.skeletonButtons};
`;

export const Right = styled.div`
  width: 50%;
  position: relative;
`;

export const Picture = styled.div`
  margin-left: -50px;
  margin-top: 69px;

  /* position: absolute;
  left: -380px;
  bottom: -175px;
  z-index: 1; */
`;

export const Img = styled.img`
  width: 700px;
  height: 480px;
  /* position: absolute; */
  /* z-index: -1; */
`;

export const Back = styled.div`
  width: 720px;
  height: 500px;
  background-color: ${C.theme.primary.light};
  position: absolute;
  right: -394px;
  top: 10px;
  z-index: -2;
`;

export const Lines = styled.div`
  position: absolute;
  z-index: -1;
  top: -40px;
  right: -394px;
`;
