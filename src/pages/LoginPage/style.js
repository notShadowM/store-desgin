import styled from "styled-components";
import * as C from "../../themes/ColorThemes/Styled";

export const Container = styled.div`
  width: 900px;
  margin: auto;
  background-color: ${C.theme.primary.light};
  margin-top: 45px;
  /* margin-bottom: 100px; */
  padding: 40px 80px;
  box-shadow: 5px 10px 8px 10px #888888;
  position: relative;
  overflow: hidden;
`;

export const Line1 = styled.div`
  position: absolute;
  /* bottom: -294px; */
  bottom: -0px;
  right: -80px;
  z-index: 1;
`;
