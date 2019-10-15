import styled, { FlattenInterpolation, ThemeProps, css } from "styled-components";
import { ComponentProps } from "./types";

export const StyledDiv = styled.div<ComponentProps>`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  position: relative;
`;

export const listStyles = css`
  ${props => (props.theme ? "display: block" : "display: inline")};
  padding: ${props => props.theme && "24px"};
`;

// tslint:disable-next-line no-any
export const StyledList = styled.ul<{ css?: FlattenInterpolation<ThemeProps<any>> }>`
  margin: 0;
  padding: 0;
  ${props => props.css};
`;

const itemStyles = css`
  ${props => (props.theme ? "position: relative" : "position: absolute")};
  padding: ${props => props.theme && "12px"};
`;

export const StyledItem = styled.li`
  margin-left: 12px;
  ${() => itemStyles};

  &:last-child {
    margin-left: 0;
  }
`;
