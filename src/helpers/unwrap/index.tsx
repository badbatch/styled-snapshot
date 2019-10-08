import { isArray, isFunction, isString } from "lodash";
import React, {
  ComponentClass,
  ComponentType,
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  ReactPortal,
} from "react";
import { ContextConsumer, ContextProvider, Element, ForwardRef, Fragment, Portal, typeOf } from "react-is";
import {
  ComponentTypeElement,
  ContextConsumerElement,
  ContextProviderElement,
  DomElement,
  ExtractedContexts,
  ForwardRefElement,
  FragmentElement,
  MemoElement,
  StyledComponentElement,
  StyledSnapshotConfig,
  ValidElement,
} from "../../types";
import extractContextValue from "../extract-context-value";
import filterOutIgnoredElements from "../filter-out-ignored-elements";
import getElementName from "../get-element-name";
import getExtractedContextValue from "../get-extracted-context-value";
import hasUnwrapDataAttribute from "../has-unwrap-data-attribute";
import isClassComponent from "../is-class-component";
import isComponentType from "../is-component-type";
import isMemoType from "../is-memo-type";
import isStyledComponent from "../is-styled-component";
import * as log from "../log";
import toMandatoryUnwrap from "../to-mandatory-unwrap";

let contexts: ExtractedContexts;

function getChildren(element: ValidElement, config: StyledSnapshotConfig): ValidElement | ReactNode {
  let children: ValidElement | ReactNode;

  switch (true) {
    case isStyledComponent(element):
      const styledComponentElement = element as StyledComponentElement;
      children = styledComponentElement.props.children;
      break;
    case isComponentType(element):
      const componentTypeElement = element as ComponentTypeElement;
      children = getComponentTypeElementChild(componentTypeElement.type, componentTypeElement.props);
      break;
    case isMemoType(element):
      const memoElement = element as MemoElement;
      const ChildComponent = memoElement.type.type;
      children = <ChildComponent {...memoElement.props} />;
      break;
    case typeOf(element) === ContextConsumer:
      const contextConsumerElement = element as ContextConsumerElement;
      children = contextConsumerElement.props.children(getExtractedContextValue(contexts, contextConsumerElement.type));
      break;
    case typeOf(element) === ContextProvider:
      const contextProviderElement = element as ContextProviderElement;

      extractContextValue(
        contexts,
        contextProviderElement.type._context.Consumer,
        contextProviderElement.props.value,
        config,
      );

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

function getComponentTypeElementChild(element: ComponentType, props: PropsWithChildren<{}>) {
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

function unwrapNode(node: ReactNode, config: StyledSnapshotConfig): ComponentTypeElement | StyledComponentElement {
  const { elementsToIgnore, elementsToUnwrap = [], unwrapCustomizer } = config;

  if (!node) {
    const message = `unwrap expected to receive an element, but received ${String(node)}`;
    log.error(message, node);
    throw new Error();
  }

  const filtered = isArray(node) ? filterOutIgnoredElements(node, elementsToIgnore) : [node];

  if (filtered.length > 1) {
    const message = `unwrap expected one element after filtering, but received ${filtered.length}`;
    log.error(message, filtered);
    throw new Error();
  }

  const [singleNode] = filtered;
  const isComponent = isComponentType(singleNode);
  const isStyled = isStyledComponent(singleNode);
  const toUnwrap = toMandatoryUnwrap(singleNode);
  const hasDataAttr = hasUnwrapDataAttribute(singleNode);

  if (!isComponent && !isStyled && !toUnwrap && !hasDataAttr) {
    const message = `unwrap expected to receive a valid element, but received a ${String(typeOf(singleNode))}`;
    log.error(message, singleNode);
    throw new Error();
  }

  let elementToUnwrap: string | undefined;

  if ((isComponent || isStyled) && !toUnwrap && !hasDataAttr) {
    const componentOrStyledElement = singleNode as ComponentTypeElement | StyledComponentElement;
    elementToUnwrap = elementsToUnwrap.find(name => getElementName(componentOrStyledElement) === name);
    if (!elementToUnwrap) return componentOrStyledElement;
  }

  log.info("element to unwrap:", singleNode);

  return unwrapNode((unwrapCustomizer || getChildren)(singleNode as ValidElement, config), config);
}

export default function unwrap(node: ReactNode, config: StyledSnapshotConfig = {}) {
  contexts = new Map();

  return {
    contexts,
    element: unwrapNode(node, config),
  };
}
