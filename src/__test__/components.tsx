import React, { Component, ComponentType, forwardRef, memo } from "react";
import { createPortal } from "react-dom";
import { ThemeContext, ThemeProvider, withTheme } from "styled-components";
import { StyledDiv } from "./styled";
import { ComponentProps } from "./types";

export class ClassComponent extends Component<ComponentProps> {
  public static displayName = "ClassComponent";

  // tslint:disable-next-line prefer-function-over-method
  public render() {
    return <FunctionComponent />;
  }
}

export const ContextComponent = () => (
  <ThemeContext.Provider value="dark">
    <ContextConsumerComponent />
  </ThemeContext.Provider>
);

ContextComponent.displayName = "ContextComponent";

export const ContextConsumerComponent = () => (
  <ThemeContext.Consumer>{value => <ClassComponent value={value} />}</ThemeContext.Consumer>
);

ContextConsumerComponent.displayName = "ContextConsumerComponent";

export const ContextProviderComponent = () => (
  <ThemeContext.Provider value="dark">
    <ClassComponent />
  </ThemeContext.Provider>
);

ContextProviderComponent.displayName = "ContextProviderComponent";

export const ForwardRefComponent = forwardRef<HTMLDivElement, ComponentProps>((props, ref) => (
  <ClassComponent {...props} innerRef={ref} />
));

ForwardRefComponent.displayName = "ForwardRefComponent";

export const FunctionComponent = () => <StyledDiv />;
FunctionComponent.displayName = "FunctionComponent";

export const MemoComponent = memo(FunctionComponent);
MemoComponent.displayName = "MemoComponent";

export const portal = createPortal(<ClassComponent />, document.createElement("div"));

export const PortalComponent = () => portal;
PortalComponent.displayName = "PortalComponent";

export const SCContextComponent = () => (
  <ThemeProvider theme={{ type: "light" }}>
    <WithThemeClassComponent />
  </ThemeProvider>
);

SCContextComponent.displayName = "SCContextComponent";

export const WithThemeClassComponent = withTheme<ComponentType<any>>(ClassComponent); // tslint:disable-line no-any
WithThemeClassComponent.displayName = "WithThemeClassComponent";

export const SerializeComponent = () => {
  return (
    <ClassComponent
      Component={FunctionComponent}
      callback={() => null}
      consumer={<ThemeContext.Consumer>{() => <div />}</ThemeContext.Consumer>}
      element={<FunctionComponent />}
      forwardRef={<ForwardRefComponent />}
      fragment={<></>}
      memo={<MemoComponent />}
      portal={portal}
      provider={<ThemeContext.Provider value="" />}
      renderProp={() => <FunctionComponent />}
      styled={StyledDiv}
    >
      <ForwardRefComponent />
      <FunctionComponent />
      <MemoComponent />
    </ClassComponent>
  );
};
