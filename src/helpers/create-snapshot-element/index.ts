import { PlainObject } from "@repodog/types";
import { isString } from "lodash";
import { ReactElement, createElement } from "react";
import { isForwardRef } from "react-is";
import { ComponentTypeElement, ForwardRefElement } from "../../types";
import getElementName from "../get-element-name";
import isComponentType from "../is-component-type";

export default function createSnapshotElement(element: ReactElement, namePrefix?: string) {
  const Component = (props: PlainObject) => props.children;
  let name = "";

  if (isString(element.type)) {
    name = element.type;
  } else if (isComponentType(element) || isForwardRef(element)) {
    name = getElementName(element as ComponentTypeElement | ForwardRefElement);
  }

  if (name) {
    Component.displayName = namePrefix ? `${namePrefix}(${name})` : name;
    return createElement(Component, element.props, element.props.children);
  }

  return Symbol(namePrefix);
}
