import styled from "styled-components";
import * as C from "../../themes/ColorThemes/Styled";
import * as T from "../../themes/Typography";
import * as B from "../Button/style";

export const Wrapper = styled.div`
  margin-top: 130px;
  width: 100%;
`;

export const ColumnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div`
  width: 30%;
`;

export const H2 = styled(T.H2)`
  font-weight: 400;
  width: 60%;
  &:hover {
    cursor: pointer;
  }
`;

export const Hr = styled.hr`
  border-top: solid 2px ${C.theme.common.black};
  width: 58px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const CardWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`;

export const Picture = styled.div`
  background-color: ${C.theme.primary.light};
  width: 131px;
  height: 131px;
  position: relative;
`;

export const Img = styled.img`
  width: 68px;
  height: 100px;
  position: absolute;
  right: 30px;
  top: 15px;
`;

export const H4 = styled(T.H4)`
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;
  letter-spacing: 0.02em;
  margin-top: 5px;
`;

export const TextWrapper = styled.div`
  width: 55%;
`;

export const LastLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-top: 25px;
`;

export const LongHR = styled.hr`
  border-top: solid 0.3px rgb(153, 153, 153, 0.5);
  width: 390px;
  height: 0px;
  margin-top: 26px;
`;

export const Button = styled(B.Button)`
  width: 272px;
  height: 58px;
  padding-top: 15px;
  /* margin-top: 60px; */
  /* margin-bottom: 60px; */
  border: Solid 1px ${C.theme.primary.dark};
`;

export const Pb = styled(T.P2)`
  font-weight: 400;
  font-size: 20px;
  line-height: 34.12px;
  letter-spacing: 0.03em;
  color: ${C.theme.text.skeletonButtons};
  margin-top: -5px;
`;
