import styled from "styled-components";
import * as C from "../../themes/ColorThemes/Styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 3;
`;

export const Pic = styled.div``;

export const Mode = styled.div`
  display: flex;
`;

export const Type = styled.div`
  color: ${(props) =>
    props.active ? C.theme.common.white : C.theme.primary.dark};
  background-color: ${(props) =>
    props.active ? C.theme.primary.dark : "transparent"};
  width: 80px;
  text-align: center;
  padding: 5px 10px 10px;
  border: solid 1px ${C.theme.primary.dark};
  cursor: default;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    cursor: ${(props) => (props.active ? "default" : "pointer")};
    color: ${C.theme.common.white};
  }
`;
