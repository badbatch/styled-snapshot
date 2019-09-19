import { Func } from "@repodog/types";
import { ComponentType } from "enzyme";
import { ReactElement, ReactFragment, ReactPortal, Ref } from "react";
import { ContextConsumerElement, ContextProviderElement, ForwardRefElement, MemoElement } from "../types";

export interface ComponentProps {
  callback?: Func;
  Component?: ComponentType<{}>;
  consumer?: ContextConsumerElement;
  element?: ReactElement;
  forwardRef?: ForwardRefElement;
  fragment?: ReactFragment;
  innerRef?: Ref<HTMLDivElement>;
  memo?: MemoElement;
  portal?: ReactPortal;
  provider?: ContextProviderElement;
  renderProp?: () => ReactElement;
  styled?: ComponentType<{}>;
  value?: string;
}