import styled from "styled-components";
import * as C from "../../themes/ColorThemes/Styled";
import * as T from "../../themes/Typography";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 200px;
`;

export const Left = styled.div`
  width: 50%;
  position: relative;
`;

export const Picture = styled.div`
  /* position: absolute; */
  /* left: -380px;
  bottom: 35px;
  z-index: 1; */
`;

export const Img = styled.img`
  /* position: absolute; */
  /* z-index: -1; */
`;

export const Back = styled.div`
  width: 515px;
  height: 300px;
  background-color: ${C.theme.primary.light};
  position: absolute;
  top: -68px;
  left: -204px;
  z-index: -3;
`;

export const Lines = styled.div`
  position: absolute;
  top: -170px;
  left: -204px;
  z-index: -2;
`;

export const Right = styled.div`
  width: 45%;
`;

export const H2 = styled(T.H2)`
  font-weight: 600;
  margin-top: -50px;
`;

export const Hr = styled.hr`
  border-top: solid 2px ${C.theme.common.black};
  width: 105px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const P1 = styled(T.P1)`
  line-height: 28px;
  margin-top: 50px;
`;

export const H3 = styled(T.H3)`
  font-size: 24px;
  font-weight: 500;
  margin-top: 40px;
`;

export const P2 = styled(T.P2)`
  color: ${C.theme.text.sub};
`;
