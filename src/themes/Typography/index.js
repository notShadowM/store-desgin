import styled, { css } from "styled-components";
import * as T from "../ColorThemes/Styled";

const fontFaces = css`
  @import url("https://fonts.googleapis.com/css2?family=Taviraj&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
`;

export const Navitems = styled.li`
  font-family: Taviraj;
  font-weight: 400;
  font-size: ${(props) => (props.size ? props.size : "20px")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "34.12px")};
  font-style: normal;
  color: ${T.theme.text.main};
  letter-spacing: 0.02em;
`;

export const H1 = styled.h1`
  font-family: Taviraj;
  font-weight: 400;
  font-size: 60px;
  line-height: 80px;
  font-style: normal;
  color: ${T.theme.text.main};
  letter-spacing: 0.02em;
`;

export const H2 = styled.h2`
  font-family: Taviraj;
  font-weight: ${(props) => (props.weight ? props.weight : "500")};
  font-size: 36px;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "40px")};
  font-style: normal;
  color: ${T.theme.text.main};
  letter-spacing: 0.02em;
`;

export const H3 = styled.h3`
  font-family: Taviraj;
  font-weight: ${(props) => (props.bolder ? "600" : "400")};
  font-size: 28px;
  line-height: 32px;
  font-style: normal;
  color: ${T.theme.text.main};
  letter-spacing: 0.03em;
`;

export const H4 = styled.h4`
  font-family: Taviraj;
  font-weight: ${(props) => (props.bolder ? "500" : "400")};
  font-size: 24px;
  line-height: 32px;
  font-style: normal;
  color: ${(props) =>
    props.color ? T.theme.text[props.color] : T.theme.text.main};
  letter-spacing: 0.03em;
`;

export const P1 = styled.p`
  font-family: Nunito;
  font-weight: 400;
  font-size: 16px;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "21.82px")};
  font-style: normal;
  color: ${(props) =>
    props.color ? T.theme.text[props.color] : T.theme.text.main};
  letter-spacing: 0.03em;
`;

export const P2 = styled.p`
  font-family: Taviraj;
  font-weight: 300;
  font-size: 16px;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "32px")};
  font-style: normal;
  color: ${(props) =>
    props.color ? T.theme.text[props.color] : T.theme.text.main};
  letter-spacing: 0.03em;
`;

export const Pbold = styled.p`
  font-family: Taviraj;
  font-weight: 600;
  font-size: 16px;
  line-height: 27.3px;
  font-style: normal;
  color: ${T.theme.text.main};
  border-bottom: 1px solid ${T.theme.text.main};
  display: inline-block;
  letter-spacing: 0.03em;
`;

export const footerH = styled.h4`
  font-family: Taviraj;
  font-weight: 600;
  font-size: 24px;
  line-height: 40.94px;
  font-style: normal;
  color: ${T.theme.text.footer};
  letter-spacing: 0.03em;
`;

export const footerP = styled(P1)`
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "32px")};
  color: ${T.theme.text.footer};
  letter-spacing: 0.03em;
`;

export const footerPbolder = styled.p`
  font-family: Taviraj;
  font-weight: 500;
  font-size: 20px;
  line-height: ${(props) => props.lineHeight};
  font-style: normal;
  color: ${T.theme.text.footer};
  letter-spacing: 0.03em;
`;
