import { isFunction } from "lodash";
import React, {
  ComponentClass,
  ComponentType,
  Consumer,
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  ReactPortal,
} from "react";
import { ContextConsumer, ContextProvider, ForwardRef, Portal, typeOf } from "react-is";
import {
  ComponentTypeElement,
  ContextConsumerElement,
  ContextProviderElement,
  ForwardRefElement,
  MemoElement,
  UnwrapCustomizer,
  ValidElement,
} from "../../types";
import getElementName from "../get-element-name";
import isClassComponent from "../is-class-component";
import isComponentType from "../is-component-type";
import isMemoType from "../is-memo-type";
import toMandatoryUnwrap from "../to-mandatory-unwrap";

let contexts: Map<Consumer<any>, any>; // tslint:disable-line no-any

function getChildElement(element: ValidElement): ValidElement | ReactNode {
  let childElement: ValidElement | ReactNode;

  switch (true) {
    case isComponentType(element):
      const componentTypeElement = element as ComponentTypeElement;
      childElement = getChildComponentTypeElement(componentTypeElement.type, componentTypeElement.props);
      break;
    case isMemoType(element):
      const memoElement = element as MemoElement;
      const ChildComponent = memoElement.type.type;
      childElement = <ChildComponent {...memoElement.props} />;
      break;
    case typeOf(element) === ContextConsumer:
      const contextConsumerElement = element as ContextConsumerElement;
      const value = contexts.get(contextConsumerElement.type);
      childElement = contextConsumerElement.props.children(value);
      break;
    case typeOf(element) === ContextProvider:
      const contextProviderElement = element as ContextProviderElement;
      contexts.set(contextProviderElement.type._context.Consumer, contextProviderElement.props.value);
      childElement = contextProviderElement.props.children;
      break;
    case typeOf(element) === ForwardRef:
      const forwardRef = element as ForwardRefElement;
      childElement = forwardRef.type.render({ ...forwardRef.props }, null);
      break;
    case typeOf(element) === Portal:
      const portal = element as ReactPortal;
      childElement = portal.children;
      break;
    // no default
  }

  return childElement;
}

function getChildComponentTypeElement(element: ComponentType, props: PropsWithChildren<{}>) {
  let childElement: ValidElement | ReactNode;

  if (isClassComponent(element)) {
    const ClassComponent = element as ComponentClass;
    childElement = new ClassComponent({ ...props }).render();
  } else if (isFunction(element)) {
    const functionalComponent = element as FunctionComponent;
    childElement = functionalComponent({ ...props });
  }

  return childElement;
}

function unwrap(
  element: ReactNode,
  elementsToUnwrap: string[],
  unwrapCustomizer?: UnwrapCustomizer,
): ComponentTypeElement {
  const isComponent = isComponentType(element);
  const toUnwrap = toMandatoryUnwrap(element);

  if (!isComponent && !toUnwrap) {
    const message = `unwrap expected to receive a valid element, but received a ${String(typeOf(element))}`;
    throw new TypeError(message);
  }

  let elementToUnwrap: string | undefined;

  if (isComponent && !toUnwrap) {
    const componentTypeElement = element as ComponentTypeElement;
    elementToUnwrap = elementsToUnwrap.find(name => getElementName(componentTypeElement) === name);
    if (!elementToUnwrap) return componentTypeElement;
  }

  return unwrap((unwrapCustomizer || getChildElement)(element as ValidElement), elementsToUnwrap, unwrapCustomizer);
}

export default function unwrapElement(
  element: ReactNode,
  elementsToUnwrap: string[],
  unwrapCustomizer?: UnwrapCustomizer,
) {
  contexts = new Map();

  return {
    contexts,
    element: unwrap(element, elementsToUnwrap, unwrapCustomizer),
  };
}
