import { Func } from "@repodog/types";
import { ComponentType } from "enzyme";
import { ReactElement, ReactPortal, Ref } from "react";
import { ContextConsumerElement, ContextProviderElement, ForwardRefElement, MemoElement } from "../types";

export interface ComponentProps {
  callback?: Func;
  Component?: ComponentType<{}>;
  consumer?: ContextConsumerElement;
  element?: ReactElement;
  forwardRef?: ForwardRefElement;
  innerRef?: Ref<HTMLDivElement>;
  memo?: MemoElement;
  portal?: ReactPortal;
  provider?: ContextProviderElement;
  renderProp?: () => ReactElement;
  styled?: ComponentType<{}>;
  value?: string;
}
