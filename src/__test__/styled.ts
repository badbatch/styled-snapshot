import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  position: relative;
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
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
