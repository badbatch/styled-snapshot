import { get } from "lodash";
import { ReactNode } from "react";
import { isForwardRef } from "react-is";
import { IGNORE_DATA_ATTR } from "../../constants";
import { ComponentTypeElement, ForwardRefElement } from "../../types";
import getElementName from "../get-element-name";
import isComponentType from "../is-component-type";

export default function filterOutIgnoredElements(nodes: ReactNode[], elementsToIgnore: string[] = []) {
  return nodes.filter(node => {
    if (!node) return false;

    const elementToIgnore = elementsToIgnore.find(name => {
      return (
        (isComponentType(node) || isForwardRef(node)) &&
        getElementName(node as ComponentTypeElement | ForwardRefElement) === name
      );
    });

    return !elementToIgnore && !get(node, ["props", IGNORE_DATA_ATTR], false);
  });
}
