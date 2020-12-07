import styled from "styled-components";
import * as T from "../../themes/Typography";
import * as C from "../../themes/ColorThemes/Styled";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 120px;
`;

export const Navbar = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-left: 35px;
`;

export const NavItem = styled(T.H3)`
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: ${(props) => (props.active ? C.theme.primary.dark : C.theme.text.sub)};
  border-bottom: ${(props) => (props.active ? "solid 1px " : "none")};
  padding-bottom: 5px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${C.theme.primary.dark};
    cursor: pointer;
    transition: color 0.2s ease-in-out;
  }
`;

export const Paragraphs = styled.div`
  margin-top: 10px;
  border-top: solid 0.3px ${C.theme.text.sub};
  padding-left: 35px;
  padding-right: 35px;
`;

export const Para = styled.div`
  margin-top: 30px;
  margin-bottom: 35px;
`;

export const H4 = styled(T.H4)`
  letter-spacing: 0.02em;
  margin-bottom: 10px;
`;

export const P = styled(T.P1)`
  letter-spacing: 0.02em;
  line-height: 28px;
  color: ${C.theme.text.third};
`;

export const Pic = styled.div`
  width: 600px;
  margin: 0 auto;
`;

export const Img = styled.img`
  width: 600px;
`;
