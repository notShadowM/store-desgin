import styled from "styled-components";
import * as C from "../../themes/ColorThemes/Styled";
import * as T from "../../themes/Typography";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 150px;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
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
