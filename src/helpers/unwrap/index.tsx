import { isFunction, isString } from "lodash";
import React, {
  ComponentClass,
  ComponentType,
  Consumer,
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  ReactPortal,
} from "react";
import { ContextConsumer, ContextProvider, Element, ForwardRef, Fragment, Portal, typeOf } from "react-is";
import { isArray } from "util";
import {
  ComponentTypeElement,
  ContextConsumerElement,
  ContextProviderElement,
  DomElement,
  ForwardRefElement,
  FragmentElement,
  MemoElement,
  StyledSnapshotConfig,
  ValidElement,
} from "../../types";
import filterOutIgnoredElements from "../filter-out-ignored-elements";
import getElementName from "../get-element-name";
import hasUnwrapDataAttribute from "../has-unwrap-data-attribute";
import isClassComponent from "../is-class-component";
import isComponentType from "../is-component-type";
import isMemoType from "../is-memo-type";
import toMandatoryUnwrap from "../to-mandatory-unwrap";

let contexts: Map<Consumer<any>, any>; // tslint:disable-line no-any

function getChildren(element: ValidElement): ValidElement | ReactNode {
  let children: ValidElement | ReactNode;

  switch (true) {
    case isComponentType(element):
      const componentTypeElement = element as ComponentTypeElement;
      children = getChildComponentTypeElement(componentTypeElement.type, componentTypeElement.props);
      break;
    case isMemoType(element):
      const memoElement = element as MemoElement;
      const ChildComponent = memoElement.type.type;
      children = <ChildComponent {...memoElement.props} />;
      break;
    case typeOf(element) === ContextConsumer:
      const contextConsumerElement = element as ContextConsumerElement;
      const value = contexts.get(contextConsumerElement.type);
      children = contextConsumerElement.props.children(value);
      break;
    case typeOf(element) === ContextProvider:
      const contextProviderElement = element as ContextProviderElement;
      contexts.set(contextProviderElement.type._context.Consumer, contextProviderElement.props.value);
      children = contextProviderElement.props.children;
      break;
    case typeOf(element) === ForwardRef:
      const forwardRef = element as ForwardRefElement;
      children = forwardRef.type.render({ ...forwardRef.props }, null);
      break;
    case typeOf(element) === Portal:
      const portal = element as ReactPortal;
      children = portal.children;
      break;
    case typeOf(element) === Fragment:
      const fragment = element as FragmentElement;
      children = fragment.props.children;
      break;
    case typeOf(element) === Element && isString(element.type):
      const domElement = element as DomElement;
      children = domElement.props.children;
      break;
    // no default
  }

  return children;
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

function unwrapNode(node: ReactNode, config: StyledSnapshotConfig): ComponentTypeElement {
  const { elementsToIgnore, elementsToUnwrap = [], unwrapCustomizer } = config;
  const filtered = isArray(node) ? filterOutIgnoredElements(node, elementsToIgnore) : [node];

  if (filtered.length > 1) {
    const message = `unwrap expected one element after filtering, but received ${filtered.length}`;
    console.error(message, filtered); // tslint:disable-line no-console
    throw new Error();
  }

  const [singleNode] = filtered;
  const isComponent = isComponentType(singleNode);
  const toUnwrap = toMandatoryUnwrap(singleNode);
  const hasDataAttr = hasUnwrapDataAttribute(singleNode);

  if (!isComponent && !toUnwrap && !hasDataAttr) {
    const message = `unwrap expected to receive a valid element, but received a ${String(typeOf(singleNode))}`;
    console.error(message, singleNode); // tslint:disable-line no-console
    throw new Error();
  }

  let elementToUnwrap: string | undefined;

  if (isComponent && !toUnwrap && !hasDataAttr) {
    const componentTypeElement = singleNode as ComponentTypeElement;
    elementToUnwrap = elementsToUnwrap.find(name => getElementName(componentTypeElement) === name);
    if (!elementToUnwrap) return componentTypeElement;
  }

  return unwrapNode((unwrapCustomizer || getChildren)(singleNode as ValidElement), config);
}

export default function unwrap(node: ReactNode, config: StyledSnapshotConfig) {
  contexts = new Map();

  return {
    contexts,
    element: unwrapNode(node, config),
  };
}
