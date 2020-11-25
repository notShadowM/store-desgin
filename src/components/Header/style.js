import styled from "styled-components";
import * as C from "../../themes/ColorThemes/Styled";
import { Navitems as Nav } from "../../themes/Typography";

export const Wrapper = styled.nav`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
`;

export const Logo = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const Navs = styled.div`
  width: 445px;
  display: flex;
  justify-content: space-between;
`;

export const Navitems = styled(Nav)`
  transition: background-color 0.2s ease-in-out;
  transition: padding 0.2s;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${C.theme.common.white};
    padding: 4px;
    transition: background-color 0.2s ease-in-out;
    transition: padding 0.2s;
  }
`;

export const Search = styled.div`
  width: 40px;
  padding: 3px;
  border: dotted 0.5px transparent;
  transition: background-color 0.5s ease;
  transition: border-color 0.5s ease;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    padding: 3px;
    border-color: #000;
    background-color: ${C.theme.common.white};
    transition: background-color 0.5s ease;
    /* padding: 4px; */
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
`;

export const Login = styled.div`
  width: 80px;
  margin-top: 3px;
  display: flex;
  justify-content: space-between;
  box-sizing: content-box;
  padding: 2px;
  transition: background-color 0.5s ease;
  transition: box-shadow 0.5s;
  &:hover {
    cursor: pointer;
    border: dashed 0.5px #000;
    background-color: ${C.theme.common.white};
    box-shadow: 2px 2px 4px #000000;
    transition: background-color 0.5s ease;
    transition: box-shadow 0.5s;
  }
`;
export const Shopping = styled.div`
  height: 37px;
  background-color: ${C.theme.primary.light};
  border-radius: 50%;
  padding: 7px 9px 5px;
  transition: background-color 0.5s ease;
  &:hover {
    cursor: pointer;
    background-color: ${C.theme.primary.main};
    transition: background-color 0.5s ease;
  }
`;
