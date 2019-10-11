import { ObjectMap } from "@repodog/types";
import PropTypes from "prop-types";
import React, { Component, ComponentType, forwardRef, memo } from "react";
import { createPortal } from "react-dom";
import styled, { ThemeContext, ThemeProvider, withTheme } from "styled-components";
import { StyledDiv, StyledItem, StyledList } from "./styled";
import { ComponentProps } from "./types";

export class ClassComponent extends Component<ComponentProps> {
  public static displayName = "ClassComponent";

  public static propTypes = {
    Component: PropTypes.elementType,
  };

  // tslint:disable-next-line prefer-function-over-method
  public render() {
    return this.props.children;
  }
}

export const ContextComponent = () => (
  <ThemeContext.Provider value="dark">
    <ContextConsumerComponent />
  </ThemeContext.Provider>
);

ContextComponent.displayName = "ContextComponent";

export const ContextConsumerComponent = () => (
  <ThemeContext.Consumer>
    {value => (
      <ClassComponent value={value}>
        <FunctionComponent />
      </ClassComponent>
    )}
  </ThemeContext.Consumer>
);

ContextConsumerComponent.displayName = "ContextConsumerComponent";

export const ContextProviderComponent = () => (
  <ThemeContext.Provider value="dark">
    <ClassComponent>
      <FunctionComponent />
    </ClassComponent>
  </ThemeContext.Provider>
);

ContextProviderComponent.displayName = "ContextProviderComponent";

export const ForwardRefComponent = forwardRef<HTMLDivElement, ComponentProps>((props, ref) => (
  <ClassComponent {...props} innerRef={ref}>
    <FunctionComponent />
  </ClassComponent>
));

ForwardRefComponent.displayName = "ForwardRefComponent";

export const FunctionComponent = (props: ComponentProps) => <StyledDiv {...props} />;
FunctionComponent.displayName = "FunctionComponent";

FunctionComponent.propTypes = {
  Component: PropTypes.elementType,
};

export const MemoComponent = memo(FunctionComponent);
MemoComponent.displayName = "MemoComponent";

export const portal = createPortal(
  <ClassComponent>
    <FunctionComponent />
  </ClassComponent>,
  document.createElement("div"),
);

export const PortalComponent = () => portal;
PortalComponent.displayName = "PortalComponent";

export const SCComponent = () => (
  <StyledDiv>
    <ClassComponent>
      <FunctionComponent />
    </ClassComponent>
    <FunctionComponent />
    <StyledList>
      <StyledItem>One</StyledItem>
      <StyledItem>Two</StyledItem>
      <StyledItem>Three</StyledItem>
      <StyledItem>Four</StyledItem>
    </StyledList>
  </StyledDiv>
);

SCComponent.displayName = "SCComponent";

export const SCContextComponent = () => (
  <ThemeProvider theme={{ type: "light" }}>
    <WithThemeClassComponent />
  </ThemeProvider>
);

SCContextComponent.displayName = "SCContextComponent";

export const WithThemeClassComponent = withTheme<ComponentType<any>>(ClassComponent); // tslint:disable-line no-any

export const SerializeComponent = (props: ObjectMap = {}) => {
  return (
    <ClassComponent
      Component={FunctionComponent}
      callback={() => null}
      consumer={<ThemeContext.Consumer>{() => <div />}</ThemeContext.Consumer>}
      decorator={<WithThemeClassComponent />}
      element={<FunctionComponent {...props} />}
      forwardRef={<ForwardRefComponent />}
      fragment={<></>}
      memo={<MemoComponent />}
      portal={portal}
      provider={<ThemeContext.Provider value="" />}
      renderProp={() => <FunctionComponent {...props} renderProp={subProps => <div {...subProps} />} />}
      styled={StyledDiv}
      styledFunctionComponent={<StyledFunctionComponent />}
      styledStyledComponent={<StyledStyledComponent />}
    >
      <ForwardRefComponent />
      <FunctionComponent {...props} />
      <MemoComponent />
      <StyledFunctionComponent />
      <StyledList>
        {[1, 2, 3, 4].map(id => (
          <StyledStyledComponent key={id} />
        ))}
      </StyledList>
    </ClassComponent>
  );
};

SerializeComponent.displayName = "SerializeComponent";

export const StyledFunctionComponent = styled(FunctionComponent)``;

export const StyledStyledComponent = styled(StyledDiv)``;
