import styled from "styled-components";
import * as C from "../../themes/ColorThemes/Styled";
import * as T from "../../themes/Typography";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${C.theme.primary.main};
  margin-top: 80px;
  position: absolute;
  left: 0;
`;

export const Wrapper1 = styled.div`
  width: 60%;
  height: 273px;
  margin: 0 auto;
`;

export const FullLine = styled.div`
  margin: 30px auto;
  /* background-color: #000; */
  display: flex;
  justify-content: space-between;
`;

export const Picture = styled.div`
  /* position: absolute; */
  /* left: -380px;
  bottom: 35px;
  z-index: 1; */
  &:hover {
    cursor: pointer;
  }
`;

export const Img = styled.img`
  /* position: absolute; */
  /* z-index: -1; */
`;

export const Wrapper2 = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: ${C.theme.primary.dark};
  display: flex;
  justify-content: space-between;
  padding: 45px 15% 70px 15%;
`;

export const Colomun = styled.div`
  width: 22%;
`;

export const SmallHeader = styled(T.FooterPbolder)`
  line-height: 34.12px;
  letter-spacing: 0.02em;
  margin-top: 25px;
  margin-bottom: 6px;
`;

export const FooterP = styled(T.FooterP)`
  line-height: 27.3px;
`;

export const ColomunCells = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const Cell1 = styled.div`
  width: 50%;
`;

export const Cell2 = styled.div`
  width: 50%;
`;

export const SmallHeader2 = styled(SmallHeader)`
  line-height: 28px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const Media = styled(ColomunCells)`
  width: 80%;
`;

export const FooterH = styled(T.FooterH)``;
export const FooterP1 = styled(T.FooterP)`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Hr = styled.hr`
  border-top: solid 1px ${C.theme.common.white};
  width: 55px;
  margin-top: 0px;
  margin-bottom: 20px;
`;
