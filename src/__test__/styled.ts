import styled from "styled-components";

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

export const StyledItem = styled.li`
  margin-left: 12px;

  &:last-child {
    margin-left: 0;
  }
`;
