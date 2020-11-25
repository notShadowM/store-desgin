import styled, { css } from "styled-components";
import * as C from "../../themes/ColorThemes/Styled";
import * as T from "../../themes/Typography";

export const Wrapper = styled.div`
  margin-top: 112px;
  width: 100%;
  background-color: ${C.theme.primary.light};
  padding-top: 70px;
  padding-bottom: 50px;
  position: relative;
  z-index: 0;
  margin-bottom: 100px;
`;

// export const Background = styled.div`
//   width: 100%;
//   background-color: ${C.theme.primary.light};
//   position: relative;
//   z-index: 0;
//   margin-bottom: 100px;
// `;

export const TextWrapper = styled.div`
  width: 480px;
  height: 387.6px;
  background-color: transparent;
  margin-left: 380px;
  margin-right: 250px;
  margin-bottom: 50px;
  position: relative;
`;

export const Hr = styled.hr`
  border-top: solid 2px ${C.theme.common.black};
  width: 95px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Pbold = styled(T.Pbold)`
  margin-top: 10px;
`;

export const Buttons = styled.div`
  width: 310px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const Arrows = styled.div`
  width: 110px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 30px;
  bottom: -25px;
`;

export const Lines = styled.div`
  position: absolute;
  z-index: -2;
  top: -140px;
  right: -212px;
`;

export const Picture = styled.div`
  position: absolute;
  left: -380px;
  bottom: -175px;
  z-index: 1;
`;

export const Img = styled.img`
  /* position: absolute; */
  /* z-index: -1; */
`;
