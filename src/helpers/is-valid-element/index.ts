import { ReactNode } from "react";
import isComponentType from "../is-component-type";
import isDomElement from "../is-dom-element";
import isStyledComponent from "../is-styled-component";

export default function isValidElement(node: ReactNode) {
  return isDomElement(node) || isComponentType(node) || isStyledComponent(node);
}
