import { Func } from "@repodog/types";
import { ComponentType } from "enzyme";
import { ReactElement, ReactFragment, ReactPortal, Ref } from "react";
import { FlattenInterpolation, ThemeProps } from "styled-components";
import { ContextConsumerElement, ContextProviderElement, ForwardRefElement, MemoElement } from "../types";

export interface ComponentProps {
  callback?: Func;
  Component?: ComponentType<{}>;
  consumer?: ContextConsumerElement;
  css?: FlattenInterpolation<ThemeProps<any>>; // tslint:disable-line no-any
  decorator?: ForwardRefElement;
  element?: ReactElement;
  forwardRef?: ForwardRefElement;
  fragment?: ReactFragment;
  innerRef?: Ref<HTMLDivElement>;
  memo?: MemoElement;
  portal?: ReactPortal;
  provider?: ContextProviderElement;
  renderProp?: (...args: any[]) => ReactElement;
  styled?: ComponentType<{}>;
  styledFunctionComponent?: ReactElement;
  styledStyledComponent?: ReactElement;
  styles?: FlattenInterpolation<ThemeProps<any>>; // tslint:disable-line no-any
  value?: string;
}
