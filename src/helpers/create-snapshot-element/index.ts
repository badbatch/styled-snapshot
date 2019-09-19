import { ObjectMap } from "@repodog/types";
import { ReactElement, createElement } from "react";
import { isForwardRef } from "react-is";
import { isString } from "util";
import { ComponentTypeElement, ForwardRefElement } from "../../types";
import getElementName from "../get-element-name";
import isComponentType from "../is-component-type";

export default function createSnapshotElement(namePrefix: string, element: ReactElement) {
  const Component = (props: ObjectMap) => props.children;
  let name = "";

  if (isString(element.type)) {
    name = element.type;
  } else if (isComponentType(element) || isForwardRef(element)) {
    name = getElementName(element as ComponentTypeElement | ForwardRefElement);
  }

  if (name) {
    Component.displayName = `${namePrefix}(${name})`;
    return createElement(Component, element.props, element.props.children);
  }

  return Symbol(namePrefix);
}
